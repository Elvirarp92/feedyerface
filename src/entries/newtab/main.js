import { createApp } from "vue";
import App from "./App.vue";
import { createMemoryHistory, createRouter } from 'vue-router'

import Articles from "./views/Articles.vue"
import Feeds from "./views/Feeds.vue"

const routes = [
  { path: '/', name: 'Articles', component: Articles },
  { path: '/feeds', name: 'Feeds', component: Feeds },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

createApp(App)
.use(router)
.mount("#app");
