chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === "getCookies") {
    const { url } = message;
    chrome.cookies.getAll({ url }, (cookies) => {
      sendResponse(cookies);
      console.log(cookies);
    });
  }

  if (message.action === "openPopup") {
    // chrome.windows.create({ url: "popup.html", type: "panel" });
    chrome.tabs.create({
      url: "select.html",
    });
  }

  return true;
});
