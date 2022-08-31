import {getPictureOfTheDay, getPicture, getData, getPicturesRange, getRandomPictures} from './api.js';

const BASE_URL = 'https://api.nasa.gov/planetary/apod';
const API_KEY = 'api_key=t6DwZgp9FbxOvDNJeqXlI8zvZmDudZRyP5vSH4Nu';
/*
const Search = {
  template: `<div class="search">
<h1>NASA Image Archive Search!</h1>
    <form v-on:submit.prevent="getResults(query)">
      <input type="text" placeholder="Try searching for ‘stars’✨" v-model="query" />
    </form>
    <div class="grid">
      <div class="image_wrap"
        v-for="(result,index) in results"
        :key="index"
        v-scroll="onScroll"
        @mouseover="animateBox">
        <img @mouseover="animateBox" class="grid_item" :src="result.links[0].href"/>   
       
    </div>
  </div>`,   
  data() {
    return {
      msg: "Search",
      query: "",
      results: "",
      title: ""
      // explanation: ''
    };
  },
  methods: {
    getResults(query) {
      axios
        .get(
          "https://images-api.nasa.gov/search?q=" + query + "&media_type=image" 
        )
        .then(response => {         
          this.results = response.data.collection.items;
          //this.explanation = response.data.explanation;
        });
       
    },     
    onScroll() {    
    
    },
    animateBox() {
      TweenMax.to(
        ".grid_item",
        1.5,
        {scale: 0.95, ease: Power2.easeOut, yoyo: true },
        0.1
      );
    }
  }
};

// Vue custom directive taken from vue's documents and 
Vue.directive('scroll', {
  inserted: function(el, binding) {
    let f = function(evt) {       
      if (binding.value(evt, el)) {
        window.removeEventListener('scroll', f);
      }
    };
 
    window.addEventListener('scroll', f);
  }, 
});


//This is a root instance, with one main component
new Vue({
  el: "#app",
  components: {
  Search
  },
   template: `<Search/>`
});
*/

//Script del proyecto pasado Nancy
//Método Sensei

// fetch('https://images-api.nasa.gov/search?q=${busqueda}')
// .then((response)=>response.json())
// .then((data)=>{
//     const resultados = (data);
//     dibujar(data)
// })

//FETCH 1
/*
fetch('https://api.nasa.gov/planetary/apod?api_key=u8Z3MZ6Hcmm1zGtZYe1h3pZ1aEH9gfa0qXhBsLol&date')
.then((response)=>response.json())
.then((data)=>{
    resultados = (data);
    dibujar(data)
})
*/


// const buscar = (evt)=>{
//     console.log(evt.currentTarget.value);

//     resultados.filter(function(resultado){
//         return 
//     })
// }

// const dibujar = (fichas) => {
    

//     document.querySelector("#galeria").innerHTML="";
//     fichas.forEach((ficha) => {
//         let div = document.createElement("div");
//         div.classList.add("column", "is-3");
//         div.innerHTML += `<div class="card">
//                         <div class="card-image">
//                             <figure class="image is-4by3">
//                                 <img src="${personaje.href}" alt="Placeholder image">
//                             </figure>
//                         </div>
//                         <div class="card-content">
//                             <div class="media">
//                                 <div class="media-content">
//                                 <p class="title is-4"><b>${personaje.title}</b></p>
//                                 </div>
//                             </div>
//                         <div class="content">
//                             <p><b>${personaje.description}<b/></p>
//                             <a>@Nasa</a>
//                             <br>
//                             <time datetime="${personaje.date_created}"></time>
//                         </div>
//                         </div>
//                     </div> `
//         document.querySelector("#galeria").append(div);
//     });

// }



fetch(`${BASE_URL}?${API_KEY}`).then(data => data.json()).then(data => displayPictures(data))

//run();

function displayPictures(data) {
  console.log(data)
  const fragment = document.createDocumentFragment();
  data.forEach(pictureData => {
    console.log(pictureData)
    if (pictureData['media_type'] !== 'image') return;

    const img = document.createElement('img');
    img.src = pictureData.url;

    const h3 = document.createElement('h3');
    h3.textContent = pictureData.title;

    const p = document.createElement('p');
    p.textContent = pictureData.date;

    const div = document.createElement('div');
    div.append(img, h3, p);

    fragment.appendChild(div);
  });
  document.getElementById('galeria').appendChild(fragment);
}

// console.log(getPictureOfTheDay());
const run = async () => {
  const data = await fetch(`${BASE_URL}?${API_KEY}&start_date=2020-03-10&end_date=2022-08-30`);
  const response = await data.json();
  console.log(response);
  displayPictures(response);
}

/*
fetch('https://api.nasa.gov/planetary/apod?api_key=t6DwZgp9FbxOvDNJeqXlI8zvZmDudZRyP5vSH4Nu')
  .then(res => res.json())
  .then(data => console.log(data));
    document.querySelector("#galeria").innerHTML="";
    fichas.forEach((ficha) => {
        let div = document.createElement("div");
        div.classList.add("column", "is-3");
        div.innerHTML += `<div class="card">
                        <div class="card-image">
                            <figure class="image is-4by3">
                                <img src="${personaje.href}" alt="Placeholder image">
                            </figure>
                        </div>
                        <div class="card-content">
                            <div class="media">
                                <div class="media-content">
                                <p class="title is-4"><b>${personaje.title}</b></p>
                                </div>
                            </div>
                        <div class="content">
                            <p><b>${personaje.explanation}<b/></p>
                            <a>@Nasa</a>
                            <br>
                            <time datetime="${personaje.date}"></time>
                        </div>
                        </div>
                    </div> `
        document.querySelector("#galeria").append(div);
    });

*/
