module.exports = {
    publicPath: process.env.NODE_ENV === "production" ? "./" : "/",
    outputDir: 'stone',
    devServer: {
        // port: 8083,
        // proxy: {
        //     // proxy all requests starting with /api to jsonplaceholder
        //     '/api': {
        //         target: 'https://wxdev.api.followenjoy.cn/App/',   //代理接口
        //         changeOrigin: true,
        //         pathRewrite: {
        //             '^/api': '/'    //代理的路径
        //         }
        //     }
        // }
    }
}