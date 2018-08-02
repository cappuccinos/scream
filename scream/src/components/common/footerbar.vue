<template>
	<div class="footer">
		<ul class="clearfix">
		        <li>
		            <a href="/pages/index" id="home" class="active">
		                <img src="../../assets/home.png">
		                <span>首页</span>
		            </a>
		        </li>
		        <li>
		            <a href="/pages/category" id="category">
		                <img src="../../assets/category.png">
		                <span>分类</span>
		            </a>
		        </li>
		        <li>
		            <a href="/cart/list/main" id="cart">
		                <img src="../../assets/buy.png">
		                <span>购物车</span>
		                <div class="backBoard" id="cartItemQtyDiv" hidden="" style="display: none;">
		                    <span id="cartItemQty">
		                    </span>
		                </div>
		            </a>
		        </li>
		        <li>
		            <a href="/message/main" id="message">
		                <img src="../../assets/message.png">
		                <span>消息</span>
		                <div class="backBoard2" id="unReadQtyDiv" hidden="" style="display: none;">
		                </div>
		            </a>
		        </li>
		        <li>
		            <a href="/user/userCenterPage" id="user">
		                <img src="../../assets/me.png">
		                <span>我</span>
		            </a>
		        </li>
		    </ul>
	</div>
</template>

<script type="text/javascript">
	
	export default {
		name:"index",
		data(){
			return {

			}
		}
	}
</script>

<style scoped >
	*{
		padding: 0;
		margin: 0;
	}
	.footer{
  /*     line-height: 50px;*/     
  		width: 375px;
	    height: 44px;
	    position: fixed;
	    margin: 0 auto;
	    bottom: 0;
	    background: #fff;
	    border-top: 1px solid #f5f5f5;
	    z-index: 1;
	}
	ul{
		width: 100%;
		height: 100%;
		list-style: none;
		
	}
	li {
	    float: left;
	    width: 20%;
	    height: 100%;
	    color: #000;
	    text-align: center;
	    list-style: none;
	}
	li a {
    color: #000;
    display: block;
    width: 100%;
    height: 100%;
    position: relative;
    text-decoration: none;
	}

	li img {
    display: block;
    width: 23px;
	margin-left: 34%;
    }
    li span {
    font-size: 12px;
    display: block;
    }
    .active{
    	color: #000;
    	font-weight: 700;
    }
</style>