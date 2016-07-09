//------------------------------------------------//
//------------------------------------------------//
var SCREEN_SIZE = 500; // キャンバスの幅
var canvas; //= document.getElementById('world');
var context; //= canvas.getContext('2d');
//------------------------------------------------//
//------------------------------------------------//

//index.htmlが読み込まれた際に行われる初期化処理
window.onload = function() {
    canvas = document.getElementById('GameWindow'); // index.htmlからcanvas要素を取得
    canvas.width = canvas.height = SCREEN_SIZE; // キャンバスのサイズを設定
    context = canvas.getContext('2d');                // コンテキスト
}

//ゲーム画面の更新
function update() {
}

//更新したゲーム画面の再描写
function draw() {
}