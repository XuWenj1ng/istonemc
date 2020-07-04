export default {
    name: '',
    data () {
        //这里存放数据
        return {
            goodsinfo: undefined,
            tableData: [{
                date: 12
            }],
            product_banner: '',
            productTypeDetail: {},
            productList: [],
            id: undefined,
            index: 0,
            lang: ''
        };
    },
    //监听属性 类似于data概念
    computed: {
        product_banner () {
            return this.$store.state.product_banner
        }
    },
    // 包含 Vue 实例可用过滤器的哈希表
    filters: {},
    //监控data中的数据变化
    watch: {
        '$route' () {
            this.$router.go(0);
        },
        // id () {
        //     this.$router.go(0)
        // }
    },
    //方法集合
    methods: {

        typeIndex (index) {
            this.index = index
        },
        getList () {
            let para = {
                id: this.id
            }
            console.log(para.id)
            this.axiosGets('index/producttypedetail', para, (data) => {
                // console.log(data)
                this.productTypeDetail = data.data.data.productTypeDetail
                this.productList = data.data.data.productList
                localStorage.setItem('typeName', this.productTypeDetail.type_name)
                if (data.status == 500) {
                    this.$router.go(0)
                }
            })
        },
        joinCart (data) {
            console.log(data)
            let member_info = JSON.parse(localStorage.getItem("member_info"))
            let admin_id = member_info.admin_id;
            // let token = localStorage.getItem("token")

            if (member_info != null) {
                let para = {
                    product_id: data.id,
                    price: data.price,
                    count: 1,
                    member_id: admin_id
                }
                this.axiosPost("index/cartAdd", para, data => {
                    // console.log(data)
                    if (data.data.code === 1) {
                        this.$message({
                            showClose: true,
                            message: data.data.msg,
                            type: "success"
                        });
                    } else {
                        this.$message({
                            showClose: true,
                            message: data.data.msg,
                            type: "error"
                        });
                    }

                })
            } else {
                this.$message({
                    message: '请先登录！',
                    type: 'error'
                })
            }
        },
        goInfo (data) {
            // console.log(data)
            this.$router.push({ path: '/product/goodsinfo/typeInfo', query: { id: data.id } })
        }

    },
    //生命周期 - 创建完成（可以访问当前this实例）
    created () {
        // this.id = this.$Request.id;
        // this.typename = this.$Request.typename;
        // console.log(this.$Request.id)
        this.lang = localStorage.getItem('language')
        this.product_banner = this.$store.state.product_banner
    },
    //生命周期 - 挂载完成（可以访问DOM元素）
    mounted () {
        // this.nextTick(() => { });
        // this.goodsinfo = this.$route.query.goodsinfo;
        this.id = this.$route.query.id
        // console.log(this.$route.query)
        // this.typename = this.$Request.typename;
        this.getList()
        // console.log(this.id)

    },
    beforeCreate () { }, //生命周期 - 创建之前
    beforeMount () { }, //生命周期 - 挂载之前
    beforeUpdate () { }, //生命周期 - 更新之前
    updated () { }, //生命周期 - 更新之后
    beforeDestroy () { }, //生命周期 - 销毁之前
    destroyed () {
        this.$destroy()
    }, //生命周期 - 销毁完成
    activated () {
        // this.id = this.$Request.id;
        // console.log(this.$Request.id +'1')
        // this.typename = this.$Request.typename;
        // this.getList()
        // this.goodsinfo = this.$route.query.goodsinfo;

    }, //如果页面有keep-alive缓存功能，这个函数会触发
    //import引入的组件需要注入到对象中才能使用
    components: {},
}