const api_key="93ee165ca933b62fc633532dbab44632";
const url_base="https://api.themoviedb.org/3/movie/";
const dire = "https://image.tmdb.org/t/p/original";
const img_src="https://image.tmdb.org/t/p/w500/";
let currentPage = 1;
const popular =`${url_base}popular?api_key=${api_key}&page=${currentPage}`
const topRated = `${url_base}top_rated?api_key=${api_key}&page=${currentPage}`
const upcoming = `${url_base}upcoming?api_key=${api_key}&page=${currentPage}`
const nowPlaying =`${url_base}now_playing?api_key=${api_key}&page=${currentPage}`
 

const logo = document.getElementsByClassName("logo");
logo.onclick = event => {
    event.location.reload(true);
    
} 

const keyPress = event => {
    if(event.code === "Enter"){
        search()
    }
}
const create = (movies,container) =>{
    movies.forEach(({title,poster_path, id})=>{
    const li = document.createElement("li");
    const image = document.createElement("img");
    const titles = document.createElement("p");
    li.id=id;
    li.classList.add("movies-item");
    titles.innerText=title;
    titles.classList.add("title");
    image.src=`${img_src}${poster_path}`;
    image.classList.add("movie-img");
    li.appendChild(image);
    li.appendChild(titles);
container.appendChild(li);
})
} 
const replaceContP= () => {
    fetch(`${popular}`)
       .then(res => res.json())
       .then(res => create(res.results.filter((e,i)=>i<5),container))
    const container = document.getElementById("movies-list-1")
    container.innerHTML=""
    }

const replaceContA = () => {
    fetch(`${popular}`)
       .then(res => res.json())
       .then(res => create(res.results.filter((e,i)=>i<10 & i>=5),container))
    const container = document.getElementById("movies-list-2")
    container.innerHTML=""
    }
    const replaceContB = () => {
    fetch(`${popular}`)
       .then(res => res.json())
       .then(res => create(res.results.filter((e,i)=>i<15 & i>=10),container))
    const container = document.getElementById("movies-list-3")
    container.innerHTML=""
    }
    const replaceContC = () => {
  fetch(`${popular}`)
       .then(res => res.json())
       .then(res => create(res.results.filter((e,i)=>i<20 & i>=15),container))
    const container = document.getElementById("movies-list-4")
    container.innerHTML=""
}

const replaceContRa = () => {
    fetch(`${topRated}`)
       .then(res => res.json())
       .then(res => create(res.results.filter((e,i)=>i<5),container))
    const container = document.getElementById("movies-list-1")
    container.innerHTML=""
    }
    const replaceContRb = () => {
    fetch(`${topRated}`)
       .then(res => res.json())
       .then(res => create(res.results.filter((e,i)=>i<10 & i>=5),container))
    const container = document.getElementById("movies-list-2")
    container.innerHTML=""
    }
    const replaceContRc = () => {
    fetch(`${topRated}`)
       .then(res => res.json())
       .then(res => create(res.results.filter((e,i)=>i<15 & i>=10),container))
    const container = document.getElementById("movies-list-3")
    container.innerHTML=""
}
const replaceContRd = () => {
    fetch(`${topRated}`)
       .then(res => res.json())
       .then(res => create(res.results.filter((e,i)=>i<20 & i>=15),container))
    const container = document.getElementById("movies-list-4")
    container.innerHTML=""
}
const replaceContUa = () => {
    fetch(`${upcoming}`)
       .then(res => res.json())
       .then(res => create(res.results.filter((e,i)=>i<5),container))
    const container = document.getElementById("movies-list-1")
    container.innerHTML=""
    }
    const replaceContUb = () => {
    fetch(`${upcoming}`)
       .then(res => res.json())
       .then(res => create(res.results.filter((e,i)=>i<10 & i>=5),container))
    const container = document.getElementById("movies-list-2")
    container.innerHTML=""
    }
    const replaceContUc = () => {
    fetch(`${upcoming}`)
       .then(res => res.json())
       .then(res => create(res.results.filter((e,i)=>i<15 & i>=10),container))
    const container = document.getElementById("movies-list-3")
    container.innerHTML=""
}
const replaceContUd= () => {
    fetch(`${upcoming}`)
       .then(res => res.json())
       .then(res => create(res.results.filter((e,i)=>i<20 & i>=15),container))
    const container = document.getElementById("movies-list-4")
    container.innerHTML=""
}
const replaceContNa = () => {
    fetch(`${nowPlaying}`)
       .then(res => res.json())
       .then(res => create(res.results.filter((e,i)=>i<5),container))
    const container = document.getElementById("movies-list-1")
    container.innerHTML=""
    }
    const replaceContNb = () => {
    fetch(`${nowPlaying}`)
       .then(res => res.json())
       .then(res => create(res.results.filter((e,i)=>i<10 & i>=5),container))
    const container = document.getElementById("movies-list-2")
    container.innerHTML=""
    }
    const replaceContNc = () => {
    fetch(`${nowPlaying}`)
       .then(res => res.json())
       .then(res => create(res.results.filter((e,i)=>i<15 & i>=10),container))
    const container = document.getElementById("movies-list-3")
    container.innerHTML=""
}
const replaceContNd= () => {
    fetch(`${nowPlaying}`)
       .then(res => res.json())
       .then(res => create(res.results.filter((e,i)=>i<20 & i>=15),container))
    const container = document.getElementById("movies-list-4")
    container.innerHTML=""
}
const clean = () => {
const bann = document.getElementById("banner")
bann.classList.add("hide")
const title1= document.getElementById("title-section-1")
title1.classList.add("margin")
const title2 = document.getElementById("title-section-2")
title2.classList.add("hide")
const title3 = document.getElementById("title-section-3")
title3.classList.add("hide")
const title4 = document.getElementById("title-section-4")
title4.classList.add("hide")
}

// El problema estaba en la propagación del evento (ver más info sobre como 
// funcionan el modelo de eventos en 
// https://developer.mozilla.org/es/docs/Referencia_DOM_de_Gecko/Eventos o 
// https://es.khanacademy.org/computing/computer-programming/html-css-js/html-js-dom-events/v/making-webpages-interactive-with-events) que al no llamar a 
// event.preventDefault hacía que el evento se propague llegando a invocar 
// vuelva a invocar el logo.onclick lo que hacia que se recargue la página.
// En definitiva solo faltaba el  event.preventDefault(); que agregue en los 
// otros handlers.
const pop = (event) => {
    event.preventDefault();
    clean();
    const h2 = document.getElementById("popular-movies")
    h2.innerText= "Popular Movies"
    replaceContP();
    replaceContA();
    replaceContB();
    replaceContC();
    const btn = document.getElementById("more")
    btn.classList.add("active")
    
}
const topR = (event) => {
    event.preventDefault();
    clean();
    const h2 = document.getElementById("popular-movies")
    h2.innerText= "Top Rated Movies"
    replaceContRa();
    replaceContRb();
    replaceContRc();
    replaceContRd();
    const btn = document.getElementById("more")
    btn.classList.add("active")
    
}
const up = (event) => {
    event.preventDefault();
    clean();
    const h2 = document.getElementById("popular-movies")
    h2.innerText= "Upcoming Movies"
    replaceContUa();
    replaceContUb();
    replaceContUc();
    replaceContUd();
    const btn = document.getElementById("more")
    btn.classList.add("active")
}
const now = (event) => {
    event.preventDefault();
    clean();
    const title1= document.getElementById("popular-movies")
    title1.innerText="Now Playing Movies"
    replaceContNa();
    replaceContNb();
    replaceContNc();
    replaceContNd();
    const btn = document.getElementById("more")
    btn.classList.add("active")
}
const search = () => {
    const banner = document.getElementById("banner")
    banner.classList.add("hide")
    const h2 = document.getElementById("popular-movies")
    h2.innerText= "Search result"
    const title1= document.getElementById("title-section-1")
    title1.classList.add("margin")
    const title2 = document.getElementById("title-section-2")
    title2.classList.add("hide")
    const title3 = document.getElementById("title-section-3")
    title3.classList.add("hide")
    const title4 = document.getElementById("title-section-4")
    title4.classList.add("hide")
    const search = document.getElementById("search")
    const wanted = search.value
    let currentPage = 1;
    const ul = document.getElementById("movies-list-1")
    ul.innerHTML=""
    
    const prom = fetch(`https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query=${wanted}&page=${currentPage}`);
    prom.then(res => res.json())
        .then(data => {
            const movies = data.results.filter((e,i)=>i<5)
            movies.forEach(({poster_path,title})=>{
            const li = document.createElement("li");
            const image = document.createElement("img");
            const titles = document.createElement("p");
            li.classList.add("movies-item");
            titles.innerText=title;
            titles.classList.add("title");
            image.src=`${img_src}${poster_path}`;
            image.classList.add("movie-img");
            li.appendChild(image);
            li.appendChild(titles);
            ul.appendChild(li);
        });
    })
    .catch(error => {
        let li_error = document.createElement("li")
        li_error.innerText=("We are sorry! this movie is not in our database! We will try to add it very soon!")
        ul.appendChild(li_error)
    
    })
    
}    



const popularfive = () => {
         fetch(`${url_base}popular?${api_key}`)
           .then(res => res.json())
           .then(res => create(res.results.filter((e,i)=>i<5),container))
        const container = document.getElementById("movies-list-1")
        container.innerHTML=""
}
const topfive = () => {
        fetch(`${url_base}top_rated?${api_key}`)
           .then(res => res.json())
           .then(res => create(res.results.filter((e,i)=>i<5),container))
        const container = document.getElementById("movies-list-2")
        container.innerHTML=""
}
const upcomingfive = () => {
        fetch(`${url_base}upcoming?${api_key}`)
           .then(res => res.json())
           .then(res => create(res.results.filter((e,i)=>i<5),container))
        const container = document.getElementById("movies-list-3")
        container.innerHTML=""
}
const nowfive = () => {
        fetch(`${url_base}now_playing?${api_key}`)
           .then(res => res.json())
           .then(res => create(res.results.filter((e,i)=>i<5),container))
        const container = document.getElementById("movies-list-4")
        container.innerHTML=""
}

const home = () => {
    const btn = document.getElementById("more")
        btn.classList.add("hide")
        popularfive();
        topfive();
        upcomingfive();
        nowfive();
}
            
    
    
    
    



     

  