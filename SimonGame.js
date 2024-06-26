let gameSeq=[];
let userSeq=[];
let btns=["yellow","red","green","purple","pink","brown","blue","orange","grey"];
let start=false;
let level=0;

let h2=document.querySelector("h2");
document.addEventListener("click",function(){
    if(start==false)
    {
        console.log("game started");
        start=true;
        levelUp();
    }
});
function btnFlash(btn)
{
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
}
function userFlash(btn)
{
    btn.classList.add("userFlash");
    setTimeout(function(){
        btn.classList.remove("userFlash");
    },250);
}
function levelUp(){
    userSeq=[];
    level++;
    h2.innerText=`Level ${level}`;
    let randIdx=Math.floor(Math.random()*8);
    let randColor=btns[randIdx];
    let randBtn=document.querySelector(`.${randColor}`);
    // console.log(randIdx);
    // console.log(randColor);
    // console.log(randBtn);
    maxlevel=Math.max(maxlevel,level);
let h3=document.querySelector("h3");
h3.innerText=`Max score is: ${maxlevel}`;
    gameSeq.push(randColor);
    console.log(gameSeq);
    btnFlash(randBtn);
}
function checkAns(idx)
{
    if(userSeq[idx]===gameSeq[idx])
    {
        if(userSeq.length==gameSeq.length)
        {
            setTimeout(levelUp,1000);
        }
    }else{
        h2.innerHTML=`Game Over! Your score was <b>${level}</b> <br> Press any key to start.`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";
        },100);  
    //  let body=  document.querySelector("body");
    //  body.addEventListener("click",function(){
        
    //  });  
    document.addEventListener("keypress",function(){
        reset();
    });
    
    }
}
function btnPress()
{
    console.log(this);
    let btn=this;
    userFlash(btn);
  let  userColor=btn.getAttribute("id");
   userSeq.push(userColor);
   checkAns(userSeq.length-1);
}
let allbtns=document.querySelectorAll(".btn");
for(btn of allbtns)
{
    btn.addEventListener("click",btnPress);
}
function reset()
{
    start=false;
    gameSeq=[];
    userSeq=[];
    level=0;
}
let maxlevel=level;
