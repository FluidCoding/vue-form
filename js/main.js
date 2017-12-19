const VueApp = new Vue({
  el: '#app',
  data: { 
    userName: 'Admin',
    notInit: true
  },
  methods:{
     initForm(){
      // hide init.
      this.notInit = false;
      // start vueform

     },
     loadForm(){
      // load form from input
     }
  }
})

const VueForm = new Vue({
  el: 'evalForm',
  data: {

  }
})