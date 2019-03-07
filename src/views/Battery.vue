<template>
  <div class="about">
    <TopBar :msg='msg'/>
    <div class="con">
    	<div>
    		<div class="tit">
    			<img src="../assets/image/guizi.png" alt="" />
    			<p style="padding-left: 0.25rem;">
    				编号：<span style="color:#50D293">D021036584</span>
    			</p>
    			<span style="color: #50D293;text-decoration: underline;"></span>
    		</div>
    		<div class="btm">
    			<div v-for='v in 8'>
    				<span>1号</span>
    				<img src="../assets/image/dianchi.png" alt="" />
    				<div>
    					<div style="width: 20%;"></div>
    				</div>
    				<span>89%</span>
					<b>预约电池</b>
    				
    			</div>
    		</div>
    	</div>
    	<!--<div>-->
    		<!--<div class="tit">-->
    			<!--<img src="../assets/image/guizi.png" alt="" />-->
    			<!--<p style="padding-left: 0.25rem;">-->
    				<!--编号：<span style="color:#50D293">D021036584</span>-->
    			<!--</p>-->
    			<!--<span style="color: #50D293;text-decoration: underline;"></span>-->
    		<!--</div>-->
    		<!--<div class="btms">-->
    			<!--<img src="../assets/image/none.png" alt="" />-->
    			<!--<div>暂无电池</div>-->
    		<!--</div>-->
    	<!--</div>-->
    </div>
  </div>
</template>
  <script>
  	import TopBar from '@/components/top-bar'
  	export default{
  		name:'battery',
  		data(){
  			return{
  				msg:'电池电量'
  			}
  		},
  		methods:{
  			
  		},
  		components:{
  			TopBar
  		}
  	}
  </script>
  <style lang="scss">
  	.about{
  		width:100%;
  		height:100%;
  		background: #fff;
  	}
  	.con{
  		height: calc(100% - 1rem);
  		padding: 0.25rem 0.2rem;
  		box-sizing: border-box;
  		.tit{
					height: 0.3rem;
					display: flex;
					align-items: center;
					justify-content: space-between;
					padding-bottom: 0.3rem;
					
					img{
						width: 0.3rem;
						height: 0.3rem;
					}
					>span{
						display: block;
						flex: 1;
						text-align: right;
					}
					
				}
  		>div:first-of-type{
  			height: 55%;
  			box-shadow:-1px -1px 1px 0px rgba(0, 0, 0, 0.1), 0px 2px 1px 0px rgba(0, 0, 0, 0.2);
				border-radius:5px;
				margin-bottom: 0.3rem;
				padding: 0.22rem 0.28rem;
				box-sizing: border-box;
				>.btm{
					height: calc(100% - 0.6rem);
					overflow-y: auto;
					>div{
						height: 0.65rem;
						display: flex;
						align-items: center;
					
						border-bottom: 1px solid rgba(204,255,230,0.6);;
						span:first-child{
							font-size: 0.2rem;
							color: #50D293;
						}
						img{
							width: 0.57rem;
							height: 0.39rem;
							padding: 0  0.2rem;
						}
						>div{
							flex: 1;
							position: relative;
							height: 0.26rem;
							border-radius: 25px;
							background:rgba(237,237,237,1);
							overflow: hidden;
							>div{
								background:#50D293 ;
								position: absolute;
								left: 0;
								top: 0;
								height: 100%;
							}
						}
						span:nth-of-type(2),b{
							font-size: 0.24rem;
							color: #50D293;
							padding-left: 0.3rem;
						}
						b{
							font-weight: 400;
							text-decoration: underline;
						}
					}
				}
  		}
		/*>div:last-of-type{
			 height: calc(35% - 0.3rem);
			 box-shadow:-1px -1px 1px 0px rgba(0, 0, 0, 0.1), 0px 2px 1px 0px rgba(0, 0, 0, 0.2);
			 border-radius:5px;
			 padding: 0.22rem 0.28rem;
			 box-sizing: border-box;
			.btms{
				padding-top:0.2rem;
			img{
				width: 1.95rem;
				height: 1.67rem;
				margin: auto;
				display: block;
			}
			div{
				font-size:0.28rem;
				color:#50D293 ;
				text-align: center;
				padding-top: 0.3rem;
			}
			}
			}*/
  	}
  </style>


