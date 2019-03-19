Vue.component('addnote', {
  template: `
    <div class="note">
      <form @submit.prevent="onSubmit">
        <label for="noteTitle">Title:</label>
        <input v-model="title" type="text" id="noteTitle"><br>
        <label for="noteContent">Content:</label>
        <textarea v-model="content" id="noteContent" rows="1" columns="5" style="height: 56px"></textarea>
        <div style="width: 20%; display: block; margin: auto"><input type="submit" value="Add Note" class="button"></div>
      </form>  
    </div>
  `,
  data() {
    return {
      title: null,
      content: null,
      id: 0,
      edit: false
    }
  },
  methods: {
    onSubmit() {
      let note = {
        title: this.title,
        content: this.content,
        id: this.id
      }
      this.$emit('note-submitted', note)
      this.title = null
      this.content = null
      this.id++
    },
    toggleEdit() {
      if (this.edit === false) {
        this.edit = true;
      } else {
        this.edit = false;
      }
    }
    
  }
})

Vue.component('mainpage', {
  template: `
    <div>
      <button @click="toggleAddButton" class="button" style="font-size: 20px; width: 50px; border-radius: 50px;">+</button>
      <addnote v-show="showAddButton" @note-submitted="addNote"></addnote>
      <ul style="padding: 0; list-style: none;">
        <li v-for="note in notes" :key="note.id" style="padding: none;">
          <div class="note">
            <p class="note-title">{{ note.title }}</p> 
            <p class="note-content">{{ note.content }}</p>
            <button @click="deleteNote(note)" class="button">Delete</button>
          </div>
        </li>
      </ul>
    </div>
  `,
  methods: {
    addNote(note) {
      this.notes.push(note);
      console.log('this push worked with id: ' + note.id);
    },
    deleteNote(note) {
      this.notes.splice(this.notes.indexOf(note), 1);
      console.log('this splice worked ' + this.notes.indexOf(note));
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