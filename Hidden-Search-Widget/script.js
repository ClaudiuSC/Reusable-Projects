const searchBtn = document.querySelectorAll(".fa-search")
const inputEl = document.querySelectorAll(".input-field")

for (let i = 0; i < searchBtn.length; i++) {
    searchBtn[i].addEventListener('click', ()=> {
        inputEl[i].classList.toggle("active")
        inputEl[i].focus()
    })
}