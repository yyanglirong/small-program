const http = require('./http');
class hothttp extends http{
    static gethot(id){
        return this.request({
            url:"artist/album",
            data:{
                id
            }
        })
    }
}
module.exports = hothttp;