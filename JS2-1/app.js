// 프롬프트 출력

//const age = prompt("How old are you? ");
        // prompt("String" , data) : 유저에게 입력창 띄우기 (CSS 적용 불가, 팝업 제한시 사용 불가)

// 타입 형변환
// console.log(typeof age); 15 숫자를 입력해도 string 으로 입력
// "15" --> 15

//parseInt("값") : string -> intger 강제 형변환 

// typeof : 값의 타입을 확인하는 메소드
//console.log(typeof "15", typeof parseInt("15"));

// 첫번쩨 age = String 두번째 age = intger  NaN = Not of Number
//console.log(age, parseInt(age));

// 함수에 형변환 바로 적용
const age = parseInt( prompt("How old are you?"));
// prompt 에서 띄운 질문에 나이 "15"를 입력받고 parseInt 함수에 의해
// int 15로 형변환 후 변수 age에 저장

//isNaN : 입력 받은 값이 String 인지 확인 하는 함수 return true or false
console.log(isNaN(age));

// 조건문 if()  음주 가능 나이 판별하기 (문자 입력 불가 유효성 확인 추가)
// if(isNaN(age)){
//     console.log("Please write a number");   // 문자 입력 유효성 검사
// } else if(age < 18){                        // 숫자 입력이 됐다면 미성년자 검사
//     console.log("You are too young.");
// } else {
//     console.log("You cas drink");           
// }

// 조건문 &&(and) ||(or) 연산자 추가
if(isNaN(age) || age < 0){
    console.log("Please write a real positive number");
} else if(age < 18){
    console.log("You are too young");
} else if(age >= 18 && age <= 50){
    console.log("You can drink");
} else if(age > 50 && age <= 80){
    console.log("You should exercise");
} else if(age > 80){
    console.log("You can do whatever you want.");
}