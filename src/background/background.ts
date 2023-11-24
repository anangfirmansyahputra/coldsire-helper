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
        // chrome.tabs.executeScript(tabs[0].id, { code: 'localStorage.getItem("smartlead")' }, function (result) {
        //   console.log(result[0]);
        // });
        console.log('smartlead');

        chrome.cookies.set({
          url: "http://localhost:3000",
          name: "smartlead",
          value: message.localStorage,
        })

        sendResponse('smartlead');
      } else {
        await chrome.cookies.getAll({ url }, function (cookies) {
          cookies.map((cookie) => {
            chrome.cookies.set({
              url: "http://localhost:3000",
              name: cookie.name,
              value: cookie.value,
            })
          })

          console.log(cookies);
          sendResponse(allCookies);
        });
      }

    });
  }

  return true;
});
