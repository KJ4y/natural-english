<template>
  <article class="read">
    <h3>{{ title }}</h3>
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
.read,.read-cont {
  display: block;
  margin-bottom: 2rem;
  box-shadow: none;

  font-size: 2rem;
}

</style>