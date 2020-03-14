<template>
  <article class="example flex-center" v-if="exams">
    <h3>{{step}}</h3>
    <div class="example-cont" v-for="(item,index) in exams" :key="index">
      <p>
        <a @click="transFunc(item)" @mouseout="moveTrans()" v-html="showTrans(item,tran)"></a><br>
        <span
          v-if="tran == null"
          @click="nextOne(item)"
          class="iconfont icon-10"
        ></span>
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
    step: null,
    exams: null
  },
  data() {
    return {
      tran: null,
      trans: [],
      exam: null
    };
  },
  methods: {
    transFunc: function(item) {
      this.exam = item.replace("<b>", "").replace("</b>", "");

      let url = get.url(
        '"' +
          item
            .replace("<b>", "")
            .replace("</b>", "")
            .replace(";", ".") +
          '"'
      );
      if (this.trans[this.exams.indexOf(item)] == undefined) {
        axios
          .get(url)
          .then(Response => this.trans.push(Response.data[0][0][0]));
      }
      this.tran = this.trans[this.exams.indexOf(item)];
    },
    moveTrans: function() {
      this.tran = null;
    },
    showTrans: function(item, tran) {
      if (
        item.replace("<b>", "").replace("</b>", "") == this.exam &&
        tran != null
      ) {
        return item + "<br />" + tran;
      } else {
        return item;
      }
    },
    nextOne: function(item) {
      this.exam = item;
      this.$emit("push-exam", this.exam);
    }
  }
};
</script>

<style scoped>
.example-cont {
  display: flex;
}
p,a,h3{
  text-align: center;
}
span:hover{
  cursor: pointer;
}

.icon-10{
  font-size: 2.5rem;
}
</style>