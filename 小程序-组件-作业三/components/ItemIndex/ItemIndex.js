// components/ItemIndex/ItemIndex.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
      data:{
        type:Object,
      }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleClick(){
      var id = this.properties.data.id;
      wx.navigateTo({
        url: '/pages/detail/detail?id='+id,
      })
    }
  }
})
