var app = new Vue({
  el: '#app',
  data: {
    number: ''
  },
  computed:{
    us_number: function(){
      var changed = Number(this.number)
      return  Math.floor(20 / changed)

    },
    eu_number: function(){
      var changed = Number(this.number)
      return Math.floor(6 / changed)

    }
  }
})

/* アメリカ式は分子が２０になるように揃える*/

var app2 = new Vue({
  el: '#app2',
  data: {
    number: ''
  },
  computed:{
    jp_number: function(){
      var changed = Number(this.number)
      return (Math.floor(20 / changed * 10) / 10).toFixed(1)

    }
  }
})

/*
var app3 = new Vue({
  el: '#app3',
  data: {
    number: ''
  },
  computed:{
    eu_number: function(){
      var changed = Number(this.number)
      return Math.floor(6 / changed)

    }
  }
})
*/


var app4 = new Vue({
  el: '#app4',
  data: {
    number: ''
  },
  computed:{
    jp_number: function(){
      var changed = Number(this.number)
      return (Math.floor(6 / changed * 10) / 10).toFixed(1)

    }
  }
})



/*
var app2 = new Vue({
  el: '#app2',
  data: {object:verse}
})
*/
