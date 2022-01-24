const loveMe = document.querySelector(".loveMe")
const times = document.querySelector("#times")
let i = 1

loveMe.addEventListener("dblclick", (e) => {
    createHeart(e)
    times.textContent = i++
})

function createHeart(e) {
    const x = e.clientX - e.target.offsetLeft
    const y = e.clientY - e.target.offsetTop

    const heart = document.createElement("i")
    heart.style.top = y + "px"
    heart.style.left = x + "px"
    heart.className = "fas fa-heart"

    loveMe.append(heart)
    setTimeout(() => heart.remove(), 600)
}

// =====================================================
// DOUBLE CLICK FUNCTIONALITY
// =====================================================

// let clickTime = 0

// loveMe.addEventListener("click", (e) => {
//     if(clickTime === 0) {
//         clickTime = new Date().getTime()
//     } else {
//         if (new Date().getTime() - clickTime < 500) {
//             createHeart(e)
//             times.textContent = i++
//             clickTime = 0
//         } else {
//             clickTime = new Date().getTime()
//         }
//     }
// })
