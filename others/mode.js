let modebtn=document.querySelector("#mode");
let body=document.querySelector("body");
modebtn.addEventListener("click",() => {
if(body.style.backgroundColor=="black"){
    body.style.backgroundColor="white";
    body.style.color="black";
    console.log("light mode");
   
}
else{
    body.style.backgroundColor="black";
    body.style.color="white";
console.log("dark mode");
}});