<template>
  <article class="listen flex-center">
    <span class="iconfont icon-unie66a"></span>

    <select class="block-style" v-model="select">
      <option disabled selected value="select">请选择语音引擎</option>
      <option v-for="option in options" :key="option.value" :value="option.value">{{ option.text }}</option>
    </select>
    <audio v-if="url" v-show="ok" :src="url" controls autoplay preload="none"></audio>
  </article>
</template>

<script>
// import axios from "axios";
import get from "../../../../url";

export default {
  name: "Listen",
  props: {
    examed: null
  },

  data() {
    return {
      url: null,
      ok: null,
      select: "select",
      options: [
        { text: "谷歌", value: "google" },
        { text: "腾讯", value: "tencent" },
        { text: "百度", value: "baidu" },
        { text: "搜狗", value: "sougou" }
      ],
      voice: ""
    };
  },
  watch: {
    select: function() {
      if (this.select == "google") {
        this.url = get.googleTTS(
          this.examed.replace("<b>", "").replace("</b>", "")
        );
      } else if (this.select == "tencent") {
        this.url = get.tencentTTS(
          this.examed.replace("<b>", "").replace("</b>", "")
        );
      } else if (this.select == "baidu") {
        this.url = get.baiduTTS(
          this.examed.replace("<b>", "").replace("</b>", "")
        );
      } else if (this.select == "sougou") {
        this.url = get.sougouTTS(
          this.examed.replace("<b>", "").replace("</b>", "")
        );
      }
    }
  },
  methods: {
    listenSent: function() {}
  }
};
</script>

<style scoped>
.listen {
  /* margin: 3rem 1rem; */
  box-shadow: none;
  font-size: 2rem;
}

select {
  margin: 3rem 3rem;
  text-align: center;
  border-color: #fff;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
}
option {
  width: auto;
  text-align: center;
  text-align-last: center;
}

.radio-block {
  display: block;
}

</style>