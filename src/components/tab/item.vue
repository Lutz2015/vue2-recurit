<template>

    <div class="nui-tab-item">
        <slot></slot>
    </div>

</template>


<script>
    /**
     * @file Tab组件
     * @author yongqingdong
     */

    export default {
        name: 'nui-tab-item',
        props: {
            head: {
                default: '',
                required: true
            }
        },
        mounted() {
            // console.info('nui-tab-item: ', this.head);
        }
    };

</script>


<style>

</style>