var baseUrl = "https://music.aityp.com/";
function http({url,data}){
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
            error: (err)=>{
                reject(err)
            }
        })
    })
}
module.exports = {
    getpro:(limit)=>{
        return http({
            url:'program/recommend',
            data:{
                limit
            }
        })
    },
    getgram:(id,callback)=>{
        return http({
            url:`dj/program/detail?id=${id}`,
            success:res=>{
                callback(res)
            }
        })
    },
    getUrl:(id,callback)=>{
        return http({
            url:`song/url?id=${id}`,
            success:res=>{
                callback(res)
            }
        })
    }
}