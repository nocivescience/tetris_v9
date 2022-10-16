const scoreEl=document.getElementById('score');
const gamesEl=document.getElementById('games');
const ctx=gamesEl.getContext('2d');
const Col=30;
const Row=20;
const scala=30;
const scoreWorth=10;
const shape=[
    [
        [0,0,0,0],
        [1,1,1,1],
        [0,0,0,0],
        [0,0,0,0],
    ]
]
let score=0;
class Piece{
    constructor(shape,ctx){
        this.shape=shape;
        this.ctx=ctx;
        this.y=0;
        this.x=Math.floor(Col/2);
    }
    renderPiece(){
        return this.shape.map((row,i)=>{
            row.map((col,j)=>{
                if(col===1){
                    this.ctx.fillStyle='red';
                    this.ctx.strokeStyle='black';
                    this.ctx.fillRect(this.x+j*scala,this.y+i*scala,scala,scala);
                    this.ctx.strokeRect(this.x+j*scala,this.y+i*scala,scala,scala);
                }
            })
        })
    }
}
class gameModel{
    constructor(ctx){
        this.ctx=ctx;
        this.fallingPiece=null;
        this.grid=this.makingStartingGrid()
    }
    makingStartingGrid(){
        let grid=[];
        for(let i=0; i<Row;i++){
            grid[i]=[];
            for(let j=0;j<Col;j++){
                grid[i][j]=0
            }
        };
        return grid;
    }
    collision(x,y,candidate=null){
        const shape=candidate||this.fallingPiece
        return shape
    }
    renderGameState(){
        if(this.fallingPiece!==null){
            this.fallingPiece.renderPiece()
            console.log('listoco')
        }else{
            console.log('adiosito')
        }
    }
    moveDown(){
        this.renderGameState()
        this.fallingPiece.y+=1
    }
}
const model= new gameModel(ctx)
setInterval(()=>{
    newGameState();
},1000)
function newGameState(){
    fullSend();
    if(model.fallingPiece===null){
        const piece=new Piece(shape[0],ctx);
        model.fallingPiece=piece;
        model.moveDown();
    }
}
function fullSend(){
    function allFilled(row){
        for(x of row){
            if(x===0){
                return false
            }
        }
        return true
    }
    for(let i=0;i<model.grid.length;i++){
        if(allFilled(model.grid[i])){
            score+=scoreWorth
        }        
    }
}
document.addEventListener('keydown',(e)=>{
    e.preventDefault();
    switch(e.key){
        case 'a':
            null
    }
})