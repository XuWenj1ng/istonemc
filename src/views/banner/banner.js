export default {
	name: '',
	data() {
		//这里存放数据
		return {
			commodityIndex: 1,
			bannerList: [],
			recommendList: [],
			industryList:[],
			productTypeList: [],
            newsList: [],
            lang:''
		};
	},
	//监听属性 类似于data概念
	computed: {},
	// 包含 Vue 实例可用过滤器的哈希表
	filters: {},
	//监控data中的数据变化
	watch: {},
	//方法集合
	methods: {
		commodity(index) {
			this.commodityIndex = index
        },
        
		getList() {
			let para = {

			}

			this.axiosGets('index', para, function(data) {
				// console.log(data)
				this.bannerList = data.data.data.bannerList
				this.recommendList = data.data.data.recommendList
				//this.productTypeList = data.data.data.productTypeList
				this.newsList = data.data.data.newsList
				this.industryList = data.data.data.industryList
			})

			this.axiosGets('index/product', para, function(data) {
				console.log(data)
				this.productTypeList = data.data.data.product_data

			})

		},

		//  新闻查看更多
		more() {
			this.$router.push('/news')
		},
        
		//   语言 => (缓存本地)
		language() {
			let lang = localStorage.getItem('language')
            if (!lang) {
				localStorage.setItem('language', 'cn')
				this.lang = 'cn'
            } else {
                this.lang = lang
                console.log("有语言")
            }
		}

	},
	//生命周期 - 创建完成（可以访问当前this实例）
	created() {
        this.language()
        this.getList()
	},
	//生命周期 - 挂载完成（可以访问DOM元素）
	mounted() {
		// this.nextTick(() => { });

		// console.log(this.axiosGets)
	},
	beforeCreate() {}, //生命周期 - 创建之前
	beforeMount() {}, //生命周期 - 挂载之前
	beforeUpdate() {}, //生命周期 - 更新之前
	updated() {}, //生命周期 - 更新之后
	beforeDestroy() {}, //生命周期 - 销毁之前
	destroyed() {}, //生命周期 - 销毁完成
	activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
	//import引入的组件需要注入到对象中才能使用
	components: {},
}
