<template>
  <article class="speak flex-center block-style">
    <span class="iconfont icon-unie6f02" @click="isFunny"></span>
    <transition name="component-fade" mode="out-in">
      <span v-if="funny" class="isfunny" @click="noFunny">{{funny}}</span>
    </transition>
    <div @click="isOver" class="pos">
      <span class="iconfont icon-10"></span>
    </div>
  </article>
</template>

<script>
export default {
  name: "Speak",
  data() {
    return {
      coreOver: null,
      funny: null
    };
  },
  methods: {
    isOver: function() {
      this.coreOver = true;
      this.$emit("push-cor", this.coreOver);
    },
    isFunny: function() {
      if (this.funny == null) {
        this.funny = '大胆的说出来，别害羞！';
        
      } else if(this.funny == '大胆的说出来，别害羞！') {
        this.funny =
          "并非掩饰辣鸡开发者不会弄语音识别";
      }else {
        this.funny = null;
      }
    },
    noFunny: function() {
      this.funny = null;
    }
  }
};
</script>

<style scoped>
.iconfont {
  font-size: 3rem;
  margin: 2rem 0 3rem 0;
}
.iconfont:hover {
  cursor: pointer;
}

.speak {
  position: relative;
}
.isfunny{
  text-align: center;
}
.isfunny:hover {
  cursor: pointer;
}

.pos {
  bottom: -5.6rem;
  position: absolute;

  border-radius: 50%;
  background-color: #fff;
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