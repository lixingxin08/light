<template>
  <a-layout-header style="background: #fff; padding: 0;text-align:left;height:60px;line-height:60px">
    <div class="tittle" @click="changecollapsed()">首页/运行监管</div>
  </a-layout-header>
</template>
<script>
export default {
  data() {
    return {
      iscollapsed: false,
    };
  },
  methods: {
    changecollapsed() {
      this.iscollapsed = !this.iscollapsed;
      this.$emit("tocollapsed", this.iscollapsed);
      
    },
  },
};
</script>
<style  scoped>
.tittle{
  margin-left: 0.24rem;
}
</style>