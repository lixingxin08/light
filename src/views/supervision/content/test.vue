<template>
  <div id="supervisionleft">
    <div class="search">
      <a-input-search placeholder="input search text" enter-button="Search" @search="onSearch" />
    </div>
    <div class="istree">
            <a-tree
      :show-line="true"
      :show-icon="false"
      :default-expanded-keys="['0-0-0', '0-0-1', '0-0-2']"
      @select="onSelect"
    >
      <a-icon slot="icon" type="carry-out" />
      <a-tree-node key="0-0">
        <a-icon slot="icon" type="carry-out" />
        <span slot="title" style="color: #1890ff">parent 1</span>
        <a-tree-node key="0-0-0" title="parent 1-0">
          <a-icon slot="icon" type="carry-out" />
          <a-tree-node key="0-0-0-0" title="leaf">
            <a-icon slot="icon" type="carry-out" />
          </a-tree-node>
          <a-tree-node key="0-0-0-1" title="leaf">
            <a-icon slot="icon" type="carry-out" />
          </a-tree-node>
          <a-tree-node key="0-0-0-2" title="leaf">
            <a-icon slot="icon" type="carry-out" />
          </a-tree-node>
        </a-tree-node>
        <a-tree-node key="0-0-1" title="parent 1-1">
          <a-icon slot="icon" type="carry-out" />
          <a-tree-node key="0-0-1-0" title="leaf">
            <a-icon slot="icon" type="carry-out" />
          </a-tree-node>
        </a-tree-node>
        <a-tree-node key="0-0-2" title="parent 1-2">
          <a-icon slot="icon" type="carry-out" />
          <a-tree-node key="0-0-2-0" title="leaf">
            <a-icon slot="icon" type="carry-out" />
          </a-tree-node>
          <a-tree-node key="0-0-2-1" title="leaf">
            <a-icon slot="icon" type="carry-out" />
            <a-icon slot="switcherIcon" type="form" />
          </a-tree-node>
        </a-tree-node>
      </a-tree-node>
    </a-tree>
    </div>

  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    onSearch(value) {
      console.log(value);
    },
    onSelect(selectedKeys, info) {
      console.log("selected", selectedKeys, info);
    },
  },
  watch: {
    checkedKeys(val) {
      console.log("onCheck", val);
    },
  },
};
</script>
<style scope>
#supervisionleft {
  width: 280px;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 3px 20px rgba(0, 0, 0, 0.16);
  opacity: 0.8;
  box-sizing: border-box;
  height: 100%;
  padding: 20px;
}
.search {
  width: 240px;
  height: 36px;
  background: rgba(255, 255, 255, 1);
  opacity: 1;
  border-radius: 4px;
}
.istree{
    width: 100%;
    height: 100%;
}
</style>