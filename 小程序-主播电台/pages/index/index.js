
Page({
  data:{
      musics:[]
  },
  onShow(){
    wx.request({
        url:`https://music.aityp.com/program/recommend?limit=30`,
        header:{'content-type':'application/json'},
        method:'GET',
        dataType:'json',
        responseType:'text',
        success:(res)=>{
            var programs = res.data.programs;
            var musics = []
            programs.forEach(item=>{
            var obj={};
            obj.imgUrl = item.coverUrl;
            obj.listent = item.listenerCount;
            obj.chan = item.radio.category;
            obj.title = item.mainSong.name;
            obj.artists = item.mainSong.artists[0].name;
            musics.push(obj)
            })
            this.setData({
                musics
            })
        }
    })
  }
  
})

