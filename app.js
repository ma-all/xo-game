/*Constants*/
const winnerArr = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]]

/*Variables*/
let player = 'x'
let winner = ''

/*Cached Elements*/
const mssg = document.querySelector('#message')
const sqr = document.querySelectorAll('.sqr')
const rest = document.querySelector('#reset')
const board = document.querySelector('.board')

/*Event Listener*/
sqr.forEach(sqr => {
    sqr.addEventListener('click', function(event) {
        event.target.textContent = player
        if(winner === '') {
            if (player === 'x'){
                player = 'o'
            } else {
                player = 'x'
            }
        mssg.textContent = `It's ${player}'s turn`
        } 
    })
})

reset.addEventListener('click', function(){
    sqr.forEach(sqr => {
        sqr.textContent = ''
    })
})

/*Functions*/
function winnerCheck(){
    sqr.forEach(sqr =>{
        // check if textContent is not empty && textContent of 0, 1, 2 are the same
    })
}
