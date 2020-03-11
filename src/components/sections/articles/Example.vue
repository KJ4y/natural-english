<template>
  <article class="example" v-if="cont">
    <h3>{{step}}</h3>
    <div class="example-cont" v-for="(item,index) in cont[13][0]" :key="index">
      <p>
        <a
          :title="tran"
          @mouseenter="transFunc(item[0])"
          @click="clickLink(item[0])"
          v-html="item[0]"
        ></a>
      </p>
    </div>
  </article>
</template>
<script>
import axios from "axios";
import get from "../../../url";

export default {
  name: "Example",
  props: {
    cont: null,
    step: null
  },
  data() {
    return {
      exam: null,
      tran: null,
      exams: [],
      trans: []
    };
  },
  methods: {
    transFunc: function(item) {
      this.exam = item.replace("<b>", "").replace("</b>", "");
      let url = get.url(item.replace("<b>", "").replace("</b>", "").replace(";", "."));
      console.log(url)
      if (this.exams.indexOf(item) == -1) {
        this.exams.push(item);
        axios
          .get(url)
          .then(Response => this.trans.push(Response.data[0][0][0]));
      }
      this.tran = this.trans[this.exams.indexOf(item)];
    },
    clickLink: function(item) {
      // this.exam = item.replace("<b>", "").replace("</b>", "");
      this.exam = item;
      this.$emit("push-exam", this.exam);
    }
  }
};
</script>

<style scoped>
.example-cont {
  display: block;
}
</style>