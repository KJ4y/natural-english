<template>
  <section class="tips">
    <div v-show="expands !=true" class="flex-center tip" @click="expandDes">
      <h3>
        使用方法
        <span v-show="expand != true" class="iconfont icon-10"></span>
      </h3>
      <div v-show="expand">
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
    <div v-show="expand !=true" class="flex-center tip" @click="expandsDes">
      <h3>
        Tips
        <span v-show="expands != true" class="iconfont icon-10"></span>
      </h3>
      <p v-show="expands">
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
    <div class="tip" @click="joinQQClub">
      <h3>
        加入交流群
        <span class="iconfont icon-10"></span>
      </h3>
      <iframe v-if="click" v-show="show" :src="qqurl" frameborder="0"></iframe>
    </div>
  </section>
</template>

<script>
export default {
  name: "Tip",
  data() {
    return {
      expand: false,
      expands: false,
      qqurl:
        "http://qm.qq.com/cgi-bin/qm/qr?from=app&p=android&k=PD9LUy84uenfh9VOS66f0ZCVjAe0d_LQ",
      click: false,
      show: false
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
    },
    joinQQClub: function() {
      if (this.click == false) {
        this.click = true;
      } else {
        this.click = false;
      }
    }
  }
};
</script>

<style scoped>
.tips {
  padding: 3rem;
}
.tip {
  background-color: #fff;
  border-radius: 1rem;
  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.37);
  font: 1.5rem Arial;

  margin-bottom: 2rem;
  padding: 0rem 1rem;
}

.tip:hover {
  cursor: pointer;
}
.iconfont {
  font-size: 1.5rem;
}
.icon-10 {
  border-radius: 5rem;
}

span {
  color: #0098f8;
}

a,
a:visited {
  color: #0098f8;
  text-decoration: none;
}
</style>