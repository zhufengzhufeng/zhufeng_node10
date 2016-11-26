//订阅发布模式
// 监听方法 on 有钱了 -> 很多方法 (买车，买包)
// emit 有钱了
// 移除的方法  取消掉买车的方法
function Man() {
    this.events = {}
}
//创建个私有的盒子来装所有一对多的关系
Man.prototype.on = function (eventName,callback) {
    //表示1对多 有钱:['',''],没钱:[""]
};
Man.prototype.emit = function () {
    
};
function buyPack() {console.log('有钱了买包');}
function buyCar() {console.log('有钱了买车');}
man.on('有钱了',buyPack);
man.on('有钱了',buyCar);
man.emit('有钱了');
