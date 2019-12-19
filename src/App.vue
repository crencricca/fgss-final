<template>
  <v-app>
    <v-app-bar app right>
      <div class="d-flex align-right">
        <v-btn href="#" v-scroll-to="'#top'" text>
          <span class="mr-1">Top</span>
        </v-btn>
        <v-btn href="#" v-scroll-to="'#intro'" text>
          <span class="mr-1">Introduction</span>
        </v-btn>
        <v-btn href="#" v-scroll-to="'#antigone'" text>
          <span class="mr-1">Antigone</span>
        </v-btn>
        <v-btn href="#" v-scroll-to="'#lys'" text>
          <span class="mr-1">Lysistrata</span>
        </v-btn>
        <v-btn href="#" v-scroll-to="'#ht'" text>
          <span class="mr-1">Handmaid's Tale</span>
        </v-btn>
      </div>
    </v-app-bar>
    <v-content>
      <HelloWorld id="top" />
      <Intro id="intro" />
      <Bios />
      <Antigone id="antigone" />
      <Lysistrata id="lys" />
      <HT id="ht" />
    </v-content>
    <v-card height="50">
      <v-footer dark absolute class="font-weight-medium">
        <v-col class="text-center" cols="12">
          Built by Catie Rencricca using Vuetify for FGSS 2633 (FA19)
        </v-col>
      </v-footer>
    </v-card>
  </v-app>
</template>

<script>
import HelloWorld from "./components/HelloWorld";
import Intro from "./components/Intro";
import Bios from "./components/Bios";
import Antigone from "./components/Antigone";
import Lysistrata from "./components/Lysistrata";
import HT from "./components/HT";

export default {
  name: "App",

  components: {
    HelloWorld,
    Intro,
    Bios,
    Antigone,
    Lysistrata,
    HT
  },

  data: () => ({
    //
  })
};
</script>
