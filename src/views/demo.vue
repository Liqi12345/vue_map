
<template>
	<div style="width: 100%;height:100%">
	    <div id="mapDemo">
	        <el-amap ref='map' vid="amapDemo" :amap-manager="amapManager" :events="mapEvents" :plugin="plugin"  :zoom="zoom" :center="center" class="amap-demo">
	            <el-amap-marker class="selectedMarker"
	                            v-for="(item, index) in datas"
	                            :key="index"
	                            :position="item.lnglat"
	                            topWhenClick="true"
	                            :extData="item"
	                            :content="getMarkerContent(item, 30, 30)"
	                            :events="markerEvents">
	            </el-amap-marker>
	
	        </el-amap>
	
	        <!--<div class="toolbar">
	        <span v-if="loaded">
	          location: lng = {{ lng }} lat = {{ lat }}
	        </span>
	            <span v-else>正在定位</span>
	        </div>-->
	    </div>
	    <div class="div">
	    	<div @click='get'></div>
	    </div>
    </div>
</template>

<style lang="scss" scoped>
#mapDemo{
	height: calc(100% - 0.95rem) !important;
}
    .amap-demo {
        height: 100% !important;
    }
    .div{
    	height: 0.95rem;
    	border-top: 1px solid #DDD;
    	background: #fff;
    	position: relative;
    	div{
    		width:1.9rem;
    		height: 1.9rem;
    		border-radius: 50%;
    		border-top: 1px solid #DDD;
    	
    		position: absolute;
    		transform: rotate(-5deg);
    		bottom: 0;
    		left: 0;
    		right: 0;
    		margin: auto;
    		background: #fff;
    		
    	}
    }
    
     div /deep/ .amap-logo {
            right: 0 !important;
            left: auto !important;
            display: none !important;
        }
        
       div /deep/ .amap-copyright {
            right: 0px !important;
            left: auto !important;
            visibility: hidden !important;
        } 
</style>
<script>
    import { AMapManager } from 'vue-amap'


    let amapManager = new AMapManager()

    export default {
        data() {
            let self = this
            return {
            	obj:{
            		url1:require('../assets/image/red.png'),
            		url2:require('../assets/image/green.png'),
            		url3:require('../assets/image/3.png')
            	},
                center: [121.5, 31.1],
                lng: 0,
                lat: 0,
                loaded: false,
                plugin: [{
                    pName: 'Geolocation',
                    events: {
                        init(o) {
                            console.log(o)
                            // o 是高德地图定位插件实例
                            o.getCurrentPosition((status, result) => {
                                if(status == 'error'){


                                    console.log('定位失败')


                                }
                                console.log(status, result)
                                if (result && result.position) {
                                    self.lng = result.position.lng;
                                    self.lat = result.position.lat;
                                    self.center = [self.lng, self.lat];
                                    self.loaded = true;
                                    console.log(self.center)
                                    self.$nextTick();
                                }
                            });
                        }
                    }
                }],
                
                amapManager,
                zoom:1, //地图缩放级别
                // centerPosition: [121.5273285, 31.21515044], // 用户当前位置经纬度
                datas: [
                    {
                        id: 1,
                        title: '1',
                        level: 'A',
                        lnglat: [121.60237, 31.23727],
                    },
                    {
                        id: 2,
                        title: '2',
                        level: 'C',
                        lnglat: [120.4027, 31.20707],
                    },

                    {
                        id: 7,
                        title: '1',
                        level: 'B',
                        lnglat: [121.6027, 32.23707]
                    }
                ],
                clickedMarker: null, // 保存当前点击的Marke
                mapEvents: {
                    init(o) {
                        // o 为地图组件实例
                    },
                    complete () {
                        const map = self.amapManager.getMap() // 获取地图组件实例
                        // setFitView(overlayList:Array)
                        // 根据地图上添加的覆盖物分布情况，
                        // 自动缩放地图到合适的视野级别，参数overlayList默认为当前地图上添加的所有覆盖物图层
                        map.setFitView()
                    }
                },
                markerEvents: {
                    click(e) {
                        if (self.clickedMarker === e.target) return // 点击的是同一个Marker
                        const data = e.target.getExtData()
                        if (self.clickedMarker) { // 先恢复上次点击的Marker的样式
                            // self.clickedMarker.setOffset(new AMap.Pixel(-10, -30))
                            self.clickedMarker.setContent(self.getMarkerContent(self.clickedMarker.getExtData(), 30, 30))
                        }
                        e.target.setContent(self.getMarkerContent(data, 40, 40, true))
                        e.target.setOffset(new AMap.Pixel(-18, -50))
                        self.clickedMarker = e.target
                    }
                },

            }
        },
        created(){
        },
        mounted() {
            AMap.plugin('AMap.CircleEditor', function () {//回调函数
            })
        },
        methods: {
        	get(){

        		/*扫一扫，有返回值方法*/
	          var YDB = new YDBOBJ();
	               if(YDB){
	               
		               	YDB.GetScan('DoWithScan')
		              	
	               }
	                
	               	
	               
	               
	            
        	},
        	 
            getMarkerContent (item, width, height, isRotate = false) {
               
                if(item.level == 'A'){
                    const content = `
                                         <img src= "${this.obj.url1}" style="width: 0.48rem;height: 0.59rem;" alt="">
                           </div>`

                    return content
                }else if(item.level === 'B'){
                    const content = `
                                         <img src= "${this.obj.url2}" style="width: 0.48rem;height: 0.59rem;" alt="">
                           </div>`
                    return content
                }else{
                    const content = `
                                         <img src= "${this.obj.url3}" style="width: 0.48rem;height: 0.59rem;" alt="">
                           </div>`
                    return content
                }

          
            }
        },
    }
</script>
