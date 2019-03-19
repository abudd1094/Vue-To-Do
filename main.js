Vue.component('addnote', {
  props: {
    noteTitle: this.noteTitle,
    noteContent: this.noteContent
  },
  template: `
    <div class="note">
      <form @submit.prevent="onSubmit">
        <label for="noteTitle">Title:</label>
        <input type="text" id="noteTitle"><br>
        <label for="noteContent">Content:</label>
        <textarea id="noteContent" rows="1" columns="5" style="height: 56px"></textarea>
        <input type="submit" value="Submit" class="button">
      </form>  
    </div>
  `
})

var app = new Vue({
  el: '#app',
  data: {
    title: 'Vue To Do'
  }
})