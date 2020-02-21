const http = require('../../util/http');
Page({
  data: {
    programs:[]
  },
  onLoad:async function(){
    var res = await http.getpro("30")
    var pro = res.data.programs;
    var programs = [];
    for(var i=0;i<pro.length;i++){
      var obj = {};
      obj.name = pro[i].mainSong.name;
      obj.detatils = pro[i].dj.brand;
      obj.sort = pro[i].radio.category;
      obj.img = pro[i].blurCoverUrl;
      obj.id = pro[i].id;
      programs.push(obj)
    }
    this.setData({
      programs
    })
  },
  handleClick(event){
    var {id} = event.currentTarget.dataset;
    wx.navigateTo({
      url: '/pages/program/program?id='+id,
    })
  }
})
