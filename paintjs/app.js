const canvas = document.getElementById("jsCanvas");
const ctx = canvas.getContext("2d");
const colors = document.getElementsByClassName("jsColor");
const range = document.getElementById("jsRange");
const mode = document.getElementById("jsMode");
const sasveBtn = document.getElementById("jsSave");

const INITIAL_COLOR = "#2c2c2c";
const CANVAS_SIZE = 700;


// CSS 를 통한 캔버스 사이즈가 아닌 
// 스크립트를 위한 캔버스 사이즈 선언
canvas.width = CANVAS_SIZE; 
canvas.height = CANVAS_SIZE;

ctx.fillStyle = "white";
ctx.fillRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);
ctx.strokeStyle = INITIAL_COLOR;    // stroke() 실행시 색 
ctx.lineWidth = INITIAL_COLOR;            // stroke() 실행시 선의 굵기
ctx.fillStyle = "";        // 채울 색 선언
//ctx.fillRect(50, 20, 100, 49);  // fillRect(x, y, width, height) 채우기

let painting = false;           // painting 이란 변수 선언
let filling  = false;

function stopPainting(){
    painting = false;
}

function startPainting(){
    painting = true;
}

function onMouseMove(event){
    const x = event.offsetX;
    const y = event.offsetY;
    if(!painting){
        ctx.beginPath();    // 마우스의 패스를 확인 
        ctx.moveTo(x, y);   // 마우스의 좌표
    } else {
        ctx.lineTo(x, y);   // 마우스 클릭시 패스 확인
        ctx.stroke();       // 그리기
    }
}


function handleColorClick(event){
   const color = event.target.style.backgroundColor;    // 컬러 속성 꺼내서 변수 저장
    ctx.strokeStyle = color; // 클릭한 색으로 재설정
    ctx.fillStyle = color;  // 채우기도 클릭한 색으로 재설정
}

function handleRangeChange(event){
  const size = event.target.value;
  ctx.lineWidth = size;
}

function handleModeClick(){
    if(filling === true){
        filling = false;
        mode.innerText = "Fill"
    } else {
        filling = true;
        mode.innerText = "Paint";
    }
}

function handleCanvasClick(){
    if(filling){
    ctx.fillRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);
    }
}

function handleCM(event){   // 마우스 우클릭 방지
    event.preventDefault();
}

function handleSaveClick(){
    const image = canvas.toDataURL();
    const link = document.createElement("a");
    link.href = image;
    link.download = "PaintJS[EXPORT]";
    link.click();
}

if(canvas){
    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mousedown", startPainting);
    canvas.addEventListener("mouseup" , stopPainting);
    canvas.addEventListener("mouseleave", stopPainting);
    canvas.addEventListener("click" , handleCanvasClick);
    canvas.addEventListener("contextmenu", handleCM);   // 마우스 우클릭 방지
}

// 컬러 엘리먼트 배열 만들고 각각 handleColorClick 메소드 적용
Array.from(colors).forEach(colorArray => 
    colorArray.addEventListener("click", handleColorClick)
    );

// 선 길이 메소드 적용
    if(range){
        range.addEventListener("input", handleRangeChange);
    }

    if(mode){
        mode.addEventListener("click" , handleModeClick)   
    }
    if(sasveBtn){
        sasveBtn.addEventListener("click" , handleSaveClick)
    }