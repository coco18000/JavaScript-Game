window.addEventListener('load',init) ;

//------------------------------------------------//
//------------------------------------------------//
var SCREEN_HEIGHT = 600;	// キャンバスの高さ
var SCREEN_WIDTH = 800;		// キャンパスの幅
var canvas; //= document.getElementById('world');
var context; //= canvas.getContext('2d');
//------------------------------------------------//
//------------------------------------------------//

//index.htmlが読み込まれた際に行われる初期化処理
function init() {
    canvas = document.getElementById('GameWindow'); // index.htmlからcanvas要素を取得
    context = canvas.getContext('2d');                // コンテキスト

 	canvas.width = SCREEN_WIDTH;
 	canvas.height = SCREEN_HEIGHT;

	requestAnimationFrame(update);
}

//ゲーム画面の更新
function update() {
	requestAnimationFrame(update);
	render();
}

//更新したゲーム画面の再描写
function render() {
	context.clearRect(0, 0, canvas.width, canvas.height);
}