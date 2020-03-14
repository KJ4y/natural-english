<template>
  <article class="example flex-center" v-show="exams">
    <h3>{{title}}</h3>
    <div class="example-cont" v-for="(item,index) in exams" :key="index">
      <p>
        <span @click="transFunc(item,index)" class="iconfont icon-unie718"></span>
        <span @click="nextOne(item)" v-html="item"></span>
        <br />
        <span class="blue" v-html="showTrans(index)"></span>
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
    exams: null
  },
  data() {
    return {
      title: "Example",
      show: null,
      tran: null,
      exam:null
    };
  },
  computed: {
    trans: function() {
      let trans = [];
      for (let index = 0; index < this.exams.length; index++) {
        trans.push(null);
      }
      return trans;
    }
  },
  watch: {
    exam: function() {
      let examsSub = this.exams.indexOf(this.exam);
      let url = get.url(
        '"' +
          this.exam
            .replace("<b>", "")
            .replace("</b>", "")
            .replace(";", ".") +
          '"'
      );
      if (this.trans[examsSub] == null) {
        axios.get(url).then(Response => (this.tran = Response.data[0][0][0]));
      }
    },
    tran: function() {
      let examsSub = this.exams.indexOf(this.exam);
      this.trans.splice(examsSub, 1, this.tran);
    }
  },
  methods: {
    transFunc: function(item, index) {
      this.exam = item;
      if (this.show != index) {
        this.show = index;
      } else {
        this.show = null;
      }
    },
    showTrans: function(index) {
      if (this.show == index && this.tran != null) {
        return this.trans[this.show];
      }
    },

    nextOne: function(item) {
      this.$emit("push-exam", item);
    }
  }
};
</script>

<style scoped>
.example-cont {
  display: flex;
}
p,
span,
h3 {
  text-align: center;
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