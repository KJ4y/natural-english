<template>
  <article class="explan" v-if="cont">
    <h3>{{step}}</h3>
    <div class="explan-cont" v-for="(item,index) in exp" :key="index">
      <h5>{{ item[0] }}</h5>
      <p class="word-explan" v-for="(item,index) in item[1]" :key="index">
        <a :title="tran" @mouseenter="transFunc(item[0])" v-html="item[0]"></a>
      </p>
    </div>
    <p>{{text }}</p>
  </article>
</template>

<script>
import axios from "axios";
import get from "../../../url";

export default {
  name: "Explanation",
  props: {
    cont: null,
    step: null
  },
  data() {
    return {
      explan: null,
      tran: null,
      explans: [],
      trans: [],
      text: ""
    };
  },
  computed: {
    exp: function() {
      return this.cont[12];
    }
  },
  methods: {
    transFunc: function(item) {
      let url = get.url(item);
      if (this.explans.indexOf(item) == -1) {
        this.explans.push(item);
        axios.get(url).then(Response => {
          for (let index = 0; index < Response.data[0].length; index++) {
            console.log(Response.data[0][index][0]);
            this.text += Response.data[0][index][0];
          }
          this.trans.push(this.text);
          this.text = "";
        });
      }
      this.tran = this.trans[this.explans.indexOf(item)];
    }
  }
};
</script>

<style scoped>
.explan-cont {
  display: block;
}
</style>