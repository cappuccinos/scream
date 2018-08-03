<template>
	<div id = "box">
		<swipe class="my-swipe" :auto="2000">
			<swipe-item class="slide1" v-for="data in looplist" :key = "data.id">
				<img :src="data.bannerImgSrc" alt="">
			</swipe-item>
		</swipe>
		<div class="page-module-title">
			<h1 align="center">创新设计</h1>
			
			<h3>艺术精品生活馆</h3>
			
		</div>

		<div>
			<div class="swiper">
				<swiper :options="swiperOption">
					<swiper-slide v-for="(item, index) in slides" :key="index">
						<img :src="item.productImg">
						<p>{{item.productName}}</p>
						<span class="now">{{'￥'+item.sellPrice}}</span>
						<span class="old" v-if="item.sellPrice != item.originalPrice">{{'￥'+item.originalPrice}}</span>
					</swiper-slide>
				</swiper>

				<div class="page-module-more">
					<a href="#">查看全部</a>
				</div>
			</div>
		</div>


		<div class="page-module-title">
			<h1>品牌推荐</h1>
			<h3>国际大牌 有好货</h3>   
	</div>

		<div class="banner3">
			<img :src="mysrc"/>
		</div>

		<ul class = "goodsOne">
			<li  v-for = "(data , index) in products" :key = "index">
				<img :src="data.productImg">
				<p>{{data.productName}}</p>
				<span class="now">{{'￥'+data.sellPrice}}</span>
			</li>
		</ul>

		<div class="page-module-title">
			<h1>热门分类</h1>
		</div>

		<ul class="goodsTwo" >
			<li v-for = "data , index in goodslist"><img :src="data.bannerImgSrc"></li>
		</ul>
		

		<div class="page-module-title">
			<h1>气氛餐具</h1>
			<h3>变身摆盘达人 聚餐马上开始</h3> 
		</div>

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
		<div class="page-module-more">
			<a href="#">查看全部</a>
		</div>



	<div class="page-module-title">
		<h1>室内花器</h1>
		<h3>把多色花园搬进家庭</h3>  
	</div>


			<div class="complax">
				<ul>
					<li class="l li" v-for="data in complaxlist1" :key="data.id">
						<img :src="data.productImg" alt="">
						<p>{{data.productName}}</p>
						<div class="sellPrice">
							<span>¥{{data.sellPrice}}</span>
							<span class="originalPrice" v-if="data.sellPrice!==data.originalPrice">¥{{data.originalPrice}}</span>
						</div>
					</li>
				</ul>
		</div>


			<div class="page-module-more">
				<a href="#">查看全部</a>
			</div>



		<div class="page-module-title">
			<h1>能装易取</h1>
			
			<h3>带上行李去追寻自然哲学</h3>
			
		</div>



		<div class="complax">
				<ul>
					<li class="l li" v-for="data in complaxlist2" :key="data.id">
						<img :src="data.productImg" alt="">
						<p>{{data.productName}}</p>
						<div class="sellPrice">
							<span>¥{{data.sellPrice}}</span>
							<span class="originalPrice" v-if="data.sellPrice!==data.originalPrice">¥{{data.originalPrice}}</span>
						</div>
					</li>
				</ul>
		</div>

		
		<div class="page-module-more">
			<a href="#">查看全部</a>
		</div>





	</div>
</template>

<script type="text/javascript">
	import axios from "axios";
	require('vue-swipe/dist/vue-swipe.css');
	import { Swipe, SwipeItem } from 'vue-swipe';


	import { swiper, swiperSlide } from 'vue-awesome-swiper';

	
	export default {
		name:"house",
		data(){
			return {		
				slides:[],
				products:[],
				complaxlist:[],
				complaxlist1:[],
				complaxlist2:[],
				goodslist:[],
				looplist:[],
				swiperOption:{
				slidesPerView: 3.5,
				spaceBetween: 0,
				centeredSlides: false,
				} ,
					mysrc:''
					}
		},	
		mounted(){
			axios.get("/v2/page?pageId=1&tabId=10006&_=1533111546622").then(res=>{
					console.log(res.data)
					this.looplist = res.data.data.modules[0].moduleContent.banners;
					this.slides = res.data.data.modules[1].moduleContent.products;
					console.log(this.slides);

					this.mysrc=res.data.data.modules[2].moduleContent.banners[0].bannerImgSrc

					this.products = res.data.data.modules[2].moduleContent.products
					console.log(this.products)
					this.goodslist = res.data.data.modules[3].moduleContent.banners
					console.log(this.goodslist)
					this.complaxlist = res.data.data.modules[4].moduleContent.products
					this.complaxlist1 = res.data.data.modules[5].moduleContent.products
					this.complaxlist2 = res.data.data.modules[6].moduleContent.products

			})
		},
		components:{


			"swipe":Swipe,
			"swipe-item":SwipeItem,

			swiper,
			swiperSlide

		}
	}
</script>

<style scoped >
		*{
			padding: 0;
			margin: 0;
		}
		#box{
			background: #fff;
		}
		img{
			width:100%;
			display: block;
		}
		html,body{
			background-color: #f5f5f5;
		}

		.my-swipe {
			width: 100%;
			height: 250px;
			
		}
		.page-module-title {
			border-top: 14px solid #f5f5f5;
			background: #fff;
			overflow: hidden;

		}
		.page-module-title h1 {
			font-weight: bold;
			font-size: 18px;
			color: #333;
			margin: 14px 0;
			text-align: center;
		}
		.page-module-title h3 {
			font-size: 14px;
			color: #808080;
			margin-bottom: 8px;
			font-weight: 100;
			text-align: center;

		}


		.swiper-slide {
			width: 60%;
		}
		.swiper-slide:nth-child(2n) {
			width: 40%;
		}
		.swiper-slide:nth-child(3n) {
			width: 20%;
		}
		.swiper p{
			width: 100px;
			text-overflow: ellipsis;
			overflow: hidden;
			white-space: nowrap;
			font-size: 10px;
			color: #808080;
		}
		.swiper span.new{
			font-size: 8px;
			color: #000;
			text-indent: 10px;
		}
		.swiper span.old{
			text-decoration: line-through;
			padding-left: 5px;
			font-size: 8px;
		}

		.page-module-more {
			text-align: center;
			padding: 20px 30px;
			border-bottom: 1px solid #ccc;
		}
		.page-module-more a {
			font-size: 10px;
			color: #4A4A4A;
			background: url(../../assets/watchbg.png) no-repeat right center;
			background-size: 8px;
		 	padding: 18px;
		 	text-decoration: none;
		}

		.banner3{
			padding: 30px 15px 0;
		}


		
		.goodsOne{
			display: flex;
			padding:0 15px 30px;
		}
		.goodsOne li{
			flex: 1;
		}
		.goodsOne li p{
			width: 100px;
			text-overflow: ellipsis;
			overflow: hidden;
			white-space: nowrap;
			font-size: 10px;
			color: #808080;
			text-indent: 20px;
		}
		.goodsOne li img{
			width: 100%;
		}
		.goodsOne li span.new{
			width: 100%;
			font-size: 8px;
			color: #000;
			height: 10px;
			line-height: 10px;
		}


		.goodsTwo {
			display: flex;
			height: 120px
		}
		.goodsTwo li{
			flex: 1;
		}
		.goodsTwo li img{
			width: 80px
		}


		.complax{
			height: 886px;
			overflow: hidden;
		}
		.complax .li{
			height:295px;
			width: 50%;
			float: left;
			border-left:1px solid #ccc;
			border-top:1px solid #ccc;
			box-sizing: border-box;
		}
		.complax img{
			width: 180px;
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

</style>