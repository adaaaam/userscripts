// ==UserScript==
// @name          Hide Forum Images
// @version       2024.2.5
// @author        Adam Lui
// @namespace     https://adamlui.com
// @description   Hides images/videos from XenForo, vBulletin & Discourse forums.
// @license       MIT
// @icon          https://i.imgur.com/TABwyUq.png
// @compatible    chrome
// @compatible    firefox
// @compatible    opera
// @compatible    safari
// @compatible    edge
// @match         *://*/*
// @downloadURL   https://update.greasyfork.org/scripts/12639/hide-forum-images.user.js
// @updateURL     https://update.greasyfork.org/scripts/12639/hide-forum-images.meta.js
// @homepageURL   https://github.com/adamlui/userscripts
// @supportURL    https://github.com/adamlui/userscripts/issues
// ==/UserScript==

if (document.querySelector('[src*="vbulletin"], [src*="discourse"]') || /xenforo/i.test(document.querySelector('.copyright').textContent)) {
    const css = `img, [style*="background-image"], [class*="avatar"], [class*="player"] { display:none !important; }`
    const styleNode = document.createElement('style') ; styleNode.innerText = css
    document.head.appendChild(styleNode)
}
