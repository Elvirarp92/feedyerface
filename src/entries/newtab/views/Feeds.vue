<template>
  <section>
    <h2>Feeeeeeeeeeeeds!</h2>
    <form id="add-feed" action="index.html">
      <h3>Introduce un nuevo feed a tu lista</h3>
      <label for="title">Título</label>
      <input required type="text" name="title" id="title" />
      <label for="url">URL</label>
      <input required type="url" name="url" id="url" />
      <button type="submit">Añadir</button>
    </form>
  </section>
</template>

<script setup></script>
