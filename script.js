const retainer = document.querySelector('.sketchingZone');

function colorRandomizer() {
    const colors = ['violet','indigo','blue','green','yellow','orange','red', 'Sky','pink','purple','crimson', 'lightgreen','lightcoral','lightyellow','lightgrey'];
    function random() {
        let rand = Math.random();
        return Math.floor(rand*15);
    };
    return colors[random()];
};

let n = 16;
    for (let i = 0; i < n; i++) {
        const row = document.createElement('div');
        row.classList.add('row');
        for (let j=0;j<n;j++) {
            let column = document.createElement('div');
            column.classList.add('elements');
            row.appendChild(column);
        }
        retainer.append(row);
    }
const elements = document.querySelectorAll('.elements');
elements.forEach((e) => {
    e.addEventListener('mouseover',() => {
        e.style.backgroundColor = colorRandomizer();
    });
});

const button = document.querySelector('.button');
const input = document.querySelector('.input1');
button.addEventListener('click', () => {
    let value = input.value;
    input.value = ''; 
    retainer.innerHTML = '';
    for (let i = 0; i < value; i++) {
        const row = document.createElement('div');
        row.classList.add('row');
        for (let j=0;j<value;j++) {
            let column = document.createElement('div');
            column.classList.add('elements');
            row.appendChild(column);
        }
        retainer.append(row);
    }
    const elements = document.querySelectorAll('.elements');
    elements.forEach((e) => {
        e.addEventListener('mouseover',() => {
            e.style.backgroundColor = colorRandomizer();
        });
    });
});