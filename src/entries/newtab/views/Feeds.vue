<template>
  <section>
    <h2>Feeeeeeeeeeeeds!</h2>
    <form id="add-feed" action="index.html" @submit.prevent="createFeed">
      <h3>Introduce un nuevo feed a tu lista</h3>
      <label for="title">Título</label>
      <input 
        required
        v-model="title"
        type="text"
        name="title"
        id="title"
      />
      <label for="url">URL</label>
      <input
        required
        v-model="url"
        type="url"
        name="url"
        id="url"
      />
      <button type="submit">Añadir</button>
    </form>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { useIndexedDatabaseStore } from '../stores/indexedDatabaseStore.js'

// Stores
const indexedDatabaseStore = useIndexedDatabaseStore()

// Data
const title = ref('')
const url = ref('')

// Functions
function createFeed (){
  // We already have them as 'required' in the form but just in case
  if (!title.value || !url.value) return

  indexedDatabaseStore.createFeed(
    {
      title: title.value,
      url: url.value
    }
  )

  title.value = ''
  url.value = ''
}

</script>
