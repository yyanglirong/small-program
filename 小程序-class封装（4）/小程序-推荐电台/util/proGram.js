const http = require('./http');
class proGram extends http{
    static getgram(id,callback){
                return this.request({
                    url:`dj/program/detail?id=${id}`,
                    success:res=>{
                        callback(res)
                    }
                })
            }
}
module.exports = proGram;