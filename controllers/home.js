//控制器, 负责业务调度
const userService = require("../service/homeService");
//const bodyParser = require("koa-bodyparser");
const { getAccessToken } = require("../service/accessToken");
async function getIndex(ctx) {
    let self = ctx;
    let accessToken = await getAccessToken();
    self.body = accessToken
}

module.exports = {
    getIndex
}