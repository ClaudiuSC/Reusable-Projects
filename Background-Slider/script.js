const body = document.body
const slides = document.querySelectorAll(".slide")
const leftBtn = document.getElementById("left")
const rightBtn = document.getElementById("right")

let currentSlide = 0

setBodyBackgound()

leftBtn.addEventListener("click", () => {
    if(currentSlide === 0) {
        currentSlide = slides.length-1
    } else {
        currentSlide--
    }

    setCurrentSlideBackground()
    setBodyBackgound()
})

rightBtn.addEventListener("click", () => {
    if(currentSlide === slides.length-1) {
        currentSlide = 0
    } else {
        currentSlide++
    }
    
    setCurrentSlideBackground()
    setBodyBackgound()
})

function setBodyBackgound() {
    body.style.backgroundImage = slides[currentSlide].style.backgroundImage
}

function setCurrentSlideBackground() {
    slides.forEach(slide => slide.classList.remove("active"))
    slides[currentSlide].classList.add("active")
}
