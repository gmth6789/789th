import './assets/index.css'
import './assets/vant.min.css'
import NutUI from "@nutui/nutui";
import "@nutui/nutui/dist/style.css";
import { Video, Button } from '@nutui/nutui';

import { createApp } from 'vue'
import App from './App.vue'

createApp(App).use(NutUI).mount('#app')


