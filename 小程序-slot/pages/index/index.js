const Index = require('../../models/Index')
Page({
  data: {
    music:[]
  },
  onLoad:async function(){
    var mus = await Index.getCat();
    var {playlists}=mus.data;
    var music = [];
    for(var i=0;i<playlists.length;i++){
      var obj ={}
      obj.img = playlists[i].coverImgUrl;
      obj.title = playlists[i].name;
      music.push(obj)
    }
    this.setData({
      music
    })
    
  }
})
