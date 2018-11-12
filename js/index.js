var winHeight = $(window).height();
$('#mymap_content').css('height',winHeight);
let echartsDom = document.getElementById('mymap_content');/**获取元素 */
let echartsIns = echarts.init(echartsDom);/**创建实例 */
let timerId = null;/**节流阀计时器*/
/**散点数据 */
let localData = [
   //工作站++++++++++++++++++++++++++++++++++++++++++++++++++++++++++开始
	
	{ name: '邕宾', type: 1, center: [108.367801,22.861146] },
	{ name: '狮山', type: 1, center: [108.349261,22.865825] },
	{ name: '壮锦', type: 1, center: [108.27054,22.777809]},
	{ name: '江北', type: 1, center: [108.378163,22.847039]},
	{ name: '仙湖', type: 1, center: [108.491028,22.814495] },
	{ name: '金盾', type: 1, center: [108.27054,22.777809]},
	{ name: '北环', type: 1, center: [108.274486,22.850032]},
	{ name: '北湖', type: 1, center: [108.320953,22.883227]},
	{ name: '星湖', type: 1, center: [108.348271,22.818211]},
	{ name: '金桥', type: 1, center: [108.389541,22.8747]},
	{ name: '华南城', type: 1, center: [108.108514,22.860402]},
	{ name: '鑫辉', type: 1, center: [108.313547,22.782061]},
	{ name: '通达', type: 1, center: [108.826152,23.241558]},
	
	{ name: '凤凰城', type: 1, center: [109.058024,23.185228]},
	{ name: '上林', type: 1, center: [108.163315,23.718513]},
	{ name: '马山', type: 1, center: [108.163315,23.718513]},
	{ name: '武鸣', type: 1, center: [108.33612,23.16461]},
	
  //工作站++++++++++++++++++++++++++++++++++++++++++++++++++++++++++结束
 
 //服务站****************************************************************开始
  { name: '佳华', type: 2, center: [108.342552,22.731634] },
  { name: "弘启", type: 2, center: [108.275773,22.8131048] },
   { name: "长久", type: 2, center: [108.321968,22.828276] },
   { name: "建汇", type: 2, center: [108.321968,22.828276] },
   { name: "恒信", type: 2, center: [108.378768,22.846745] },
   
   { name: "弘德", type: 2, center: [108.274486,22.850032] },
   { name: "博通", type: 2, center: [108.245065,22.843935] },
   { name: "瑞帆", type: 2, center: [108.349261,22.865825] },
   { name: "星湖", type: 2, center: [108.441028,22.864495] },
   { name: "运泽", type: 2, center: [108.387931,22.822885] },
   { name: "星湖", type: 2, center: [108.350849,22.813291] },
   { name: "广缘", type: 2, center: [108.27054,22.777809] },
   { name: "开河", type: 2, center: [108.343663,22.832744] },
   { name: "天下行", type: 2, center: [108.318366,22.841804] },
   { name: "龙星行", type: 2, center: [108.301981,22.831412] },
   { name: "海腾", type: 2, center: [108.320666,22.860187] },
   { name: "弘帆", type: 2, center: [108.48859,22.76462] },
   { name: "远勋", type: 2, center: [108.257131,22.790604] },
   { name: "北湖", type: 2, center: [108.33072,22.867348] },
   { name: "恒久", type: 2, center: [108.288837,22.825183] },
   
  //服务站*********************************，*******************************结束
  
  
    //检测站***********************************************************************************
	{ name: '星湖站', type: 3, center: [108.348271,22.818211]},
	{ name: '仙葫站', type: 3, center: [108.491028,22.814495]},
	{ name: '一直通站', type: 3, center: [108.429738,22.8168]},
	{ name: '竹溪站', type: 3, center: [108.361781,22.796687]},
	{ name: '一直通厢竹站', type: 3, center: [108.385999,22.82568]},
	{ name: '望州站', type: 3, center: [108.348334,22.852219]},
	{ name: '茅桥站', type: 3, center: [108.370282,22.842865]},
    { name: '邕宾站', type: 3, center: [108.367294,22.867561]},
	{ name: '狮山站', type: 3, center: [108.344391,22.874308]},
	{ name: '三塘站', type: 3, center: [108.523418,22.882157]},
	{ name: '安吉站', type: 3, center: [108.361852,22.861998]},
	{ name: '三棵树站', type: 3, center: [108.47335,22.878837]},
	{ name: '友爱站', type: 3, center: [108.327519,22.832461]},
	{ name: '桂顺泞站', type: 3, center: [108.223355,22.838788]},
	{ name: '清川站', type: 3, center: [108.067496, 22.948]},
	{ name: '捷尔卡吉安站', type: 3, center: [108.30602,22.894537]},
	{ name: '杰锋站', type: 3, center: [108.243325,22.775042]},
	{ name: '南建站', type: 3, center: [108.299333,22.798151]},
	{ name: '江南站', type: 3, center: [108.291556,22.801938]},
	{ name: '壮锦站	', type: 3, center: [108.27054,22.777809]},
	{ name: '金盾站', type: 3, center: [108.27054,22.777809]},
	{ name: '友谊站', type: 3, center: [108.297129,22.764537]},
	{ name: '北环站', type: 3, center: [108.274486,22.850032]},
	{ name: '北湖站', type: 3, center: [108.320953,22.883227]},
	{ name: '玉洞站', type: 3, center: [108.391043, 22.407266]},
	{ name: '顺亨达站', type: 3, center: [108.346668,22.720888]},
	{ name: '顺康站', type: 3, center: [108.330747,22.746926]},
	{ name: '武鸣桂华站', type: 3, center: [108.299652,23.010442]},
	{ name: '武鸣红岭站', type: 3, center: [108.047054,23.298365]},
	{ name: '武鸣康民站', type: 3, center: [108.30612,23.16861]},
	{ name: '武鸣通达站', type: 3, center: [108.201118,23.155113]},
	{ name: '宾阳通达站', type: 3, center: [108.826152,23.241558]},
	{ name: '宾阳恒丰站', type: 3, center: [108.834326,23.213626]},
	{ name: '宾阳韬略站', type: 3, center: [109.058024,23.185228]},
	{ name: '横县车晖站', type: 3, center: [109.286042,22.694462]},
	{ name: '横县鑫辉站', type: 3, center: [109.206042,22.624462]},
	{ name: '隆安源润站', type: 3, center: [107.758127,23.163624]},
	{ name: '马山恒达站', type: 3, center: [108.163315,23.718513]},
	{ name: '上林金岸站', type: 3, center: [108.597491,23.441072]}
   //检测站***********************************************************************************
  
  
  
  
  
  ];
/**类型数组 */
let typeLis = [{ name: '工作站', color: '#05a1a7' }, { name: '服务站', color: '#a66021' }, { name: '检测站', color: '#FFC125' }];
/**颜色数组 */
let colorLis = ['#08388f', '#06306b', '#001b59', '#2171b5', '#084972', '#00315b', '#08388f', '#2171b5', '#084972', '#00315b', '#001b59', '#06306b'];
/**各区域的站点 */
let pointData = [
  {
    area: "江南区",
    workPoint: [
      { point: [108.231922, 22.568704], name: "江南" },
      { point: [108.067496, 22.748], name: "五一" },
      { point: [108.24227, 22.762265], name: "壮锦" },
      { point: [108.134186, 22.474692], name: "金盾" },
    ]
  },
  {
    area: "良庆区",
    workPoint: [
      { point: [108.391043, 22.407266], name: "玉洞" }
    ]

  },
  {
    area: "邕宁区",
    workPoint: [
      { point: [108.701785, 22.553402], name: "顺康" }
    ]

  },
  {
    area: "青秀区",
    workPoint: [
      { point: [108.72047, 22.774313], name: "竹溪" },
	  { point: [108.34827, 22.818211], name: "星湖站" }
    ]

  },
];
/**echarts设置*/
let echartsOption = {
  title: {
    //text: '车管所综合服务平台',
    textStyle: {
      color: '#fff',
      fontWeight: 300,
      fontSize: 40
    },
    left: 'center',
    top: 10
  },
  tooltip:{
	show: true, 
	formatter: '{b}',
},
  color: typeLis.map(item => item.color),/**legend以及数据系列的颜色 */
  geo: {
    map: 'nanning',
    aspectScale: 1.2,
    selectedMode: 'single',
	//地图区域名称样式
    label: {
      show: true,
      position: 'inside',
      color: '#fff',
      fontSize: '26'
    },
    itemStyle: {
      borderColor: '#5bbdf6',
      borderWidth: 2,
      shadowColor: 'rgba(0, 0, 0, 0.5)',
      shadowBlur: 10
    },
    emphasis: {
      itemStyle: {
        areaColor: 'pink'
      }
    },
    regions: []
  },
  legend: {
    show: true,
    left: 'center',
    bottom: 30,
    data: typeLis.map(item => item.name),
    inactiveColor: '#666',
    textStyle: {
      color: '#fff',
      fontSize: 16
    }
  },
  series: [
     //地图点位图标
    ...typeLis.map((item, index) => {
      return {
        name: item.name,
        type: 'effectScatter',
        coordinateSystem: 'geo',
        symbolSize: 6,
        data: []
      }
    }),
	
	//地图点位气泡图标
    ...typeLis.map((item, index) => {
      return {
        name: item.name,
        type: 'scatter',
        coordinateSystem: 'geo',
        symbol: 'pin',
        symbolSize: 30,
        symbolOffset: [0, -16],
        /*label: {
          show: true,
          formatter: '{b}'
        },*/
	
		
        data: []
      }
    }),
  ]
}
echartsIns.showLoading();
// 点击区域板块
echartsIns.on('click', function (params) {/**注册点击事件*/
  // if (params.region) {
  //   var areaName = params.name;
  // } else {
  //   for (let index = 0; index < pointData.length; index++) {
  //     let element = pointData[index];
  //     var nameArr = [];
  //     element.workPoint.forEach((item) => {
  //       nameArr.push(item.name);
  //     })
  //     if (nameArr.some((item) => {
  //       return item === params.name
  //     })) {
  //       var areaName = element.area;
  //       break;
  //     }
  //   }
  // }
  //**************************$("#mymap_baidu_mask").fadeIn();
  // var map = new BMap.Map("mymap_baidu");
  // map.centerAndZoom(new BMap.Point(108.33, 22.84), 11);
  // map.enableScrollWheelZoom();
  // map.enableContinuousZoom();
  // var bdary = new BMap.Boundary();
  // bdary.get("广西壮族自治区南宁市" + areaName, function (rs) { //获取行政区域
  //   //这里是用户自己的函数。
  //   var count = rs.boundaries.length; //行政区域的点有多少个
  //   for (var i = 0; i < count; i++) {
  //     var ply = new BMap.Polygon(rs.boundaries[i], { strokeWeight: 2, strokeColor: "#ff0000" }); //建立多边形覆盖物
  //     map.addOverlay(ply); //添加覆盖物
  //   };
  //   // 标记站点
  //   var count = 0;
  //   for (let j = 0; j < pointData.length; j++) {
  //     let element = pointData[j];
  //     if (element.area === areaName) {
  //       var pointArr = element.workPoint;
  //       break;
  //     } else {
  //       count++;
  //     }
  //   }
  //   if (count === pointData.length) var pointArr = [];
  //   if (pointArr.length === 0) {
  //     return;
  //   } else {
  //     pointArr.forEach(item => {
  //       var point = new BMap.Point(item.point[0], item.point[1]);
  //       var pointName = item.name;
  //       var marker = new BMap.Marker(point);  // 创建标注
  //       map.addOverlay(marker);              // 将标注添加到地图中
  //       var label = new BMap.Label(pointName, { offset: new BMap.Size(20, -10) });
  //       marker.setLabel(label);
  //     })
  //   }

  // });
});
$("#mymap_baidu_mask").click(function (e) {
  if (e.target.tagName === "DIV") {
    $("#mymap_baidu_mask").fadeOut();
  } else {
    return;
  }
})
window.onresize = function (params) {
  throllte(echartsIns.resize);
  var winHeight = $(window).height();
$('#mymap_content').css('height',winHeight);
}
$.get('./static/450100.json', function (geoJson) {/**获取地图json */
  echarts.registerMap('nanning', geoJson);
  echartsOption.geo.regions = geoJson.features.map((item, index) => {
    return {
      name: item.properties.name,
      itemStyle: {
        areaColor: colorLis[index]
      }
    }
  })
  classifyData(localData);
  renderEcharts(echartsIns, echartsOption);
})
var renderEcharts = function (obj, option) {/**渲染实例*/
  obj.setOption(option);
  obj.hideLoading();
}
var classifyData = function (arr) {/**数据分类 */
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    let tempType = element.type;
    echartsOption.series[tempType - 1].data.push({
      name: element.name,
      value: [...element.center, element.type]
    })
    echartsOption.series[tempType + 2].data.push({
      name: element.name,
      value: [...element.center, element.type]
    })
  }
}
var throllte = function (cb) {/**echarts重绘节流阀*/
  clearTimeout(timerId);
  timerId = setTimeout(() => {
    cb();
  }, 100);
}
$("#warningCircle").click(function () {
  $("#warning_mask").fadeIn();
});
$("#warning_mask_close").click(function () {
  $("#warning_mask").fadeOut();
})