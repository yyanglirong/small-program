const http = require('./http');
class detail extends http{
    static getdetail(id,callback){
        return this.request({
            url:`v2/movie/subject/${id}`,
            success:res=>{
            callback(res)
            }
        })
    }
}
module.exports = detail;