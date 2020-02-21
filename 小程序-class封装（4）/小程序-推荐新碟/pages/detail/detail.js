const Details = require('../../modules/Details');
Page({
  data: {
    songs:[],
    album:[]
  },
  onLoad: async function(options){
    var {id} = options;
    var res = await Details.getSong(id)
      var song = res.data;
      var pro = res.data.songs;
      var songs = [];
      var album = [];
      var obj={}
      obj.name = song.album.name;
      obj.baseUrl = song.album.picUrl;
      obj.artists = song.album.artists[0].name;
      obj.description = song.album.description;
      obj.songName = song.songs[0].name;
      album.push(obj)
      this.setData({
        album
      })
      for(var i=0;i<pro.length;i++){
        var end ={}
        end.title = pro[i].name;
        end.detatil = pro[i].alia[0];
        end.wrater = pro[i].ar[0].name;
        end.al = pro[i].al.name;
        songs.push(end)
      }
      this.setData({
        songs
      })
   
  }
})