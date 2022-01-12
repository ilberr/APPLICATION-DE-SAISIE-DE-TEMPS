<template>
  <v-card>
    <v-card-title  class="grey lighten-3">
      user's Information
    </v-card-title>
    <v-form ref="form" class="pa-md-4" lazy-validation>
      <v-form ref="form" lazy-validation>
        <v-text-field
            v-model="user.firstname"
            :rules="[(v) => !!v || 'firstname is required']"
            label="firstname"
            required
        ></v-text-field>
        <v-text-field
            v-model="user.lastname"
            :rules="[(v) => !!v || 'lastname is required']"
            label="lastname"
            required
        ></v-text-field>
        <v-text-field
            v-model="user.email"
            :rules="[(v) => !!v || 'email is required']"
            label="email"
            required
        ></v-text-field>
        <v-text-field
            v-model="user.username"
            :rules="[(v) => !!v || 'username is required']"
            label="username"
            required
        ></v-text-field>

        <template v-if="this.loggedInUser.role.id!=2">
          <v-select
            return-object
            v-model="user.role"
            item-text="label"
            item-value="id"
            :items="roles"
            label="role"
        ></v-select>
        <v-select
            return-object
            v-model="user.manager"
            item-text="fullname"
            item-value="iduser"
            :items="managers"
            label="manager"
        ></v-select>
        </template>
        <template v-else>

        </template>

      </v-form>

      <v-btn color="success" small @click="update_">
        Update
      </v-btn>
      <v-btn style="float:right" color="error" small @click="cancel_">
        Cancel
      </v-btn>
    </v-form>

  </v-card>


</template>

<script>
import {mapActions, mapGetters} from "vuex";

export default {
name: "UserInfoCard",
  data(){
  return {
  }},
  props: ['currentUser'],
  computed: {
    ...mapGetters({
      user: "user/GET_CURRENT_USER",
      managers: "user/GET_MANAGERS",
      roles: "role/GET_ROLES",
      loggedInUser:"auth/user"
    }),
  },
  mounted(){
    console.log(this.loggedInUser);
  },
  methods: {
    ...mapActions({
    }),

  update_(){
    this.$emit('update',this.user);
  },

  cancel_(){
    this.$emit('cancel');
  }

  },

}
</script>

<style scoped>

</style>