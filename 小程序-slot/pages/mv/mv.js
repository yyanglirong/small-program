const Deta = require('../../models/Deta');
Page({
  data: {
    moive:[]
  },
  onLoad:async function(){
    var res = await Deta.getMv()
    var {data} = res.data;
    var moive = []
    for(var i=0;i<data.length;i++){
      var obj = {};
      obj.title = data[i].name;
      obj.img = data[i].cover;
      moive.push(obj)
    }
    this.setData({
      moive
    })
  }
})