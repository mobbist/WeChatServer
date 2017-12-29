//路由层, 负责url处理
const Router = require("koa-router");

const user = new Router();
const { authentication } = require("../controllers/identity");


user.get("/authentication", authentication);

module.exports = user;