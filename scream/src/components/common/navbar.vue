<template>
	<div>
		<img id="photo1" src="../../assets/titleView.png" alt="">
		<img src="../../assets/jing.png" alt="" class="photo2">
		<input type="text" placeholder="搜索我的尖叫好物" v-on:click="play()">
	</div>
</template>

<script type="text/javascript">

	export default{
		name:"APP",
		data(){
		return{}
		},
		methods:{
			play(){
				this.$router.push('/search/view')
			}
		},
		}
	
</script>

<style scoped>
*{
	padding: 0;
	margin: 0;
}
	div{
		
		width: 100%;
		height: 44px;
		background: #fff;
	}
	#photo1{
		width: 64px; 
		margin-left:10px;
		margin-top:13px;
		position: absolute;
	}
	.photo2{
		width: 20px; 
		margin-left:85px;
		margin-top:13px;
		position: absolute;
		z-index: 1;
	}
	input{
		width: 240px;
		height: 29px;
		margin-left: 80px;
		background: #f5f5f5;
		border: none;
		border-radius: 20px;
		position: absolute;
		margin-top:8px;
		outline: none;
		padding-left: 30px;
	}

</style>