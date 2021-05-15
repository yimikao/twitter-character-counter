

const TOTAL_CHARS = 280,
       enteredCharsBox = document.getElementById('entered-chars'), 
       remainingCharsBox = document.getElementById('remaining-chars'), 
       messageBox = document.querySelector('.wrapper textarea');

let enteredChars = 0,
    remainingChars = TOTAL_CHARS;

window.addEventListener('DOMContentLoaded', ()=>{
    enteredCharsBox.textContent = enteredChars
    remainingCharsBox.textContent = remainingChars
})

messageBox.addEventListener('keyup', updateCharsInfo)
messageBox.addEventListener('paste', updateCharsInfo)


function updateCharsInfo(){
    enteredChars = messageBox.value.length
    remainingChars = TOTAL_CHARS - enteredChars

    if (enteredChars >= TOTAL_CHARS) {
        let tempChars = messageBox.value.slice(0, 280)
        messageBox.value = tempChars
        enteredChars  = messageBox.value.length
        remainingChars = TOTAL_CHARS - enteredChars
    }
    enteredCharsBox.textContent = enteredChars
    remainingCharsBox.textContent = remainingChars
}