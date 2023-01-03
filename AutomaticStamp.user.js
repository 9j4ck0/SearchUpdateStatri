// ==UserScript==
// @name         Automatic Stamp
// @namespace    http//tampermonkey.net/
// @version      0.0.2
// @description  Automatic press Stamp for sheet open into tab
// @author       9j3thr0 (giacomo.dallape)
// @match        https://statri-web.dipvvf.it/EditSheet/Edit/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// @run-at       document-end
// ==/UserScript==

(function() {
    'use strict';
    var form = document.getElementById('sheet-action-bar');
    var input = form.getElementsByTagName('input');
    for (var x of form.getElementsByTagName('input')) {
        if(x.getAttribute('value') == 'Stampa' && x.getAttribute('title') == 'Stampa la scheda su un file PDF.') {
            console.log('Avvio stampa scheda!');
            x.click();
        }
    }
})();
