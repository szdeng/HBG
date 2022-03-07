const isProduction = process.env.NODE_ENV === 'production';
// gzip压缩插件

const webpack = require('webpack')
const CompressionWebpackPlugin = require('compression-webpack-plugin')

const cdn = {
	// externals: {
	// 	"vue": 'Vue',
	// 	"element-ui": "ELEMENT",
	// 	"vue-router": 'VueRouter',
	// 	"vuex": 'Vuex',
	// 	"axios": 'axios',
	// },
	// js: [
	// 	'https://cdn.bootcss.com/vue/2.6.10/vue.runtime.min.js',
	// 	'https://cdn.bootcss.com/vue-router/3.1.2/vue-router.min.js',
	// 	'https://cdn.bootcss.com/vuex/3.1.1/vuex.min.js',
	// 	'https://cdn.bootcss.com/axios/0.19.0/axios.min.js',
	// 	"https://cdn.bootcdn.net/ajax/libs/element-ui/2.15.6/index.js",
	// ],
	
	// css: ["https://unpkg.com/element-ui@2.15.6/lib/theme-chalk/index.css"],
}


module.exports = {
	lintOnSave: false,  //是否触发eslint检查
	publicPath: '/',
	outputDir: 'dist',
	assetsDir: 'static',  // 放置生成的css和js和img和fonts的目录
	indexPath: 'index.html',  // 存放index.html模板的路径
	productionSourceMap: false,   //开发环境中设为true定位代码错误
	devServer: {
		// host: '127.0.0.1',
		// port: "8000",
		open: true,
		proxy: {
			'/api': {
				target: 'http://192.168.2.130:22169/api',
				changeOrigin: true,
				// ws: true,
				pathRewrite: {
					"^/api": "",
				}
			},
		},
		// before(app, server) {
		// 	app.get(/.*.(js)$/, (req, res, next) => {
		// 		req.url = req.url + '.gz'
		// 		res.set('Content-Encoding', 'gzip')
		// 		next()
		// 	})
		// }
	},
	chainWebpack: config => {
        config.plugin('html').tap(args => {
			args[0].cdn = cdn
			return args
		})

		//删除预加载
		config.plugins.delete('prefetch')
        
        // 打开打包报告
        config
        .plugin('webpack-bundle-analyzer')
        .use(require('webpack-bundle-analyzer').BundleAnalyzerPlugin)
    },

	configureWebpack: config => {
		config.externals = cdn.externals
		
		if (isProduction) {
			// config.plugins.push(
			// 	new CompressionWebpackPlugin({
			// 		filename: info => {
			// 			return `${info.psth}.gz${info.query}`
			// 		},
			// 		algorithm: 'gzip',
			// 		threshold: 10240,
			// 		test: new RegExp('\\.(' + ['js'].join('|') + ')$'),
			// 		minRatio: 0.8,
			// 		deleteOriginalAssets: false  //删除原文件
			// 	})
			// ),

			//公共代码抽离
			// config.optimization = {
			// 	splitChunks: {
			// 	  cacheGroups: {
			// 		vendor: {
			// 		  chunks: 'all',
			// 		  test: /node_modules/,
			// 		  name: 'vendor',
			// 		  minChunks: 1,
			// 		  maxInitialRequests: 5,
			// 		  minSize: 0,
			// 		  priority: 100
			// 		}
			// 	  }
			// 	}
			// },
			config.plugins.push(
				new CompressionWebpackPlugin({
					algorithm: 'gzip',
					test: /\.js$|\.html$|\.css$/,
					filename: '[path].gz[query]',
					threshold: 10240,
					minRatio: 0.8,
					deleteOriginalAssets: false // 删除源文件 （可选）
				}),
			),
			config.plugins.push(
				new webpack.optimize.LimitChunkCountPlugin({
					maxChunks: 5,
					minChunkSize: 100
				})
			)
		}
		else{
			//开发环境配置
		}
	},

}