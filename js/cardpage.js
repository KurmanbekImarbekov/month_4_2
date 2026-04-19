const cardlist = document.querySelector('#cards');
const BASE_API = 'https://jsonplaceholder.typicode.com/posts';

const getData = async () => {
    try {
        const response = await fetch(BASE_API);
        const data = await response.json();

        data.forEach((item) => {
            
            const {id, title, body } = item;
            const card = document.createElement('div');
            card.classList.add('card');

            card.innerHTML = `
                <img src="https://picsum.photos/300/200?random=${item.id}" alt="img">
                <h2>${title}</h2>
                <p>${body}</p>
            `;

            cardlist.appendChild(card);
        });
    } catch (error) {
        console.error('Error fetching data:', error);
    }
};

getData();
