<template>
	<div class="c-ripple js-ripple" :id="itemClass(itemv.id)" :class="itemClass(itemv.id)" @tap.self="rippleTap($event, itemv)">
        <span class="c-ripple__circle"></span>
    </div>
</template>
<script>
export default {
	name: "ripple",
	props: {
		itemv: {
			type: Object
		},
		url: {
			type: String
		}
	},
	mounted() {
		document.getElementById('js-ripple-'+this.itemv.id).addEventListener('touchmove', (e) => {
			console.log('touchmove')
			// e.stopPropagation();
			this.rippleTap(e, this.itemv, true);
		});
		document.getElementById('js-ripple-'+this.itemv.id).addEventListener('longTap', (e) => {
			console.log('longTap')
			// e.stopPropagation();
			this.rippleTap(e, this.itemv, false);
		});
		document.getElementById('js-ripple-'+this.itemv.id).addEventListener('click', (e) => {
			console.log('click')
			// e.stopPropagation();
			this.rippleTap(e, this.itemv, false);
		});
	},
	methods: {
		// 波纹动画
        rippleTap: function (e, item, noJump) {
			// console.log('波纹动画')
            e = e || window.event;
            var self = this;
            var $target = $(e.target);
        	// console.log($(e.target))
            var $ripple = $('.js-ripple-'+ item.id);
            var $offset = $ripple.parent().offset();

            var x = e.pageX - $offset.left;
            var y = e.pageY - $offset.top;
            $ripple.find('.c-ripple__circle').css({
                top: x + 'px',
                left: y +'px'
            });
            $ripple.addClass('is-active');
            this.onAnimationEnd($ripple, function() {
                if($ripple.hasClass('is-active')) {
                    $ripple.removeClass('is-active');
                    if (noJump) {
                    	return;
                    }
                    window.location.href = 'http://' + window.location.host+ '/'+ window.location.hash + self.url;
                }
            }, this);
        },
        onAnimationEnd($el, callback, context) {
            var cb = callback.bind(context);
            $el.on('animationend', cb);
            $el.on('webkitAnimationEnd', cb);
        },
        itemClass(id) {
            return 'js-ripple-' + id;
        }
	}
}
</script>
<style lang="less">
	/**
     * Utility: Ripple
     * --------------------------------------------------
     */
    .c-ripple {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        overflow: hidden;
        background: transparent;
        z-index: 990;
    }
    .c-ripple__circle {
        position: absolute;
        top: 50%;
        left: 50%;
        -webkit-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%);
        opacity: 0;
        width: 0;
        height: 0;
        border-radius: 50%;
        background: rgba(0, 0, 0, .06);
        .c-ripple.is-active & {
            -webkit-animation: a-ripple .4s ease-in;
            animation: a-ripple .4s ease-in;
        }
    }
    /**
     * Animation: Ripple
     * --------------------------------------------------
     */
    @-webkit-keyframes a-ripple {
        0% {
            opacity: 0;
        }
        25% {
            opacity: 1;
        }
        100% {
            width: 200%;
            padding-bottom: 200%;
            opacity: 0;
        }
    }
    @keyframes a-ripple {
        0% {
            opacity: 0;
        }
        25% {
            opacity: 1;
        }
        100% {
            width: 200%;
            padding-bottom: 200%;
            opacity: 0;
        }
    }
</style>