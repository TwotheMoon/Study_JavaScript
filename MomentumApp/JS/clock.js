const clock = document.querySelector("h2#clock");


// 시계 로직 짜기
// function getClock(){
//     const date = new Date();
//     clock.innerText = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
// }
// getClock()
// setInterval(getClock , 1000);


 // 00:00:00 형식으로 수정
 function getClock(){
     const date = new Date();
     const hours = String(date.getHours()).padStart(2, "0");
     const minutes = String(date.getMinutes()).padStart(2, "0");
     const seconds = String(date.getSeconds()).padStart(2, "0");
     clock.innerText = `${hours}:${minutes}:${seconds}`;
 }

 getClock(); // 사이트 실행시 최초 1번 실행
  setInterval(getClock, 1000);   // 1초마다 시계 실행

// //setInterval(sayHello, 5000);    // ms = 5초
// // setInterval(실행할 펑션 , 반복되는 간격 ms);
// // 정의된 간격으로 함수 반복

// //setTimeout(sayHello , 5000);
// //setTimeout(실행할 펑션 , 얼마나 기다릴지);


// padStart(2 , "0"); String 에 사용하는 함수
// 글자수가 2개가 아니라면 앞쪽에 "0을" 추가하라 

// padEnd(2, "0"); String 에 사용하는 함수
// 글자수가 2개가 아니라면 뒤쪽에 "0"을 추가하라
