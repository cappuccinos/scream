<template>
	<div id = "box">
		<ul>
			<li><a @click="who='recommend'">推荐</a></li>
			<li><a @click="who='furniture'">家具</a></li>
			<li><a @click="who='house'">家居</a></li>
			<li><a @click="who='activity'">活动</a></li>
		</ul>

    
         <component :is="who"></component>


	</div>
</template>

<script type="text/javascript">
	import recommend from "./index_components/recommend"
	import furniture from "./index_components/furniture"
	import house from "./index_components/house"
	import activity from "./index_components/activity"
	export default {
		name:"aaa",
		data(){
			return {

			}
		}
	}
	var vm = new Vue({
		el:"#box",
		data:{
			who:'recommend'
		},
		components:{
			recommend,
			furniture,
			house,
			activity
		}
	})
</script>

<style scoped >
	*{
		padding: 0;
		margin: 0;
	}
</style>