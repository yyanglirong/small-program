const Playhttp = require('../../models/Playhttp');
const audio = wx.getBackgroundAudioManager();
Component({
  /**
   * 组件的属性列表
   */
  properties: {
      data:{
        type:Object,
      }
  },

  /**
   * 组件的初始数据
   */
  data: {
    isPlay:true
  },

  /**
   * 组件的方法列表
   */
  methods: {
    async click(){
      var id = this.properties.data.mainTrackId;
      console.log(id)
      var res = await Playhttp.getId(id);
      var url = res.data.data[0].url;
      if(this.data.isPlay){
        audio.src = url;
        audio.title = "yanglirong";
      }else{
        audio.pause()
      }
      this.setData({
        isPlay:!this.data.isPlay
      })
    }
  }
})
