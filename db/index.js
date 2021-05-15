const mongoose = require('mongoose');

// Schema
// Modal 根据Schema生成的一套方法，这套方法用来操作mongoDB下的集合和集合下的文档
const UserSchema = new mongoose.Schema({
    nickname: String,
    password: String,
    age: Number
})
const UserModal = mongoose.model('User', UserSchema);
const connect = ()=>{
    // 连接数据库
    mongoose.connect('mongodb://127.0.0.1:27017/book-mgr');
    // 监听数据库被打开输出内容
    mongoose.connection.on('open',()=>{
        // 创建文档
        const user  = new UserModal({
            nickname: '小红',
            password: '123456',
            age: 12
        })
        // 同步到数据库MongoDB
        user.save();
    })
}

connect();