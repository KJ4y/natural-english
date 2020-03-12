<template>
  <article class="read flex-center">
    <span class="iconfont icon-untitled2"></span>
    <div class="read-cont">
      <p v-html="examed"></p>
      <p v-html="trans"></p>
    </div>
  </article>
</template>

<script>
export default {
  name: "Read",
  props: {
    title: null,
    examed: null,
    trans: null
  }
};
</script>

<style scoped>
.read-cont {
  margin: 3rem 1rem;
  box-shadow: none;
  font-size: 2rem;
}


</style>