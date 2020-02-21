const Indexhttp = require('../../models/Indexhttp')
Page({
  data: {
    programs:[],
  },
  async onLoad(){
    var res = await Indexhttp.getIndex();
    var programs = res.data.programs;
    this.setData({
      programs
    })
  },
})
