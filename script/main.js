var player;

// inicia o jogo
function startGame(){
    player = new component(50, 50, "red", 0, 0);
    gameArea.start();   
}

// prepara a área do jogo (tela/canvas)
gameArea = {
    canvas : document.getElementById("grid"),
    start : function(){
        this.context = this.canvas.getContext("2d");
        this.interval = setInterval(updateGameArea, 20);
    },
    clear: function(){
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
}

// constructor que gera componentes para o jogo
function component(width, height, color, x, y){
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    this.update = function() {
        ctx = gameArea.context;
        ctx.fillStyle = color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
}

// atualização de frames
function updateGameArea(){
    gameArea.clear();
    player.update();
}

// funções de movimento do jogador

function moveUp(){
    if(player.y == 0){
        player.y = player.y;
    } else{
        player.y -= 50;
    }
}

function moveDown(){
    if(player.y == 450){
        player.y = player.y;
    } else{
        player.y += 50;
    }
}

function moveLeft(){
    if(player.x == 0){
        player.x = player.x;
    } else{
        player.x -= 50;
    }
}

function moveRight(){
    if(player.x == 750){
        player.x = player.x;
    } else{
        player.x += 50;
    }
}

window.addEventListener("keypress", (event) => {
    var kc = event.key;
    switch(kc){
        case "d":
            moveRight();
            break;
        case "s":
            moveDown();
            break;
        case "a":
            moveLeft();
            break
        case "w":
            moveUp();
            break
    }
});
