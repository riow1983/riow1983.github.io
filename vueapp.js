const app = new Vue({
  el: '#app',
  data: {
    number: ''
  },
  computed:{
    us_number: function(){
      let changed = Number(this.number)
      return 20 / changed

    }
  }
})

/* アメリカ式は分子が２０になるように揃える*/

const app2 = new Vue({
  el: '#app2',
  data: {
    number: ''
  },
  computed:{
    jp_number: function(){
      let changed = Number(this.number)
      return 20 / changed 

    }
  }
})

/*
var app2 = new Vue({
  el: '#app2',
  data: {object:verse}
})
*/
