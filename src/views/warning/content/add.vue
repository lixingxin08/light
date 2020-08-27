<template>
  <div class="flex_ps">
    <div class="ps_flex">
      <div class="flexrow flexsb">
        <div class="dialog_title">新增模板</div>
        <a-icon type="close" />
      </div>
      <div class="flexrow flexac model_txt">
        <div style="flex-shrink: 0;margin-right: 10px;">模板名称:</div>
        <a-input placeholder="模板名称" />
      </div>
      <div class="flexrow flexsb" style="margin-top: 40px;">
        <div class="flexcolumn align-items">
          <div style="font-size:20px;text-align: start;">基本参数</div>
          <div class="flexrow flexac item_size" >
            <div class="item_x_color">*</div>
            <div class="item_title">心跳间隔</div>
            <a-input class='left_input' placeholder="模板名称" />
          </div>
          <div class="flexrow flexac item_size" >
            <div class="item_x_color">*</div>
            <div class="item_title">数据采集间隔</div>
            <a-input class='left_input' placeholder="模板名称" />
          </div>
          <div style="font-size:20px;text-align: start;margin-top: 30px;">链接参数</div>
          <div class="flexrow flexac item_size" style="">
            <div class="item_x_color">*</div>
            <div class="item_title">运营商服务器地址</div>
            <a-input class='left_input' placeholder="模板名称" />
          </div>
          <div class="flexrow flexac item_size" >
            <div class="item_x_color">*</div>
            <div class="item_title">端口</div>
            <a-input class='left_input' placeholder="模板名称" />
          </div>
          <div class="flexrow flexac item_size" >
            <div class="item_x_color">*</div>
            <div class="item_title">设备网关</div>
            <a-input class='left_input' placeholder="模板名称" />
          </div>
          <div class="flexrow flexac item_size">
            <div class="item_x_color">*</div>
            <div class="item_title">端口</div>
            <a-input class='left_input' placeholder="模板名称" />
          </div>
        </div>
        <div class="flexcolumn">
          <div style="font-size:20px;text-align: start;">功能参数</div>
          <div class="flexrow flexac item_size2">过压
            <a-switch class="switch_tag" size="small" default-checked />
          </div>
          <div class="flexrow flexac item_size2">动作
            <a-switch class="switch_tag" size="small" default-checked />
          </div>
          <div class="flexrow flexac item_size2">欠压
            <a-switch class="switch_tag" size="small" default-checked />
          </div>
          <div class="flexrow flexac item_size2">动作
            <a-switch class="switch_tag" size="small" default-checked />
          </div>
          <div class="flexrow flexac item_size2">过流
            <a-switch class="switch_tag" size="small" default-checked />
          </div>
          <div class="flexrow flexac item_size2">动作
            <a-switch class="switch_tag" size="small" default-checked />
          </div>
          <div class="flexrow flexac item_size2">倾斜
            <a-switch class="switch_tag" size="small" default-checked />
          </div>
          <div class="flexrow flexac item_size2">动作
            <a-switch class="switch_tag" size="small" default-checked />
          </div>
          <div class="flexrow flexac item_size2">漏电
            <a-switch class="switch_tag" size="small" default-checked />
          </div>
          <div class="flexrow flexac item_size2">动作
            <a-switch class="switch_tag" size="small" default-checked />
          </div>
          <div class="flexrow flexac item_size2">GPS
            <a-switch class="switch_tag" size="small" default-checked />
          </div>
        </div>
        <div class="flexcolumn flexjc ">
          <div class="flexrow flexac" style="margin-top: 30px;">
            阙值
            <a-input class="input_small" />
            恢复值
            <a-input class="input_small" />
          </div>
          <div class="flexrow flexac" style="margin-top: 30px;">
            阙值
            <a-input class="input_small" />
            恢复值
            <a-input class="input_small" />
          </div>
          <div class="flexrow flexac" style="margin-top: 30px;">
            阙值
            <a-input class="input_small" />
            恢复值
            <a-input class="input_small" />
          </div>
          <div class="flexrow flexac" style="margin-top: 5px;">
            校准
            <a-switch class="switch_tag" size="small" default-checked />
          </div>
          <div class="flexrow flexac" style="margin-top: 5px;">
            阙值
            <a-input class="input_small" />
            恢复值
            <a-input class="input_small" />
          </div>
          <div class="flexrow flexac" style="margin-top: 30px;">
            阙值
            <a-input class="input_small" />
            恢复值
            <a-input class="input_small" />
          </div>
        </div>
      </div>
      <div class="flexrow flexjc" style="margin-top: 40px;">
        <a-button style="margin-right: 30px;">取消</a-button>
        <a-button style="margin-left: 30px;" type="primary">
          保存
        </a-button>
      </div>
    </div>
  </div>
</template>

<script>
</script>

<style>


  .dialog_title {
    font-size: 24px;
    opacity: 1;
  }

  .model_txt {
    margin-top: 28px;
    font-size: 16px;
    opacity: 1;
  }

  .item_size {
    margin-top: 8px;
    font-size: 16px;
    flex-shrink: 0;
    justify-content: flex-end;
  }

  .item_size2 {
    margin-top: 3px;
    font-size: 16px;
    flex-shrink: 0;
  }

  .item_x_color {
    color: #FF0000
  }

  .item_title {
    flex-shrink: 0;
    margin-right: 10px;
  }

  .left_input {
    width: 208px;
    height: 32px;
  }

  .switch_tag {
    width: 16px;
    height: 16px;
    margin-left: 8px;
  }

  .input_small {
    width: 50px;
    height: 20px;
    margin-left: 5px;
    margin-right: 20px;
  }
</style>
