
Page({
  data: {
    music:[]
  },
  onShow(){
    var baseUrl ="https://music.aityp.com/";
    wx.request({
      url: baseUrl+"top/playlist",
      data:{
        cat:"华语"
      },
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
          obj.id=item.id;

          music.push(obj)
        })
        this.setData({
          music
        })
    }
  })
},
handleClick(event){
  var id = event.currentTarget.dataset.id;
  wx.navigateTo({
    
    url: '/pages/details/details?id='+id,
    
  })
}
})

