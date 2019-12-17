<template>
  <v-parallax src="../../public/greek.jpg">
    <v-container fluid fill-height white--text cover align-center align="center">
      <v-col cols="12">
        <v-row text-center wrap justify="center">
          <v-col cols="2">
            <h1 class="display-1">Research Question:</h1>
          </v-col>
          <v-col cols="5">
            <p class="headline font-weight-light">
              How do modern readers respond to ancient Greek fictional characters
              vs. contemporary characters?
            </p>
          </v-col>
        </v-row>
      </v-col>
    </v-container>
  </v-parallax>
</template>

<style scoped>
.cover {
  background-size: cover;
  background-position: top;
  width: 100%;
  height: 80%;
}
</style>


<script>
export default {
  name: "HelloWorld",

  data: () => ({
    ecosystem: [
      {
        text: "vuetify-loader",
        href: "https://github.com/vuetifyjs/vuetify-loader"
      },
      {
        text: "github",
        href: "https://github.com/vuetifyjs/vuetify"
      },
      {
        text: "awesome-vuetify",
        href: "https://github.com/vuetifyjs/awesome-vuetify"
      }
    ],
    importantLinks: [
      {
        text: "Documentation",
        href: "https://vuetifyjs.com"
      },
      {
        text: "Chat",
        href: "https://community.vuetifyjs.com"
      },
      {
        text: "Made with Vuetify",
        href: "https://madewithvuejs.com/vuetify"
      },
      {
        text: "Twitter",
        href: "https://twitter.com/vuetifyjs"
      },
      {
        text: "Articles",
        href: "https://medium.com/vuetify"
      }
    ],
    whatsNext: [
      {
        text: "Explore components",
        href: "https://vuetifyjs.com/components/api-explorer"
      },
      {
        text: "Select a layout",
        href: "https://vuetifyjs.com/layout/pre-defined"
      },
      {
        text: "Frequently Asked Questions",
        href: "https://vuetifyjs.com/getting-started/frequently-asked-questions"
      }
    ]
  })
};
</script>
