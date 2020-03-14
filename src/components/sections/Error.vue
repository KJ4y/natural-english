<template>
  <section class="error flex-center">
    <h3>发生错误！！！</h3>

    <h4>可能原因①：</h4>
    <span>查询不到此单词解释：请填写正确的单词或更换单词。</span>
    <h4>可能原因②：</h4>
    <span>网络发生错误：请更换网络或过段时间再试试。</span>
    <h4>可能原因③：</h4>
    <span>鬼知道还有什么原因：除以上两条还发现什么错误，欢迎随时反馈。</span>
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