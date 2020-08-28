<template>
  <div class="flexrow flexac flexsb" style="padding: 20px;">
    <div class="flexrow flexac">
      <div style="margin-left: 10px;margin-right: 10px;">采集时间:</div>
      <a-date-picker v-model="startValue" :disabled-date="disabledStartDate" show-time format="YYYY-MM-DD HH:mm:ss"
        placeholder="开始时间" @openChange="handleStartOpenChange" />
      <div style="margin-left: 10px;margin-right: 10px;">-</div>
      <a-date-picker v-model="endValue" :disabled-date="disabledEndDate" show-time format="YYYY-MM-DD HH:mm:ss"
        placeholder="结束时间" :open="endOpen" @openChange="handleEndOpenChange" />
      <a-button v-if='isShowButton' type="primary" style='margin-left: 10px;'>耗能分析</a-button>
    </div>
    <div class="flexrow flexac" style="margin-right: 10px;">
      <a-icon v-if='isShowSetting' type="setting" :style="{ color: '#1890FF',fontSize: '20px' }" style='margin-right: 10px;' @click='settingOnClick'/>
      <a-icon v-if='isShowDownLoad' type="download" :style="{ color: '#1890FF',fontSize: '20px',}" />
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      isShowSetting: {
        type: Boolean, //可指定接收类型
        default: false //可设置默认值
      },
      isShowDownLoad: {
        type: Boolean, //可指定接收类型
        default: false //可设置默认值
      },
      isShowButton: {
        type: Boolean, //可指定接收类型
        default: true //可设置默认值
      },
    },
    data() {
      return {
        startValue: null,
        endValue: null,
        endOpen: false,
      }
    },
    watch: {
      startValue(val) {
        console.log('startValue', val);
      },
      endValue(val) {
        console.log('endValue', val);
      },
    },
    methods: {
      disabledStartDate(startValue) {
        const endValue = this.endValue;
        if (!startValue || !endValue) {
          return false;
        }
        return startValue.valueOf() > endValue.valueOf();
      },
      disabledEndDate(endValue) {
        const startValue = this.startValue;
        if (!endValue || !startValue) {
          return false;
        }
        return startValue.valueOf() >= endValue.valueOf();
      },
      handleStartOpenChange(open) {
        if (!open) {
          this.endOpen = true;
        }
      },
      handleEndOpenChange(open) {
        this.endOpen = open;
      },
      settingOnClick(){
        this.$emit('showSetting',true);
      }
    }
  }
</script>

<style>
</style>
