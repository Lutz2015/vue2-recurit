<template>
    <div class="vue-filter-item">
        <slot></slot>
    </div>
</template>

<script>
/**
 * @File Filter 筛选条组件
 * @Author Lori(wangccong@baidu.com)
 * @Date 2016-12-08 16:43:23
 */
    'use strict';
    
    export default {
        name: "vue-filter-item",
        data () {
            return {
                headData: this.head
            }
        },
        props: {
            head: {
                type: Object,
                required: true
            },
        },
        mounted () {
            this.$on( 'vuesearchfilter' , ( ...args ) => {
                this.$el.style.display = 'none';
                // 抛事件给filter父组件组件
                this.$parent.$emit('vuesearchfilter', args[0], args[1]);
                // 更换filtertab上的head名及属性
                this.headData.n = args[0].n;
                this.headData.v = args[0].v;
                this.headData.k = args[0].k;
            });

            this.$on('districtFirstSelect', ( ...args ) => {
                this.$parent.$emit('districtFirstSelect', args[0], args[1]);
            })
        }
    }
</script>
