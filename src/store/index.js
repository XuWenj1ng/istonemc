import Vue from 'vue'
import Vuex from 'vuex'

//挂载Vuex
Vue.use(Vuex)

//创建VueX对象
const store = new Vuex.Store({
    state: {
        //存放的键值对就是所要管理的状态
        name: 'helloVueX',
        title: {
            en: {
                index: "Index",
                pro: "Products",
                app: "Application Areas",
                news: "News",
                company: "Company",
                us: "Contact Us",
                ismc: "ISMC",
                join: "Join Us",
                part: "Partners",
                tech: "Technical Forum",
                more: 'MORE',
                details: "Details",
                introduction: 'Introduction',
                specification: 'The specification',
                test: 'Test standard',
                model: 'Model',
                price: 'The unit price',
                joincart: "Add to shopping cart",
                appTitle: 'From the depths of the earth to outer space.',
                appContent: 'If you need accurate and reliable micro servo system, Stone Motion Control is your best choice. Welcome to further understand our products, as well as its diverse application areas and application examples.',
                cycle: "Product development cycle",
                exp: 'Product development experience',
                process: 'Product production process',
                test_c: 'Product test cycle',
                online: 'Online message',
                name: 'Your name',
                phone: "Your phone",
                email: "Your email address",
                content: 'Consulting content',
                submit: "Submit",
                german_head: "The German headquarters",
                cn_head: "China headquarters",
                news_details:'News details',
                aa: "{{lang ==='cn'?$store.state.title.cn.pro:$store.state.title.en.pro}}"
            },
            cn: {
                index: "首页",
                pro: "产品中心",
                app: "行业应用",
                news: "新闻中心",
                company: "公司介绍",
                us: "联系我们",
                ismc: "关于ISMC",
                join: "加入我们",
                part: "合作伙伴",
                tech: "技术论坛",
                more: "查看更多",
                details: "查看产品详情",
                introduction: "产品介绍",
                specification: "规格说明",
                test: "测试标准",
                model: '型号',
                price: "单价",
                joincart: '加入购物车',
                appTitle: '從地球深處到外太空。',
                appContent: '如果您需要精準可靠的微型伺服系统，Stone Motion Control是您最好的選擇。歡迎您更進一步了解我們的產品，以及其多樣化的應用領域和應用實例。',
                cycle: "产品开发周期",
                exp: "产品开发经验",
                process: '产品生产过程',
                test_c: "产品测试周期",
                online: "在线留言",
                name: '您的姓名',
                phone: "您的电话",
                email: "您的邮箱",
                content: '咨询内容',
                submit: "提交",
                german_head: "德国总部",
                cn_head: "中国总部",
                news_details:'新闻详情'

            }
        },
        username:'',
        product_banner:'',
        industry_banner: '',
        company_banner: '',
        contact_banner: '',
        member_banner: ''
    },
    mutations: {

        //  产品中心  图片
        update (state, val) {
            state.product_banner = val
        },

        // 行业应用 图片
        update_industry (state, val) {
            state.industry_banner = val
            
        },
        // 公司介绍  主图  数组
        update_company (state, val) {
            state.company_banner = val
        },
        // contact  联系我们 主图
        update_contact (state, val) {
            state.contact_banner = val
        },

        // member  会员中心 主图 
        update_member (state, val) {
            state.member_banner = val
        },

        //  header 上面的 用户名
        update_username (state, val) {
            state.username = val
        }
    }
})

export default store