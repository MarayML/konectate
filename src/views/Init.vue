<template>
  <v-app>
    <h2 class="ml-2">{{title}}</h2>
    <div class="d-flex ml-2">
      <v-icon class="teal--text mr-2">fa fa-youtube-play</v-icon>
      <h4 class="ml-2">{{totalTime}} Minutos</h4>
    </div>
    <v-row>
      <v-col cols="12" class="d-flex justify-center">
        <iframe
          class="size"
          :src="src"
          frameborder="0"
          allow="autoplay; encrypted-media"
          allowfullscreen
        ></iframe>
      </v-col>
    </v-row>
    <div cols="12" class="d-flex justify-center">
      <v-btn class="ma-5" outlined color="teal" min-width="200px" @click="finish()">Terminar</v-btn>
    </div>
  </v-app>
</template>


<script>
import data from "../assets/data/data.json";

export default {
  name: "Init",
  data: () => {
    return {
      data,
      src: String,
      counterInterval: "",
      time: 0,
      totalTime: 0,
      title: String,
      unidad: Boolean,
      indexCurso: parseInt(sessionStorage.getItem("index")),
      indexUnidad: parseInt(sessionStorage.getItem("indexUnidad")),
      indexTest: parseInt(sessionStorage.getItem("indexTest"))
    };
  },
  methods: {
    finish() {
      clearInterval(this.counterInterval);
      const array = this.data.cursos[this.indexCurso].unidad[this.indexUnidad];
      if (
        this.time >= this.totalTime * 60 + 60 &&
        this.time < this.totalTime * 60 + 120
      ) {
        if (this.unidad) {
          array.porcent = 50;
        } else {
          array.test[this.indexTest].porcent = 50;
        }
      } else if (this.time >= this.totalTime * 60 + 120) {
        if (this.unidad) {
          array.porcent = 100;
          array.status = false;
        } else {
          array.test[this.indexTest].porcent = 100;
          array.test[this.indexTest].status = false;
        }
      }
      this.$router.push({ name: "Cursos" });
    }
  },
  created: function() {
    const array = this.data.cursos[this.indexCurso].unidad[this.indexUnidad];
    if (this.indexTest === -1) {
      this.unidad = true;
      this.title = array.title;
      this.totalTime = array.time;
      this.src = array.video;
    } else {
      this.unidad = false;
      this.title = array.test[this.indexTest].title;
      this.totalTime = array.test[this.indexTest].time;
      this.src = array.test[this.indexTest].video;
    }
    const self = this;
    this.counterInterval = setInterval(function() {
      self.time++;
    }, 1000);
  },
  destroyed: function() {
    clearInterval(this.counterInterval);
  }
};
</script>

<style scoped>
.size {
  width: 85vw;
  height: 75vh;
}
</style>