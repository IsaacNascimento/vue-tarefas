import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const defaultState = {
  tarefas: [],
};

const actions = {
  addTarefa({ commit }, tarefa) {
    return new Promise(() => {
      setTimeout(() => {
        tarefa.id = Date.now();
        commit("addTarefa", tarefa);
      }, 1000);
    });
  },
};

const mutations = {
  addTarefa(state, payload) {
    defaultState.tarefas.push(payload);
  },
};

export const store = new Vuex.Store({
  defaultState,
  mutations,
  actions,
});
