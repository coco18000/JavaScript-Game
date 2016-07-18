window.addEventListener('load',init) ;

//------------------------------------------------//
//------------------------------------------------//
var SCREEN_HEIGHT = 400;	// キャンバスの高さ
var SCREEN_WIDTH = 400;		// キャンパスの幅
var GRID_SIZE = 2;			//グリッドのサイズ(px)
var GAME_WINDOW = 400		//ゲーム画面のサイズ
var GAME_GRID = GAME_WINDOW/GRID_SIZE;

var canvas; //= document.getElementById('world');
var context; //= canvas.getContext('2d');

var field = new Array(GAME_GRID*GAME_GRID);
var copy_field = new Array(GAME_GRID*GAME_GRID);
//------------------------------------------------//
//------------------------------------------------//

//index.htmlが読み込まれた際に行われる初期化処理
function init() {
    canvas = document.getElementById('GameWindow'); // index.htmlからcanvas要素を取得
    if(!canvas || !canvas.getContext) return false;
    context = canvas.getContext('2d');                // コンテキスト

 	canvas.width = SCREEN_WIDTH;
 	canvas.height = SCREEN_HEIGHT;

 	var color = "rgb(255,0,0)";
 	var new_virus = new Virus(400,0,0.5,50,color);
 	Set_Field(new_virus,field);

 	color3 = "rgb(0,0,0)";
 	var new_virus4 = new Virus(0,0,0.2,60,color3);
 	Set_Field(new_virus4,field);


 	var color4 = "rgb(255,255,255)";
 	var new_virus5 = new Virus(200,200,0.3,56,color4);
 	Set_Field(new_virus5,field);

 	color = "rgb(0,0,255)";
 	var new_virus3 = new Virus(0,400,1,30,color);
 	Set_Field(new_virus3,field);

 	var color2 = "rgb(0,255,0)";
 	var new_virus2 = new Virus(400,400,0.7,43,color2);
 	Set_Field(new_virus2,field);
	requestAnimationFrame(update);
}

//ゲーム画面の更新
function update() {
	copy_field = field;
	for(var i = 0; i < field.length; i++){
		if(field[i]) field[i].Growth();
	}
	field = copy_field;
	render();

	requestAnimationFrame(update);
}

//更新したゲーム画面の再描写
function render() {
	context.clearRect(0, 0, canvas.width, canvas.height);
	for(var i = 0; i < field.length; i++){
		if(field[i]) field[i].Draw();
	}
}

var Virus = function(x,y,speed,power,color){
	this.x = x;
	this.y = y;
	this.speed = speed;//max 1.0;
	this.power = power;//Max 1.0
	this.color = color;
}
Virus.prototype.Draw = function (){
	context.fillStyle = this.color;
	context.fillRect(this.x, this.y, GRID_SIZE, GRID_SIZE);
}
Virus.prototype.Set_Color = function(r,g,b){
	this.color = "rgb(" + r + "," + g + "," + b + ")";
}
Virus.prototype.Growth = function (){
	var t = Math.random();
	var new_virus;
	if(t<0.25&&this.y>GRID_SIZE){
		new_virus = new Virus(this.x,this.y-GRID_SIZE,this.speed,this.power,this.color);
	}else 	if(t<0.5&&this.x>GRID_SIZE){
		new_virus = new Virus(this.x-GRID_SIZE,this.y,this.speed,this.power,this.color);
	}else 	if(t<0.75&&this.x<SCREEN_WIDTH-GRID_SIZE){
		new_virus = new Virus(this.x+GRID_SIZE,this.y,this.speed,this.power,this.color);
	}else 	if(t<1&&this.y<SCREEN_HEIGHT-GRID_SIZE){
		new_virus = new Virus(this.x,this.y+GRID_SIZE,this.speed,this.power,this.color);
	}else{
		return;
	}
	Set_Field(new_virus,copy_field);
}

function Set_Field(object,set_field){
	if(!object) return;

	var x_grid = Math.floor(object.x/GRID_SIZE);
	var y_grid = Math.floor(object.y/GRID_SIZE);

	if(!set_field[x_grid + y_grid*GAME_GRID]){
		set_field[x_grid + y_grid*GAME_GRID]=object;
	}else{
		var t = Math.random();
		var virus1 = set_field[x_grid + y_grid*GAME_GRID].power;
		var virus2 = object.power;
		if(t<virus1/(virus1+virus2)){
			return;
		}else{
			set_field[x_grid + y_grid*GAME_GRID]=object;
		}
	}
}