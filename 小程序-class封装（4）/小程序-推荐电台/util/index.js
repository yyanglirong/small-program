const http = require('./http')
class Index extends http{
    static getpro(limit){
                return this.request({
                    url:'program/recommend',
                    data:{
                        limit
                    }
                })
            } 
}
module.exports = Index;