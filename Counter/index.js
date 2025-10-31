const valueEl = document.getElementById('value');
const increaseBtn = document.getElementById('increase');
const decreaseBtn = document.getElementById('decrease');
const resetBtn = document.getElementById('reset');

let counter = 0;

function render(){
    valueEl.textContent = counter;
}
 increaseBtn.addEventListener('click', () => {
    counter += 1;
    render();
});

decreaseBtn.addEventListener('click', () => {
    counter -= 1;
    render();
})
resetBtn.addEventListener('click', () => {
    counter = 0;
    render();
})
