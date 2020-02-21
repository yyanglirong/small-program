var baseUrl = "http://gank.io/api/"
class http {
    static request({url,data}){
        return new Promise((resolve,reject)=>{
            wx.request({
                url: baseUrl+url,
                data,
                header: {'content-type':'application/json'},
                method: 'GET',
                dataType: 'json',
                responseType: 'text',
                success: (res)=>{
                    resolve(res)
                },
                fail: (err)=>{
                    reject(err)
                },
            });
        })
    }
}
module.exports = http