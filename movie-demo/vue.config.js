module.exports = {
  publicPath: './',
  // 请求代理
  devServer: {
    port: 8080,
    proxy: {
      '/movie': {
        target: 'http://127.0.0.1:8090',
        ws: true,
        changeOrigin: true,
        // 把api替换为空
        // pathRewrite: {
        //   '^/api': ''
        // }
      }
    }
  },
}
