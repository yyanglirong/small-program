const DetailHttp = require('../../models/detailHttp')
Page({
  data: {
    code:[],
    songs:[],
    ids:""
  },
  onLoad:async function(options){
    var {id}=options;
    var res = await DetailHttp.getDetails(id);
    var code = [];
    var songs = [];
    var song = res.data.playlist.tracks;
    for(var j=0;j<song.length;j++){
      var web = {};
      web.songName = song[j].name;
      web.sonsar = song[j].ar[0].name;
      web.img = song[j].al.picUrl;
      songs.push(web)
    }
    var sub = [res.data.playlist];
    var ids = res.data.privileges[2].id;
    for(var i=0;i<sub.length;i++){
      var obj= {};
      obj.pic = sub[i].coverImgUrl;
      obj.lisen = sub[i].playCount;
      var sum = obj.lisen;
      if(sum>10000){
        sum= Math.round(sum/10000);
      }
      obj.lisen = sum;
      obj.name = sub[i].name;
      obj.img = sub[i].creator.avatarUrl;
      obj.nickname = sub[i].creator.nickname;
      obj.tags = sub[i].tags;
      obj.description = sub[i].description;
      code.push(obj)
    }
    this.setData({
      code,
      songs,
      ids
    })
  },
  handleclick(event){
    var id = event.currentTarget.dataset.ids;
    wx.navigateTo({
      url: '/pages/comment/comment?id='+id
    })
  }
})