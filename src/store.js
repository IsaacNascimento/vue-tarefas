import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const state = {
  tarefas: [],
  loading: false,
};

const actions = {
  addTarefa({ commit }, tarefa) {
    commit("setLoading", true);
    return new Promise((resolve) => {
      setTimeout(() => {
        tarefa.id = Date.now();
        commit("addTarefa", tarefa);
        commit("setLoading", false);
        resolve(tarefa);
      }, 1000);
    });
  },
};

const mutations = {
  addTarefa(state, payload) {
    state.tarefas.push(payload);
  },
  setLoading(state, payload) {
    state.loading = payload;
  },
};

export const store = new Vuex.Store({
  state,
  mutations,
  actions,
});
