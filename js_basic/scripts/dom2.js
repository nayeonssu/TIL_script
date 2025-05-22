// DOM 이벤트와 함수
//함수의 매개변수, 익명함수, 화살표함수
//function 함수명(매개변수, 매개변수){실행}
//const 변수명 = function(매개변수){실행}
//const 변수명 = (매개변수) => {실행}
//변수 선언
const bg = document.querySelector('#bg');
const bg1Btn = document.querySelector('#bg1_btn');
const bg2Btn = document.querySelector('#bg2_btn');
console.log(bg);
console.log(bg1Btn);
console.log(bg2Btn);
bg.style.height = '100vh';
bg.style.backgroundColor = 'yellow';
bg1Btn.style.backgroundColor = 'skyblue'
//버튼으로 배경색변경제거 알고리즘
//버튼에 마우스 올렸을 때 배경색병경제어(aqua) 알고리즘
//이벤트와함수 생성 후 생성한 함수를 이벤트 내 콜백함수로 불러오기
//이벤트
bg1Btn.addEventListener('mouseover',bgChangeOver);
bg1Btn.addEventListener('mouseout',bgChangeOut);
//bg2Btn.addEventListener('mouseover',bgChange('corla'));
//(위 에러 해결법) 객체 이벤트에서 매개변수가 있는 함수를 호출하려면 익명함수 또는 화살표함수로 변경해야 호출이 가능하다.
//익명함수 : const 변수 = function(매개){실행} -> function 뒤에 이름이 없어서
bg2Btn.addEventListener('mouseover',function(){
    bgChange('coral');//실행하고 싶은 함수 내용부분
    //익명함수 내 매개변수가 있는 함수 호출
});
bg2Btn.addEventListener('mouseout',()=>bgChange('brown'))
//(위) 화살표 함수 내 매개변수가 있는 함수 호출(한줄이면 중괄호 생략)
//함수
function bgChangeOver(){
    return bg.style.backgroundColor = 'aqua'
}
function bgChangeOut(){
    return bg.style.backgroundColor = 'yellow';
}
//매개변수 ver함수
//매개변수 - 1개
function bgChange(color){
    return bg.style.backgroundColor = color;
    //매개변수를 이용해서 내가 전달하고싶은 갚을 (밑) return에 넣어라.
    //변수에는 ('')를 작성하면 안된다.
}