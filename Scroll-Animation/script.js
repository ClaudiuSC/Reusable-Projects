const boxes = document.querySelectorAll(".box")

window.addEventListener("scroll", triggerBoxes)

triggerBoxes()

function triggerBoxes() {
    const triggerPos = window.innerHeight / 5 * 3

    boxes.forEach(box => {
        const checkPos = box.getBoundingClientRect().top
        if(checkPos < triggerPos) {
            box.classList.add("active")
        } else {
            box.classList.remove("active")
        }

    })
    
}