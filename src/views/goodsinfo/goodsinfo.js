export default {
    name: '',
    data () {
        //这里存放数据
        return {
            goodsinfo: undefined,
            id: undefined,
            tableData: [],
            productDetail: {},
            index: 0,
            lang: ''
        };
    },
    //监听属性 类似于data概念
    computed: {},
    // 包含 Vue 实例可用过滤器的哈希表
    filters: {},
    //监控data中的数据变化
    watch: {
        goodsinfo () {
            // this.$router.go(0);
            console.log(this.goodsinfo)
        },
        '$route' () {
            this.$router.go(0)
        }

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
            this.axiosGets('index/productdetail', para, (data) => {
                console.log(data)
                this.productDetail = data.data.data.productDetail
            })
        },


        // 加入购物车
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
        handleEdit (index, row) {
            // console.log(row)
            this.downloadFile(row)
        },

        //  下载文件
        downloadFile (data) {
            let member_info = JSON.parse(localStorage.getItem("member_info"));

            // let para = {
            //     product_id: data.image_id,
            //     file_name: data.image_name,
            //     file_url: data.image_url,
            //     member_id:admin_id
            // }
            // this.axiosPost('index/downloadFile', para, data => {
            // console.log(para)
            // })
            // console.log(member_info==null)

            if (member_info != null) {
                let admin_id = member_info.admin_id
                let para = {
                    member_id: admin_id,
                    // product_id: data.image_id
                    product_id: this.id
                }
                this.axiosGets('index/isDownload', para, data1 => {
                    console.log()
                    if (data1.data.code == 1) {
                        window.open(this.BaseURL + 'index/downloadFile?product_id=' + data.image_id +'&file_name='+ data.image_name+'&file_url=' + data.image_url + '&member_id=' + admin_id)

                    } else {
                        this.$message({
                            message: data1.data.msg,
                            type: 'error'
                        })
                    }
                })

            } else {
                this.$message({
                    message: '请先登录！',
                    type: 'error'
                })
            }
        },
    },
    //生命周期 - 创建完成（可以访问当前this实例）
    created () {
        this.lang = localStorage.getItem('language')
    },
    //生命周期 - 挂载完成（可以访问DOM元素）
    mounted () {
        // this.nextTick(() => { });
        // this.goodsInfo = this.
        // this.goodsinfo = this.$route.query.goodsinfo;
        // this.id = this.$Request.id;
        this.id = this.$route.query.id
        this.getList()
    },
    beforeCreate () { }, //生命周期 - 创建之前
    beforeMount () { }, //生命周期 - 挂载之前
    beforeUpdate () { }, //生命周期 - 更新之前
    updated () { }, //生命周期 - 更新之后
    beforeDestroy () { }, //生命周期 - 销毁之前
    destroyed () { }, //生命周期 - 销毁完成
    activated () {
        // this.id = this.$Request.id;
        // this.getList()
        // this.goodsinfo = this.$route.query.goodsinfo;

    }, //如果页面有keep-alive缓存功能，这个函数会触发
    //import引入的组件需要注入到对象中才能使用
    components: {},
}