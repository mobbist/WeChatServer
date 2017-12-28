//控制器, 负责业务调度
const userService = require("../service/homeService");
//const bodyParser = require("koa-bodyparser");
const { getAccessToken } = require("../service/accessToken");
async function getIndex(ctx) {
    let self = ctx;
    //var check = await userService.checkSignature(ctx);
    //let accessToken = await getAccessToken();
    self.body = "123"
}

module.exports = {
    getIndex
}