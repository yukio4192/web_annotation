// コンテキストメニュー
chrome.contextMenus.create({
  "title": "選択したテキストに注釈を追加",
  "type": "normal",
  "contexts": ["all"],
  "onclick": function(info) {
    console.log('selected text', info.selectionText);
    var selectedText = info.selectionText;

    // 取得するタブの条件
    let queryInfo = {
      active: true,
      windowId: chrome.windows.WINDOW_ID_CURRENT
    };

    // メッセージをcontentのほうに送信
    chrome.tabs.query(queryInfo, function(result) {
      // 配列の先頭に現在のタブの情報が入っている
      let currentTab = result.shift();

      // メッセージ
      let message = selectedText;
      console.log('sending mesasge', message);

      console.log('currentTab', currentTab);

      // 現在表示しているタブにメッセージを送る
      chrome.tabs.sendMessage(currentTab.id, message, function() {});
    });
  }
});

function getBody() {
  let b = document.body;
  console.log('body', b);
}
