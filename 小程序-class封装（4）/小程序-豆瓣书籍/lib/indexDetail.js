const http = require('./http');
class indexDetail extends http{
    static getID(id){
                return this.request({
                    url:`v2/book/${id}`,
                    success:res=>{
                        callback(res)
                    }
                })
            } 
}
module.exports = indexDetail;