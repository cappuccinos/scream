<template>
	<div>
	<navbar></navbar>
	<footerbar></footerbar>
	
	</div>
</template>

<script type="text/javascript">
	import footerbar from "./common/footerbar"
	import navbar from "./common/navbar"

	export default {
		name:"index",
		data(){
			return {

			}
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
</style>