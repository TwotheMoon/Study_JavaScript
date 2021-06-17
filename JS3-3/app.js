// querySelector함수에서 css 선택자를 이용해 특정 엘리먼트 변수 저장
const h1 = document.querySelector("div.hello:first-child h1");

//console.dir(title);
//title.style.color = "blue";

// click event addEventListener() : 특정 이벤트를 확인해주는 함수
function handleTitleClik(){
    h1.style.color = "blue";
}

function handleMouseEnter(){
    h1.innerText = "Mouse is here!"; //innerText = 태그안 텍스트 내용
}

function handleMouseLeave(){
    h1.innerText = "Mouse is gone!";
}

function handleWindowResize(){
    document.body.style.backgroundColor = "tomato";
}

function handleWindowCopy(){
    alert("copier!");
}

function handleWindowOffline(){
    alert("SOS no WIFI");
}

function handleWindowOnline(){
    alert("ALL GOOOOD");
}


h1.addEventListener("mouseenter", handleTitleClik);
//title.onclick = handleTitleClik;  // 방법2

h1.addEventListener("mouseenter", handleMouseEnter);
//title.onmouseenter = handleMouseEnter;

h1.addEventListener("mouseleave", handleMouseLeave);
//title.onmouseleave = handleMouseLeave;

// window : 브라우저 창에 대한 선택
// resize : 브라우저 크기가 변하면 펑션 활성 
window.addEventListener("resize", handleWindowResize);
// copy : 복사 했을때 펑선 활성
window.addEventListener("copy", handleWindowCopy);
// offline : wifi 연결 해제 감지
window.addEventListener("offline" , handleWindowOffline);
// online : wifi 연결 감지
window.addEventListener("online" , handleWindowOnline);