<template>
	<div class="job-detail-box">
		<div class="info-item " v-show="detail.info">
			<h4 class="title">{{detail.info.title}}</h4>
			<div class="content border-bt-e1 clearfix">
				<div class="money">{{detail.info.money}}</div>
				<div class="date">{{detail.info.date}}</div>
			</div>
			<div class="requirement">
				<div class="requirement-item">
					<span class="requirement-item-label">要求:</span>
					<span>{{detail.info.requirement}}</span>
				</div>
				<div class="requirement-item">
					<span class="requirement-item-label">福利:</span>
					<span class="welfare-item" v-for="i in detail.info.welfare">{{i}}</span>
				</div>
			</div>
		</div>
		<div class="info-item" v-show="detail.position">
			<h4>工作地点</h4>
			<div>{{detail.position.po}}</div>
		</div>
		<div class="info-item" v-show="detail.desc">
			<h4>职位描述</h4>
			<div>{{detail.desc.de}}</div>
		</div>
		<div class="info-item" v-show="detail.company">
			<h4>{{detail.company.title}}</h4>
			<div>{{detail.company.desc}}</div>
		</div>
		<div class="info-item">
			<h4>相似职位推荐</h4>
			<div></div>
		</div>
		<!-- <router-link to="/">/home</router-link> -->
	</div>
</template>
<script >

	export default {
		name: 'jobDetail',
		data: function () {
			return {
				showLoading: false,
				detail: {
					info: {
						title: '给领导开丰田月6千',
						money: '5000-8000元/月',
						date: '10-24日更新',
						requirement: '招10人/10年经验／学历不限',
						welfare: ['五险一金','包吃住','周末双休','饭补']
					},
					position: {
						po: '北京市海淀区上地西路52号辉煌国际大厦'
					},
					desc: {
						de: '内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容'
					},
					company: {
						title: '德邦物流股份有限公司',
						desc: '内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容'
					}
				}
			}
		}
	}
</script>
<style lang="less">
	.job-detail-box {
		background-color: #f5f5f5;

	}
	.info-item {
		background-color: #fff;
		text-align: left;
		margin-bottom: 10px;
		padding: 12px 4%;
		font-size: 14px;

		.title {
			height: 28px;
			line-height: 28px;
		}
		.content {
			height: 26px;
			line-height: 26px;

			.money {
				float: left;
				color: #f00;
				font-size: 12px;
			}
			.date {
				float: right;
				color: #666;
				font-size: 12px;

			}
		}
		.requirement {
			font-size: 12px;
			padding-top: 10px;
			.requirement-item-label {
				color: #999;
				display: inline-block;
				margin-right: 5px;
			}
			.welfare-item {
				display: inline-block;
				margin-right: 5px;
				border-radius: 3px;
				padding: 2px;
				font-size: 11px;
				background-color: #f5f5f5;
			}
		}
	}
</style>