<!-- 警报关注 -->
<template>
  <div style="padding: 10px;">
    <div class="search">
      <a-input-search placeholder="" enter-button="搜索" size="default" />
    </div>
    <a-table :scroll="{  y: 700 }" :row-selection="{ selectedRowKeys: selectedRowKeys, onChange: onSelectChange }"
      :columns="columns" :data-source="data" bordered size="small" :pagination="pagination">
      <template slot="open" slot-scope="text, record">
        <a-switch size='small'></a-switch>
      </template>
      <template slot="operation" slot-scope="text, record">
        <a href="#" style='font-size: 12px;' @click="editPolice(item)">编辑</a>
      </template>
    </a-table>
    <is-edit-police v-show="isShowEditPolice" :policeInfo="dd" @closeEditPolice="closeEditPolice"></is-edit-police>
  </div>
</template>

<script>
  import isEditPolice from './editpolice.vue'
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
      title: '警报等级',
      dataIndex: 'address',
      align: 'center',
    },
    {
      title: '转警类型',
      align: 'center',
    },
    {
      title: '转警来源',
      align: 'center',
    },
    {
      title: '条件类型',
      align: 'center',
    },
    {
      title: '条件参数',
      align: 'center',
    },
    {
      title: '警报说明',
      align: 'center',
    },
    {
      title: '是否启用',
      align: 'center',
      scopedSlots: {
        customRender: 'open'
      }
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
    components: {
      isEditPolice: isEditPolice
    },
    data() {
      this.cacheData = data.map(item => ({ ...item
      }));
      return {
        data, //table 数据
        columns, //table 标题
        isShowEditPolice: false, //是否展示编辑框
        selectedRowKeys: [], //选中的key
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
      onSelectChange(selectedRowKeys) { //选中item 事件
        console.log('selectedRowKeys changed: ', selectedRowKeys);
        this.selectedRowKeys = selectedRowKeys;
      },
      editPolice(item) { //编辑报警事件
        this.isShowEditPolice = !this.isShowEditPolice
      },
      closeEditPolice() {
         this.isShowEditPolice = !this.isShowEditPolice
      }
    }
  }
</script>

<style>
  .search {
    width: 250px;
    margin-bottom: 10px;
  }
</style>
