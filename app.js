const Koa = require("koa");
const static = require("koa-static");
const views = require('koa-views')
const path = require("path");


const app = new Koa();



// 加载模板引擎
app.use(views(path.join(__dirname, './dist'), {
    extension: 'html'
}))






//加载汇总路由
const routers = require("./router/index");
app.use(routers.routes()).use(routers.allowedMethods())


// 静态资源目录对于相对入口文件index.js的路径
const staticPath = './dist'
app.use(static(
    path.join(__dirname, staticPath)
))




app.listen(3000, "127.0.0.1");
console.log("server success!!");