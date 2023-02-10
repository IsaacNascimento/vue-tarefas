<template>
      <div class="container grid-xs py-2">
      <!-- <img class="img-responsive img-logo" src="@/assets/logo.png" alt="Logo do Vue.js"> -->
      <form @submit.prevent="addTarefa(tarefa)">
        <div class="input-group">
          <input type="text" v-model="tarefa.description" class="form-input" placeholder="Nova tarefa">

          <button class="btn btn-primary input-group-btn" :class="{loading}">+</button>
        </div>
      </form>

      <div class="tarefa-list">
        <tarefa v-for="t in tarefas" :key="t.id" @toggle="toggleTarefa" @remove="removeTarefa" :tarefa="t"/>
      </div>

    </div> 
</template>

<script>
import Tarefa from '../components/Tarefa-cpnt';

export default {
  name: 'App',
  components: { Tarefa },
  data() {
    return { tarefa: { checked: false } };
  },
  computed: {
    tarefas() {
      return this.$store.state.tarefas;
    },
    loading() {
      return this.$store.state.loading;
    },
  },
  methods: {
    async addTarefa(tarefa) {
        await this.$store.dispatch("addTarefa", tarefa);
        this.tarefa = { checked: false };
    },
    toggleTarefa(tarefa) {
      const index = this.tarefas.findIndex(item => item.id === tarefa.id);
      if (index >= 0) {
        const checked = !this.tarefas[index].checked;
        // this.tarefas[index].checked = checked;
        this.$set(this.tarefas, index, { ...this.tarefas[index], checked });
      }
    },
    removeTarefa(tarefa) {
      const index = this.tarefas.findIndex(item => item.id === tarefa.id);
      if (index >= 0) {
        // this.tarefas.splice(index, 1);
        this.$delete(this.tarefas, index);
      }
    }
  }
};
</script>


<style scoped>
.img-logo {
  max-width: 200px;
  margin: 0 auto;
}

.tarefa-list {
  padding-top: 2rem;
}
</style>