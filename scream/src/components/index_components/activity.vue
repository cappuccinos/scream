<template>
	<div>
		<div class="all">
			<swipe class="my-swipe" :auto="2000">
			  	<swipe-item class="slide1" v-for="data in looplist" :key="data.id">
			  		<img :src="data.bannerImgSrc"/>
			  		<img :src="data.bannerImgSrc"/>
			  	</swipe-item>
			</swipe>
			<img class="lazy" :src="mysrc"/>
			<img class="lazy1" :src="mysrc1" alt="">
			<img class="lazy2" :src="mysrc2" alt="">
			<div class="title"><h1>清仓特惠</h1></div>
			<div class="sale"><img :src="mysrc3" alt=""></div>

			<div class="list">
				<ul>
					<li class="l" v-for= "data in productlist" :key="data.id">
						<img :src="data.productImg">
						<p>{{data.productName}}</p>
						<div class="sellPrice"><span>¥{{data.sellPrice}}</span></div>
					</li>

				</ul>							
			</div>
			<div class="title"><h1>人气单品</h1></div>
			<div class="complax">
				<ul>
					<li class="l li" v-for="data in complaxlist" :key="data.id">
						<img :src="data.productImg" alt="">
						<p>{{data.productName}}</p>
						<div class="sellPrice">
							<span>¥{{data.sellPrice}}</span>
							<span class="originalPrice" v-if="data.sellPrice!==data.originalPrice">¥{{data.originalPrice}}</span>
						</div>
					</li>
				</ul>
			</div>	
			<div class="more">查看全部</div>
		</div>
	</div>
</template>

<script type="text/javascript">
	import axios from "axios";
	require('vue-swipe/dist/vue-swipe.css');

// in ES6 modules
import { Swipe, SwipeItem } from 'vue-swipe';

	export default {
		name:"activity",
		data(){
			return {
				productlist:[],
				looplist:[],
				mysrc:'',
				mysrc1:'',
				mysrc2:'',			
				mysrc3:'',
				productlist:[],
				complaxlist:[]
			}
		},
		components:{
			"swipe":Swipe,
			"swipe-item":SwipeItem
		},
		mounted(){
			axios.get("/v2/page?pageId=1&tabId=10010&_=1533113952193").then(res=>{
			
				this.looplist = res.data.data.modules[0].moduleContent.banners
				this.mysrc = res.data.data.modules[1].moduleContent.bannerImgSrc				
				this.mysrc1 = res.data.data.modules[2].moduleContent.bannerImgSrc			
				this.mysrc2 = res.data.data.modules[3].moduleContent.bannerImgSrc				
				this.mysrc3 = res.data.data.modules[4].moduleContent.banners[0].bannerImgSrc
				this.productlist = res.data.data.modules[4].moduleContent.products
				this.complaxlist = res.data.data.modules[5].moduleContent.products
				console.log(this.complaxlist)
			})
		}
	}
</script>

<style scoped >
	html,body{
		height: 100%
	}
	.all{
		width: 100%;display: flex;flex-direction: column;
	}
	.l{
		float: left;
	}
	.my-swipe {
	  height: 272px;
	  color: #fff;
	  font-size: 30px;
	  text-align: center;
	  border-bottom: 10px solid #eee;
	}
	.my-swipe img{
		height:272px;
		width: 100%
	}

	.lazy{
		width: 100%;
		height: 69px;
		border-bottom: 10px solid #eee;
	}
	.lazy1{
		width: 100%;
		height:237px;
		border-bottom: 10px solid #eee;
	}
	.lazy2{
		width: 100%;
		height: 247px;
		border-bottom: 10px solid #eee;		
	}
	.title{
		height: 60px;
		line-height: 60px;
		font-size: 18px
	}
	.title h1{
		text-align: center;
		font-size: 18px
	}
	.sale{
		padding: 10px 10px 0;
	}
	.sale img{
		width: 100%;
		height: 220px
	}

	.list{
		padding: 0 20px 20px;
		border-bottom: 10px solid #ccc;
		overflow: hidden;
	}
	.list li{
		padding-right: 5px;
	}
	.list img{
		width: 119px;
	}
	.list p {
		font-size: 12px;
		width: 119px;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
		display:block;
		text-align: center;
	}
	.list .sellPrice{
		text-align: center
	}
	.list .sellPrice span{
		display: inline-block;
	}
	.complax{
		height: 975px;
		overflow: hidden;
	}
	.complax .li{
		height:325px;
	}
	.complax img{
		width: 205px;
	}
	.complax p {
		font-size: 14px;
		color: #888;
		width: 170px;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
		display:block;
		text-align: center;
	}
	.complax .sellPrice{
		text-align: center
	}
	.complax .originalPrice{
		font-size: 12px;
		color: #ccc;
		text-decoration: line-through;
	}
	.more{
		border: 10px;
		text-align: center;
	}
</style>