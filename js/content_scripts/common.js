chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  // requestの中身に、選択したテキストが入っている。
  console.log('request', request);
  console.log('sender', sender);
  console.log('sendResponse', sendResponse);

  // DOMの中から選択したテキストに一致する部分を探して
  // その親DOMを特定する


  // responseを送る場合はsendResponse()する
  // sendResponse({});

  // trueを返さないとbackground_page内で「返事がない」エラーが表示される
  return true;
});
