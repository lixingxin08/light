<template>
  <a-layout-sider v-model="iscollapsed" :trigger="null" collapsible collapsedWidth="0">
    <div class="logo" />
    <a-menu theme="dark" mode="inline" :defaultSelectedKeys="[$route.name]" :selectedKeys="[$route.name]">
      <a-menu-item key="supervision">
        <!-- <a-icon type="calendar" /> -->
        <router-link to="/home/supervision">
          <span>运行监管</span>
        </router-link>
      </a-menu-item>
      <a-menu-item key="logfile">
        <router-link to="/logfile">
          <span>操作日志</span>
        </router-link>
      </a-menu-item>
      <a-menu-item key="runset">
        <!-- <a-icon type="upload" /> -->
        <router-link to="/runset">
          <span>运行设置</span>
        </router-link>
      </a-menu-item>
      <a-menu-item key="taskset">
        <!-- <a-icon type="upload" /> -->
        <router-link to="/taskset">
          <span>任务设置</span>
        </router-link>
      </a-menu-item>
      <a-menu-item key="warning">
        <!-- <a-icon type="upload" /> -->
        <router-link to="/warning">
          <span>系统警告</span>
        </router-link>
      </a-menu-item>
      <a-menu-item key="dataanaly">
        <!-- <a-icon type="upload" /> -->
        <router-link to="/dataanaly">
          <span>数据分析</span>
        </router-link>
      </a-menu-item>
    </a-menu>
  </a-layout-sider>
</template>
<script>
export default {
  name:"isnav",
  props: {
    iscollapsed: Boolean,
  },
};
</script>
