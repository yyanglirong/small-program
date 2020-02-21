const http = require('./http');
class IndexHttp extends http{
    static getindex(){
        return this.request({
            url:"today"
        })
    }
}
module.exports = IndexHttp