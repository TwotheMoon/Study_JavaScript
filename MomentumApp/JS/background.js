const images = [
    "0.gif",
    "1.gif",
    "2.gif",
];

const chosenImane = images[Math.floor(Math.random() * images.length )];

const bgImage = document.createElement("img");
//.createElement("   "); : 엘리먼트 생성

bgImage.src = `img/${chosenImane}`;

document.body.appendChild(bgImage);

//.appendChild : 요소를 제일 뒤에 배치
//.prepend : 요소를 제일 위에 배치
