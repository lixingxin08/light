<template>
  <a-layout-header
    style="background: #fff; padding: 0;text-align:left;height:60px;line-height:60px"
  >
    <a-breadcrumb class="bread">
      <a-breadcrumb-item v-for="(item,index) in breaddata" :key="index">
        <span :class="index==breaddata.length-1?'color1':'color2'">{{item}}</span>
      </a-breadcrumb-item>
    </a-breadcrumb>
  </a-layout-header>
</template>
<script>
export default {
  data() {
    return {
      iscollapsed: false,
      breaddata: ["Home", "child1", "child2"],
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
.bread {
  padding-left: 24px;
  height: 60px;
  line-height: 60px;
}
.tittle {
  margin-left: 0.24rem;
  
}
.color1{
  color: #333;
}
.color2{
  color: #999;
}
</style>