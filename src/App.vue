<template>
  <div id="app">
    <Title />
    <Content />
    <!-- <Request  /> -->
  </div>
</template>

<script>
import Title from "./components/Title.vue";
import Content from "./components/Content.vue";
// import Request from "./components/Request.vue";


export default {
  name: "App",
  components: {
    Title,
    Content,
    // Request,
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100vw;
}
body {
  background-color: #e0e0e0;
  padding: 0;
  margin: 0;
}

:focus {
  outline: none;
}

h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #0098f8;
}
</style>
