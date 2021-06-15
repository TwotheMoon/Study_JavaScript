// const amIFat = null;
// let something;
// console.log(something ,amIFat);
// true = 1 false = 0
// null= 비어있음 이라는 값이 저장
//unefined = 변수가 메모리에 할당 돼 있지만
//           값이 정해져 있지 않음


// 배열을 사용하지 않으면
// const mon = "mon";
// const tue = "tue";
// const wed = "wed";
// const thu = "thu";
// const fri = "fri";
// const sat = "sat";
// const sun = "sun";

// 배열 그룹화 array
const daysOfWeek = ["mon", "tue", "wed", "thu", "fri", "sat"];
// 배열은 0부터 시작 = fri 얻기 위해서는 [4]
console.log(daysOfWeek[4]);

// 배열 값 추가 = push
daysOfWeek.push("sun");

console.log(daysOfWeek)


// 객체 object를 사용하지 않으면
//const playerName = "moon";
//const playerPoints = "1212";
//const playerHandsome = true;
//const playerFat = "little bit";

//player.name
//player.points
//player.handsome

// 객체 만들기
const player = {
    name: "moon",
    point: 10,
    fat: true,
};

console.log(player.name);
console.log(player["name"]);
//console.log(player.name); == console.log(player["name"]);

// const 라도 객체 내부 속성의 값은 재할당 가능.
player.fat = false;
console.log(player.fat);

// 중간에 속성 업데이트 lastName
player.lastName = "potato";
console.log(player.lastName);

// 중간에 기존 속성 업데이트 point + 연산자 사용
console.log(player.point);
player.point = player.point + 15;
console.log(player.point);



