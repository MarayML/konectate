<template>
  <v-container class="d-flex">
    <h2>{{data.cursos[index].title}}</h2>
    <div>
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
