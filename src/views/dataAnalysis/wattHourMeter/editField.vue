<template>
  <div class="flex_ps">
    <div class="ps_flex dialog_scroll" style="padding: 0px;">
      <div class="flexrow flexsb flexac" style="background:#1890FF;padding: 20px;color: #FFFFFF;">
        <div class="dialog_title">字段排序/隐藏设置</div>
        <a-icon type="close" :style="{ fontSize: '18px',color:'#ffffff'}" @click="closeDialog" />
      </div>
      <div class="flexcolumn "></div>
    </div>
  </div>
</template>

<script>
  export default {
    methods: {
      closeDialog() {

        this.$emit('closeOrShowEditField', false);
      }
    }
  }
</script>

<style>
  .dialog_scroll {
    border-radius: 8px;
    background: #ffffff;
    box-shadow: 0px 0px 20px 0px #cccccc;

  }
</style>
