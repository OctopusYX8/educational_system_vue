module.exports = {
    devServer: {
        disableHostCheck: false,
        host: "localhost",
        port: 8002, //这里设置端口号，按需编写
        https: false,
        hotOnly: false,
        proxy: { // 配置跨域
            '/api': {
                // target: 'http://8.140.190.203:8443/api',
                target: 'http://localhost:8001/api',
                ws: true,
                changOrigin: true,
                pathRewrite: {
                    '^/api': '/api'
                }
            }
        }
    }
}