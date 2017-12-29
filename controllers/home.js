//控制器, 负责业务调度
const { checkSignature } = require("../service/homeService");
const { getAccessToken } = require("../service/accessToken");
const xml2js = require('xml2js')
exports.getIndex = async (ctx) => {
    // let accessToken = await getAccessToken();
    ctx.body = "123"
    // ctx.res.setHeader('Content-Type', 'application/xml')
    // ctx.res.end("<abc>123</abc>")
}

//检测是否是XML中间件的请求
exports.checkXMLMiddleware = async (ctx) => {
    if (ctx.method == 'POST' && ctx.is('text/xml')) {
        let postData = ctx.request.body
        console.log(postData);
        // let buf = ''
        // ctx.req.setEncoding('utf8')
        // //监听接受xml数据
        // ctx.req.on('data', (chunk) => {
        //     buf += chunk
        // })
        // //接受完成转为JSON
        // ctx.req.on('end', () => {
        //     console.log(buf.xml);
        //     bodyParser
        //     // xml2js.parseString(buf, (err, result) => {
        //     //     ctx.res.setHeader('Content-Type', 'application/xml')
        //     //     let res = message.text(result.xml, result.xml.Content)
        //     //     ctx.body = res
        // })
    }
}
// xmlTool.js

// const jsonToXml = (obj) => {
//     const builder = new xml2js.Builder()
//     return builder.buildObject(obj)
// }
// message = {
//     text(msg, content) {
//         return jsonToXml({
//             xml: {
//                 ToUserName: msg.FromUserName,
//                 FromUserName: msg.ToUserName,
//                 CreateTime: Date.now(),
//                 MsgType: msg.MsgType,
//                 Content: content
//             }
//         })
//     }
// }

// app.use(async (ctx, next) => {
//     //这里监听微信消息



//             
//                 // if (err) {
//                 //     Promise.reject(err)
//                 // } else {
//                 //     Promise.resolve(result)
//                 // }
//             })
//             //console.log(json);
//         })



//         await next()
//     } else {
//         ctx.body = "body";
//     }
// })


