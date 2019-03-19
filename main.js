Vue.component('addnote', {
  template: `
    <div class="note">
      <form @submit.prevent="onSubmit">
        <label for="noteTitle">Title:</label>
        <input v-model="title" type="text" id="noteTitle"><br>
        <label for="noteContent">Content:</label>
        <textarea v-model="content" id="noteContent" rows="1" columns="5" style="height: 56px"></textarea>
        <input type="submit" value="Submit" class="button">
      </form>  
    </div>
  `,
  data() {
    return {
      title: null,
      content: null
    }
  },
  methods: {
    onSubmit() {
      let note = {
        title: this.title,
        content: this.content,
      }
      this.$emit('note-submitted', note)
      this.title = null
      this.content = null
    }
  }
})

Vue.component('mainpage', {
  template: `
    <div>
      <button @click="toggleAddButton" class="button" style="font-size: 20px">+</button>
      <addnote v-show="showAddButton" @note-submitted="addNote"></addnote>
    </div>
  `,
  methods: {
    addNote(note) {
      this.notes.push(note);
      console.log('this worked');
    },
    toggleAddButton() {
      console.log("this runs!")
      if (this.showAddButton === false) {
        this.showAddButton = true;
      } else {
        this.showAddButton = false;
      }
      
    }
  },
  data() {
    return {
      notes: [],
      showAddButton: false
    }
  }
})

var app = new Vue({
  el: '#app',
  data: {
    title: 'Vue To Do'
  }
})