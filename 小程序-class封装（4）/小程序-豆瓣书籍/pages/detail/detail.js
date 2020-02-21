const indexDetail = require('../../lib/indexDetail')
Page({
  data: {
    sos:[]
  },
  onLoad:async function(options){
    var {id} = options;
    var res= await indexDetail.getID(id)
      var list = [res.data];
      var sos = [];
      list.forEach(item=>{
        var obj = {};
        obj.name = item.title;
        obj.img = item.images.large;
        obj.author = item.author[0];
        obj.publisher = item.publisher;
        obj.subtitle = item.subtitle;
        obj.pubdate = item.pubdate;
        obj.pages = item.pages;
        obj.price = item.price;
        obj.binding = item.binding;
        obj.summary = item.summary;
        obj.author_intro = item.author_intro;
        sos.push(obj)
      })
      this.setData({
        sos
      })
  }

})