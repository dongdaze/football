import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import { type } from 'os';
Vue.use(Vuex)
var http = axios.create({
    baseURL: 'http://localhost:8888/',
})
var config = {
   // headers :{'Content-Type': 'application/x-www-form-urlencoded'}
   headers :{'Content-Type': 'multipart/form-data'}  
 }
let store = new Vuex.Store({
    state: {
        activeies: {},
        actives: {},
        activeForm: {},
        associations: {},
        associationsEdit: {},
        seeActives:{},
        users:{},
    },
    getters: {
        value: value => {
            return state.value;
        }
    },
    mutations: {
        //活动
        updateValue(state, payload) {
            state.value = payload;
        },
        getActivesActive(state, payload) {
            state.activeies = payload
        },
        getActives(state, payload) {
            state.actives = payload
        },
        listActiveForm(state, payload) {
            state.activeForm = payload
        },
        //社群
        assMutation(state, payload) {
            state.associations = payload;
        },
        assEditMutation(state, payload) {
            state.associationsEdit = payload;
        },
        seeActivesM(state, payload) {
            state.seeActives = payload;
        },
        //用户
        usersM(state,payload){
            state.users = payload
        }
    },
    actions: {
        //活动
        ActiveAdd({ commit }, payload) {
            http.post('activeAdd', payload.data)
                .then((response) => {
                    if (response.data.data == 1) {
                        payload.route.push('/admin/active/check')
                    }
                })
                .catch((error) => {
                    console.log(error)
                });
        },
        getActivesAction({ commit }, payload) {
            http.get('activeCheck').then((res) => {
                commit('getActivesActive', res.data.result)
            })
        },
        onLineActivesAction({ commit }, payload) {
            http.post('onLineActive', { id: payload.id }).then((response) => {
                if (response.data.result.ok == 1) {
                    payload.route.push('/admin/active')
                }
            })
        },
        offonLineActivesAction({ commit }, payload) {
            http.post('offononLineActive', { id: payload.id }).then((response) => {
                if (response.data.result.ok == 1) {
                    history.go(0)
                }
            })
        },
        listActiveFormAction({ commit }, payload) {
            http.post('listActive', { id: payload.id }).then((response) => {
                if (response.data.result) {
                    commit('listActiveForm', response.data.result)
                }
            })
        },
        getActivesA({ commit }, payload) {
            http.get('activities').then((res) => {
                commit('getActives', res.data.result)
            })
        },
        //社群
        //1.add
        
        AddAsstion({ commit }, payload) {
            http.post('association/assAdd', payload.data)
                .then((response) => {
                    if (response.data.data == 1) {
                        payload.route.push("/admin/association");
                    }
                })
                .catch((error) => {
                    console.log(error)
                })
        },
        //2.get
        getAsstion({ commit }, payload) {
            http.get('association/assGet').then((res) => {
                commit('assMutation', res.data.result)
            })
                .catch((error) => {
                    console.log(error)
                })
        },
        //3.delete
        DeleteAsstion({ commit }, payload) {
            http.post('association/assDelete', { id: payload.id }).then((res) => {
                if (res.data.data == 1) {
                    history.go(0)
                }
            }).catch((error) => {
                console.log(error)
            })
        },
        //4.edit
        EditAsstion({ commit }, payload) {
            http.post('association/assEdit', { id: payload.id }).then((res) => {
                if (res) {
                    commit('assEditMutation', res.data[0])
                }
            }).catch((error) => {
                console.log(error)
            })
        },
        EditSaveAsstion({ commit }, payload) {
            http.post('association/assEditSave', payload.data)
                .then((response) => {
                    if (response.data.data == 1) {
                        payload.route.push("/admin/association");
                    }
                })
                .catch((error) => {
                    console.log(error)
                })
        },
        seeActivesT({ commit }, payload) {
            http.post('seeActives', { id: payload.id }).then((res) => {
                if (res) {
                    commit('seeActivesM', res.data.result)
                }
            }).catch((error) => {
                console.log(error)
            })
        },
        //用户
        AddUserAtion({commit},payload){
            http.post('user/add', payload.data)
            .then((response) => {
                if (response.data.data == 1) {
                   payload.route.push("/admin/userManagement");
                }
            })
            .catch((error) => {
                console.log(error)
            })
        },
        getusersAction({commit},payload){
            http.get('user/userGet').then((res) => {
                commit('usersM', res.data)
            })
                .catch((error) => {
                    console.log(error)
                })
        },
        deleteUsersAction({commit},payload){
            http.post('user/userDelete', { id: payload.id }).then((res) => {
                if (res.data.data == 1) {
                    history.go(0)
                }
            }).catch((error) => {
                console.log(error)
            })
        }
    }
})

export default store