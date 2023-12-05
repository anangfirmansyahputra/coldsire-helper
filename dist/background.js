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
let smartlead;
let workspace;
let href;
let userId;
let storage;
const path = "http://localhost:3000/";
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
                if (url === "https://app.smartlead.ai/app/email-accounts") {
                    yield chrome.cookies.getAll({ url }, function (cookies) {
                        const parseCookie = JSON.stringify(cookies.map(cookie => ({
                            domain: cookie.name,
                            value: cookie.value
                        })));
                        chrome.cookies.remove({
                            url: path,
                            name: "link_account_cookie"
                        }, function (details) {
                            console.log('Cookie removed: ', details);
                        });
                        chrome.cookies.remove({
                            url: path,
                            name: "instantly"
                        }, function (details) {
                            console.log('Cookie removed: ', details);
                        });
                        chrome.cookies.remove({
                            url: path,
                            name: "userId"
                        }, function (details) {
                            console.log('Cookie removed: ', details);
                        });
                        chrome.cookies.set({
                            url: path,
                            name: "smartlead",
                            // @ts-ignore
                            value: smartlead.cookie,
                        });
                        chrome.cookies.set({
                            url: path,
                            name: "userId",
                            // @ts-ignore
                            value: smartlead.userId,
                        });
                        chrome.cookies.set({
                            url: path,
                            name: "link_account_cookie",
                            value: parseCookie,
                        });
                        sendResponse('smartlead');
                    });
                }
                else {
                    yield chrome.cookies.getAll({ url }, function (cookies) {
                        const filterCookies = cookies.find(cookie => cookie.name === '__session');
                        const parseCookie = JSON.stringify(cookies.map(cookie => ({
                            domain: cookie.name,
                            value: cookie.value
                        })));
                        chrome.cookies.remove({
                            url: path,
                            name: "link_account_cookie"
                        }, function (details) {
                            console.log('Cookie removed: ', details);
                        });
                        chrome.cookies.remove({
                            url: path,
                            name: "smartlead"
                        }, function (details) {
                            console.log('Cookie removed: ', details);
                        });
                        chrome.cookies.remove({
                            url: path,
                            name: "link_account_cookie"
                        }, function (details) {
                            console.log('Cookie removed: ', details);
                        });
                        chrome.cookies.remove({
                            url: path,
                            name: "userId"
                        }, function (details) {
                            console.log('Cookie removed: ', details);
                        });
                        chrome.cookies.set({
                            url: path,
                            name: "instantly",
                            value: filterCookies.value,
                        });
                        chrome.cookies.set({
                            url: path,
                            name: "link_account_cookie",
                            value: parseCookie,
                        });
                        sendResponse(allCookies);
                    });
                }
            });
        });
    }
    if (message.action === "platform") {
        chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
            return __awaiter(this, void 0, void 0, function* () {
                var tab = tabs[0];
                var url = tab.url;
                sendResponse(url);
            });
        });
    }
    if (message.action === "sendLocalStorage") {
        const { localStorage } = message;
        smartlead = localStorage;
    }
    if (message.action === "fromPopup") {
        const { platform } = message;
        chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
            return __awaiter(this, void 0, void 0, function* () {
                var tab = tabs[0];
                var url = tab.url;
                chrome.cookies.remove({
                    url: path,
                    name: "link_account_cookie"
                }, function (details) {
                    console.log('Cookie removed: ', details);
                });
                if (platform === "sm") {
                    yield chrome.cookies.getAll({ url }, function (cookies) {
                        const parseCookie = JSON.stringify(cookies.map(cookie => ({
                            domain: cookie.name,
                            value: cookie.value
                        })));
                        chrome.cookies.remove({
                            url: path,
                            name: "instantly"
                        }, function (details) {
                            console.log('Cookie removed: ', details);
                        });
                        chrome.cookies.remove({
                            url: path,
                            name: "userId"
                        }, function (details) {
                            console.log('Cookie removed: ', details);
                        });
                        chrome.cookies.set({
                            url: path,
                            name: "smartlead",
                            // @ts-ignore
                            value: smartlead.cookie,
                        });
                        chrome.cookies.set({
                            url: path,
                            name: "userId",
                            // @ts-ignore
                            value: smartlead.userId,
                        });
                        chrome.cookies.set({
                            url: path,
                            name: "link_account_cookie",
                            value: parseCookie
                        });
                        sendResponse(smartlead);
                    });
                }
                else {
                    yield chrome.cookies.getAll({ url }, function (cookies) {
                        const filterCookies = cookies.find(cookie => cookie.name === '__session');
                        const parseCookie = JSON.stringify(cookies.map(cookie => ({
                            domain: cookie.name,
                            value: cookie.value
                        })));
                        chrome.cookies.remove({
                            url: path,
                            name: "smartlead"
                        }, function (details) {
                            console.log('Cookie removed: ', details);
                        });
                        chrome.cookies.remove({
                            url: path,
                            name: "userId"
                        }, function (details) {
                            console.log('Cookie removed: ', details);
                        });
                        chrome.cookies.set({
                            url: path,
                            name: "instantly",
                            value: filterCookies.value,
                        });
                        chrome.cookies.set({
                            url: path,
                            name: "link_account_cookie",
                            value: parseCookie
                        });
                        sendResponse(allCookies);
                    });
                }
            });
        });
    }
    if (message.action === "sendUser") {
        userId = message.data;
    }
    if (message.action === "getUser") {
        sendResponse(userId);
    }
    if (message.action === "href") {
        href = message.url;
    }
    if (message.action === "sendHref") {
        sendResponse(href);
    }
    if (message.action === "storage") {
        storage = message.data;
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