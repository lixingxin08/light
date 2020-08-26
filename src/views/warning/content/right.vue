<!-- 警报列表 -->
<template>
  <div style="padding: 20px;width: 100%;">
    <div class="flexrow flexac">
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
      警报时间:

      <a-date-picker v-model="startValue" :disabled-date="disabledStartDate" show-time format="YYYY-MM-DD HH:mm:ss"
        placeholder="开始时间" @openChange="handleStartOpenChange" />-
      <a-date-picker v-model="endValue" :disabled-date="disabledEndDate" show-time format="YYYY-MM-DD HH:mm:ss"
        placeholder="结束时间" :open="endOpen" @openChange="handleEndOpenChange" />
    </div>
    <div class="flex_b" style="margin-bottom: 10px;margin-top: 10px;">
      <div class="search">
        <a-input-search placeholder="" enter-button="搜索" size="default" />
      </div>
      <!-- <a-button type="primary">
        新增模板
      </a-button> -->
    </div>
    <a-table :scroll="{  y: 700 }" :locale="locale" :row-selection="{ selectedRowKeys: selectedRowKeys, onChange: onSelectChange }"
      :columns="columns" :data-source="data" bordered size="small" :pagination="pagination">
      <template slot="operation" slot-scope="text, record, index">
        <div class="editable-row-operations">
          <a style="color: #FF0000;" @click="() => save(record.key)">删除</a>
          <div style="width: 1px;height: 20px; background: #e5e5e5;"></div>
          <a @click="() => save(record.key)">编辑</a>
        </div>
      </template>
    </a-table>
  </div>
</template>

<script>
  const columns = [{
      title: '序号',
      dataIndex: 'key',
      width: '5%',
      align: 'center',
      render: (text, record, index) => `${index+1}`,
      scopedSlots: {
        customRender: 'key'
      },
    }, {
      title: 'name',
      dataIndex: 'name',
      align: 'center',
      width: '25%',
      scopedSlots: {
        customRender: 'name'
      },
    },
    {
      title: 'age',
      dataIndex: 'age',
      width: '15%',
      align: 'center',
      scopedSlots: {
        customRender: 'age'
      },
    },
    {
      title: 'address',
      dataIndex: 'address',
      width: '20%',
      align: 'center',
      scopedSlots: {
        customRender: 'address'
      },
    },
    {
      title: 'operation',
      dataIndex: 'operation',
      align: 'center',
      scopedSlots: {
        customRender: 'operation'
      },
    },
  ];

  const data = [];
  for (let i = 0; i < 100; i++) {
    data.push({
      key: (i + 1).toString(),
      name: `Edrward ${i}`,
      age: 32,
      address: `London Park no. ${i}`,
    });
  }
  export default {
    data() {
      this.cacheData = data.map(item => ({ ...item
      }));
      return {
        data,
        columns,
        selectedRowKeys: [],
        editingKey: '',
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
        pagination: {
          pageSize: 20, // 默认每页显示数量
          showSizeChanger: true, // 显示可改变每页数量
          pageSizeOptions: ['10', '20', '30', '40'], // 每页数量选项
          showQuickJumper: true,
          showSizeChange: (current, pageSize) => this.pageSize = pageSize, // 改变每页数量时更新显示
        }
      };
    },
    computed: {
      hasSelected() {
        return this.selectedRowKeys.length > 0;
      },
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
      start() {
        this.loading = true;
        // ajax request after empty completing
        setTimeout(() => {
          this.loading = false;
          this.selectedRowKeys = [];
        }, 1000);
      },
      onSelectChange(selectedRowKeys) {
        console.log('selectedRowKeys changed: ', selectedRowKeys);
        this.selectedRowKeys = selectedRowKeys;
      },
      handleChange(value, key, column) {
        const newData = [...this.data];
        const target = newData.filter(item => key === item.key)[0];
        if (target) {
          target[column] = value;
          this.data = newData;
        }
      },
      edit(key) {
        const newData = [...this.data];
        const target = newData.filter(item => key === item.key)[0];
        this.editingKey = key;
        if (target) {
          target.editable = true;
          this.data = newData;
        }
      },
      onSelectChange(selectedRowKeys) {
        console.log('selectedRowKeys changed: ', selectedRowKeys);
        this.selectedRowKeys = selectedRowKeys;
      },
      save(key) {
        const newData = [...this.data];
        const newCacheData = [...this.cacheData];
        const target = newData.filter(item => key === item.key)[0];
        const targetCache = newCacheData.filter(item => key === item.key)[0];
        if (target && targetCache) {
          delete target.editable;
          this.data = newData;
          Object.assign(targetCache, target);
          this.cacheData = newCacheData;
        }
        this.editingKey = '';
      },
      cancel(key) {
        const newData = [...this.data];
        const target = newData.filter(item => key === item.key)[0];
        this.editingKey = '';
        if (target) {
          Object.assign(target, this.cacheData.filter(item => key === item.key)[0]);
          delete target.editable;
          this.data = newData;
        }
      },
    },

  };
</script>

<style scoped>
  .editable-row-operations a {
    margin-right: 8px;
    margin-left: 8px;
  }

  .editable-row-operations {
    display: flex;
    justify-content: center;
    flex-direction: row;
  }
</style>
