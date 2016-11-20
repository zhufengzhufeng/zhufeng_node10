var calc = {
    '+':function (a,b) {
        return a+b;
    },
    '-':function (a,b) {
        return a-b;
    }
};
console.log(1);
module.exports = calc;
//exports = calc;//给exports改变了一个空间，改变空间不会影响module.exports
// 写一个person.js 写一个person的类 使用一个userPerson.js 使用这个person类