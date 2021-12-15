const counters = document.querySelectorAll(".counter")

counters.forEach(counter => {
    counter.innerText = 0
    
    const countToTarget = () => {
        const target = +counter.getAttribute("data-target")
        const currentValue = +counter.innerText
        const increment = target / 300
    
        if(currentValue < target) {
            counter.innerText = +Math.ceil(currentValue + increment)
            setTimeout(countToTarget, 10)    
        } else {
            counter.innerText = target
        }
    }

    countToTarget()
})
