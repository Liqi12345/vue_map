<template>
	<div id='Scan'>
		<TopBar :msg='msg' />
		<img src="../assets/image/yuyue.png" alt="" />
		<div>预约成功</div>
		<p>请在20分钟内取走电池</p>
	</div>
</template>

<script>
	import TopBar from '@/components/top-bar'
	export default{
		data(){
			return{
				msg:'预约'
			}
		},
		methods:{
			
		},
		components:{
			TopBar
		}
	}
</script>

<style lang="scss" scoped>
	#Scan{
		width:100%;
		height:100%;
		background: #fff;
		>div,p{
			font-size: 0.36rem;
			color: #73DBA9;
			text-align: center;
			padding-top: 0.56rem;
		}
		>p{
			padding-top: 0.1rem;
				font-size: 0.24rem !important;
		}
	}
	img{
		width: 3.45rem;
		height: 3.91rem;
		padding-top: 2.4rem;
		margin: auto;
		display: block;
	}
</style>