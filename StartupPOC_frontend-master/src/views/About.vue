<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "About",
  mounted(){
    let user = axios.get("/auth/info");
    console.log(user);
  }
}
</script>