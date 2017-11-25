<template>
    <div class="vue-filter-layer-container">
        <div class="vue-filter-iscroll" :id="itemIndex">
            <div class="vue-filter-layerBox">
                <template v-if="list.s_k == 'district_id' ">
                    <nui-tab
                        :active="activeTab"
                        @select="selectTab">
                        <nui-tab-item
                            v-for="(item, index) in list.d"
                            :key='index'
                            :head="item.n">
                                <slot v-if="index==0">
                                    <ul class="district-type-ul">
                                        <li
                                            :class="{'active': activeFirst == i}"
                                            v-for="(obj1,i) in item.d"
                                            :key="i"
                                            @click.stop="districtFirstSelect($event,obj1, i)">
                                            <span>{{obj1.n}}</span>
                                        </li>
                                    </ul>
                                    <ul class="district-type-ul district-type-ul-2">
                                        <li
                                            :class="{'active': activeSecond == i}"
                                            v-for="(obj2,i) in arr"
                                            @click.stop="districtSecondSelect($event,obj2, i)">
                                            <span>{{obj2.n}}</span>
                                        </li>
                                    </ul>
                                </slot>
                                <slot v-else>
                                    <ul class="district-type-ul">
                                        <li
                                            :class="{'active': activeFirst == i}"
                                            v-for="(obj1,i) in item.d"
                                            :key="i"
                                            @click.stop="districtFirstSelect($event,obj1, i)">
                                            <span>{{obj1.n}}</span>
                                        </li>
                                    </ul>
                                    <ul class="district-type-ul district-type-ul-2">
                                        <li
                                            :class="{'active': activeSecond == i}"
                                            v-for="(obj2,i) in arr"
                                            @click.stop="districtSecondSelect($event,obj2, i)">
                                            <span>{{obj2.n}}</span>
                                        </li>
                                    </ul>
                                </slot>
                        </nui-tab-item>
                    </nui-tab>
                </template>
                <template v-if="list.s_k == 'sort_type' ">
                    <ul class="sort-type-ul">
                        <li
                            v-for="(item, index) in list.d"
                            :key="item.v"
                            :class="{'active' : activeItem.v == item.v}"
                            @click.self.stop="itemClk($event,item,index)">{{item.n}}</li>
                    </ul>
                </template>
                <template v-if="list.s_k == 'range_type' ">
                    <ul>
                        <li
                            v-for="(item, p_index) in list.d"
                            :key="item.v">
                            <div class="range-type-box clearfix">
                                <p class="range-type-title">{{item.n}}</p>
                                <div
                                    class="range-type-btn"
                                    v-for="(obj, i) in item.d"
                                    @click.self.stop="itemMultiClk($event,obj,i,p_index)"
                                    :key="i"
                                    :class="{'active border-1px-all' : activeMultiItem[p_index].v == obj.v}"
                                    :style="{ width : rangeTypeBtn }">{{obj.n}}</div>
                            </div>
                        </li>
                    </ul>
                    <div class="range-type-confirm-btn" @click.self.stop="rangeTypeConfirm($event)">确定</div>
                </template>
                
            </div>
        </div>
    </div>
</template>

<script>
/**
 * @File Filter 筛选浮层组件 单列
 * @Author Lori(wangccong@baidu.com)
 * @Date 2016-12-12 21:03:22
 */
 // :class="{'active' : activeItem.n == item.n && activeItem.v == item.v
    'use strict';
    // >= iScroll 5.0
    // import iScroll from 'iscroll';
    // require('../../assets/iscroll.js');
    import nuiTab from '../../components/tab/index.vue';
    import nuiTabItem from '../../components/tab/item.vue';

    export default {
        name: "vue-filter-layer-column",
        data () {
            return {
                activeItem: {
                    // name
                    "n": "全部",
                    // id
                    "v": "0"
                },
                arr: [],
                itemIndex: 'wrapper' + new Date().getTime().toString(),
                activeTab: 0,
                tabData: [
                    {
                        head: '商圈'
                    },
                    {
                        head: '地铁'
                    }
                ],
                activeFirst: 0,
                activeSecond: 0,
                activeMultiItem: {
                    '0': {
                        n: '不限',
                        v: '-1'
                    },
                    '1': {
                        n: '不限',
                        v: '-1'
                    }
                }
            }
        },
        props: {
            type: {
                type: String,
                required: false
            },
            list: {
                type: Object,
                required: true
            }
        },
        components: {
            nuiTab,
            nuiTabItem
        },
        mounted () {
            if(this.list.s_k == 'district_id' && this.list.d[0]) {
                this.arr = this.list.d[0].d[0].d;
            }
            // this.tabData = []
            let iScrollItem;
            var $dom = '#' + this.itemIndex;
            setTimeout(() => {
                iScrollItem = new IScroll($dom , {
                    click: true,
                    bindToWrapper: true
                });
                iScrollItem.on('scrollStart', function () {
                    iScrollItem.refresh();
                });
            }, 200, false);
        },
        computed: {
            rangeTypeBtn() {
                    let width   = document.documentElement.clientWidth || 0;
                    let padding = 0.040625 * width;
                    let margin = 10;
                    return parseInt((width - padding * 2- margin*3) / 4, 10) + 'px';
            }
        },
        methods: {
            selectTab(v) {
                this.activeTab = v;
                if (v==1) {
                    this.activeFirst = 0;
                    this.arr = [];
                    this.$parent.$emit('districtFirstSelect', {n: '全线', s_k: 'subway_list', v: 0})
                } else {
                    if(this.list.s_k == 'district_id' && this.list.d[0]) {
                        this.arr = this.list.d[0].d[0].d;
                    }
                    this.$parent.$emit('districtFirstSelect', {n: '附近', s_k: 'neaby_list', v: 0})
                }
            },
            districtFirstSelect(event, v, index) {
                event.stopPropagation();
                // console.log('districtFirstSelect:',v);

                this.activeFirst = index;
                this.activeSecond = 0;
                this.arr = v.d;

                this.$parent.$emit('districtFirstSelect', v, event);
            },
            districtSecondSelect(event, v, index) {
                event.stopPropagation();
                event.preventDefault();
                this.activeSecond = index;

                this.$emit('searchfilter', v, event);
                // 抛事件给filter-item父组件组件
                this.$parent.$emit('vuesearchfilter', v, event);
            },
            itemClk( event, params, index ) {
                this.activeItem = params;
                // 抛事件给业务组件
                this.$emit('searchfilter', params, event);
                // 抛事件给filter-item父组件组件
                this.$parent.$emit('vuesearchfilter', params, event);
            },
            itemMultiClk( event, params, index, p_index ) {
                console.log('itemMultiClk:', params, p_index)
                this.activeMultiItem[p_index] = params;
                
            },
            rangeTypeConfirm(event) {
                let params = {
                    n: '筛选',
                    v: '-1',
                    extra: this.activeMultiItem
                };
                // 抛事件给业务组件
                this.$emit('searchfilter', params, event);
                // 抛事件给filter-item父组件组件
                this.$parent.$emit('vuesearchfilter', params, event);
            }
        }
    }
</script>
<style lang="less">
    @base-height: 300px;
    @keyframes filterbar-bounce {
         0% {
            opacity: 0;
            height: 1px;
         }
         50% {
            opacity: .3;
            height: 320px;
         }
         100% {
            opacity: 1;
            height: @base-height;
         }
    }
    .vue-filter-layer-container{
        position: relative;
        width: 100%;
        overflow: hidden;
        font-size: 13px;
        color: #333;
        height: @base-height;
        z-index: 10001;
        animation: filterbar-bounce .4s;
    }
    .vue-filter-layer-container .vue-filter-iscroll{
        position: absolute;
        width: 100%;
        z-index: 10001;
        height: @base-height;
        overflow: hidden;
    }
    .vue-filter-layer-container  .vue-filter-layerBox{
        width: 100%;
        position: absolute;
        z-index: 10001;
    }
    .sort-type-ul {
        width: 100%;
        overflow-y: scroll;
        height: 100%;
    }
    .sort-type-ul li,
    .district-type-ul li {
        height: 40px;
        line-height: 40px;
        position: relative;
        color: #666;
        font-size: 13px;
    }
    .sort-type-ul li.active {
        color: #c79a5f;
        background-color: #f5f5f5;
    }
    .nui-tab-item {
        position: relative;
    }
    .district-type-ul {
        width: 50%;
        float: left;
        text-align: left;
        
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        
    }
    .district-type-ul li span {
        display: inline-block;
        width: 100%;
        text-align: left;
        padding-left: 20px;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
    }
    .district-type-ul:first-child {
        background-color: #f5f5f5;
        overflow-y: scroll;
        height: 100%;
    }
    .district-type-ul li.active {
        color: #c79a5f;
        background-color: #fff;
    }
    .district-type-ul-2 li.active {
        color: #f00;
        background-color: #fff;
    }
    .range-type-box{
        margin: 0 4.0625%;
    }
    .range-type-title {
        text-align: left;
        font-weight: 700;
        height: 30px;
        line-height: 30px;
    }
    .range-type-btn {
        display: inline-block;
        height: 40px;
        line-height: 40px;
        text-align: center;
        float: left;
        
        margin-right: 10px;
        margin-bottom: 5px;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
    }
    .range-type-btn:nth-child(4n+1) {
        margin-right: 0;
    }

    .range-type-btn.active{
        color: #f00;
        // border: 1px solid #000;
    }
    .range-type-confirm-btn {
        height: 40px;
        line-height: 40px;
        text-align: center;
    }

    
</style>
