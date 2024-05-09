
document.querySelector(".child").addEventListener("click", (e) => {
    e.stopPropagation()
    alert("Child Was Clicked!!")
})
document.querySelector(".childcontainer").addEventListener("click", (e) => {
    e.stopPropagation()
    alert("childcontainer Was Clicked!!")
})
document.querySelector(".container").addEventListener("click", (e) => {
    // e.stopPropagation()
    alert("container Was Clicked!!")
})

// Below is random Color Generator used in previous video
function getRandomColor() {
    let val1 = Math.ceil(0 + Math.random() * 255);
    let val2 = Math.ceil(0 + Math.random() * 255);
    let val3 = Math.ceil(0 + Math.random() * 255);

    return `rgb(${val1}, ${val2}, ${val3})`
}


let a = setInterval(() => {
    document.querySelector(".childcontainer").style.background = getRandomColor();
    document.querySelector(".container").style.background = getRandomColor();
    document.querySelector(".child").style.background = getRandomColor();
    document.querySelector(".child").style.color = getRandomColor();
}, 1000);

console.log(a);

setTimeout(() => {
    document.querySelector(".container").style.background = getRandomColor();
    document.querySelector(".child").style.background = getRandomColor();
}, 5000);
console.log(a)