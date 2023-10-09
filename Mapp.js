const cardArray = [
    {
      name: 'fries',
      img: 'images/fries.png'
    },
    {
      name: 'cheeseburger',
      img: 'images/cheeseburger.png'
    },
    {
      name: 'ice-cream',
      img: 'images/ice-cream.png'
    },
    {
      name: 'pizza',
      img: 'images/pizza.png'
    },
    {
      name: 'milkshake',
      img: 'images/milkshake.png'
    },
    {
      name: 'hotdog',
      img: 'images/hotdog.png'
    },
    {
      name: 'fries',
      img: 'images/fries.png'
    },
    {
      name: 'cheeseburger',
      img: 'images/cheeseburger.png'
    },
    {
      name: 'ice-cream',
      img: 'images/ice-cream.png'
    },
    {
      name: 'pizza',
      img: 'images/pizza.png'
    },
    {
      name: 'milkshake',
      img: 'images/milkshake.png'
    },
    {
      name: 'hotdog',
      img: 'images/hotdog.png'
    }
  ]

  console.log(cardArray);

  cardArray.sort(()=>0.5-Math.random());

  console.log("everything is ok");

  const grid = document.querySelector('#grid');
  const resultDis=document.getElementById('result');

  
 let cardsChosen = [];
 let cardsChosenId=[];
 const cardsWon=[];


  function createBoard(){
    for(let i=0; i<cardArray.length; i++){
        const card=document.createElement('img');
        card.setAttribute('src','images/blank.png')
        card.setAttribute('data-id',i);
        console.log(card,i);
        grid.appendChild(card);
        card.addEventListener('click',flipCard);

    }
  }

  createBoard();



  function checkMatch(){
    const cards=document.querySelectorAll('img');
    const option1ID=cardsChosenId[0];
    const option2ID=cardsChosenId[1];
    console.log(cards)
    console.log('check for match')
    // cardsChosen[];
    if(option1ID==option2ID){
        cards[option1ID].setAttribute('src','images/blank.png' );
        cards[option2ID].setAttribute('src','images/blank.png');
        alert('you have clicked the same images');
        
    }
    
    else if(cardsChosen[0]==cardsChosen[1]){
        alert('you found a match');
        cards[option1ID].setAttribute('src','images/white.png' );
        cards[option2ID].setAttribute('src','images/white.png');
        cards[option1ID].removeEventListener('click',flipCard);
        cards[option2ID].removeEventListener('click',flipCard);
        cardsWon.push(cardsChosen);
    } else{
        cards[option1ID].setAttribute('src','images/blank.png' );
        cards[option2ID].setAttribute('src','images/blank.png');
        alert('sorry try again')
    }

    
    cardsChosen=[];
    cardsChosenId=[];
    resultDis.innerHTML=cardsWon.length;
    if(cardsWon.length===cardArray.length/2){

        resultDis.textContent+=" congratulations you won"
    }
    
    
  }

  function flipCard(){
    console.log(cardArray);
    const cardId=this.getAttribute("data-id");


   
    
    // console.log(cardArray[cardId].name);
    console.log('clicked '+cardId);
    cardsChosen.push(cardArray[cardId].name);
    cardsChosenId.push(cardId);
    console.log(cardsChosen);
    console.log(cardsChosenId);
    this.setAttribute('src',cardArray[cardId].img);
    if (cardsChosen.length===2){
        setTimeout(checkMatch,500)
    }
  }





