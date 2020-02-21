const detailindex = require("../../models/detailindex")
const hothttp = require("../../models/hothttp")
Page({
  data: {
    song:[],
    artist:[],
    artists:[]
  },
  onLoad: function (options){
    var {id}= options;
    detailindex.getdetail(id).then(res=>{
      var song = res.data.hotSongs;
      var artist = res.data.artist;
     this.setData({
        song,
        artist
      })
    })
    hothttp.gethot(id).then(res=>{
      var hotAlbums = res.data.hotAlbums;
      var artists = [];
      for(var i=0;i<hotAlbums.length;i++){
        var obj ={};
        obj.img1v1Url= hotAlbums[i].blurPicUrl;
        obj.name = hotAlbums[i].name;
        artists.push(obj)
      }
      this.setData({
        artists
      })
    })
  }
})