// module.exports = {
//     runtimeCompiler: true,
//     publicPath: '/',
//     // configureWebpack: {
        
//     // },
//     devServer: {
//         port: 8080,
//         proxy: {
//             '/api': {
//                 target: 'https://translate.google.cn', //设置你调用的接口域名和端口号 别忘了加http
//                 changeOrigin: true, //这里设置是否跨域
//                 ws: true,
//                 pathRewrite: {
//                     '^/api': ''
//                 }
//             }
//         }
//     }
// }