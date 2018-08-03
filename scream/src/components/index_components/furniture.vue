<template>
	<div>
		<swipe class="my-swipe">
  			<swipe-item class="slide1" v-for="data in looplist" :key = "data.id">
  				
  			<img :src="data.bannerImgSrc" alt="">
  			</swipe-item>
  			
		</swipe>

		<div class="page-module-title">
            <h1 align="center">家装攻略</h1>
            
            <h3>现代家居新风貌</h3>
            <div class="swiper">
    <swiper :options="swiperOption">
      <swiper-slide v-for="(item, index) in slides" :key="index">
        <img :src="item.productImg">
        <p class="name">{{item.productName}}</p>
        <span class="jia">{{'￥'+item.originalPrice}}</span>
      </swiper-slide>
    </swiper>

        </div>






     
  </div>

    <div class="see">
      <p>查看全部&nbsp;&nbsp;<img src="../../assets/watchbg.png" alt="" class="jiao"></p>
      
    </div>


<div class="page-module-title">
            <h1>品牌推荐</h1>
            
            <h3>国际大牌 有好货</h3>
            <div class="bang">
          <img :src="photo" alt="" >

        </div>
            
        </div>
<ul class="jing">
  <li class="Li" v-for="data1 in looplist1">
    <img :src="data1.productImg" alt="">
    <p class="name1">{{data1.productName}}</p>
    <span class="jia1">{{'￥'+data1.originalPrice}}</span>
  </li>
  
</ul>
   

   <div class="page-module-title">
            <h1>热门分类</h1>
            <div class="re">
       <div class="tui" v-for="data2 in looplist2" >
         <img :src="data2.bannerImgSrc" alt="">
       </div>


     </div>      
            
        </div>  
     


<div class="page-module-title box1">
            <h1>一席之地</h1>
            
            <h3>用设计应对不同的动态坐姿</h3>
            <div class="white"></div>

            <ul class="list1" v-for="data3 in looplist3">
              <li> <img :src="data3.productImg" alt="">
                <p>{{data3.productName}}</p>
                <span class="jia3">{{'￥'+data3.originalPrice}}</span>
              </li>
            </ul>
            

              
        </div>
        
        

       <div class="bai">
          <p>查看全部<img src="../../assets/watchbg.png" alt="" class="jiao1"></p>
        </div>

      <div class="page-module-title box1" >
            <h1>蜗居衣架</h1>
            
            <h3>衣柜「爆炸」的解决方案</h3>
            <div class="white"></div>

            <ul class="list1" v-for="data4 in looplist4">
              <li> <img :src="data4.productImg" alt="">
                <p>{{data4.productName}}</p>
                <span class="jia3">{{'￥'+data4.originalPrice}}</span>
              </li>
            </ul>

            
        </div>
<div class="bai">
          <p>查看全部<img src="../../assets/watchbg.png" alt="" class="jiao1"></p>
        </div>

<div class="page-module-title box1">
            <h1>蜗居衣架</h1>
            
            <h3>衣柜「爆炸」的解决方案</h3>
            <div class="white"></div>
            <ul class="list1" v-for="data5 in looplist5">
              <li> <img :src="data5.productImg" alt="">
                <p>{{data5.productName}}</p>
                <span class="jia3">{{'￥'+data5.originalPrice}}</span>
              </li>
            </ul>
            
        </div>
        <div class="bai">
          <p>查看全部<img src="../../assets/watchbg.png" alt="" class="jiao1"></p>
        </div>


	</div>
</template>

<script type="text/javascript">
	import footerbar from "../common/footerbar"
	import navbar from "../common/navbar"
	import axios from "axios";

	require('vue-swipe/dist/vue-swipe.css');



	import { Swipe, SwipeItem } from 'vue-swipe';

	import { swiper, swiperSlide } from 'vue-awesome-swiper';



	export default {
		name:"index",
		data(){
			return {
    slides: [  ],
    looplist1:[],
    looplist2:[],
    looplist3:[],
    looplist4:[],
    looplist5:[],
    photo:'',
				looplist:[],
				swiperOption: {
          slidesPerView: 3.5,
          spaceBetween: 0,
          centeredSlides: false,
         }  
        

			}
		},	

		mounted(){
			axios.get("/v2/page?pageId=1&tabId=10005&_=1533113939505").then(res=>{
				console.log(res.data)
				this.looplist = res.data.data.modules[0].moduleContent.banners;
        // axios.get("/v2/page?pageId=1&tabId=10005&_=1533113939505").then(res=>{
        // console.log(res.data)
        // this.looplist = res.data.data.modules[1].moduleContent.products;
        this.slides = res.data.data.modules[1].moduleContent.products;
        this.photo = res.data.data.modules[2].moduleContent.banners[0].bannerImgSrc;
        this.looplist1 = res.data.data.modules[2].moduleContent.products.slice(0,3);
        this.looplist2 = res.data.data.modules[3].moduleContent.banners;
        this.looplist3 = res.data.data.modules[4].moduleContent.products.slice(0,6);
        this.looplist4 = res.data.data.modules[5].moduleContent.products.slice(0,6);
        this.looplist5 = res.data.data.modules[6].moduleContent.products.slice(0,5);



			})
		},
		components:{
			footerbar,
			navbar,
			"swipe":Swipe,
			"swipe-item":SwipeItem,

			swiper,
      swiperSlide

		}
	}
</script>

<style scoped>
	*{
		padding: 0;
		margin: 0;
	}

	.my-swipe {
  height: 250px;
  
  

	}
	img{
		width: 100%;
	}
	.page-module-title {
    margin-top:14px;
	background: #fff;
  padding-top: 10px;
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
    body{
    	background: #f5f5f5;
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
  .name{
    font-size: 12px;
    color: #808080;
    white-space:nowrap;
    text-overflow: ellipsis;
    width: 84px;
    overflow: hidden;
    margin-left: 15px;
  }
	.jia{
    font-size: 10px;
    margin-left: 15px;
  }
  .see{
    height: 50px;
    background: #fff;
    text-align: center;
    line-height: 50px;
    font-size: 10px;
  }
  .jiao{
    height: 10px;
    width: 10px;

  }
  .bang{
    margin-top: 25px;
  }
  .jing{
    padding-left: 10px;
    background: #fff;
    height: 170px;
  }
  .jing li{
    
    float: left;
    width: 108.33px;
    height: 108.33px;
    margin-right: 13px;
  }
  .name1{
    font-size: 12px;
    color: #000;
    white-space:nowrap;
    text-overflow: ellipsis;
    width: 90px;
    overflow: hidden;
    margin-left: 10px;
  }
  .jia1{
    font-size: 10px;
    margin-left: 15px;
  }
  .tui img{
    width: 105px;
    height: 123.33px;
    float: left;
    margin-left: 15px;
  }
  .re{
    margin-top:27px;
    width: 100%;
    height: 140px;
    background: #fff;
  }
  .white{
    height: 1px;
    width: 100%;
    background: #fff;
    border-top: 1px solid #f5f5f5;
  }
  .list1 li img{
    display: block;
  }

  .list1 li{
    width: 50%;
    float: left;
    height: 297px;
    border: 1px solid #f5f5f5;
    box-sizing: border-box;
    background: #fff;
    border-left: none;
    border-top: none;
  }
  .list1 li p{
    font-size: 14px;
    color: #808080;
    margin-left: 15px;
  }
  .jia3{
    font-size: 16px;
    margin-left: 14px;
  }
  .bai{
    height: 49px;
    width: 100%;
    background: #fff;
    line-height: 49px;
    text-align: center;
  }
  .bai p{
    font-size: 12px;
  }
  .o{
    display: block;
    height: 100%;
    width: 2px;
    background: #0ff;
  }
  .box1{
    overflow: hidden;
  }
  .jiao1{
    height: 10px;
    width: 10px;
    margin-left:5px;
  }
 
</style>