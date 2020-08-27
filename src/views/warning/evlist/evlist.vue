<!-- 事件列表 -->
<template>
  <div class="content flex_fs" style="background-color: #FFFFFF;">
    <isLeft></isLeft>
    <div class="flexcolumn">
      <is-head></is-head>
      <a-table :scroll="{  y: 700 }" :locale="locale" :row-selection="{ selectedRowKeys: selectedRowKeys, onChange: onSelectChange }"
        :columns="columns" :data-source="data" bordered size="small" :pagination="pagination">

      </a-table>
    </div>
  </div>
</template>

<script>
  import isLeft from '../content/left.vue'
  import isHead from '../content/head.vue'
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
  }
</script>

<style>
</style>
