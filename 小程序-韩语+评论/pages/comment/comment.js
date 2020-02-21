const CommentHttp = require('../../models/ComentHttp')
Page({
  data: {
    hot:[]
  },
  onLoad:async function(options){
    var {id}=options;
    var res = await CommentHttp.getComent(id);
    var list = res.data.hotComments;
    var hot = [];
    for(var i =0;i<list.length;i++){
      var obj = {};
      obj.name = list[i].user.nickname;
      obj.content = list[i].content;
      obj.user = list[i].user.avatarUrl;
      hot.push(obj)
    }
    this.setData({
      hot
    })
  }
})