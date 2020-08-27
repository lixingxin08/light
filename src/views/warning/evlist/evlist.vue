<!-- 事件列表 -->
<template>
  <div class="content flex_fs" style="background-color: #FFFFFF;">
    <isLeft></isLeft>
    <div class="flexcolumn">
      <div class="flexrow  flexsb flexac">
        <is-head></is-head>
        <a-button type="primary" style='margin-right: 10px;'>导出数据</a-button>
      </div>
      <a-table :scroll="{  y: 700 }" :row-selection="{ selectedRowKeys: selectedRowKeys, onChange: onSelectChange }"
        :columns="columns" :data-source="data" bordered size="small" :pagination="pagination">

      </a-table>
    </div>
  </div>
</template>

<script>
  import isLeft from '../content/left.vue'
  import isHead from '../content/head.vue'
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


    components: {
      isLeft: isLeft,
      isHead: isHead
    },
    data() {
      this.cacheData = data.map(item => ({ ...item
      }));
      return {
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
      };
    },
    methods: {
      onSelectChange(selectedRowKeys) {
        console.log('selectedRowKeys changed: ', selectedRowKeys);
        this.selectedRowKeys = selectedRowKeys;
      },
    }
  }
</script>

<style>
</style>
