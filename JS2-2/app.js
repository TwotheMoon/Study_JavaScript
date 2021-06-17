// 비교 연산자
// == : 변수 타입과 상관 X 값이 같으면 참
// != : 변수 타임과 상관 X 값이 같지 않으면 참
// ===: 변수 타입과 값이 같아야 참
// !==: 변수 타입과 값이 같이 않아야 참

const age = parseInt(prompt("How old are you?"));

if(isNaN(age) || age < 0){
    console.log("Please write a real positive number");
} else if(age < 18){
    console.log("You are too young");
} else if(age >= 18 && age <= 50){
    console.log("You can drink");
} else if(age > 50 && age <= 80){
    console.log("You should exercise");
} else if(age === 100){
    console.log("wow you are wise");
} else if(age > 80){
    console.log("You can do whatever you want.");
}

// and or 중복 사용 예시
if((a && b) || (c && d) || (x || y)){
}
