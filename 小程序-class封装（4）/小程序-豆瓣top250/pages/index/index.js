const indexModel = require('../../util/indexModel');
Page({
  data:{
    start:0,
    subjects:[]
  },
  onLoad:async function(){
    var res = await indexModel.getCatData(0)
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
  },
  async onReachBottom(){
    var start = this.data.start;
    start+=25;
    var res = await indexModel.getCatData(start)
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
  },
  handleClick(event){
    var {id} = event.currentTarget.dataset;
    wx.navigateTo({
       url:"/pages/details/details?id="+id,
    })
  }

})
