<template>
	<section class="panel-wrap" :class="{active: showSheet}">
	    <div class="overlay"></div>
	    <section class="bottom-panel panel--actionsheet">
	    	<div class="panel-header border-bt-e1">
	    		<span class="panel-title">{{title}}</span>
	    		<i class="icon icon-close panel-close" @click="cancel"></i>
	    	</div>
            <slot></slot>
	        
	        <ul class="line-list line-list--center">
	            <li class="line-item" @click="cancel">取消</li>
	        </ul>
	    </section>
	</section>
</template>
<script>
export default {
	name: "actionsheet",
	props: {
		show: {
			type: Boolean,
			default: false
		},
		title: {
			type: String,
			default: '提示'
		}
	},
	data() {
		return {
			showSheet: this.show
		}
	},
	watch: {
		show(val) {
			this.showSheet = val;
		}
	},
	mounted() {
		let self = this;
		$('.overlay').on('click', function(){
			self.showSheet = false;
		})
	},
	methods: {
		cancel() {
			this.showSheet = false;
		}
	}
}
</script>
<style lang="less" scoped>
.overlay {
  display: none;
  background: rgba(0, 0, 0, 0.7);
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 4000;
}

.active .overlay, .overlay.active {
  display: block;
}

.overlay.overlay--no-header {
  top: 44px;
}

.overlay.overlay--transparent {
  background: transparent;
}
.header-panel,
.bottom-panel {
  position: fixed;
  left: 0;
  right: 0;
  z-index: 4005;
  background: #fff;
}

.header-panel {
  top: 44px;
}

.bottom-panel {
  bottom: 0;
}

.panel--picker {
  display: none;

}

.active .panel--picker {
    display: block;

    
}

.panel--picker .panel-hd {
  background: #f5f5f5;
  line-height: 44px;
  color: #007aff;
}

.panel--picker .panel-hd .hd-btn {
  padding: 0 15px;
}

.picker-list,
.picker-item {
  overflow: hidden;
  position: relative;
}

.picker-item {
  background-color: #fff;
  height: 180px;
  box-sizing: border-box;
}

.picker-item .select-list {
  text-align: center;
  line-height: 36px;
  color: #ccc;
}

.picker-item .select-list li.active {
  color: #333;
}

.picker-item::before, .picker-item::after {
  content: "";
  height: 1px;
  background-color: #007aff;
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  margin-top: -18px;
}

.picker-item::after {
  margin-top: 18px;
}

.picker-mask {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  pointer-events: none;
  background: -webkit-linear-gradient(top, white 0%, rgba(255, 255, 255, 0) 45%, rgba(255, 255, 255, 0) 55%, rgba(255, 255, 255, 0) 60%, white 100%);
  background: linear-gradient(to bottom, white 0%, rgba(255, 255, 255, 0) 45%, rgba(255, 255, 255, 0) 55%, rgba(255, 255, 255, 0) 60%, white 100%);
}

.picker-list {
  position: relative;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
}

.picker-list .picker-item {
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  -ms-flex: 1;
  flex: 1;
  width: 1%;
}

.picker-tips {
  text-align: center;
}

.panel--filter {
  top: 44px;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  height: 176px;
}

.panel--actionsheet {
  background: #f5f5f5;
  display: none;
  // -webkit-transition: -webkit-transform .3s,opacity .3s;
  //   transition: transform .3s,opacity .3s;
}

.active .panel--actionsheet {
  display: block;
  // -webkit-transform: translate3d(0,0,0);
  // transform: translate3d(0,0,0);
}

.panel--actionsheet .line-list {
  position: relative;
}

.panel--actionsheet .line-list::after {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  box-sizing: border-box;
  right: 0;
  height: 0;
  -webkit-transform: scaleY(0.5);
  -ms-transform: scaleY(0.5);
  transform: scaleY(0.5);
  border-top: 1px solid #dbdbdb;
  top: auto;
  bottom: 0;
}

.panel--actionsheet .line-list:last-of-type::after {
  top: 0;
  bottom: auto;
}
.line-list--center {
  text-align: center;
}
.line-list + .line-list {
  margin-top: 10px;
}
.line-list {
  background: #fff;
}
.line-item {
  line-height: 34px;
  padding: 5px 10px;
  position: relative;
  display: block;
  overflow: hidden;
}

.line-item:active, .line-item:hover {
  background-color: #ededed;
}

.panel-header {
	position: relative;
	background-color: #fff;
}
.panel-title {
	display: inline-block;
	margin-left: 4%;
	font-size: 14px;
	height: 46px;
	line-height: 46px;
}
.panel-close {
	position: absolute;
	top: 50%;
	right: 4%;
	-webkit-transform: translate(0, -50%);
	transform: translate(0, -50%);
	// margin-right: 4%;
}
</style>