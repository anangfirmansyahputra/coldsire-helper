/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/background/background.ts":
/*!**************************************!*\
  !*** ./src/background/background.ts ***!
  \**************************************/
/***/ (function() {

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    let allCookies;
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
    if (message.action === "navigate") {
        chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
            return __awaiter(this, void 0, void 0, function* () {
                var tab = tabs[0];
                var url = tab.url;
                yield chrome.cookies.getAll({ url }, function (cookies) {
                    cookies.map((cookie) => {
                        chrome.cookies.set({
                            url: "http://localhost:3000",
                            name: cookie.name,
                            value: cookie.value,
                        });
                    });
                    sendResponse(allCookies);
                });
            });
        });
    }
    return true;
});


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/background/background.ts"]();
/******/ 	
/******/ })()
;
//# sourceMappingURL=background.js.map