<template>
  <v-card class="mx-auto" max-width="400">
    <v-img
      class="white--text align-end"
      height="200px"
      :src="require(`@/assets/img/${data.cursos[index].img}`)"
    >
      <v-card-title class="black--text"></v-card-title>
    </v-img>

    <v-progress-linear color="amber" height="25" reactive>{{data.cursos[index].porcent}}%</v-progress-linear>

    <v-card-subtitle class="pb-0">
      <h2>{{data.cursos[index].title}}</h2>
    </v-card-subtitle>

    <v-card-text class="text--primary d-flex">
      <div class="black--text">
        <v-icon>fa fa-graduation-cap</v-icon>
        {{data.cursos[index].unidad.length}} Unidad
      </div>
      <div>
        <v-icon>fa fa-pencil-alt</v-icon>
        {{getTest()}} Test
      </div>
      <div>
        <v-icon>fa fa-youtube"</v-icon>
        {{getTime()}} Minutos
      </div>
    </v-card-text>
    <v-card-actions>
      <v-btn class="ma-2" outlined color="indigo" v-if="data.cursos[index].status" @click="$router.push('cursos')">Iniciar</v-btn>
      <v-btn class="ma-2" outlined color="indigo" @click="$router.push('cursos')" v-else>Continuar</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import data from "../assets/data/data.json";

export default {
  name: "card",
  data: () => {
    return {
      data,
      time: 0,
      test: 0
    };
  },
  props: {
    index: Number
  },
  methods: {
    getTime() {
      this.data.cursos[this.index].unidad.forEach(item => {
        this.time += item.time;
      });
      return this.time;
    },
    getTest() {
      this.data.cursos[this.index].unidad.forEach(item => {
        this.test += item.test.length;
      });
      return this.test;
    }
  }
};
</script>