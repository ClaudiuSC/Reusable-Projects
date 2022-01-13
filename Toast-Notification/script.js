const notificationBtn = document.querySelector(".show-notification")
const notificationBox = document.querySelector(".notification-area")

notificationBtn.addEventListener("click", addMessage)

function addMessage() {
    const div = document.createElement("div")
    div.classList.add("notification-message")
    div.style.color = randomColor()
    div.innerText = `Message ${randomMessage()}`
    notificationBox.prepend(div)
    setTimeout(()=> div.remove(), 2500)
}

function randomColor() {
    const colors = ["red", "green", "blue", "purple"]
    return colors[randomise(colors.length)]
}

function randomMessage() {
    const messages = ["One", "Twooo", "Threeeeee", "Foooour"]
    return messages[randomise(messages.length)]
}

function randomise(n) {
    const random = Math.floor(Math.random()*n)
    return random
}