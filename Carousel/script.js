const carouselItems = document.querySelectorAll(".carousel-item")
const nextBtn = document.querySelector(".carousel-btn-next")
const previousBtn = document.querySelector(".carousel-btn-previous")
let counter = 0


// test for progress steps
// const progressEl = document.querySelector(".progress-container")
// for (let i = 0; i < carouselItems.length; i++) {
//     progressEl.innerHTML += `<div><span class="circle">${i+1}</span></div>`
// }
// const circleEl = document.querySelectorAll(".circle")
// -------------------------------------------------------------


// circleProgress()

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


// test for progress steps

// function circleProgress() {
//     for(let i = 0; i < circleEl.length; i++) {
//         circleEl[i].classList.remove("circle-active")
//     }

//     circleEl[counter].classList.add("circle-active")
// }


