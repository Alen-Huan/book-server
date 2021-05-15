const koa = require('koa');
const app = new koa();

// app.use((context)=>{
//     const { request:req } = context;
//     const { url } = req;
//     if(url === '/user') {
//         context.body = 'abcde';
//         return;
//     }
//     context.body = '册数';
// })
// 开启一个http服务
// 接受http请求并作处理，处理完成响应
app.listen(3001,()=>{
    console.log('启动成功');
})