var baseUrl = "https://douban.uieee.com/"
function http({url,data}){
    return new Promise((resolve,reject)=>[
        wx.request({
            url: baseUrl+url,
            data,
            header:{
                'content-type':'application/text'
            },
            method: 'GET', 
            dataType:'json',
            responseType:'text',            
            success:(res)=>{
                resolve(res)
            },
            fail:(err)=>{
                reject(err)
            }
        })
    ])
}
module.exports = {
    getSearch:(keyword)=>{
        return http({
            url:"v2/book/search?q=",
            data:{
                q:keyword
            }
        })
    },
    getID:(id)=>{
        return http({
            url:`v2/book/${id}`,
            success:res=>{
                callback(res)
            }
        })
    }
}