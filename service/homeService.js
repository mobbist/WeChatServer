//const {query} = require("../utils/pool");
//具体干实事的模块
async function getUser() {
    return Promise.resolve({
        name: "文卓汽车网",
        age: 32
    });
}

module.exports = {
    getUser
}