var baseUrl = "https://music.aityp.com/";
class http {
    static request({url,data,method="GET"}){
        return new Promise((resolve,reject)=>{
            wx.request({
                url: baseUrl+url,
                data,
                header:{'content-type':'application/json'},
                method,
                dataType:'json',
                responseType:'text',
                success: (res)=>{
                    resolve(res)
                },
                fail: (err)=>{
                    reject(err)
                }
            })
        })
    }
}
module.exports = http;