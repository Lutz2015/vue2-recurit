<template>
	<div class="home-box">
		<h4>公司简介</h4>
	</div>
</template>
<script >
	import oneLoad from "../components/common/loading.vue"
	import searchList from '../components/searchList/list.vue'

	export default {
		name: 'company',
		components: {
			oneLoad,
			searchList
		},
		data: function () {
			return {
				showLoading: false
			}
		}
	}
</script>
<style>
	
</style>