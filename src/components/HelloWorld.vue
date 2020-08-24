<template>
  <div class="hello">
    
    <div id="map-container" style="width:100%;height:500px"></div>
    <input type="text" v-model="test">
      <div :class="istest==1?'isred':'isblue'"></div>
  </div>
</template>
<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      test:1
    };
  },
  mounted() {
      this.init()
  },
  computed:{
    istest(){
      if (this.test>10) {
        return 1
      }else{
        return 20
      }
    }
  },
  methods: {
 init(){
            const map = new AMap.Map('map-container', {
              zoom: 11,
              center:[116.397428,39.90923],
              viewMode:'3D'
            })
            map.plugin(['AMap.ToolBar', 'AMap.MapType'], function () {
              map.addControl(new AMap.ToolBar())
              map.addControl(new AMap.MapType({showTraffic:false,showRoad:false}))
            })

          }

    // bdMap() {
    //   //创建地图
    //   let map = new BMap.Map("mapContainer");
    //   let point = new BMap.Point(114.02597366,22.54605355);
    //   map.centerAndZoom(point,20); // 创建点坐标
    //   map.addControl(new BMap.NavigationControl());
    //   map.enableScrollWheelZoom(true);//允许鼠标滚动缩放
    //   // 初始化地图， 设置中心点坐标和地图级别
    //   let marker = new BMap.Marker(point);
    //   map.addOverlay(marker); //添加覆盖物
    //   marker.setAnimation(BMAP_ANIMATION_BOUNCE); //跳动的动画
    //    //添加覆盖物文字
    //   let label = new BMap.Label(".", {
    //     offset: new BMap.Size(20, -25)
    //   });
    //   marker.setLabel(label);
    //   function showInfo(e){
    //     console.log(e);
    //   }
    //     // map.addEventListener("click", showInfo)
        
    //                //启用滚轮放大缩小
    // if (document.createElement('canvas').getContext) {  // 判断当前浏览器是否支持绘制海量点
    //     var points = [];  // 添加海量点数据
 
    //     for (var i = 0; i < 10000; i++) {
    //       points.push(new BMap.Point(114.026434,22.546675));
    //     }
    //     var options = {
    //         size: BMAP_POINT_SIZE_BIGGER,
    //         shape: BMAP_POINT_SHAPE_STAR,
    //         color: 'red'
    //     }
    //     var pointCollection = new BMap.PointCollection(points, options);  // 初始化PointCollection
    //     pointCollection.addEventListener('click', function (e) {
    //       alert('单击点的坐标为：' + e.point.lng + ',' + e.point.lat);  // 监听点击事件
    //     });
    //     map.addOverlay(pointCollection)

    // }else{

    // }

        
    // }
  },
};
</script>

<style scoped>
.bm-view {
  width: 600px;
  height: 300px;
  margin-top: 200px;
}

h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
.isred{
  width: 10px;
  height: 10px;

  background-color: red;
}
.isblue{
  width: 10px;
  height: 10px;
  background-color: blue;
}
</style>