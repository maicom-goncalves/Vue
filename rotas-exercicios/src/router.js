import Vue from 'vue'
import Router from 'vue-router'
import Inicio from './components/Inicio'
import Menu from './components/template/Menu'
import Usuario from './components/usuario/Usuario'
import UsuarioDetalhe from './components/usuario/UsuarioDetalhe'
import UsuarioLista from './components/usuario/UsuarioLista'
import UsuarioEditar from './components/usuario/UsuarioEditar'

Vue.use(Router)

export default new Router({
    mode:'history',
    routes:[{
        name:'inicio',
        path:'/',
        //component: Inicio
        components:{
          default:Inicio,
          menu:Menu
        }
    },{
        path:'/usuario',
        component:Usuario,
        props:true,
        children:[
            {path:'',component:UsuarioLista},
            {path:':id',component:UsuarioDetalhe,props:true},
            {path:':id/editar',component:UsuarioEditar ,props:true,
            name:'editarUsuario'},
        ]
    },{
      path:'/redirecionar',
      redirect:'/usuario'
    }]
})
