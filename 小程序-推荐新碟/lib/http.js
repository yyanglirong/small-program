var baseUrl = "https://music.aityp.com/"
function http({url,data}){
    return new Promise((resolve,reject)=>{
        wx.request({
            url: baseUrl+url,
            data,
            header:{
                'content-type':"application/json"
            },
            method: 'GET', 
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
module.exports = {
    getIndex:(cat)=>{
        return http({
            url:'top/album',
            data:{
                cat
            }
        })
    },
    getSong:(id,callback)=>{
        return http({
            url:`album?id=${id}`,
            success:res=>{
                callback(res)
            }
        })
    }
}