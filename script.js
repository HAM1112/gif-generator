const main = document.getElementById('main')
const addButton = document.getElementById('add')
const searchBar = document.getElementById('searchbar')
const searchButton = document.getElementById('search')
let item = "nasa"

searchButton.addEventListener('click',()=>{
    item = searchBar.value
    main.innerHTML = ""
    newGif(item) 

})
addButton.addEventListener('click', ()=>{
    item = searchBar.value
    newGif(item)
})

function newGif(searchitem){  
    const img = document.createElement('img')
    main.appendChild(img)
      
    fetch(`https://api.giphy.com/v1/gifs/translate?api_key=5wvBjUIsu4J2tmPomIuiTR3j9bFkxcmM&s=${searchitem}`, {mode: 'cors'})
    .then(function(response){
        return response.json()  
    })
    .then(function(response){
        img.src = response.data.images.original.url
    })
}

newGif(item)