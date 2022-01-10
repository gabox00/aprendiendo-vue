import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router";
import Vuelidate from 'vuelidate';
import Peliculas from "@/components/Peliculas";
import MiComponente from "@/components/MiComponente";
import ErrorComponent from "@/components/ErrorComponent";
import Formulario from "@/components/Formulario";

Vue.config.productionTip = false
Vue.use(VueRouter);
Vue.use(Vuelidate);

const routes = [
  {path: '/', component: Peliculas},
  {path: '/home', component: Peliculas},
  {path: '/MiComponente/:id?', component: MiComponente},
  {path: '/formulario', component: Formulario},
  {path: '*', component: ErrorComponent},
]

const router = new VueRouter({
  routes,
  mode: "history"
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
