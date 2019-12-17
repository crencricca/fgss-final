<template>
  <v-app>
    <v-app-bar app right>
      <div class="d-flex align-right">
        <v-btn href="#intro" target="_blank" text>
          <span class="mr-2">Introduction</span>
        </v-btn>
        <v-btn href="#" target="_blank" text>
          <span class="mr-2">Passages</span>
        </v-btn>
        <v-btn href="#" target="_blank" text>
          <span class="mr-2">Conclusion</span>
        </v-btn>
      </div>
    </v-app-bar>
    <v-content>
      <HelloWorld />
      <Intro id="intro" />
      <Bios />
      <Passages />
    </v-content>
  </v-app>
</template>

<script>
import HelloWorld from "./components/HelloWorld";
import Intro from "./components/Intro";
import Bios from "./components/Bios";
import Passages from "./components/Passages";

export default {
  name: "App",

  components: {
    HelloWorld,
    Intro,
    Bios,
    Passages
  },

  data: () => ({
    //
  })
};
</script>
