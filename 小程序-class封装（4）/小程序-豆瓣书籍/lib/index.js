const http = require('./http');
class Index extends http{
    static getSearch(keyword){
                return this.request({
                    url:"v2/book/search?q=",
                    data:{
                        q:keyword
                    }
                })
            }
}
module.exports = Index;