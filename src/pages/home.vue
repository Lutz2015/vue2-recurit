<template>
	<div class="home-box">
		<search></search>
		<!-- 有条件筛选&滚动分页加载 -->
		<!-- <div v-for="(v, k) in filterData"
			:key="k">
			<div v-if="k=='money_sort'">{{v}}</div>	
		</div> -->
		<section>
			<vue-filter
				v-show="true"
				@select="selectSearchFilter"
				@sticky="toSticky"
				@fixed="toFixed">
				<vue-filter-item
				  v-for="(v, k) in filterData"
				  :key="k"
				  :head="v.head">
				        <vue-filter-layer-column
				        	:list="v"
				        	@searchfilter="selectSearchFilter"
							:type="k">
				        </vue-filter-layer-column>
				</vue-filter-item>
		  	</vue-filter>

		  	<div id="filterClone" style="display: none;position: relative;width: 100%; height: 42px; background: none; border: none;"></div>

		  	<section class="poi-container" v-if="true">
				<search-list v-if="true"></search-list>
		  	</section>
	  	</section>
	  	<router-link to="/myResume">
			<a :class="linkClass" href="javascript:void(0)">
	            <img :src="linkImgUrl">
	        </a>
        </router-link>
		<!-- <router-link to="/jobDetail">/前往职位详情</router-link> -->
		<one-load v-show="showLoading"></one-load>
		<back-to-top text="Back to top" visibleOffset="500"></back-to-top>
	</div>
</template>

<script >
	// 吸顶筛选栏
	import vueFilter from '../components/vue-filter/index.vue';
	import vueFilterItem from '../components/vue-filter/vue-filter-item.vue';
	import vueFilterLayerColumn from '../components/vue-filter/vue-filter-layer-column.vue';
	import filterDatas from '../components/vue-filter/data.js'

	import oneLoad from "../components/common/loading.vue"
	import searchList from '../components/searchList/list.vue'
	import search from '../components/common/search.vue'
    
    const mapF1 = [{
    	n: '附近',
    	v: 'area'
    },{
    	n: '福利不限',
    	v: 'sort'
    },{
    	n: '薪资不限',
    	v: 'money_sort'
    },{
    	n: '筛选',
    	v: 'common_advance'
    }]
   const mapF = {
    	'area': '附近',
  		"sort": '福利不限',
  		"money_sort": '薪资不限',
  		"common_advance": '筛选'
    };
   
	export default {
		name: 'home',
		components: {
			vueFilter,
			vueFilterItem,
			vueFilterLayerColumn,
			oneLoad,
			searchList,
			search,
		},
		data: function () {
			return {
				mapF: mapF,
				showLoading: false,
				filterData: this.getFilterDatas(filterDatas.data.data),
				linkImgUrl: 'https://gss0.baidu.com/-4o3dSag_xI4khGko9WTAnF6hhy/nuomi/pic/item/8718367adab44aedaa360ba9b81c8701a18bfb07.jpg'
			}
		},
		mounted () {
			this.$on('vuesearchfilter', (res) =>{
				this.selectSearchFilter(res);
			});
		},
		computed: {
	        linkClass: function() {
	            var className = {
	                'fixed-link': true
	            }
                var position = ['', 'up-left', 'up-right', 'middle-left', 'middle-right', 'bottom-left', 'bottom-right', 'function-right', 'function-right-click'][4];
                className[position] = true;
	            return className;
	        }
	    },
		methods: {
			getFilterDatas(d) {
				for(var k in d) {
					if (d.hasOwnProperty(k)) {
						d[k].head =  {
							n: mapF[k],
							v: '-1'
						};
					}
				}
				return d;
			},
			toSticky () {
				$('#filterClone').hide();
			},
			toFixed () {
			  	$('#filterClone').show();
			},
			selectSearchFilter (res) {
				let queryParams = {};
				let self = this;
				console.log('接收到参数1：',res)
			},
			chosedForRequest(){

			}
		}
	}
</script>
<style lang="less" scoped>
.fixed-link {
	position: fixed;
	display: block;
	z-index: 999;
	width: 73px;
	height: 63px;
	img {
		width: 40px;
		height: 40px;
	}
	&.middle-right {
		transition: all 0.5s ease-in;
		-webkit-transition: all 0.5s ease-in;
		right: 0;
		top: 50%;
		transform: translate(0, -50%);
		-webkit-transform: translate(0, -50%);
		&.no-active {
			transform: translate(40px, 0);
			-webkit-transform: translate(40px, 0);
		}
	}
}
</style>