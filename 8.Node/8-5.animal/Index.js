const Animal = require('./Animal');
const Dog = require('./Dog');
const Cat = require('./Cat');

const aAnimal = new Animal('dolly');
const aSound = aAnimal.makeSound();
console.log(aSound);

const aDog = new Dog('charly');
const aDogSound = aDog.makeSound();
console.log(aDogSound);

const bDog = new Dog('chady');
const bDogSound = bDog.makeSound();
console.log(bDogSound);

const aCat = new Cat('citty');
const aCatSound = aCat.makeSound();
console.log(aCatSound);