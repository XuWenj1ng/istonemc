import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
const router = new Router({
    // mode:'history',
    routes: [
        {
            name: 'index',
            path: '/index',
            component: resolve => require(['@/views/index/index.vue'], resolve),
            meta: {
                title: "ISMC"
            },
            // children: [{

            // }]
            children: [{
                path: '/index',
                ico: 'el-icon-edit',
                component: resolve => require(['@/views/banner/banner.vue'], resolve),
                name: '首页',
                meta: {
                    title: "ISMC",
                    keepAlive: true
                },
                children: [{
                    path: '/index',
                    ico: 'el-icon-edit',
                    component: resolve => require(['@/views/banner/banner.vue'], resolve),
                    name: '首页',
                    meta: {
                        title: "ISMC",
                        keepAlive: true

                    },


                }]

            }, {
                path: '/product',
                ico: 'el-icon-edit',
                component: resolve => require(['@/views/product/product.vue'], resolve),
                name: '产品中心',
                meta: {
                    title: "产品中心",
                    keepAlive: false
                },
                children: []

            }, {
                path: '/product/application',
                ico: 'el-icon-edit',
                component: resolve => require(['@/views/application/application.vue'], resolve),
                name: 'Application Studio',
                meta: {
                    title: "Application Studio",
                    keepAlive: true
                },


            }, {
                path: '/product/goodsinfo',
                ico: 'el-icon-edit',
                component: resolve => require(['@/views/goodsinfo/goodsinfo.vue'], resolve),
                name: '产品详情',
                meta: {
                    title: "产品详情",
                    keepAlive: false
                },
                children: [{
                    path: '/product/goodsinfo/typeInfo',
                    ico: 'el-icon-edit',
                    component: resolve => require(['@/components/goodsbreadcrumb.vue'], resolve),
                    name: '产品详情',
                    meta: {
                        title: "产品详情",
                        keepAlive: false
                    },
                }, {
                    path: '/product/goodsinfo/Ruby',
                    ico: 'el-icon-edit',
                    component: resolve => require(['@/components/goodsbreadcrumb.vue'], resolve),
                    name: '产品详情',
                    meta: {
                        title: "产品详情"
                    },
                }, {
                    path: '/product/goodsinfo/Diamond',
                    ico: 'el-icon-edit',
                    component: resolve => require(['@/components/goodsbreadcrumb.vue'], resolve),
                    name: '产品详情',
                    meta: {
                        title: "产品详情"
                    },
                },
                ]


            }, {

                path: '/product/goodsinfo/type',
                ico: 'el-icon-edit',
                component: resolve => require(['@/views/goodsType/goodsType.vue'], resolve),
                name: '产品系列',
                meta: {
                    title: "产品详情",
                    keepAlive: false
                },


            }, {
                path: '/company',
                ico: 'el-icon-edit',
                component: resolve => require(['@/views/company/company.vue'], resolve),
                name: '公司介绍',
                meta: {
                    title: "公司介绍",
                    keepAlive: true
                },


            }, {
                path: '/company/jobsinfo',
                ico: 'el-icon-edit',
                component: resolve => require(['@/views/jobsinfo/jobsinfo.vue'], resolve),
                name: '职业描述',
                meta: {
                    title: "职业描述"
                },


            }, {
                path: '/shoppingcar',
                ico: 'el-icon-edit',
                component: resolve => require(['@/views/shopcar/shopcar.vue'], resolve),
                name: '购物车',

                meta: {
                    title: "购物车",
                    keepAlive: true
                },
                children: [{
                    path: '/shoppingcar',
                    ico: 'el-icon-edit',
                    component: resolve => require(['@/components/shopcartinfo.vue'], resolve),
                    name: '购物车',
                    meta: {
                        title: "购物车"
                    },
                },
                {
                    path: '/shoppingcar/index',
                    ico: 'el-icon-edit',
                    component: resolve => require(['@/components/shopcarttrue.vue'], resolve),
                    name: '购物车-确认',
                    meta: {
                        title: "购物车-确认"
                    },
                },
                {
                    path: '/shoppingcar/over',
                    ico: 'el-icon-edit',
                    component: resolve => require(['@/components/shopover.vue'], resolve),
                    name: '提交完成',
                    meta: {
                        title: "提交完成"
                    },
                },]


            },
            {
                path: '/industry',
                ico: 'el-icon-edit',
                component: resolve => require(['@/views/industry/industry.vue'], resolve),
                name: '行业应用',
                meta: {
                    title: "行业应用"
                },
                children: [
                    {
                        path: '/industry',
                        ico: 'el-icon-edit',
                        component: resolve => require(['@/components/industry.vue'], resolve),
                        name: '行业应用',
                        meta: {
                            title: "行业应用"
                        },
                    }, {
                        path: '/industry/electronic',
                        ico: 'el-icon-edit',
                        component: resolve => require(['@/components/electronic.vue'], resolve),
                        name: '电子制造',
                        meta: {
                            title: "电子制造"
                        },
                    }
                ]
            }, {
                path: '/news',
                ico: 'el-icon-edit',
                component: resolve => require(['@/views/news/news.vue'], resolve),
                name: '新闻中心',
                meta: {
                    title: "新闻中心"
                },
                children: [{
                    path: '/news',
                    ico: 'el-icon-edit',
                    component: resolve => require(['@/components/newsinfo.vue'], resolve),
                    name: '新闻中心',
                    meta: {
                        title: "新闻中心"
                    },
                },
                {
                    path: '/news/info',
                    ico: 'el-icon-edit',
                    component: resolve => require(['@/components/newsid.vue'], resolve),
                    name: '新闻中心1',
                    meta: {
                        title: "新闻中心"
                    },
                }

                ]

            }, {
                path: '/contact',
                ico: 'el-icon-edit',
                component: resolve => require(['@/views/contact/contact.vue'], resolve),
                name: '联系我们',
                meta: {
                    title: "联系我们",
                    keepAlive: true
                },
                children: [{
                    path: '/contact',
                    ico: 'el-icon-edit',
                    component: resolve => require(['@/components/contactinfo.vue'], resolve),
                    name: '联系我们',
                    meta: {
                        title: "联系我们",
                        keepAlive: true
                    },
                }
                ]
            }, {
                path: '/sign',
                ico: 'el-icon-edit',
                component: resolve => require(['@/views/sign/sign.vue'], resolve),
                name: '注册登录',
                meta: {
                    title: "注册登录",
                    keepAlive: true
                },
                children: [{
                    path: '/sign/info',
                    ico: 'el-icon-edit',
                    component: resolve => require(['@/components/signinfo.vue'], resolve),
                    name: '注册登录',
                    meta: {
                        title: "注册登录",
                        keepAlive: true
                    },
                }, {
                    path: '/sign/success',
                    ico: 'el-icon-edit',
                    component: resolve => require(['@/components/signsuccess.vue'], resolve),
                    name: '注册完成',
                    meta: {
                        title: "注册登录",
                        keepAlive: true
                    },
                }]
            }, {
                path: '/member',
                ico: 'el-icon-edit',
                component: resolve => require(['@/views/member/member.vue'], resolve),
                name: '会员中心',
                meta: {
                    title: "会员中心"
                },
                children: [{

                    path: '/member/revamp',
                    ico: 'el-icon-edit',
                    component: resolve => require(['@/components/memberrevamp.vue'], resolve),
                    name: '会员中心',
                    meta: {
                        title: "会员中心"
                    },

                }]
            }, {
                path: '/search',
                ico: 'el-icon-edit',
                component: resolve => require(['@/views/search/search.vue'], resolve),
                name: 'search',
                meta: {
                    title: "搜索"
                },
                children: [{
                    path: '/search/info',
                    ico: 'el-icon-edit',
                    component: resolve => require(['@/components/searchinfo.vue'], resolve),
                    name: 'search1',
                    meta: {
                        title: "搜索结果"
                    },
                }]
            }]
        },
        { path: "/", redirect: "/index" },//重定向
        // { path: "/industry", redirect: "/industry/index" },//重定向
        // { path: "/", redirect: "/index" },//重定向
    ]
})

router.beforeEach((to, from, next) => {
    /* 路由发生变化修改页面title */
    if (to.meta.title) {
        document.title = to.meta.title;
    }
    
    next();
})
export default router
