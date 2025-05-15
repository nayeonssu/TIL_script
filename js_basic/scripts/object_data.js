/* 25/05/15 배열공부 */
//const yoil = ['월','화','수']
const yoil = new Array('월','화','수','목','금','토','일');//방식의 차이
//console.log(yoil[0]);
//console.log(yoil[1]);
//console.log(yoil[2]);
//================색상배열
const colorArray = ['빨강','주황','노랑','파랑','보라','검정','초록']
//콘솔 결과 예시1. : 빨강 노랑 보라 초록
console.log(colorArray[0],colorArray[2],colorArray[4],colorArray[6]);//(,)구분연산자 | (+)연결연산자
//콘솔 결과 예시2. : 제가 좋아하는 색상은  주황, 파랑, 보라색입니다.
console.log(`제가 좋아하는 색상은 ${colorArray[1]}, ${colorArray[3]}, ${colorArray[4]}색입니다.`);//탬플릿 문자열
//과일 역순으로 출력하기
const fruitArray = ['바나나','딸기','망고','사과','귤']
console.log(fruitArray[4],fruitArray[3],fruitArray[2],fruitArray[1],fruitArray[0]);
//(위)요일배열과 새로운 날씨카드 배열 활용 문자출력하기
const weatherCard = ['비','눈','맑음','흐림']
// 목요일 날씨 : 비
console.log(`${yoil[3]}요일 날씨 : ${weatherCard[0]}`)
// 금요일 날씨 : 맑음
console.log(`${yoil[4]}요일 날씨 : ${weatherCard[2]}`)
//================객체와 배열
const movieInfo = {
    name:'미션임파서블',
    director:'크리스토퍼 맥쿼리',
    genre:'액션',
    rating:169,
    actor:['톰 크루즈','헤일리 앳웰','빙 라메스'],//속성 값이 2개 이상일때 대괄호[] 사용
    releaseData:'2025.05.17',
    age:15,
    story:'전 세계 국가와 조직의 기능이 마비되고...',
}
const movieInfo_v2 = {
    name:'파이널 데스티네이션 블러드라인',
    director:['아담 B.스테인','잭 리포브스키'],
    genre:'호러',
    ratting:110,
    actor:['케이틀린 산타 후아나','테오 브리오네스','리처드 하몬','오웬 패트릭 조이너','안나 로어','브렉 배싱어','토니 토드'],
    releaseData:'2025.05.14',
    age:19,
    story:`끝없는 악몽에 시달리던 ‘스테파니’는 그 원인을 찾던 중 집안 대대로 내려오는 죽음의 저주와 그 실체를 알게 된다 놀랍게도, 죽음의 순서가 자신의 가족에게 이어졌음을 알게 되는데...이제, 다음 차례는 누구?`,
}
//동일한 분류의 객체가 많을 경우 묶는 방법
const movieAll = [
    {
        name:'미션임파서블',
        director:'크리스토퍼 맥쿼리',
        genre:'액션',
        rating:169,
        actor:['톰 크루즈','헤일리 앳웰','빙 라메스'],//속성 값이 2개 이상일때 대괄호[] 사용
        releaseData:'2025.05.17',
        age:15,
        story:'전 세계 국가와 조직의 기능이 마비되고...',
    },{
        name:'파이널 데스티네이션 블러드라인',
        director:['아담 B.스테인','잭 리포브스키'],
        ratting:110,
        genre:'호러',
        actor:['케이틀린 산타 후아나','테오 브리오네스','리처드 하몬','오웬 패트릭 조이너','안나 로어','브렉 배싱어','토니 토드'],
        releaseData:'2025.05.14',
        age:19,
        story:`끝없는 악몽에 시달리던 ‘스테파니’는 그 원인을 찾던 중 집안 대대로 내려오는 죽음의 저주와 그 실체를 알게 된다 놀랍게도, 죽음의 순서가 자신의 가족에게 이어졌음을 알게 되는데...이제, 다음 차례는 누구?`
    },
]
console.log(movieAll[0].name,movieAll[0].director);
//감독 : 크리스토퍼 맥쿼리
console.log(`감독 : ${movieAll[0].director}`);
//장르 : 액션 / 169분
console.log(`장르 : ${movieAll[0].genre} / ${movieAll[0].rating}분`);
//등급 : 15세 이상 관람가
console.log(`등급 : ${movieAll[0].age}세 이상 관람가`);
//=====================산술 연산자
const greeting = 'hello';
const lang = ['figma','html','css'];//모아두는 배열 만들기
//hello figma | 데이터를 가진 변수를 만들고 사용할때는 항상 값이 아닌 변수(이름)로 사용
console.log(greeting+lang[0]);
console.log(greeting+lang[1]);
console.log(greeting+lang[2]);
const num1 = 1;
const num7 = 7;
const global = 'world';
console.log(num1+num7);
console.log((num1+num7)+global);
//======================빼기, 곱하기, 나누기 등 연산은 숫자가 문자로 따옴표가 묶여 있을 시 자동으로 숫자로 형변환시킨다.
const data1 = 1;
const data7 = "7";
console.log(data1+data7);//17 연결로 인식
console.log(data1-data7);//-6 자동으로 숫자로 형변환
console.log(data1*data7);//7
console.log(data1/data7);//0.14285714285714285
console.log(data1%data7);//1
console.log(data1**data7);//1
console.log(typeof data7);//string 문자로 취급
console.log(typeof (data1+data7));//string 문자로 취급
console.log(typeof (data1-data7));//number 숫자로 취급 | 우선순위로 괄호()를 붙여준다.