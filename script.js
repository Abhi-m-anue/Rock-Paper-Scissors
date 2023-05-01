let userscore=document.querySelector('.usr-score');
let comscore=document.querySelector('.com-score');
let status=document.querySelector('.status');
let pa=document.querySelector('.ply-agn');
let score=document.querySelector('.score');

let win= new Audio('correct-ans.wav');
let loose= new Audio('wrong_ans.m4a');
let draw= new Audio('tie.wav');

let userpoint=0,compoint=0;
comscore.innerHTML="SCORE :"+compoint;
userscore.innerHTML="SCORE :"+userpoint;

const btn=document.querySelectorAll(".btn-div");
    let playerChoice;
    btn.forEach(element => {
    element.addEventListener('click',response)
    });
    function response(e){
        if(e){
            playerChoice=e.target.id.toLowerCase();
            clk=document.getElementById(playerChoice.toUpperCase());
            clk.style.backgroundColor= '#fc5868';
            setTimeout(()=>{
                clk.style.backgroundColor='initial';
             },700)
            start(playerChoice);
        }
    }

function getComputerChoice(){
   let options=["Rock","Paper","Scissors"];
   let x=Math.floor(Math.random()*3);
   return options[x];
   console.log(options[x]);
}
function start(pc){  
        let comChoice=getComputerChoice();
        let cc=comChoice.toLowerCase();
        let x=document.querySelector('.'+cc);  
        x.classList.add('selected');
        setTimeout(() => {
            x.classList.remove('selected');
        }, 700);
        play(pc,cc);
}
function play(pc,cc){
    if(pc==="rock" && cc==="paper" || pc==="paper" && cc==="scissors" || pc==="scissors" && cc==="rock"){
        loose.play();
        compoint++;
        comscore.innerHTML="SCORE :"+compoint;
        status.innerHTML="YOU LOOSE !! "+ cc.toUpperCase() +" BEATS "+ pc.toUpperCase();
        //alert("You Loose.."+ cc +" beats "+ pc+"\n your point:"+userpoint+"  comp point:"+compoint);
    }
    else if(pc==="rock" && cc==="scissors" || pc==="paper" && cc==="rock" || pc==="scissors" && cc==="paper"){
        win.play();
        userpoint++;
        userscore.innerHTML="SCORE :"+userpoint;
        status.innerHTML="YOU WIN !! "+ pc.toUpperCase() +" BEATS "+cc.toUpperCase();
        //alert("You win.."+ pc +" beats "+ cc+"\n your point:"+userpoint+"  comp point:"+compoint);
    }
    else if(pc===cc){
        draw.play();
        status.innerHTML="DRAW MATCH ";
       // alert("Draw match  \n your point:"+userpoint+"  comp point:"+compoint)
    }
    checkres(userpoint,compoint);
}

function checkres(up,cp){
    if(up===3){
        //alert("You win the game..\n your point:"+up+"  comp point:"+cp);
        btn.forEach(element => element.removeEventListener('click',response ));
        setTimeout(() => {
            status.innerHTML='YOU WON THE GAME';
            pa.classList.remove('ply-agn');
            pa.classList.add('enable');
            comscore.innerHTML='';
            userscore.innerHTML='';
            userpoint=0,compoint=0;
            score.style.display= "none";
            play_again();
            }, 4000);
    }
    else if(cp===3){
        //alert("You Loose the game..\n your point:"+userpoint+"  comp point:"+compoint);
        btn.forEach(element => element.removeEventListener('click',response ));
        setTimeout(() => {
            status.innerHTML='YOU LOST THE GAME';
            pa.classList.remove('ply-agn');
            pa.classList.add('enable');
            comscore.innerHTML='';
            userscore.innerHTML='';
            userpoint=0,compoint=0;
            score.style.display= "none";
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
