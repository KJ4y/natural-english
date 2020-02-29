<template>
  <transition name="fade">
    <div class="exp-cont" v-if="cont">
      <transition name="fade">
        <div class="btn-layout">
          <button class="btn" @click="expVis">Explanation</button>
          <button class="btn visBtn" @click="exaVis">Example</button>
          <button class="btn" @click="expVis">Read</button>
          <button class="btn" @click="exaVis">Wirte</button>
          <button class="btn" @click="expVis">Listen</button>
          <button class="btn" @click="exaVis">Speak</button>
          <button class="btn" @click="exaVis">Revise</button>
        </div>
      </transition>

      <div class="explan vis" v-if="expvis">
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

      <div class="example vis" v-if="exavis">
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
  </transition>
</template>

<script>
export default {
  name: "Explanation",
  data() {
    return {
      expvis: true,
      exavis: false,
    };
  },
  props:{
    cont:null
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
    expVis: function() {
      if (!this.expvis) {
        this.expvis = true;
        this.exavis = false;
      }
    },
    exaVis: function() {
      if (!this.exavis) {
        this.exavis = true;
        this.expvis = false;
      }
    }
  }
};
</script>

<style scoped>
.exp-cont {
  display: flex;
  flex-direction: column;
  align-items: center;

  min-width: 0vw;
  max-width: 70vw;
}

.vis {
  background-color: #fff;
  border-radius: 1rem;
  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.37);

  padding: 3vw;
  font: 1.5rem Arial;
  margin-bottom: 5rem;
}



.btn-layout {
  width: 100%;
  display: flex;
  flex-direction: row;
  align-self: center;
  justify-content: center;
}

.btn {
  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.37);
  text-align: center;
  width: 5rem;
  height: 2.5rem;
  font-family: Arial;
  border: hidden;
  /* margin-right: .1rem; */
  border-radius: 1rem 1rem 0 0;
}
.visBtn {
  color: #fff;
  background-color: #0098f8;
}
.disBtn {
  color: #0098f8;
  background-color: #98d0f8;
}
button:hover {
  color: #fff;
  background-color: #98d0f8;
}
a:hover {
  cursor: pointer;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>