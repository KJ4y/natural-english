<template>
  <div class="cont-v" v-if="cont">
    <div class="explan">
      <div class="explan-cont" v-for="item in explan()" :key="item">
        <div class="word-cate">
          {{ item[0] }}
          <div class="word-explan">{{ item[1][0][0] }}</div>
        </div>
      </div>
    </div>
    <div class="example">
      <div class="example-cont" v-for="item in example()" :key="item">
        <p>{{ item[0] }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Explanation",
  props: {
    cont: String
    // explan: String
  },
  methods: {
    explan: function() {
      if (this.cont != null) {
        return this.cont[12];
      }
    },
    example: function() {
      if (this.cont != null) {
        return this.cont[13][0];
      }
    }
  }
};
</script>

<style scoped>
.explan {
  /* display: flex;
  flex-direction: column;
  align-items: center; */
  min-width: 0vw;
  max-width: 60vw;
  /* height: 25vh; */
  background-color: #fff;

  border-radius: 1rem;

  padding: 3vw;
  margin-top: 3rem;

  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.37);
}
.example {
  /* display: flex;
  flex-direction: column;
  align-items: center; */
  /* position: relative; */
  min-width: 0vw;
  max-width: 60vw;
  /* height: 25vh; */
  background-color: #fff;

  border-radius: 1rem;

  padding: 3vw;
  margin-top: 1rem;

  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.37);
}
</style>