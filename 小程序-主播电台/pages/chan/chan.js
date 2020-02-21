// pages/chan/chan.js
Page({
  data: {
    music:[]
  },
  onShow(){
    wx.request({
      url: 'https://music.aityp.com/top/playlist?cat=%E5%8D%8E%E8%AF%AD',
      method: 'GET',
      dataType:'json',
      responseType:'text',
      success:(res)=>{
        var playlists = res.data.playlists;
        var music=[];
        playlists.forEach(item=>{
          var obj={};
          obj.name=item.name;
          obj.img=item.coverImgUrl;
          music.push(obj)
        })
        this.setData({
          music
        })
      }
    })
  }
})