<template>
	<div class="search-block search-block--cancel">
        <div class="search-ele-wrap">
            <input type="search" :placeholder="placeholder" class="search-text" v-model="keyWords" @click="goMiddlePage" @blur="blurSearch">
            <i class="icon-search"></i>
            <span class="icon-input-clear" @click="clearKeyWords">
                <i class="icon-cross"></i>
            </span>
            <span class="icon-loading icon-loading--gray" style="right:33px;">
                <i class="icon-loading-circle"></i>
            </span>
        </div>
        <span class="search-cancel">取消</span>
    </div>
</template>
<script>
export default {
    name: "search",
    props: {
        placeholder: {
            type: String,
            default: '请输入职位查询'
        },
        middle: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            keyWords: ''
        }
    },
    methods: {
        goMiddlePage() {
            if (this.middle) {

            } else {
                window.location.href = 'http://' + window.location.host+ '/#/'+ 'searchMiddle';
            }
            
        },
        clearKeyWords() {
            this.keyWords = '';
        },
        blurSearch() {
            console.log(this.keyWords)
        }
    }
}
</script>
<style>
.search-block {
  background-color: #f5f5f5;
  padding: 7px 4% 7px 4%;
  position: relative;
}

.search-block .search-ele-wrap {
  position: relative;
}

.search-block .search-text {
  border: 0 none;
  border-radius: 15px;
  background-color: #fff;
  width: 100%;
  height: 30px;
  padding: 5px 30px;
}

.search-block .icon-search {
  position: absolute;
  top: 0;
  left: 0;
  color: #999;
  width: 30px;
  height: 30px;
}

.search-block .icon-loading {
  position: absolute;
  right: 5px;
  top: 7px;
}

.search-block .btn-voice {
  position: absolute;
  right: 0;
  width: 30px;
  height: 30px;
  padding-top: 7px;
  top: 0;
}

.search-block--center .search-ele-wrap {
  background: #fff;
  text-align: center;
  border-radius: 15px;
  color: #999;
}

.search-block--center .icon-search {
  position: relative;
  display: inline-block;
  vertical-align: middle;
  width: 20px;
  text-align: center;
}

.search-block--cancel .search-ele-wrap {
  position: relative;
  margin-right: 40px;
}

.search-block--cancel .search-cancel {
  line-height: 44px;
  padding: 0 10px;
  color: #777;
  position: absolute;
  right: 0;
  top: 0;
  cursor: pointer;
}

/*icon-input-clear*/
.icon-input-clear {
  position: absolute;
  width: 30px;
  height: 30px;
  top: 50%;
  -webkit-transform: translate(0, -50%);
  -ms-transform: translate(0, -50%);
  transform: translate(0, -50%);
  right: 0;
}

.icon-input-clear::before {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  width: 16px;
  height: 16px;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  border-radius: 10px;
  background-color: #ccc;
  color: #fff;
}

.icon-input-clear .icon-cross {
  position: absolute;
  top: 50%;
  left: 50%;
  color: #fff;
}

.icon-input-clear .icon-cross::before, .icon-input-clear .icon-cross::after {
  height: 10px;
}

/*icon-search*/

.icon-search {
  position: relative;
}

.icon-search::before {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  border: 2px solid currentColor;
  height: 12px;
  width: 12px;
  box-sizing: border-box;
  border-radius: 50%;
  margin-left: -2px;
  margin-top: -2px;
}

.icon-search::after {
  content: "";
  background: currentColor;
  height: 6px;
  width: 2px;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-left: 4px;
  margin-top: 4px;
  -webkit-transform: translate(-50%, -50%) rotate(-45deg);
  -ms-transform: translate(-50%, -50%) rotate(-45deg);
  transform: translate(-50%, -50%) rotate(-45deg);
}

.icon-cross {
  position: relative;
}

.icon-cross::before, .icon-cross::after {
  content: "";
  position: absolute;
  left: 50%;
  top: 50%;
  width: 2px;
  height: 14px;
  -webkit-transform: translate(-50%, -50%) rotate(45deg);
  -ms-transform: translate(-50%, -50%) rotate(45deg);
  transform: translate(-50%, -50%) rotate(45deg);
  background-color: currentColor;
}

.icon-cross::after {
  -webkit-transform: translate(-50%, -50%) rotate(-45deg);
  -ms-transform: translate(-50%, -50%) rotate(-45deg);
  transform: translate(-50%, -50%) rotate(-45deg);
}


::-webkit-search-cancel-button {
  display: none;
}
.icon-loading {
  -webkit-animation: rotate 1s linear infinite;
  animation: rotate 1s linear infinite;
}
@-webkit-keyframes rotate {
  to {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

@keyframes rotate {
  to {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
</style>