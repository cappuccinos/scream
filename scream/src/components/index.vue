<template>
	<div id="box">
	<navbar></navbar>
	<div class="hd">
		<ul>
			<li class=""><a @click="who='recommend'">推荐</a></li>
			<li class=""><a @click="who='furniture'">家具</a></li>
			<li class=""><a @click="who='house'">家居</a></li>
			<li class=""><a @click="who='activity'">活动</a></li>
		</ul>
	</div>
    
        <component :is="who"></component>
	<footerbar></footerbar>
			
	</div>
</template>

<script type="text/javascript">
	import footerbar from "./common/footerbar"
	import navbar from "./common/navbar"
	import recommend from "./index_components/recommend"
	import furniture from "./index_components/furniture"
	import house from "./index_components/house"
	import activity from "./index_components/activity"
	

	export default {
		name:"index",
		data(){
			return {
				who:'recommend'	
			}
		},
		components:{
			footerbar,
			navbar,
			activity,
			recommend,
			furniture,
			house
		}
	}

</script>

<style>
	*{
		padding: 0;
		margin: 0;
	}
	.hd{
		height: 40px;
		line-height: 40px;
		font-size:14px;
		background: #fff;
	}
	.hd ul{
		height: 40px;
		overflow: hidden;
	}
	.hd ul li{
		float: left;
		color: #808080;
		margin: 0 22px;
		font-size: 14px;
		padding: 0 10px;
	}
	/*.active{
		border-bottom: 2px solid #red;
		background-color: red;
	}*/
</style>