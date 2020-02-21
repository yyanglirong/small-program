const http = require('./http');
class activeUrl extends http{
    static getUrl(id,callback){
        return this.request({
            url:`song/url?id=${id}`,
            success: res=> {
                callback(res)
            }
        })
    }
}
module.exports = activeUrl