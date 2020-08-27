<!-- 警报列表 -->
<template>
  <div class="content flex_fs" style="background-color: #FFFFFF;">
    <isLeft></isLeft>
    <is-right ></is-right>
  </div>
</template>
<script>
  import isLeft from './content/left.vue'
  import isRight from './content/right.vue'
  export default {
    components: {
      isRight,
      isLeft
    },
    data() {
      return {
        isShowAdd: false
      }
    },
  };
</script>
<style>


</style>
