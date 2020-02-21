const http = require('../../lib/http');
Page({
  data: {
    Chinese:[],
    index:0
  },
  onLoad:function(){
     http.getIndex(0).then(res=>{
       var chan = res.data.albums;
       console.log(chan)
       var Chinese=[];
       chan.forEach(item=>{
         var obj={};
         obj.name=item.name;
         obj.img = item.picUrl;
         obj.waiter = item.artist.name;
         obj.id = item.id;
         console.log(obj)
         Chinese.push(obj)
       })
       this.setData({
         Chinese
       })
     })
  },
  handleClick(event){
    var {id} =event.currentTarget.dataset;
    wx.navigateTo({
      url: '/pages/detail/detail?id='+id,
    })
  }

 
})
