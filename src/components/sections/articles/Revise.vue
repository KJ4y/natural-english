<template>
  <article>
    <h3>{{ title }}</h3>
    <textarea placeholder="请根据想象的场景默写句子"></textarea>
  </article>
</template>

<script>
export default {
  name: "Revise",
  props: {
    title: null
  }
};
</script>

<style scoped>
textarea {
  width: 100%;
  margin-bottom: 2rem;
  border-style: hidden hidden solid hidden;
  border-width: 2px;
  border-color: #000;
  padding: 2rem 0rem 0.5rem;
  overflow: hidden;
  color: #0099f8;
  font: 2rem Arial;
  font-weight: bold;
  text-align: center;
  background-color: #ffffff00;
  resize: none;
}
</style>