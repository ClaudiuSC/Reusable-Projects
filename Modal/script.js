const closeBtn = document.getElementById("close-modal")
const openBtn = document.getElementById("open-modal")
const overlayEl = document.getElementById("overlay")
// const modalEl = document.getElementById("modal")

openBtn.addEventListener("click", ()=> {
    overlayEl.style.display="block"
}
)

closeBtn.addEventListener("click", ()=> {
    overlayEl.style.display="none"
})