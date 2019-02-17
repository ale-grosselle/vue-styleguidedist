const vueLoader = require('vue-loader');
const path = require('path');


const ignoreDirs = source => {
	return  !(['src/__tests__', 'src/directives'].find(s => source.split(sep).join('/') === s));
};

module.exports = {
	title: 'THRON UX Components',
	defaultExample: false,
	styleguideDir: "dist/documentation",
	components: 'src/**/*.vue',
	webpackConfig: {
		resolve: {
			alias: {
				"node_modules": '~',
				"mixins": path.resolve(__dirname, "src/mixins/")
			},
			modules: [
				'src',
				'node_modules',
				'static',
				'dist'
			]
		},
		module: {
			rules: [
				{
					test: /\.vue$/,
					loader: 'vue-loader',
					options: {
						loaders: {
							scss: [
								'vue-style-loader',
								'css-loader',
								{
									loader: 'sass-loader',
									options: {
										includePaths: ['./src'],
										outputStyle: 'compressed',
									},
								},
							],
						},
					},
				},
				{
					test: /\.js?$/,
					exclude: /node_modules/,
					loader: 'babel-loader',
					query: {compact: false}
				},
				{
					test: /\.(css?|scss)(\?.*)?$/,
					loader: 'style-loader!css-loader!sass-loader',
				},
			],
		},
		plugins: [
			new vueLoader.VueLoaderPlugin()
		],
	},
	usageMode: 'expand',
	exampleMode: 'expand',
};
