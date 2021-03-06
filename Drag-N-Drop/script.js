const fill = document.querySelector(".fill")
const empties = document.querySelectorAll(".empty")

fill.addEventListener("dragstart", dragStart)
fill.addEventListener("dragend", dragEnd)

empties.forEach(box => {
    box.addEventListener("dragover", dragOver)
    box.addEventListener("dragenter", dragEnter)
    box.addEventListener("dragleave", dragLeave)
    box.addEventListener("drop", dragDrop)
})

function dragStart() {
    this.className += " hold"
    setTimeout(() => {this.className = "invisible"}, 0);
}

function dragEnd() {
    this.className = "fill"
}

function dragOver(e) {
    e.preventDefault()
}

function dragEnter(e) {
    e.preventDefault()
    this.className += " hovered"
}

function dragLeave(e) {
    e.preventDefault()
    this.className = "empty"
}

function dragDrop() {
    this.appendChild(fill)
    this.className = "empty"
}