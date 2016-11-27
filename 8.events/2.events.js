function Man() {
    this._events = {}
}
Man.prototype.on = function (eventName,callback) {
    if(this._events[eventName]){
        this._events[eventName].push(callback);
    }else{
        this._events[eventName] = [callback]
    }
};
Man.prototype.emit = function (eventName) {
    var args = [].slice.call(arguments,1);
    if(this._events[eventName]){
        this._events[eventName].forEach(function (item) {
            item.apply(null,args);
        });
    }
};
//移除事件监听的方法
Man.prototype.removeListener = function (eventName,callback) {
    this._events[eventName] = this._events[eventName].filter(function (item) {
        //返回false是删掉，有一个fasle就是false，既要数组中不包含callback，还有one上也不含callback
        return (item!=callback)&&(callback!=item.g); //在数组中过滤掉相同的callback
    });
};
//once方法，把函数绑定一次，当函数执行后，删除掉自己，在触发emit就无法找到对应的方法执行了
Man.prototype.once = function (eventName,callback) {
    //先绑定，在方法执行后在移除掉  {有钱:[one]}
    var that = this;
    function one() {
        callback.apply(this,arguments);//触发原有的callback函数
        that.removeListener(eventName,one); //删除掉原有的one函数
    }
    //在one中可以找到callback
    one.g = callback;
    this.on(eventName,one); //在emit时触发的是one函数
};
//移除的方法 找到对象{"有钱":[callback]}
var man = new Man();
function buyCar(who) {
    console.log('买车给'+who);
}
function buyPack(who) {
    console.log('买包给'+who);
}

man.on('有钱',buyCar);
man.once('有钱',buyPack);
man.removeListener('有钱',buyCar);
man.removeListener('有钱',buyPack);
man.emit('有钱','妹子');
