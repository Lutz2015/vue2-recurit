<template>
	<div class="apply-second-main">
	    <div class="apply-second-con" id="apply-second-con">
	    	<div class="base-resume-title border-bt-e1">求职信息</div>
	       	<div class="ui-input border-bt-e1">
	       	    <label>期望职位</label>
	       	    <input type="text" name="" v-model="f.user_name" placeholder="未填写">
	       	</div>
	    </div>

	    <div class="apply-btn">
            <a href="javascript:void(0)" class="btn btn-active" @click="save">save</a>
        </div>
    </div>
</template>
<script>
export default {
	name: "second",
	data() {
		return {
			f: {
				user_name: ''
			}
		}
	},
	methods: {
    	save () {
		}
	}
}
</script>
<style lang="less">
.apply-second-main{
	padding: 0 4%;
	height: 100%;
	clear: both;
	position: relative;
	z-index: 10;
}
	.apply-second-con{
		background-color: #fff;
	}
	.base-resume-title{
		height: 44px;
		line-height: 44px;
		text-align: left;
		font-size: 16px;
		color: #000;
	}
	.ui-input{
		padding: 0 5px;
		height: 44px;
		line-height: 44px;
		width: 100%;
		overflow: hidden;
		position: relative;
		padding-left: 80px;
		label{
			font-size: 15px;
			line-height: 44px;
			text-align: left;
			color: #333;
			height: 44px;
			display: inline-block;
			position: absolute;
			left: 5px;
		}
		input,
		.input{
			color: #999;
			font-size: 14px;
			text-align: right;
			width: 100%;
			height: 100%;
			display: inline-block;
			position: relative;
		}
		input[type="radio"] {
			width: auto;
		}
		.ui-input-checkbox {
			text-align: right;
		}
		.select-city{
			text-align: right;
			.city-name{
				font-size: 15px;
				color: #333;
			}
			i.icon{
				float: right;
				margin-left: 13px;
				margin-top: 16px;
			}
		}
	}
</style>