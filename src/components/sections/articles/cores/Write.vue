<template>
  <article class="write flex-center">
    <div class="block-style" v-if="sentence">{{ sentence }}</div>
    <div class="block-style" v-else>{{ showplace }}</div>
    <!-- <div class="block-style" v-if="sentence">{{ showplace }}</div>
    <div class="block-style" v-else-if="thattrue">{{ showplace }}</div> -->
    <div class="textare-style">
      <input type="text" v-model="sentence" @change="isTrue" />
    </div>
  </article>
</template>

<script>
export default {
  name: "Write",
  props: {
    examed: null
  },
  data() {
    return {
      thattrue: false,
      sentence: null,
      showplace: "请根据上节句子想象的场景输入默写一遍"
    };
  },
  methods: {
    isTrue: () => {
      if (this.sentence == this.examed) {
        this.thattrue = true;
      } else {
        this.thattrue = false;
      }
    }
  }
};
</script>

<style scoped>
.block-style {
  margin-top: 2rem;
  color: #fff;
  font-size: 2.5rem;
  background-color: #98d0f8;
}
.textare-style {
  margin-top: 1rem;
  margin-bottom: 2rem;
}

input {
  width: 100%;
  /* margin-bottom: 2rem; */
  border-style: hidden hidden solid hidden;
  border-width: 2px;
  border-color: #000;
  /* padding-bottom:0.8rem; */
  overflow: hidden;
  color: #0099f8;
  font: 2rem Arial;
  font-weight: bold;
  text-align: center;
  background-color: #ffffff00;
  resize: none;
  /* box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.37);
  border-radius: 1rem; */
}

button {
  color: #0098f8;
  background-color: #98d0f8;

  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.37);
  text-align: center;
  /* width: 2rem;
  height: 0.5rem; */
  font-family: Arial;
  border: hidden;
  margin: 0 0.3rem;
  border-radius: 5rem;
}


</style>