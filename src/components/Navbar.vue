<template>
  <!---<v-toolbar-side-icon><img  alt="iTeachWeb" height="100%"></v-toolbar-side-icon>-->
  <v-toolbar dark color="white" style="height: 9vh">
    <v-toolbar-title class="white--text">
      <div class="mamae">
        <img class="logo" src="/imgs/iTeachWeb.png" height="50px" />
      </div>
    </v-toolbar-title>

    <v-toolbar-items>
      <v-btn text color="black" active-class="no-active" :to="'/'">HOME</v-btn>
      <v-btn text color="black" :to="'learn'">LEARN WITH US</v-btn>
      <v-btn text color="black">CONTACT</v-btn>
    </v-toolbar-items>

    <v-spacer></v-spacer>
    <v-btn text color="black" :to="'login'"
      >Log In!</v-btn
    >
  </v-toolbar>
</template>



<script>
import { mapActions } from "vuex";
export default {
  methods: {
    ...mapActions(["login"]),
    doLogin() {
      this.$store.dispatch("login", { user: "admin", password: "admin" });
    },
  },
  data() {
    return {
      user: "",
    };
  },
};
</script>