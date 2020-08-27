<!-- 警报关注 -->
<template>
  <div>
    <a-table :scroll="{  y: 700 }" :row-selection="{ selectedRowKeys: selectedRowKeys, onChange: onSelectChange }"
      :columns="columns" :data-source="data" bordered size="small" :pagination="pagination">
      <template slot="operation" slot-scope="text, record">

         <a-switch size='small'></a-switch>

      </template>
    </a-table>
  </div>
</template>

<script>
  const columns = [{
      title: 'No',
      dataIndex: 'key',
      width: '50px',
      align: 'center',
    }, {
      title: '警报名称',
      dataIndex: 'name',
      align: 'center',
    },
    {
      title: '警报类型',
      dataIndex: 'age',
      align: 'center',
    },
    {
      title: '警报说明',
      dataIndex: 'address',
      width: '40%',
      align: 'center',
    },
    {
      title: '警报等级',
      align: 'center',
    },
    {
      title: '是否关注',
      dataIndex: 'operation',
      align: 'center',
      scopedSlots: {
        customRender: 'operation'
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
