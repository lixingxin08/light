<!-- 警报关注 -->
<template>
  <div class="children_content">
    <div class="flexrow flexac" style="justify-content: flex-end;margin-bottom: 10px;">
      <a-button type="primary" style='margin-right: 20px;'>删除</a-button>
      <a-button type="primary">新增</a-button>
    </div>
    <a-table :scroll="{  y: 700 }" :row-selection="{ selectedRowKeys: selectedRowKeys, onChange: onSelectChange }"
      :columns="columns" :data-source="data" bordered size="small" :pagination="pagination">
      <template slot="operation" slot-scope="text, record">
        <div class="flexrow flexac flexjc">
          <a-popconfirm title="Are you sure delete this task?" ok-text="确定" cancel-text="取消" @confirm="confirm" @cancel="cancel">
            <a href="#" style='color: #FF0000;font-size: 12px;'>删除</a>
          </a-popconfirm>
          <div style="height: 20px;width: 1px;background-color: #e5e5e5;margin-left: 10px;margin-right: 10px;"></div>
          <a href="#" style='font-size: 12px;'>编辑</a>
        </div>
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
      title: '操作',
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
      confirm(e) {
        console.log(e);
      },
      cancel(e) {
        console.log(e);
      },
    }
  }
</script>

<style>
</style>
