function generateCat() {
    globalThis
    cat.forEach(className => {
        className.classList.remove('cat')
    })
    let randomPosition = cat[Math.floor(Math.random() * 9)];
    randomPosition.classList.add('cat');

    clicketCat = randomPosition.id;
}

function newCat(difclt) {
    setInterval(generateCat, difclt);
}


newCat(900)
let result = 0
let clicketCat
let cats = document.querySelectorAll('.cat')
let score = document.querySelector('#score')
let cat = document.querySelectorAll('.no_cat')
let difficulty = document.querySelectorAll('.difficult');


cat.forEach(current => {
    current.addEventListener('mouseup', () => {
        if (current.id === clicketCat) {
            result = ++result
            score.textContent = result;
        }
    })
})