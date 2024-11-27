const dogImage = document.getElementById('dog-image')

async function updateDogImage() {
    const breedName = document.getElementById('breed-name')
    const url = 'https://dog.ceo/api/breeds/image/random'
    const responde = await fetch (url)
    const data = await responde.json()

    dogImage.src = data.message
    breedName.textContent = data.message.split('/')[4]
}

dogImage.addEventListener('click', updateDogImage)