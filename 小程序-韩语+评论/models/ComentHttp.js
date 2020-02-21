const http = require('./http');
class CommentHttp extends http{
    static getComent(id,callback){
        return this.request({
            url:`comment/music?id=${id}`,
            success: res=>{
                callback(res)
            }
        })
    }
}
module.exports = CommentHttp