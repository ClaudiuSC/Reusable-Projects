const searchBtn = document.querySelectorAll("#btn")
const inputEl = document.querySelectorAll("#input")
const container = document.querySelectorAll("#container")

console.log(container, searchBtn)
for (let i = 0; i < searchBtn.length; i++) {
    searchBtn[i].addEventListener('click', ()=> {
        container[i].classList.toggle("active")
        searchBtn[i].classList.toggle("active")
        inputEl[i].classList.toggle("active")
        // console.log("click")
    })
}

