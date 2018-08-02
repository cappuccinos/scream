<template>
	<div>
		<div v-for="data in list" class="all">		
			<div v-if="data.moduleType==103">
				<swipe class="my-swipe">
					<swipe-item class="slide1" v-for="data1 in looplist" :key="data1.id">
						<a href=""><img :src="data1.bannerImgSrc"/></a>
					</swipe-item>
				</swipe>
			</div>
			
			<div v-else-if="data.moduleType==102" class="banner1">
				
				<div class="title1">
					<h1>{{data.moduleName}}</h1>
					<h3>{{data.moduleDescription}}</h3>
				</div>
				<a href="">
					<img :src="data.moduleContent.banners[0].bannerImgSrc" alt="">
				</a>
				
			</div>

			<div v-else-if="data.moduleType==107" class="banner1">
				<div class="title1">
					<h1>{{data.moduleName}}</h1>
					<h3>{{data.moduleDescription}}</h3>
				</div>	
				<a href="">
					<img :src="data.moduleContent.banners[0].bannerImgSrc" alt="">
				</a>
				<div class="shop">
					<ul>
						<li>
							<a href=""><img :src="data.moduleContent.products[0].productImg" alt=""></a>
							<p>{{data.moduleContent.products[0].productName}}</p>
							<div>
								<span>¥{{data.moduleContent.products[0].sellPrice}}</span>
							</div>
						</li>
						<li>
							<a href=""><img :src="data.moduleContent.products[1].productImg" alt=""></a>
							<p>{{data.moduleContent.products[1].productName}}</p>
							<div>
								<span>¥{{data.moduleContent.products[1].sellPrice}}</span>
							</div>
						</li>
						<li>
							<a href=""><img :src="data.moduleContent.products[2].productImg" alt=""></a>
							<p>{{data.moduleContent.products[2].productName}}</p>
							<div>
								<span>¥{{data.moduleContent.products[2].sellPrice}}</span>
							</div>
						</li>
					</ul>
				</div>	
			</div>

			<div v-else="data.moduleType==401" class="banner2">
				<div class="title2">
					<h1>{{data.moduleName}}</h1>
					<h3>{{data.moduleDescription}}</h3>
				</div>
	        	<div>
	                <div class="swiper">
	        	        <swiper :options="swiperOption">
	        	            <swiper-slide v-for="(data, index) in slides" :key="index">
	        					<img :src="data.productImg" style="width:100px;height:100px;">
	        					<p class="productName">{{data.productName}}</p>
	        					<div class="now">
	        						<span class="sellPrice">{{'￥'+data.sellPrice}}</span>
	        	            		<span class="originalPrice" v-if="data.sellPrice != data.originalPrice">{{'￥'+data.originalPrice}}</span>
	        	            	</div>
	        	            </swiper-slide>
	        	       	</swiper>
	        	        
	        		</div>
	        	</div>
	        	<div class="page-module-more">
	        	    <a href="#">查看全部</a>
	        	</div>
			</div>
		</div>

		
	</div>


</template>

<script type="text/javascript">
	require('vue-swipe/dist/vue-swipe.css');

	import { Swipe, SwipeItem } from 'vue-swipe';
	import axios from "axios";
	import 'swiper/dist/css/swiper.css'
	import { swiper, swiperSlide } from 'vue-awesome-swiper';
	export default {
		name:"recommend",
		data(){
			return {
				looplist:[],
				list:[],
				slides:[],
				swiperOption:{
				slidesPerView: 3.5,
				spaceBetween: 0,
				centeredSlides: false,
				} 
			}
		},
		components:{
			"swipe":Swipe,
			"swipe-item":SwipeItem,
			swiper,
      		swiperSlide
		},
		mounted(){
			axios.get("/v2/page?pageId=1&tabId=1&_=1533122682249").then(res=>{
				

				this.looplist = res.data.data.modules[0].moduleContent.banners
				
				this.list = res.data.data.modules
				console.log(this.list)

				this.slides = res.data.data.modules[4,11,18,25,32,39].moduleContent.products 
				
				// this.shoplist = res.data.data.modules[i].moduleContent
				// console.log(this.shoplist)
				
				
			})
		}
	}
</script>

<style scoped >
	*{
		padding: 0;
		margin: 0;
	}
	.banner2{
		background: #fff;
	}

	.my-swipe {
	  height: 200px;
	  color: #fff;
	  font-size: 30px;
	  text-align: center;
	}
	.shop li{
		padding-bottom: 15px;
	}
	.all{
		overflow: hidden;
		background: #fff;
		margin-bottom: 15px;
		
	}
	.slide1 img{
	  	width: 100%;
	  }
	.banner1{
	  	background: #fff;
	  	padding: 15px;

	}
	.title1{
	  	width: 345px;
	  	height: 83px;
	}
	.title1 h1{
		font-size: 18px;
		color: #333;
		margin: 14px 0;
		text-align: center;

	}
	.title1 h3{
		font-size: 12px;
		color: #808080;
		margin-bottom: 6px;
		text-align: center;
		font-weight: normal;
	}
	.title2{
	  	width: 375px;
	  	height: 83px;
	}
	.title2 h1{
		font-size: 18px;
		color: #333;
		margin: 14px 0;
		text-align: center;

	}
	.title2 h3{
		font-size: 12px;
		color: #808080;
		margin-bottom: 6px;
		text-align: center;
		font-weight: normal;
	}
	.banner1 img{
		display: block;
		width: 100%;
	}
	.pic{
		overflow: hidden;
	}
	.shop{
		padding: 0 12px 0 12px;
		background: #fff;
	}
	.shop ul li{
		float: left;
		width: 31.4%;
		margin-left: 6px;
	}
	.shop ul li p{
		margin-top: 4px;
		font-size: 12px;
		text-align: center;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
		display:block;
		text-align: center;
	}
	.shop ul li div{
		text-align: center;
	}
	.shop ul li div span{
		font-size: 12px;
	}

	.swiper .productName{
		font-size: 12px;
		color: #aaa;
		width: 90px;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
		display:block;

	}
	.swiper .sellPrice{
		font-size: 14px;
		display: inline-block;
	}
	.swiper .originalPrice{
		color: #ccc;
		text-decoration: line-through;
		display: inline-block;
		font-size: 12px

	}
	.page-module-more {
    	text-align: center;
    	padding: 15px 20px;
	}
	.page-module-more a{

		display: inline-block;
		font-size: 12px;
		text-decoration: none;
		color: #4A4A4A;
		padding-right: 15px;
		text-align: center;
		background: url(../../assets/watchbg.png) no-repeat right center;

	}
</style>