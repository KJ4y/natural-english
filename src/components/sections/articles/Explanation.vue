<template>
  <article class="explan" v-show="explans">
    <h3>{{title}}</h3>
    <div class="explan-cont" v-for="(item,index) in explans" :key="index">
      <h5>{{ item[0] }}</h5>
      <p class="word-explan" v-for="(item,index) in item[1]" :key="index">
        <span @click="transFunc(item[0])" class="iconfont icon-unie718"></span>
        <span v-html="item[0]"></span>
        <br />
        <span class="blue" v-html="showTrans(item[0])"></span>
      </p>
    </div>
  </article>
</template>

<script>
import axios from "axios";
import get from "../../../url";

export default {
  name: "Explanation",
  props: {
    explans: null
  },
  data() {
    return {
      title: "Explanation",
      exp: null,
      tran: null
    };
  },
  computed: {
    exps: function() {
      let exps = [];
      for (let i = 0; i < this.explans.length; i++) {
        for (let j = 0; j < this.explans[i][1].length; j++) {
          exps.push(this.explans[i][1][j][0]);
        }
      }
      return exps;
    },
    trans: function() {
      let trans = [];
      for (let i = 0; i < this.explans.length; i++) {
        for (let j = 0; j < this.explans[i][1].length; j++) {
          trans.push(null);
        }
      }
      return trans;
    }
  },
  watch: {
    exp: function() {
      let expsSub = this.exps.indexOf(this.exp);
      let url = get.url(
        '"' +
          this.exp
            .replace("<b>", "")
            .replace("</b>", "")
            .replace(";", ".") +
          '"'
      );
      if (this.trans[expsSub] == null) {
        axios.get(url).then(Response => (this.tran = Response.data[0][0][0]));
      }
    },
    tran: function() {
      let expsSub = this.exps.indexOf(this.exp);
      this.trans.splice(expsSub, 1, this.tran);
    }
  },
  methods: {
    transFunc: function(item) {
      if (this.exp != item) {
        this.exp = item;
      } else {
        this.exp = '';
      }
    },
    showTrans: function(item) {
      if (item == this.exp && this.tran != null) {
        return this.trans[this.exps.indexOf(this.exp)];
      }
    }
  }
};
</script>

<style scoped>
.explan,
.word-explan,
.explan-cont,
span {
  text-align: center;
}
.explan-cont {
  display: block;
}
.blue {
  color: #0098f8;
  font-size: 1.2rem;
}
span:hover {
  cursor: pointer;
  color: #0098f8;
}

.icon-unie718 {
  font-size: 2rem;
}
</style>