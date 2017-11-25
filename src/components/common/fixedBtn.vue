<template>
	<div class="fixed-quick-tool" @click="showFixBtn()"  :class="{'active': showBtn}">
	    <span class="tool-switch" ><i class="icon-plus"></i></span>
	    <ul class="tool-list">
	        <li class="tool-item" v-for="r in routerLinks">
	            <router-link :to="r.route">{{r.name}}</router-link>
	        </li>
	    </ul>
	</div>
</template>
<script>
export default {
	name: "fixedbtn",
	data: function () {
		return {
			showBtn: false,
			routerLinks: [{
				name: '主页',
				route: '/'
			},{
				name: '投递',
				route: '/company'
			},{
				name: '收藏',
				route: '/jobDetail'
			},{
				name: '简历',
				route: '/myResume'
			},{
				name: '',
				route: '/myResume'
			}]
		}
	},
	methods: {
		showFixBtn() {
			this.showBtn = !this.showBtn;
		}
	}
}
</script>
<style lang="less" scoped>
.fixed-quick-tool {
  position: fixed;
  right: 10px;
  bottom: 80px;
  color: #fff;
  z-index: 999;
}

.fixed-quick-tool .tool-switch {
  width: 44px;
  height: 44px;
  display: block;
  background: rgba(0, 0, 0, 0.7);
  border-radius: 50%;
  -webkit-transition: -webkit-transform 0.3s cubic-bezier(0.42, 0, 0.58, 1);
  transition: -webkit-transform 0.3s cubic-bezier(0.42, 0, 0.58, 1);
  transition: transform 0.3s cubic-bezier(0.42, 0, 0.58, 1);
  transition: transform 0.3s cubic-bezier(0.42, 0, 0.58, 1), -webkit-transform 0.3s cubic-bezier(0.42, 0, 0.58, 1);
}

.fixed-quick-tool .tool-switch .icon-plus {
  display: block;
  width: 44px;
  height: 44px;
}
.icon-plus {
  position: relative;
}

.icon-plus::before, .icon-plus::after {
  content: "";
  width: 16px;
  height: 2px;
  background-color: currentColor;
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate3d(-50%, -50%, 0);
  transform: translate3d(-50%, -50%, 0);
}

.icon-plus::after {
  width: 2px;
  height: 16px;
}
.fixed-quick-tool .tool-list {
  width: 40px;
  height: 40px;
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate3d(-50%, -50%, 0);
  transform: translate3d(-50%, -50%, 0);
}

.fixed-quick-tool .tool-item {
  width: 40px;
  height: 40px;
  position: absolute;
  background: #007aff;
  border-radius: 50%;
  opacity: 0;
  -webkit-transition: opacity 0.3s linear, -webkit-transform 0.3s cubic-bezier(0.42, 0, 0.58, 1);
  transition: opacity 0.3s linear, -webkit-transform 0.3s cubic-bezier(0.42, 0, 0.58, 1);
  transition: opacity 0.3s linear, transform 0.3s cubic-bezier(0.42, 0, 0.58, 1);
  transition: opacity 0.3s linear, transform 0.3s cubic-bezier(0.42, 0, 0.58, 1), -webkit-transform 0.3s cubic-bezier(0.42, 0, 0.58, 1);
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
}
.tool-item {
	z-index: 997;
	a {
		width: 100%;
		font-size: 10px;
	}
	&:nth-of-type(2) a {
		-webkit-transform: rotate(-30deg) translateX(0);
    	transform: rotate(-30deg) translateX(0);
	}
	&:nth-of-type(3) a {
		-webkit-transform: rotate(-60deg) translateX(0);
    	transform: rotate(-60deg) translateX(0);
	}
	&:nth-of-type(4) a {
		-webkit-transform: rotate(-90deg) translateX(0);
    	transform: rotate(-90deg) translateX(0);
	}
}
.fixed-quick-tool.active .tool-switch {
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}

.fixed-quick-tool.active .tool-item {
  opacity: 1;
}

.fixed-quick-tool.active .tool-item:nth-of-type(1) {
  -webkit-transform: rotate(0deg) translateX(-80px);
  -ms-transform: rotate(0deg) translateX(-80px);
  transform: rotate(0deg) translateX(-80px);
}

.fixed-quick-tool.active .tool-item:nth-of-type(1) .item-icon {
  -webkit-transform: rotate(0deg);
  -ms-transform: rotate(0deg);
  transform: rotate(0deg);
}

.fixed-quick-tool.active .tool-item:nth-of-type(2) {
  -webkit-transform: rotate(30deg) translateX(-80px);
  -ms-transform: rotate(30deg) translateX(-80px);
  transform: rotate(30deg) translateX(-80px);
}

.fixed-quick-tool.active .tool-item:nth-of-type(2) .item-icon {
  -webkit-transform: rotate(-30deg);
  -ms-transform: rotate(-30deg);
  transform: rotate(-30deg);
}

.fixed-quick-tool.active .tool-item:nth-of-type(3) {
  -webkit-transform: rotate(60deg) translateX(-80px);
  -ms-transform: rotate(60deg) translateX(-80px);
  transform: rotate(60deg) translateX(-80px);
}

.fixed-quick-tool.active .tool-item:nth-of-type(3) .item-icon {
  -webkit-transform: rotate(-60deg);
  -ms-transform: rotate(-60deg);
  transform: rotate(-60deg);
}

.fixed-quick-tool.active .tool-item:nth-of-type(4) {
  -webkit-transform: rotate(90deg) translateX(-80px);
  -ms-transform: rotate(90deg) translateX(-80px);
  transform: rotate(90deg) translateX(-80px);
}

.fixed-quick-tool.active .tool-item:nth-of-type(4) .item-icon {
  -webkit-transform: rotate(-90deg);
  -ms-transform: rotate(-90deg);
  transform: rotate(-90deg);
}
.fixed-quick-tool.active .tool-item:nth-of-type(5) {
	background: transparent;
}
</style>