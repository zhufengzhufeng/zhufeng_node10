//订阅发布模式
// 监听方法 on 有钱了 -> 很多方法 (买车，买包)
// emit 有钱了
// 移除的方法  取消掉买车的方法
function Man() {
    this.events = {}
}
//创建个私有的盒子来装所有一对多的关系
Man.prototype.on = function (eventName,callback) {
    //表示1对多 {有钱:[callback,callback]}
    if(this.events[eventName]){ //存在
        this.events[eventName].push(callback);
    }else{ //不存在
        this.events[eventName] = [callback];
    }
};
Man.prototype.emit = function (eventName) {
    //截取除了事件名的第一项其他的组成一个数组，传递给item执行
    //var args = [].slice.call(arguments,1);
    var args =Array.from(arguments).slice(1);
    if(this.events[eventName]){
        //箭头函数，它里面没有this指向指向的就是上一级的this
      /*  this.events[eventName].forEach(function(item){
            item.apply(null,args);
        },this); */
        this.events[eventName].forEach((item)=>{
            item.apply(null,args);
        }); //改变this指向
    }
};
function buyPack(who,who1) {console.log('有钱了买包'+'给'+who+who1+'知道了');}
function buyCar(who,who1) {console.log('有钱了买车'+'给'+who+who1+'知道了');}
var man = new Man();
man.on('有钱了',buyPack);
man.on('有钱了',buyCar);
man.emit('有钱了','妹子','女朋友');

