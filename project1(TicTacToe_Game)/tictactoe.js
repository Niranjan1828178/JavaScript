let boxes=document.querySelectorAll("#box");
let resetbtn=document.querySelector("#reset");
let newgame=document.querySelector("#newgame");
let turn0=true;
let winnerbox=document.querySelector("#winner");
let winstate=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6],]
let count=0;
let form=document.querySelector("#container");
let start=document.querySelector("#add");
let ground=document.querySelector("#ground");
let playerX=document.querySelector("#playerX");
let playerO=document.querySelector("#playerO");
    

start.addEventListener("click",()=>{
    count=0;
    turn0=true;
    form.style.display="none";
    resetbtn.style.display="block";
    ground.style.display="block";
    playerO=playerO.value;
    playerX=playerX.value;
    if(playerO==="" && playerX===""){
        playerO="Player O";
        playerX="Player X";
    }
    
    });

function winningcheck()  {
    for(let pattern of winstate){
        let p1=boxes[pattern[0]].innerText;
        let p2=boxes[pattern[1]].innerText;
        let p3=boxes[pattern[2]].innerText;
        if( p1===p2 && p2==p3 && p3!="")
        {
            if( p1=="O")
            {
                player=playerO;
            }
            else{
                player=playerX;
            }
            winnerbox.style.display="block";
            winnerbox.children[0].innerText = `winner is ${player}`;

            boxes.forEach((box)=>{
                box.disabled=true;
                });
            return true;
        }
    }
return false;
} 

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turn0){
            box.innerText = "O";
            turn0 = false;
        }
        else{
            box.innerText = "X";
            turn0 = true;
        }
        box.disabled=true;
        count+=1;
        winningcheck();
    
        if(winningcheck()==false && count==9){
        winnerbox.style.display="block";
        winnerbox.children[0].innerText = 'It\'s a draw!';
        return
        }
 }); 
});

resetbtn.addEventListener("click",()=>
{
    turn0=true;
    boxes.forEach((box)=>{
        box.innerText="";
        box.disabled=false;
    });
    count=0;
})


newgame.addEventListener("click",()=>{
    resetbtn.click();
    winnerbox.style.display="none";
});