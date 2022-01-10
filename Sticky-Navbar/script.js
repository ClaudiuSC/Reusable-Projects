const nav = document.querySelector(".nav")

window.addEventListener("scroll", fixNav)

function fixNav() {
    // console.log(window.scrollY, nav.offsetHeight)
    if(nav.offsetHeight < window.scrollY) {
        nav.classList.add("active")
    } else {
        nav.classList.remove("active")
    }
}