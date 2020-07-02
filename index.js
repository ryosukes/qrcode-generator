const wasm_qr = import("./node_modules/@ryosukes/wasm-qr/wasm_qr.js");

document.getElementById("generate-qrcode").onclick = () => {
  wasm_qr.then(wasm_qr => {
    // 前回表示分が残ってれば削除
    const displayfield = document.getElementById('generated-qrcode');

    for (var i = displayfield.childNodes.length -1; i >= 0; i--) {
      displayfield.removeChild(displayfield.childNodes[i]);
    }

    // 入力された文字列をsvgに変換
    const url = document.getElementById('url').value
    const svg = wasm_qr.convert(url);

    // svgを配置
    displayfield.insertAdjacentHTML('afterbegin', svg);
  });
}
