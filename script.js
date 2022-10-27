const main = document.getElementById('main')
const addButton = document.getElementById('add')
const searchBar = document.getElementById('searchbar')
const searchButton = document.getElementById('search')
let item = "nasa"

searchButton.addEventListener('click',()=>{
    item = searchBar.value
    main.innerHTML = ""
    getGif(item) 

})
addButton.addEventListener('click', ()=>{
    item = searchBar.value
    getGif(item)
})



async function getGif(searchitem){
    const img = document.createElement('img')
    main.appendChild(img)

    const response = await fetch(`https://api.giphy.com/v1/gifs/translate?api_key=5wvBjUIsu4J2tmPomIuiTR3j9bFkxcmM&s=${searchitem}`, {mode: 'cors'})
    const gifData = await response.json();

    console.log(gifData.data.images.original.url);
    img.src = gifData.data.images.original.url
}

getGif(item)