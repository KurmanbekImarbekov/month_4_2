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


let currenLeft = 0 

const parentWidth = parentBlock.clientWidth
const childWidth = childBlock.clientWidth
const maxWidth = parentWidth - childWidth 

function moveRight () {
    childBlock.style.left = `${currenLeft}px`
    if(currenLeft < maxWidth) {
        currenLeft++
        requestAnimationFrame(moveRight)
    }
}
moveRight()
