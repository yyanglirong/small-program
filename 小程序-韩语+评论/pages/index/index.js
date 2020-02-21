const IndexHttp = require('../../models/IndexHttp');
Page({
  data: {
   music:[]
  },
  async onLoad(){
    var res = await IndexHttp.getKorean();
    var list = res.data.playlists;
    var music = [];
    for(var i=0;i<list.length;i++){
      var obj = {};
      obj.name = list[i].name;
      obj.pic = list[i].coverImgUrl;
      obj.lisen = list[i].playCount;
      var sum = obj.lisen;
      if(sum>10000){
        sum= Math.round(sum/10000);
      }
      obj.lisen = sum;
      obj.by = list[i].creator.nickname;
      obj.id = list[i].id;
      music.push(obj)
    }
    this.setData({
      music
    })
  },
  handleCilck(event){
    var {id} = event.currentTarget.dataset;
    wx.navigateTo({
      url: '/pages/detail/detail?id='+id,
    })
  }
})
