const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

const toDos = [];

// toDoList db 저장
function saveToDos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}   // JSON.stringify(변수) : 스트링 강제 형변환
    // JSON.parse : 스트링 형변환 후 배열로 가져오기


// 삭제 button 생성
function deleteToDo(event) {
    const li = event.target.parentElement;
    li.remove();
}


// html에 실제 리스트 적용하기
function painToDo(newTodo) {    //newToDo 리스트 저장한 텍스트 값
    const li = document.createElement("li");    //html에 추가할 리스트 엘리먼트 생성
    li.id = newTodoObj.id;
    const span = document.createElement("span");    // 리스트 아래 위치할 스팬 엘리먼트 생성
    span.innerText = newTodo.Text; // span에 매개변수 값 넣기
    const button = document.createElement("button");    // 텍스트 삭제 버튼 엘리먼트 생성
    button.innerText = "❌";
    button.addEventListener("click" , deleteToDo);
    li.appendChild(span); // li 안에 span 위치
    li.appendChild(button); // li 안에 버튼 위치
    toDoList.appendChild(li); // id="todo-list" ul태그 안에 스팬이 담긴 list 배치
}

// 폼 초기화 + 텍스트 값 변수 저장 및 초기화
function handleToDoSubmit (event) {
    event.preventDefault();
    const newTodo = toDoInput.value;    // 적은 투두리스트 저장 변수
    toDoInput.value = "";   // 투두리스트 공백을 이용해 초기화
    const newTodoObj = {    // 투두리스트 객체 생성 고유 ai 부여
        Text:newTodo,   
        id: Date.now(), //li item 구별 id
    };
    toDos.push(newTodo);    //  리스트를 toDos[배열] 에 푸쉬
    painToDo(newTodoObj);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);



// 로컬 스토리지에 저장된 리스트 가져오기
const savedToDos = localStorage.getItem(TODOS_KEY);
// JSON.parse 형변환과 동시에 배열 만들기
if(saveToDos !== null){;
    const parsedToDos = JSON.parse(savedToDos); // 객체로 만들기
    parsedToDos.forEach(painToDo);
}    
    //parsedToDos.forEach((item) => console.log("this is turn of" , item));
                //.forEach(함수) 각각의 아이템들 에게 함 수 1번씩 실행
           // 람다식 표현 아래 함수 기능과 똑같음
    // function sayHello(item){    // 배열 속 리스트 정보 가져오기
    //console.log("this is turn of" , item);
            


