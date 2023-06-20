// ==UserScript==
// @name                ChatGPT Infinity ∞
// @name:ar             ChatGPT إنفينيتي ∞
// @name:bg             ChatGPT Безкрайност ∞
// @name:bn             চ্যাটজিপিটি ইনফিনিটি ∞
// @name:cs             ChatGPT Nekonečno ∞
// @name:da             ChatGPT Uendelighed ∞
// @name:de             ChatGPT Unendlichkeit ∞
// @name:el             ChatGPT Άπειρο ∞
// @name:eo             ChatGPT Senfina ∞
// @name:es             ChatGPT Infinito ∞
// @name:fi             ChatGPT Äärettömyys ∞
// @name:fr             ChatGPT Infini ∞
// @name:fr-CA          ChatGPT Infini ∞
// @name:gu             ચેટજીપીટી અનંત ∞
// @name:hi             चैटजीपीटी अनंत ∞
// @name:hu             ChatGPT Végtelen ∞
// @name:in             ChatGPT Tak Terhingga ∞
// @name:it             ChatGPT Infinito ∞
// @name:iw             צ'אטגפט אינסוף ∞
// @name:ja             ChatGPT 無限大 ∞
// @name:ka             ChatGPT უსასი ∞
// @name:kn             ಚಾಟ್ಜಿಪಿಟಿ ಅನಂತ ∞
// @name:ko             ChatGPT 무한대 ∞
// @name:ku             ChatGPT Bêdawî ∞
// @name:ml             ചാറ്റ്‌ജിപിടി അനന്തതയും ∞
// @name:mr             चॅटजीपीटी अनंत ∞
// @name:ms             ChatGPT Tak Terhingga ∞
// @name:my             ChatGPT အများကြီး ∞
// @name:nl             ChatGPT Oneindigheid ∞
// @name:no             ChatGPT Uendelighet ∞
// @name:or             ଚାଟଜିପିଟି ଅନନ୍ତ ∞
// @name:pa             ਚੈਟਜੀਪੀਟੀ ਅਨੰਤ ∞
// @name:pl             ChatGPT Nieskończoność ∞
// @name:pt             ChatGPT Infinito ∞
// @name:pt-BR          ChatGPT Infinito ∞
// @name:ro             ChatGPT Infinit ∞
// @name:ru             ChatGPT Бесконечность ∞
// @name:sk             ChatGPT Nekonečno ∞
// @name:sr             ChatGPT Бесконачност ∞
// @name:ta             சாட் ஜிபிடி முழுமையான ∞
// @name:th             ChatGPT ความไม่สิ้นสุด ∞
// @name:tr             ChatGPT Sonsuzluk ∞
// @name:uk             ChatGPT Нескінченність ∞
// @name:ur             چیٹ جی پی ٹی بے انتہا ∞
// @name:vi             ChatGPT Vô Hạn ∞
// @name:zh-CN          ChatGPT 无限 ∞
// @name:zh-HK          ChatGPT 無限 ∞
// @name:zh-SG          ChatGPT 无限 ∞
// @name:zh-TW          ChatGPT 無限 ∞
// @version             2023.6.20
// @description         Generate endless answers from all-knowing ChatGPT (in any language!)
// @description:ar      احصل على إجابات لا حصر لها من ChatGPT الذي يعرف الجميع (بأي لغة!)
// @description:bg      Генерирайте безкрайни отговори от всезнаещия ChatGPT (на всеки език!)
// @description:bn      সর্বজনবিদিত ChatGPT থেকে অবিরাম উত্তর তৈরি করুন (যেকোন ভাষায়!)
// @description:cs      Generujte nekonečné odpovědi ze vševědoucího ChatGPT (v jakémkoli jazyce!)
// @description:da      Generer endeløse svar fra alvidende ChatGPT (på ethvert sprog!)
// @description:de      Generieren Sie endlose Antworten aus dem allwissenden ChatGPT (in jeder Sprache!)
// @description:el      Δημιουργήστε ατελείωτες απαντήσεις από το παντογνώστη ChatGPT (σε οποιαδήποτε γλώσσα!)
// @description:eo      Generu senfinajn respondojn de ĉioscia ChatGPT (en iu ajn lingvo!)
// @description:es      Genera infinitas respuestas desde ChatGPT que todo lo sabe (¡en cualquier idioma!)
// @description:fi      Luo loputtomasti vastauksia kaikkitietävästä ChatGPT:stä (millä tahansa kielellä!)
// @description:fr      Générez des réponses sans fin à partir de ChatGPT qui sait tout (dans n'importe quelle langue!)
// @description:fr-CA   Générez des réponses sans fin à partir de ChatGPT qui sait tout (dans n'importe quelle langue!)
// @description:gu      સર્વજ્ઞાની ChatGPT (કોઈપણ ભાષામાં!) તરફથી અનંત જવાબો બનાવો
// @description:hi      सभी जानकार ChatGPT से अंतहीन उत्तर उत्पन्न करें (किसी भी भाषा में!)
// @description:hu      Generáljon végtelen válaszokat a mindent tudó ChatGPT segítségével (bármilyen nyelven!)
// @description:in      Hasilkan jawaban tanpa akhir dari ChatGPT yang serba tahu (dalam bahasa apa pun!)
// @description:it      Genera risposte infinite da ChatGPT onnisciente (in qualsiasi lingua!)
// @description:iw      הפק תשובות אינסופיות מ-ChatGPT היודע הכל (בכל שפה!)
// @description:ja      すべてを知っている ChatGPT から無限の回答を生成します (任意の言語で!)
// @description:ka      შექმენით გაუთავებელი პასუხები ყოვლისმომცველი ChatGPT-დან (ნებისმიერ ენაზე!)
// @description:kn      すべてを知っている ChatGPT から無限の回答を生成します (任意の言語で!)
// @description:ko      모든 것을 아는 ChatGPT에서 끝없는 답변 생성(모든 언어로!)
// @description:ku      Bersivên bêdawî ji ChatGPT-a-zana (bi her zimanî!)
// @description:ml      എല്ലാം അറിയുന്ന ChatGPT-ൽ നിന്ന് അനന്തമായ ഉത്തരങ്ങൾ സൃഷ്ടിക്കുക (ഏത് ഭാഷയിലും!)
// @description:mr      सर्वज्ञात ChatGPT (कोणत्याही भाषेत!) कडून अंतहीन उत्तरे व्युत्पन्न करा.
// @description:ms      Hasilkan jawapan yang tidak berkesudahan daripada ChatGPT yang serba tahu (dalam mana-mana bahasa!)
// @description:my      အားလုံးသိသော ChatGPT (မည်သည့်ဘာသာစကားဖြင့်မဆို) မှ အဆုံးမဲ့အဖြေများကို ဖန်တီးပါ။
// @description:nl      Genereer eindeloze antwoorden van alwetende ChatGPT (in elke taal!)
// @description:no      Generer endeløse svar fra allvitende ChatGPT (på hvilket som helst språk!)
// @description:or      ସମସ୍ତ ଜାଣିବା ChatGPT ରୁ ଅସୀମ ଉତ୍ତର ସୃଷ୍ଟି କରନ୍ତୁ (ଯେକ language ଣସି ଭାଷାରେ!)
// @description:pa      ਸਭ-ਜਾਣਨ ਵਾਲੇ ਚੈਟਜੀਪੀਟੀ (ਕਿਸੇ ਵੀ ਭਾਸ਼ਾ ਵਿੱਚ!) ਤੋਂ ਬੇਅੰਤ ਜਵਾਬ ਤਿਆਰ ਕਰੋ
// @description:pl      Generuj niekończące się odpowiedzi z wszechwiedzącego ChatGPT (w dowolnym języku!)
// @description:pt      Gere respostas infinitas do onisciente ChatGPT (em qualquer idioma!)
// @description:pt-BR   Gere respostas infinitas do onisciente ChatGPT (em qualquer idioma!)
// @description:ro      Generați răspunsuri nesfârșite de la atotștiutorul ChatGPT (în orice limbă!)
// @description:ru      Создавайте бесконечные ответы от всезнающего ChatGPT (на любом языке!)
// @description:sk      Generujte nekonečné odpovede od vševediaceho ChatGPT (v akomkoľvek jazyku!)
// @description:sr      Генеришите бескрајне одговоре од свезнајућег ЦхатГПТ-а (на било ком језику!)
// @description:sv      Generera oändliga svar från allvetande ChatGPT (på vilket språk som helst!)
// @description:ta      அனைத்தையும் அறிந்த ChatGPT இலிருந்து முடிவற்ற பதில்களை உருவாக்கவும் (எந்த மொழியிலும்!)
// @description:th      สร้างคำตอบไม่รู้จบจาก ChatGPT ที่รอบรู้ (ในภาษาใดก็ได้!)
// @description:tr      Her şeyi bilen ChatGPT'den sonsuz cevaplar oluşturun (herhangi bir dilde!)
// @description:uk      Генеруйте нескінченні відповіді від всезнаючого ChatGPT (будь-якою мовою!)
// @description:ur      تمام جاننے والے ChatGPT سے لامتناہی جوابات تیار کریں (کسی بھی زبان میں!)
// @description:vi      Tạo vô số câu trả lời từ ChatGPT toàn năng (bằng bất kỳ ngôn ngữ nào!)
// @description:zh-CN   从无所不知的 ChatGPT 生成无穷无尽的答案 (用任何语言!)
// @description:zh-HK   從無所不知的 ChatGPT 生成無窮無盡的答案 (用任何語言!)
// @description:zh-SG   从无所不知的 ChatGPT 生成无穷无尽的答案 (用任何语言!)
// @description:zh-TW   從無所不知的 ChatGPT 生成無窮無盡的答案 (用任何語言!)
// @author              Adam Lui
// @namespace           https://github.com/adamlui
// @license             MIT
// @match               https://chat.openai.com/*
// @icon                https://raw.githubusercontent.com/adamlui/chatgpt-infinity/main/media/images/icons/infinity-symbol/black/icon48.png
// @icon64              https://raw.githubusercontent.com/adamlui/chatgpt-infinity/main/media/images/icons/infinity-symbol/black/icon64.png
// @compatible          chrome
// @compatible          firefox
// @compatible          edge
// @compatible          opera
// @compatible          brave
// @compatible          vivaldi
// @compatible          waterfox
// @compatible          librewolf
// @compatible          ghost
// @compatible          qq
// @require             https://cdn.jsdelivr.net/gh/chatgptjs/chatgpt.js@5eed48d721158fc3800c23bc02b5dc0d3959b472/dist/chatgpt-1.10.1.min.js
// @connect             raw.githubusercontent.com
// @connect             greasyfork.org
// @grant               GM_setValue
// @grant               GM_getValue
// @grant               GM_registerMenuCommand
// @grant               GM_unregisterMenuCommand
// @grant               GM.xmlHttpRequest
// @noframes
// @updateURL           https://greasyfork.org/scripts/465051/code/chatgpt-infinity.meta.js
// @downloadURL         https://greasyfork.org/scripts/465051/code/chatgpt-infinity.user.js
// @homepageURL         https://chatgptevo.com/infinity
// @supportURL          https://chatgptevo.com/infinity/support
// ==/UserScript==

// NOTE: This script relies on the powerful chatgpt.js library @ https://chatgpt.js.org (c) 2023 KudoAI & contributors under the MIT license

(async () => {

    // Initialize settings
    var appSymbol = '∞', configPrefix = 'chatGPTinf_'
    var config = { userLanguage: navigator.languages[0] || navigator.language || '' }
    loadSetting('autoScrollDisabled', 'lastCheckTime', 'replyInterval', 'replyLanguage', 'skipNextUpdate', 'skippedVer', 'toggleHidden')
    if (!config.replyLanguage) saveSetting('replyLanguage', config.userLanguage) // init reply language
    if (!config.replyInterval) saveSetting('replyInterval', 7) // init refresh interval to 7 secs if unset

    // Define messages
    var msgsLoaded = new Promise(resolve => {
        var msgHostDir = 'https://raw.githubusercontent.com/adamlui/chatgpt-infinity/main/greasemonkey/_locales/'
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
    var menuIDs = [], state = { symbol: ['✔️', '❌'], word: ['ON', 'OFF'] } // initialize menu vars
    await chatgpt.isLoaded()
    if (document.documentElement.getAttribute('cif-extension-installed')) { // if extension installed, disable script/menu
        GM_registerMenuCommand(state.symbol[1] + ' ' + messages.menuLabel_disabled, () => { return })
        return // exit script
    } else registerMenu() // create functional menu

    // Check for updates (1x/72h)
    if (!config.lastCheckTime || Date.now() - config.lastCheckTime > 172800000) checkForUpdates()

    // Add listener to auto-disable Infinity Mode
    if (document.hidden !== undefined) { // ...if Page Visibility API supported
        document.addEventListener('visibilitychange', () => {
            if (config.infinityMode) infinityMode.deactivate()
            for (var id of menuIDs) GM_unregisterMenuCommand(id) ; registerMenu() // refresh menu
    })}

    // Stylize toggle switch
    var switchStyle = document.createElement('style')
    switchStyle.innerText = `/* Stylize switch */
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

    // Create toggle label, add styles//classes/listener/HTML
    var toggleLabel = document.createElement('div') // create label div
    toggleLabel.style.maxHeight = '44px' // prevent flex overgrowth
    toggleLabel.style.margin = '2px 0' // add v-margins
    toggleLabel.style.userSelect = 'none' // prevent highlighting
    for (var navLink of document.querySelectorAll('nav[aria-label="Chat history"] a')) { // inspect sidebar for classes to borrow
        if (navLink.text.match(/(new|clear) chat/i)) { // focus on new/clear chat button
            toggleLabel.setAttribute('class', navLink.classList) // borrow link classes
            navLink.parentNode.style.margin = '2px 0' // add v-margins
            break // stop looping since class assignment is done
    }}
    toggleLabel.addEventListener('click', () => {
        var toggleInput = document.querySelector('#infToggleInput')
        toggleInput.checked = !toggleInput.checked
        setTimeout(updateToggleHTML, 200) // sync label change w/ switch movement
        config.infinityMode = toggleInput.checked
        for (var id of menuIDs) GM_unregisterMenuCommand(id) ; registerMenu() // refresh menu
        infinityMode.toggle()
    })
    updateToggleHTML()

    // Insert full toggle on page load + during navigation // 在导航期间插入页面加载 + 的完整切换
    insertToggle()
    var nodeObserver = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
            if (mutation.type === 'childList' && mutation.addedNodes.length) {
                insertToggle()
    }})}) ; nodeObserver.observe(document.documentElement, { childList: true, subtree: true })

    // Define SCRIPT functions

    function registerMenu() {
        menuIDs = [] // empty to store newly registered cmds for removal while preserving order
        var stateSeparator = getUserscriptManager() === 'Tampermonkey' ? ' — ' : ': '

        // Add command to toggle Infinity Mode
        var imLabel = state.symbol[+!config.infinityMode] + ' ' + messages.menuLabel_infinityMode + ' ∞ '
            + stateSeparator + state.word[+!config.infinityMode]
        menuIDs.push(GM_registerMenuCommand(imLabel, () => {
            document.querySelector('#infToggleLabel').click()
        }))

        // Add command to toggle visibility of toggle
        var tvLabel = state.symbol[+config.toggleHidden] + ' ' + messages.menuLabel_toggleVis
            + stateSeparator + state.word[+config.toggleHidden]
        menuIDs.push(GM_registerMenuCommand(tvLabel, () => {
            saveSetting('toggleHidden', !config.toggleHidden)
            toggleLabel.style.display = config.toggleHidden ? 'none' : 'flex' // toggle visibility
            notify(messages.menuLabel_toggleVis + ': '+ state.word[+config.toggleHidden])
            for (var id of menuIDs) GM_unregisterMenuCommand(id) ; registerMenu() // refresh menu
        }))

        // Add command to toggle auto-scroll
        var asLabel = state.symbol[+config.autoScrollDisabled] + ' ' + messages.menuLabel_autoScroll
            + stateSeparator + state.word[+config.autoScrollDisabled]
        menuIDs.push(GM_registerMenuCommand(asLabel, () => {
            saveSetting('autoScrollDisabled', !config.autoScrollDisabled)
            notify(messages.menuLabel_autoScroll + ': '+ state.word[+config.autoScrollDisabled])
            for (var id of menuIDs) GM_unregisterMenuCommand(id) ; registerMenu() // refresh menu
        }))

        // Add command to set language
        var rlLabel = '🌐 ' + messages.menuLabel_replyLang + stateSeparator
                    + ( config.replyLanguage ? config.replyLanguage : 'English' )
        menuIDs.push(GM_registerMenuCommand(rlLabel, async function() {
            while (true) {
                var replyLanguage = prompt(`${ messages.prompt_updateReplyLang }:`, config.replyLanguage)
                if (replyLanguage === null) break // user cancelled so do nothing
                else if (!/\d/.test(replyLanguage)) {
                    saveSetting('replyLanguage', replyLanguage)
                    alert(messages.alert_replyLangUpdated + '!', messages.alert_willReplyIn + ' '
                        + ( replyLanguage ? replyLanguage : messages.alert_yourSysLang ) + '.')
                    if (config.infinityMode) { // restart session using new reply language
                        infinityMode.deactivate() ; setTimeout(infinityMode.activate, 500) }
                    for (var id of menuIDs) GM_unregisterMenuCommand(id) ; registerMenu() // refresh menu
                    break
        }}}))

        // Add command to change reply interval
        var riLabel = '⌚ ' + messages.menuLabel_replyInt + stateSeparator + config.replyInterval + 's'
        menuIDs.push(GM_registerMenuCommand(riLabel, async function() {
            while (true) {
                var replyInterval = prompt(`${ messages.prompt_updateReplyInt }:`, config.replyInterval)
                if (replyInterval === null) break // user cancelled so do nothing
                else if (!isNaN(parseInt(replyInterval)) && parseInt(replyInterval) > 4) { // valid int set
                    saveSetting('replyInterval', parseInt(replyInterval))
                    alert(messages.alert_replyIntUpdated + '!', messages.alert_willReplyEvery + ' '
                        + replyInterval + ' ' + messages.unit_seconds + '.')
                    if (config.infinityMode) { // reset reply interval w/o ending session
                        clearTimeout(infinityMode.isActive) ; infinityMode.isActive = null ; await chatgpt.isIdle()
                        if (config.infinityMode && !infinityMode.isActive) { // double-check in case de-activated before scheduled
                            infinityMode.isActive = setTimeout(infinityMode.continue, parseInt(config.replyInterval) * 1000)
                    }}
                    for (var id of menuIDs) GM_unregisterMenuCommand(id) ; registerMenu() // refresh menu
                    break
        }}}))

        // Add command to check for updates
        var ucLabel = '🚀 Check for Updates'
        menuIDs.push(GM_registerMenuCommand(ucLabel, function() { checkForUpdates.fromMenu = true ; checkForUpdates() }))
    }

    function getUserscriptManager() { try { return GM_info.scriptHandler } catch(error) { return 'other' }}

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
                        if (!checkForUpdates.fromMenu) // if auto-alert...
                            saveSetting('skipNextUpdate', false) // ...reset hidden alert setting for fresh decision

                        // Alert to update
                        alert('Update available! 🚀',
                            `An update to ${ messages.appName } (v${ latestVer }) is available!   `
                                + `<a target="_blank" href="https://github.com/adamlui/chatgpt-infinity/commits/main/greasemonkey/chatgpt-infinity.user.js" style="font-size: 0.7rem">View changes</a>`,
                            function update() { // button
                                window.open(( updateURL.includes('.meta.') ? GM_info.script.downloadURL : updateURL )
                                    + '?t=' + Date.now(), '_blank')
                                location.reload() },
                            !checkForUpdates.fromMenu ? // checkbox if auto-alert
                                function dontShowAgainUntilNextUpdate() {
                                    saveSetting('skipNextUpdate', !config.skipNextUpdate)
                                    saveSetting('skippedVer', config.skipNextUpdate ? latestVer : false) }
                                : ''
                        )
                        return
                }}

                if (checkForUpdates.fromMenu) { // alert to no update found
                    alert('Up-to-date!', // title
                        `${ messages.appName } (v${ currentVer }) is up-to-date!`) // msg
    }}})}

    // Define TOGGLE functions

    function insertToggle() {
        var chatHistoryNav = document.querySelector('nav[aria-label="Chat history"]') || {}
        var firstButton = chatHistoryNav.querySelector('a') || {}
        if (chatgpt.history.isOff()) try { firstButton.parentNode.nextElementSibling.style.display = 'none' } catch (error) {} // hide enable-history spam div
        if (!chatHistoryNav.contains(toggleLabel)) try { chatHistoryNav.insertBefore(toggleLabel, firstButton.parentNode) } catch (error) {} // insert toggle
    }

    function updateToggleHTML() {
        while (toggleLabel.firstChild) toggleLabel.firstChild.remove() // clear old content

        // Create elements
        const navicon = document.createElement('img') ; navicon.width = 18
        navicon.src = 'https://raw.githubusercontent.com/adamlui/chatgpt-infinity/main/media/images/icons/infinity-symbol/white/icon64.png'
        const label = document.createElement('label') ; label.className = 'switch' ; label.id = 'infToggleLabel'
        const labelText = document.createTextNode(messages.menuLabel_infinityMode + ' '
            + messages['state_' + ( config.infinityMode ? 'enabled' : 'disabled' )])
        const input = document.createElement('input') ; input.id = 'infToggleInput'
        input.type = 'checkbox' ; input.checked = config.infinityMode ; input.disabled = true
        const span = document.createElement('span') ; span.className = 'slider'

        // Append elements
        label.appendChild(input) ; label.appendChild(span)
        toggleLabel.appendChild(navicon) ; toggleLabel.appendChild(label) ; toggleLabel.appendChild(labelText)

        // Update visibility
        toggleLabel.style.display = config.toggleHidden ? 'none' : 'flex'
    }

    var infinityMode = {

        activate: async () => {
            notify(messages.menuLabel_infinityMode + ': ON')
            try { document.querySelector('nav a').click() } catch (error) { return }
            setTimeout(() => {
                chatgpt.send('generate a single random q&a' + ( config.replyLanguage ? ( ' in ' + config.replyLanguage ) : '' )
                                                            + '. don\'t type anything else') }, 500)
            config.infinityMode = true ; await chatgpt.isIdle()
            if (config.infinityMode && !infinityMode.isActive) // double-check in case de-activated before scheduled
                infinityMode.isActive = setTimeout(infinityMode.continue, parseInt(config.replyInterval) * 1000)
        },

        continue: async () => {
            chatgpt.send('do it again')
            if (!config.autoScrollDisabled) try { chatgpt.scrollToBottom() } catch(error) {}
            await chatgpt.isIdle() // before starting delay till next iteration
            if (infinityMode.isActive) // replace timer
                infinityMode.isActive = setTimeout(infinityMode.continue, parseInt(config.replyInterval) * 1000)
        },

        deactivate: () => {
            chatgpt.stop() ; clearTimeout(infinityMode.isActive) ; infinityMode.isActive = null
            document.querySelector('#infToggleInput').checked = false // for window listener
            notify(messages.menuLabel_infinityMode + ': OFF')
            config.infinityMode = false // in case window listener toggled
        },

        toggle: () => { config.infinityMode ? infinityMode.activate() : infinityMode.deactivate() }
    }

})()
