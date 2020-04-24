<template>
  <v-container>
    <v-row>
      <v-col cols="12" justify="center">
        <iframe class="size"
          src="https://www.youtube.com/watch?v=aXuhsX6HQXA"
          frameborder="0"
          allow="autoplay; encrypted-media"
          allowfullscreen
        ></iframe>
      </v-col>
    </v-row>
  </v-container>
</template>


<script>
import data from "../assets/data/data.json";

export default {
    
  name: "Init",
  methods: {    
    getVideo() {
      const c = sessionStorage.getItem("index");
      const u = sessionStorage.getItem("indexUnidad");
      const i = sessionStorage.getItem("indexTest");
   //   return this.data.cursos[c].

    }
  }
};
</script>

<style scoped>
.size{
    width: 70vw;
    height: 70vh;
}
</style>