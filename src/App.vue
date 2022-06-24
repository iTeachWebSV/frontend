<template>
  <v-app>
    <div id="nav">
      <Navbar />
    </div>
    <v-main>
      <router-view />
    </v-main>
     <div id="footer">
      <Footer/>
    </div>
  </v-app>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";
export default {
  name: "App",
  components: {Navbar, Footer},

  data: () => ({
    //
  }),
};
</script>
