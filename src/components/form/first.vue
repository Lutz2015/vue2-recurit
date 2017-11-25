<template>
<div class="apply-second-main">
    <div class="apply-second-con" id="apply-second-con">
    	<div class="base-resume-title border-bt-e1">基础信息</div>
       	<div class="ui-input border-bt-e1">
       	    <label>姓名</label>
       	    <input type="text" name="" v-model="f.user_name" placeholder="填写2-10个字">
       	</div>
       	<div class="ui-input border-bt-e1">
       		<label for="">性别</label>
       		<div class="ui-input-checkbox">
       			<input type="radio" value="man" v-model="f.gender">男
       	    	<input type="radio" value="femeal" v-model="f.gender">女
       		</div>
       	</div>
       	
       	<div class="ui-input border-bt-e1">
       	    <label>手机号</label>
       	    <input type="tel" name="" v-model="f.user_phone" placeholder="未填写">
       	</div>
       	<div class="ui-input border-bt-e1">
       	    <label>邮箱</label>
       	    <input type="email" name="" v-model="f.email" placeholder="未填写">
       	</div>


       	<div class="ui-input border-bt-e1">
       	    <label>出生年月</label>
       	    <span class="input select-city" @click="open('birthday')">
       	    	<em class="city-name">{{birthdayText || '请选择出生年月'}}</em>
       	    	<i class="icon icon-arrow-right"></i>
       	    </span>
       	</div>
       	<div class="ui-input border-bt-e1">
       	    <label>最高学历</label>
       	    <span class="input select-city" @click="open('education', true)">
       	    	<em class="city-name">{{educationText || '请选择最高学历'}}</em>
       	    	<i class="icon icon-arrow-right"></i>
       	    </span>
       	</div>
       	<div class="ui-input border-bt-e1">
       	    <label>工作年限</label>
       	    <span class="input select-city" @click="open('workingyear', true)">
       	    	<em class="city-name">{{workingyearText || '请选择工作年限'}}</em>
       	    	<i class="icon icon-arrow-right"></i>
       	    </span>
       	</div>
       	<div class="ui-input border-bt-e1">
       	    <label>常驻城市</label>
       	    <span class="input select-city" @click="open('city')">
       	    	<em class="city-name">{{cityText || '请选择常驻城市'}}</em>
       	    	<i class="icon icon-arrow-right"></i>
       	    </span>
       	</div>
		
		<div class="apply-btn">
			<!-- <router-link to="/myResumeSecond" class="btn btn-active">下一步</router-link> -->
            <a href="javascript:void(0)" class="btn btn-active" @click="second">完成</a>
        </div>
       	
    </div>
    <div class="apply-second-con" id="apply-second-con">
    	<div class="base-resume-title border-bt-e1">求职信息</div>
       	<div class="ui-input border-bt-e1">
       	    <label>期望职位</label>
       	    <input type="text" name="" v-model="f.job" placeholder="未填写">
       	</div>
    </div>
    <picker v-model="birthdayVisible" :data-items="birthdayItems" @change="onBirthdayChange">
    	<div class="picker-top-content" slot="top-content">请选择您的生日</div>
    </picker>
    <picker v-model="educationVisible" :data-items="educationItems" @change="onEducationsChange"></picker>
    <picker v-model="workingyearVisible" :data-items="workingyearItems" @change="onWorkingyearChange"></picker>
    <picker v-model="cityVisible" :data-items="cityItems" @change="onCityValuesChange"></picker>
</div>
</template>
<script>
	import dateItem from './getDays.js';
	import educationItem from './getEducation.js';
	import cityPromise from './getCity.js';
	import workingyearItem from './getWorkingyear.js';

	// console.log(dateItem)
	export default {
		data() {
			return {
				f: {
					user_name: 'xiaolu',
					gender: 'femeal'
				},
				birthdayVisible: false,
				educationVisible: false,
				workingyearVisible: false,
				cityVisible: false,

      			birthdayItems:  dateItem,
      			educationItems: educationItem,
      			workingyearItems: workingyearItem,
      			cityItems: [],
      			birthdayText: '1989年11月11日',
      			educationText: '本科',
      			workingyearText: '1-2年',
      			cityText: '',
			}
		},
        mounted() {
        	// city
        	cityPromise().then((res) => {
        		// console.log(res);
        		this.cityItems = res.cityItem;
        		this.citys = res.citys;
        		this.lastProvince = res.lastProvince;
        	}, function (err) {

        	});
        },
        methods: {
        	open (v, oneDimensional) {
				this[v+'Visible'] = true;
				// console.log(this[v+'Items'][0])
				oneDimensional && this.setPickerValue(v)
				// this.setPickerValue(v)
				v == 'birthday' && (this.setBirthdayPickerValue(this.getYMD(this.birthdayText)))
			},
			setPickerValue(v) {
				let items = this[v+'Items'][0];
		      	let index = items.values.indexOf(this[v+'Text']);
		      	items.index = index > 0 ? index : 0;
			},
			getYMD(text) {
				let reg = /\d+/ig;
				let valueArr = text.match(reg);
				valueArr[0] += '年';
				valueArr[1] += '月';
				valueArr[2] += '日';
				return valueArr;
			},
			setBirthdayPickerValue(ymd) {
				// console.log(year, month, date)
				let items0 = this.birthdayItems[0];
				let items1 = this.birthdayItems[1];
				let items2 = this.birthdayItems[2];
				let index0 = 0;
				let index1 = 0;
				let index2 = 0;
				for (var i = items0.values.length - 1; i >= 0; i--) {
					if (items0.values[i].value == ymd[0]) {
						index0 = i;
					}
				}
				for (var j = items1.values.length - 1; j >= 0; j--) {
					if (items1.values[j].name == ymd[1]) {
						index1 = j;
					}
				}
				for (var k = items2.values.length - 1; k >= 0; k--) {
					if (items2.values[k].name == ymd[2]) {
						index2 = k;
					}
				}

				items0.index = index0;
				items1.index = index1;
				items2.index = index2;
			},

			// 城市
			onCityValuesChange (province, city) {
				city = city.name;
				this.cityItems[1].values = this.citys[province];
				this.cityText = `${province}, ${city}`;
			},

			getMaxDate (year, month) {
	            return (new Date(new Date(year, month, 1) - 1)).getDate();
	        },
	        // date
	        onBirthdayChange (year, month, date) {
	            year = year.value;
	            month = month.name;
	            date = date.name;

	            var maxDate = this.getMaxDate(parseInt(year), parseInt(month));
	            
	            this.birthdayItems[2].maxScrollValue = maxDate;

	            this.birthdayText = ''+year+ month+ date
	            // console.log('user ----->', year, month, date, this.birthdayItems[2]);
	        },
	        onEducationsChange(value) {
	        	this.educationText = value;
	        },
	        onWorkingyearChange(value) {
	        	this.workingyearText = value;
	        },
	        second(){}
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