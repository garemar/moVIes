//https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}

//para la img agregar https://image.tmdb.org/t/p/w500 y luego poster_path
//elementos a crear por cada vuelta
//para crear las primeras 5 de cada categoria un forEach que se detenga en indice 4
//necesito conectar el boton que muestra mas elementos por cada categoria para mostrar las primeras 20 de cada categoria un forEach que se detenga en indice 19
//cuando clickeo el boton por categoria oculto el resto de categoria
//necesito dos clases para hacer aparecer y desaparecer las categorias
//necesito que cada categoria posea un padre y que sea flex
//necesito que tengan todos los botones onclick
//necesito conectar el input y que se vacie
// necesito que el menu hamburgueza tenga un after y un before

 //const more = () =>{
//let clean = getElementById("wrapper")
//clean.style.display=none;
// console.log(clean)
//}   

const api_key="93ee165ca933b62fc633532dbab44632";

const url_base="https://api.themoviedb.org/3/movie/";

const img_src="https://image.tmdb.org/t/p/w500/";



fetch(`${url_base}popular?${api_key}`)
    .then(res => res.json())
    .then(data => {
        const ul = document.getElementById("movies-list-1")
        const movies = data.results.filter((e,i)=>i<5)
        movies.forEach(({poster_path,title})=>{
        const li = document.createElement("li")
        const image = document.createElement("img")
        const titles = document.createElement("p")
        li.classList.add("movies-item")
        titles.innerText=title
        titles.classList.add("title")
        image.src=`${img_src}${poster_path}`
        image.classList.add("movie-img")
        li.appendChild(image)
        li.appendChild(titles)
        ul.appendChild(li)
       });
    })

    fetch(`${url_base}top_rated?${api_key}`)
    .then(res => res.json())
    .then(data => {
        const ul = document.getElementById("movies-list-2")
        const movies = data.results.filter((e,i)=>i<5)
        movies.forEach(({poster_path,title})=>{
        const li = document.createElement("li")
        const image = document.createElement("img")
        const titles = document.createElement("p")
        li.classList.add("movies-item")
        titles.innerText=title
        titles.classList.add("title")
        image.src=`${img_src}${poster_path}`
        image.classList.add("movie-img")
        li.appendChild(image)
        li.appendChild(titles)
        ul.appendChild(li)
       });
    })    

    fetch(`${url_base}upcoming?${api_key}`)
    .then(res => res.json())
    .then(data => {
        const ul = document.getElementById("movies-list-3")
        const movies = data.results.filter((e,i)=>i<5)
        movies.forEach(({poster_path,title})=>{
        const li = document.createElement("li")
        const image = document.createElement("img")
        const titles = document.createElement("p")
        li.classList.add("movies-item")
        titles.innerText=title
        titles.classList.add("title")
        image.src=`${img_src}${poster_path}`
        image.classList.add("movie-img")
        li.appendChild(image)
        li.appendChild(titles)
        ul.appendChild(li)
       });
    })
        
    fetch(`${url_base}now_playing?${api_key}`)
    .then(res => res.json())
    .then(data => {
        const ul = document.getElementById("movies-list-4")
        const movies = data.results.filter((e,i)=>i<5)
        movies.forEach(({poster_path,title})=>{
        const li = document.createElement("li")
        const image = document.createElement("img")
        const titles = document.createElement("p")
        li.classList.add("movies-item")
        titles.innerText=title
        titles.classList.add("title")
        image.src=`${img_src}${poster_path}`
        image.classList.add("movie-img")
        li.appendChild(image)
        li.appendChild(titles)
        ul.appendChild(li)
       });
    })