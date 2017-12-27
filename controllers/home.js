//控制器, 负责业务调度
const userService = require("../service/homeService");

async function getIndex(ctx) {
    var user = await userService.getUser();
    ctx.body = user;
}

module.exports = {
    getIndex
}