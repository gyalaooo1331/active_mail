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
        // �ŏ��̗v�f�� "passw0rd00" �Ƃ����l�����
        elements[0].value = "passw0rd00";
    }

    let elementsLogin = document.querySelectorAll('[value="  ���O�C��  "]');

    // �����̗v�f�����������ꍇ�A�ŏ��̗v�f���N���b�N
    if (elementsLogin.length > 0) {
        elementsLogin[0].click();
    }
})();