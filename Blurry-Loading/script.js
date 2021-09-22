const loadText = document.querySelector(".loading-text")
const bg = document.querySelector(".bg")

let load = 0

let interval = setInterval(blurring, 20)

function blurring() {
    load++
    loadText.innerText = load + "%"
    loadText.style.opacity = scaleNumbers(load, 0 , 100, 1, 0)
    bg.style.filter = `blur(${scaleNumbers(load, 0, 100, 30, 0)}px)`

    if(load>99) {
        clearInterval(interval)
    }
}


// function from stackoverflow
function scaleNumbers (num, inMin, inMax, outMin, outMax) {
    return (num - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}