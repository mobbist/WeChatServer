//控制器, 负责业务调度
const userService = require("../service/homeService");
//const bodyParser = require("koa-bodyparser");
const { getAccessToken } = require("../service/accessToken");
async function getIndex(ctx) {
    // let accessToken = await getAccessToken();
    userService.checkSignature()


    ctx.body = "123"
}
module.exports = {
    getIndex
}