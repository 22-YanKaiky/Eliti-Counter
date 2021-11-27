const less = document.querySelector('input#less');
const plus = document.querySelector('input#plus');
const reset = document.querySelector('input#reset');
const counter = document.querySelector('h1#counter');
let count = 0;

less.addEventListener('click', () => {
    counter.innerHTML = `${count -= 1}`;
});

plus.addEventListener('click', () => {
    counter.innerHTML = `${count += 1}`;
});

reset.addEventListener('click', () => {
    count = 0;
    counter.innerHTML = count;
});
