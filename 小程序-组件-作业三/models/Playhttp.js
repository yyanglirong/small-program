const http = require('./http')
class getPlay extends http{
    static getId(id){
        return this.request({
            url:"song/url",
            data:{
                id
            }
        })
    }
}
module.exports = getPlay;