const http = require('./http')
class IndexHttp extends http{
    static getKorean(){
        return this.request({
            url:"top/playlist",
            data:{
                cat:"韩语"
            }
        })
    }
}
module.exports = IndexHttp;