let smartlead;

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
    chrome.tabs.query({ active: true, currentWindow: true }, async function (tabs) {
      var tab = tabs[0];
      var url = tab.url;

      if (url === "https://app.smartlead.ai/app/email-accounts") {
        console.log('smartlead');

        chrome.cookies.set({
          url: "http://localhost:3000",
          name: "smartlead",
          value: message.localStorage,
        })

        sendResponse('smartlead');
      } else {
        await chrome.cookies.getAll({ url }, function (cookies) {
          const filterCookies = cookies.find(cookie => cookie.name === '__session')

          console.log(cookies);
          // cookies.map((cookie) => {
          chrome.cookies.set({
            url: "http://localhost:3000",
            name: "instantly",
            value: filterCookies.value,
          })
          // })

          sendResponse(allCookies);
        });
      }

    });
  }

  if (message.action === "platform") {
    chrome.tabs.query({ active: true, currentWindow: true }, async function (tabs) {
      var tab = tabs[0];
      var url = tab.url;

      sendResponse(url)

    });
  }

  if (message.action === "sendLocalStorage") {
    const { localStorage } = message

    smartlead = localStorage
  }

  if (message.action === "fromPopup") {
    const { platform } = message

    chrome.tabs.query({ active: true, currentWindow: true }, async function (tabs) {
      var tab = tabs[0];
      var url = tab.url;

      if (platform === "sm") {
        console.log({ smartlead });
        chrome.cookies.set({
          url: "http://localhost:3000",
          name: "smartlead",
          // @ts-ignore
          value: smartlead,
        })

        sendResponse(smartlead);
      } else {
        await chrome.cookies.getAll({ url }, function (cookies) {
          const filterCookies = cookies.find(cookie => cookie.name === '__session')

          console.log(cookies);
          // cookies.map((cookie) => {
          chrome.cookies.set({
            url: "http://localhost:3000",
            name: "instantly",
            value: filterCookies.value,
          })
          // })

          sendResponse(allCookies);
        });
      }

    });
  }

  return true;
});
