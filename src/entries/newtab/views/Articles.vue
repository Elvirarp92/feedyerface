<template>
  <section>
    <h2>Artículos</h2>
    <iframe
      ref="fetchIframe" 
      src="https://www.eldiario.es/rss/"
      frameborder="0"
      @load="e => iframeIsLoaded(e)"
    >
    </iframe>
  </section>
</template>

<script setup>
import { onBeforeUnmount, useTemplateRef, onMounted, reactive } from 'vue'

const articles = reactive([])
const frame = useTemplateRef('fetchIframe')

function iframeIsLoaded(event) {
  console.log('loadéd')
  console.log(event.originalTarget)
  console.log(event.originalTarget.contentWindow?.document)
  console.log(frame.contentWindow?.document)
}

function afterLoading(){
    alert("I am here");
}

onMounted(() => {
  /* fetch('https://www.eldiario.es/rss/', {
  }).then(res => console.log(res)) */


})

onBeforeUnmount(() => {
})

</script>