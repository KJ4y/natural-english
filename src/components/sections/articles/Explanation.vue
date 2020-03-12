<template>
  <article class="explan" v-if="cont">
    <h3>{{step}}</h3>
    <div class="explan-cont" v-for="(item,index) in exp" :key="index">
      <h5>{{ item[0] }}</h5>
      <p class="word-explan" v-for="(item,index) in item[1]" :key="index">
        <a
          @click="transFunc(item[0])"
          @mouseup="moveTrans()"
          v-html="showTrans(item[0],tran)"
        ></a>
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
      let url = get.url(
        '"' +
          item
            .replace("<b>", "")
            .replace("</b>", "")
            .replace(";", ".") +
          '"'
      );
      this.explan = item.replace("<b>", "").replace("</b>", "");
      if (this.trans[this.explans.indexOf(item)] == undefined) {
        this.explans.push(item);
        axios.get(url).then(Response => {
          for (let index = 0; index < Response.data[0].length; index++) {
            this.text += Response.data[0][index][0];
          }
          this.trans.push(this.text);
          this.text = "";
        });
      }
      this.tran = this.trans[this.explans.indexOf(item)];
    },
    moveTrans: function() {
      this.tran = null;
    },
    showTrans: function(item, tran) {
      if (
        item.replace("<b>", "").replace("</b>", "") == this.explan &&
        tran != null
      ) {
        return item + "<br />" + tran;
      } else {
        return item;
      }
    }
  }
};
</script>

<style scoped>
.explan-cont {
  display: block;
}
</style>