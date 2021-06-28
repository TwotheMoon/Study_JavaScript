const loginform = document.querySelector('#login-form');
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");


const HIDDEN_CLASSNAME = "hidden";  // CSS hidden 속성 변수
const USERNAME_KEY = "username";    // username KEY 값 변수

function onLoginSubmit(event){  // (event) : addEventListerner 함수는 기본적으로 브라우저가 이벤트 활성시 정보를 제공 매개변수 보통 event 로 받아서 확인, 조작하기위함)
    event.preventDefault();
    loginform.classList.add(HIDDEN_CLASSNAME);  
        // preventDefault : 브라우저의 기본 동작을 막아줌
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);     // localStrorage = 쿠키 같은 느낌 브라우저 db에 추가하기
    //greeting.innerText = "Hello " + username; // 스트링두개 합치는 방법1
    paintGreetiongs(username);
}

function paintGreetiongs(username){
    greeting.innerText = `Good day mate ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

// saveUsername : 브라우저 DB에 저장돼 있는 username 을 빼옴
const savedUsername = localStorage.getItem(USERNAME_KEY);  

if(savedUsername === null){ // 브라우저 DB에 username 값이 null이면 
    loginform.classList.remove(HIDDEN_CLASSNAME);
    //form 태그를 숨기고 있는 hidden 클래스를 클래스 리스트에서 삭제
    loginform.addEventListener("submit", onLoginSubmit);
    // onLoginSubmit 함수 발동 -> line 9
} else { // 브라우저 db에 저장된 username 이 있다면 paintGreetiongs 함수 발동.
   paintGreetiongs(savedUsername);  // line 19  
    // 매개변수로 유저가 적은 이름 값을 받은 username 인수를 받아  greeting(h1) 태그에
    // Hello 문자와 같이 출력하고 hidden 클래스 제거
}
