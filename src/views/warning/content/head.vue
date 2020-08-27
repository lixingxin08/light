<template>
  <div class="flexrow flexac" style="padding: 20px;">
    <a-dropdown>
      <a-menu slot="overlay" @click="handleMenuClick">
        <a-menu-item v-for="(item,index) in downAllDeviceList" :key="index">
          <a-icon type="user" />{{item.name}} </a-menu-item>
      </a-menu>
      <a-button type="primary" style="margin-left: 8px"> 所有设备
        <a-icon type="down" />
      </a-button>
    </a-dropdown>
    <a-dropdown>
      <a-menu slot="overlay" @click="handleMenuClick">
        <a-menu-item v-for="(item,index) in downAllDeviceList" :key="index">
          <a-icon type="user" />{{item.name}} </a-menu-item>
      </a-menu>
      <a-button type="primary" style="margin-left: 8px"> 所有警报
        <a-icon type="down" />
      </a-button>
    </a-dropdown>
    <a-dropdown>
      <a-menu slot="overlay" @click="handleMenuClick">
        <a-menu-item v-for="(item,index) in downAllDeviceList" :key="index">
          <a-icon type="user" />{{item.name}} </a-menu-item>
      </a-menu>
      <a-button type="primary" style="margin-left: 8px"> 所有状态
        <a-icon type="down" />
      </a-button>
    </a-dropdown>
    <div style="margin-left: 10px;margin-right: 10px;">警报时间:</div>

    <a-date-picker v-model="startValue" :disabled-date="disabledStartDate" show-time format="YYYY-MM-DD HH:mm:ss"
      placeholder="开始时间" @openChange="handleStartOpenChange" />-
    <a-date-picker v-model="endValue" :disabled-date="disabledEndDate" show-time format="YYYY-MM-DD HH:mm:ss"
      placeholder="结束时间" :open="endOpen" @openChange="handleEndOpenChange" />
  </div>
</template>

<script>
  export default{
    data() {
      return {
        downAllDeviceList: [{
          name: '你的设备'
        }, {
          name: '我的设备'
        }, {
          name: '所有设备'
        }],
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
    methods:{
       handleMenuClick(e) {
            console.log('click', e);
          },
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
    }
  }
</script>

<style>
</style>
