<template>
  <div class="flexcolumn" style="width: 100%;padding: 20px;">
    <div class="flexrow flexac flexsb" style="margin-bottom: 20px;">
      <div class="flexrow flexac">
        <div style="margin-left: 10px;margin-right: 10px;">日期:</div>
        <a-date-picker v-model="startValue" :disabled-date="disabledStartDate" show-time format="YYYY-MM-DD HH:mm:ss"
          placeholder="开始时间" @openChange="handleStartOpenChange" />
        <div style="margin-left: 10px;margin-right: 10px;">-</div>
        <a-date-picker v-model="endValue" :disabled-date="disabledEndDate" show-time format="YYYY-MM-DD HH:mm:ss"
          placeholder="结束时间" :open="endOpen" @openChange="handleEndOpenChange" />
      </div>
      <div class="flexrow flexac">
          <a-input-search style="margin-right: 20px;" placeholder enter-button="搜索" size="default" @search="onSearch" />
        <a-button type='primary'>导出数据</a-button>
      </div>
    </div>
    <a-table :scroll="{  y: 700 }" :row-selection="{ selectedRowKeys: selectedRowKeys, onChange: onSelectChange }"
      :columns="columns" :data-source="data" bordered size="small" :pagination="pagination">
    </a-table>
  </div>

</template>

<script>

  const columns = [{
      title: 'No',
      dataIndex: 'key',
     width:'50px',
      align: 'center',
    }, {
      title: '所属区域',
      dataIndex: 'name',
      align: 'center',
    },
    {
      title: '设备类型',
      dataIndex: 'age',
      align: 'center',
    },
    {
       title: '事件类型',
      dataIndex: 'address',
      align: 'center',
    },
    {
       title: '上报时间',
      align: 'center',
    },
    {
       title: '警报内容',
      align: 'center',
    },
    {
       title: '事件状态',
      align: 'center',
    }
    ,
    {
       title: '处理时间',
      align: 'center',
    }
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
        data,
        columns,
        selectedRowKeys: [],
        editingKey: '',

        pagination: {
          pageSize: 20, // 默认每页显示数量
          showSizeChanger: true, // 显示可改变每页数量
          pageSizeOptions: ['10', '20', '30', '40'], // 每页数量选项
          showQuickJumper: true,
          showSizeChange: (current, pageSize) => this.pageSize = pageSize, // 改变每页数量时更新显示
        }
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
      onSearch: function() {},
      onSelectChange(selectedRowKeys) {
        console.log('selectedRowKeys changed: ', selectedRowKeys);
        this.selectedRowKeys = selectedRowKeys;
      },
    }
  }
</script>


<style>
</style>
