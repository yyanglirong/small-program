const HTTP = require('./HTTP');
class Details extends HTTP{
    static getSong(id,callback){
        return this.request({
            url:`album?id=${id}`,
            success:res=>{
                callback(res)
            }
        })
    }
}
module.exports = Details;