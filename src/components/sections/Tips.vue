<template>
  <section class="tips">
    <div v-if="expands !=true" class="flex-center block-style" @click="expandDes">
      <h3>
        使用方法
        <span v-if="expand != true" class="iconfont icon-unie607"></span>
      </h3>
        <div v-if="expand">
          <h4>
            1.输入一个单词查看
            <span>英语解释</span>
          </h4>
          <h4>
            2.多看例句
            <span>体会意思，想象场景</span>
          </h4>
          <h4>
            ※3.选择一个
            <span>大概能懂的句子</span>进行以下④个步骤：
          </h4>
          <p>
            <span>①读：看句子 --- 想场景</span>
            <br />
            <span>②写：想场景 --- 打出字</span>
            <br />
            <span>③听：听句子 --- 想场景</span>
            <br />
            <span>④说：表达欲 --- 说句子</span>
          </p>
          <h4>
            4.
            <span>根据步骤3.所选的句子简单修改</span>再进行一遍听说读写
          </h4>
        </div>
    </div>
    <div v-if="expand !=true" class="flex-center block-style" @click="expandsDes">
      <h3>
        Tips
        <span v-if="expands != true" class="iconfont icon-unie607"></span>
      </h3>

      <p v-if="expands">
        <br />听说读写阶段尽量是通过选择句子所
        <span>想象的场景</span>进行
        <br />
        <br />中间尽量
        <span>不要涉及中文</span>
        <br />
        <br />如不懂意思的句子可以在英语解释例句选择阶段
        <span>查看翻译</span>，然后再想象场景
        <br />
        <br />
        <span>原因：</span>
        <br />※一旦涉及中文思考，当想用这单词时就是：
        <span>意思→中文→英语</span>
        <br />※不涉及中文思考，当想用这单词时就是：
        <span>意思→英语</span>，
        <br />中间过程就会缩短了一个知识量
      </p>
    </div>
  </section>
</template>

<script>
export default {
  name: "Tip",
  data() {
    return {
      expand: false,
      expands: false
    };
  },
  methods: {
    expandDes: function() {
      if (this.expand != true) {
        this.expand = true;
      } else {
        this.expand = false;
      }
    },
    expandsDes: function() {
      if (this.expands != true) {
        this.expands = true;
      } else {
        this.expands = false;
      }
    }
  }
};
</script>

<style scoped>
.tips {
  width: 90vw;
  padding: 3rem;
}
.block-style {
  margin: 0 1rem 2rem;
  padding: 0rem 3vw;
}
.block-style:hover {
  cursor: pointer;
}
.iconfont {
  font-size: 1.5rem;
}
span {
  color: #0098f8;
} 
</style>