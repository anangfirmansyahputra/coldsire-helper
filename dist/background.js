chrome.runtime.onMessage.addListener(((e,o,t)=>{if("getCookies"===e.action){const{url:o}=e;chrome.cookies.getAll({url:o},(e=>{t(e)}))}return"openPopup"===e.action&&chrome.tabs.create({url:"select.html"}),!0}));