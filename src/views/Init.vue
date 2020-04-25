<template>
  <v-container>
    <h2>{{title}}</h2>
    <h6>{{totalTime}}</h6>
    <v-row>
      <v-col cols="12" justify="center">
        <iframe
          class="size"
          :src="src"
          frameborder="0"
          allow="autoplay; encrypted-media"
          allowfullscreen
        ></iframe>
      </v-col>
      <v-btn class="ma-2" outlined color="sucess" @click="finish()">Terminar</v-btn>
    </v-row>
  </v-container>
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
      const array = this.data.cursos[this.indexCurso].unidad[this.indexUnidad]
      if (((this.time >= (this.totalTime * 60) + 60)) && (this.time < (this.totalTime * 60) + 120)) {
        if (unidad) {
          array.porcent = 50;          
        } else {
          array.test[this.indexTest] = 50;          
        }
      } else if ((this.time >= (this.totalTime * 60) + 120)) {
        if (unidad) {
          array.porcent = 50;          
        } else {
          array.test[this.indexTest] = 50;          
        }
      }
      console.log(this.time);
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
      console.log(self.time++);
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