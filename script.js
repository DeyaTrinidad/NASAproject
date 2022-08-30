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
