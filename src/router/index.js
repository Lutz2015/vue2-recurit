import Vue from 'vue'
import Router from 'vue-router'
import home from '@/pages/home.vue'
import index from '@/pages/index.vue'
import searchMiddle from '@/pages/searchMiddle.vue'

import jobDetail from '@/pages/jobDetail.vue'
import company from '@/pages/company.vue'
import myResume from '@/pages/myResume.vue'
import myResumeSecond from '@/components/form/second.vue'

import auth from './auth'
Vue.use(Router)

function requireAuth (to, from, next) {
  if (!auth.loggedIn()) {
  	
  	/**
	 * 使用BNJS之前，必须声明如下BNJSReady函数，确保BNJS相关属性信息及页面加载准备就绪
	 * BNJSReady直接复制使用，请勿改动
	 */
	window.BNJSReady = function (readyCallback) {
	    if (readyCallback && typeof readyCallback == 'function') {
	        if (window.BNJS && typeof window.BNJS == 'object' && BNJS._isAllReady) {
	            readyCallback();
	        }
	        else {
	            document.addEventListener('BNJSReady', function () {
	                readyCallback();
	            }, false);
	        }
	    }

	};
	// BNJS触发
	BNJSReady(function () {
		if (BNJS.account.isLogin) {
			
		} else {
			auth.waploggedIn();
		}
	});
    // next({
    //   path: '/company',
    //   query: { redirect: to.fullPath }
    // })
  } else {
    next()
  }
}
export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/index',
      name: 'index',
      component: index
    },
    {
      path: '/searchMiddle',
      name: 'searchMiddle',
      component: searchMiddle
    },
    {
      path: '/jobDetail',
      name: 'jobDetail',
      component: jobDetail,
      beforeEnter: requireAuth
    },
    {
      path: '/company',
      name: 'company',
      component: company
    },
    {
      path: '/myResume',
      name: 'myResume',
      component: myResume
    },
    {
      path: '/myResumeSecond',
      name: 'myResumeSecond',
      component: myResumeSecond
    }
  ]
})
