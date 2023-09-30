import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

//import bootstarp framework
// import bootstarpcss from '../node_modules/bootstrap/dist/css/bootstrap.css'
// import bootstarpjs from '../node_modules/bootstrap//dist/js/bootstrap'

const app = createApp(App)

// app.use(bootstarpcss)
// app.use(bootstarpjs)
app.use(router)

app.mount('#app')
