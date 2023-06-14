// ==UserScript==
// @name                Autoclear ChatGPT History
// @name:zh-CN          自动清除 ChatGPT 历史记录
// @name:zh-SG          自动清除 ChatGPT 历史记录
// @name:zh-TW          自動清除 ChatGPT 歷史記錄
// @name:zh-HK          自動清除 ChatGPT 歷史記錄
// @name:ja             ChatGPT 履歴の自動消去
// @name:ko             ChatGPT 기록 자동 삭제
// @name:ru             Автоочистка Истории ChatGPT
// @name:de             ChatGPT-Verlauf Automatisch Löschen
// @name:es             Borrar Automáticamente el Historial de ChatGPT
// @name:fr             Effacement Automatique de L'Historique ChatGPT
// @name:it             Cancella Automaticamente Cronologia ChatGPT
// @version             2023.6.13.2
// @description         Auto-clears chat history when visiting chat.openai.com
// @author              Adam Lui (刘展鹏), Tripp1e & Xiao-Ying Yo (小影哟)
// @namespace           https://github.com/adamlui
// @namespace           https://github.com/Tripp1e
// @namespace           https://github.com/XiaoYingYo
// @description:zh-CN   访问 chat.openai.com 时自动清除聊天记录
// @description:zh-SG   访问 chat.openai.com 时自动清除聊天记录
// @description:zh-TW   訪問 chat.openai.com 時自動清除聊天記錄
// @description:zh-HK   訪問 chat.openai.com 時自動清除聊天記錄
// @description:ja      chat.openai.com にアクセスすると、チャット履歴が自動的に消去されます
// @description:ko      chat.openai.com 방문 시 채팅 기록 자동 삭제
// @description:ru      Автоматически очищает историю чата при посещении chat.openai.com
// @description:de      Löscht den Chat-Verlauf automatisch, wenn Sie chat.openai.com besuchen
// @description:es      Borra automáticamente el historial de chat al visitar chat.openai.com
// @description:fr      Efface automatiquement l'historique des discussions lors de la visite de chat.openai.com
// @description:it      Cancella automaticamente la cronologia chat quando visiti chat.openai.com
// @license             MIT
// @icon                https://raw.githubusercontent.com/adamlui/userscripts/master/chatgpt/media/icons/openai-favicon48.png
// @icon64              https://raw.githubusercontent.com/adamlui/userscripts/master/chatgpt/media/icons/openai-favicon64.png
// @compatible          chrome
// @compatible          edge
// @compatible          firefox
// @compatible          opera
// @compatible          brave
// @compatible          vivaldi
// @compatible          librewolf
// @compatible          ghost
// @compatible          qq
// @match               https://chat.openai.com/*
// @run-at              document-end
// @require             https://cdn.jsdelivr.net/gh/chatgptjs/chatgpt.js@f855a11607839fbc55273db604d167b503434598/dist/chatgpt-1.9.1.min.js
// @connect             raw.githubusercontent.com
// @connect             greasyfork.org
// @grant               GM_setValue
// @grant               GM_getValue
// @grant               GM_registerMenuCommand
// @grant               GM_unregisterMenuCommand
// @grant               GM.xmlHttpRequest
// @noframes
// @updateURL           https://greasyfork.org/scripts/460805/code/autoclear-chatgpt-history.meta.js
// @downloadURL         https://greasyfork.org/scripts/460805/code/autoclear-chatgpt-history.user.js
// @homepageURL         https://github.com/adamlui/autoclear-chatgpt-history
// @supportURL          https://github.com/adamlui/autoclear-chatgpt-history/issues
// ==/UserScript==

// NOTE: This script relies on the powerful chatgpt.js library @ https://chatgpt.js.org (c) 2023 KudoAI & contributors under the MIT license.

(async () => {

    // Initialize settings
    var appSymbol = '🕶️', configPrefix = 'chatGPTac_'
    var config = { userLanguage: navigator.languages[0] || navigator.language || '' }
    loadSetting('autoclear', 'buttonHidden', 'lastCheckTime', 'notifHidden', 'skipNextUpdate', 'skippedVer', 'toggleHidden')
    config.isActive = config.autoclear

    // Define messages
    var msgsLoaded = new Promise(resolve => {
        var msgHostDir = 'https://raw.githubusercontent.com/adamlui/autoclear-chatgpt-history/main/greasemonkey/_locales/'
        var msgLocaleDir = ( config.userLanguage ? config.userLanguage.replace('-', '_') : 'en' ) + '/'
        var msgHref = msgHostDir + msgLocaleDir + 'messages.json' // build src link
        var msgXHRtries = 0
        GM.xmlHttpRequest({ method: 'GET', url: msgHref, onload: onLoad })
        function onLoad(response) {
            try { // to return localized messages.json
                var messages = new Proxy(JSON.parse(response.responseText), {
                    get(target, prop) { // remove need to ref nested keys
                        if (typeof target[prop] === 'object' && target[prop] !== null && 'message' in target[prop]) {
                            return target[prop].message
                }}}) ; resolve(messages)
            } catch (error) { // if 404
                msgXHRtries++ ; if (msgXHRtries == 3) return // try up to 3X (original/region-stripped/EN) only
                msgHref = config.userLanguage.includes('-') && msgXHRtries == 1 ? // if regional lang on 1st try...
                    msgHref.replace(/(.*)_.*(\/.*)/, '$1$2') // ...strip region before retrying
                        : ( msgHostDir + 'en/messages.json' ) // else use default English messages
                GM.xmlHttpRequest({ method: 'GET', url: msgHref, onload: onLoad })
            }
        }
    }) ; var messages = await msgsLoaded

    // Init/register menu
    var menuIDs = [], state = { symbol: ['✔️', '❌'], word: ['ON', 'OFF'] } // initialize menu vars
    registerMenu() // create browser toolbar menu

    // Check for updates (1x/72h)
    if (!config.lastCheckTime || Date.now() - config.lastCheckTime > 172800000) checkForUpdates()

    // Auto-clear chats if activated // 自动清除聊天是否激活
    await chatgpt.isLoaded()
    setTimeout(() => { if (config.autoclear) chatgpt.clearChats() }, 250)

    // Notify of mode if enabled
    if (!config.notifHidden) notify(messages.mode_autoClear + ': ON')

    // Stylize/insert toggle switch
    var switchStyle = document.createElement('style')
    switchStyle.innerHTML = `/* Stylize switch */
        .switch { position:absolute ; left:208px ; width:34px ; height:18px }
        .switch input { opacity:0 ; width:0 ; height:0 } /* hide checkbox */
        .slider { position:absolute ; cursor:pointer ; top:0 ; left:0 ; right:0 ; bottom:0 ; background-color:#ccc ; -webkit-transition:.4s ; transition:.4s ; border-radius:28px }
        .slider:before { position:absolute ; content:"" ; height:14px ; width:14px ; left:3px; bottom:2px ; background-color:white ; -webkit-transition:.4s ; transition:.4s ; border-radius:28px }

        /* Position/color ON-state */
        input:checked { position:absolute ; right:3px }
        input:checked + .slider { background-color:#42B4BF }
        input:checked + .slider:before {
            -webkit-transform: translateX(14px) translateY(1px) ;
            -ms-transform: translateX(14px) translateY(1px) ;
            transform: translateX(14px) }`
    document.head.appendChild(switchStyle)

    // Create toggle label, add listener/max-height/classes/HTML
    var toggleLabel = document.createElement('div') // create label div
    toggleLabel.addEventListener('click', () => {
        var toggleInput = document.querySelector('#autoClearToggle')
        toggleInput.click()
        setTimeout(updateToggleHTML, 200) // sync label change w/ switch movement
        config.autoclear = toggleInput.checked
        for (var id of menuIDs) { GM_unregisterMenuCommand(id) } registerMenu() // refresh menu
        if (config.autoclear && !config.isActive) {
            setTimeout(chatgpt.clearChats, 250) ; config.isActive = true
            if (!config.notifHidden) notify(messages.mode_autoClear + ': ON')
        } else if (!config.autoclear && config.isActive) {
            config.isActive = false
            if (!config.notifHidden) notify(messages.mode_autoClear + ': OFF')
        } saveSetting('autoclear', config.autoclear)
    })
    for (var navLink of document.querySelectorAll('nav[aria-label="Chat history"] a')) { // inspect sidebar for classes to borrow
        if (navLink.text.match(/(new|clear) chat/i)) { // focus on new/clear chat button
            toggleLabel.setAttribute('class', navLink.classList) // borrow link classes
            navLink.parentNode.style.margin = '2px 0' // add v-margins
            break // stop looping since class assignment is done
    }}
    toggleLabel.style.maxHeight = '44px' // prevent flex overgrowth
    toggleLabel.style.margin = '2px 0' // add v-margins
    updateToggleHTML()

    // Insert full toggle on page load + during navigation // 在导航期间插入页面加载 + 的完整切换
    insertToggle()
    var nodeObserver = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            if (mutation.type === 'childList' && mutation.addedNodes.length) {
                insertToggle()
    }})}) ; nodeObserver.observe(document.documentElement, { childList: true, subtree: true })

    // Define SCRIPT functions

    function registerMenu() {
        menuIDs = [] // empty to store newly registered cmds for removal while preserving order
        var stateSeparator = getUserscriptManager() === 'Tampermonkey' ? ' — ' : ': '

        // Add command to toggle auto-clear
        var acLabel = state.symbol[+!config.autoclear] + ' ' + messages.menuLabel_autoClear
                    + stateSeparator + state.word[+!config.autoclear]
        menuIDs.push(GM_registerMenuCommand(acLabel, function() {
            document.querySelector('#autoClearToggle').click()
        }))

        // Add 'Toggle Visibility' command
        var tvLabel = state.symbol[+config.toggleHidden] + ' ' + messages.menuLabel_toggleVis
                    + stateSeparator + state.word[+config.toggleHidden]
        menuIDs.push(GM_registerMenuCommand(tvLabel, function() {
            saveSetting('toggleHidden', !config.toggleHidden)
            toggleLabel.style.display = config.toggleHidden ? 'none' : 'flex' // toggle visibility
            if (!config.notifHidden) {
                notify(messages.menuLabel_toggleVis + ': '+ state.word[+config.toggleHidden])
            } for (var id of menuIDs) { GM_unregisterMenuCommand(id) } registerMenu() // refresh menu
        }))

        // Add command to show notifications when changing settings/modes
        var mnLabel = state.symbol[+config.notifHidden] + ' ' + messages.menuLabel_modeNotifs
                    + stateSeparator + state.word[+config.notifHidden]
        menuIDs.push(GM_registerMenuCommand(mnLabel, function() {
            saveSetting('notifHidden', !config.notifHidden)
            notify(messages.menuLabel_modeNotifs + ': ' + state.word[+config.notifHidden])
            for (var id of menuIDs) { GM_unregisterMenuCommand(id) } registerMenu() // refresh menu
        }))

        // Add command to check for updates
        var ucLabel = '🚀 Check for Updates'
        menuIDs.push(GM_registerMenuCommand(ucLabel, function() { checkForUpdates.fromMenu = true ; checkForUpdates() }))
    }

    function getUserscriptManager() { try { return GM_info.scriptHandler } catch (error) { return 'other' }}

    function loadSetting(...keys) {
        keys.forEach(key => {
            config[key] = GM_getValue(configPrefix + key, false)
    })}

    function saveSetting(key, value) {
        GM_setValue(configPrefix + key, value) // save to browser
        config[key] = value // and memory
    }

    function notify(msg, position = '', notifDuration = '', shadow = '') {
        chatgpt.notify(`${ appSymbol } ${ msg }`, position, notifDuration, shadow ? shadow : ( chatgpt.isDarkMode() ? '' : 'shadow')) }

    function alert(title = '', msg = '', btns = '', checkbox = '', width = '') {
        return chatgpt.alert(`${ appSymbol } ${ title }`, msg, btns, checkbox, width )}

    function checkForUpdates() {

        // Fetch latest meta
        var updateURL = GM_info.scriptUpdateURL || GM_info.script.updateURL || GM_info.script.downloadURL
        var currentVer = GM_info.script.version
        GM.xmlHttpRequest({ method: 'GET', url: updateURL + '?t=' + Date.now(), headers: { 'Cache-Control': 'no-cache' },
            onload: function(response) {
                var data = response.responseText
                saveSetting('lastCheckTime', Date.now())

                // Compare versions                
                var latestVer = data.match(/@version +(.*)/)[1]
                if (!checkForUpdates.fromMenu && config.skipNextUpdate && latestVer === config.skippedVer)
                    return // exit comparison if past auto-alert hidden
                for (var i = 0 ; i < 4 ; i++) { // loop thru subver's
                    if (parseInt(latestVer.split('.')[i] || 0) > parseInt(currentVer.split('.')[i] || 0)) { // if outdated

                        // Alert to update
                        alert('Update available! 🚀',
                            `An update to ${ messages.appName } (v${ latestVer }) is available!&nbsp;&nbsp;&nbsp;`
                                + `<a target="_blank" href="https://github.com/adamlui/autoclear-chatgpt-history/commits/main/greasemonkey/autoclear-chatgpt-history.user.js" style="font-size: 0.7rem">View changes</a>`,
                            function update() { // button
                                saveSetting('skipNextUpdate', false) // reset hidden alert setting
                                window.open(( updateURL.includes('.meta.') ? GM_info.script.downloadURL : updateURL )
                                    + '?t=' + Date.now(), '_blank') },
                            !checkForUpdates.fromMenu ? // checkbox if auto-alert
                                function dontShowAgainUntilNextUpdate() {
                                    saveSetting('skipNextUpdate', !config.skipNextUpdate)
                                    saveSetting('skippedVer', config.skipNextUpdate ? latestVer : false) }
                                : ''
                        )
                        return
                }}

                if (checkForUpdates.fromMenu) { // alert to no update found
                    alert('Up-to-date!', `${ messages.appName } (v${ currentVer }) is up-to-date!`)
    }}})}

    // Define TOGGLE functions

    function insertToggle() {
        var chatHistoryNav = document.querySelector('nav[aria-label="Chat history"]') || {}
        var firstButton = chatHistoryNav.querySelector('a') || {}
        if (chatgpt.history.isOff()) try { firstButton.parentNode.nextElementSibling.style.display = 'none' } catch (error) {} // hide enable-history spam div
        if (!chatHistoryNav.contains(toggleLabel)) try { chatHistoryNav.insertBefore(toggleLabel, firstButton.parentNode) } catch (error) {} // insert toggle
    }

    function updateToggleHTML() {
        toggleLabel.innerHTML = `
            <img width="18px" src="https://raw.githubusercontent.com/adamlui/autoclear-chatgpt-history/main/media/images/icons/navicon.png">
            Auto-clear ${config.autoclear ? 'enabled' : 'disabled'}
            <label class="switch" ><input id="autoClearToggle" type="checkbox"
                ${config.autoclear ? 'checked="true"' : '' } >
                <span class="slider"></span></label>`
        toggleLabel.style.display = config.toggleHidden ? 'none' : 'flex'
    }

})()
