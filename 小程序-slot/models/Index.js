const http = require('./http');
class Index extends http{
    static getCat(){
        return this.request({
            url:"top/playlist",
            data:{
                cat:"华语"
            }
        })
    }
}
module.exports = Index;