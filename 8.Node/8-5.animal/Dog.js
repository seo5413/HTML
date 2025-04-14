const Animal = require('./Animal');

class Dog extends Animal {
    makeSound(){            //오버라이딩
        return `${this.name} 멍멍`;
    }
}
module.exports = Animal;