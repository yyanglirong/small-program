const proGram = require('../../util/proGram');
Page({
  data: {
    program:[]
  },
  onLoad:async function(options){
    var {id} =options;
    var res = await proGram.getgram(id);
    var grams =[res.data.program];
    console.log(grams)
    var program =[];
    for(var i=0;i<grams.length;i++){
      var obj = {};
      obj.name = grams[i].name;
      obj.img = grams[i].coverUrl;
      obj.detatils = grams[i].radio.name;
      obj.Subscribe = grams[i].radio.subCount;
      obj.like = grams[i].likedCount;
      obj.comment = grams[i].commentCount;
      obj.share = grams[i].shareCount;
      obj.id = grams[i].mainSong.id;
      obj.time = grams[i].mainSong.bMusic.playTime;
      var date = new Date(obj.time);
      var minu = date.getMinutes();
      var sec = date.getSeconds();
      var sum = minu+"分"+sec+"秒";
      obj.time = sum;
      obj.subCount = grams[i].radio.subCount;
      program.push(obj)
    }
    this.setData({
      program
    })
  },
  handleClick(event){
    var {id,name} = event.currentTarget.dataset;
    let img = escape(event.currentTarget.dataset.img)
    wx.navigateTo({
      url: '/pages/active/active?id='+id+"&name="+name+"&img="+img
    })
  }
})