<template>
	<div class="search-middle-box">
		<search :placeholder="searchPlaceholder" :middle="isMiddle"></search>
		<div class="search-con hot-search">
			<div class="search-title">热门搜索</div>
			<div class="search-item-con border-bt-e1 ">
				<div class="search-item" :style="fourBox"  v-for="(item, index) in hotSearchItems">{{item.name}}</div>
			</div>
		</div>
		<div class="search-con recent-search" v-show="showHistory">
			<div class="search-title">最近搜索</div>
			<div class="recent-search-item border-bt-e1" v-for="(item, index) in recentSearchItems">{{item.name}}</div>
			<div class="clear-history" @click="clearHistory">清除历史记录</div>
		</div>
		<div @click="clicksheetShow">actionsheet</div>
		<actionsheet :show="sheetShow" :title="sheetTitle">
			<ul class="line-list line-list--center">
	            <li class="line-item" @click="choseStatus(item.status)" v-for="item in jodStatus">{{item.name}}</li>
	        </ul>
		</actionsheet>

		<div @click="clickjobsheetShow">jobsheet</div>
		<jobfiltersheet :show="jobsheetShow" :title="jobsheetTitle">
		</jobfiltersheet>


	</div>
</template>
<script >
	import search from '../components/common/search.vue'
	import actionsheet from '../components/common/actionsheet.vue'
	import jobfiltersheet from '../components/common/jobfilter.vue'
	
	export default {
		name: 'searchMiddle',
		components: {
			search,
			actionsheet,
			jobfiltersheet
		},
		data: function () {
			return {
				sheetTitle: '工作状态',
				sheetShow: false,
				jodStatus:[{
					name: '求职中',
					status: 1
				},{
					name: '已找到工作',
					status: 2
				}],

				jobsheetTitle: '选择期望职位（最多选5个）',
				jobsheetShow: false,

				showHistory: true,
				isMiddle: true,
				searchPlaceholder: '司机',
				hotSearchItems: [{
					name: '仓管'
				},{
					name: '店长'
				},{
					name: '服务员'
				},{
					name: '保安'
				},{
					name: '物业'
				},{
					name: '模特'
				},{
					name: '快递员'
				},{
					name: '司机'
				}],
				recentSearchItems:[{
					name: '仓管'
				},{
					name: '店长'
				},{
					name: '服务员'
				},{
					name: '保安'
				},{
					name: '物业'
				}]
			}
		},
		computed: {
			fourBox() {
				let dcW = document.documentElement.clientWidth;
				let mr = 10;
				let itemW = Math.floor((dcW - dcW * .04 * 2 - mr * 3) / 4);
				return 'width: '+ itemW +'px'
			}
		},
		methods: {
			choseStatus(status) {
				console.log(status)
				this.sheetShow = false;
			},
			clicksheetShow() {
				this.sheetShow = !this.sheetShow;
			},
			clickjobsheetShow() {
				this.jobsheetShow = !this.jobsheetShow;
			},
			clearHistory() {
				let self = this;
				this.$popup.confirm({
		            title: '<h4 class="title icon-alert"></h4><p>已为您成功申请5个职位!</p>',
		            cancelText: '查看申请记录',
		            cancelCb: function () {
		                this.close();
		                self.openLoading();
		            },
		            okText: '知道了',
		            okCb: function () {
		            	this.close();
		            }
		        });
				// this.$toast('清除成功！');
				// this.showHistory = false;
			},
			openLoading(){
	            this.$loading('loading...');
				let self = this;
		        setTimeout(function () {
		          self.closeLoading()
		        }, 2000)
	        },
	        closeLoading(){
	            this.$loading.close();
	        }
		}
	}
</script>
<style lang="less">
@import url(../components/popup/popup.less);
	.search-middle-box {
		text-align: left;
		font-size: 14px;
		.search-title {
			background-color: #f5f5f5;
			color: #999;
			font-size: 11px;
			padding-left: 4%;
			line-height: 30px;
		}
		.search-item {
			display: inline-block;
			background-color: #fff;
			height: 40px;
			line-height: 40px;
			text-align: center;
			margin-right: 10px;
			margin-bottom: 10px;
			&:nth-child(4n+1) {
				margin-right: 0;
			}
			&:nth-child(4n-2) {
				margin-left: 4%;
			}
		}
		.recent-search-item {
			height: 40px;
			line-height: 40px;
			margin-left: 4%;
			color: #999;
		}
		.clear-history {
			text-align: center;
			line-height: 40px;
			color: #666;
		}
	}
</style>