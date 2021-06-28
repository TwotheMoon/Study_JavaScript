// 객체 메소드 예제 (계산기 만들기)

// calulator.add(1, 2);
// calulator.minus(1, 2);
// calulator.div(1, 2);
// calulator.pow(1, 2);

const calculator = {
    add: function(a, b){
        return a + b;
    },
    minus: function(a, b){
        return a - b;
    },
    div: function(a, b){
        return a / b;
    },
    pow: function(a,  b){
        return a ** b;
    },
};

const plusResult = calculator.add(2, 3);
console.log(plusResult);

const minusResult = calculator.add(2, 3);
console.log(minusResult);

const divResult = calculator.add(2, 3);
console.log(divResult);

const powResult = calculator.add(2, 3);
console.log(powResult);
