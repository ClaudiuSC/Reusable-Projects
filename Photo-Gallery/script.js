function getPhotos() {
    let photoCollection = []

    for(let i = 0; i < 10; i++) {
        const photoId = Math.floor(Math.random()*200)
        photoCollection.push(`<img class="photo" src=https://picsum.photos/id/${photoId}/100>`)
    }

    const featuredId = `${photoCollection[0].substring(48, photoCollection[0].length-5)}`
    
    document.body.innerHTML = `<div class="photo-container">${photoCollection.join("")}</div><div><img class="featured" src=https://picsum.photos/id/${featuredId}/400></div>`
}

getPhotos()

function changeFeaturedPhoto() {
    const photoArr = Array.from(document.getElementsByClassName("photo"))
    const featuredPhoto = document.querySelector(".featured")
    console.log(featuredPhoto.src)

    photoArr.forEach(photo => {
        photo.addEventListener("click", () => {
            const targetPhoto = photo.src.substring(0, photo.src.length-4)
            featuredPhoto.src = `${targetPhoto}/400`
        })
    })
}

changeFeaturedPhoto()

