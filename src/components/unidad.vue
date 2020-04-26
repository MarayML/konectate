<template>
  <v-container class="subtitle-1">
    <h2 class="black--text">{{data.cursos[index].title}}</h2>
    <div class="d-flex mt-3 justify-space-between size">
      <div>
        <v-icon class="teal--text">fa fa-graduation-cap</v-icon>
        <b class="ml-1">{{data.cursos[index].unidad.length}} Unidad</b>
      </div>
      <div class="ml-2">
        <v-icon class="teal--text">fa fa-pencil</v-icon>
        <b class="ml-1">{{getTest()}} Test</b>
      </div>
      <div class="ml-2">
        <v-icon class="teal--text">fa fa-youtube-play</v-icon>
        <b class="ml-1">{{getTime()}} Minutos</b>
      </div>
    </div>
  </v-container>
</template>


<script>
import data from "../assets/data/data.json";

export default {
  name: "unidad",
  data: () => {
    return {
      data
    };
  },
  props: {
    index: Number
  },
  methods: {
    getTime() {
      let time = 0;
      this.data.cursos[this.index].unidad.forEach(item => {
        time += item.time;
      });
      return time;
    },
    getTest() {
      let indice = 0;
      this.data.cursos[this.index].unidad.forEach(item => {
        indice += item.test.length;
      });
      return indice;
    }
  }
};
</script>

