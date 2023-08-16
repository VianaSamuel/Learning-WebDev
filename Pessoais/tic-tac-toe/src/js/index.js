//-----INICIALIZACAO-----//
// inicializa o tabuleiro virtual
// inicializa o turno do jogador
// puxa os quadrados do tabuleiro
// aguarda o clique de "iniciar"
let vBoard = []
let playerTurn = ''
const boardSquares = document.querySelectorAll('#game-board span')
boardSquares.forEach(function (element){
    element.classList.remove('cursor-pointer')
})
document.getElementById('start').addEventListener('click', function(){
    initializeGame()
})

//-----START-----//
// turno do player 1
// zera o tabuleiro virtual
// atualiza o texto do turno
// aguarda o clique em um quadrado
function initializeGame() {
    playerTurn = 'player1'
    vBoard = [['', '', ''], ['', '', ''], ['', '', '']]
    document.querySelector('h2').innerHTML = 'Vez de: <span id="player-turn"></span>'
    updateTurn()
    boardSquares.forEach(function (element){
        element.innerText = ''              // trata em caso de vitoria
        element.classList.remove('win')     // trata em caso de vitoria
        element.classList.add('cursor-pointer')
        element.addEventListener('click', handleBoardClick)
    })
}

//-----ATUALIZAR TURNO-----//
// puxa a VARIAVEL do turno
// atualiza o TITULO do turno
function updateTurn() {
    const input = document.getElementById(playerTurn)
    document.getElementById('player-turn').innerText = input.value 
}

//-----TABULEIRO-----//
// puxa o quadrado clicado e suas coordenadas
// marca o 'X' ou 'O'
// desativa o quadrado clicado
// gera a tabela do tabuleiro no console
// verifica se o jogador venceu, se ainda existem quadrados vazios ou se deu empate
function handleBoardClick(ev){
    const span = ev.currentTarget
    const square = span.dataset.square      // quadrado (x.y)
    const coordinates = square.split('.')   // coordenadas ['x', 'y']
    const row = coordinates[0]              // row = x
    const column = coordinates[1]           // column = y

    if (playerTurn === 'player1'){
        span.innerText = 'X'
        vBoard[row][column] = 'X'
    } else {
        span.innerText = 'O'
        vBoard[row][column] = 'O'
    }
    disableSquare(span)

    console.clear()
    console.table(vBoard)

    const winSquares = getWinSquares()
    if (winSquares.length > 0) {
        handleWin(winSquares)
    } else if (vBoard.flat().includes('')){
        playerTurn = playerTurn === 'player1' ? 'player2' : 'player1'
        updateTurn()
    } else {
        document.querySelector('h2').innerHTML = 'Empate!'
    }
}
function getWinSquares(){
    const winSquares = []
    // horizontais
    if (vBoard[0][0] && vBoard[0][0] === vBoard[0][1] && vBoard[0][0] === vBoard[0][2]) winSquares.push('0.0', '0.1', '0.2')
    if (vBoard[1][0] && vBoard[1][0] === vBoard[1][1] && vBoard[1][0] === vBoard[1][2]) winSquares.push('1.0', '1.1', '1.2')
    if (vBoard[2][0] && vBoard[2][0] === vBoard[2][1] && vBoard[2][0] === vBoard[2][2]) winSquares.push('2.0', '2.1', '2.2')
    // verticais
    if (vBoard[0][0] && vBoard[0][0] === vBoard[1][0] && vBoard[0][0] === vBoard[2][0]) winSquares.push('0.0', '1.0', '2.0')
    if (vBoard[0][1] && vBoard[0][1] === vBoard[1][1] && vBoard[0][1] === vBoard[2][1]) winSquares.push('0.1', '1.1', '2.1')
    if (vBoard[0][2] && vBoard[0][2] === vBoard[1][2] && vBoard[0][2] === vBoard[2][2]) winSquares.push('0.2', '1.2', '2.2')
    // diagonais
    if (vBoard[0][0] && vBoard[0][0] === vBoard[1][1] && vBoard[0][0] === vBoard[2][2]) winSquares.push('0.0', '1.1', '2.2')
    if (vBoard[0][2] && vBoard[0][2] === vBoard[1][1] && vBoard[0][2] === vBoard[2][0]) winSquares.push('0.2', '1.1', '2.0')
    return winSquares
}
function disableSquare(element){
    element.classList.remove('cursor-pointer')
    element.removeEventListener('click', handleBoardClick)
}

//-----VITORIA-----//
// adiciona a classe 'win' nos quadrados vencedores
// desativa o tabuleiro
// define o jogador do turno como o vencedor
// altera o titulo do turno
function handleWin(squares){
    squares.forEach(function (square){
        document.querySelector('[data-square="' + square + '"]').classList.add('win')
    })
    boardSquares.forEach(function (element){
        disableSquare(element)
    })
    const winner = document.getElementById(playerTurn).value
    document.querySelector('h2').innerHTML = winner + ' venceu!'
}