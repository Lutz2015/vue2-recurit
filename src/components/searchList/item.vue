<template>
	<li class="banner-item ">
		<vc-ripple :itemv="item" :url="routeUrl"></vc-ripple>
		<router-link to="/jobDetail">
			<a :href="item.url" class="b-link" target="_blank">
				<div class="title-box clearfix">
					<div class="title" v-text="item.title"></div>
					<div class="money">{{item.money}}</div>
				</div>
				<div class="company-info-box clearfix">
					<div class="company">{{item.company}}</div>
					<div class="addr"><em class="icon-map"></em>{{item.addr}}</div>
				</div>
				<div class="tag-box clearfix">
					<span class="tag-item" v-for="tag in item.tag">{{tag}}</span>
				</div>
				<div class="apply-btn-box">申请</div>
			</a>
		</router-link>
	</li>
</template>
<script>
import vcRipple from '../common/ripple.vue';
export default {
	props: {
		item: {
			type: Object
		}
	},
	components: {
		vcRipple
	},
	data() {
		return {
			routeUrl: 'jobDetail'
		}
	},
	methods: {
	}
}
</script>

<style lang="less">
.icon-map {
  width: 12px;
  height: 12px;
  fill: #666;
}

.banner-item {
	padding: 12px 4%;
	position: relative;
}
.title{
	color: #666;
	font-size: 15px;
	text-align: left;
	float: left;
	max-width: 80%;
}
.money {
	float: right;
	font-size: 15px;
	color: #f00;
}
.company {
	float: left;
	color: #666;
	margin-right: 10px;
	font-size: 13px;
}
.addr {
	float: left;
	color: #666;
	font-size: 13px;
}
.tag-box {
	text-align: left;
}
.tag-item {
	color: #666;
	font-size: 12px;
	display: inline-block;
	margin-right: 5px;
	background-color: #aae2d7;
	padding: 4px;
	border-radius: 2px;
}
.title-box,
.company-info-box {
	margin-bottom: 12px;
}
.apply-btn-box {
	position: absolute;
	right: 4%;
	bottom: 16px;
	background-color: #f00;
	border-radius: 4px;
	height: 24px;
	line-height: 24px;
	text-align: center;
	font-size: 14px;
	width: 50px;
	color: #fff;
}

</style>