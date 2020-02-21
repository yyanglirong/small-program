const IndexHttp = require('../../models/IndexHttp')
Page({
  data: {
    And:[]
  },
  async onLoad(){
    var res = await IndexHttp.getindex();
    console.log(res)
    var And = res.data.results.Android;
    console.log(And)
    this.setData({
      And
    })
  }
  
})
