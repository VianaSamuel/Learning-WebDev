// VARIÁVEIS
const btnNext = document.getElementById('btn-next');
const btnPrevious = document.getElementById('btn-previous');
const cards = document.querySelectorAll('.single-card');
let currentCard = 0;

// FUNÇÕES
function hideLast() { // BUSCA E REMOVE O ÚLTIMO CARTÃO SELECIONADO
    const selectedCard = document.querySelector('.selected');
    selectedCard.classList.remove('selected');
}
function showSelected(cardArray) { // SELECIONA O NOVO CARTÃO
    cards[cardArray].classList.add('selected');
}

// AVANÇAR
btnNext.addEventListener('click', function () {
    if (currentCard + 1 === cards.length) return; // VERIFICA SE CHEGOU AO FIM
    else {
        hideLast();
        currentCard++;
        showSelected(currentCard);
    }
})

// VOLTAR
btnPrevious.addEventListener('click', function () {
    if (currentCard === 0) return; // VERIFICA SE CHEGOU AO FIM 
    else {
        hideLast();
        currentCard--;
        showSelected(currentCard);
    }
})