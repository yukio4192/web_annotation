chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  console.log('request', request);
  console.log('sender', sender);
  console.log('sendResponse', sendResponse);

  // responseを送る場合はsendResponse()する
  // sendResponse({});

  // trueを返さないとbackground_page内で「返事がない」エラーが表示される
  return true;
});
