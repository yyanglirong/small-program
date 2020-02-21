const http = require("./http");
class detailindex extends http{
    static getdetail(id){
        return this.request({
            url:"artists",
            data:{
                id
            }
        })
    }
}
module.exports = detailindex;