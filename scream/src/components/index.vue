<template>
	<div id="box">
	<navbar></navbar>
		<ul>
			<li><a @click="who='recommend'">推荐</a></li>
			<li><a @click="who='furniture'">家具</a></li>
			<li><a @click="who='house'">家居</a></li>
			<li><a @click="who='activity'">活动</a></li>
		</ul>

    
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
	
</style>