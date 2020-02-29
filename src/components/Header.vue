<template>
  <header class="title flex-center">
    <h1>{{ title }}</h1>
  </header>
</template>

<script>
export default {
  name: "Title",
  props:{
    title:String
  }
};
</script>


<style scoped>
.title {
  width: 100%;
  color: #0098f8;
  background-color: #98d0f8;
  padding-bottom: 5rem;
  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.37);
}
</style>
