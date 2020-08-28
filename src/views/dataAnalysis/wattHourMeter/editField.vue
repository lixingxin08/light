<template>
  <div class="flex_ps">
    <div class="ps_flex dialog_scroll" style="padding: 0px;">
      <div class="flexrow flexsb flexac" style="background:#1890FF;padding: 20px;color: #FFFFFF;border-top-right-radius: 8px;border-top-left-radius: 8px;">
        <div class="dialog_title">字段排序/隐藏设置</div>
        <a-icon type="close" :style="{ fontSize: '18px',color:'#ffffff'}" @click="closeDialog" />
      </div>
      <a-table style='margin: 20px;' :columns="columns" :data-source="data" bordered size="small" :pagination='false'>
        <template slot="paxu" slot-scope="text, record">

          <a-icon type="arrow-up" />
          <a-icon type="arrow-down" />
        </template>
        <template slot="operation" slot-scope="text, record">

          <a-checkbox size='small'></a-checkbox>

        </template>
      </a-table>
      <a-button type='primary' style='margin-bottom: 30px;'>保存</a-button>
    </div>
  </div>
</template>

<script>
  const columns = [{
      title: '字段排序',
      dataIndex: 'key',
      align: 'center',
      scopedSlots: {
        customRender: 'paxu'
      },
    }, {
      title: '字段名称',
      dataIndex: 'name',
      align: 'center',
      ellipsis: true
    },
    {
      title: '选择隐藏',
      dataIndex: 'age',
      align: 'center',
      scopedSlots: {
        customRender: 'operation'
      },
    }
  ];
  const data = [];
  for (let i = 0; i < 12; i++) {
    data.push({
      key: (i + 1).toString(),
      name: `Edrward ${i}`,
      age: 32,
      address: `London Park no. ${i}`,
    });
  }
  export default {
    data() {
      return {
        data,
        columns
      }
    },
    methods: {
      closeDialog() {
        this.$emit('closeOrShowEditField', false);
      }
    }
  }
</script>

<style>
  .dialog_scroll {
    border-radius: 8px;
    background: #ffffff;
    box-shadow: 0px 0px 20px 0px #cccccc;

  }
</style>
