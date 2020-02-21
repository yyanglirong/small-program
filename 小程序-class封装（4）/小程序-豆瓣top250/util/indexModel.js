const http = require('./http');
class indexModel extends http{
    static getCatData(start){
        return this.request({
            url:"v2/movie/top250",
            data:{
                start
            }
        })
    }
}
module.exports = indexModel;