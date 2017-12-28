const Koa = require("koa");
const static = require("koa-static");
const path = require("path");
const app = new Koa();

// xmlTool.js
const xml2js = require('xml2js')
const jsonToXml = (obj) => {
    const builder = new xml2js.Builder()
    return builder.buildObject(obj)
}
message = {
    text(msg, content) {
        return jsonToXml({
            xml: {
                ToUserName: msg.FromUserName,
                FromUserName: msg.ToUserName,
                CreateTime: Date.now(),
                MsgType: msg.MsgType,
                Content: content
            }
        })
    }
}

app.use(async (ctx, next) => {
    //这里监听微信消息
    if (ctx.method == 'POST' && ctx.is('text/xml')) {
        let buf = ''
        ctx.req.setEncoding('utf8')
        //监听接受xml数据
        ctx.req.on('data', (chunk) => {
            buf += chunk
        })
        //接受完成转为JSON
        ctx.req.on('end', () => {


            xml2js.parseString(buf, (err, result) => {

                ctx.res.setHeader('Content-Type', 'application/xml')
                let res = message.text(result.xml, result.xml.Content)

                ctx.res.end(res)
                // if (err) {
                //     Promise.reject(err)
                // } else {
                //     Promise.resolve(result)
                // }
            })
            //console.log(json);
        })



        await next()
    } else {
        ctx.body = "body";
    }
})







// //加载汇总路由
// const routers = require("./router/index");
// app.use(routers.routes()).use(routers.allowedMethods())


// 静态资源目录对于相对入口文件index.js的路径
// const staticPath = './static'
// app.use(static(
//     path.join(__dirname, staticPath)
// ))




app.listen(3000, "127.0.0.1");
console.log("server success!!");