const carouselItems = document.querySelectorAll(".carousel-item")
const nextBtn = document.querySelector(".carousel-btn-next")
const previousBtn = document.querySelector(".carousel-btn-previous")
let counter = 0

nextBtn.addEventListener("click", ()=> {
    removeClass(carouselItems)
    counter++
    if(counter === carouselItems.length) {
        counter = 0
    }
    // circleProgress()
    carouselItems[counter].classList.add("visible", "animation")
    setTimeout(2000)
})

previousBtn.addEventListener("click", ()=> {
    removeClass(carouselItems)
    counter--
    if(counter < 0 ) {
        counter = carouselItems.length - 1
    }
    // circleProgress()
    carouselItems[counter].classList.add("visible", "animation")
})

function removeClass(item) {
    for (i of item) {
        i.classList.remove("visible", "animation")
    }
}


