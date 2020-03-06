<template>
  <article class="explan" v-if="cont">
    <h3>{{title}}</h3>
    <div class="explan-cont" v-for="(item,index) in cont[12]" :key="index">
      <div class="word-cate">
        <h5>{{ item[0] }}</h5>
        <p class="word-explan">
          <span v-html="item[1][0][0]"></span>
        </p>
      </div>
    </div>
  </article>
</template>

<script>
export default {
  name: "Explanation",
  props: {
    cont: null,
    title:null
  },
  computed: {
    // explan: function() {
    //   if (this.cont != null) {
    //     return this.cont[12];
    //   }
    // }
  },
  methods: {}
};
</script>

<style scoped>

</style>