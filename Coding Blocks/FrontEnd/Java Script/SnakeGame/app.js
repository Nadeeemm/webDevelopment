const canvas = document.querySelector('canvas')
const pen = canvas.getContext('2d');
pen.fillStyle = 'yellow'

const CS= 15;
const H = 540;
const W = 1200;


const snake ={
    init_len: 5,
    direction: 'right',
    cells: [],


    createSnake: function(){
        for (let i=0; i<this.init_len; i++){
            this.cells.push({
                x:i,
                y:0
            })
        }
    } 
},

drawSnake: function() {
    for (cellof this.cells) {
        pen.fillRect(cell.x*cs,cell.y*cs,cs-2,cs-2)
    }
    
}

updateSnake: funtion(){
const headX=this.cells
}
 

// let initial_x =5;
// let initial_y =5; 


 // ------------------ Initialise the Game
function init(){
    // pen.fillRect(5,5,15,15)
    snake.createSnake(),
}


 //-------------------Draw---------

function draw(){
    // pen.clearRect(0,0,W,H)
    // pen.fillRect(initial_x,initial_y,15,15)
    snake.drawSnake
    
    
}

// ----------------------- Update
function update(){
    // initial_x = initial_x +CS; 

}

function gameLoop(){
   
    draw();
    update();
}

const id= setInterval(gameLoop,150);