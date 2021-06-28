// 함수 만들기 function 
//function sayHello(nameOfPerson, age){
//    console.log("Hello my name is " + nameOfPerson + "and I'am " + age);
//}

//sayHello("moon" , 28);

// 함수 이용해 계산기 만들기
function plus(num1, num2){
    console.log("합은 : " + (num1 + num2));
}

plus(1, 2);

function minus(num1, num2){
    console.log("차는 : " + (num1 - num2));
}

minus(10, 5);

function multiply(num1, num2){
    console.log("곱는 : " + (num1 * num2));
}

multiply(10, 5);

function division(num1, num2){
    console.log("나누기는 : " + (num1 / num2));
}

division(10, 5);


// 객체 만들고 함수 추가
// const player = {
//     name: "moon",
//     sayHello: function(otherPersonsName){
//         console.log("Hellow! " + otherPersonsName);
//     },
// };

// console.log(player.name);

// //  객체 player 안에 name 속성을 sayHello 함수에 인수로 전달
//player.sayHello(player.name);

const player = {
    name : "moon",
    sayHellow : function(userName){
        console.log("hellow" + userName);
    },
};

player.sayHellow(player.name);
