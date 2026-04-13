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

// const request2 = new XMLHttpRequest();

// request2.open('GET', '../data/bio.json');
// request2.send();

// request2.addEventListener('load', () => {
//     if (request2.status == 200) {
//     } else {
//         console.error(`Ошибка ${request2.status}: ${request2.statusText}`);
//         return;
//     }
//   const data = JSON.parse(request2.responseText);
//   console.log(`Имя: ${data.name }\nВозраст: ${data.age}\nШкола: ${data.school}`);
//   console.log(`Хобби: ${data.hobbies.join(', ')}`);
//   console.log(` ${data.name } (${data.age} лет) учится в школе ${data.school}`);
 
  
// });


const somInput = document.querySelector('#som');
const usdInput = document.querySelector('#usd');
const eurInput = document.querySelector('#eur');

const converterRequest = new XMLHttpRequest();
let rates = null;
let isUpdatingInputs = false;

const roundCurrency = (value) => (Math.round(value * 100) / 100).toString();

const clearOtherInputs = (currentInput) => {
    [somInput, usdInput, eurInput].forEach((input) => {
        if (input !== currentInput) {
            input.value = '';
        }
    });
};

const convertFromSom = (somValue) => {
    usdInput.value = roundCurrency(somValue / rates.usd);
    eurInput.value = roundCurrency(somValue / rates.eur);
};

const convertFromUsd = (usdValue) => {
    const somValue = usdValue * rates.usd;
    somInput.value = roundCurrency(somValue);
    eurInput.value = roundCurrency(somValue / rates.eur);
};

const convertFromEur = (eurValue) => {
    const somValue = eurValue * rates.eur;
    somInput.value = roundCurrency(somValue);
    usdInput.value = roundCurrency(somValue / rates.usd);
};

const handleConverterInput = (sourceInput) => {
    if (!rates || isUpdatingInputs) return;

    if (sourceInput.value === '') {
        isUpdatingInputs = true;
        clearOtherInputs(sourceInput);
        isUpdatingInputs = false;
        return;
    }

    const amount = Number(sourceInput.value);
    if (Number.isNaN(amount)) return;

    isUpdatingInputs = true;

    if (sourceInput === somInput) {
        convertFromSom(amount);
    } else if (sourceInput === usdInput) {
        convertFromUsd(amount);
    } else if (sourceInput === eurInput) {
        convertFromEur(amount);
    }

    isUpdatingInputs = false;
};

somInput.addEventListener('input', () => handleConverterInput(somInput));
usdInput.addEventListener('input', () => handleConverterInput(usdInput));
eurInput.addEventListener('input', () => handleConverterInput(eurInput));

converterRequest.open('GET', '../data/converter.json');
converterRequest.setRequestHeader('Content-Type', 'application/json');
converterRequest.send();

converterRequest.addEventListener('load', () => {
    rates = JSON.parse(converterRequest.responseText);
});
