const checkboxArr = document.querySelectorAll(".toggle")
const goodEl = document.getElementById("good")
const cheapEl = document.getElementById("cheap")
const fastEl = document.getElementById("fast")

checkboxArr.forEach(check => check.addEventListener("change", (e) => {
    checkLogic(e.target)
}))

function checkLogic(target) {
    if(goodEl.checked && cheapEl.checked && fastEl.checked) {
        if(target === goodEl) {
            fastEl.checked = false
        }
        if(target === cheapEl) {
            goodEl.checked = false
        }
        if(target === fastEl) {
            cheapEl.checked = false
        }
    }
} 

