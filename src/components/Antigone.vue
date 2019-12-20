<template>
  <v-container fluid blue-grey lighten-5 justify="center">
    <v-row text-center wrap align="center" justify="center">
      <v-col cols="5">
        <h1 class="display-1">
          Passage 1:
          <i>Antigone</i> by Sophocles
        </h1>
      </v-col>
    </v-row>

    <v-row text-center wrap align="center" justify="center">
      <v-col cols="8">
        <h1
          class="body-2"
        >You might be familiar with the story of Oedipus, king of Thebes, who tragically fulfilled his fate by killing his father and marrying his mother. He has had four children with his wife/mother Jocasta: two sons named Polyneices and Eteocles, and two daughters named Ismene and Antigone. After he leaves Thebes in disgrace, the truth of his life having been made clear, his sons fall into rivalry over the throne. After agreeing to switch off the kingship year by year, Polyneices eventually decides that he has had enough, and brings an army against his brother Eteocles. They kill each other simultaneously in combat; this play, the Antigone, opens in Thebes the morning after that battle.</h1>
      </v-col>
    </v-row>

    <v-row text-center wrap align="center" justify="center">
      <v-col cols="8">
        <v-card>
          <v-card-title>
            <h1 class="headline">
              Selection from
              <i>Antigone</i> by Sophocles (lines 23-83)
            </h1>
          </v-card-title>
          <v-card-text>
            <p>
              <b>ANTIGONE:</b> Don’t you know that Creon has decided to honor one of our brothers with burial but not the other? They say that he has hidden Eteocles beneath the earth, to have his share of honor with the dead below; but Polynices’ corpse, fallen in disgrace—they say Creon’s proclaimed to all that none may hide him in the earth or mourn for him, but he must lie unwept, untombed, a heap of treasure to entice the hungry birds. Such orders they say our noble Creon lays on you and me—yes, he means me, too!—and that he’s on his way to make it clear to those who haven’t heard. Nor does he take the matter lightly; he who disobeys will die, stoned by the people—so it’s fixed. You have it now, the way things are, and soon we’ll see if you’re as noble as your birth, or not.
            </p>
            <p>
              <b>ISMENE:</b> But if things are as you say they are, poor sister, will it make any difference, what I do?
            </p>
            <p>
              <b>ANTIGONE:</b> The question is, will you work and act with me?
            </p>
            <p>
              <b>ISMENE:</b> Do something dangerous? What can you be thinking?
            </p>
            <p>
              <b>ANTIGONE:</b> Will you lend me a hand, and lift the corpse?
            </p>
            <p>
              <b>ISMENE:</b> In spite of the ban on the whole city?
            </p>
            <p>
              <b>ANTIGONE:</b> Yes, for he’s my brother—and yours, too, even if you wish he weren’t. *6 I’ll not betray him.
            </p>
            <p>
              <b>ISMENE:</b> So stubborn, though Creon has forbidden it?
            </p>
            <p>
              <b>ANTIGONE:</b> He has no right to keep me from my own.
            </p>
            <p>
              <b>ISMENE:</b>
              <i>( dismayed )</i> oimoi! Think, Sister, how our father came to ruin and died, hated and disgraced for crimes he himself detected, and then battered his own two eyes with self-assailing hands; and how his mother and wife—she was both to him— destroyed her life in the twisted noose; and how our two brothers, in a single day, shed each other’s blood, and wrought in misery the doom they shared, hands raised against each other. Now think: we two are left alone; we’ll die so cruelly, if we dare to break the law 60 or scant the tyrant’s vote and spurn his power. We must also bear in mind that we are women, not meant to wage war with men; and then, that we’re compelled by those stronger than we are to acquiesce in this, and things more painful still. I’ll ask those beneath the earth to understand that I am acting, as I am, under compulsion. And I’ll obey the authorities. Trying to do more than we can makes no sense at all.
            </p>
            <p>
              <b>ANTIGONE:</b> will not plead with you and, if you change your mind, I won’t welcome your assistance later. No—be what seems best to you, and I will bury him myself, and so die nobly. I’ll lie beside him in love, guilty of devotion! For I must please the dead a longer time than I must please the living. With them I’ll lie forever. But you go on, dishonor what’s honored by the gods.
            </p>
            <p>
              <b>ISMENE:</b> I’m not dishonoring them! I simply can’t act against the wishes of the citizens.
            </p>
            <p>
              <b>ANTIGONE:</b> You can make these excuses. I will go heap up a tomb for my beloved brother.
            </p>
          </v-card-text>
          <v-card-actions>
            <v-btn href="http://www.napavalley.edu/people/LYanover/Documents/English%20121/English%20121%20Sophocles%20Antigone%20translated%20by%20Paul%20Roche.pdf" text color="indigo" target="_blank">
            Full Text
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>

    <v-row text-center align="center" justify="center">
      <v-col cols="8">
        <v-alert
          border="left"
          color="indigo"
          dark
        >Click the respondent's photo to view their annotations of the passage.</v-alert>
        <v-expansion-panels>
          <v-expansion-panel>
            <v-expansion-panel-header>
              <v-row>
                <v-col cols="1"></v-col>
                <v-col cols="8">
                  <p class="display-1">Olivia</p>
                </v-col>
              </v-row>
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              <v-row text-center wrap align="center" justify="center">
                <v-col cols="12">
                  <v-row text-center wrap align="center" justify="center">
                    <v-col cols="3">
                      <v-avatar size="150">
                        <v-hover v-slot:default="{ hover }">
                          <v-img src="../../public/olivia.jpg">
                            <v-expand-transition>
                              <div
                                v-if="hover"
                                class="d-flex transition-fast-in-fast-out black darken-2 v-card--reveal white--text"
                                style="height: 100%; width:100%; position:fluid;"
                              >
                                <a
                                  href="https://drive.google.com/file/d/1WCpBLk3L9sRpBo_BgQbLZA_rGBe0coEf/view?usp=sharing"
                                  target="_blank"
                                  style="color:white; text-decoration:none"
                                >
                                  <p
                                    class="subtitle-2"
                                    style="padding-top:60px; padding-left:37px; color:white"
                                  >
                                    <b>Annotations</b>
                                  </p>
                                </a>
                              </div>
                            </v-expand-transition>
                          </v-img>
                        </v-hover>
                      </v-avatar>
                    </v-col>
                    <v-col cols="8">
                      <p
                        class="body-2"
                      >I enjoyed reading Antigone in high school and this passage is a very apt representation of the story as a whole. I feel connected to Antigone whose moral beliefs get her into trouble, but she follows them anyway because she knows that it is the right thing to do. On the contrary, I feel anger towards Ismene who is to cowardly to do anything except for what she has always been taught.</p>
                      <v-divider />
                      <p></p>
                      <p class="subtitle-2">What kind of woman is Antigone?</p>
                      <p
                        class="body-2"
                      >I think that Antigone is a badass bitch who I would want to be friends with. She is headstrong in her beliefs and so loyal to her brother that she would be willing to die for him. I appreciate her breaking the stereotypes by disobeying Creon and following what she knows is right. She “will not betray [her brother]” and, even though Creon has forbidden it, she believes that he truly “has no right to keep [her] from [her] own.”</p>
                      <v-divider />
                      <p></p>
                      <p class="subtitle-2">What kind of woman is Ismene?</p>
                      <p
                        class="body-2"
                      >Ismene has had the stereotypical role of a woman engrained in her so deeply that she refuses to do anything that has been forbidden, regardless of whether it is morally right or wrong. She believes that they “are women, not meant to wage war with men,” feeling the need to follow every law no matter her own beliefs on the situation.</p>
                      <v-divider />
                      <p></p>
                      <p
                        class="subtitle-2"
                      >Does it affect your reading to know that all characters would have been played by men?</p>
                      <p
                        class="body-2"
                      >Yes, absolutely! I think that the story would lose some of its meaning if it were to be played by all men. There is a clear power dynamic in Antigone between the women and the men of the story, and if it the play were to be all men, the power dynamic would seem to be equal.</p>
                    </v-col>
                  </v-row>
                </v-col>
              </v-row>
            </v-expansion-panel-content>
          </v-expansion-panel>
          <v-expansion-panel>
            <v-expansion-panel-header>
              <v-row>
                <v-col cols="1"></v-col>
                <v-col cols="8">
                  <p class="display-1">Lilly</p>
                </v-col>
              </v-row>
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              <v-row text-center wrap align="center" justify="center">
                <v-col cols="12">
                  <v-row text-center wrap align="center" justify="center">
                    <v-col cols="3">
                      <v-avatar size="150">
                        <v-hover v-slot:default="{ hover }">
                          <v-img src="../../public/lilly.jpg">
                            <v-expand-transition>
                              <div
                                v-if="hover"
                                class="d-flex transition-fast-in-fast-out black darken-2 v-card--reveal white--text"
                                style="height: 100%; width:100%; position:fluid;"
                              >
                                <a
                                  href="https://drive.google.com/file/d/1cKqgyLMVs9UkcukZ6c5_R7ORHNGQq9uB/view?usp=sharing"
                                  target="_blank"
                                  style="color:white; text-decoration:none"
                                >
                                  <p
                                    class="subtitle-2"
                                    style="padding-top:60px; padding-left:37px; color:white"
                                  >
                                    <b>Annotations</b>
                                  </p>
                                </a>
                              </div>
                            </v-expand-transition>
                          </v-img>
                        </v-hover>
                      </v-avatar>
                    </v-col>
                    <v-col cols="8">
                      <p></p>
                      <p class="subtitle-2">What kind of woman is Antigone?</p>
                      <p
                        class="body-2"
                      >Antigone is a very rebellious, family oriented young woman. Whereas her regard for the law or her uncle doesn’t extend very far, she believes strongly in her duty towards the gods and her brother. Brave, she refuses to submit to the powerful men trying to control her, but her brashness also causes her to cut off her sister and proceed without caution.</p>
                      <v-divider />
                      <p></p>
                      <p class="subtitle-2">What kind of woman is Ismene?</p>
                      <p
                        class="body-2"
                      >In this passage, Ismene serves as a foil to Antigone. She, too, feels the pressure put on her by all the men in her life. However, her focus lies on duty towards the law and citizens. While Antigone is brave, Ismene finds excuses to stay safe. The line “I am acting … under compulsion” illustrates how constrained she feels in opposition to Antigone who has no problem disobeying rules to follow her own moral code.</p>
                      <v-divider />
                      <p></p>
                      <p
                        class="subtitle-2"
                      >Does it affect your reading to know that all characters would have been played by men?</p>
                      <p
                        class="body-2"
                      >I actually already knew that from The Magic Tree House -Hour of the Olympus, a literary classic, but had forgotten it until I read the question. Initially, didn’t think it would affect my reading just because any actor is playing a role, regardless of gender. However, considering the women’s situation in this excerpt, I find it ironic that they would have been played by men. It emphasises the powerlessness of women in the play and in that era. They can’t rule kingdoms, honor their family or even represent their own narratives.</p>
                    </v-col>
                  </v-row>
                </v-col>
              </v-row>
            </v-expansion-panel-content>
          </v-expansion-panel>
          <v-expansion-panel>
            <v-expansion-panel-header>
              <v-row>
                <v-col cols="1"></v-col>
                <v-col cols="8">
                  <p class="display-1">Bliss</p>
                </v-col>
              </v-row>
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              <v-row text-center wrap align="center" justify="center">
                <v-col cols="12">
                  <v-row text-center wrap align="center" justify="center">
                    <v-col cols="3">
                      <v-avatar size="150">
                        <v-hover v-slot:default="{ hover }">
                          <v-img src="../../public/bliss.jpg">
                            <v-expand-transition>
                              <div
                                v-if="hover"
                                class="d-flex transition-fast-in-fast-out black darken-2 v-card--reveal white--text"
                                style="height: 100%; width:100%; position:fluid;"
                              >
                                <a
                                  href="https://drive.google.com/file/d/1Bg5EmVGjDUnumqt6jCye8RBz-Q3fCOSv/view?usp=sharing"
                                  target="_blank"
                                  style="color:white; text-decoration:none"
                                >
                                  <p
                                    class="subtitle-2"
                                    style="padding-top:60px; padding-left:37px; color:white"
                                  >
                                    <b>Annotations</b>
                                  </p>
                                </a>
                              </div>
                            </v-expand-transition>
                          </v-img>
                        </v-hover>
                      </v-avatar>
                    </v-col>
                    <v-col cols="8">
                      <p
                        class="body-2"
                      >This is one of the passages that I most enjoyed reading during this class. It was refreshing to see a female character that defied gender stereotypes and stood up for what she believed in. I empathize with Antigone because I relate to her experience combatting stereotypes. However, I do find it somewhat difficult to relate with Antigone because of the extreme circumstances of the passage. Her situation is not necessarily directly relatable to me, but her experience is.</p>
                      <v-divider />
                      <p></p>
                      <p class="subtitle-2">What kind of woman is Antigone?</p>
                      <p
                        class="body-2"
                      >I think that Antigone is a one of the bravest women that we studied. I also find it interesting that she embodies characteristics that were typically attributed to men, such as courage and loyalty. I really respect that she stands up for her beliefs and acts in a way that she believes to be morally right.</p>
                      <v-divider />
                      <p></p>
                      <p class="subtitle-2">What kind of woman is Ismene?</p>
                      <p
                        class="body-2"
                      >I do not think that Ismene is a bad person, but I do think that she has a weaker sense of morals than Antigone. However, knowing how restrictive and sexist ancient Greek society was, I do not think Ismene can be blamed for choosing not to help Antigone. I do not think she is even necessarily a weak person. She does embody the stereotypes of weakness and helplessness associated with women at the time, which serves as a strong foil for Antigone’s character.</p>
                      <v-divider />
                      <p></p>
                      <p
                        class="subtitle-2"
                      >Does it affect your reading to know that all characters would have been played by men?</p>
                      <p
                        class="body-2"
                      >I do think that it affects my reading of the play. I think that it is significant that a strong female character was still played by a man. I also think it reinforces the sexism in Greek society because it is a reminder that women were not invited to participate in the theatre.</p>
                    </v-col>
                  </v-row>
                </v-col>
              </v-row>
            </v-expansion-panel-content>
          </v-expansion-panel>
          <v-expansion-panel>
            <v-expansion-panel-header>
              <v-row>
                <v-col cols="1"></v-col>
                <v-col cols="8">
                  <p class="display-1 indigo--text"><i>Antigone</i> Analysis</p>
                </v-col>
              </v-row>
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              <v-row>
                <v-col cols="1"></v-col>
                <v-col cols="10">
                  <p class="body-2">
                    In order to analyze this data, I focused on the responses to the 
                    questions that directly asked about Antigone's and Ismene's character. I took each of the responses
                    and removed the "filler" words that did not carry
                    significant meaning. I gathered a list of words that the
                    respondents used in association with or to directly describe
                    each character and put the lists into a word cloud generator
                    for each character.
                  </p>
                  <p class="body-2">
                    I then separated the words by sentiment and with the help of
                    a sentiment analysis program, labeled them as either positive,
                    negative, or neutral. I then made a simple pie chart displaying
                    the relative percentages of each.
                  </p>
                </v-col>
              </v-row>
              <v-row text-center align="center" justify="center">
                <p class="display-1">
                  <b>Antigone</b>
                </p>
              </v-row>
              <v-row text-center align="center" justify="center">
                <v-row text-center align="center" justify="center">
                  <v-col cols="5">
                    <v-img src="../../public/Antigone-WC.png" />
                  </v-col>
                  <v-col cols="4">
                    <v-simple-table dense>
                      <thead>
                        <tr>
                          <th class="text-left">Word</th>
                          <th class="text-left">Frequency</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr v-for="item in AntigoneDesc" :key="item.word">
                          <td>{{ item.word }}</td>
                          <td>{{ item.freq }}</td>
                        </tr>
                      </tbody>
                    </v-simple-table>
                  </v-col>
                </v-row>
                <v-row text-center align="center" justify="center">
                  <v-col cols="5">
                    <v-img src="../../public/Antigone-chart.png" />
                  </v-col>
                  <v-col cols="4">
                    <p class="body-2">
                      Based on my sentiment analysis, the words used in context to describe Antigone are
                      <b>76%</b> positive and
                      <b>24%</b> negative
                    </p>
                  </v-col>
                </v-row>
                <p></p>
              </v-row>
              <v-row text-center align="center" justify="center">
                <p class="display-1">
                  <b>Ismene</b>
                </p>
              </v-row>
              <v-row text-center align="center" justify="center">
                <v-row text-center align="center" justify="center">
                  <v-col cols="5">
                    <v-img src="../../public/Ismene-WC.png" />
                  </v-col>
                  <v-col cols="4">
                    <v-simple-table dense>
                      <thead>
                        <tr>
                          <th class="text-left">Word</th>
                          <th class="text-left">Frequency</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr v-for="item in IsmeneDesc" :key="item.word">
                          <td>{{ item.word }}</td>
                          <td>{{ item.freq }}</td>
                        </tr>
                      </tbody>
                    </v-simple-table>
                  </v-col>
                </v-row>
              </v-row>
              <v-row text-center align="center" justify="center">
                <v-col cols="5">
                  <v-img src="../../public/Ismene-chart.png" />
                </v-col>
                <v-col cols="4">
                  <p class="body-2">
                    Based on my sentiment analysis, the words used in context to describe Ismene are
                    <b>29%</b> neutral and
                    <b>71%</b> negative.
                  </p>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="1"></v-col>
                <v-col cols="10">
                  <p
                    class="body-2"
                  >Based on the responses, I can conclude that the antiquity of the text does not inherently prohibit even inexperienced readers from connecting with the characters in the passage.</p>
                  <p
                    class="body-2"
                  >It seems that the readers struggled to connect with Ismene. I would hypothesize that this is because she really serves as a foil to Antigone and does not show much personality in this selection, so it makes sense that readers would feel neutral or negatively towards her.</p>
                  <p
                    class="body-2"
                  >I find it interesting that Antigone seems to be somewhat of a polarizing character. I would hypothesize that this is because the situation is so extreme that it might be difficult for a reader to relate to Antigone's actions here.</p>
                </v-col>
              </v-row>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Antigone",
  data() {
    return {
      AntigoneDesc: [
        {
          word: "beliefs",
          freq: 5
        },
        {
          word: "moral",
          freq: 3
        },
        {
          word: "right",
          freq: 3
        },
        {
          word: "brave",
          freq: 2
        },
        {
          word: "loyalty",
          freq: 2
        },
        {
          word: "family",
          freq: 2
        },
        {
          word: "badass",
          freq: 1
        },
        {
          word: "duty",
          freq: 1
        },
        {
          word: "rebellious",
          freq: 1
        },
        {
          word: "strong",
          freq: 1
        },
        {
          word: "friend",
          freq: 1
        },
        {
          word: "courage",
          freq: 1
        }
      ],
      IsmeneDesc: [
        {
          word: "constrained",
          freq: 2
        },
        {
          word: "law",
          freq: 2
        },
        {
          word: "submit",
          freq: 2
        },
        {
          word: "cowardly",
          freq: 1
        },
        {
          word: "stereotype",
          freq: 1
        },
        {
          word: "follow",
          freq: 1
        },
        {
          word: "forbidden",
          freq: 1
        },
        {
          word: "sexist",
          freq: 1
        },
        {
          word: "submit",
          freq: 1
        },
        {
          word: "powerless",
          freq: 1
        },
        {
          word: "weak",
          freq: 1
        },
        {
          word: "duty",
          freq: 1
        },
        {
          word: "citizens",
          freq: 1
        },
        {
          word: "safe",
          freq: 1
        }
      ]
    };
  }
};
</script>
