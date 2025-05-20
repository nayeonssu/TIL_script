//BOM(browser object model) 내장함수
/* const msg1 = window.alert('잠시 기다려 주세요'); //웹브라우저에서 실행되는 형태 //재사용 할 필요 없음
const msg2 = window.alert('잘못 접근하셨습니다.');//재사용 할 필요 없음
console.log(msg1); */
/* const userAge = window.prompt('나이를 입력하세요');//재사용 가능해서 변수 필요
console.log(userAge); */
/* const userPrint = window.confirm('인쇄하시겠습니까?');//재사용 가능해서 변수 필요
console.log(userPrint); */
//const userInfo = window.open('https://google.com','_blank');
//const userWrite = window.document.write('hello js');
//window.document.write('안녕하세요 자바스크립트');
//실행함수가 변수에 대입하는 값이 없거나 일회성으로 한번 동작하고 끝나는 경우는 변수를 선언할 필요가 없다.
//변수선언이 필요한 BOM 내장 함수 : prompt(), confirm() - 나머지는 필요 없음
//window.print();
//사용자에 따른 인쇄제한이 있는 사이트라면 인쇄내장함수를 변수에 담아야 한다.
//=============================DOM - HTML Node
const pTag = document.getElementsByTagName('p');//p태그는 문자열이기 때문에 ('')를 작성한다.
const h1Tag = document.getElementsByTagName('h1');
const h2Tag = document.getElementsByTagName('h2');
const spanTag = document.getElementsByTagName('span');
const ulCls = document.getElementsByClassName('group');//class가 선언되어서 (.)을 쓰지 않아도 된다.
const liCls = document.getElementsByClassName('list');
const activeCls = document.getElementsByClassName('active');
const wrapId = document.getElementById('wrap');
//===================================
const define = document.getElementsByClassName('define');
const title = document.getElementById('title');
const contents = document.getElementsByClassName('contents');
const dt = document.getElementsByTagName('dt')[1];
//선언할때 먼저 변수에 순서를 적어두면 객체에 순서롤 표시할 필요가 없다.
console.log(pTag);
console.log(h1Tag);
console.log(h2Tag);
console.log(spanTag);
console.log(ulCls);
console.log(liCls);
console.log(activeCls);
console.log(wrapId);
//===========================
console.log(define);
console.log(title);
console.log(contents);
console.log(dt);
//==============================DOM 객체 속성
//객체.style= 'css속성:값';
//객체.style() -> 함수
pTag[0].style = 'background-color:yellow';//속성이냐 함수냐를 구분해야한다.
pTag[1].style = 'background-color:skyblue';
ulCls[0].style = 'border:2px solid green';
liCls[0].style = 'border-bottom:2px solid red';
liCls[1].style = 'border-bottom:2px solid blue';
liCls[2].style = 'border-bottom:2px solid lime';
liCls[3].style = 'border-bottom:2px solid orange';
activeCls[0].style = 'color : red';
activeCls[1].style = 'color : blue';
wrapId.style = 'padding:30px';
func.style = 'color:red';
//=====================================
define[0].style = 'background-color:pink';
title.style = 'background-color:hotpink';
contents[0].style = 'background-color:orange';
contents[1].style = 'background-color:green';
//dt[1].style = 'background-color:purple';
dt.style = 'background-color:purple';
// 위와 같이 style속성을 이용한 CSS는 일반 CSS선택자와 다르게 가장 우선순위가 높은 개념으로 적용된다. 적용 후 모습은 웹브라우저 F12 개발자도구에서만 확인 가능하다.
//CSS 우선순위 : 자바스크립트 style속성 > ID > Class > Tag
console.log('------------------------------------');
//ES6 querySelector 이용 DOM선택하기
const orderOl = document.querySelector('.order');
const orderLi = document.querySelectorAll('.order li');//css처럼 작성가능
const orderToday = document.querySelector('#today');
const orderItem = document.querySelector('.order .item');//이름이 또 들어올 위험이 있어 앞에 부모를 작성해준다.
console.log(orderOl);
console.log(orderLi);
console.log(orderToday);
console.log(orderItem);
orderLi[0].style = 'font-size:2rem';//class는 여러개 쓸수 있어서 인덱스 필요o //사용할때 관리자에서 인덱스 순서 있으면 대괄호[] 사용
orderToday.style = 'font-weight:700';//id는 1개만 쓸수 있어서 인덱스 필요x
orderItem.style = 'font-weight:500'//관리자에서 인덱스 순서 안나오면 대괄호 넣을 필요 없음
console.log('------------------------------------');
//모든 a의 글자색 검정
//nav 배경색
//gnb의 자식li는 테두리 두께 1, lnb의 자식 li테두리 두께2
//gnb, lnb 각각 다른 배경
const nav = document.querySelector('nav');
const gnbA = document.querySelectorAll('nav a');
const gnb = document.querySelector('.gnb');
const gnbLi = document.querySelectorAll('.gnb > li');
const lnb = document.querySelector('.lnb');
const lnbLi = document.querySelectorAll('.lnb > li');
console.log(gnbA, nav, gnbLi, lnbLi, gnb, lnb);
//모든 a의 글자색 검정
gnbA[0].style = 'color:#000';
gnbA[1].style = 'color:#000';
gnbA[2].style = 'color:#000';
gnbA[3].style = 'color:#000';
//nav 배경색
nav.style = 'background-color:skyblue';
//gnb의 자식li는 테두리 두께 1, lnb의 자식 li테두리 두께2
gnbLi[0].style = 'border:1px solid blue';
gnbLi[1].style = 'border:1px solid blue';
lnbLi[0].style = 'border:2px solid orange';
lnbLi[1].style = 'border:2px solid orange';
//gnb, lnb 각각 다른 배경
gnb.style = 'background-color:pink';
//lnb.style = 'background-color:skyblue';
//객체.속성 = '값';
//객체.속성.속성 = '값';
lnb.style.backgroundColor = 'lime';//css와 js는 작성법이 달라 케멜프 기법으로 바꿔서 사용
lnb.style.padding = '30px';
lnb.style.borderTop = '2px solid red';
console.log('--------------------------------');
let a = 10;
let b = "10";
console.log(a, typeof a);//10 number
console.log(b, typeof b);//10 string
//let age = prompt('당신의 나이는?');
//alert(typeof age);
//prompt로 사용자가 입력하는 값은 무조건 문자(String)으로 처리된다.(암시적 형변환)
//자동으로 형변환 된 데이터타입이 문자인 경우 숫자로 바꾸고싶다면 명시적형변환 중 숫자로 변환해주는 Number() 내장함수를 사용한다.
//Number(숫자로 변환하고싶은 데이터 또는 함수)
//const age = prompt('당신의 나이는?');
//const age = Number(prompt('당신의 나이는?'));
//(위) 프로그래밍 동작 순서
//1. prompt('당신의 나이는?') 사용자가 입력한 값을 문자로 - 자동변환
//2. Number() : prompt가 문자로 변환한값을 숫자로 - 명시적변환
//3. age = : 변수age에 숫자로 변환한 값을 대입
//console.log(`올해 당신의 나이는 ${age}입니다.`);
//console.log(`내년 당신의 나이는 ${Number(age)+1}입니다.`);
//console.log('-----------------------쇼핑몰 구입 알고리즘');
//상품 1개 가격 기준 15700원
//현재 이벤트중 1+1
//1. 사용자가 구입할 물건 개수 정하기
//2. 개수에 따라 최종 가격 구하기
//결과예) 구입할 물건은 ?개이고 이벤트상품 ?개가 추가됩니다. 총 결제 금액은 ?원입니다.
let price = 15700;//바뀔수도 있는 변수
const productQa = Number(prompt('구입할 개수를 입력하세요'));
const eventNum = productQa;//이벤트 증정 개수
const total = price*productQa;//최종 결제 가격
console.log(`구입할 물건은 ${productQa}개이고 이벤트 상품 ${eventNum}개가 추가됩니다. 총 결제 금액은 ${total}원입니다.`);