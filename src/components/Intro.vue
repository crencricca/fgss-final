<template>
  <v-container
    fluid
    pa-12
    blue-grey
    justify-md-center
    justify-self
    lighten-5
    cover
  >
    <v-row text-center align-center wrap>
      <v-row text-center align-center justify="center">
        <v-col cols="2">
          <h1 class="display-1">Hypothesis:</h1>
        </v-col>
        <v-col cols="4">
          <p class="headline">
            Readers relate more easily to modern characters than they do to
            ancient characters.
          </p>
        </v-col>
        <!-- <v-row pa-5 text-center align-center dense no-gutters justify="center">
          <v-col cols="1">
            <p class="subtitle">Definition:</p>
          </v-col>
          <v-col cols="4">
            <p class="subtitle">
              <i>Relate</i> in this context signifies that a person is able to
              form some sort of meaningful emotional connection with a
              character.
            </p>
          </v-col>
        </v-row>
        <v-row pa-5 text-center align-center dense no-gutters justify="center">
          <v-col cols="1">
            <p class="subtitle">Definition:</p>
          </v-col>
          <v-col cols="4">
            <p class="subtitle">
              <i>Distance</i> signifies that a character has been portrayed in a
              way that prohibits the reader's ability to connect with that
              character.
            </p>
          </v-col>
        </v-row>-->
      </v-row>
      <v-row text-center align-center justify="center">
        <v-col cols="8">
          <v-card raised>
            <v-card-title>Introduction</v-card-title>
            <v-card-text
              >Throughout the course of this class, I often found myself
              wondering about how ancient Greek women would have responded to
              the portrayal of female characters in the fictional narratives
              that we studied. Because I unfortunately cannot go back in time
              and interview these ancient women about the way that they related
              to fictional characters, I decided to interview my peers instead
              and see how they responded to ancient Greek fictional women. While
              I was developing my project, I became interested specifically in
              whether I could find any trends in the way that my peers responded
              to ancient female characters versus more modern characters. In an
              attempt to unite three of my areas of study -- gender studies,
              computer science, and sociology -- I wanted to challenge myself to
              perform a preliminary sociological study and build a website to
              present the data that I gathered. My research was based around the
              question of whether there are trends in the responses that might
              provide an interesting foundation for further study.</v-card-text
            >
            <v-card-actions>
              <v-btn
                text
                link
                href="https://docs.google.com/document/d/1NjaBg1zuRBC797P-e6SZh6WZaf-EPrFJeGNX3aIS_u8/edit?usp=sharing"
                color="indigo"
                target="_blank"
                >Full Introduction</v-btn
              >
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-row>
  </v-container>
</template>
<script>
export default {
  name: "Intro"
};
</script>
