
function getComputerChoice(){
   let options=["Rock","Paper","Scissors"];
   let x=Math.floor(Math.random()*3);
   return options[x];
   console.log(options[x]);
}
start();
function start(){
    let userpoint=0,compoint=0;
    for(let i=0;i<3;i++){
        const btn=document.querySelectorAll(".btn");
        let playerChoice;
        btn.forEach(element => {
        element.addEventListener('click',(e)=>{
        playerChoice=e.target.innerHTML.toLowerCase();
        })});
        let comChoice=getComputerChoice();
        let pc=playerChoice.toLowerCase();
        let cc=comChoice.toLowerCase();
        
        if(play(pc,cc)===1){
            userpoint++;
            alert("You win.."+ playerChoice +" beats "+ comChoice+"\n your point:"+userpoint+"  comp point:"+compoint);
        }
        else if(play(pc,cc)===0){
            compoint++;
            alert("You Loose.."+ comChoice +" beats "+ playerChoice+"\n your point:"+userpoint+"  comp point:"+compoint);
        }
        else{
            i--;
            alert("Draw match  \n your point:"+userpoint+"  comp point:"+compoint)}
        if(userpoint==2){
            alert("You win the game..\n your point:"+userpoint+"  comp point:"+compoint);
            break;
        }
        if(compoint==2){
            alert("You Loose the game..\n your point:"+userpoint+"  comp point:"+compoint);
            break;
        }
    }
}
function play(pc,cc){
    if(pc==="rock" && cc==="paper" || pc==="paper" && cc==="scissors" || pc==="scissors" && cc==="rock"){
        //alert("You Loose.."+ comChoice +" beats "+ playerChoice);
        return 0;
    }
    else if(pc==="rock" && cc==="scissors" || pc==="paper" && cc==="rock" || pc==="scissors" && cc==="paper"){
        //alert("You Win.."+ playerChoice +" beats "+ comChoice);
        return 1;
    }
    else if(pc===cc){
        return -1;
    }
    //console.log(playerChoice);
}