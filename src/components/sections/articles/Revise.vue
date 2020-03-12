<template>
  <article class="revise flex-center">
    <div v-if="exam" class="btn-layout">
      <button
        class="btn"
        :class="{ isactive:index == isActive }"
        v-for="(btn ,index) in btns"
        :key="index"
        @click="btnView(btn,index)"
      >
        <span v-if="index == isActive">{{ btn }}</span>
      </button>
    </div>
    <div v-if="exam">
      <transition name="component-fade" mode="out-in">
        <!-- <keep-alive> -->
        <Read v-if="btn == 'Read'" :examed="exam" />
        <Write v-else-if="btn == 'Write'" :examed="exam" />
        <Listen v-else-if="btn == 'Listen'" :examed="exam" />
        <Speak v-else-if="btn == 'Speak'" :examed="exam" />
        <!-- </keep-alive> -->
      </transition>
    </div>
    <div class="flex-center" v-else-if="examed">
      <span class="iconfont icon-untitled103"></span>
      <p v-html="examed"></p>
      <div class="text flex-center" v-if="sentence == undefined">
        <span class="fontext">请改写你的句子</span>
      </div>
      <div class="text flex-center" v-else-if="sentence">
        <span >{{ sentence }}</span>
        <span class="iconfont icon-unie646" @click="clearText"></span>
      </div>
      <input type="text" v-model="sentence" placeholder="请改写你的句子" />
      <span class="iconfont icon-unie645" @click="submitText"></span>
    </div>
    <div class="block-style" v-else>
      <p>{{ tips }}</p>
    </div>
  </article>
</template>

<script>
import Read from "./cores/Read";
import Write from "./cores/Write";
import Listen from "./cores/Listen";
import Speak from "./cores/Speak";

export default {
  name: "Revise",
  props: {
    examed: null
  },
  data() {
    return {
      sentence: undefined,
      coreOver: null,
      exam: null,
      tips: "请实现句子的听说读写后再进行改写。",
      btn: "Read",
      isActive: 0,
      btns: ["Read", "Write", "Listen", "Speak"]
    };
  },
  computed: {
    thistrue: function() {
      return this.examed
        .replace("<b>", "")
        .replace("</b>", "")
        .trim();
    }
  },
  methods: {
    btnView: function(btn, index) {
      this.btn = btn;
      this.isActive = index;
    },
    clearText: function() {
      this.sentence = null;
    },
    submitText: function() {
      this.exam = this.sentence;
      this.examed = null;
    }
  },
  components: {
    Read,
    Write,
    Listen,
    Speak
  }
};
</script>

<style scoped>
.tips {
  font-size: 2rem;
  margin-top: 2rem;
  text-align: center;
}
.text {
  margin-top: 2rem;
  font-size: 2.5rem;
  box-shadow: none;
  flex-direction: row;
}

.icon-unie645,
.icon-unie646 {
  margin-top: 0;
  font-size: 2rem;
  margin-left: 1rem;
}

.show-place {
  font-size: 2rem;
}

input {
  width: 100%;
  border-style: hidden hidden solid hidden;
  border-width: 2px;
  border-color: #000;
  overflow: hidden;
  color: #0099f8;
  font: 1.5rem Arial;
  font-weight: bold;
  text-align: center;
  background-color: #ffffff00;
  resize: none;

  margin-top: 2rem;
  margin-bottom: 2rem;
}
.block-style {
  margin: 3rem 0;
  box-shadow: none;
}
.icon-unie645:hover,
.icon-unie646:hover {
  cursor: pointer;
}
.fontext{
  font-size: 1.8rem;
}

/* 按钮样式 */
.btn-layout {
  flex-direction: row;
  align-self: center;
  justify-content: center;
  flex-wrap: wrap;
  z-index: 5;
}

.btn {
  color: #0098f8;
  background-color: #98d0f8;

  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.37);
  text-align: center;
  width: 2rem;
  height: 0.5rem;
  font-family: Arial;
  border: hidden;
  margin: 0 0.3rem;
  border-radius: 0.2rem;
}

.isactive {
  color: #fff;
  background-color: #0098f8;

  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.37);
  text-align: center;
  width: 4rem;
  height: 2rem;
  font-family: Arial;
  border: hidden;
  margin: 0 0.3rem 0.3rem 0;
  border-radius: 5rem;
}

button:hover {
  color: #fff;
  background-color: #0098f8;
}

/* 过度样式 */
.component-fade-enter-active,
.component-fade-leave-active {
  transition: opacity 0.3s ease;
}
.component-fade-enter, .component-fade-leave-to
/* .component-fade-leave-active for below version 2.1.8 */ {
  opacity: 0;
}
</style>