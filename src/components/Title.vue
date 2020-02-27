<template>
  <div class="title">
    <h1>{{ title }}</h1>
  </div>
</template>

<script>
export default {
  name: "Title",
  data() {
    return {
      title: "英语"
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.title {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  color: #0098f8;
  background-color: #98d0f8;

  /* border-radius: 1rem; */
  padding-bottom: 5rem;
  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.37);
}
</style>
