let smartlead;
let workspace;
let href;
let userId;

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

        chrome.cookies.remove({
          url: "http://localhost:3000/",
          name: "instantly"
        }, function (details) {
          console.log('Cookie removed: ', details);
        });

        chrome.cookies.remove({
          url: "http://localhost:3000/",
          name: "userId"
        }, function (details) {
          console.log('Cookie removed: ', details);
        });

        chrome.cookies.set({
          url: "http://localhost:3000/",
          name: "smartlead",
          // @ts-ignore
          value: smartlead.cookie,
        })

        chrome.cookies.set({
          url: "http://localhost:3000/",
          name: "userId",
          // @ts-ignore
          value: smartlead.userId,
        })

        sendResponse('smartlead');
      } else {
        await chrome.cookies.getAll({ url }, function (cookies) {
          const filterCookies = cookies.find(cookie => cookie.name === '__session')

          chrome.cookies.remove({
            url: "http://localhost:3000/",
            name: "smartlead"
          }, function (details) {
            console.log('Cookie removed: ', details);
          });

          chrome.cookies.remove({
            url: "http://localhost:3000/",
            name: "userId"
          }, function (details) {
            console.log('Cookie removed: ', details);
          });

          chrome.cookies.set({
            url: "http://localhost:3000/",
            name: "instantly",
            value: filterCookies.value,
          })

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
        chrome.cookies.remove({
          url: "http://localhost:3000/",
          name: "instantly"
        }, function (details) {
          console.log('Cookie removed: ', details);
        });

        chrome.cookies.remove({
          url: "http://localhost:3000/",
          name: "userId"
        }, function (details) {
          console.log('Cookie removed: ', details);
        });

        chrome.cookies.set({
          url: "http://localhost:3000/",
          name: "smartlead",
          // @ts-ignore
          value: smartlead.cookie,
        })

        chrome.cookies.set({
          url: "http://localhost:3000/",
          name: "userId",
          // @ts-ignore
          value: smartlead.userId,
        })

        sendResponse(smartlead);
      } else {
        await chrome.cookies.getAll({ url }, function (cookies) {
          const filterCookies = cookies.find(cookie => cookie.name === '__session')

          chrome.cookies.remove({
            url: "http://localhost:3000/",
            name: "smartlead"
          }, function (details) {
            console.log('Cookie removed: ', details);
          });

          chrome.cookies.remove({
            url: "http://localhost:3000/",
            name: "userId"
          }, function (details) {
            console.log('Cookie removed: ', details);
          });

          chrome.cookies.set({
            url: "http://localhost:3000/",
            name: "instantly",
            value: filterCookies.value,
          })
          sendResponse(allCookies);
        });
      }

    });
  }

  if (message.action === "sendUser") {
    userId = message.data
  }

  if (message.action === "getUser") {
    sendResponse(userId)
  }

  if (message.action === "href") {
    href = message.url
  }

  if (message.action === "sendHref") {
    sendResponse(href)
  }


  return true;
});
