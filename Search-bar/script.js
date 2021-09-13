const inputEl = document.getElementById("input-el")
const allNamesDOMCollection = document.getElementsByClassName("list-style")

inputEl.addEventListener("keyup", event => {
    const searchQuery = event.target.value.toLowerCase()

    for (let i = 0; i < allNamesDOMCollection.length; i++) {
        let currentName = allNamesDOMCollection[i].textContent.toLowerCase()

        if(currentName.includes(searchQuery)) {
            allNamesDOMCollection[i].style.display = "block"
        } else {
            allNamesDOMCollection[i].style.display = "none"
        }

    }
})

