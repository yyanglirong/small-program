const http = require('./http')
class Indexhttp extends http{
    static getIndex(){
       return this.request({
           url:"program/recommend"
       })
    }
}
module.exports = Indexhttp;