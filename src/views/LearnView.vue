<template>
 <div class="learn">
  <v-parallax src="/imgs/img-1.jpg" height="380">
    <v-layout column align-center justify-center>
      <div class="headline black--text mb-3 text-xs-center">Let's start programming!</div>
      <em>Choose what classes you'd like to start off with, we'll help you on the way.</em>
    </v-layout>
  </v-parallax>
<v-spacer></v-spacer>
<v-container>
     <v-row align="center" justify="center">
        <v-col class="text-center" cols="6">
          <v-img src="/imgs/img-home-1.jpg" max-height="400" max-width="400"></v-img>
        </v-col>
        <v-col class="text-center" cols="6">
          <h1 class="text-h4 font-weight-thin mb-4">How It Works</h1>
          <v-card max-width="600" class="mx-auto">
            <v-card color="#385F73" dark>
              <v-card-subtitle>Learning is different for everyone, that's why we let you choose your very own way of learning! The modules are seperated by base and sepcialization. Base Modules are fundamental skills that you must learn, whereas our WebDev and Multiplatform modules are where you can focus more on skills that are specific to your needs. Read more about them here!</v-card-subtitle>
            </v-card>
          </v-card>
        </v-col>
      </v-row>
  </v-container>
  <v-spacer></v-spacer>
  <v-container>
      <v-layout column  wrap class="my-5" align-center>
        <v-spacer></v-spacer>
        <v-flex xs12 sm4 class="my-3">
          <div class="text-xs-center">
            <h1>Base Modules</h1>
          </div>
          <v-spacer></v-spacer>
        </v-flex>
        <v-expansion-panels focusable>
          <v-expansion-panel>
          <!--<v-expansion-panel
              v-for="(item,i) in 5"
              :key="i" -->
          >
            <v-expansion-panel-header>Item</v-expansion-panel-header>
            <v-expansion-panel-content>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-layout>
  </v-container>
  <v-spacer></v-spacer>
  <v-container>
      <v-layout column  wrap class="my-5" align-center>
        <v-spacer></v-spacer>
        <v-flex xs12 sm4 class="my-3">
          <div class="text-xs-center">
            <h1>WebDev Modules</h1>
          </div>
          <v-spacer></v-spacer>
        </v-flex>
        <v-expansion-panels focusable>
          <v-expansion-panel>
          <!--<v-expansion-panel
              v-for="(item,i) in 5"
              :key="i" -->
          >
            <v-expansion-panel-header>Item</v-expansion-panel-header>
            <v-expansion-panel-content>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-layout>
  </v-container>
<v-spacer></v-spacer>

  <v-container>
      <v-layout column  wrap class="my-5" align-center>
        <v-spacer></v-spacer>
        <v-flex xs12 sm4 class="my-3">
          <div class="text-xs-center">
            <h1>MultiDev Modules</h1>
          </div>
          <v-spacer></v-spacer>
        </v-flex>
        <v-expansion-panels focusable>
          <v-expansion-panel>
          <!--<v-expansion-panel
              v-for="(item,i) in 5"
              :key="i" -->
          >
            <v-expansion-panel-header>Item</v-expansion-panel-header>
            <v-expansion-panel-content>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-layout>
  </v-container>
<v-spacer></v-spacer>
    <v-parallax src="" height="380">
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
export default {
  name: "LearnView",

  components: {
  },
};
</script>