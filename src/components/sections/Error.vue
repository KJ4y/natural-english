<template>
  <section class="error flex-center">
    <h3>发生错误！！！</h3>

    <h4>可能原因①：</h4>
    <span>查询不到此单词。</span>
    <h4>可能原因②：</h4>
    <span>此IP访问请求已达到上限，请过段时间再来学习或更换网络。</span>
  </section>
</template>

<script>
export default {
  name: "Error"
};
</script>

<style scoped>
.error {
  background-color: #fff;
  border-radius: 1rem;
  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.37);

  padding: 3vw;
  font: 1.5rem Arial;
  margin-bottom: 5rem;
}
</style>