<template>
    <a-layout-sider v-model="iscollapsed" :trigger="null" collapsible collapsedWidth='0'>
      <div class="logo" />
      <a-menu theme="dark" mode="inline" :default-selected-keys="['1']">
        <a-menu-item key="1">
          <a-icon type="user" />
          <!-- <a-icon type="calendar" /> -->
          <span>运行监管</span>
        </a-menu-item>
        <a-menu-item key="2">
          <a-icon type="plus-square" />
          <span>nav 2</span>
        </a-menu-item>
        <a-menu-item key="3">
          <!-- <a-icon type="upload" /> -->
          <span>nav 3</span>
        </a-menu-item>
      </a-menu>
    </a-layout-sider>
</template>
<script>
export default {
    props:{
        iscollapsed:Boolean
    }
}
</script>
