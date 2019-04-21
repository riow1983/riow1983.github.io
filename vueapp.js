var app = new Vue({
  el: '#app',
  data: {
    number: ''
  },
  computed:{
    us_number: function(){
      var changed = Number(this.number)
      return  Math.round(20 / changed * 100) / 100

    },
    eu_number: function(){
      var changed = Number(this.number)
      return Math.round(6 / changed * 100) / 100

    },
    logmar: function(){
      var changed = Number(this.number)
      if(changed==0.1){
        return '+1.0'
      }else if(changed==0.125){
        return '+0.9'
      }else if(changed==0.16){
        return '+0.8'
      }else if(changed==0.2){
        return '+0.7'
      }else if(changed==0.25){
        return '+0.6'
      }else if(changed==0.32){
        return '+0.5'
      }else if(changed==0.4){
        return '+0.4'
      }else if(changed==0.5){
        return '+0.3'
      }else if(changed==0.63){
        return '+0.2'
      }else if(changed==0.8){
        return '+0.1'
      }else if(changed==1){
        return '0.0'
      }else if(changed==1.25){
        return '-0.1'
      }else if(changed==1.6){
        return '-0.2'
      }else if(changed==2){
        return '-0.3'
      }else{
        return ''
      }
    },
    shikaku: function(){
      var changed = Number(this.number)
      if(changed==0.1){
        return 10
      }else if(changed==0.125){
        return 8
      }else if(changed==0.16){
        return 6.25
      }else if(changed==0.2){
        return 5
      }else if(changed==0.25){
        return 4
      }else if(changed==0.3){
        return 3.33
      }else if(changed==0.32){
        return 3.14
      }else if(changed==0.4){
        return 2.50
      }else if(changed==0.5){
        return 2
      }else if(changed==0.6){
        return 1.66
      }else if(changed==0.63){
        return 1.58
      }else if(changed==0.7){
        return 1.43
      }else if(changed==0.8){
        return 1.25
      }else if(changed==0.9){
        return 1.11
      }else if(changed==1){
        return 1
      }else if(changed==1.2){
        return 0.83
      }else if(changed==1.25){
        return 0.8
      }else if(changed==1.5){
        return 0.67
      }else if(changed==1.6){
        return 0.625
      }else if(changed==2){
        return 0.5
      }else{
        return ''
      }
    }
  }
})


var app2 = new Vue({
  el: '#app2',
  data: {
    number: ''
  },
  computed:{
    jp_number: function(){
      var changed = Number(this.number)
      return Math.round(20 / changed * 1000) / 1000

    }
  }
})


var app4 = new Vue({
  el: '#app4',
  data: {
    number: ''
  },
  computed:{
    jp_number: function(){
      var changed = Number(this.number)
      return Math.round(6 / changed * 1000) / 1000

    }
  }
})



/*
var app2 = new Vue({
  el: '#app2',
  data: {object:verse}
})
*/
