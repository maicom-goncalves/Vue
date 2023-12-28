import Vue from 'vue'
import Router from 'vue-router'
import firebase from 'firebase';

import Login from './Login'
import Inicio from './components/Inicio'
import Menu from './components/template/Menu'
import Usuario from './components/usuario/Usuario'
import UsuarioDetalhe from './components/usuario/UsuarioDetalhe'
import UsuarioLista from './components/moradores/UsuarioLista'
import UsuarioEditar from './components/usuario/UsuarioEditar'
import UsuarioCadastro from './components/cadastros/UsuarioCadastro'
import listaCidade from './components/moradores/listaCidade'
import PaginaCadastro from './components/cadastros/Pagina'
import CadastroMedico from './components/cadastros/CadastroMedico'
import Cadastros from './components/cadastros/Cadastros'

import Dia from './components/usuario/Dia'

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
    path: '/inicio',
    components: {
      default: Inicio,
      menu: Menu
    },
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/cadastros',
    component: Cadastros,
    props: false
  },
  {
    path: '/cadastroAgente',
    component: CadastroMedico,
    props: false
  },
  {
    path: '/dia',
    component: Dia,
    props: false
  },
  {
    path: '/usuario',
    component: Usuario,
    props: true,
    children: [
      { path: '', component: listaCidade },
      {
        path: ':id', component: UsuarioLista, name: 'usuario', props: true,
        beforeEnter: (to, from, next) => {
          next()
        }
      },
      {
        path: ':id/:id2', component: UsuarioDetalhe, name: 'usuarioDetalhe', props: true
      },
      {
        path: ':id/:id2/editar', component: UsuarioEditar, props: true,
        name: 'editarUsuario'
      },
    ]
  },


  {
    path: '/cadastro',
    component: PaginaCadastro,
    props: true,
    children: [
      { path: '', component: UsuarioCadastro },
      {
        path: ':id/', component: UsuarioLista, name: 'UsuarioLista', props: true,
        beforeEnter: (to, from, next) => { next() }
      },
      /*
      {
        path: ':id/', component: UsuarioDetalhe, name: 'usuarioDetalhe', props: true
      }*/
    ]
  },
  {
    path: '*',
    redirect: '/login'
  },
  {
    path: '/',
    redirect: '/inicio'
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  ]
})

router.beforeEach((to, from, next) => {
  const currentUser = firebase.auth().currentUser;
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);

  if (requiresAuth && !currentUser) next('login');
  else if (!requiresAuth && currentUser) next();
  else next();

  /* next()
   if(to.path !== './usuario'){
     next('./usuario')
   }else{
     next()
   }*/
})
export default router
