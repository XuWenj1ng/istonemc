import axios from 'axios'
let qs = require('qs')

// let BaseURL = 'http://www.yz.com/index.php/admin/'
// let BaseURL = 'http://106.12.183.217:8803/index.php/index/'
let BaseURL = 'http://119.45.45.222:8001/index.php/index/'

// let BaseURL = "http://106.12.183.217:8802/"
// let BaseURL = 'http://yuzhengceshi.abc/index.php/admin/'
// let BaseURL = 'http://api.yourzonegroup.com/index.php/admin/'
// let BaseURL = 'http://192.168.1.202/index.php/index'

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'

// axios.defaults.withCredentials=true;
//axios.defaults.headers['language'] = localStorage.getItem('language')
// let lang = localStorage.getItem('language')

/**
 * 方法说明 post传参时,参数拦截修改
 * @method getToken
 * @param {参数类型} 参数名 参数说明
 * @return {返回值类型} 返回值说明
 */

 //   获取语言 
function getLang() {
    let lang = localStorage.getItem('language')
    if (lang) {
        return lang
    } else {
        lang = 'cn'
        localStorage.setItem('language', lang)
        return lang
    }
}
 

function getToken (params) {
    let token = localStorage.getItem('token')
    axios.defaults.headers.common['token'] = token
    // console.log(qs.stringify(params))
    return qs.stringify(params)
    // return params
}

function getParams (params) {
    return qs.stringify(params)
}
/**
 * 方法说明 get传参时,参数拦截修改
 * @method getposys
 * @param {参数类型} 参数名 参数说明
 * @return {返回值类型} 返回值说明
 */



 
function getposys (params) {
    let token = localStorage.getItem('token')
    let language = localStorage.getItem('language')

    axios.defaults.headers.common['token'] = token
    getLang()
    // console.log(params)
    params.language = language
    return {
        params: params
    }
}
export default {
    install (Vue) {
        Vue.prototype.BaseURL = BaseURL
        Vue.prototype.imgBaseURL = BaseURL + 'image/uploadimage'
        Vue.prototype.uploadImgServer = BaseURL + 'image/upload'

        Vue.prototype.axiosPost = function (urls, params, Callback, sign) {
            // if (localStorage.getItem('YZ') == null || localStorage.getItem('YZ') === undefined) {
            //     this.$router.push('/')
            //     return
            // }
            // 重复提交后台验证

            if (sign !== undefined) {
                axios.defaults.headers.common['sign'] = sign
            }
            axios.post(BaseURL + urls, getToken(params))
                .then(response => {
                    if (response.data.status == 2) {
                        this.$message({
                            showClose: true,
                            message: 'token失效,重新登录',
                            type: 'error'
                        })
                        this.history("/login")
                        return
                    }

                    if (response.data.code == 2) {
                        this.$message({
                            showClose: true,
                            message: response.data.msg,
                            type: 'error'
                        })
                        this.$router.push("/")
                        return
                    }

                    if (response.data.code != 1) {
                        this.$message({
                            showClose: true,
                            message: response.data.msg,
                            type: 'error'
                        })
                        return
                    }

                    Callback.call(this, response)
                })
                .catch(error => {
                    this.$message({
                        message: error,
                        type: 'error'
                    })
                })
        }

        Vue.prototype.axiosGets = function (urls, params, Callback) {
            // if (localStorage.getItem('YZ') == null || localStorage.getItem('YZ') == undefined) {
            //     this.$router.push("/")
            //     console.log(1)
            //     return
            // }
            // console.log(1)
            axios.get(BaseURL + urls, getposys(params))

                .then(response => {

                    if (response.data.code == 2) {
                        this.$message({
                            showClose: true,
                            message: response.data.msg,
                            type: 'error'
                        })
                        this.$router.push("/")
                        return
                    }

                    Callback.call(this, response)
                })
                .catch(error => {
                    this.$message({
                        message: error,
                        type: 'error'
                    })
                })
        }
        Vue.prototype.axiosPostUrl = function (urls, params, Callback) {
            axios.post( urls, getParams(params))
                .then(response => {
                    // console.log(response)
                    if (response.data.status == 2) {
                        // this.$message({
                        //     showClose: true,
                        //     message: 'token失效,重新登录',
                        //     type: 'error'
                        // })
                        // this.history("/login")
                        return
                    }

                    if (response.data.code == 2) {
                        // this.$message({
                        //     showClose: true,
                        //     message: response.data.msg,
                        //     type: 'error'
                        // })
                        // this.$router.push("/")
                        return
                    }

                    if (response.data.code != 1) {
                        // this.$message({
                        //     showClose: true,
                        //     message: response.data.msg,
                        //     type: 'error'
                        // })
                        return
                    }

                    Callback.call(this, response)
                })
                .catch(error => {
                    this.$message({
                        message: error,
                        type: 'error'
                    })
                })
        }


        //加载遮罩
        var loading = null
        Vue.prototype.onLoad = function (bool, Text) {
            if (bool) {
                var text = Text == undefined ? '加载中' : Text
                loading = this.$loading({
                    lock: true,
                    text: text,
                    spinner: 'el-icon-loading',
                    background: 'rgba(0, 0, 0, 0.7)'
                })
            } else {
                loading.close()
            }
        }

        Vue.prototype.loginProject = function (params, Callback) {
            axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'

            axios.post(BaseURL + "passport/login", qs.stringify(params))
                .then(response => {
                    //填写错误代码

                    Callback.call(this, response)
                })
                .catch(() => { })
        }



        //token异常状态
        Vue.prototype.noToken = -100

        //多选框宽度
        Vue.prototype.checkWidth = 55

        //page_size
        Vue.prototype.public_page_size = 99999999

        //手机号正则
        Vue.prototype.phoneReg = /^1[3456789]\d{9}$/
        Vue.prototype.passwordReg = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,20}$/
        Vue.prototype.passwordTips = "请输入6到20位的数字与字母组合"

        Vue.prototype.filterNumber = function (value) {
            return value.match(/\d/ig) ? value.match(/\d/ig).join('') : ''
        }

        Vue.prototype.filterMoney = function (value) {

            //开头禁止小数点
            if (value == '.') {
                return ''
            }
            if (value.indexOf('.') > 0) {
                let valArr = value.split('.')
                //禁止输入一个以上的小数点
                if (valArr.length > 2) {

                    value = valArr[0] + '.' + valArr[1]
                }
                //保留两位小数
                if (valArr[1].length > 2) {
                    value = valArr[0] + '.' + valArr[1].substring(-3, 2)
                    // value = parseFloat(value).toFixed(2)
                }

            }
            let numArr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.']
            /*  value.forEach(item=>{
                console.log(item)
              }) */
            let newVal = ''
            for (var i = 0; i < value.length; i++) {
                if (numArr.indexOf(value[i]) < 0) {
                    newVal[i] = ""
                } else {
                    newVal += value[i]
                }
            }
            return newVal
            // return value.match(/\d/ig) ? value.match(/\d/ig).join('') : ''
        }

        Vue.prototype.filterLetterNum = function (value) {
            return value.match(/\d|[A-Z]|[a-z]/ig) ? value.match(/\d|[A-Z]|[a-z]/ig).join('') : ''
        }

        Vue.prototype.imgVerifiy = function (file) {
            const isLt2M = file.size / 1024 / 1024 < 10
            if (!isLt2M) {
                this.msgError('上传文件大小不能超过 10MB!')
            }
            return isLt2M
        }
        //根据权限显示不同的目录和按钮
        Vue.prototype.isRole = function () {
            //
            /* if (pows == undefined) {
              return true
            }
            let Hraccess = JSON.parse(localStorage.getItem("Hraccess"))
      
            let bool = false
            if (Hraccess.indexOf(pows) >= 0) {
              bool = true
            } */
            return true
        }
        //请求异常处理
        Vue.prototype.error = function (data) {
            this.msgError(data.msg)
        }


        //
        Vue.prototype.getMonthDays = function (year, month) {
            var stratDate = new Date(year, month - 1, 1),
                endData = new Date(year, month, 1)
            var days = (endData - stratDate) / (1000 * 60 * 60 * 24)
            return days
        }

        //字符串转对象
        Vue.prototype.strToObj = function (str) {
            //在不同的地方调用方法的时候，变量的类型是不一样的，JSON.parse()里的参数只能是string类型
            return (typeof str) == "string" ? JSON.parse(str) : str
        }

        //根据年，月返回这个月的开始时间和结束时间
        Vue.prototype.returnMonthStartEnd = function (y, m) {
            let Start = new Date(y + '-' + m + '-01 00:00:00').valueOf()
            let End = null
            if (m != 12) {
                End = (new Date(y + '-' + (parseInt(m) + 1) + '-01 00:00:00').valueOf()) - 1
            } else {
                End = (new Date((parseInt(y) + 1) + '-01-01 00:00:00').valueOf()) - 1
            }
            return [Start, End]
        }


        //返回
        Vue.prototype.goBack = function () {
            window.history.go(-1)
        }
        //跳转
        Vue.prototype.history = function (url) {
            this.$router.push(url)
        }


        //removeLocalStorage清空缓存
        Vue.prototype.removeLocalStorage = function () {
            localStorage.removeItem('Hrtoken')
            localStorage.removeItem('Hrusername')
            localStorage.removeItem('Hrdepartment')
            localStorage.removeItem('Hraccess')
        }




        //时间转时间戳
        Vue.prototype.dateToStamp = function (date) {
            if (date == "" || date == undefined || date == null) {
                return ""
            }
            return parseInt(new Date(date).valueOf() / 1000)
        }

        //时间戳转时间
        Vue.prototype.stampToDate = function (shijianchuo, bool) {
            if (shijianchuo == "" || shijianchuo == undefined || shijianchuo == null) {
                return ""
            }
            //shijianchuo是整数，否则要parseInt转换
            let shijianchuoNew = shijianchuo
            if (("" + shijianchuo).length < 13) {
                shijianchuoNew = shijianchuo * 1000
            }
            var time = new Date(shijianchuoNew)
            var y = time.getFullYear()
            var m = time.getMonth() + 1
            var d = time.getDate()
            var h = time.getHours()
            var mm = time.getMinutes()
            var s = time.getSeconds()
            if (bool == undefined) {
                return y + '-' + (m < 10 ? '0' + m : m) + '-' + (d < 10 ? '0' + d : d)
            } else {
                return y + '-' + (m < 10 ? '0' + m : m) + '-' + (d < 10 ? '0' + d : d) + ' ' + (h < 10 ? '0' + h : h) + ':' +
                    (
                        mm <
                            10 ? '0' + mm : mm) + ':' + (s < 10 ? '0' + s : s)
            }

        }

        //消息提示
        Vue.prototype.msg = function (Text) {
            this.$message(Text)
        }

        //成功消息
        Vue.prototype.msgSuccess = function (Text) {
            this.$message({
                message: Text,
                type: 'success'
            })
        }

        //警告消息
        Vue.prototype.msgWarning = function (Text) {
            this.$message({
                message: Text,
                type: 'warning'
            })
        }

        //错误消息
        Vue.prototype.msgError = function (Text) {
            this.$message({
                message: Text,
                type: 'error'
            })
        }

    }
}
