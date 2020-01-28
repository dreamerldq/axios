import axios from '../../src/index';

// axios({
//   method: 'get',
//   url: '/simple/get',
//   params: {
//     a: 1,
//     b: 2
//   }
// })
// axios.get('/simple/get')
// axios.post('/simple/post',{
//   a:1
// })
axios('/simple/post', {
  method: 'post',
  data:{
    a:1,
    b:2
  }
})
axios({
  url:'/simple/post',
  method: 'post',
  data: {
    a: 1,
    b: 2
  }
})