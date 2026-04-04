const tabBlocks = document.querySelectorAll('.tab_content_block');
const tabs = document.querySelectorAll('.tab_content_item');
const tabParent = document.querySelector('.tab_content_items');

const toogleBlocks = (index = 0) => {
    tabBlocks.forEach((item, i) => item.classList.toggle('active', i === index))
    tabs.forEach((tab, i) => {
        tab.classList.toggle('active', i === index)
    })}

toogleBlocks()

tabParent.addEventListener('click', (event) => {
    const clickedTab = event.target.closest('.tab_content_item')
    if(!clickedTab) return

    const index = [...tabs].indexOf(clickedTab)
    


    toogleBlocks(index)


    

})

setInterval(() => {
    const activeIndex = [...tabs].findIndex(tab => tab.classList.contains('active'))
    const nextIndex = (activeIndex + 1) % tabs.length
    toogleBlocks(nextIndex) }, 3000)