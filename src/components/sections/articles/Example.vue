<template>
  <article class="example" v-if="cont">
    <h3>{{title}}</h3>
    <div class="example-cont" v-for="(item,index) in cont[13][0]" :key="index">
      <p>
        <a @click="clickLink(item[0])">
          <span v-html="item[0]"></span>
        </a>
      </p>
    </div>
  </article>
</template>
<script>

export default {
  name: "Example",
  props: {
    cont: null,
    title: null
  },
  data() {
    return {
      exam: null
    };
  },
  methods: {
    clickLink: function(item) {
      var rep = item.replace("<b>", "").replace("</b>", "");
      this.exam = rep;
    }
  },
};
</script>

<style scoped>
a:hover {
  cursor: pointer;
}
</style>