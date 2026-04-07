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
    toogleBlocks(nextIndex)
 }, 3000)



const charactersContainer = document.querySelector('#characters-container');
const request = new XMLHttpRequest();
request.open("GET", "../data/characters.json");
request.setRequestHeader("Content-Type", "application/json");
request.send();

request.addEventListener("load", () => {
    const characters = JSON.parse(request.responseText);
    characters.forEach(character => {
        const characterElement = document.createElement('div');
        characterElement.classList.add('character-card');
        characterElement.innerHTML = `
            <img src="${character.person_photo}" alt="${character.name}">
            <h4>${character.name}</h4>
            <p>${character.description}</p>
        `;
        charactersContainer.appendChild(characterElement);
    });
});


const request2 = new XMLHttpRequest();

request2.open('GET', '../data/bio.json');

request2.send();

request2.addEventListener('load', () => {
  const data = JSON.parse(request2.responseText);

  console.log(data);
});
