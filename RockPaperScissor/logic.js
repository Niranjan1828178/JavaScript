let Computer_score=0;
let Your_score=0;
let com=document.querySelector("#com_score");
let you=document.querySelector("#your_score");
let win=1;
let state =document.querySelector(".status");

function winstate(yours,com){
    if(yours==com)
    {
        win=1;
    }
    else 
    {

        if(yours=="rock" )
    {
        if(com=="paper")
            win=2;
        else
            win=0;
    }
        else if(yours=="paper")
    {
        if(com=="rock")
            win=0;
        else
            win=2;
        
    }
    else
    {
        if(com=="paper")
            win=0;  
        else
            win=2;
    }
    }
}


function com_choice(){
    let rn=Math.round(Math.random()*10)%3;
    if(rn==0)
    {
        choice="rock";
    }
    else if(rn==1)
    {
        choice="paper";
    }   
     else 
    {        
        choice="scissors";
    }    
    return choice; 
}

function Clicked(choice){
    Com_choice=com_choice();
    winstate(choice,Com_choice);
    if(win==1)
    {
        state.style.backgroundColor="black";
        state.style.color="white";
        state.innerText="Draw";
    }
    else if(win==0)
    {
        Your_score+=1;
        state.style.backgroundColor="green";
        state.style.color="black";
        state.innerText="You Won";
    }
    
    else
    {
        Computer_score+=1;
        state.style.backgroundColor="red";
        state.style.color="white";
        state.innerText="Computer Won";
    }
    you.innerText=Your_score;
    com.innerText=Computer_score;
    
}
