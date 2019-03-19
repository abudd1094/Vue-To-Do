Vue.component('note', {
  template: `
    <p>this is a note</p>
  `
})

var app = new Vue({
  el: '#app',
  data: {
    title: 'Vue To Do'
  }
})