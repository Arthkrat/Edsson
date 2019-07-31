import Vue from 'vue'
import Vuex from 'vuex'
import config from '../config.json';
Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        savedValues: null
    },
    getters: {
        getConfig(state) {
            return config;
        },
        getSavedValues(state){
            return state.savedValues;
        }
    },
    mutations: {
        addRow(state){
            config.schema.rows.push(
                {columns : [
                 {
                    elements : [
                        {
                            id : "",
                            type : "",
                            defaultValue : ""
                        }
                    ]
                }
            ]});
        },
        addCol(state, index){
            config.schema.rows[index].columns.push({
                    elements : [
                        {
                            id : "",
                            type : "",
                            defaultValue : ""
                        }
                    ]
                });
        },
        saveValues(state){
            state.savedValues = config.schema.rows;
        }
    },
    actions: {
       addRow(store){
            store.commit('addRow');
       },
       addCol(store, index){
           store.commit('addCol', index)
       },
       saveValues(store){
           store.commit('saveValues')
       }
    }
})