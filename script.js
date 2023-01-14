function pause(){
    var trailer= document.querySelector(".trailer")
    var video= document.querySelector("video")
    trailer.classList.toggle("active")
    video.pause();
    video.currentTime = 0;
}

function play(){
    var trailer= document.querySelector(".trailer")
    var video= document.querySelector("video")
    trailer.classList.toggle("active")
    video.play();
    video.currentTime = 0;
}


console.log ('Começou')

fetch ('       5e94933be71944189c31b99ebabcbe4c')
   .then(res => res.json ())
   .then(data => {
        console.log ('Imprimindo filmes')
        let str = ''
        for (let i = 0; i < data.results.length; i++) {
            let filme = data.results[i]
            str += `<div class="card col-md-4" style="width: 18rem;">
                <img src="https://image.tmdb.org/t/p/w500${filme.poster_path}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${filme.title}</h5>
                    <p class="card-text">${filme.overview}</p>
                    <a href="https://www.themoviedb.org/movie/${filme.id}" target="_blank" class="btn btn-primary">Mais detalhes</a>
                </div>
                </div>`
        }
        document.getElementById('tela').innerHTML = str
   })
   
console.log ('Terminou')