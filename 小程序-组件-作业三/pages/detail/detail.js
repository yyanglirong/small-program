const Detailhttp = require("../../models/Detailhttp");
Page({
  data: {
    pro:[]
  },
  async onLoad(options){
    var {id} = options;
    var res = await Detailhttp.getdetail(id);
    var pro = res.data.program;
    this.setData({
      pro
    })
  }
})