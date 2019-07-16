const cards = document.querySelectorAll('.memory-card');

let hasFlippedCard = false;
let firstCard, secondCard;

function flipCard() {
  if (this === firstCard) return;

  this.classList.add('flip');

  if (!hasFlippedCard) {
    //first clic
    hasFlippedCard = true;
    firstCard = this;

    return;
  }
  //second clic
  hasFlippedCard = false;
  secondCard = this;
  
  checkForMatch();
}

function checkForMatch() {
  let isMatch = firstCard.dataset.framework === secondCard.dataset.framework;

  isMatch ? disableCards() : unflipCards();
}

function disableCards() {
  firstCard.removeEventListener('click', flipCard);
  secondCard.removeEventListener('click', flipCard);

  resetBoard();
}

function unflipCards() {
  setTimeout(() => {
    firstCard.classList.remove('flip');
    secondCard.classList.remove('flip');
  }, 1500);
}

cards.forEach(card => card.addEventListener('click', flipCard));