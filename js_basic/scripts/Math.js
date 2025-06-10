console.log(Math);
console.log(Math.PI);

/* const num = 123;
const total = Math.abs(num);
console.log(total);//123 */

/* const num = 123.467;
const total = Math.ceil(num);
console.log(total);//124 */

/* const num = 123.467;
const total = Math.floor(num);
console.log(total);//123 */

const fruitDB = [{
    name:'토마토',
    price:1000,
},{
    name:'바나나',
    price:4500,
},{
    name:'사과',
    price:3000,
},
]
console.log(fruitDB)

const num = 123.467;
//const total = Math.min(fruitDB[0].price,fruitDB[1].price,fruitDB[2].price,);
const total = Math.round(Math.random()*40);
console.log(total);

console.log('배경이미지 랜덤');
console.log(Math.floor(Math.random()*5)+1)
const randomNum = Math.floor(Math.random()*5)+1
const bodyDOM = document.querySelector('body');
console.log(randomNum, bodyDOM);
bodyDOM.style.backgroundImage = `url(./image/bg_0${randomNum}.jpg)`;
//백택기호 `` 안에는 css처럼 url을 넣을 수 있다.
//ex)네이버 메인화면의 광고처럼 그날 들어갔을때마다 바뀌는 이미지를 이 태그로 사용한다.

//생년월일 입력 후 '계산' 버튼 클릭 시 생일부터 지금가지 몇일이 지났는지, 몇시간이 지났는지 보여주는 프로그램(양력기준)
//지금까지 흐른 날짜 계산법 : 1000*60*60*24로 나누기
//지금까지 흐른 시간 계산법 : 1000*60*60로 나누기
const birthDate = document.querySelector('#birthdate');
const birthBtn = document.querySelector('#birth_btn');
const resultData = document.querySelector('.date em');
const resultTime = document.querySelector('.time em');
console.log(birthDate, birthBtn, resultData, resultTime)

birthBtn.addEventListener('click',birthFunc)
function birthFunc(){
    //오늘 날짜와 생년월일을 같은 포맷으로 출력테스트
    //console.log(new Date(birthDate.value))//input이면 무조건 value(값)
    //console.log(new Date());
    const birth = new Date(birthDate.value);//새로운 변수 작성
    const today = new Date();
    console.log(birth,today);
    //오늘날짜에서 생년월일 빼기
    //new Date 복잡한 특수문자 및 문자를 포함히기 때문에 숫자만 반환해서 계산하도록 getTime() 함수 활용
    const birthToday = today.getTime() - birth.getTime();
    console.log(birthToday);
    //흐른날짜, 흐른시간 계산
    const dataFlow = Math.floor(birthToday / (1000*60*60*24));
    const timeFlow = Math.floor(birthToday / (1000*60*60));
    resultData.textContent = dataFlow;
    resultTime.textContent = timeFlow;
}