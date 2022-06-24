<template>
<div class="home">
  <v-parallax src="/imgs/img-1.jpg" height="380">
    <v-layout column align-center justify-center>
      <div class="headline white--text mb-3 text-xs-center">iTeachWeb, grow at your own pace.</div>
      <em>We'll help you reach your goal of becoming a programmer when and how you prefer</em>
      <v-btn class="grey lighten-0 mt-5" dark large href="/pre-made-themes">
        Learn With Us
      </v-btn>
    </v-layout>
  </v-parallax>
<v-spacer></v-spacer>
  <v-container>
      <v-layout column  wrap class="my-5" align-center>
        <v-spacer></v-spacer>
        <v-flex xs12 sm4 class="my-3">
          <div class="text-xs-center">
            <h1>Choose How You Study</h1>
          </div>
          <v-spacer></v-spacer>
        </v-flex>
        <v-flex xs12>
          <v-container grid-list-xl>
            <v-layout row wrap align-center>
              <v-flex xs12 md4>
                <v-card class="elevation-4 transparent">
                  <v-card-title primary-title class="layout justify-center">
                    <div class="headline text-xs-center">The Basics</div>
                  </v-card-title >
                  <v-card-text class="text-center">
                    When you start your career, you need to learn the foundation of web and app development. You'll start out with a few modules that will get you started on your path to learning everything that is developing!
                  </v-card-text>
                </v-card>
              </v-flex>
              <v-flex xs12 md4>
                <v-card class="elevation-4 transparent">
                  <v-card-title primary-title class="layout justify-center">
                    <div class="headline">Get Started</div>
                  </v-card-title>
                   <v-card-text class="text-center">
                    You can choose between specializing in web development or multiplatform development with our easy to follow classes, but you can always do both! Try our dual-program.
                  </v-card-text>
                </v-card>
              </v-flex>
              <v-flex xs12 md4>
                <v-card class="elevation-4 transparent">
                  <v-card-title primary-title class="layout justify-center">
                    <div class="headline text-xs-center">You Choose</div>
                  </v-card-title>
                  <v-card-text class="text-center">
                    At iTeachWeb, we want to see our students strive. That's why our students can plan how, where and when to study the necessary modules to expand their already growing skills.
                  </v-card-text>
                </v-card>
              </v-flex>
            </v-layout>
          </v-container>
        </v-flex>
      </v-layout>
  </v-container>
  <v-spacer></v-spacer>
  <v-container>
     <v-row align="center" justify="center">
        <v-col class="text-center" cols="6">
          <v-img src="/imgs/img-home-1.jpg" max-height="400"></v-img>
        </v-col>
        <v-col class="text-center" cols="6">
          <h1 class="text-h4 font-weight-thin mb-4">Multiplatform Development</h1>
          <v-card max-width="600" class="mx-auto">
            <v-card color="#385F73" dark>
              <v-card-subtitle>Start your journey in a booming sector! In this cours you will learn to program and develop for different platforms, to create applications for games and mobile phones, as well as to design interfaces. This complete and practical training will provide you with all the knowledge and skills necessary to work in a sector that is constantly evolving and developing.</v-card-subtitle>
            </v-card>
          </v-card>
          <v-spacer></v-spacer>
          <v-btn text>Learn More</v-btn>
        </v-col>
      </v-row>
  </v-container>
<v-spacer></v-spacer>
  <v-container>
     <v-row align="center" justify="center">
        <v-col class="text-center" cols="6">
           <h1 class="text-h4 font-weight-thin mb-4">Web Development</h1>
            <v-card max-width="600" class="mx-auto">
              <v-card color="#385F73" dark>
                <v-card-subtitle>The ideal training to practice in one of the most important professional areas as of today. In our classrooms, converted into completely practical spaces, you will find top-level computer equipment so that you can develop the skills necessary for your future career. Through this complete training you will learn to design web pages, to program in different languages ​​and configure computer systems.</v-card-subtitle>
              </v-card>
            </v-card>
           <v-btn text>Learn More</v-btn>
        </v-col>
        <v-col class="text-center" cols="6">
          <v-img src="/imgs/img-home-1.jpg" max-height="400"></v-img>
        </v-col>
      </v-row>
  </v-container>
<v-spacer></v-spacer>
  <v-parallax src="/imgs/img-1.jpg" height="380">
      <v-layout column align-center justify-center>
        <div class="headline white--text mb-3 text-xs-center">Still not sure? </div>
        <em>Talk to one of our certified programmers to learn more about what we do at iTeachWeb.</em>
        <v-btn class="blue lighten-2 mt-5" dark large href="/pre-made-themes">
          Get more info
        </v-btn>
      </v-layout>
    </v-parallax>
<v-spacer></v-spacer>
</div>
</template>

<script>
//import HelloWorld from "../components/HelloWorld";

export default {
  name: "HomeView",

  components: {
  },
};
</script>



<style lang="scss" scoped>
  
</style>
