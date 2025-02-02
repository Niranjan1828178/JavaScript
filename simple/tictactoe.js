let boxes=document.querySelectorAll("#box");
let resetbtn=document.querySelector(".reset");
let turn0=true;
let winnerbox=document.querySelector("#winner");
let winstate=[
    [0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6],
]
let count=0;
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
        if (count>4)
        {
            winstate.forEach((i) =>{
                let p1=boxes[i[0]].innerText;
                let p2=boxes[i[1]].innerText;
                let p3=boxes[i[2]].innerText;
                if( p1===p2 && p2==p3 && p3!="")
                {
                    console.log("winner is ",p1);
                    winnerbox.style.display="block";
                    console.dir(winnerbox[0]);
                    winnerbox.children[0].innerText = 'winner is '+p1;
                    
                }
            });
        }
    // console.log("clicked");
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

let form=document.querySelector("#container");
let start=document.querySelector("#add");
let playerX=document.querySelector("#playerX");
let playerO=document.querySelector("#playerO");
let ground=document.querySelector("#ground");
start.addEventListener("click",()=>{
form.style.display="none";
resetbtn.style.display="block";
ground.style.display="block";
});