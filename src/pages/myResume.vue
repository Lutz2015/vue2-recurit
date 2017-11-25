<template>
	<div class="home-box" style="height:100%">
		<first-form></first-form>
		<fixed-btn></fixed-btn>
	</div>
</template>
<script >
// 主页 投递记录 我的收藏 我的简历
	import fixedBtn from "../components/common/fixedBtn.vue"
	import firstForm from '../components/form/first.vue'

	export default {
		name: 'myResume',
		components: {
			fixedBtn,
			firstForm
		},
		data: function () {
			return {
				showLoading: false
			}
		},
		methods: {
		}
	}
</script>
<style lang="less" scoped>

</style>