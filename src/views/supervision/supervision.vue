<template>
  <div class="supervisionhome">
    <is-top></is-top>
    <div class="content flex_fs">
      <is-left></is-left>
      <is-right></is-right>
    </div>
  </div>
</template>
<script>
import isTop from "./top/top";
import isLeft from "./content/left";
import isRight from "./content/right";
export default {
  components: {
    isTop,
    isLeft,
    isRight,
  },
};
</script>
<style  scoped>

.supervisionhome{
    height: 9.6rem;
}
.content {
  width: 100%;
  height:8.6rem;
}
</style>