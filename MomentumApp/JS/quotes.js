const quotes = [
    {
        quote: "풍랑은 항상 능력 있는 항해자 편이다.",
        author: "기번",
    },
    {
        quote: "모든 개성에는 제각기 아름다움이 있다.",
        author: "랠프 월도 에머슨",
    },
    {
        quote: "인생을 해롭게 하는 비애를 버리고 명란한 기질을 간직하라.",
        author: "셰익스피어",
    },
    {
        quote: "진정 오늘밖엔 없는 것처럼 시간을 아껴 쓰고",
        author: "이해인",
    },
    {
        quote: "다른 사람을 지배하려는 사람은, 먼저 자기 자신의 주인이 되어야 한다.",
        author: "메신저",
    },
    {
        quote: "내 마음을 남이 어떻게 할 수 없듯이 나도 남의 마음을 어떻게 할 수 없다.",
        author: "전현수",
    },
    {
        quote: "지구상에는 인간이외는 위대한 것이 없다. 인간에게는 지성 이외엔 훌륭한 것이 없다.",
        author: "헤밀턴",
    },
    {
        quote: "미소, 악수, 혹은 호의로운 눈총 등 무엇인가를 남에게 동냥할 필요가 없는 인간은 없다.",
        author: "댈버그",
    },
    {
        quote: "사느냐 죽느냐 그것이 문제로다.",
        author: "햄릿",
    },
    {
        quote: "별과 달 중에.. 병과 달중에 누가 더 외로울까.",
        author: "별과 달",
    },
    {
        quote: "세상 모든 당연한것들이 당연하지 않게 된다면.",
        author: "2theMoon",
    },
    {
        quote: "결국 개발도 엉덩이가 무거운 사람이 잘한다.",
        author: "2theMoon",
    },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

//Math. : 수학관련 클래스
// random(); : 난수 발생 (실수)
// random() * 10 ; : 난수 발생 (정수.실수)
// rando(1.n) : 반내림 1.1~.1.4 반올림 1.5~1.8
// ceil(1.1) : 1 무조건 올림
// floor(1.9999) : 0 무조건 내림

            // quotes[] 배열안에 수정한 난수 함수 적용
//console.log(quotes[Math.floor(Math.random() * 10 )]);

// 배열의 길이를 파악해 하드코딩된 * 10 수정
// Array.length : 배열의 길이를 파악
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length )];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;