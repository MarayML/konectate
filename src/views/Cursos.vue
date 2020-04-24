<template>
  <v-container>
    <navBar />
    <v-content>
      <v-container fluid>
        <unidad :index="index"></unidad>
        <div v-for="(itemUnidad, indiceUnidad) in data.cursos[index].unidad" :key="indiceUnidad">
          <v-row dense>
            <v-col cols="12">
              <subCard
                :img="data.cursos[index].img"
                :autor="data.cursos[index].autor"
                :imga="data.cursos[index].imga"
                :porcent="itemUnidad.porcent"
                :title="itemUnidad.title"
                :unidad="true"
                :time="itemUnidad.time"
                :indexUnidad="indiceUnidad"
              ></subCard>
            </v-col>
          </v-row>
          <v-row dense>
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
                :indexUnidad="indiceUnidad"
                :indexTest="indice"
              ></subCard>
            </v-col>
          </v-row>
        </div>
      </v-container>
    </v-content>
  </v-container>
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
  }
};
</script>

