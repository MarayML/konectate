<template>
  <v-app>
    <navBar />
    <v-content>
      <v-container fluid>
        <div class="mt-8 ml-3">
        <h2>Hola Mari!</h2>
        <p>En tu cuenta podras encontrar cursos y test que te ayudaran a potenciar tus habilidades</p>
        </div>
        <v-row class="mt-8" dense>
          <v-col v-for="(item, index) in data.cursos.length" :key="index" cols="6">
            <card :index="index"></card>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import navBar from "../components/navBar";
import card from "../components/card";
import data from "../assets/data/data.json";

export default {
  name: "Konecta",
  components: {
    card,
    navBar
  },
  data: () => {
    return {
      data
    };
  },
  created: function() {
    console.log(this.data.cursos[0].unidad[0].porcent);            
    sessionStorage.setItem('data',JSON.stringify(this.data));
    let totalItems = 0;
    let totalPorcent = 0;
    this.data.cursos.forEach(curso => {
      totalItems += curso.unidad.length;
      curso.unidad.forEach(unit => {
        totalItems += unit.test.length;
        totalPorcent += unit.porcent;
        unit.test.forEach(element => {
          totalPorcent += element.porcent;
        });
      });
      console.log(totalPorcent,totalItems);  
      curso.porcent = Math.round(totalPorcent/totalItems);
      totalItems =0;
      totalPorcent=0;
    })
  }
};
</script>
