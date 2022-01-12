<template>
  <v-card>
    <v-card-title> Add user </v-card-title>
    <v-form ref="form" class="pa-md-4" v-model="valid" lazy-validation>
      <!-- <v-form ref="form" lazy-validation> -->
      <v-text-field
        v-model="firstname"
        :rules="fistnameRules"
        label="firstname"
        required
      ></v-text-field>
      <v-text-field
        v-model="lastname"
        :rules="lastnameRules"
        label="lastname"
        required
      ></v-text-field>
      <v-text-field
        v-model="email"
        :rules="emailRules"
        label="email"
        required
      ></v-text-field>
      <v-text-field
        v-model="username"
        :rules="usernameRules"
        label="username"
        required
      ></v-text-field>
      <v-text-field
        v-model="password"
        type="password"
        :rules="[(v) => !!v || 'password is required']"
        label="password"
        required
      ></v-text-field>
      <v-select
        return-object
        v-model="role"
        item-text="label"
        :rules="[(v) => !!v || 'Item is required']"
        item-value="id"
        :items="roles"
        label="role"
      ></v-select>
      <v-select v-if="this.currentManager!=null"
        return-object
        v-model="this.currentManager"
        item-text="fullname"
        item-value="iduser"
        :items="managers"
        label="manager"
      ></v-select>
      <v-select v-else
        return-object
        v-model="manager"
        item-text="fullname"
        item-value="iduser"
        :items="managers"
        label="manager"
      ></v-select>
      <!-- </v-form> -->

      <v-btn color="success" :disabled="!valid" small @click="add_">
        Save
      </v-btn>
      <v-btn color="error" style="margin-left: 30px" small @click="cancel_">
        Cancel
      </v-btn>
    </v-form>
  </v-card>
</template>

<script>
import {mapActions, mapGetters} from "vuex";

export default {
  name: "AddUser",
  data(){
    return {
      lastname:'',
      firstname:'',
      email:'',
      username:'',
      role:'',
      manager:'',
      password:'',
      valid: true,
      fistnameRules: [
        v => !!v || 'Fistname is required',
        v => (v && v.length >= 3 ) || 'Fistname must more than 3 characters',
      ],
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
      lastnameRules: [
        v => !!v || 'Lastname is required',
        v => (v && v.length >= 3) || 'Lastname must be less than 3 characters',
      ],
      usernameRules: [
        v => !!v || 'Username is required',
        v => (v && v.length >= 3) || 'Username must be less than 3 characters',
      ],

    }},
  props: ['currentUser','currentManager'],
  computed: {
    ...mapGetters({
      managers: "user/GET_MANAGERS",
      roles: "role/GET_ROLES",
      loggedUser :"auth/user"

    }),
  },
  mounted(){
    console.log(this.currentManager);
  },
  methods: {
    ...mapActions({
    }),

    add_(){
      if(this.$refs.form.validate()){
      let user = {
        "lastname":this.lastname,
        "firstname":this.firstname,
        "email":this.email,
        "username":this.username,
        "password":this.password,
        "roleId":this.role.id,
        "managerId":''
      }
      if (this.manager!=null){user.managerId=this.manager.userId}
      this.$emit('add', {id:this.loggedUser.userId,user});   
      }
    },

    cancel_(){
      this.$emit('cancel');
    }

  },

}
</script>

<style scoped>
</style>