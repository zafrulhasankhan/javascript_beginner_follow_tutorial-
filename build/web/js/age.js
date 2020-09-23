/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

// challange 1 : age in days 
function ageinday(){
   var birthyear=prompt('Enter your birth year:');
    var date =new Date();
    var currentyear = date.getFullYear();
    var ageindays=(currentyear - birthyear)*365;
  var node = document.createElement("h1");
  var textnode = document.createTextNode("you are "+" "+ ageindays + " "+"days old");
  node.setAttribute('id','ageinday');
  node.appendChild(textnode);
  document.getElementById("flex-box-result").appendChild(node);
    
}
function reset() {
   document.getElementById("ageinday").remove();
  }
  
  
  //challange 2 : cat generator
  function cat_generate(){
      var image = document.createElement('img');
      image.setAttribute('id','cat_gen');
      var div = document.getElementById('flex-cat-gen');
      image.src="http://thecatapi.com/api/images/get?format=src&type=gif&size=small";
      div.appendChild(image);
  }
  function cat_remove(){
      document.getElementById('cat_gen').remove();
  }
  
  //challange 3 : rock ,paper , scissors
  var yourchoice;
  function rpsGame(yourchoice){
      console.log(yourchoice);
      //console.log(yourchoice.src);
      var humanchoice=yourchoice.id;
     var  botchoice = ran_to_rps(random_num());
     console.log('computerchoice : '+botchoice);
     var result= decidewinner(humanchoice,botchoice);
     console.log(result);
     message = finalmsg(result);
     console.log(message);
     
     front_end(humanchoice,botchoice,message);
  }
  
  function random_num(){
    return Math.floor(Math.random()*3);  
  }
  
  var num;
  function ran_to_rps(num){
      return ['rock','paper','scissors'][num];
  }
  
  
  var yourchoice,computerchoice;
  function decidewinner(yourchoice,computerchoice){
      var db = {
        'rock':{'paper':1,'rock':0.5,'scissors':0},
        'paper':{'rock':0,'paper':0.5,'scissors':1},
        'scissors':{'paper':0,'scissors':0.5,'rock':1}
    };
    
    var humanscore = db[yourchoice][computerchoice];
    var computerscore = db[computerchoice][yourchoice];
    return [humanscore,computerscore];
  }
  

   function finalmsg([humanscore,computerscore]){
       if(humanscore==0){
            return {'message':'you lost!','color':'red'};
       }
        else if (humanscore==0.5){
            return {'message':'you tied!','color':'yellow'}; 
       }
       else{
            return {'message':'you won!','color':'green'}; 
       }
  }
  
  
  function front_end(human_choice_image,computer_choice_image,finalmsg){
      var image_db = {
          'rock':document.getElementById('rock').src,
          'paper':document.getElementById('paper').src,
          'scissors':document.getElementById('scissors').src
      }
     document.getElementById('rock').remove();
     document.getElementById('paper').remove();
     document.getElementById('scissors').remove();
     
     var humandiv = document.createElement('div');
     var botdiv = document.createElement('div');
     var messagediv = document.createElement('div');
     
     humandiv.innerHTML ="<img src='"+ image_db[human_choice_image] +"' height='150px' width='150px'>";
     botdiv.innerHTML ="<img src='"+ image_db[computer_choice_image] +"' height='150px' width='150px'>";
     messagediv.innerHTML ="<p style='color:"+finalmsg['color']+";font-size:60px;padding:30px '>"+ finalmsg['message']+ "</p>"
     
     document.getElementById('flex-box-rps-div').appendChild(humandiv);
     document.getElementById('flex-box-rps-div').appendChild(messagediv);
     document.getElementById('flex-box-rps-div').appendChild(botdiv);
  }
 
 
 //challange 4: change the color of all buttons 
 var all_buttons = document.getElementsByTagName('button');
 console.log(all_buttons);
 
 var copyallbuttons =[];
 for(var i=0;i<all_buttons.length;i++){
     copyallbuttons.push(all_buttons[i].classList[1]);
 }
 
 function button_color_change(button_detail){
     //console.log(button_detail.value);
     if(button_detail.value==='red'){
         buttonsred();
     }
     else if(button_detail.value==='green'){
         buttonsgreen();
        
     }
     else if(button_detail.value==='reset'){
         buttonsreset();
        
     }
     else if(button_detail.value==='random'){
         randomcolors();
        
     }
 }
 
 function buttonsred(){
     for(var i=0;i<all_buttons.length;i++){
         all_buttons[i].classList.remove(all_buttons[i].classList[1]);
         all_buttons[i].classList.add('btn-danger');
     }
     
    
 }
 
 function buttonsgreen(){
     for(var i=0;i<all_buttons.length;i++){
         all_buttons[i].classList.remove(all_buttons[i].classList[1]);
         all_buttons[i].classList.add('btn-success');
     }
     
    
 }
 
 function buttonsreset(){
     for(var i=0;i<all_buttons.length;i++){
         all_buttons[i].classList.remove(all_buttons[i].classList[1]);
         all_buttons[i].classList.add(copyallbuttons[i]);
     }
     
    
 }
 
 function randomcolors(){
     var choices = ['btn-primary','btn-danger','btn-warning','btn-success','btn-secondary'];
     for(var i =0;i<all_buttons.length;i++){
         var random_num= Math.floor(Math.random()*5);
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
         all_buttons[i].classList.add(choices[random_num]);
     }
 }
 
 
 //Challange 5: Blackjack
 
 
 var blackjackgame = {
     'you':{'scorespan':'#your-blackjack-result','div':'#your-box','score':0},
     'dealer':{'scorespan':'#dealer-blackjack-result','div':'#dealer-box','score':0},
     'card':['2','3','4','5','6','7','8','9','10','J','Q','K','A'],
     'cardMap':{'2':2,'3':3,'4':4,'5':5,'6':6,'7':7,'8':8,'9':9,'10':10,'J':10,'Q':10,'K':10,'A':[1,11]}
 }
 var You = blackjackgame['you'];
 var Dealer = blackjackgame['dealer'];
 
 // sound add 
 var hitsound = new Audio('sounds/swish.m4a');
 var winsound = new Audio('sounds/cash.mp3');
 var lostsound = new Audio('sounds/aww.mp3');
 
 //console.log(you);
 document.querySelector('#blackjack-hit-button').addEventListener('click',blackjackhit);
  document.querySelector('#blackjack-stand-button').addEventListener('click',dealerLogic);
 document.querySelector('#blackjack-deal-button').addEventListener('click',blackjackDeal);
 function blackjackhit(){
     var card = randomNum();
     showcard(You,card); 
     updateScore(You,card);
     showScore(You);
  }
  
  
  function randomNum(){
      var randomIndex = Math.floor(Math.random()*13);
      return blackjackgame['card'][randomIndex];
  }
  
  var card;
  function showcard(activePlayer,card){
      if(activePlayer['score'] <=21){
      var cardImage = document.createElement('img');
      cardImage.src= `images/${card}.png`;
      document.querySelector(activePlayer['div']).appendChild(cardImage);
      hitsound.play();
  }
  }

function blackjackDeal(){
    showResult(computeWinner());
    var yourImage = document.querySelector('#your-box').querySelectorAll('img');
    var dealerImage = document.querySelector('#dealer-box').querySelectorAll('img');
    
    
    for (i=0;i<yourImage.length;i++){
        yourImage[i].remove();
       
    }
   for (i=0;i<dealerImage.length;i++){
        dealerImage[i].remove();
    }
    
   You['score'] = 0;
   Dealer['score'] = 0;
    document.querySelector('#your-blackjack-result').textContent = 0;
    document.querySelector('#dealer-blackjack-result').textContent = 0;
    
     document.querySelector('#your-blackjack-result').style.color = 'white';
     document.querySelector('#dealer-blackjack-result').style.color = 'white';
}
  
 
function updateScore(activeplayer,card){
    if(card==='A'){
        if((activeplayer['score']+ blackjackgame['cardMap'][card][1]) <= 21){
            activeplayer['score'] += blackjackgame['cardMap'][card][1];
        }
        else{
            activeplayer['score'] += blackjackgame['cardMap'][card][0];
        }
    }
    else{
    activeplayer['score'] += blackjackgame['cardMap'][card];
}
}

function showScore(activePlayer){
    if(activePlayer['score']>21){
       document.querySelector(activePlayer['scorespan']).textContent = 'BUST!'
       document.querySelector(activePlayer['scorespan']).style.color = 'red';
    }
    else{
   document.querySelector(activePlayer['scorespan']).textContent = activePlayer['score'];
}
}

function dealerLogic(){
    var card = randomNum();
    showcard(Dealer,card);
    updateScore(Dealer,card);
    showScore(Dealer);
    
}

//compute winner and who just win 
function computeWinner(){
    var winner ;
    
    if(You['score']<=21){
        //condition : your score higher than dealer and dealer busts but you are not 
        if(You['score']>Dealer['score'] || Dealer['score']>21){
            console.log('you won');
            winner = You;
        }
        else if (You['score']<Dealer['score']){
            console.log('you lose');
            winner = Dealer;
        }
        else if(You['score']=== Dealer['score']){
            console.log('you drew');
        }
    }
    else if(You['score']>21 && Dealer['score']<=21){
        console.log('you lost');
        winner = Dealer;
    }
    else if(You['score']>21 && Dealer['score']>21){
        console.log('you drew');
    }
    console.log('winner is '+winner);
    return winner;
}

function showResult(winner){
    var message,messageColor;
    if(winner === You){
        message = 'You Won';
        messageColor = 'green';
        winsound.play();
    }
    else if (winner=== Dealer)
    {
        message = 'You Lost';
        messageColor = 'green';
        lostsound.play();
    }
    else{
        message = 'You drew';
        messageColor = 'black';
    }
    
    document.querySelector('#blackjack-result').textContent= message;
   document.querySelector('#blackjack-result').style.color = messageColor; 
}