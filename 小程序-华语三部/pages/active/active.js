const audio = wx.getBackgroundAudioManager()
Page({
  data:{
    play:true,
    music:[]
  },
  onLoad:function(options){
    var id = options.id;
    var pic = unescape(options.pic);
    console.log(pic)
    wx.request({
      url:"https://music.aityp.com/song/url?id="+id,
      header:{
        'content-type':'application/json'
      },
      method:'GET',
      dataType:'json',
      responseType:'text',
      success:(res)=>{
        var music = [];
        var songs = res.data.data[0];
        var obj = {};
        obj.musicUrl = songs.url;
        obj.img = pic;
        console.log(obj)
        music.push(obj)
        this.setData({
          music
        })
      }
    })
  },
  handlePlay(event){
    var url = event.currentTarget.dataset.url;
    if(this.data.play){
      audio.src = url;
      audio.title = "name";
      this.setData({
        play:!this.data.play
      })
      }else{
        audio.pause();
        this.setData({
          play: !this.data.play
        })
    }
  }
})