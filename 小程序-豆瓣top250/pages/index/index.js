const http = require('../../util/http.js');
Page({
  data:{
    start:0,
    subjects:[]
  },
  onLoad:function(){
    http.getCatData(0).then(res=>{
      var sub = res.data.subjects;
      console.log(sub)
      var subjects = [];
      sub.forEach(item=>{
        var obj = {};
        obj.name = item.title;
        obj.img = item.images.small;
        obj.id = item.id;
        subjects.push(obj)
      })
      this.setData({
        subjects
      })
    })
  },
  onReachBottom(){
    var start = this.data.start;
    start+=25;
    http.getCatData(start).then(res=>{
      var {subjects} = res.data;
      var mov = res.data.subjects;
      var movie = []
      mov.forEach(item=>{
        var obj = {};
        obj.name = item.title;
        obj.img = item.images.small;
        movie.push(obj)
      })
      this.setData({
        start,
        subjects:this.data.subjects.concat(movie)
      })
    })
  
    
  },
  handleClick(event){
    var {id} = event.currentTarget.dataset;
    wx.navigateTo({
       url:"/pages/details/details?id="+id,
    })
  }

})
