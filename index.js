const URL = "https://rickandmortyapi.com/api/character";
const container = document.querySelector('#card');
const textInt = document.querySelector('#input1');
Sortable.create(container,{});

window.addEventListener('load',gteCharcaters);
textInt.addEventListener('input',paintWithName);

function gteCharcaters(){
    fetch(URL)
    .then(response => response.json())
    .then(data => data.results.forEach(element => {
        paintWithName(element);
        cards(element);
    })
)};

function cards(element) {
    const card = document.createElement('div');
    card.classList = 'cards';
    
    const status = document.createElement('h5');
    status.textContent = element.status;
    if (element.status == "Alive"){
        status.style.color = '#7deb0d';
    }else{
        status.style.color = '#e33a2c';
    }
    const name = document.createElement('h3');
    const gender = document.createElement('h5');
    const species = document.createElement('h5');
    species.textContent = element.species;
    name.textContent = element.name;
    name.classList = 'tits';
    card.appendChild(status);
    card.appendChild(species)
    card.appendChild(gender);
    card.appendChild(name);

    const hr = document.createElement('hr');
    const images = document.createElement('img');
    images.setAttribute('src',element.image);
    images.textContent = element.image;
    images.classList = 'img';
    card.appendChild(images);
    

    gender.textContent = element.gender;
    const br = document.createElement('br');
    card.appendChild(br);
    card.appendChild(hr);

    const values = document.createElement('div');
    values.classList = 'values';
    card.appendChild(values);
    

    container.appendChild(card);
}

function paintWithName() {
    container.textContent = "";
    console.log(textInt.value);

    let newURl = (URL)+`/?name=${textInt.value}`;

    fetch(newURl)
    .then(response => response.json())
    .then(data => (data.results.forEach(element => {
        cards(element);
        console.log(element);
    })));
}