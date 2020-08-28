<!-- 警报列表 -->
<template>
  <div style="width: 100%;">
    <div class="flexrow flexac flexsb">
      <is-head></is-head>
      <div class="flexrow flexac"style="margin-right: 10px;">
        <a-icon type="setting" :style="{ color: '#1890FF',fontSize: '20px' }" style='margin-right: 10px;' />
        <a-icon type="download" :style="{ color: '#1890FF',fontSize: '20px',}"  />
      </div>

    </div>
    <div class="flex_b" style="margin-bottom: 10px;">
      <div class="search">
        <a-input-search placeholder="" enter-button="搜索" size="default" />
      </div>
    </div>
    <a-table :scroll="{  y: 700 }" :row-selection="{ selectedRowKeys: selectedRowKeys, onChange: onSelectChange }"
      :columns="columns" :data-source="data" bordered size="small" :pagination="pagination">
    </a-table>
  </div>
</template>

<script>
  import isHead from './head.vue'
  const columns = [{//table 标题 数据
      title: 'No',
      dataIndex: 'key',
      align: 'center',
      ellipsis: true
    }, {
      title: '所属区域',
      dataIndex: 'name',
      align: 'center',
      ellipsis: true
    },
    {
      title: '设备类型',
      dataIndex: 'age',
      align: 'center',
      ellipsis: true
    },
    {
      title: '设备名称',
      align: 'center',
      ellipsis: true
    },
    {
      title: '警报类型',
      align: 'center',
      ellipsis: true
    },
    {
      title: '警报时间',
      align: 'center',
      ellipsis: true
    }, {
      title: '警报内容',
      dataIndex: 'address',
      align: 'center',
      ellipsis: true
    },
    {
      title: '警报状态',
      align: 'center',
      ellipsis: true
    },
    {
      title: '累计天数',
      align: 'center',
      ellipsis: true
    },
    {
      title: '工作状态',
      align: 'center',
      ellipsis: true
    },
    {
      title: '推送状态',
      align: 'center',
      ellipsis: true
    },
    {
      title: '处理时间',
      align: 'center',
      ellipsis: true
    },
    {
      title: '操作处理',
      align: 'center',
      ellipsis: true
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

    components: {
      isHead: isHead//头部view
    },
    data() {
      return {
        data,//table list 数据
        columns,//table 标题数据
        selectedRowKeys: [],//选中的key值
        pagination: {
          pageSize: 20, // 默认每页显示数量
          showSizeChanger: true, // 显示可改变每页数量
          pageSizeOptions: ['10', '20', '30', '40'], // 每页数量选项
          showQuickJumper: true,//是否展示跳转
          showSizeChange: (current, pageSize) => this.pageSize = pageSize, // 改变每页数量时更新显示
        }
      };
    },
    computed: {
      hasSelected() {
        return this.selectedRowKeys.length > 0;
      },
    },

    methods: {
      /* 
      选择table item 回调
      @param selcetedRowKeys 选中的key值
      */
      onSelectChange(selectedRowKeys) {
        console.log('selectedRowKeys changed: ', selectedRowKeys);
        this.selectedRowKeys = selectedRowKeys;
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
