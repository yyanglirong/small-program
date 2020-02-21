var baseUrl = "https://music.aityp.com/";
class http {
    static request({url,data}){
        return new Promise((resolve,reject)=>{
            wx.request({
                url: baseUrl+url,
                data,
                header:{"content-type":"applaction/text"},
                method: 'GET',
                dataType:"json",
                responsetype:"text",
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