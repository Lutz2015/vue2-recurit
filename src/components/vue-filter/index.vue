<template>
    <div class="vue-filter-bar-wrapper" :class="{'sticky': filterPosition === 1, 'Fixed': filterPosition ===2}" ref="main">
        <div class="vue-filter">
            <div class="vue-filter-bar">
                <ul class="border-bt-e1">
                    <li class="vue-filter-tab-item" :class="{'active' : (activeTab == tabIndex) && activeLayer}" v-for="(tabItem, tabIndex) in tabHeadList" :key="tabIndex" :style="{width: '25%'}" @click="selectFilterTab(tabIndex, $event)">{{tabItem.n}}
                    </li>
                </ul>
            </div>
        </div>
        <div class="vue-filter-layer">
            <slot></slot>
        </div>
    </div>
</template>

<script>
/**
 * @File Filter 筛选条组件
 * @Author Lori(wangccong@baidu.com)
 * @Date 2016-12-08 16:43:23
 */
    'use strict';

    import Vue from 'vue';
    
    export default {
        name: 'vue-filter',
        props: {
            // filter 初始 offsetTop
            offsettop: {
                type: Number,
                required: false
            },
            marginTopDivStyle: {
                type: String,
                required: false
            },
        },
        data () {
            return {
                // 页签标题列表
                tabHeadList: {
                    type: Array,
                    required: false,
                    default: []
                },
                // 当前选中的页签
                activeTab: 0,
                // layer展开状态
                activeLayer: 0,
                // sticky = 1 , Fixed = 2
                filterPosition: 1,
                // default offset top
                defOffsetTop: this.offsettop,
                districtFirstData: null
            };
        },
        mounted () {
            this.createBL();
            // 检测浏览器支持sticky情况
            this.checkSticky();
            // 获取filter距离顶部相对高度
            this.getOffsetTop();
            // 初始化tab数据及样式
            this.selectFilterTab(this.activeTab);
            // 事件
            this.addEvents();
        },
        methods: {
            /**
             * 切换fitler tab
             */
            selectFilterTab ( tabIndex, event ) {
                // console.log(this.$children)
                // 收集Head
                this.tabHeadList = this.$children.filter(( childItem ) => {
                    if (childItem instanceof Vue && childItem.constructor.options.name === 'vue-filter-item') {
                        // 隐藏子节点组件：vue-filter-item
                        childItem.$el.style.display = 'none';

                        return true;
                    } else {

                        console.warn(`Please import vue-filter-item in vue-filter component: `, childItem);
                    }
                }).map( childItem => {
                    // console.log(childItem.head)
                    // 返回标题
                    return childItem.head;
                });

                // 选择某个Tab
                tabIndex !== this.activeTab && (this.activeTab = tabIndex);

                // 展示当前某个 (判断是否来源于点击)
                if (!!event) {
                    if(this.hasClass(event.target, 'active')){
                        this.selectSearchFilter();
                    }else{
                        // 显示黑色背景浮层
                        this.showBL();
                        this.activeLayer = 1;
                        this.$children[this.activeTab] && (this.$children[this.activeTab].$el.style.display = '');
                        this.$emit('filterTabSelected',{
                            index: tabIndex,
                            event: event
                        });
                        // 发放select事件
                        this.$emit('select', this.activeTab);
                    }
                }


            },
            selectSearchFilter ( arg ) {
                console.log('selectSearchFilter~~~')
                //layer置成关闭状态，可以清除tab上active状态
                this.activeLayer = 0;
                this.hideBL();

                //IOS还原sticky
                this.chkIosFixedToSticky();
                this.$children.filter(( childItem ) => {
                    if (childItem instanceof Vue && childItem.constructor.options.name === 'vue-filter-item') {
                        // 隐藏子节点组件：vue-filter-item
                        childItem.$el.style.display = 'none';
                        return true;
                    } else {

                        console.warn(`Please import vue-filter-item in vue-filter component: `, childItem);
                    }
                });
            },
            hasClass (obj, cls) {
                let obj_class = obj.className,//获取 class 内容.
                obj_class_lst = obj_class.split(/\s+/);//通过split空字符将cls转换成数组.
                let x = 0;
                for(x in obj_class_lst) {
                    if(obj_class_lst[x] == cls) {//循环数组, 判断是否包含cls
                      return true;
                    }
                }
                return false;
            },
            getOffsetTop () {
                let self = this;
                //等待DOM及图片加载完成，不用document.ready是因为后者不监听图片的加载
                window.onload = function(){

                    self.defOffsetTop = self.offsettop || self.$el.offsetTop;
                }

            },
            checkSticky () {
                var isStopTimer = null;
                let self = this;
                if (!this.getProperty()) {
                    this.fixedTop();
                } else {
                    document.addEventListener('touchmove', (e) => {
                        console.log('touchmove2')
                        if(self.$el.offsetTop > 0){
                            self.defOffsetTop = self.$el.offsetTop;
                        }
                    });
                }
            },
            fixedTop () {
                console.warn('[提示] 当前浏览器环境不支持sticky属性');
                var isStopTimer2 = null;

                let self = this;

                window.addEventListener('scroll', () => {
                    console.log('scroll')
                    // 获取当前滚动的距离
                    // （安卓）防止业务dom增加dom或图片导致offset值变更
                    if(self.$el.offsetTop > 0){
                        self.defOffsetTop = self.$el.offsetTop;
                    }
                    // 切换 fixed与sticky||relative 状态
                    if (window.scrollY >= self.defOffsetTop){
                        self.fitlerBarFixed();
                    } else {
                        self.fitlerBarSticky();
                    }
                });
            },
            /**
             *  sticky支持判断
             */
            getProperty ( property='position', value='sticky' ) {
                let prop = property + ':'
                let style = document.createElement('div').style

                style.cssText = prop + ['-webkit-', '-moz-', '-ms-', '-o-', ''].join(value + ';' + prop) + value + ';'

                return !!style[property];
            },
            fitlerBarFixed (...opts) {
                this.filterPosition = 2;
                !this.getProperty() && this.$emit('fixed', opts);
                // 如果是点击出发的Fixed 则滚动到临界高度
                !!opts[0] && !!opts[0].event && window.scrollTo(0, this.defOffsetTop);
            },
            fitlerBarSticky (...opts) {
                this.filterPosition = 1;
               !this.getProperty() && this.$emit('sticky', opts);
            },
            chkIosFixedToSticky () {
                if (this.getProperty()) {
                    this.filterPosition = 1;
                    this.closeLayer();
                } else {
                    if (this.filterPosition == 1) {
                        $('#filterClone').hide();
                        this.$emit('sticky');
                        this.closeLayer();
                    }
                }
            },
            createBL () {
                let layerDom = document.createElement('div');

                document.querySelector('body').appendChild(layerDom);

                layerDom.setAttribute('id','vue-filter-blacklayer');
                layerDom.setAttribute('style','display:none;position:fixed;top:0;left:0;width:100%;height:100%;background-color:#000;opacity:0.5;z-index:10000;');

                layerDom.addEventListener('touchmove', (e) => {
                    console.log('touchmove')
                    e.preventDefault();
                    return false;
                });
                layerDom.addEventListener('touchend', (e) => {
                    console.log('touchend')
                    e.preventDefault();
                    if (this.districtFirstData) {
                        console.log('啊啊啊：', this.districtFirstData)
                        this.tabHeadList[0].n = this.districtFirstData.n;
                        this.tabHeadList[0].v = this.districtFirstData.v;
                        this.tabHeadList[0].s_k = this.districtFirstData.s_k;
                        this.$parent.$emit('vuesearchfilter', {n: this.districtFirstData.n, v:this.districtFirstData.v, s_k:this.districtFirstData.s_k});
                    }
                    this.selectSearchFilter();
                });
            },
            closeLayer() {
                $('.vue-filter-bar-wrapper').addClass('sticky');
                $('.vue-filter-bar-wrapper').removeClass('Fixed');
                $('.vue-filter-layer').children()[0].style.display = 'none';
                $('.vue-filter-layer').children()[1].style.display = 'none';
                $('.vue-filter-layer').children()[2].style.display = 'none';
                $('.vue-filter-layer').children()[3].style.display = 'none';
            },
            showBL () {
                document.getElementById('vue-filter-blacklayer').style.display = 'block';
            },
            hideBL () {
                document.getElementById('vue-filter-blacklayer').style.display = 'none';
            },
            addEvents () {
                this.$on('vuesearchfilter', ( ...args ) => {
                    this.selectSearchFilter(args);
                });
                this.$on('filterTabSelected', (opts) => {
                    this.fitlerBarFixed(opts);
                });

                this.$on('districtFirstSelect', (...args) => {
                    // console.log('父接受到area:', args[0])
                    this.districtFirstData = args[0];
                })
            }
        }
    }
</script>

<style>

    .Fixed{
        position: fixed !important;
        top: 0 !important;
        margin-top: 0 !important;
        z-index: 10001;
    }
    @keyframes filterbar-down {
        0% {
            opacity: 1;
            height: 0;
        }
        100% {
            opacity: 1;
            height: auto;
        }
    }
    .sticky {
        position: -webkit-sticky !important;
        position: sticky !important;
        position: relative;
        z-index: 10001;
    }
    .vue-filter-bar-wrapper{
        width: 100%;
        height: auto;
        background-color: #FFF;
        top: 0px;
    }
    .vue-filter-bar-wrapper .filter{
        position: relative;
        width: 100%;
        height: auto;
        background-color: #FFF;
        color: #666;
        overflow: hidden;
        zoom: 1;
        z-index: 1001;
    }

    .vue-filter-bar{
      font-size: 13px;
    }

    .vue-filter-bar ul{
        width: 100%;
        height: 43px;
        padding-bottom: 3px;
    }
    .vue-filter-bar ul  .vue-filter-tab-item{
        height: 43px;
        margin: 0;
        box-sizing: border-box;
        -webkit-box-sizing: border-box;
        float: left;
        line-height: 43px;
        text-align: center;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        text-indent: -10px;
        position: relative;
        font-size: 15px;
        color: #666;
        padding-top: 2px;
    }
    .vue-filter-bar ul  .vue-filter-tab-item.active{
        color: #c79a5f;
    }
    .vue-filter-bar ul  .vue-filter-tab-item.active:after {
        color: #c79a5f;
        margin-left: 7px;
        top: 22px;
        border-bottom: 1px solid #c79a5f;
        border-left: 1px solid #c79a5f;
        -webkit-transform: rotate(135deg);
        transform: rotate(135deg);
        margin-bottom: 0;

    }
    .vue-filter-bar ul  .vue-filter-tab-item:after {
        content: '';
        position: absolute;
        display: inline-block;
        margin-left: 7px;
        top: 18px;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        width: 7px;
        height: 7px;
        border-bottom: 1px solid #666;
        border-left: 1px solid #666;
        -webkit-transform: rotate(-45deg);
        transform: rotate(-45deg);
        -webkit-transition-duration: 300ms;
        transition-duration: 300ms;
    }
</style>
