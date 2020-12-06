const button = document.querySelector('.button');

function changeColor() {
    let x = Math.round(Math.random() * 255);
    let y = Math.round(Math.random() * 255);
    let z = Math.round(Math.random() * 255);
    document.body.style.backgroundColor = `rgb(${x}, ${y}, ${z})`;
}

button.addEventListener('click', changeColor);