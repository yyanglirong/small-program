Page({
    data: {
      musics:[]
    },
    onLoad:function(options){
      var id = options.id;
      wx.request({
        url:"https://music.aityp.com/playlist/detail?id="+id,
        method: 'GET',
        dataType:'json',
        responseType:'text',
        success:(res)=>{
          var tracks = res.data.playlist.tracks;
          var musics=[];
         tracks.forEach(item=>{
            var obj={};
            obj.name=item.name;
            obj.ar = item.ar[0].name;
            obj.pic=item.al.picUrl;
            obj.album=item.al.name;
            obj.id = item.id;
            musics.push(obj)
          })
          this.setData({
            musics
          })
      }
    })
  },
  handleClick(event){
    var id = event.currentTarget.dataset.id;
    let pic = escape(event.currentTarget.dataset.pic);
    wx.navigateTo({
      url: '/pages/active/active?id='+id+'&pic='+pic,
    })
  }
  })