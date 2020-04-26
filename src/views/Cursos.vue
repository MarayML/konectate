<template>
  <v-app>
    <navBar />
    <v-content>
      <v-container fluid>
        <div class="title">
          <unidad :index="index"></unidad>
        </div>
        <div v-for="(itemUnidad, indiceUnidad) in data.cursos[index].unidad" :key="indiceUnidad">
          <v-row class="mt-10" dense>
            <v-col cols="12">
            <h4 class="d-flex justify-center mb-5 display-1">Unidad: {{indiceUnidad+1}}</h4> 
              <subCard
                :img="data.cursos[index].img"
                :autor="data.cursos[index].autor"
                :imga="data.cursos[index].imga"
                :porcent="itemUnidad.porcent"
                :title="itemUnidad.title"
                :unidad="true"
                :time="itemUnidad.time"
                :status="itemUnidad.status"
                :indexUnidad="indiceUnidad"
                :indexTest="-1"
              ></subCard>
            </v-col>
          </v-row>
          <div class="d-flex justify-center">
            <div class="border"></div>
          </div>
          <v-row dense class="mt-5">
            <v-col
              v-for="(item, indice) in data.cursos[index].unidad[indiceUnidad].test"
              :key="indice"
              cols="6"
            >
              <subCard
                :img="item.img"
                :autor="data.cursos[index].autor"
                :imga="data.cursos[index].imga"
                :porcent="item.porcent"
                :title="item.title"
                :unidad="false"
                :time="item.time"
                :status="item.status"
                :indexUnidad="indiceUnidad"
                :indexTest="indice"
              ></subCard>
            </v-col>
          </v-row>          
        </div>
        <div class="d-flex justify-center">
          <v-btn class="ma-5" color="teal" min-width="200px" @click="goBack()">Atras</v-btn>
        </div>
      </v-container>
      {{this.data.cursos[1].unidad[0].porcent}}
    </v-content>
  </v-app>
</template>


<script>
import data from "../assets/data/data.json";
import navBar from "../components/navBar";
import subCard from "../components/subCard";
import unidad from "../components/unidad";

export default {
  name: "Cursos",

  components: {
    navBar,
    subCard,
    unidad
  },

  data: () => {
    return {
      data,
      index: parseInt(sessionStorage.getItem("index"))
    };
  },
  methods: {
    getIndex() {
      return parseInt(sessionStorage.getItem("index"));
    },
    goBack() {
      this.$router.push({ name: "Home" });
    }
  }
};
</script>

<style scoped>
.title {
  width: 30%;
}
.border {
  border-bottom: 2px dotted gray;
  width: 80%;
  margin-top: 25px;
  margin-bottom: 30px;
}
</style>