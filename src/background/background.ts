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

  if (message.action === "navigate") {
    chrome.cookies.set({
      url: "http://localhost:3001",
      name: "test",
      value: "x"
    })

    sendResponse(true)
  }

  return true;
});
