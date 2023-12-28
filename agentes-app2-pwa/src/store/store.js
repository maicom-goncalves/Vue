import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.store({
    state:{
        aldeia:"",
        cns:""
    },
    getters:{
        lugar(state){
            return state.aldeia
        },
        idAgente(state){
            return state.cns
        }
    },/*
    setters:{
        lugar(state){
            return state.aldeia
        }
    },*/
    mutations:{
        mudarAldeia(state,payload){
            state.aldeia=payload
        },
        mudarCns(state,payload){
            state.cns=payload
        }
    },
    actions:{
        mudarAldeia(context,payload){
            context.commit('mudarAldeia',payload)
        },
        mudarCns(context,payload){
            context.commit('mudarCns',payload)
        }
    }
})