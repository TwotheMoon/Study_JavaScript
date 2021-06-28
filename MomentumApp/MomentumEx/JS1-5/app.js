// 한국 나이 구하는 함수
// 리턴값 이용 하기
const age = 26;
function calculateKrAge(ageOfForeigner){
   return ageOfForeigner + 2;
};

const krAge = calculateKrAge(age);

console.log(krAge);


// 코드 연결하기 (의존성)
const calculator = {
    plus: function(a, b){
        return a + b;
    },
    minus: function(a, b){
        return a - b;
    },
    times: function(a, b){
        return a * b;
    },
    divide: function(a, b){
        return a / b;
    },
    power: function(a,  b){
        return a ** b;
    },
};

// 출력은 하지 않았지만 함수는 작동 하였고 변수에 값이 계산돼 저장 돼 있음
const plusResult = calculator.plus(2, 3);
const minusResult = calculator.minus(plusResult, 10);
const timesResult = calculator.times(10, minusResult);
const divideResult = calculator.divide(timesResult, plusResult);
const powerResult = calculator.power(divideResult, minusResult);
