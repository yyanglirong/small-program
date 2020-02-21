const http = require('./http')
class indexhttp extends http{
    static getindex(){
        return this.request({
            url:"top/artists"
        })
    }
}
module.exports = indexhttp;