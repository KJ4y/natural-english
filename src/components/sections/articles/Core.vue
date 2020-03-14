<template>
  <article class="content flex-center">
    <div class="btn-layout" v-if="examed">
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
    <div v-if="examed">
      <transition name="component-fade" mode="out-in">
        <Read v-if="btn == 'Read'" :examed="examed" />
        <Write v-else-if="btn == 'Write'" :examed="examed" />
        <Listen v-else-if="btn == 'Listen'" :examed="examed" />
        <Speak v-else-if="btn == 'Speak'" :examed="examed" @push-cor="nextRev" />
      </transition>
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
  name: "Core",
  props: {
    examed: null,
    isactive: null
  },
  data() {
    return {
      tips: "请先选择一个句子再进行听说读写。",
      btn: "Read",
      isActive: 0,
      btns: ["Read", "Write", "Listen", "Speak"]
    };
  },
  methods: {
    btnView: function(btn, index) {
      this.btn = btn;
      this.isActive = index;
    },
    nextRev:function(coreOver){
        this.$emit("push-cort", coreOver);
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
.block-style {
  margin: 3rem 0;
  box-shadow: none;
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
p{
  text-align: center;
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