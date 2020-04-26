<template>
 <v-app-bar app color="white">
    <div class="d-flex flex-row">
      <v-img
        alt="Vuetify Logo"
        contain
        src="../assets/img/logo.png"
        transition="scale-transition"
        width="40"
      />
     <h4 class="black--text headline font-weight-medium mt-2 ml-2">Formacion Konecta</h4>
    </div>
    <v-spacer></v-spacer>
    <div>
      <v-tabs
        background-color="white"
        slider-color="cyan"
        active-class="black--text"
      >
        <v-tab class="grey--text" >Inicio</v-tab>
        <v-tab class="grey--text" >Cursos</v-tab>
        <v-tab class="grey--text">Foro</v-tab>
      </v-tabs>
    </div>

    <div class="d-flex align-center">
      <h4 class="cyan--text font-weight-medium">Mari Cuevas</h4>
      <v-img
        alt="perfil"
        class="shrink mr-2"
        contain
        src="../assets/img/perfil3.jpg"
        transition="scale-transition"
        width="40"
      />
    </div>
  </v-app-bar>
</template>

<script>
export default {
  name: "navBar",

  data: () => ({})
};
</script>

<style scoped>
</style>