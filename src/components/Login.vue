<template>

  <v-container align-center>
    <v-layout row wrap>
      <v-flex xs4></v-flex>
      <v-flex xs4>
      <v-form v-model="valid">
        <v-text-field 
          v-model="name"
          :rules="nameRules"
          :counter="10"
          label="Name"
          required
        ></v-text-field>
        <v-text-field
          :append-icon="show1 ? 'visibility_off' : 'visibility'"
          :rules="passwordRules"
          :type="show1 ? 'text' : 'password'"
          name="input-10-1"
          hint="At least 8 characters"
          counter
          @click:append="show1 = !show1"
          ></v-text-field>
        <v-btn v-on:click="loginLogic()">Login</v-btn>
      </v-form>
    </v-flex>
  </v-layout>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    valid: false,
    name: "",
    show1: false,
    nameRules: [
      v => !!v || "Name is required",
      v => v.length <= 10 || "Name must be less than 10 characters"
    ],
    email: "",
    passwordRules: [
      v => !!v || "Password is required",
      v => v.length >= 8 || "Min 8 characters"
    ]
  }),
  methods: {
    loginLogic: function() {
      if (this.name == "jguilindro") {
        this.$router.push("/test");
      }
    }
  }
};
</script>