const indexhttp = require("../../models/indexhttp")
Page({
  data: {
    artists:[]
  },
  onLoad(){
    indexhttp.getindex().then(res=>{
    var artists = res.data.artists;
    this.setData({
      artists
    })
  })
    
  }
})
