<template>
	<div id="all">
		<div class="header">
			<span class="left"><img src="../assets/searchIcon.png" alt=""></span>
			<input type="text" placeholder="搜索我的尖叫好物">
			<span class="right"><img src="../assets/home.png" v-on:click="myplay()" ></span>
		</div>
		<div class="hot">
			<p>热门搜索</p>
			<div><span>尖叫设计</span></div>
			<div><span>暖手宝</span></div>
			<div><span>沙发</span></div>
			<div><span>杯子</span></div>
			<div><span>餐具</span></div>
			<div><span>茶具</span></div>
			<div><span>吊灯</span></div>
			<div><span>厨房</span></div>
			<div><span>儿童</span></div>
			<div><span>HAY</span></div>
			<div><span>Arabia</span></div>
			<div><span>家饰</span></div>
			<div><span>收纳</span></div>
			<div><span>床上用品</span></div>
		</div>
		<div class="history">
			<p>历史搜索</p>
			<img src="../assets/cleanSearchIcon.png" alt="" >
		</div>

	</div>
</template>

<script type="text/javascript">
	
	export default {
		name:"search",
		data(){
			return {

			}
		},
		methods:{
			myplay(){
				this.$router.push('/pages/index')
			}
		},
	}
</script>

<style scoped >

	*{
		padding: 0;
		margin: 0
	}
	.header{
		padding-top: 5px;
		height: 30px;
		border-bottom: 1px solid #ccc;
	}
	.left{
		float:left;
	}
	.left img{
		height: 17px;
		display: inline-block;
		position: relative;
		left: 20px;
		top:4px;
	}
	.right{
		float: right
	}
	.right img {
		height:22px;
		position: relative;
		left: -10px;
	}
	input{
		width: 200px;
		height: 20px;
		outline: none;
		padding-left: 20px;
		border: none;
		border-radius: 20px;
		background:white;
	}

	.hot{
		height: 210px;
		width: 300px;
		padding: 10px 10px 0;
	}
	.hot div{
		display: inline-block;
		font-size: 14px;
		text-align: center;
		padding: 10px;
		margin:5px;
		background:white
	}

	.history{
		padding: 10px 10px 0;
	}
	.history p{
		display: inline-block;
		width: 200px
	}
	.history img{
		width: 14px;
	}

	.big{
		width: 1rem;
		height: 1rem;
		background: red
	}
</style>