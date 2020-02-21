var baseUrl = "https://douban.uieee.com/"
class http {
    static request({url,data,method="GET"}){
        return new Promise((resolve,reject)=>{
            wx.request({
                url:baseUrl+url,
                data,
                header:{
                    'content-type':'application/text'
                },
                method:'GET',
                dataType:'json',
                responseType:'text',
                success:(res)=>{
                    resolve(res)
                },
                error:(err)=>{
                    reject(err)
                }
            })
        })
    }
}
module.exports = http;
