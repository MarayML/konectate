<template>
  <v-card class="mx-auto" max-width="400">
    <v-img
      class="white--text align-end"
      height="200px"
      :src="require(`@/assets/img/${data.cursos[index].img}`)"
    >
      <v-card-title class="black--text">{{data.cursos[index].autor}}</v-card-title>
    </v-img>
    <v-progress-linear color="amber" height="25" reactive>{{data.cursos[index].porcent}}%</v-progress-linear>
    <v-card-text class="text--primary d-flex">
      <unidad :index="index"></unidad>
    </v-card-text>
    <v-card-actions>
      <v-btn
        class="ma-2"
        outlined
        color="indigo"
        v-if="data.cursos[index].status"
        @click="goCursos()"
      >Iniciar</v-btn>
      <v-btn class="ma-2" outlined color="indigo" @click="goCursos()" v-else>Continuar</v-btn>
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