const activeUrl = require("../../util/activeUrl");
const audio = wx.getBackgroundAudioManager()
Page({
  data: {
    one:[],
    isPlay:true
  },
  onLoad:async function(options){
    var {id,name} = options;
    var img = unescape(options.img)
    console.log(img)
    var res = await activeUrl.getUrl(id)
    var song = res.data.data[0].url;
    var obj = {}
    var one =[]
    obj.name = name;
    obj.song = song;
    obj.img = img;
    one.push(obj)
    this.setData({
     one
    })
    console.log(this.data.one)
    },
    handleClick(){
      var isPlay = this.data.isPlay
      var name = this.data.one[0].name
      var song = this.data.one[0].song
      isPlay=!isPlay
      this.setData({
        isPlay
      })
     if(!isPlay){
      audio.src = song;
      audio.title = name
     }else{
       audio.pause()
     }
    }
})