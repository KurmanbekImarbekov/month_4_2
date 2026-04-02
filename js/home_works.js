const gmailInput = document.querySelector("#gmail_input")
const gmailBtn = document.querySelector("#gmail_button")
const gmailResult = document.querySelector("#gmail_result")


const regex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/
gmailBtn.addEventListener("click", () => {
    if(regex.test(gmailInput.value)){
        gmailResult.style.color = "green"
        gmailResult.innerHTML = "Gmail is vallid"
    }else {
         gmailResult.style.color = "red"
        gmailResult.innerHTML = "Gmail is not vallid"
    }
})




const parentBlock = document.querySelector(".parent_block")
const childBlock = document.querySelector(".child_block")


let currentTop = 0    
let currentLeft = 0

const parentWidth = parentBlock.clientWidth
const childWidth = childBlock.clientWidth
const maxWidth = parentWidth - childWidth 
let maxHeight = parentBlock.clientHeight - childBlock.clientHeight


function move() {
    childBlock.style.left = `${currentLeft}px`;
    childBlock.style.top = `${currentTop}px`;

    if (currentLeft < maxWidth && currentTop === 0) {
        currentLeft++;
    } 
    else if (currentLeft >= maxWidth && currentTop < maxHeight) {
        currentTop++;
    } 
    else if (currentTop >= maxHeight && currentLeft > 0) {
        currentLeft--;
    } 
    else if (currentLeft <= 0 && currentTop > 0) {
        currentTop--;
    }

   

    requestAnimationFrame(move);
}

move();

const startBtn = document.querySelector("#start")
const stopBtn = document.querySelector("#stop")
const resetBtn = document.querySelector("#reset")
const timerDisplay = document.querySelector("#seconds")

let seconds = 0
let timerInterval = null

startBtn.addEventListener("click", () => {
    if (!timerInterval) {
        timerInterval = setInterval(() => {
            seconds++
            timerDisplay.innerText = seconds
        }, 800)
    }
})    
 
stopBtn.addEventListener("click", () => {
    clearInterval(timerInterval)
        timerInterval = null

})
resetBtn.addEventListener("click", () => {
    clearInterval(timerInterval)
    timerDisplay.innerText = seconds
    timerInterval = null
})