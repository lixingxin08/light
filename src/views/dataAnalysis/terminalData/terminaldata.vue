<!-- 终端运行数据 -->
<template>
  <div class="flexrow" style="background-color: #FFFFFF;">
    <is-left></is-left>
    <div class="flexcolumn" style="width: 100%;">
      <is-head :isShowButton='false' :isShowDownLoad='true' @dateSelect="dateSelect" @showSetting='closeOrShowEditField'></is-head>
      <a-table :scroll="{  y: 700 }" :row-selection="{ selectedRowKeys: selectedRowKeys, onChange: onSelectChange }"
        :columns="columns" :data-source="data" bordered size="small" :pagination="pagination">
      </a-table>
    </div>
  </div>
</template>

<script>
  import isLeft from '../../supervision/content/left.vue'
  import isHead from '../head/head.vue'
  const columns = [{
      title: 'No',
      dataIndex: 'key',
      align: 'center',
      ellipsis: true
    }, {
      title: '中控名称',
      dataIndex: 'name',
      align: 'center',
      ellipsis: true
    },
    {
      title: '终端名称',
      dataIndex: 'age',
      align: 'center',
      ellipsis: true
    },
    {
      title: '终端编号',
      align: 'center',
      ellipsis: true
    },
    {
      title: '采集时间',
      align: 'center',
      ellipsis: true
    },
    {
      title: '电压(V)',
      align: 'center',
      ellipsis: true
    }, {
      title: '电流(A)',
      dataIndex: 'address',
      align: 'center',
      ellipsis: true
    },
    {
      title: '功率(W)',
      align: 'center',
      ellipsis: true
    },
    {
      title: '功率因素',
      align: 'center',
      ellipsis: true
    },
    {
      title: '点亮时长(h)',
      align: 'center',
      ellipsis: true
    },
    {
      title: '能耗(kWh)',
      align: 'center',
      ellipsis: true
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
      isLeft: isLeft, //左边树选择
      isHead: isHead, //头部
    },
    data() {
      return {
        data, //table list 数据
        columns, //table 标题数据
        isShowEditField: false,
        selectedRowKeys: [], //选中的key
        pagination: {
          pageSize: 20, // 默认每页显示数量
          showSizeChanger: true, // 显示可改变每页数量
          pageSizeOptions: ['10', '20', '30', '40'], // 每页数量选项
          showQuickJumper: true, //是否展示跳转/*  */
          showSizeChange: (current, pageSize) => this.pageSize = pageSize, // 改变每页数量时更新显示
        }
      };
    },

    methods: {

      /*
      选中item回调
      @param selectedRowKeys 回调的key值
      */
      onSelectChange(selectedRowKeys) {
        console.log('selectedRowKeys changed: ', selectedRowKeys);
        this.selectedRowKeys = selectedRowKeys;
      },
      /*
      时间选择器回调
      @param startTime 开始时间
      @param endTime 结束时间
      */
      dateSelect(startTime, endTime) {

      },
      closeOrShowEditField(b) {
        this.isShowEditField = b
      }
    },
  }
</script>

<style>
</style>
