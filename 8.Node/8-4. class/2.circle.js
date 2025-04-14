class Circle {
    constructor (radius){
        this._radius = radius;
    }

    // 객체 안의 변수에는 직접 접근인 안되니, setter/getter를 통해서 접근한다.
    get diameter() {
        return this._radius * 2;
    }

    set diameter(diameter){
        this._radius = diameter / 2;    
    }

}

const myCircle = new Circle(5);
console.log(myCircle.diameter);

myCircle.diameter = 14;
console.log(myCircle.diameter);