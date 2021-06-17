// querySelector함수에서 css 선택자를 이용해 특정 엘리먼트 변수 저장
const title = document.querySelector("div.hello:first-child h1");

//console.dir(title);
//title.style.color = "blue";

// click event addEventListener() : 특정 이벤트를 확인해주는 함수
function handleTitleClik(){
    title.style.color = "blue";
}

function handleMouseEnter(){
    title.innerText = "Mouse is here!"; //innerText = 태그안 텍스트 내용
}

function handleMouseLeave(){
    title.innerText = "Mouse is gone!";
}
                    // ("이벤트 속성" , 함수 이름)
title.addEventListener("click" , handleTitleClik);

// moussenter = hover 과 유사한 속성
title.addEventListener("mouseenter", handleMouseEnter);

// mouseleave = 마우스커서가 떠났을때 실행
title.addEventListener("mouseleave", handleMouseLeave);
