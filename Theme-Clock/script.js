const hourNeedle = document.querySelector(".hour")
const minuteNeedle = document.querySelector(".minute")
const secondNeedle = document.querySelector(".second")
const time = document.querySelector(".time")
const dateEl = document.querySelector(".date")
const toggleBtn = document.querySelector(".toggle")
const day = document.querySelector(".circle")

const weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

const date = new Date() 
const seconds = date.getSeconds() *6
const minutes = date.getMinutes() *6
const hours = date.getHours() *30

let newSeconds = seconds 
let newMinutes = minutes
let newHours = hours

// first render of the clock needles
renderNeedles(hours, minutes, seconds)

function myClock() {
    newSeconds += 6

    const date = new Date() 
    if(date.getSeconds() === 0) {
        newMinutes += 6
    }
    if(date.getMinutes() === 0 && date.getSeconds() === 0) {
        newHours += 30
    }

    renderNeedles(newHours, newMinutes, newSeconds)

    // digital clock and date 
    time.innerHTML = `${date.toLocaleTimeString([], {timeStyle: 'medium', hour12: false})}`
    dateEl.innerHTML = `${weekDays[date.getDay()]}, ${months[date.getMonth()]} <span class="circle">${date.getDate()}</span> ${date.getFullYear()} `
}

function renderNeedles(hoursAngle, minutesAngle, secondsAngle) {
    hourNeedle.style.transform = `translate(-50%, -100%) rotate(${hoursAngle}deg)`
    minuteNeedle.style.transform = `translate(-50%, -100%) rotate(${minutesAngle}deg)`
    secondNeedle.style.transform = `translate(-50%, -100%) rotate(${secondsAngle}deg)`
}

setInterval(myClock, 1000);

toggleBtn.addEventListener("click", () => {
    if(!document.body.classList.contains("dark")) {
        toggleBtn.innerText = "Light Mode"
    } else {
        toggleBtn.innerText = "Dark Mode"
    }
    document.body.classList.toggle("dark")
})
