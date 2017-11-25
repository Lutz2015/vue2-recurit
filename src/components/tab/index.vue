<template>

    <div class="nui-tab">
        <div class="nui-tab-header border-bt-e1">
            <ul class="">
                <li class="nui-tab-header-item" :class="{ 'nui-tab-header-item-active': activeTab == tabIndex, 'css-force-redraw': activeTab == tabIndex}" v-for="(tabItem, tabIndex) in tabHeadList" @click="selectTab(tabIndex)">
                    <template v-if="typeof tabItem === 'string'">
                        <a class="nui-tab-header-item-link">
                            <span class="tab-title">{{ tabItem }}</span>
                        </a>
                    </template>
                    <template v-if="typeof tabItem === 'object'">
                        <component :is="tabItem.comp" :data="tabItem"></component>
                    </template>
                </li>
            </ul>
        </div>

        <div class="nui-tab-body">
            <slot></slot>
        </div>
    </div>

</template>


<script>
    /**
     * @file Tab组件
     * @author yongqingdong
     */

    import Vue from 'vue';

    export default {
        name: 'nui-tab',
        props: {
            active: {
                type: Number,
                default: 0
            }
        },
        data() {
            return {
                // 页签标题列表
                tabHeadList: {
                    type: Array,
                    default: []
                },
                // 当前选中的页签
                activeTab: this.active,
            };
        },
        mounted() {
            this.selectTab(this.activeTab);
        },
        watch: {
            activeTab(v, o) {
                if (v > o) {
                    this.toRight = 2;
                } else {
                    this.toRight = 1;
                }
            }
        },
        methods: {
            /**
             * 切换到某个页签
             */
            selectTab(tabIndex){
                // 收集Head
                this.tabHeadList = this.$children.filter((childItem) => {
                    if(childItem instanceof Vue && childItem.constructor.options.name === 'nui-tab-item'){
                        // 隐藏子节点组件：nui-tab-item
                        childItem.$el.style.display = 'none';
                        // childItem.$el.remove();
                        return true;
                    }else{
                        // 注释warn：当子组件是tab的自定义标题时不计算
                        // console.warn(`Please do use nui-tab-item in nui-tab component: `, childItem);
                    }
                }).map(childItem => {
                    // 返回标题
                    return childItem.head;
                });

                // 选择某个Tab
                tabIndex !== this.activeTab && (this.activeTab = tabIndex);

                // 展示当前某个
                this.$children[this.activeTab] && (this.$children[this.activeTab].$el.style.display = '') && (this.$children[this.toRight - 1].$el.remove());

                // 发放事件
                this.$emit('select', this.activeTab);
            }
        }
    };

</script>


<style>
    .nui-tab {
        width: 100%;
    }
    .nui-tab .nui-tab-header ul {
        background-color: #f5f5f5;
        height: 45px;
        line-height: 45px;
        font-size: 15px;
        color: #666;
        display: flex;
        overflow: hidden;
    }
    .nui-tab .nui-tab-header ul  li {
        display: block;
        flex: 1;
        text-align: center;
        color: #666;
    }
    .nui-tab .nui-tab-header ul  a.nui-tab-header-item-link {
        text-align: center;
        display: block;
        font-size: 15px;
        line-height: 45px;
    }
    .nui-tab .nui-tab-header ul  a.nui-tab-header-item-link span {
        display: inline-block;
        line-height: 45px;
        padding-left: 30px;
        padding-right: 30px;
    }
    .nui-tab .nui-tab-header ul  .nui-tab-header-item-active a{
        display: inline-block;
        color: #333;
        position: relative;
    }
    .nui-tab .nui-tab-header ul  .nui-tab-header-item-active a:after{
        position: absolute;
        width: 100%;
        height: 2px;
        content: '';
        bottom: 0;
        left: 0;
        right: 0;
        border-bottom: solid 2px #333;
    }
    .nui-tab-header-item-active-1 a ,
    .nui-tab-header-item-active-2 a {
        display: inline-block;
        position: relative;
    }
    .nui-tab-header-item-active-2 a:after{
            position: absolute;
            width: 100%;
            height: 2px;
            content: '';
            bottom: 0;
            left: 0;
            right: 0;
            border-bottom: solid 2px #333;
            animation: fly-2-left .3s;
    }
    .nui-tab-header-item-active-2 a:after{
        animation: fly-2-right .3s;
    }

    .nui-tab .nui-tab-body {
      /*margin-top: 10px;*/
    }
    .css-force-redraw {
        content: ''
    }
    @keyframes fly-2-left {
        0%{
            transform: translateX(200%);
        }
        100%{
            transform: translateX(0);
        }
    }
    @keyframes fly-2-right {
        0%{
            transform: translateX(-200%);
        }
        100%{
            transform: translateX(0);
        }
    }
</style>
