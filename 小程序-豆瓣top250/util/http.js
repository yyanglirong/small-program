var baseUrl = "https://douban.uieee.com/"
function http({url,data}){
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
module.exports = {
    getCatData:(start)=>{
        return http({
            url:"v2/movie/top250",
            data:{
                start
            }
        })
    },
    getdetail:(id,callback)=>{
        return http({
            url:`v2/movie/subject/${id}`,
            success:res=>{
                callback(res)
            }
        })
    }
}