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
      }, 150);
    });
  },

  toggleTarefa({ commit }, tarefa) {
    commit("toggleTarefa", tarefa);
  },

  removeTarefa({ commit }, tarefa) {
    commit("removeTarefa", tarefa);
  },

  checkAll({ commit, state }) {
    const uncheckItemsId = state.tarefas
      .filter((tarefa) => !tarefa.checked)
      .map((itemsNaoChecados) => itemsNaoChecados.id);
    commit("toggleList", uncheckItemsId);
  },

  uncheckAll({ commit, state }) {
    const checkItemsId = state.tarefas
      .filter((tarefa) => tarefa.checked)
      .map((itemsNaoChecados) => itemsNaoChecados.id);
    commit("toggleList", checkItemsId);
  },

  removeAllCheckeds({ commit, state }) {
    const checkeds = state.tarefas
      .filter((tarefa) => tarefa.checked)
      .map((nonCheckedItem) => nonCheckedItem.id);
    commit("removeList", checkeds);
  },
};

const getters = {
  uncheckeds(state) {
    return state.tarefas.filter((tarefa) => tarefa.checked === false);
  },
  checkeds(state) {
    return state.tarefas.filter((tarefa) => tarefa.checked === true);
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

  toggleList(state, tarefaId) {
    const tarefas = state.tarefas.map((item) => {
      return tarefaId.includes(item.id)
        ? { ...item, checked: !item.checked }
        : item;
    });
    state.tarefas = tarefas;
  },

  removeList(state, tarefasId) {
    const tarefas = state.tarefas.filter(
      (item) => !tarefasId.includes(item.id)
    );
    state.tarefas = tarefas;
  },
};

export const store = new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
});
