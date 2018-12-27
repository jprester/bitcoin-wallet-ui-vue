<template>
  <div id="app">
    <Header/>
    <Content :testUsers="users"/>
    <Footer/>
  </div>
</template>

<script>
import axios from "axios";

import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";

export default {
  name: "App",
  components: {
    Header,
    Content,
    Footer
  },
  data: function() {
    return { users: [] };
  },
  mounted() {
    axios.get("https://jsonplaceholder.typicode.com/posts").then(response => {
      this.users = response.data;
    });
  }
};
</script>

<style scoped>
body {
  background: #cccccc;
}
</style>
