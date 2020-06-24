var selObj = document.getSelection();

console.log('selObj.toString()', selObj.toString());
console.log('selObj.anchorNode', selObj.anchorNode);
console.log('selObj.getRangeAt()', selObj.getRangeAt(0));

var dom = selObj.getRangeAt(0);
var targetNode = selObj.anchorNode.parentNode;

// 1つ目の選択範囲のDOMをDocumentFragmentにコピー
var domCopy = selObj.getRangeAt(0).cloneContents();
var selText = selObj.toString();
console.log('selText', selText);

// 選択したテキストを該当箇所のちょっと前に挿入
var insertContent = `<span style="text-decoration: underline dotted blue;">${selText}</span>`;
targetNode.insertAdjacentHTML('beforebegin', insertContent);

// 選択した箇所のNodeを削除
targetNode.remove();
