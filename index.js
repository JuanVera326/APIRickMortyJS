const URL = "https://rickandmortyapi.com/api/character";
const container = document.querySelector('#card');


const gteCharcaters = () =>{
    fetch(URL)
    .then(response => response.json())
    .then(data => data.results.forEach(element => {
        console.log(element);
        cards(element);
    })
)};

function cards(element) {
    const card = document.createElement('div');
    card.classList = 'cards';

    const name = document.createElement('h3');
    name.textContent = element.name
    name.classList = 'tits';
    card.appendChild(name);

    const images = document.createElement('img');
    images.setAttribute('src',element.image);
    images.textContent = element.image;
    images.classList = 'img';
    card.appendChild(images);

    const values = document.createElement('div');
    values.classList = 'values';
    card.appendChild(values);
    
    container.appendChild(card);
}

window.addEventListener('load',gteCharcaters());