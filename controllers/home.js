//控制器, 负责业务调度
const { checkSignature } = require("../service/homeService");
//const bodyParser = require("koa-bodyparser");
const { getAccessToken } = require("../service/accessToken");

async function getIndex(ctx) {
    // let accessToken = await getAccessToken();
    let accessToken = checkSignature(ctx);

    console.log("最终返回的echostr: " + accessToken);

    ctx.body = accessToken
}
module.exports = {
    getIndex
}