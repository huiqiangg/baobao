Page({
  data: {
    value: 0,
    val_height: 170,
    val_weight:50,
    value2: 0,
    styles: [{
      line: '#dbdbdb',
      bginner: '#fbfbfb',
      bgoutside: '#dbdbdb',
      lineSelect: '#52b8f5',
      font: '#404040'
    }, {
      line: '#dbdbdb',
      bginner: '#fbfbfb',
      bgoutside: '#dbdbdb',
      lineSelect: '#52b8f5',
      font: '#404040'
    }]
  },
  bindvalue: function(e) {
    console.log(e.detail.value)
    this.setData({
      value: e.detail.value
    })
  },
  bindvalue2: function(e) {
    // console.log(e)
    this.setData({
      value2: e.detail.value
    })
  },
  assignment() {
    this.setData({
      val: 50
    })
  }
})