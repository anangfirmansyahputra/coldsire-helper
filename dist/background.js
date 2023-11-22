/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**************************************!*\
  !*** ./src/background/background.ts ***!
  \**************************************/
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === "getCookies") {
        const { url } = message;
        chrome.cookies.getAll({ url }, (cookies) => {
            sendResponse(cookies);
        });
    }
    if (message.action === "openPopup") {
        chrome.tabs.create({
            url: "select.html",
        });
    }
    return true;
});

/******/ })()
;
//# sourceMappingURL=background.js.map