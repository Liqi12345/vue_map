<template>
	<div id='Scan'>
		<TopBar :msg='msg' />
		<img src="../assets/image/scan.png" alt="" />
		<div>您未进行预约</div>
	</div>
</template>

<script>
	import TopBar from '@/components/top-bar'
	export default{
		data(){
			return{
				msg:'扫一扫'
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
		>div{
			font-size: 0.36rem;
			color: #73DBA9;
			text-align: center;
			padding-top: 0.56rem;
		}
	}
	img{
		width: 4.26rem;
		height: 3.64rem;
		padding-top: 2.4rem;
		margin: auto;
		display: block;
	}
</style>