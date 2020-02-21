const detail = require('../../util/detail');
Page({
  data: {
    details:[]
  },
  onLoad:async function(options){
    var {id} = options;
    var res =await detail.getdetail(id)
      var data = [res.data];
      var details = [];
      data.forEach(item=>{
        var obj = {};
        obj.title= item.title;
        obj.img = item.images.small;
        obj.detail = item.summary;
        obj.directors = item.directors[0].name;
        obj.languages = item.languages[0];
        obj.pubdates = item.pubdates[0];
        var writer = [];
        item.writers.forEach(item=>{
          writer.push(item.name)
        })
        obj.writer = writer;
        // obj.avatars = item.casts[0].name;
        var wjx = [];
        item.casts.forEach(item=>{
          wjx.push(item.name)
        })
        obj.avatars = wjx;
        obj.genres = item.genres[0];
        obj.countries = item.countries[0];
        details.push(obj)
        console.log(obj)

      }),
      this.setData({
        details
      })
      
    
  }

})