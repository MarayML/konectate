<template>
  <v-card class="mx-auto" max-width="400">
    <v-img class="white--text align-end" height="200px" :src="require(`@/assets/img/${img}`)">
      <v-card-title class="black--text">
          <div class="d-flex justify-center align-end white--text">
          <v-img class="round" :src="require(`@/assets/img/${imga}`)"></v-img>
          <h5 class="align-center ml-3 black--text">{{autor}}</h5>
        </div>
        </v-card-title>
    </v-img>
    <v-progress-linear
      background-color="white"
      color="teal"
      buffer-value="100"
      height="25"
      :value="porcent"
      striped
    >Progress {{porcent}}%</v-progress-linear>
    <v-card-subtitle class="pb-0 title black--text">{{title}}</v-card-subtitle>
    <v-card-subtitle class="pb-0">
      <div v-if="unidad">
        <v-icon class="teal--text mr-2">fa fa-youtube-play</v-icon>
        <b>{{time}} Minutos</b>
       </div>
      <div v-else>
        <v-icon class="teal--text mr-2">fa fa-pencil</v-icon>
        <b class="subtitle-1">{{time}} Minutos</b>
      </div>
      </div>
    </v-card-subtitle>
   <v-card-actions class="d-flex justify-center">
      <v-btn :disabled = !status class="ma-1" outlined color="teal" min-width="150px" @click="goVideo()">Iniciar</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>

export default {
  name: "subCard",
 
  props: {
    img: String,
    autor: String,
    imga: String,
    porcent: Number,
    title: String,
    unidad: Boolean,
    time: Number,
    status:Boolean,
    indexUnidad: Number,
    indexTest: Number
  },
  methods: {    
    goVideo() {
      sessionStorage.setItem("indexUnidad", this.indexUnidad);
      sessionStorage.setItem("indexTest", this.indexTest);
      this.$router.push({ name: "Init" });
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