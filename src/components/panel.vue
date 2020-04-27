<template>
  <v-container>
    <v-card cols="2" color="teal" min-width="400px">
      <v-container>
        <v-row dense>
          <v-col cols="12">
            <v-card color="white">
              <v-card-title class="subtitle-1 font-weight-bold black--text">MI PROGRESO</v-card-title>
              <v-card-subtitle class="mt-2">
                <div class="d-flex mb-3">
                  <h5 class="text-left sizeText">Unidades completadas</h5>
                  <v-progress-linear
                    class="sizeBar"
                    background-color="teal"
                    background-opacity="0.5"
                    color="teal"
                    buffer-value="100"
                    height="20"
                    :value="getUnidadPorcent()"
                    rounded=true
                  >{{getUnidadPorcent()}}%</v-progress-linear>
                </div>
                <div class="d-flex mb-3">
                  <h5 class="text-left sizeText">Test completados</h5>
                  <v-progress-linear
                    class="sizeBar"
                    background-color="teal"
                    background-opacity="0.5"
                    color="teal"
                    buffer-value="100"
                    height="20"
                    :value="getTestPorcent()"
                    rounded=true
                  >{{getTestPorcent()}}%</v-progress-linear>
                </div>
                <div class="d-flex mb-3">
                  <h5 class="text-left sizeText">Llamadas pruebas</h5>
                  <v-progress-linear
                    class="sizeBar"
                    background-color="teal"
                    background-opacity="0.5"
                    color="teal"
                    buffer-value="100"
                    height="20"
                    value="10"
                    rounded=true
                  >1/3</v-progress-linear>
                </div>
              </v-card-subtitle>
            </v-card>
            <v-card color="white mt-5">
              <v-card-title
                class="subtitle-1 font-weight-bold black--text"
              >PROGRAMA TUS LLAMADAS DE PRUEBA</v-card-title>
              <v-card-subtitle>!Elige el horario que desees para practicar llamadas con un coach!</v-card-subtitle>
              <v-card-actions class="d-flex justify-center">
                <v-btn outlined class="mb-1" min-width="150px" color="teal">Programar</v-btn>
              </v-card-actions>
              <v-card-subtitle>
                <h4 class="teal--text font-weight-black mb-2">Proximas pruebas</h4>
                <h4>Viernes 3 de abril a las 15:00 pm</h4>
                <h4>Coach: Jacky Rojas</h4>
              </v-card-subtitle>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
  </v-container>
</template>

<script>
import data from "../assets/data/data.json";

export default {
  name: "panel",
  data: () => {
    return {
      data
    };
  },
  methods: {
    getUnidadPorcent() {
      let total = 0;
      let finish = 0;
      this.data.cursos.forEach(curso => {
        total += curso.unidad.length;
        curso.unidad.forEach(unidad => {
          if (unidad.porcent === 100) finish++;
        });
      });
      return Math.round((finish*100)/total);
    },
    getTestPorcent() {
      let total = 0;
      let finish = 0;
      this.data.cursos.forEach(curso => {
        curso.unidad.forEach(unidad => {
          total+=unidad.test.length;
          unidad.test.forEach(item=>{
          if (item.porcent === 100) finish++;
         })
        });
      });
      return Math.round((finish*100)/total);
    }
  }
};
</script>

<style scoped>
.sizeBar {
  width: 50%;
  margin-left: 10px;
}
.sizeText {
  width: 50%;
  font-size: 14px;
  color: black;
}
</style>