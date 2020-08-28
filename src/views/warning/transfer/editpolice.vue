<template>
  <div class="flex_ps">
    <div class="ps_flex dialog_scroll">
      <div class="flexrow flexsb">
        <div class="dialog_title">编辑转警设置</div>
        <a-icon type="close" :style="{ fontSize: '18px',color:'#999999'}" @click="closeDialog"/>
      </div>

      <div class="flexrow flexac" style="margin-top: 10px;">
        <div class="edit_title">警报名称:</div>
        <a-input class='edit_item_select'></a-input>
      </div>
      <div class="flexrow flexac" style="margin-top: 10px;">
        <div class="edit_title">转警类型:</div>
        <a-dropdown>
          <a-menu slot="overlay" @click="handleMenuClick">
            <a-menu-item v-for='(item,index) in policeTypeList' :key="index">
              {{item.name}} </a-menu-item>
          </a-menu>
          <div class="flexrow flexac flexsb edit_item_select">
            kkk
            <a-icon type="down" />
          </div>
        </a-dropdown>
      </div>
      <div class="flexrow flexac" style="margin-top: 10px;">
        <div class="edit_title">转警来源:</div>
        <a-dropdown>
          <a-menu slot="overlay" @click="handleMenuClick">
            <a-menu-item v-for='
              (item,index) in policeTypeList' :key="index">
              {{item.name}} </a-menu-item>
          </a-menu>
          <div class="flexrow flexac flexsb edit_item_select">
            kkk
            <a-icon type="down" />
          </div>
        </a-dropdown>
      </div>
      <div class="flexrow flexac" style="margin-top: 10px;">
        <div class="edit_title">警报类型:</div>
        <a-dropdown>
          <a-menu slot="overlay" @click="handleMenuClick">
            <a-menu-item v-for='(item,index) in policeTypeList' :key="index">
              {{item.name}} </a-menu-item>
          </a-menu>
          <div class="flexrow flexac flexsb edit_item_select">
            kkk
            <a-icon type="down" />
          </div>
        </a-dropdown>
      </div>
      <div class="flexrow flexac" style="margin-top: 10px;">
        <div class="edit_title">警报级别:</div>
        <a-dropdown>
          <a-menu slot="overlay" @click="handleMenuClick">
            <a-menu-item v-for='(item,index) in policeTypeList' :key="index">
              {{item.name}} </a-menu-item>
          </a-menu>
          <div class="flexrow flexac flexsb edit_item_select">
            kkk
            <a-icon type="down" />
          </div>
        </a-dropdown>
      </div>
      <div class="flexrow flexac" style="margin-top: 10px;">
        <div class="edit_title">是否启用:</div>
        <a-switch></a-switch>
      </div>
      <div class="flexrow" style="justify-content: flex-start; ">
        <a-button type='primary' style='margin-top: 20px;' @click='addTermList'>添加条件</a-button>
      </div>

      <div class="flexcolumn add_bg " v-if="termList.length>0">

        <div class="flexrow flexac" v-for="(item,index) in termList" :key="index">
          <a-icon :style="{ fontSize: '20px',color:'#999999'}" type="minus-circle" @click='removeTermItem(index)' />
          <a-dropdown>
            <a-menu slot="overlay" @click="handleMenuClick">
              <a-menu-item v-for='(item,index) in policeTypeList' :key="index">
                {{item.name}} </a-menu-item>
            </a-menu>
            </a-menu>
            <div class="flexrow flexac flexsb add_select_bg">
              kkk
              <a-icon type="down" />
            </div>
          </a-dropdown>
          <a-dropdown>
            <a-menu slot="overlay" @click="handleMenuClick">
              <a-menu-item v-for='(item,index) in policeTypeList' :key="index">
                {{item.name}} </a-menu-item>
            </a-menu>
            </a-menu>
            <div class="flexrow flexac flexsb add_select_bg">
              kkk
              <a-icon type="down" />
            </div>
          </a-dropdown>
          <a-dropdown>
            <a-menu slot="overlay" @click="handleMenuClick">
              <a-menu-item v-for='(item,index) in policeTypeList' :key="index">
                {{item.name}} </a-menu-item>
            </a-menu>
            </a-menu>
            <div class="flexrow flexac flexsb add_select_bg">
              kkk
              <a-icon type="down" />
            </div>
          </a-dropdown>
        </div>
      </div>
      <div class="flexcolumn  edit_item_select" style="margin-top: 20px;align-items: flex-end;">
        <a-textarea style='border: 0px;' placeholder="请输入你的报警说明" :auto-size="{ minRows: 5,  }" @change="onChange" />
        <div style="margin-top: 10px;font-size: 14px;">0/50</div>
      </div>
      <a-button type='primary' style="margin-top: 30px">
        保存
      </a-button>
    </div>
  </div>
</template>

<script>
  export default {
    props:{
      policeInfo:{}
    },

    data() {
      return {
        termList: [],
        policeTypeList: [{
          name: 1
        }, {
          name: 2
        }],
      }
    },
    methods: {
      removeTermItem: function(inde) {
        this.termList = this.termList.splice(index, 1)
      },
      addTermList: function() {
        this.termList.push({})
      },
      handleMenuClick(e) {
        console.log('click', e);
      },
      onChange(e) {
        console.log(e);
      },
      closeDialog(){
        this.$emit('closeEditPolice');
      },
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
  .edit_item_select {
    border: 1px dashed #333333;
    margin-top: 5px;
    padding: 7px;
    border-radius: 3px;
    width: 100%;
  }

  .edit_title {
    font-size: 16px;
    font-family: Microsoft YaHei;
    font-weight: 400;
    line-height: 14px;
    flex-shrink: 0;

    margin-right: 10px;
    color: rgba(51, 51, 51, 1);
    opacity: 1;
  }

  .add_bg {
    padding: 10px;
    margin-top: 20px;

  }

  .add_select_bg {
    width: 120px;
    color: #333333;
    margin: 5px;
    border: 1px solid #e5e5e5;
    padding: 6px;
    font-size: 14px;
  }

  .dialog_scroll {
    overflow: scroll;
    -webkit-overflow-scrolling: touch;
    height: 700px;


  }

</style>
