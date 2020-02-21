const HTTP = require('./HTTP');
class IndexModel extends HTTP{
    static getIndex(){
        return this.request({
            url:"top/album",
            data:{
                cat:"华语"
            }
        })
    }
}
module.exports = IndexModel;