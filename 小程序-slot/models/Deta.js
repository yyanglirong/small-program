const http = require('./http');
class Deta extends http{
    static getMv(){
        return this.request({
            url:"mv/first"
        })
    }
}
module.exports = Deta;