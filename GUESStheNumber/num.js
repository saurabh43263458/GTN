
let guessthenumber = document.body.querySelector(".guessthenumber");
guessthenumber.style.display='none';
let li = 'num';
let main2= document.getElementsByClassName('main2')[0]
let lossed = document.querySelector('.lossed');
lossed.style.display='none';


document.addEventListener("DOMContentLoaded", function() {
    var nav = document.querySelector('.nav');
    setTimeout(function() {
        nav.style.top = '0px';
    }, 100); 
});
document.addEventListener('mousemove',function(){
    var body = document.getElementsByTagName('body')[0];
    var nav = document.querySelector('.nav');
    nav.style.top = '0px';
})

document.addEventListener('mouseleave',function(){
    var body = document.getElementsByTagName('body')[0];
    var nav = document.querySelector('.nav');
    nav.style.top = '-70px';
})
let submit1 = document.querySelector('.button1')
submit1.addEventListener('click',function(e){
    let name  = document.getElementsByName("value");
   let selected =false;
    for(let i = 0; i<name.length; i++){
        if(name[i].checked){
            li = name[i]
            selected = true;
            
            main2.style.display='none';
            guessthenumber.style.display='flex'
            break;
        }
       }
   if(!selected){
    alert("please select a range");
    e.preventDefault();
   }
})


    let  random = parseInt(Math.random()*100+1)
    let val = document.querySelector('.number')
    let submit= document.querySelector('.submit')
    let pre1= document.querySelector('.pre1')
    let rg  = document.querySelector('.rg')

    let pre = document.querySelector('pre');
    let GR  = document.querySelector('.GR');
    let p = document.querySelector('.button33');
    p.style.display="none";
    let loss = document.querySelector('.loss');
    
    
    let preguess = [];
    let numguess = 1;
    let playgame = true;
    let guess = 0;
    if(playgame){
       submit.addEventListener('click',function(e){
        e.preventDefault();
         guess = parseInt(val.value);
        console.log(guess);
        validateGuess(guess)
       })
    }
    function validateGuess(value){
          if(isNaN(value)){
            alert("please enter a valid Number")
          }
          else if(value<1){
            alert("please enter a valid Number")
          }
          else if(value>100){
            alert("please enter a valid Number")
          }
          else{
            preguess.push(value)
            if(numguess > 10){
                  displayGuess(value);
                  displayMessage(`YOUR NUMBER OF TURN IS OVER `,numguess)
                  endgame()
            }
            else{
                 displayGuess(value)
                 checkGuess(value)
            }
          }
        }
    function checkGuess(value){
        if(guess === random){
          displayMessage(`YOU GUESSED IT RIGHT`,numguess)
          
        }
        else if(guess < random){
          displayMessage(`Number is too low`,numguess);
        }
        else{
          displayMessage(`Number is Too high`,numguess)
        }
    }
    function displayGuess(value){
       val.value = ''
       pre1.innerHTML +=`${value} ,` 
       numguess++;
       rg.innerHTML = `Remaining turn:${11-numguess} `
    }
    
    function displayMessage(me,a){
     if(a>11 && guess!= random ){
      guessthenumber.style.display='none';
      lossed.style.display='flex';
       loss.innerHTML=`${me}  Random number was ${random}`
       p.style.display="flex";
       p.innerHTML=`<button class="bu">new game</button>`
       endgame();
     }
     else if(a<11 && guess!= random){
      guessthenumber.style.display='none';
       lossed.style.display='flex';
       loss.innerHTML=`${me}`
       setTimeout(function (){
        lossed.style.display='none';
        guessthenumber.style.display='flex';
        console.log(random)
       },1500);
     }
     else if( a<11 && guess === random){
      p.style.display="flex";
      guessthenumber.style.display='none';
      lossed.style.display='flex';
      loss.innerHTML=` ${me} in ${a} turns `;
      p.innerHTML=`<button class="bu">new game</button>`
      endgame();
     }
     
    }
    function endgame(){
     playgame= false;
     newGame()
    }
    function newGame(){
      p.addEventListener('click',function(e){
        random= parseInt(Math.random()*100+1);
        preguess = [];
        pre1.innerHTML='Previous Guesses:' ;
        numguess=1;
        guessthenumber.style.display='none';
        lossed.style.display='none';
        main2.style.display='flex';
        p.style.display="none";
        rg.innerHTML = `Remaining turn:${11-numguess} `
        playgame=true;
        console.clear()
      })
    }


