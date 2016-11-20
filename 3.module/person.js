function Person() {}
Person.prototype.eat = function () {
    console.log('吃');
};
Person.prototype.sleep = function () {
    console.log('睡');
};
module.exports = Person;
exports.Person = Person;

//exports = Person