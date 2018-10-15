// 引入mockjs
const Mock = require('mockjs');

var res = Mock.mock('/api/topics',{
  'success': true,
  'data|10': [{ 
    'id|+1': 1,
      'img': "@image('200x100','图片的名称')",
      'title': '@ctitle(3,8)',
      'city': "@county(true)", 
    'stock_num': '@integer(0,100)',//库存数量
      'marketing_start': '@datetime()',
      'marketing_stop': '@now()',
      'price': '@integer(100,2000)',//现价，单位：分
      'original_price': '@integer(100,3000)'
  }] 
})
 


