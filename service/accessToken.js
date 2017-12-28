const request = require('async-request');

//获取access_token并检测是否token失效
const getAccessToken = async () => {
    //判断是否是过时,过时则获取新的token
    const token = await toWechatAccessToken();
    return Promise.resolve(token);
}

//去微信服务端获取access_token
toWechatAccessToken = async () => {
    let appid = "wxe2688e3d857ef00f"
    let secret = "740fa80d6ee2d8b4702eb0545a2eb82c"
    var res = await request(`http://47.91.245.123:8081/getAccessToken`)
    console.log(res.body);
    return Promise.resolve(res.body);
}

module.exports = {
    getAccessToken
}
