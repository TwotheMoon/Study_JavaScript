// querySelector함수에서 css 선택자를 이용해 특정 엘리먼트 변수 저장
const h1 = document.querySelector("div.hello:first-child h1");

//console.dir(title);
//title.style.color = "blue";


// function handleTitleClik(){
// 변수 지정
// function handleTitleClik(){
//     const currentColor = h1.style.color;
//     let newColor;
//     if(currentColor === "blue"){      // === 좌우 값과 타입이 일치하는지 확인
//         newColor = "tomato";      // = 값 재설정
//     } else {
//         newColor = "blue";
//     }
//     h1.style.color = newColor;
// }

// function handleTitleClik(){         // h1 태그를 클릭 했을때
//     h1.className = "active";        // class네임을  actice 로 재할당
// }                                   // css 에 이미 .active 속성 존재


// css 를 제외한 애니메이션 기능만 구현 하는 깔끔 코드
// 한태그에 2가지 이상 클래스네임이 있을 경우 하나만 조작
//classList = 클래스 배열 생성
//classList.contains(클래스변수이름) : 해당 엘리먼트 클래스의 조작 허용
//         .remove(클래스변수이름) : 클래스변수 리스트에 삭제
//         .add(클래스변수이름) : 클래스변수 리스트에 삽입
// function handleTitleClik(){
//     const clickedClass = "clicked"     // clicked = 클래스 이름
//     if (h1.classList.contains(clickedClass)){   // 만역 clickedClass 가 리스트에 포함돼 있다면
//         h1.classList.remove(clickedClass);  // clickedClass 삭제
//     } else {   
//         h1.classList.add(clickedClass); // clicedClass 추가
//     }
// }

// h1.addEventListener("click", handleTitleClik); 


// classList toggle : remove + add
//                    classlist 안에 조작할 (클래스명)이 있으면 remove
//                                                     없으면 add
function handleTitleClik(){
    //const clickedClass = "clicked"     // clicked = 클래스 이름
    h1.classList.toggle("clicked"); // 단일 사용 변수x
}

h1.addEventListener("click", handleTitleClik); 