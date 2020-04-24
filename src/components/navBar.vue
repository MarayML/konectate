<template>
  <v-app-bar app color="white" dark>
    <div class="d-flex align-center">
      <v-img
        alt="Vuetify Logo"
        class="shrink mr-2"
        contain
        src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
        transition="scale-transition"
        width="40"
      />

      <h4 class="black--text">Formacion Konecta</h4>
    </div>

    <v-spacer></v-spacer>
    <div>
      <v-tabs
        background-color="white"
        color="grey"
        slider-color="cyan"
        active-class="black--text"
        dark
      >
        <v-tab class="grey--text">Inicio</v-tab>
        <v-tab class="grey--text">Cursos</v-tab>
        <v-tab class="grey--text">Foro</v-tab>
      </v-tabs>
    </div>

    <div class="d-flex align-center">
      <h4 class="black--text">Mari Cuevas</h4>
      <v-img
        alt="perfil"
        class="shrink mr-2"
        contain
        src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
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