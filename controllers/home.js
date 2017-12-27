//控制器, 负责业务调度
const userService = require("../service/homeService");
//const bodyParser = require("koa-bodyparser");

async function getIndex(ctx) {

    var user = await userService.checkSignature(ctx);
    ctx.body = user;
}

module.exports = {
    getIndex
}