const http = require('../../lib/http');
Page({
  data: {
    book:[]
  },
 handleSubmit(event){
   var keyword = event.detail.value.keyword;
   http.getSearch(keyword).then(res=>{
     var {books}=res.data;
     console.log(books)
     var book=[];
     books.forEach(item=>{
      var obj = {};
      obj.id = item.id;
      obj.img = item.images.large;
      obj.name = item.title;
      obj.average = item.rating.average;
      obj.num = item.rating.numRaters;
      obj.author = item.author[0];
      obj.translator = item.translator[0];
      obj.publisher = item.publisher;
      obj.pubdate = item.pubdate;
      obj.price = item.price;
      book.push(obj)
    })
     this.setData({
       book
     })
   })
 },
  handleClcik(event){
    var id = event.currentTarget.dataset.id;
    wx.navigateTo({
      url:'/pages/detail/detail?id='+id
    })
    console.log(id)
  }
})
