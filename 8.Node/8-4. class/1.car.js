class Car{
    // let make = '';
    constructor (make,model) {          //초기화 함수수
        this.make = make;               //객체의 내부 변수(속성)에 저장장
        this.model = model;
    }

    drive(){
        return `${this.make} ${this.model} is Driving...`
    }
    doorOpen(){
        return `${this.make} ${this.model} 문이 열립니다`
    }
    doorClose(){
        return `${this.make} ${this.model} 문이 닫힙니다`
    }
}

const myCar = new Car('현대','K5');
console.log(myCar.drive());
const myNewCar = new Car('테슬라', 'Model S');
console.log(myNewCar.drive());
console.log(myCar.doorClose());
console.log(myCar.doorOpen());

console.log(typeof myCar);
console.log(myCar instanceof Error);
console.log(myCar instanceof Car);