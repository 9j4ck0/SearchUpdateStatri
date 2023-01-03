// ==UserScript==
// @name         Activate button search statriweb
// @namespace    http//tampermonkey.net/
// @version      0.0.2
// @description  Activate button search statriweb for search sheet for number and year
// @author       9j3thr0 (giacomo.dallape)
// @match        https://statri-web.dipvvf.it/SheetList*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// @run-at       document-end
// ==/UserScript==

(function() {
    'use strict';
    var form = document.getElementById("filters-form");
    var numScheda = document.getElementById('NumeroScheda');
    var annoScheda = document.getElementById('Anno');
    var buttonElement = document.createElement("button");
    buttonElement.setAttribute('type', 'submit');
    if(buttonElement.addEventListener){
        buttonElement.addEventListener("click", function(e) {
            numScheda.value = '';
            console.log('Remove value Numero scheda');
        }, false);
        //Modern browsers
    }else if(buttonElement.attachEvent){
        buttonElement.attachEvent('onclick', function(e) {
            numScheda.value = '';
            console.log('Remove value Numero scheda for old browser');
        });
        //Old IE
    }
    buttonElement.textContent = 'Search';
    if(numScheda.getAttribute('type') == 'hidden') {
        console.log('Il numero di scheda risulta nascosto');
        numScheda.setAttribute('type', 'text');
        numScheda.setAttribute('value', '');
        numScheda.setAttribute('placeholder', 'Numero Scheda');
        console.info(numScheda.getAttribute('type'));
    }
    if(annoScheda.getAttribute('type') == 'hidden') {
        console.log('Il numero di anno risulta nascosto');
        annoScheda.setAttribute('type', 'text');
        annoScheda.setAttribute('value', '');
        annoScheda.setAttribute('placeholder', 'Anno');
        console.info(annoScheda.getAttribute('type'));
    }
    form.setAttribute("target","_blank");
    form.getElementsByTagName('div')[0].appendChild(buttonElement);
})();
