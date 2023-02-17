 - https://github.com/rollup/plugins
 - https://github.com/rollup/awesome

 npn run dev:本地运行
 nom run build:打包


# 【rollup】专用于类库型项目, 类似于【webpack】的js模块打包工具，但他更轻量，快捷。【小巧而专注】

## 同时且仅支持JavaScript和Typescript

## 已配备【babel】插件，将 ES6+ 的js代码转为ES5 

## 支持js代码压缩

## 配备本地启动服务、require导入第三方插件、热更新、html、【external】打包时，将第三方插件排除。但是需要单独引入





# rollup.js编译源码中的模块引用默认只支持 ES6+的模块方式import/export

## 而大量npm包是基于CommonJS模块

## 需要插件辅助【rollup.js】使用CommonJS模块的包
  - rollup-plugin-node-resolve@11 插件允许我们加载第三方模块
  - @rollup/plugin-commons@18 插件将它们转换为ES6版本
  - 
    `export default {
        ...省略其他
        plugins: [
            ...省略其他
            resolve(),
            commonjs(),
            ...省略其他
        ]
    }
    `



  `
  "scripts": {
    "build": "rollup --config --environment INCLUDE_DEPS,BUILD:production",
    "dev": "rollup --config -w --environment INCLUDE_DEPS,BUILD:development"
  }
  【--environment INCLUDE_DEPS,BUILD:production】，在运行脚本中添加变量【BUILD:production】
  `