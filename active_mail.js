// ==UserScript==
// @name         Active mail
// @version      1.0
// @description  Active mail
// @author       KH
// @match        https://activemail.kagoya.com/
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    let elements = document.querySelectorAll('[name="am_authpasswd"]');

    if (elements.length > 0) {
        // 最初の要素に "passw0rd00" という値を入力
        elements[0].value = "passw0rd00";
    }

    let elementsLogin = document.querySelectorAll('[value="  ログイン  "]');

    // 複数の要素が見つかった場合、最初の要素をクリック
    if (elementsLogin.length > 0) {
        elementsLogin[0].click();
    }
})();