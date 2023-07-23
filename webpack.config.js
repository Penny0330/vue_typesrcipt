const path = require('path');
const { VueLoaderPlugin } = require('vue-loader');

module.exports = {
  entry: './src/main.ts',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: 'vue-loader',
      },
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: {
          loader: 'ts-loader',
          options: {
            configFile: path.resolve(process.cwd(), 'tsconfig.json'),
            appendTsSuffixTo: [/\.vue$/]
          }
        },
      },
			{
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js', '.vue'],
  },
  devServer: {
    static: {
        directory: path.resolve(__dirname, 'dist'),
    },
	// gzip 壓縮，加快頁面加載速度
    compress: true,
    port: 8080,
  },
  plugins: [
    // 添加 VueLoaderPlugin 插件
    new VueLoaderPlugin(),
  ],
};