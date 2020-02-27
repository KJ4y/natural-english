<template>
  <div class="cont">
    <div class="exp-cont" v-if="cont">
      <button class="visBtn" @click="prevPage">Explanation</button>
      <button class="disBtn" @click="nextPage">Example</button>
      <div class="explan vis" v-if="expvisible">
        <h3>Explanation</h3>
        <div class="explan-cont" v-for="item in explan()" :key="item">
          <div class="word-cate">
            <h4>{{ item[0] }}</h4>
            <p class="word-explan">
              <span v-html="item[1][0][0]"></span>
            </p>
          </div>
        </div>
      </div>
      <div class="example vis" v-if="exavisible">
        <h3>Example</h3>
        <div class="example-cont" v-for="item in example()" :key="item">
          <p>
            <a>
              <span v-html="item[0]"></span>
            </a>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Explanation",
  data() {
    return {
      expvisible: true,
      exavisible: false
    };
  },
  props: {
    cont: String
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
    },
    prevPage: function() {
      (this.expvisible = true), (this.exavisible = false);
    },
    nextPage: function() {
      (this.expvisible = false), (this.exavisible = true);
    }
  }
};
</script>

<style scoped>
.exp-cont {
  min-width: 0vw;
  max-width: 70vw;

  font: 1.5rem Arial;
}

.vis {
  background-color: #fff;
  border-radius: 1rem;
  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.37);

  padding: 3vw;
}

.explan {
  margin-top: 2rem;
}
.example {
  margin-top: 1rem;
}

h3 {
  color: #0098f8;
}

.visBtn {
  width: 5rem;
  height: 2.5rem;
  color: #fff;
  font: 500;
  background-color: #0098f8;
  border: hidden;
  border-radius: 1rem 1rem 0 0;

  margin-bottom: -10rem;
}

.disBtn {
  width: 5rem;
  height: 2.5rem;
  color: #0098f8;
  font: 500;
  background-color: #98d0f8;
  border: hidden;
  border-radius: 1rem 1rem 0 0;
}
button:hover {
  color: #fff;
  background-color: #0098f8;
}
a:hover {
  cursor: pointer;
}
</style>