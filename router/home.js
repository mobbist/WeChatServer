//路由层, 负责url处理
const Router = require("koa-router");

const user = new Router();
const homeController = require("../controllers/home");


user.get("/", homeController.getIndex);


module.exports = user;