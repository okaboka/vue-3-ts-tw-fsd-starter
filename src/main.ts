import { createHead } from '@vueuse/head';
import { createPinia } from 'pinia';
import { createApp, markRaw } from 'vue';
import { App } from './app';
import router from './app/router';
import './assets/index.postcss';

const head = createHead();
const app = createApp(App);

const pinia = createPinia();
pinia.use(({ store }) => {
  store.router = markRaw(router);
});
app.use(pinia);
app.use(router);
app.use(head);

app.mount('#app');
