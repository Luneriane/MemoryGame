const cards = document.querySelectorAll('.memory-card');

let hasFlippedCard = false;
let firstCard, secondCard;

function flicard() {
    this.classList.add('flip');

    if (!hasFlippedCard) {
        //first clic
        hasFlippedCard = true;
        firstCard = this;
    } else {
        //second clic
        hasFlippedCard = false;
        secondCard = this;

        //do cards match?
        if (firstCard.dataset.framework === secondCard.dataset.framework) {
            //it's a match !
            firstCard.removeEventListener('click', flicard);
            secondCard.removeEventListener('click', flicard);
        } else {
            //not a match
            setTimeout(() => {
                firstCard.classList.remove('flip');
                secondCard.classList.remove('flip');
            }, 1500);
        }
    }
}

cards.forEach(card => card.addEventListener('click', flicard));