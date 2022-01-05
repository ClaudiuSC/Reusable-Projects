const buttons = document.querySelectorAll(".ripple")

buttons.forEach(button => {
    button.addEventListener("click", e => {
        const x = e.clientX
        const y = e.clientY

        const btnTop = y - e.target.offsetTop 
        const btnLeft = x - e.target.offsetLeft
        
        const circle = document.createElement("span")
        circle.classList.add("circle")
        circle.style.top = btnTop + "px"
        circle.style.left = btnLeft + "px"

        button.appendChild(circle)

        setTimeout(() => circle.remove(), 500)
    })
})