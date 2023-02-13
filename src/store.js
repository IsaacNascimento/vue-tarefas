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

  toggleTarefa({ commit }, tarefa) {
    commit("toggleTarefa", tarefa);
  },

  removeTarefa({ commit }, tarefa) {
    commit("removeTarefa", tarefa);
  },
};

const mutations = {
  addTarefa(state, payload) {
    state.tarefas.push(payload);
  },
  setLoading(state, payload) {
    state.loading = payload;
  },

  toggleTarefa(state, payload) {
    const index = state.tarefas.findIndex((item) => item.id === payload.id);
    if (index >= 0) {
      const checked = !state.tarefas[index].checked;
      // state.tarefas[index].checked = checked;
      Vue.set(state.tarefas, index, { ...state.tarefas[index], checked });
    }
  },

  removeTarefa(state, payload) {
    return (state.tarefas = state.tarefas.filter(
      (item) => item.id !== payload.id
    ));
  },
};

export const store = new Vuex.Store({
  state,
  mutations,
  actions,
});
