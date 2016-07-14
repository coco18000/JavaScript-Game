window.addEventListener('load',init) ;

//------------------------------------------------//
//------------------------------------------------//
var SCREEN_HEIGHT = 600;	// キャンバスの高さ
var SCREEN_WIDTH = 800;		// キャンパスの幅
var GRID_SIZE = 1;			//グリッドのサイズ(px)
var GAME_WINDOW = 400		//ゲーム画面のサイズ

var canvas; //= document.getElementById('world');
var context; //= canvas.getContext('2d');
//------------------------------------------------//
//------------------------------------------------//

//index.htmlが読み込まれた際に行われる初期化処理
function init() {
	//var field = new Array((GAME_WINDOW/GRID_SIZE)*(GAME_WINDOW/GRID_SIZE));

    canvas = document.getElementById('GameWindow'); // index.htmlからcanvas要素を取得
    if(!canvas || !canvas.getContext) return false;
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
	//context.fillRect(0, 599, 800, 1);
	//context.fillRect(0, 0, 1, 600);
	//context.fillRect(799, 0, 1, 600);
}

var Virus = function(){
	this.x;
	this.y;
	this.speed;
	this.power;
	this.color;
}