const IndexModel = require('../../modules/IndexModel');
Page({
  data: {
    Chinese:[],
    index:0
  },
  onLoad:async function(){
    var res = await IndexModel.getIndex(0);
    var chan = res.data.albums;
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
  },
  handleClick(event){
    var {id} =event.currentTarget.dataset;
    wx.navigateTo({
      url: '/pages/detail/detail?id='+id,
    })
  }

 
})
