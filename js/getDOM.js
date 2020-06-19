var selObj = document.getSelection();

console.log('selObj.toString()', selObj.toString());
console.log('selObj.anchorNode', selObj.anchorNode);
console.log('selObj.getRangeAt()', selObj.getRangeAt(0));

// 1つ目の選択範囲のDOMをDocumentFragmentにコピー
let dom = selObj.getRangeAt(0).cloneContents();

// aタグからURLを取得して列挙
let links = dom.querySelectorAll('a');
for (const link of links) {
  console.log(link.getAttribute('href'));
}
