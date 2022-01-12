<template>
  <v-card outlined color="transparent"  class="spacing-playground pa-6" fluid>
    <v-row class="pa-mb-2">
      <v-col>
        <v-btn class="ma-2" @click="section='list';" block><v-icon>mdi-format-list-bulleted-square</v-icon></v-btn>
      </v-col>
      <v-col>
        <v-btn class="ma-2" @click="section='add';" block> <v-icon>mdi-plus</v-icon></v-btn>
      </v-col>
    </v-row>

  <v-row v-if="section=='list'" class="pa-md-4">
    <v-col  cols="12" sm="6"  mt-16 md="8">
      <UsersList :users="users" @delete="delete_user" @edit="edit_user"/>
    </v-col>

    <v-col  cols="6"  mt-16 md="4">
        <UserInfoCard v-if="operation=='edit'" @cancel="cancel" @update="update" ></UserInfoCard>
    </v-col>
  </v-row>
    <v-row v-if="section=='add'" class="pa-md-4">
      <v-col  cols="12" sm="6"  mt-16 md="8">
        <AddUser  @add="add_user" />
      </v-col>
    </v-row>
  </v-card>
</template>
<script>
import UsersList from "@/components/user/UsersList";
import { mapActions, mapGetters } from "vuex";
import UserInfoCard from "@/components/user/UserInfoCard";
import AddUser from "@/components/user/AddUser";
export default {
name: "HomeAdministration",
  data() {
    return{
      operation:"",
      section:"list"
    }
  },
  components: {UserInfoCard, UsersList, AddUser},
  computed: {
    ...mapGetters({
      users: "user/GET_USERS",
      currentUser: "user/GET_CURRENT_USER",
      roles: "role/GET_ROLES",
    }),
  },
  methods: {
    ...mapActions({
      getUsers: "user/getUsers",
      deleteUser: "user/deleteUser",
      getCurrentUser: "user/getCurrentUser",
      getRoles: "role/getRoles",
      updateUser: "user/updateUser",
      addUser: "user/addUser",
    }),
    delete_user(id,index){
      this.operation="";
      this.$swal({
        title: 'Do you want to delete this user?',
        text: 'The user wont have access to his account',
        type: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes Delete it!',
        cancelButtonText: 'No, Keep it!',
        showCloseButton: true,
        showLoaderOnConfirm: true
      }).then((result) => {
        if(result.value) {
          this.deleteUser(id);
          this.users.splice(index, 1);
          this.$swal('Deleted', 'You successfully deleted this file', 'success')
        }
      })
    },

    edit_user(id){
      this.operation="edit";
      this.getCurrentUser(id);
  },
    add_user(user,id){
      console.log("inside home");
      console.log(id);
      this.addUser(user,id);
      this.section="list";
      this.$swal("Saved", "user saved successfully", "success");
    },
    cancel(){
      this.operation="";
    },
    update(user){
      this.$swal({
        title: 'Do you want to update user info  ?',
        text: 'your inputs will be saved',
        type: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes update it!',
        cancelButtonText: 'No, Keep it!',
        showCloseButton: true,
        showLoaderOnConfirm: true
      }).then((result) => {
        if(result.value) {
          this.updateUser(user);
          this.cancel();
          this.$swal('Updated', ' user updated successfully', 'success')
        }
      })


    }
 },
  created(){
    this.getUsers();
    this.getRoles();
  }
}
</script>

<style scoped>

</style>