<template>
  <v-card class="mx-auto" max-width="400">
    <v-img class="white--text align-end" height="200px" :src="require(`@/assets/img/${img}`)">
      <v-card-title class="black--text">{{autor}}</v-card-title>
    </v-img>
    <v-progress-linear color="amber" height="25" reactive>{{}}%</v-progress-linear>
    <v-card-subtitle class="pb-0">{{title}}</v-card-subtitle>
    <v-card-subtitle class="pb-0">
      <div v-if="unidad">
        <v-icon>fa fa-youtube"</v-icon>
        {{time}} Minutos
       </div>
      <div v-else>
        <v-icon>fa fa-pencil-alt</v-icon>
        {{time}} Test
      </div>
      </div>
    </v-card-subtitle>
   <v-card-actions>
      <v-btn class="ma-2" outlined color="indigo"  @click="goVideo()">Continuar</v-btn>
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
    porcent: String,
    title: String,
    unidad: Boolean,
    time: Number,
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