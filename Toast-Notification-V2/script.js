const notificationBtn = document.querySelector(".show-notification")
const notificationBox = document.querySelector(".notification-area")

notificationBtn.addEventListener("click", addMessage)

function addMessage() {
    const div = document.createElement("div")
    div.classList.add("notification-message")
    div.style.color = randomColor()
    div.innerHTML = `Message ${randomMessage()} <span class="close">X</span>`
    notificationBox.append(div)
    closeToast()
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

function closeToast() {
    const messages = document.querySelectorAll(".notification-message")
    const closeEl = document.querySelectorAll(".close")
    messages.forEach((message, idx) => {
        closeEl[idx].addEventListener("click", () => {
            message.remove()
        })
    })
}

