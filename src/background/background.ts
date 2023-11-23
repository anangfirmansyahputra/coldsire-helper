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

      await chrome.cookies.getAll({ url }, function (cookies) {
        cookies.map((cookie) => {
          chrome.cookies.set({
            url: "http://localhost:3000",
            name: cookie.name,
            value: cookie.value,
          })
        })
        sendResponse(allCookies);
      });

    });
  }

  return true;
});
