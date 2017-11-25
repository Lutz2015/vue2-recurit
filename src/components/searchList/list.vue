<template>
	<div class="search-list">
		<ul class="topic-preview" ref="banner">
			<search-item class="border-bt-e1"  v-for="(v,i) in list" :item="v" :key="v.id">
			</search-item>
		</ul>
	</div>
</template>
<script>
	import searchItem from "./item.vue"
	export default {
		name: 'searchList',
		components: {
			// oneLoad,
			searchItem
		},
		data: function () {
			return {
				showLoading: false,
				list: [{
					id: 111,
					title: '高级前端开发工程师',
					company: '北京京东世纪贸易有限公司 京东商城',
					addr: '北京-海淀',
					money: '13k-15k',
					tag: ['五险一金', '年底双薪', '交通补助'],
					status: 1
				},{
					id: 112,
					title: '前端架构师',
					company: '北京百度网讯科技有限公司 百度糯米',
					addr: '北京-海淀',
					money: '15k-18k',
					tag: ['五险一金', '免费体检', '交通补助', '带薪休假', '餐补'],
					status: 1
				},{
					id: 113,
					title: '高级前端开发工程师',
					company: '深圳市腾讯计算机系统有限公司 天美',
					addr: '深圳-南山区',
					money: '13k-15k',
					tag: ['五险一金', '年底双薪', '交通补助'],
					status: 1
					
				},{
					id: 114,
					title: '高级前端开发工程师',
					company: '阿里巴巴网络技术有限公司 菜鸟网络',
					addr: '深圳-南山区',
					money: '13k-15k',
					tag: ['五险一金', '年底双薪', '交通补助'],
					status: 1
					
				}]
			}
		},
		mounted () {
			for (var i = 5; i >= 0; i--) {
				this.list.push({
					id: i,
					title: '高级前端开发工程师',
					company: '北京百度网讯科技有限公司 百度糯米',
					addr: '北京-海淀',
					money: '18k-25k',
					tag: ['五险一金', '年底双薪', '交通补助'],
					status: 1
				})
			}
		}
	}
	
</script>