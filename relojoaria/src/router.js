import Vue from 'vue'
import Router from 'vue-router'
import Inicio from './pages/InicioVue'
import Pulseiras from './pages/PulseirasVue'
import Cadastros from './pages/CadastrosVue'
import Relogios from './pages/RelogiosVue'
Vue.use(Router)


const router = new Router({
  mode: 'history',
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }
    else if (to.hash) {
      return { selector: to.hash }
    }
    else {
      return { x: 0, y: 0 }
    }
  },
  routes: [{
    name: 'inicio',
    path: '/',
    //component: Inicio
    components: {
      default: Inicio
    }
  }, {
    path: '/pulseiras',
    component: Pulseiras,
    props: false
  },
  {
    path: '/cadastros',
    component: Cadastros,
    props: false
  },
  ,
  {
    path: '/relogios',
    component: Relogios,
    props: false
  },
  {
    path: '/*',
    redirect: '/'
  }]
})

router.beforeEach((to, from, next) => {
  console.log('antes das rotas -> global')
  next()
  /*if(to.path !== './usuario'){
    next('./usuario')
  }else{
    next()
  }*/
})
export default router