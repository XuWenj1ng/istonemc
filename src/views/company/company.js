export default {
    name: '',
    data () {
        //这里存放数据
        return {
            btn_index: 1,
            bannerList: [],
            stoneList: [],
            joinList: [],
            content: '',
            lang:''
        };
    },
    //监听属性 类似于data概念
    computed: {},
    // 包含 Vue 实例可用过滤器的哈希表
    filters: {},
    //监控data中的数据变化
    watch: {
        $route () {
            this.$router.go(0)
        }
    },
    //方法集合
    methods: {
        companybBtn (data) {
            this.btn_index = data
        },
        getList () {
            let para = {

            }
            this.axiosGets('index/company', para, function (data) {
                // console.log(data)
                this.bannerList = data.data.data.bannerList
                this.stoneList = data.data.data.stoneList
                this.joinList = data.data.data.joinList
                this.$store.commit('update_company',data.data.data.headImage[0].image_info.image_url)
                // this.dataShow()
            })
        },
        goInfo(id) {
            this.$router.push({ path:"/company/jobsinfo",query:{id:id}})
        },
        dataShow () {
            this.content = this.stoneList[0].content.innerHTML
            console.log(this.content)
        },
    },
    //生命周期 - 创建完成（可以访问当前this实例）
    created () {
        // this.btn_index = this.$R
        // console.log(this.$route.query.id)
        this.lang = localStorage.getItem('language')
        this.btn_index = this.$route.query.id || 1;
        // this.btn_index =  1;

    },
    //生命周期 - 挂载完成（可以访问DOM元素）
    mounted () {
        // this.nextTick(() => { });
        this.getList()
    },
    beforeCreate () { }, //生命周期 - 创建之前
    beforeMount () { }, //生命周期 - 挂载之前
    beforeUpdate () { }, //生命周期 - 更新之前
    updated () { }, //生命周期 - 更新之后
    beforeDestroy () { }, //生命周期 - 销毁之前
    destroyed () { }, //生命周期 - 销毁完成
    activated () { }, //如果页面有keep-alive缓存功能，这个函数会触发
    //import引入的组件需要注入到对象中才能使用
    components: {},
}
