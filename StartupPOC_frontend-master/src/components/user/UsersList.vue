<template>
  <v-card>
      <v-text-field
          v-model="search"
          append-icon="mdi-magnify"
          label="Search"
          single-line
          hide-details
      ></v-text-field>
        <v-card-title>List of users</v-card-title>
        <v-data-table
            :headers="headers"
            :items="users"
            :search="search"
        >
          <template v-slot:[`item.manager.fullname`]="{ item }">
            <td v-if ="item.manager"> {{ item.manager.fullname }} </td>
            <td v-else>NONE</td>
          </template>
          <template v-slot:[`item.role.label`]="{ item }">
            <v-chip v-if ="item.role"  class="mr-2"> {{ item.role.label }} </v-chip>
            <v-chip v-else>NONE</v-chip>
          </template>
          
          <template v-slot:[`item.actions`]="{ item }">
            <v-icon small  @click="edit_(item.userId)">mdi-pencil</v-icon>
            <v-icon small class="mr-2" @click="delete_(item.userId, items.indexOf(item))">mdi-delete</v-icon>
            
          </template>
        </v-data-table>
  </v-card>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: "UsersList",
  data() {
    return {
      search: '',
      headers: [
        {text: 'Lastname', align: 'start', sortable: false, value: 'lastname'},
        {text: 'Firstname', align: 'start', sortable: false, value: 'firstname'},
        {text: 'Email', align: 'start', sortable: false, value: 'email'},
        {text: 'Role', align: 'start', sortable: false, value: 'role.label'},
        {text: 'Manager', align: 'start', sortable: false, value: 'manager.fullname'},
        { text: "Actions", value: "actions", sortable: false },
      ],
    }
  },
  props: ['users'],

  computed: {
      ...mapGetters({
        loggedUser :"auth/user"

      }),
    items: function () {
      return this.users;
    }
  },
  methods:{
    delete_(id,index){ this.$emit('delete', id,index);},
    edit_(id){this.$emit('edit', id);},
  }

};
</script>

<style>
.list {
  max-width: 750px;
}
</style>