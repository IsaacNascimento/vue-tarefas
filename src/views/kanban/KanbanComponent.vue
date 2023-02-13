<template>
  <div class="container-board">
    <div class="columns">
      <div class="column col-4">
        <div class="panel">
          <div class="panel-header">
            <div class="panel-title">A fazer</div>
          </div>
          <div class="panel-nav">
            <!-- navigation components: tabs, breadcrumbs or pagination -->
          </div>
          <div class="panel-body">
            <TarefaCpnt
              v-for="tarefa in uncheckeds"
              @remove="removeTarefa"
              @toggle="toggleTarefa"
              :tarefa="tarefa"
              :key="tarefa.id"
            />
          </div>
          <div class="panel-footer">
            <!-- buttons or inputs -->
          </div>
        </div>
      </div>
      <div class="column col-4">
        <div class="panel">
          <div class="panel-header">
            <div class="panel-title">Pronto</div>
          </div>
          <div class="panel-nav">
            <!-- navigation components: tabs, breadcrumbs or pagination -->
          </div>
          <div class="panel-body">
            <TarefaCpnt
              v-for="tarefa in checkeds"
              @remove="removeTarefa"
              @toggle="toggleTarefa"
              :tarefa="tarefa"
              :key="tarefa.id"
            />
          </div>
          <div class="panel-footer">
            <!-- buttons or inputs -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TarefaCpnt from "@/components/Tarefa-cpnt.vue";
import { mapGetters, mapActions } from "vuex";
export default {
  name: "KanbanComponent",
  components: { TarefaCpnt },
  computed: {
    ...mapGetters(["uncheckeds", "checkeds"]),
  },
  methods: {
    ...mapActions(['addTarefa', 'toggleTarefa', 'removeTarefa']),
  },
};
</script>

<style scoped>
.container-board {
  height: calc(100vh - 200px);
  padding: 10px;
}

.columns {
  height: 100%;
}

.columns .column .panel {
  height: 100%;
  border: 0;
  box-shadow: 0 0.25rem 1rem rgba(48, 55, 66, 0.15);
}
</style>
