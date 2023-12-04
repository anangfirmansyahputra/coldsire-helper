/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/contentScript/contentScript.ts":
/*!********************************************!*\
  !*** ./src/contentScript/contentScript.ts ***!
  \********************************************/
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
const createComp = () => {
    var _a, _b;
    const existCom = document.getElementById('new-comp');
    if (!existCom) {
        const targetElemet = document.getElementsByClassName('col-md-12')[0];
        const children = (_b = (_a = targetElemet === null || targetElemet === void 0 ? void 0 : targetElemet.children) === null || _a === void 0 ? void 0 : _a[0]) === null || _b === void 0 ? void 0 : _b.className;
        if (!children)
            return null;
        const matches = children.match(/(\D+)(\d+)/);
        const container = document.createElement('div');
        container.classList.add(`${matches[1]}${Number(matches[2]) + 1}`);
        container.id = "new-comp";
        // <img class="${matches[1]}${Number(matches[2]) + 2}" src"/assets/favicon-3.png" alt="Connector">
        container.innerHTML =
            `
      <div>
   
        <?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg class="${matches[1]}${Number(matches[2]) + 2}" version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="16.000000pt" height="16.000000pt" viewBox="0 0 16.000000 16.000000"
 preserveAspectRatio="xMidYMid meet">

<g transform="translate(0.000000,16.000000) scale(0.100000,-0.100000)"
fill="#000000" stroke="none">
<path d="M0 80 l0 -80 80 0 80 0 0 80 0 80 -80 0 -80 0 0 -80z m149 23 c-1
-21 -3 -30 -6 -21 -4 15 -6 15 -34 0 -27 -16 -31 -16 -60 0 l-30 18 3 -33 c3
-28 7 -33 38 -38 l35 -6 -42 -2 -43 -1 0 60 0 60 70 0 70 0 -1 -37z m-1 -65
c-5 -16 -48 -24 -48 -9 0 8 17 16 43 20 5 0 7 -5 5 -11z"/>
<path d="M30 121 c0 -5 11 -16 25 -25 23 -15 27 -15 50 0 37 24 30 34 -25 34
-27 0 -50 -4 -50 -9z"/>
</g>
</svg>

      </div>
      <hr class="MuiDivider-root MuiDivider-fullWidth MuiDivider-vertical MuiDivider-flexItem css-1d7q5f8">
      <div>
        <p class="${matches[1]}${Number(matches[2]) + 3} mb-0">Any Provider</p>
        <h6 class="mb-0 ${matches[1]}${Number(matches[2]) + 4}">
        ColdSire</h6>
        </div>
    `;
        targetElemet.appendChild(container);
        container.addEventListener('click', function () {
            chrome.runtime.sendMessage({ action: "navigate", url: "https://www.coldsire.com", localStorage: localStorage.getItem('smartlead') }, (response) => {
                window.location.href = "http://localhost:3000/dashboard/link";
            });
        });
    }
};
const createCompSmartlead = () => __awaiter(this, void 0, void 0, function* () {
    const targetElement = document.getElementsByClassName("connect-box-grid")[0];
    const cardContainer = document.createElement("div");
    chrome.runtime.sendMessage({ action: "getCookies", url: "https://www.coldsire.com/" }, (cookies) => {
        const login = (cookies === null || cookies === void 0 ? void 0 : cookies.find((cookie) => cookie.name === "__Secure-next-auth.session-token"))
            ? true
            : false;
    });
    if (targetElement) {
        const accountCard = document.createElement("div");
        accountCard.classList.add("add-account-card", "new-button");
        cardContainer.setAttribute("data-v-6eaf4c12", "");
        cardContainer.classList.add("q-item", "q-item-type", "row,no-wrap", "q-item--clickable", "q-link", "cursor-pointer", "q-focusable", "q-hoverable", "email-connect-card");
        const divHelper = document.createElement("div");
        divHelper.classList.add("q-focus-helper");
        cardContainer.innerHTML = `<svg
    width="140"
    height="74"
    viewBox="0 0 140 24"
    fill="none"
    class="email-provider-icon"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M11.492 7.14C10.7667 7.14 10.1207 7.31 9.554 7.65C9.01 7.96733 8.54533 8.44333 8.16 9.078C7.79733 9.69 7.52533 10.438 7.344 11.322C7.16267 12.206 7.072 13.2147 7.072 14.348C7.072 15.8667 7.25333 17.1473 7.616 18.19C8.00133 19.2327 8.55667 20.026 9.282 20.57C10.03 21.0913 10.948 21.352 12.036 21.352C13.0333 21.352 13.974 21.2047 14.858 20.91C15.7647 20.6153 16.6373 20.2527 17.476 19.822V25.364C16.4787 25.84 15.4247 26.18 14.314 26.384C13.2033 26.6107 12.07 26.724 10.914 26.724C8.35267 26.724 6.26733 26.2027 4.658 25.16C3.04867 24.1173 1.87 22.6667 1.122 20.808C0.374 18.9267 0 16.762 0 14.314C0 12.478 0.238 10.8007 0.714 9.282C1.21267 7.74067 1.938 6.41467 2.89 5.304C3.86467 4.17067 5.04333 3.298 6.426 2.686C7.83133 2.074 9.44067 1.768 11.254 1.768C12.342 1.768 13.5547 1.91533 14.892 2.21C16.2293 2.50467 17.442 2.924 18.53 3.468L16.456 8.636C15.6853 8.20533 14.9033 7.854 14.11 7.582C13.3393 7.28733 12.4667 7.14 11.492 7.14Z"
      fill="#18181B"
    />
    <path
      d="M38.8012 16.932C38.8012 18.496 38.5972 19.89 38.1892 21.114C37.7812 22.338 37.1805 23.3693 36.3872 24.208C35.6165 25.024 34.6645 25.6473 33.5312 26.078C32.4205 26.5087 31.1625 26.724 29.7572 26.724C28.4425 26.724 27.2298 26.5087 26.1192 26.078C25.0085 25.6473 24.0565 25.024 23.2632 24.208C22.4698 23.3693 21.8465 22.338 21.3932 21.114C20.9625 19.89 20.7472 18.496 20.7472 16.932C20.7472 14.8467 21.1098 13.09 21.8352 11.662C22.5605 10.2113 23.6032 9.112 24.9632 8.364C26.3458 7.616 27.9778 7.242 29.8592 7.242C31.5818 7.242 33.1118 7.616 34.4492 8.364C35.8092 9.112 36.8745 10.2113 37.6452 11.662C38.4158 13.09 38.8012 14.8467 38.8012 16.932ZM27.7172 16.932C27.7172 17.9973 27.7852 18.904 27.9212 19.652C28.0572 20.4 28.2838 20.9667 28.6012 21.352C28.9185 21.7147 29.3265 21.896 29.8252 21.896C30.3465 21.896 30.7432 21.7147 31.0152 21.352C31.3098 20.9667 31.5138 20.4 31.6272 19.652C31.7632 18.904 31.8312 17.9973 31.8312 16.932C31.8312 15.8667 31.7632 14.9713 31.6272 14.246C31.5138 13.5207 31.2985 12.9767 30.9812 12.614C30.6865 12.2513 30.2898 12.07 29.7912 12.07C29.0432 12.07 28.5105 12.478 28.1932 13.294C27.8758 14.11 27.7172 15.3227 27.7172 16.932Z"
      fill="#18181B"
    />
    <path
      d="M48.9127 26.384H42.0447V0.543999H48.9127V26.384Z"
      fill="#18181B"
    />
    <path
      d="M58.2101 26.724C56.4648 26.724 55.0141 25.8967 53.8581 24.242C52.7021 22.5873 52.1241 20.1733 52.1241 17C52.1241 13.7813 52.7135 11.356 53.8921 9.724C55.0935 8.06933 56.6348 7.242 58.5161 7.242C59.2641 7.242 59.9101 7.36667 60.4541 7.616C60.9981 7.84267 61.4628 8.17133 61.8481 8.602C62.2561 9.01 62.6075 9.47467 62.9021 9.996H63.0041C62.9135 9.52 62.8455 8.86267 62.8001 8.024C62.7775 7.18533 62.7661 6.36933 62.7661 5.576V0.543999H69.6681V26.384H64.5341L63.0041 24.004H62.7661C62.4941 24.5027 62.1541 24.956 61.7461 25.364C61.3381 25.772 60.8395 26.1007 60.2501 26.35C59.6835 26.5993 59.0035 26.724 58.2101 26.724ZM61.1681 21.59C61.9615 21.59 62.5281 21.2613 62.8681 20.604C63.2081 19.9467 63.3781 18.938 63.3781 17.578V17.068C63.3781 15.5947 63.2195 14.4613 62.9021 13.668C62.5848 12.8747 61.9841 12.478 61.1001 12.478C60.5335 12.478 60.0461 12.852 59.6381 13.6C59.2528 14.348 59.0601 15.5153 59.0601 17.102C59.0601 18.666 59.2641 19.8107 59.6721 20.536C60.0801 21.2387 60.5788 21.59 61.1681 21.59Z"
      fill="#18181B"
    />
    <path
      d="M89.5361 19.006C89.5361 20.3207 89.2301 21.5673 88.6181 22.746C88.0287 23.9247 87.0541 24.888 85.6941 25.636C84.3341 26.3613 82.5321 26.724 80.2881 26.724C79.1094 26.724 78.1121 26.6673 77.2961 26.554C76.5027 26.4633 75.7774 26.3047 75.1201 26.078C74.4627 25.8513 73.7374 25.5567 72.9441 25.194V19.346C74.2587 20.0033 75.5734 20.5133 76.8881 20.876C78.2027 21.216 79.3361 21.386 80.2881 21.386C80.7867 21.386 81.2061 21.3067 81.5461 21.148C81.8861 20.9893 82.1354 20.774 82.2941 20.502C82.4754 20.23 82.5661 19.924 82.5661 19.584C82.5661 19.1533 82.4641 18.7907 82.2601 18.496C82.0561 18.2013 81.6707 17.8953 81.1041 17.578C80.5374 17.2607 79.7101 16.8753 78.6221 16.422C77.6021 15.9913 76.7294 15.5493 76.0041 15.096C75.3014 14.6427 74.7347 14.1327 74.3041 13.566C73.8734 12.9993 73.5561 12.342 73.3521 11.594C73.1481 10.8233 73.0461 9.91667 73.0461 8.874C73.0461 7.31 73.4314 6.00667 74.2021 4.964C74.9954 3.89867 76.0721 3.10533 77.4321 2.584C78.7921 2.04 80.3561 1.768 82.1241 1.768C83.8014 1.768 85.2634 1.94933 86.5101 2.312C87.7794 2.652 88.8107 3.04867 89.6041 3.502L87.5301 8.568C86.6234 8.092 85.6601 7.718 84.6401 7.446C83.6201 7.15133 82.7134 7.004 81.9201 7.004C81.4441 7.004 81.0587 7.072 80.7641 7.208C80.4694 7.344 80.2541 7.53667 80.1181 7.786C79.9821 8.01267 79.9141 8.27333 79.9141 8.568C79.9141 8.95333 80.0387 9.29333 80.2881 9.588C80.5601 9.88267 81.0247 10.2113 81.6821 10.574C82.3621 10.914 83.3027 11.3787 84.5041 11.968C85.5921 12.4667 86.5101 13.022 87.2581 13.634C88.0061 14.246 88.5727 14.9827 88.9581 15.844C89.3434 16.6827 89.5361 17.7367 89.5361 19.006Z"
      fill="#18181B"
    />
    <path
      d="M99.2827 7.582V26.384H92.4147V7.582H99.2827ZM95.8827 0C96.8573 0 97.696 0.192666 98.3987 0.577999C99.124 0.963332 99.4867 1.734 99.4867 2.89C99.4867 4.00067 99.124 4.76 98.3987 5.168C97.696 5.55333 96.8573 5.746 95.8827 5.746C94.8853 5.746 94.0353 5.55333 93.3327 5.168C92.63 4.76 92.2787 4.00067 92.2787 2.89C92.2787 1.734 92.63 0.963332 93.3327 0.577999C94.0353 0.192666 94.8853 0 95.8827 0Z"
      fill="#18181B"
    />
    <path
      d="M114.324 7.242C114.71 7.242 115.095 7.26467 115.48 7.31C115.888 7.35533 116.172 7.40067 116.33 7.446L115.684 13.566C115.458 13.5207 115.174 13.4753 114.834 13.43C114.517 13.3847 113.984 13.362 113.236 13.362C112.987 13.362 112.681 13.4073 112.318 13.498C111.956 13.566 111.593 13.7247 111.23 13.974C110.89 14.2233 110.596 14.5973 110.346 15.096C110.12 15.5947 110.006 16.2747 110.006 17.136V26.384H103.138V7.582H108.204L109.292 10.574H109.632C109.95 9.962 110.358 9.40667 110.856 8.908C111.355 8.38667 111.899 7.97867 112.488 7.684C113.1 7.38933 113.712 7.242 114.324 7.242Z"
      fill="#18181B"
    />
    <path
      d="M126.179 7.242C127.947 7.242 129.477 7.55933 130.769 8.194C132.061 8.82867 133.047 9.78067 133.727 11.05C134.43 12.3193 134.781 13.9173 134.781 15.844V18.734H124.105C124.15 19.7087 124.456 20.5133 125.023 21.148C125.612 21.7827 126.496 22.1 127.675 22.1C128.786 22.1 129.794 21.9867 130.701 21.76C131.63 21.5333 132.582 21.1707 133.557 20.672V25.33C132.718 25.806 131.766 26.1573 130.701 26.384C129.658 26.6107 128.31 26.724 126.655 26.724C124.864 26.724 123.255 26.3953 121.827 25.738C120.399 25.058 119.266 24.004 118.427 22.576C117.588 21.148 117.169 19.3233 117.169 17.102C117.169 14.8353 117.543 12.9767 118.291 11.526C119.062 10.0753 120.116 8.99867 121.453 8.296C122.813 7.59333 124.388 7.242 126.179 7.242ZM126.485 11.662C125.873 11.662 125.363 11.9 124.955 12.376C124.547 12.852 124.309 13.6113 124.241 14.654H128.661C128.661 14.0873 128.57 13.5887 128.389 13.158C128.208 12.7047 127.958 12.342 127.641 12.07C127.324 11.798 126.938 11.662 126.485 11.662Z"
      fill="#18181B"
    />
  </svg>
  `;
        const providerText = document.createElement("p");
        providerText.classList.add("provider-text");
        providerText.textContent = "Import from ColdSire";
        providerText.setAttribute("data-v-6eaf4c12", "");
        cardContainer.appendChild(divHelper);
        accountCard.appendChild(cardContainer);
        accountCard.appendChild(providerText);
        targetElement.appendChild(accountCard);
        cardContainer.addEventListener("click", function () {
            chrome.runtime.sendMessage({ action: "navigate", url: "https://www.coldsire.com", localStorage: localStorage.getItem('smartlead') }, (response) => {
                window.location.href = "http://localhost:3000/dashboard/link";
            });
        });
    }
});
window.onload = (event) => __awaiter(this, void 0, void 0, function* () {
    setTimeout(() => {
        // contentScript.js
        // chrome.runtime.sendMessage({ action: "localStorage", data: localStorage.getItem('smartlead') });
        if (window.location.href.includes('https://app.smartlead.ai/')) {
            chrome.runtime.sendMessage({ action: "sendLocalStorage", localStorage: localStorage.getItem('smartlead') });
            chrome.runtime.sendMessage({
                action: "platform",
            }, (platform) => {
            });
            let interfal;
            interfal = setInterval(() => {
                if (window.location.href.includes("https://app.smartlead.ai/")) {
                    const targetElement = document.getElementsByClassName("connect-box-grid")[0];
                    createCompSmartlead();
                    if (targetElement) {
                        clearInterval(interfal);
                    }
                }
            }, 1000);
        }
        else if (window.location.href.includes('https://app.instantly.ai/')) {
            let interfal;
            chrome.runtime.sendMessage({
                action: "platform",
            }, (platform) => {
            });
            interfal = setInterval(() => {
                if (window.location.href.includes("https://app.instantly.ai/")) {
                    createComp();
                    // clearInterval(interfal)
                }
            }, 1000);
        }
    }, 100);
});


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/contentScript/contentScript.ts"]();
/******/ 	
/******/ })()
;
//# sourceMappingURL=contentScript.js.map