const Koa = require("koa");
const static = require("koa-static");
const path = require("path");
const app = new Koa();
const bodyParser = require("koa-bodyparser");
app.use(bodyParser())
app.use(async (ctx, next) => {
    if (ctx.method === 'POST') {
        console.log(ctx.request.body);
    }
    await next();
})




//加载汇总路由
const routers = require("./router/index");
app.use(routers.routes()).use(routers.allowedMethods())


// 静态资源目录对于相对入口文件index.js的路径
const staticPath = './static'
app.use(static(
    path.join(__dirname, staticPath)
))




app.listen(3000, "127.0.0.1");
console.log("server success!!");