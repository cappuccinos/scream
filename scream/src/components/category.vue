<template>
	<div>
	<navbar></navbar>
		<div class="accordion">
			<div class="content">
				<img src="../assets/furniture.png" class="category-image">

				<ul>
                <li>
                    <a href="#" class="clearfix">
                        <span>沙发</span>
                        <i class="iconfont icon-right"></i>
                    </a>
                </li>
                <li>
                    <a href="#" class="clearfix" >
                        <span>椅凳</span>
                        <i class="iconfont icon-right"></i>
                    </a>
                </li>
                <li>
                    <a href="#" class="clearfix" >
                        <span>桌几</span>
                        <i class="iconfont icon-right"></i>
                    </a>
                </li>
                <li>
                    <a href="#" class="clearfix" >
                        <span>床</span>
                        <i class="iconfont icon-right"></i>
                    </a>
                </li>
                <li>
                    <a href="#" class="clearfix" >
                        <span>储物</span>
                        <i class="iconfont icon-right"></i>
                    </a>
                </li>
            </ul>
			</div>

			<div class="content">
				<img src="../assets/household.png" class="category-image">

				<ul>
                <li>
                    <a href="#" class="clearfix">
                        <span>灯具</span>
                        <i class="iconfont icon-right"></i>
                    </a>
                </li>
                <li>
                    <a href="#" class="clearfix" >
                        <span>用餐</span>
                        <i class="iconfont icon-right"></i>
                    </a>
                </li>
                <li>
                    <a href="#" class="clearfix" >
                        <span>时尚生活</span>
                        <i class="iconfont icon-right"></i>
                    </a>
                </li>
                <li>
                    <a href="#" class="clearfix" >
                        <span>收纳</span>
                        <i class="iconfont icon-right"></i>
                    </a>
                </li>
                <li>
                    <a href="#" class="clearfix" >
                        <span>烹饪</span>
                        <i class="iconfont icon-right"></i>
                    </a>
                </li>
                                <li>
                    <a href="#" class="clearfix" >
                        <span>纺织品</span>
                        <i class="iconfont icon-right"></i>
                    </a>
                </li>
                <li>
                    <a href="#" class="clearfix" >
                        <span>家饰</span>
                        <i class="iconfont icon-right"></i>
                    </a>
                </li>
                <li>
                    <a href="#" class="clearfix" >
                        <span>儿童</span>
                        <i class="iconfont icon-right"></i>
                    </a>
                </li>
                <li>
                    <a href="#" class="clearfix" >
                        <span>卫浴</span>
                        <i class="iconfont icon-right"></i>
                    </a>
                </li>
            </ul>
			</div>	
		</div>
	<footerbar></footerbar>
	</div>
</template>

<script type="text/javascript">
	require('../../static/font/iconfont.css');
	import footerbar from "./common/footerbar"
	import navbar from "./common/navbar"
	export default {
		name:"cart",
		data(){
			return {}
		},
		components:{
			footerbar,
			navbar
		}
	}
</script>

<style>
	*{
		padding: 0;
		margin: 0;
	}
	#app{
		overflow: hidden;
	}
	div{
		border:none;
	}
	.accordion{
		width: 100%;
		height:1070px;
		background: #fff;
		position: relative;
		padding:0px 30px 30px 0px;
	}
	.content {
    	padding: 10px 0px 0px;
	}
	.category-image{
		width: 92%;
		height: 115px;
		margin-left:15px;
	}
	.content ul{
		list-style: none;
		padding:0px 15px 15px 0px;
		margin-left:20px;
	}
	.content ul li{
		height: 50px;
		line-height: 50px;
		border-bottom: 2px solid #eee;
		width: 100%;
		font-size: 15px;
		text-indent: 15px;
	}
	.content ul li a{
		text-decoration: none;
		color: #000;
	}
	.content ul li i{
		float: right;
		color: #eee;
	}




</style>