import VueRouter from "vue-router";
import Vue from "vue";

 
const originalPush = VueRouter.prototype.push
const originalReplace = VueRouter.prototype.replace

// VueRouter.prototype.push = function push(location, onResolve, onReject) {
//   if (onResolve || onReject) return originalPush.call(this, location, onResolve, onReject)
//   return originalPush.call(this, location).catch(err => err)
// }

VueRouter.prototype.push = function push (location, onResolve, onReject) {
    // console.log(onReject + onResolve)
  if (onResolve || onReject) return originalPush.call(this, location, onResolve, onReject)
  return originalPush.call(this, location).catch(err => {
    //   console.log(err)
      originalPush.call(this, location, onResolve, onReject).catch(err => err)
  });
}

// VueRouter.prototype.replace = function replace (location, onResolve, onReject) {
//     if (onResolve || onReject) return originalReplace.call(this, location, onResolve, onReject)
//     return originalReplace.call(this, location).catch(err => err)
// }

VueRouter.prototype.replace = function push (location, onResolve, onReject) {
    // console.log(onReject + onResolve)
  if (onResolve || onReject) return originalReplace.call(this, location, onResolve, onReject)
  return originalReplace.call(this, location).catch(err => {
    //   console.log(err)
      originalPush.call(this, location, onResolve, onReject).catch(err => err)
  })
}

const index = () => import('../components/indexPage/index.vue')
const mymain = () => import('../components/searchPage/index.vue')
const login = () => import('../components/loginPage/index.vue')
const reg = () => import('../components/regPage/reg.vue')
const regjump = () => import('../components/regPage/regJump.vue')
const movie = () => import('../components/movies/index.vue')
const casePage = () => import('../components/case/index.vue')
const medical = () => import('../components/medical/index.vue')
const geneData = () => import('../components/geneData/index.vue')
const analysis = () => import('../components/analysis/index.vue')
const video = () => import('../components/videoPlayer/index.vue')
const reader = () => import('../components/reader/index.vue')
const invoice = () => import('../components/aboutPage/invoice.vue')
const contact = () => import('../components/aboutPage/contact.vue')
const userInfo = () => import('../components/userinfo/index.vue')
const conversion = () => import('../components/tools/conversion.vue')
const notFound = () => import('../views/404page.vue')
const details = () => import('../components/details/index.vue')
const userProfile = () => import('../components/profile/index.vue')
const forgetPsw = () => import('../components/getPassword/index.vue')
const staticpage = () => import('../components/staticPage/index.vue')
const aboutpage = () => import('../components/aboutPage/about')
const agreementpage = () => import('../components/aboutPage/agreement')
const timezone = () => import('../components/tools/timezone.vue')
const resetPsw = () => import('../components/profile/resetPsw.vue')


Vue.use(VueRouter)

const routes = [
    {
        path: '',
        redirect: '/index'
    },
    {
        path: '/index',
        component: index,
        meta: {
            auth: false
        }
    },
    {
        path: '/search',
        component: mymain,
        meta: {
            auth: false
        }
    },
    {
        path: '/login',
        component: login
    },
    {
        path: '/reg',
        component: reg
    },
    {
        path: '/regjump',
        component: regjump,
    },
    {
        path: '/movies',
        component: movie,
        meta: {
            auth: true
        },
        query: {
            tag: ''
        }
    },
    {
        path: '/case',
        component: casePage,
        meta: {
            auth: true
        },
        query: {
            tag: ''
        }
    },
    {
        path: '/medical',
        component: medical,
        meta: {
            auth: true
        },
        query: {
            tag: ''
        }
    },
    {
        path: '/genedata',
        component: geneData,
        meta: {
            auth: false
        }
    },
    {
        path: '/analysis',
        component: analysis,
        meta: {
            auth: true
        },
    },
    {
        path: '/video/:id',
        component: video,
    },
    {
        path: '/article',
        component: reader,
        query: {
            slug: '',
            category: ''
        }
    },
    {
        path: '/invoice',
        component: invoice,
        meta: {
            auth: true
        },
    },
    {
        path: '/contact',
        component: contact,
        meta: {
            auth: true
        },
    },
    {
        path: '/conversion',
        component: conversion
    },
    {
        path: '/details/:number',
        component: details
    },
    {
        path: '/userProfile',
        component: userProfile,
        children: [
            {
                path: 'reset',
                component: resetPsw
            },
            {
                path: 'user',
                component: userInfo
            }
        ]
    },
    {
        path: '/verify-user',
        query: {
            user_id: '',
            timestamp: '',
            signature: ''
        },
        redirect: '/regjump'
    },
    {
        path: '/reset-password',
        query: {
            user_id: '',
            timestamp: '',
            signature: ''
        },
        redirect: '/getpassword'
    },
    {
        path: '/getpassword',
        component: forgetPsw
    },
    {
        path: '/static',
        component: staticpage,
        children: [
            {
                path: 'hla',
                component: (resolve) => require(['../components/staticPage/static/HLA.vue'], resolve)
            },
            {
                path: 'hpa',
                component: (resolve) => require(['../components/staticPage/static/HPA.vue'], resolve)
            },
            {
                path: 'hea',
                component: (resolve) => require(['../components/staticPage/static/HEA.vue'], resolve)
            },
        ]
    },
    {
        path: '/about',
        component: aboutpage
    },
    {
        path: '/agreement',
        component: agreementpage,
        meta: {
            auth: true
        },
    },
    {
        path: '/timezone',
        component: timezone
    },
    {
        path: '/404',
        component: notFound,
    },
    {
        path: '*',
        redirect: '/404'
    },
    
]



const router = new VueRouter({
    mode: 'history',
    routes: routes
})


router.beforeEach((to, from, next) => {

    if (to.meta.auth){   // 判断要访问的组件是否需要登录
        if (sessionStorage.getItem('userToken')) {
            next()  // 判断我们保存用户信息的位置 如果有值就放行
        } else {
            Vue.prototype.$message({
                type: 'warning',
                message: '登录后才可以访问'
            })
            router.replace({ path: '/index' }).catch(err => {console.log(err);})
        }
    }
    else{
        next(); // 必须调用next()方法  不调用会夯住
    }
})

export default router