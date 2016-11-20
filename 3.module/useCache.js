require('./cache.js');
//在此处删除cache里面缓存的cache.js
//我们需要获得一个绝对的路径，通过绝对路径取得对应的模块
require.resolve('./cache.js');//通过“已存在”的相对路径解析出一个绝对路径来
console.log(require.resolve('./cache.js'));
//在缓存对象中通过绝对路径取出对应的模块进行删除
delete require.cache[require.resolve('./cache.js')];
require('./cache.js');
//清除缓存，多次引用多次执行，
//console.log(require);
//缓存根据绝对路径进行的缓存，因为不同的文件夹里包含着相同的文件名
//获得缓存
console.log(require.cache);
//模块的缓存机制
