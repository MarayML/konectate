<template>
  <v-container>
    <navBar />
    <v-content>
      <v-container fluid>
        <v-row dense>
          <v-col v-for="(item, index) in data.cursos.length" :key="index" cols="6">
            <card :index="index"></card>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-container>
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
};
</script>
