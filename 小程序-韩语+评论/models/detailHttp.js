const http = require('./http');
class DetailHttp extends http{
    static getDetails(id,callback){
        return this.request({
            url:`playlist/detail?id=${id}`,
            success:res=>{
                callback(res)
            }
        })
    }
}
module.exports = DetailHttp;