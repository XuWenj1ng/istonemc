export default {
    name: '',
    data () {
        //这里存放数据
        return {
            tableData: [{
                date: '2016-05-02',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄'
            }, {
                date: '2016-05-04',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1517 弄'
            }, {
                date: '2016-05-01',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1519 弄'
            }, {
                date: '2016-05-03',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1516 弄'
            }],
            applicationStudio: [],
            lang:'',
            content: ''
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
        handleEdit (index, row) {
            // console.log(index, row);
            this.downloadFile(row)
        },
        handleDelete (index, row) {
            console.log(index, row);
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
            //     console.log(data)
            // })

            // window.open(this.BaseURL+"index/downloadFile?product_id="+data.image_id+"&file_name="+data.image_name+"&file_url="+data.image_url+"&member_id="+admin_id)
            if (member_info != null) {
                let admin_id = member_info.admin_id
                let para = {
                    member_id: admin_id
                }
                this.axiosGets('index/isDownload1', para, data1 => {
                    // console.log()
                    if (data1.data.code == 1) {
                        window.open(this.BaseURL + 'index/downloadFile1?file_name='+ data.image_name+'&file_url=' + data.image_url + '&member_id=' + admin_id)

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

        getList () {
            let para = {}
            this.axiosGets('index/applicationStudio', para, (data) => {
                // console.log(data)
                this.applicationStudio = data.data.data.applicationStudio
                // console.log(this.applicationStudio[0].content.innerText)
                // var parser = new DOMParser(); 
                // var resXML = parser.parseFromString(this.applicationStudio[0].content,'application/xhtml+xml');
                // var zeroXML = resXML.querySelector('OmRes');
                // console.log(this.$refs.content)
                // console.log(resXML)
                // this.content = resXML
                this.content = this.applicationStudio[0].content
                this.tableData = this.applicationStudio[0].fileInfo
            })
        }

    },
    //生命周期 - 创建完成（可以访问当前this实例）
    created () {
        this.lang = localStorage.getItem('language')
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