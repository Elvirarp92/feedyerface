<template>
  <div>
    <aside>
      <nav>
        <RouterLink to="/">Articles</RouterLink>
        <RouterLink to="/feeds">Feeds</RouterLink>
      </nav>
    </aside>
    <main>
      <h1>Hello world!</h1>
      <RouterView />
    </main>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useIndexedDatabaseStore } from './stores/indexedDatabaseStore.js'

// Stores
const indexedDatabaseStore = useIndexedDatabaseStore()

// Hooks
onMounted(() => {
  indexedDatabaseStore.readFeeds()
})
</script>

