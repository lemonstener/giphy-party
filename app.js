const form = document.querySelector('#form-input');
const removeBTN = document.querySelector('#remove');
const board = document.querySelector('#board');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    const search = document.querySelector('#search');
    getGif(search.value);
    search.value = '';
})

removeBTN.addEventListener('click', function (e) {
    e.preventDefault();
    board.innerHTML = '';
})

async function getGif(input) {
    const result = await axios.get(`https://api.giphy.com/v1/gifs/search?api_key=GTwoPEstpaEk5B3ROVfSQhMUpGoe7SOK&q=${input}&limit=50&lang=en`);
    const urls = result.data.data;
    const random = Math.floor(Math.random() * urls.length);
    createIMG(urls[random].images.original.url);
}

function createIMG(url) {
    const newIMG = document.createElement('img');
    newIMG.src = url;
    board.append(newIMG);
}

