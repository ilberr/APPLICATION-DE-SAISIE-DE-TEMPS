<template>
  <form @submit.prevent="login">
    <VerifyEmail v-if="getEmailConfirmed" />
    <v-app id="inspire">
      <v-main>
        <v-container class="fill-height" fluid>
          <v-row align="center" justify="center">
            <v-col cols="12" sm="8" md="4">
              <v-card class="elevation-12 rounded-xl">
                <v-toolbar color="dark" dark flat>
                  <v-toolbar-title>Sign In</v-toolbar-title>
                  <v-spacer></v-spacer>
                </v-toolbar>
                <v-card-text>
                  <v-form>
                    <span class="text-danger">{{ Error.Description }}</span>
                    <v-text-field
                      label="Username"
                      name="login"
                      v-model="User.username"
                      prepend-icon="mdi-account"
                      type="text"
                    ></v-text-field>
                    <v-text-field
                      id="password"
                      label="Password"
                      v-model="User.password"
                      name="password"
                      prepend-icon="mdi-lock"
                      type="password"
                    ></v-text-field>
                  </v-form>
                </v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <button class="btn" type="submit">Login</button>
                </v-card-actions>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-main>
    </v-app>
  </form>
</template>

<script>
// @ is an alias to /src
import { mapActions, mapGetters } from "vuex";
import VerifyEmail from "@/components/VerifyEmail";

export default {
  name: "Login",
  data() {
    return {
      User: {
        username: "",
        password: "",
      },
      Error: {
        isError: false,
        Description: "",
      },
      homeRedirection:""
    };
  },
  components: {
    VerifyEmail,
  },
  computed: {
    ...mapGetters({
      getEmailConfirmed: "auth/getEmailConfirmed",
      getrole:"auth/getrole"
    }),
  },
  methods: {
    ...mapActions({
      signIn: "auth/signIn",
    }),
    login() {
      this.signIn(this.User)
        .then(() => {
          this.redirectTo(this.getrole)
          console.log(this.homeRedirection);
          this.$router.replace({
            name: this.homeRedirection,

          });
        })
        .catch((err) => {
          this.Error.isError = true;
          console.log("HERE\n");
          console.log(err);
          if(this.Error.isError)
            this.Error.Description = "Username or password not matching !";
        });
    },
    redirectTo(home){
      switch (home) {
        case "EMPLOYEE":
          this.homeRedirection = "HomeEmployee"
          break;
        case "ADMIN":
          this.homeRedirection = "Administration"
          break;
      case "MANAGER":
          this.homeRedirection = "HomeManager"
          break;
        default:
          break;
      }
    }
  },
};
</script>

<style  scoped>
.text-danger {
  color: red;
  text-decoration: underline red;
  text-align: center;
  align-items: center;
  margin-left: 20%;
}
.btn {
  color: white;
  background: rgb(29, 27, 27);
  padding: 10px;
  width: 25%;
  border-radius: 15px;
  font-weight: bold;
  font-size: 1.2em;
}
</style>
