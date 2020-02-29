<template>
  <article class="example" v-if="cont">
    <div class="example vis" >
        <h3>Example</h3>
        <div class="example-cont" v-for="item in example()" :key="item">
          <p>
            <a>
              <span v-html="item[0]"></span>
            </a>
          </p>
        </div>
      </div>
  </article>
</template>

<script>
export default {

}
</script>

<style scoped>

</style>