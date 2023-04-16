
let yc=document.querySelector(".yc");
let cmc=document.querySelector(".cc");
let userscore=document.querySelector('.usr-score');
let comscore=document.querySelector('.com-score');
let status=document.querySelector('.status');
let pa=document.querySelector('.ply-agn');
/*let r=document.querySelector('rock');
let p=document.querySelector('paper');
let s=document.querySelector('scissors');*/

let userpoint=0,compoint=0;
comscore.innerHTML="Computer point:"+compoint;
userscore.innerHTML="Your point: "+userpoint;

const btn=document.querySelectorAll(".btn");
    let playerChoice;
    btn.forEach(element => {
    element.addEventListener('click',(e)=>{
    if(e){
        playerChoice=e.target.innerHTML.toLowerCase();
        start(playerChoice);
       
    }
    })});

function getComputerChoice(){
   let options=["Rock","Paper","Scissors"];
   let x=Math.floor(Math.random()*3);
   return options[x];
   console.log(options[x]);
}
function start(pc){
    yc.innerHTML="Your Choice: "+pc;
        let comChoice=getComputerChoice();
        let cc=comChoice.toLowerCase();
        let x=document.querySelector('.'+cc);  
        x.classList.add('selected');
        setTimeout(() => {
            x.classList.remove('selected');
        }, 2000);
        cmc.innerHTML="Computer Choice: "+cc;
        play(pc,cc);
}
function play(pc,cc){
    if(pc==="rock" && cc==="paper" || pc==="paper" && cc==="scissors" || pc==="scissors" && cc==="rock"){
        compoint++;
        comscore.innerHTML="Computer point:"+compoint;
        status.innerHTML="You Loose.."+ cc +" beats "+ pc;
        //alert("You Loose.."+ cc +" beats "+ pc+"\n your point:"+userpoint+"  comp point:"+compoint);
    }
    else if(pc==="rock" && cc==="scissors" || pc==="paper" && cc==="rock" || pc==="scissors" && cc==="paper"){
        userpoint++;
        userscore.innerHTML="Your point: "+userpoint;
        status.innerHTML="You win.."+ pc +" beats "+cc;
        //alert("You win.."+ pc +" beats "+ cc+"\n your point:"+userpoint+"  comp point:"+compoint);
    }
    else if(pc===cc){
        status.innerHTML="Draw match  ";
       // alert("Draw match  \n your point:"+userpoint+"  comp point:"+compoint)
    }
    checkres(userpoint,compoint);
    //console.log(playerChoice);
}

function checkres(up,cp){
    if(up===3){
        //alert("You win the game..\n your point:"+up+"  comp point:"+cp);
        cmc.innerHTML='';
        yc.innerHTML='';
        comscore.innerHTML='';
        userscore.innerHTML='';
        userpoint=0,compoint=0;
        setTimeout(() => {
            status.innerHTML='YOU WON THE GAME';
            pa.classList.remove('ply-agn');
            pa.classList.add('enable');
            play_again();
        }, 4000);
    }
    else if(cp===3){
        //alert("You Loose the game..\n your point:"+userpoint+"  comp point:"+compoint);
        cmc.innerHTML='';
        yc.innerHTML='';
        comscore.innerHTML='';
        userscore.innerHTML='';
        userpoint=0,compoint=0;
        setTimeout(() => {
            status.innerHTML='YOU LOST THE GAME';
            pa.classList.remove('ply-agn');
            pa.classList.add('enable');
            play_again();
        }, 4000);
    }
}
function play_again(){
    let en=document.querySelector('.enable');
    en.addEventListener('click',()=>{
    location.reload();
});
}
