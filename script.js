const cells = document.querySelectorAll('.cell')
const titleHeader = document.querySelector('#titleHeader')
const xPlayerDisplay = document.querySelector('#xPlayerDisplay')
const oPlayerDisplay = document.querySelector('#oPlayerDisplay')


let player = 'X'
let isPauseGame = false
let isGameStart = false


const inputCells = ['', '', '',
                    '', '', '',
                    '', '', '']


const winConditions = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8]
    [0, 3, 6], [1, 4, 7], [2, 5, 8]
    [0, 4, 8], [2, 4, 6]
]             


cells.forEach((cell, index) => {
    cell.addEventListener('click', () => tapCell)
})

function tapCell(cell, index) {
    if (cell.textContent == '' &&
        !isPauseGame
    ) {
        isGameStart = true
        updateCell(cell, index)
    }
}


function updateCell(cell, index) {
    cell.textContent = player
    inputCells[index] = player
    cell.style.color = (player == 'X') ? '#1892EA' : '#A737FF'
}