const img = document.querySelector('img')

fetch('https://api.giphy.com/v1/gifs/translate?api_key=5wvBjUIsu4J2tmPomIuiTR3j9bFkxcmM&s=nasa', {mode: 'cors'})
    .then(function(response){
        return response.json()  
    })
    .then(function(response){
        console.log(response.data.images.original.url);
        img.src = response.data.images.original.url

    })