<template>
  <div class="flex_ps">
    <div class="ps_flex">
      <div class="flexrow flexsb">
        <div class="dialog_title">编辑转警设置</div>
        <a-icon type="close" />
      </div>

      <div class="flexrow flexac" style="margin-top: 10px;">
        <div class="edit_title">警报名称:</div>
        <a-input></a-input>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        formLayout: 'horizontal',
        form: this.$form.createForm(this, {
          name: 'coordinated'
        }),
      }
    },
    methods: {
      handleSubmit(e) {
        e.preventDefault();
        this.form.validateFields((err, values) => {
          if (!err) {
            console.log('Received values of form: ', values);
          }
        });
      },
    }
  }
</script>

<style>
.edit_item{
  width: 700px;
  margin-top: 5px;
}
.edit_title{
  font-size:16px;
  font-family:Microsoft YaHei;
  font-weight:400;
  line-height:14px;
  flex-shrink: 0;

  margin-right: 10px;
  color:rgba(51,51,51,1);
  opacity:1;
}
</style>
