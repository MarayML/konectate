<template>
  <v-card class="mx-auto" max-width="400">
    <v-img
      class="white--text align-end"
      height="200px"
      :src="require(`@/assets/img/${data.cursos[index].img}`)"
    >
      <v-card-title class="black--text">
        <div class="d-flex justify-center align-end white--text">
          <v-img class="round" :src="require(`@/assets/img/${data.cursos[index].imga}`)"></v-img>
          <h5 class="align-center ml-3">{{data.cursos[index].autor}}</h5>
        </div>
      </v-card-title>
    </v-img>
    <v-progress-linear
      background-color="white"
      color="teal"
      buffer-value="100"
      height="25"
      :value="data.cursos[index].porcent"
      striped
    >Progreso {{data.cursos[index].porcent}}%</v-progress-linear>
    <v-card-text>
      <unidad :index="index"></unidad>
    </v-card-text>
    <v-card-actions class="d-flex justify-center">
      <v-btn
        outlined
        class="mb-1"
        min-width="150px"
        color="teal"
        v-if="data.cursos[index].porcent === 0"
        @click="goCursos()"
      >Iniciar</v-btn>
      <v-btn outlined color="teal" class="mb-1" min-width="150px" @click="goCursos()" v-else>Continuar</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import data from "../assets/data/data.json";
import unidad from "../components/unidad";

export default {
  name: "card",

  components: {
    unidad
  },

  data: () => {
    return {
      data,
    };
  },
  props: {
    index: Number
  },
  methods: {
    goCursos() {
      sessionStorage.setItem("index", this.index);
      this.$router.push({ name: "Cursos" });
    }
  }
};
</script>

<style scoped>
.round {
  border-radius: 50px;
  border: 2px solid white;
  width: 70px;
  height: 70px;
}
</style>