import babel from 'rollup-plugin-babel'

import rollupPluginHtml from '@rollup/plugin-html'

import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'

import serve from 'rollup-plugin-serve'

import livereload from 'rollup-plugin-livereload'

import typescript from '@rollup/plugin-typescript'

import postcss from 'rollup-plugin-postcss'

export const rollupDevConfig = {
  input:'./src/main.js',//入口文件
  // 出口
  output:{
    file:'./dist/bundle.js',//打包后的存放文件
    format:'cjs',//输出格式 amd es6 iife umd cjs
    name:'bundleName',//如果iife,umd需要指定一个全局变量
    sourcemap: true // true-隐射每个文件
  },
  plugins: [
    resolve(), // 插件允许我们加载第三方插件
    commonjs(), // 插件将他们转为ES6版本

    livereload(), // 开启热更新

    typescript(), // 转换ts代码

    babel({
        exclude: 'node_modules/**' // babel将ES6编译为ES5,在编译时，跳过【node_modules】
    }),

    postcss(), // 编译css

    rollupPluginHtml({
      fileName: 'index.html', // Default: 'index.html'
      meta: [{ charset: 'utf-8' }], // Default: [{ charset: 'utf-8' }] 指定要发出的HTML的名称。
      title: 'Rollup', // Default: 'Rollup Bundle'
      publicPath: './', // Default: '' 指定在HTML输出中附加到所有捆绑包资源(文件)的路径
    }),

    // 开启本地服务
    serve({
      // open: true,
      contentBase: 'dist'
    })
  ]
}





