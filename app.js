const Koa = require("koa");
const static = require("koa-static");
const path = require("path");
const app = new Koa();

// xmlTool.js
const xml2js = require('xml2js')

xmlToJson = (str) => {
    return new Promise((resolve, reject) => {
        const parseString = xml2js.parseString
        parseString(str, (err, result) => {
            if (err) {
                reject(err)
            } else {
                resolve(result)
            }
        })
    })
}

jsonToXml = (obj) => {
    const builder = new xml2js.Builder()
    return builder.buildObject(obj)
}


app.use(async (ctx, next) => {
    //这里监听微信消息
    if (ctx.method == 'POST' && ctx.is('text/xml')) {
        let promise = new Promise(function (resolve, reject) {
            let buf = ''
            ctx.req.setEncoding('utf8')
            //监听接受xml数据
            ctx.req.on('data', (chunk) => {
                buf += chunk
            })
            //接受完成转为JSON
            ctx.req.on('end', () => {

                console.log(buf);
                xmlToJson(buf)
                    .then(resolve)
                    .catch(reject)
            })
        })

        await promise.then((result) => {
            ctx.req.body = result
        })
            .catch((e) => {
                e.status = 400
            })

        await next()
    } else {
        await next()
    }
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