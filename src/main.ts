import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import "bootstrap/dist/css/bootstrap.min.css"
import jwt_decode from "jwt-decode";
import store from "./store"

const app = createApp(App)

app.use(router)

// Install the store instance as a plugin
app.use(store)

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const token = urlParams.get('token');
if (token !== null)  var decoded = jwt_decode(token);
//console.log(decoded.variables.Account);


app.mount('#app')

import "bootstrap/dist/js/bootstrap.min.js"

