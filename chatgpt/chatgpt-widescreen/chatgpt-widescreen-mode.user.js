// ==UserScript==
// @name                ChatGPT Widescreen Mode 🖥️
// @name:de             ChatGPT-Breitbildmodus 🖥️
// @name:es             Modo de Pantalla Ancha de ChatGPT 🖥️
// @name:fr             Mode Écran Large ChatGPT 🖥️
// @name:it             ChatGPT Modalità Widescreen 🖥️
// @name:ja             ChatGPT ワイドスクリーンモード 🖥️
// @name:ko             ChatGPT 와이드스크린 모드 🖥️
// @name:pt             Modo Widescreen ChatGPT 🖥️
// @name:pt-BR          Modo Widescreen ChatGPT 🖥️
// @name:ru             Широкоэкранный Режим ChatGPT 🖥️
// @name:uk             Широкоекранний Pежим ChatGPT 🖥️
// @name:zh-CN          ChatGPT 宽屏模式 🖥️
// @name:zh-HK          ChatGPT 寬屏模式 🖥️
// @name:zh-SG          ChatGPT 宽屏模式 🖥️
// @name:zh-TW          ChatGPT 寬屏模式 🖥️
// @version             2023.6.13.9
// @description         Adds Widescreen + Fullscreen modes to ChatGPT for enhanced viewing + reduced scrolling
// @author              Adam Lui
// @namespace           https://github.com/adamlui
// @description:de      Fügt ChatGPT die Modi Breitbild und Vollbild hinzu, um die Anzeige zu verbessern und das Scrollen zu reduzieren
// @description:es      Agrega modos de pantalla ancha + ventana completa a ChatGPT para una visualización mejorada + desplazamiento reducido
// @description:fr      Ajoute les modes écran large + pleine fenêtre à ChatGPT pour une visualisation améliorée + un défilement réduit
// @description:it      Aggiunge le modalità Widescreen + Full-Window a ChatGPT per una visualizzazione migliorata + scorrimento ridotto
// @description:ja      ChatGPT にワイドスクリーン + フルウィンドウ モードを追加し、表示の強化とスクロールの削減を実現します
// @description:ko      향상된 보기 + 스크롤 감소를 위해 ChatGPT에 와이드스크린 + 전체 창 모드를 추가합니다.
// @description:pt      Adiciona os modos Widescreen + Full-Window ao ChatGPT para visualização aprimorada + rolagem reduzida
// @description:pt-BR   Adiciona os modos Widescreen + Full-Window ao ChatGPT para visualização aprimorada + rolagem reduzida
// @description:ru      Добавляет широкоэкранный и полноэкранный режимы в ChatGPT для улучшенного просмотра и уменьшения прокрутки.
// @description:uk      Додано широкоформатний + повновіконний режими до ChatGPT для покращеного перегляду + зменшеного прокручування
// @description:zh-CN   向 ChatGPT 添加宽屏 + 全屏模式以增强查看效果 + 减少滚动
// @description:zh-HK   向 ChatGPT 添加寬屏 + 全屏模式以增強查看效果 + 減少滾動
// @description:zh-SG   向 ChatGPT 添加宽屏 + 全屏模式以增强查看效果 + 减少滚动
// @description:zh-TW   向 ChatGPT 添加寬屏 + 全屏模式以增強查看效果 + 減少滾動
// @license             MIT
// @compatible          chrome
// @compatible          firefox
// @compatible          edge
// @compatible          opera
// @compatible          brave
// @compatible          vivaldi
// @compatible          librewolf
// @compatible          ghost
// @compatible          qq
// @match               https://chat.openai.com/*
// @icon                https://raw.githubusercontent.com/adamlui/chatgpt-widescreen/main/media/images/icons/widescreen-robot-emoji/icon48.png
// @icon64              https://raw.githubusercontent.com/adamlui/chatgpt-widescreen/main/media/images/icons/widescreen-robot-emoji/icon64.png
// @require             https://cdn.jsdelivr.net/gh/chatgptjs/chatgpt.js@f855a11607839fbc55273db604d167b503434598/dist/chatgpt-1.9.1.min.js
// @connect             raw.githubusercontent.com
// @connect             greasyfork.org
// @grant               GM_setValue
// @grant               GM_getValue
// @grant               GM_registerMenuCommand
// @grant               GM_unregisterMenuCommand
// @grant               GM.xmlHttpRequest
// @noframes
// @downloadURL         https://greasyfork.org/scripts/461473/code/chatgpt-widescreen-mode.user.js
// @updateURL           https://greasyfork.org/scripts/461473/code/chatgpt-widescreen-mode.meta.js
// @homepageURL         https://chatgptevo.com/widescreen
// @supportURL          https://chatgptevo.com/widescreen/support
// ==/UserScript==

// NOTE: This script relies on the powerful chatgpt.js library @ https://chatgpt.js.org (c) 2023 KudoAI & contributors under the MIT license.

(async () => {

    // Initialize settings
    var appSymbol = '🖥️', configPrefix = 'chatGPTws_'
    var config = { userLanguage: navigator.languages[0] || navigator.language || '' }
    loadSetting('fullerWindows', 'lastCheckTime', 'notifHidden', 'skipNextUpdate', 'skippedVer', 'tcbDisabled', 'wideScreen')

    // Define messages
    var msgsLoaded = new Promise(resolve => {
        var msgHostDir = 'https://raw.githubusercontent.com/adamlui/chatgpt-widescreen/main/greasemonkey/_locales/'
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

    // Create browser toolbar menu or disable script if extension installed
    await chatgpt.isLoaded()
    if (document.documentElement.getAttribute('cwm-extension-installed')) { // if extension installed, disable script/menu
        GM_registerMenuCommand('❌ ' + messages.menuLabel_disabled, function() { return })
        return // exit script
    } else registerMenu() // create functional menu

    // Save full-window + full screen states
    config.fullWindow = chatgpt.sidebar.isOff() ; config.fullScreen = chatgpt.isFullScreen()

    // Check for updates (1x/72h)
    if (!config.lastCheckTime || Date.now() - config.lastCheckTime > 172800000) checkForUpdates()

    // Collect OpenAI classes
    var sendButtonClasses = (document.querySelector('form button[class*="bottom"]') || {}).classList || []
    var sendSVGclasses = (document.querySelector('form button[class*="bottom"] svg') || {}).classList || []
    var inputTextAreaClasses = (document.querySelector("form button[class*='bottom']") || {}).previousSibling.classList || []
    var mainDivClasses = (document.querySelector('#__next > div > div.flex') || {}).classList || []
    var sidepadClasses = (document.querySelector('#__next > div > div') || {}).classList || []
    var sidebarClasses = (document.querySelector('#__next > div > div.dark') || {}).classList || []

    // Create/stylize tooltip div
    var tooltipDiv = document.createElement('div')
    tooltipDiv.classList.add('toggle-tooltip')
    var tooltipStyle = document.createElement('style')
    tooltipStyle.innerHTML = '.toggle-tooltip {'
        + 'background: black ; padding: 5px ; border-radius: 6px ; ' // box style
        + 'font-size: 0.7rem ; color: white ; ' // font style
        + 'position: absolute ; bottom: 50px ; ' // v-position
        + 'opacity: 0 ; transition: opacity 0.1s ; z-index: 9999 ; ' // visibility
        + '-webkit-user-select: none ; -moz-user-select: none ; -ms-user-select: none ; user-select: none }' // disable select
    document.head.appendChild(tooltipStyle)

    // Create general style tweaks
    var tweaksStyle = document.createElement('style')
    var tcbStyle = 'form > div > div:nth-child(2), form textarea { max-height: 68vh !important; } '
    updateTweaksStyle() ; document.head.appendChild(tweaksStyle)

    // Create wide screen style
    var wideScreenStyle = document.createElement('style')
    wideScreenStyle.id = 'wideScreen-mode' // for toggleMode()
    wideScreenStyle.innerHTML = '.text-base { max-width: 93% !important } '
        + 'div' + classListToCSS(mainDivClasses) + '{ width: 100px }' // prevent sidebar shrinking when zoomed

    // Create full-window style
    var fullWindowStyle = document.createElement('style')
    fullWindowStyle.id = 'fullWindow-mode' // for toggleMode()
    fullWindowStyle.innerHTML = classListToCSS(sidebarClasses) + '{ display: none }' // hide sidebar
        + classListToCSS(sidepadClasses) + '{ padding-left: 0px }' // remove side padding
    var buttonColor = setBtnColor()

    // Create full screen button & add icon/classes/position/listeners
    var fullScreenButton = document.createElement('div') // create button
    fullScreenButton.id = 'fullScreen-button' // for toggleTooltip()
    updateBtnSVG('fullScreen') // insert icon
    fullScreenButton.setAttribute('class', sendButtonClasses) // assign borrowed classes
    fullScreenButton.style.cssText = 'right: 2.57rem' // position left of wide screen button
    fullScreenButton.style.cursor = 'pointer' // Add finger cursor // 添加鼠标手势为手指
    fullScreenButton.addEventListener('click', () => { toggleMode('fullScreen') })
    fullScreenButton.addEventListener('mouseover', toggleTooltip)
    fullScreenButton.addEventListener('mouseout', toggleTooltip)

    // Create full-window button & add icon/classes/position/listeners
    var fullWindowButton = document.createElement('div') // create button
    fullWindowButton.id = 'fullWindow-button' // for toggleTooltip()
    updateBtnSVG('fullWindow') // insert icon
    fullWindowButton.setAttribute('class', sendButtonClasses) // assign borrowed classes
    fullWindowButton.style.cssText = 'right: 4.34rem' // position left of wide screen button
    fullWindowButton.style.cursor = 'pointer' // Add finger cursor // 添加鼠标手势为手指
    fullWindowButton.addEventListener('click', () => { toggleMode('fullWindow') })
    fullWindowButton.addEventListener('mouseover', toggleTooltip)
    fullWindowButton.addEventListener('mouseout', toggleTooltip)

    // Create wide screen button & add icon/classes/position/icon/listeners
    var wideScreenButton = document.createElement('div') // create button
    wideScreenButton.id = 'wideScreen-button' // for toggleTooltip()
    updateBtnSVG('wideScreen') // insert icon
    wideScreenButton.setAttribute('class', sendButtonClasses) // assign borrowed classes
    wideScreenButton.style.cssText = 'right: 6.11rem' // position left of Send button
    wideScreenButton.style.cursor = 'pointer' // Add finger cursor // 添加鼠标手势为手指
    wideScreenButton.addEventListener('click', () => { toggleMode('wideScreen') })
    wideScreenButton.addEventListener('mouseover', toggleTooltip)
    wideScreenButton.addEventListener('mouseout', toggleTooltip)

    // Create new chat button & add icon/classes/position/icon/listeners
    var newChatButton = document.createElement('div') // create button
    newChatButton.id = 'newChat-button' // for toggleTooltip()
    updateBtnSVG('newChat') // insert icon
    newChatButton.setAttribute('class', sendButtonClasses) // assign borrowed classes
    newChatButton.style.cssText = 'right: 7.88rem' // position left of full-window button
    newChatButton.style.cursor = 'pointer' // Add finger cursor // 添加鼠标手势为手指
    newChatButton.addEventListener('click', () => { chatgpt.startNewChat() })
    newChatButton.addEventListener('mouseover', toggleTooltip)
    newChatButton.addEventListener('mouseout', toggleTooltip)

    insertBtns()

    // Monitor node changes to maintain button visibility + auto-toggle once + manage send button's tooltip
    var prevSessionChecked = false
    var nodeObserver = new MutationObserver(([{ addedNodes, type }]) => {
        if (type === 'childList' && addedNodes.length) {
            insertBtns() // again or they constantly disappear

            // Check loaded keys to restore previous session's state
            if (!prevSessionChecked) {
                if (config.wideScreen) toggleMode('wideScreen', 'ON')
                if (config.fullWindow) toggleMode('fullWindow', 'ON')
                if (config.tcbDisabled) updateTweaksStyle()
                prevSessionChecked = true
            }

            // Manage send button's tooltip
            var sendButton = document.querySelector('form button[class*="bottom"]');
            if (sendButton) { // add/remove tooltip based on enabled state
                if (!sendButton.hasAttribute('disabled') && !sendButton.hasAttribute('hasTooltip')) {
                    sendButton.addEventListener('mouseover', toggleTooltip);
                    sendButton.addEventListener('mouseout', toggleTooltip);
                    sendButton.setAttribute('hasTooltip', true);
                } else if (sendButton.hasAttribute('disabled') && sendButton.hasAttribute('hasTooltip')) {
                    tooltipDiv.style.opacity = '0' // hide tooltip in case cursor was hovering
                    sendButton.removeEventListener('mouseover', toggleTooltip);
                    sendButton.removeEventListener('mouseout', toggleTooltip);
                    sendButton.removeAttribute('hasTooltip');
                }
            }

    }}) ; nodeObserver.observe(document.documentElement, { childList: true, subtree: true })


    // Monitor scheme changes to update button colors
    var schemeObserver = new MutationObserver(([{ type, target }]) => {
        if (target === document.documentElement && type === 'attributes' && target.getAttribute('class')) {
            buttonColor = setBtnColor()
            updateBtnSVG('fullScreen') ; updateBtnSVG('fullWindow') ; updateBtnSVG('wideScreen') ; updateBtnSVG('newChat')
    }}) ; schemeObserver.observe(document.documentElement, { attributes: true })

    // Monitor sidebar to update full-window setting
    var sidebarObserver = new MutationObserver(() => {
        var fullWindowState = chatgpt.sidebar.isOff()
        if ((config.fullWindow && !fullWindowState) || (!config.fullWindow && fullWindowState))
            if (!config.modeSynced) syncMode('fullWindow')
    }) ; sidebarObserver.observe(document.body, { childList: true, subtree: true })

    // Add full screen listeners to update setting/button + set F11 flag
    window.addEventListener('resize', () => { // sync full screen settings/button
        var fullScreenState = chatgpt.isFullScreen()
        if (config.fullScreen && !fullScreenState) { syncMode('fullScreen') ; config.f11 = false } // exiting full screen
        else if (!config.fullScreen && fullScreenState) syncMode('fullScreen') // entering full screen
    })
    window.addEventListener('keydown', () => { // set F11 flag for toggleMode() disabled warning
        if ((event.key === 'F11' || event.keyCode === 122) && !config.fullScreen) config.f11 = true // set flag if entering full screen via F11
    })

    // Define SCRIPT functions

    function registerMenu() {
        var menuIDs = [] // to store registered commands for removal while preserving order
        var stateSymbol = ['✔️', '❌'], stateWord = ['ON', 'OFF']
        var stateSeparator = getUserscriptManager() === 'Tampermonkey' ? ' — ' : ': '

        // Add command to also activate wide screen in full-window
        var fwLabel = stateSymbol[+!config.fullerWindows] + ' ' + messages.menuLabel_fullerWins
            + stateSeparator + stateWord[+!config.fullerWindows]
        menuIDs.push(GM_registerMenuCommand(fwLabel, function() {
            saveSetting('fullerWindows', !config.fullerWindows)
            if (!config.notifHidden) {
                notify(`${ messages.menuLabel_fullerWins }: ${ stateWord[+!config.fullerWindows] }`)
            } for (var id of menuIDs) { GM_unregisterMenuCommand(id) } registerMenu() // refresh menu
        }))

        // Add command to toggle taller chatboxes when typing
        var tcbLabel = stateSymbol[+config.tcbDisabled] + ' ' + messages.menuLabel_tallerChatbox
            + stateSeparator + stateWord[+config.tcbDisabled]
        menuIDs.push(GM_registerMenuCommand(tcbLabel, function() {
            saveSetting('tcbDisabled', !config.tcbDisabled)
            tweaksStyle.innerHTML = config.tcbDisabled ? tweaksStyle.innerHTML.replace(tcbStyle, '')
                                                       : tweaksStyle.innerHTML + tcbStyle
            if (!config.notifHidden) {
                notify(`${ messages.menuLabel_tallerChatbox }: ${ stateWord[+config.tcbDisabled] }`)
            } for (var id of menuIDs) { GM_unregisterMenuCommand(id) } registerMenu() // refresh menu
        }))

        // Add command to show notifications when switching modes
        var mnLabel = stateSymbol[+config.notifHidden] + ' ' + messages.menuLabel_modeNotifs
            + stateSeparator + stateWord[+config.notifHidden]
        menuIDs.push(GM_registerMenuCommand(mnLabel, function() {
            saveSetting('notifHidden', !config.notifHidden)
            notify(`${ messages.menuLabel_modeNotifs }: ${ stateWord[+config.notifHidden] }`)
            for (var id of menuIDs) { GM_unregisterMenuCommand(id) } registerMenu() // refresh menu
        }))

        // Add command to check for updates
        var ucLabel = '🚀 ' + messages.menuLabel_updateCheck
        menuIDs.push(GM_registerMenuCommand(ucLabel, function() { checkForUpdates.fromMenu = true ; checkForUpdates() }))
    }

    function getUserscriptManager() {
        try { return GM_info.scriptHandler } catch (error) { return 'other' }}

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
                        var updateAlertID = alert(`${ messages.alert_updateAvail }! 🚀`,
                            `${ messages.alert_newerVer } ${ messages.appName } (v${ latestVer }) ${ messages.alert_isAvail }!`
                                + `&nbsp;&nbsp;&nbsp;<a target="_blank" href="https://github.com/adamlui/chatgpt-widescreen/commits/main/greasemonkey/chatgpt-widescreen-mode.user.js" style="font-size: 0.7rem">${ messages.link_viewChanges }</a>`,
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

                        // Localize button/checkbox labels if needed
                        if (!config.userLanguage.startsWith('en')) {
                            var updateAlert = document.querySelector(`[id="${ updateAlertID }"]`)
                            updateAlert.querySelector('label').textContent = ( // checkbox label
                                `${ messages.alert_dontShowAgain } ${ messages.alert_untilNextVer }`)
                            updateAlert.querySelectorAll('button')[1].textContent = messages.buttonLabel_update
                            updateAlert.querySelectorAll('button')[0].textContent = messages.buttonLabel_dismiss
                        }

                        return
                }}

                if (checkForUpdates.fromMenu) { // alert to no update found
                    alert(`${ messages.alert_upToDate }!`, // title
                        `${ messages.appName } (v${ currentVer }) ${ messages.alert_isUpToDate }!`) // msg
    }}})}

    // Define CSS function

    function classListToCSS(classList) { // convert DOM classList to single CSS selector
        return '.' + [...classList].join('.') // prepend dot to dot-separated string
            .replaceAll(/([:\[\]])/g, '\\$1') // escape CSS special chars
    }

    // Define BUTTON functions

    function setBtnColor() { return chatgpt.isDarkMode() || chatgpt.history.isOff() ? 'white' : '#202123' }

    function insertBtns() {
        var chatbar = document.querySelector("form button[class*='bottom']").parentNode
        if (chatbar.contains(fullWindowButton)) return // if buttons aren't missing, exit
        else chatbar.append(newChatButton, fullWindowButton, wideScreenButton, fullScreenButton, tooltipDiv)
    }

    function updateBtnSVG(mode, state = '') {

        // Define SVG viewbox + elems
        var svgViewBox = ( mode == 'newChat' ? '11 6 ' : mode == 'fullWindow' ? '0 0 ' : '8 8 ' ) // move to XY coords to crop whitespace
            + ( mode == 'newChat' ? '13 13' : mode == 'fullWindow' ? '24 24' : '20 20' ) // shrink to fit size
        var fullScreenONelems = `
            <path fill="${ buttonColor }" d="m 14,14 -4,0 0,2 6,0 0,-6 -2,0 0,4 0,0 z"></path>
            <path fill="${ buttonColor }" d="m 22,14 0,-4 -2,0 0,6 6,0 0,-2 -4,0 0,0 z"></path>
            <path fill="${ buttonColor }" d="m 20,26 2,0 0,-4 4,0 0,-2 -6,0 0,6 0,0 z"></path>
            <path fill="${ buttonColor }" d="m 10,22 4,0 0,4 2,0 0,-6 -6,0 0,2 0,0 z"></path>`
        var fullScreenOFFelems = `
            <path fill="${ buttonColor }" d="m 10,16 2,0 0,-4 4,0 0,-2 L 10,10 l 0,6 0,0 z"></path>
            <path fill="${ buttonColor }" d="m 20,10 0,2 4,0 0,4 2,0 L 26,10 l -6,0 0,0 z"></path>
            <path fill="${ buttonColor }" d="m 24,24 -4,0 0,2 L 26,26 l 0,-6 -2,0 0,4 0,0 z"></path>
            <path fill="${ buttonColor }" d="M 12,20 10,20 10,26 l 6,0 0,-2 -4,0 0,-4 0,0 z"></path>`
        var fullWindowElems = `
            <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="9" y1="3" x2="9" y2="21"></line>`
        var wideScreenONelems = `
            <path fill="${ buttonColor }" fill-rule="evenodd"
                d="m 26,13 0,10 -16,0 0,-10 z m -14,2 12,0 0,6 -12,0 0,-6 z"></path>`
        var wideScreenOFFelems = `
            <path fill="${ buttonColor }" fill-rule="evenodd"
                d="m 28,11 0,14 -20,0 0,-14 z m -18,2 16,0 0,10 -16,0 0,-10 z"></path>`
        var newChatElems = `<path fill="${ buttonColor }"d="M22,13h-4v4h-2v-4h-4v-2h4V7h2v4h4V13z"></path>`

        // Pick appropriate button/elements
        var [button, ONelems, OFFelems] = (
            mode == 'fullScreen' ? [fullScreenButton, fullScreenONelems, fullScreenOFFelems]
          : mode == 'fullWindow' ? [fullWindowButton, fullWindowElems, fullWindowElems]
          : mode == 'wideScreen' ? [wideScreenButton, wideScreenONelems, wideScreenOFFelems]
                                 : [newChatButton, newChatElems, newChatElems])

        // Initialize rem margin offset vs. OpenAI's .mr-1 for hover overlay centeredness
        var lMargin = mode == 'wideScreen' ? .11 : .12
        var rMargin = (.25 - lMargin)

        // Update SVG
        button.innerHTML = '<svg '
            + (mode == 'fullWindow' ? `stroke="${ buttonColor }" fill="none" stroke-width="2" height="1em" width="1em"` : '')
            + `class="${ sendSVGclasses }" ` // assign borrowed classes
            + `style="margin: 0 ${ rMargin }rem 0 ${ lMargin }rem ; ` // center overlay
            + 'pointer-events: none" ' // prevent triggering tooltips twice
            + `viewBox="${ svgViewBox }"> ` // set pre-tweaked viewbox
            + (config[mode] || state.toLowerCase() == 'on' ? ONelems : OFFelems + '</svg>') // dynamically insert elems based on loaded key
    }

    // Define TOOLTIP functions

    function toggleTooltip(event) {
        var buttonType = (
            event.target.id.includes('fullScreen') ? 'fullScreen' :
            event.target.id.includes('fullWindow') ? 'fullWindow' :
            event.target.id.includes('wide') ? 'wideScreen' :
            event.target.id.includes('new') ? 'newChat' : 'sendMsg')
        updateTooltip(buttonType) // since mouseover's can indicate button change
        tooltipDiv.style.opacity = event.type === 'mouseover' ? '0.8' : '0' // toggle visibility
    }

    function updateTooltip(buttonType) { // text & position
        tooltipDiv.innerHTML = messages['tooltip_' + buttonType + (
            !/full|wide/i.test(buttonType) ? '' : (config[buttonType] ? 'OFF' : 'ON'))]
        var ctrAddend = 25, overlayWidth = 30
        var iniRoffset = overlayWidth * (
            buttonType.includes('send') ? 0
                : buttonType.includes('fullScreen') ? 1
                : buttonType.includes('fullWindow') ? 2
                : buttonType.includes('wide') ? 3 : 4) + ctrAddend
        tooltipDiv.style.right = `${ // horizontal position
            iniRoffset - tooltipDiv.getBoundingClientRect().width / 2}px`
    }

    // Define MODE functions

    function activateMode(mode) {
        if (mode == 'wideScreen') { document.head.appendChild(wideScreenStyle) ; syncMode('wideScreen') }
        else if (mode == 'fullWindow') { document.head.appendChild(fullWindowStyle) ; chatgpt.sidebar.hide() ; console.log('fullWindow activated')}
        else if (mode == 'fullScreen') document.documentElement.requestFullscreen()
    }

    function deactivateMode(mode) {
        if (mode == 'wideScreen') try { document.head.removeChild(wideScreenStyle) ; syncMode('wideScreen') } catch (error) {}
        else if (mode == 'fullWindow') { try { document.head.removeChild(fullWindowStyle) } catch (error) {} chatgpt.sidebar.show() }
        else if (mode == 'fullScreen') {
            if (config.f11)
                alert(messages.alert_pressF11, messages.alert_f11reason + '.')
            else try { document.exitFullscreen() } catch (error) { console.error(appSymbol + ' >> ', error) }
    }}

    function toggleMode(mode, state = '') {
        switch (state.toUpperCase()) {
            case 'ON' : activateMode(mode) ; break
            case 'OFF' : deactivateMode(mode) ; break
            default : config[mode] ? deactivateMode(mode) : activateMode(mode)
        }
    }

    function syncMode(mode) {
        var state = ( mode === 'wideScreen' ? !!document.querySelector('#wideScreen-mode')
                    : mode === 'fullWindow' ? chatgpt.sidebar.isOff()
                                            : chatgpt.isFullScreen() )
        saveSetting(mode, state) ; updateBtnSVG(mode) ; updateTooltip(mode)

        // Handle fuller window & OpenAI toggle
        if (mode === 'fullWindow') {
            if (state && config.fullerWindows && !config.wideScreen) { // activate fuller window
                document.head.appendChild(wideScreenStyle) ; updateBtnSVG('wideScreen', 'on')
            } else if (!state) {
                try { document.head.removeChild(fullWindowStyle) } catch (error) {} // remove style too so sidebar shows
                if (!config.wideScreen) { // disable widescreen if result of fuller window
                    try { document.head.removeChild(wideScreenStyle) } catch (error) {} updateBtnSVG('wideScreen', 'off')
        }}}

        if (!config.notifHidden) { // notify synced state
            notify(`${ messages['mode_' + mode] } ${ state ? 'ON' : 'OFF' }`) }

        config.modeSynced = true ; setTimeout(() => { config.modeSynced = false }, 100) // prevent repetition
    }

    function updateTweaksStyle() {
        tweaksStyle.innerHTML = (
               classListToCSS(inputTextAreaClasses) + ' { padding-right: 145px } ' // make input text area accomdate buttons
            + 'div.group > div > div:first-child > div:nth-child(2) { ' // move response paginator
                + 'position: relative ; left: 54px ; top: 7px } ' // ...below avatar to avoid cropping
            + ( !config.tcbDisabled ? tcbStyle : '' )) // expand text input vertically        
    }

})()
