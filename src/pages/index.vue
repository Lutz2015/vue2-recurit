<template>
	<div class="index-box">
		<search :placeholder="searchPlaceholder"></search>
		<div class="home-links info-item clearfix">
			<div class="home-link-item" :style="fourBox" v-for="card in cards">
				<img class="home-link-item-img" :src="card.imgUrl">
				<p class="home-link-item-txt">{{card.name}}</p>
			</div>
			<div class=" other-links clearfix">
				<div class="other-link-item" :style="threeBox" v-for="o in otherLinks">{{o.name}}</div>
			</div>
		</div>
		
		<div class="info-item hot-jobs">
			<div class="">热门职位</div>
		</div>
		<div class="info-item recom-jobs">
			<div class="">推荐职位</div>
		</div>
	</div>
</template>
<script >
	import search from '../components/common/search.vue'

	export default {
		name: 'index',
		components: {
			search
		},
		data: function () {
			return {
				showLoading: false,
				searchPlaceholder: '搜索职位或者企业',
				cards: [{
					name: '薪资高',
					imgUrl: 'http://placehold.it/40?text=40'
				},{
					name: '包吃住',
					imgUrl: 'http://placehold.it/40?text=40'
				},{
					name: '五险一金',
					imgUrl: 'http://placehold.it/40?text=40'
				},{
					name: '企业入驻',
					imgUrl: 'http://placehold.it/40?text=40'
				}],
				otherLinks: [{
					name: '我的简历',
					link: '/'
				},{
					name: '我的收藏',
					link: '/'
				},{
					name: '申请记录',
					link: '/'
				}]
			}
		},
		computed: {
			threeBox() {
				let dcW = document.documentElement.clientWidth;
				let mr = 6;
				let itemW = (dcW - dcW * .04 * 2 - mr * 2) / 3;
				return 'width: '+ itemW +'px'
			},
			fourBox() {
				let dcW = document.documentElement.clientWidth;
				let mr = 10;
				let itemW = Math.floor((dcW - dcW * .04 * 2 - mr * 3) / 4);
				return 'width: '+ itemW +'px'
			}
		}
	}
</script>
<style lang="less">
   .index-box {
   		background-color: #f5f5f5;
   		font-size: 14px;
   }
   .info-item {
   		background-color: #fff;
   		margin-bottom: 10px;
   		padding: 0 4%;
   }
	.home-links {
		padding-top: 10px;
		padding-bottom: 10px;
		
		.home-link-item {
			display: inline-block;
			font-size: 12px;
			margin-right: 10px;
			&:nth-child(4){
				margin-right: 0;
			}
			.home-link-item-img {
				width: 100%;
				display: inline-block;
				border-radius: 50%;
			}
		}
	}
	.other-links {
		margin-top: 15px;
		.other-link-item {
			display: inline-block;
			height: 40px;
			line-height: 40px;
			background-color: #f5f5f5;
			font-size: 14px;
			margin-right: 6px;
			&:last-child{
				margin-right: 0;
			}
		}
	}

	.hot-jobs,
	.recom-jobs {
		text-align: left;
	}
</style>