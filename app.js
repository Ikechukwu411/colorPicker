const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

const btn = document.querySelector('.btn');
const color = document.querySelector('.color');

btn.addEventListener('click', function(){
    const getRandom = randomColor();
    document.body.style.backgroundColor = colors[getRandom];
    color.textContent = colors[getRandom];
})


function randomColor(){
    return Math.floor(Math.random()*colors.length);
}