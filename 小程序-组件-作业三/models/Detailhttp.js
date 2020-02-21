const http = require('./http');
class Detailhttp extends http{
    static getdetail(id){
        return this.request({
            url:"dj/program/detail",
            data:{
                id
            }
        })
    }
}
module.exports = Detailhttp;