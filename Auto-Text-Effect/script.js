const textEl = document.querySelector(".text-here")
const speedInput = document.getElementById("speed")
const text = "We Love Programming!"
let timeStep = 1000
let incr = 0

const autoText = () => {
    renderLetters(text[incr])
    ++incr
    if(incr > text.length) {
        incr = 0
        textEl.innerHTML = ""
    }
    setTimeout(autoText, timeStep)
}

function renderLetters(letter) {
    const letterEl = document.createElement("span")
    letterEl.textContent = letter
    textEl.appendChild(letterEl)
}

autoText()

speedInput.addEventListener("input", () => {
    timeStep = 1000 - (parseInt(speedInput.value)-1) * 100
})

