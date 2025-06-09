//for(변수초기값; 조건식; 증감식){조건이 참일때 반복문구} 반복종료(조건거짓)
for(let i=0; i<5; i++){console.log(i+1)}//출력되는 자리에서 식을 바꿀 수 있다.
const li = document.querySelectorAll('ul li');
console.log(li) //3 li
for(let i=1; i<=2; i++){
    li[i].classList.add('list_active');//더 많은 속성을 진행할려면 classList가 편리하다.
    //(위)와 같은 태그가 반복적일 때 사용하면 좋다.
    //li[i].backgroundColor = 'yellow'
    //li[i].style.textAlign = 'center'
}
//태그 2개 이상 다수를 변수로 대입할 때 querySelectorAll 선언 후 사용시 [index] 활용하기 (주로 for 반복문과 함께 활용)
//--------------JS DOM 복제붙여넣기(데스크탑 내비와 모바일 내비에 주로 활용)
//붙여넣기 위치 DOM, 복제 DOM 변수 만들기!
const section = document.querySelector('section')
const ul = document.querySelector('ul');//ul DOM 선택
const ulClone = ul.cloneNode(true);//cloneNode에 어떻게 쓰느냐에 따라 잡히는게 달라진다. ex) ul만 작성할 경우 ul만 잡히고 안의 자식은 잡히지 않고 true를 작성하면 자식까지 함께 잡힌다.//ul 자식,자손포함 복제(ctrl + c)
console.log(section,ul,ulClone);

//복제한 요소 붙여넣기(대상요소의 마지막자식 위치로 붙여넣기)
section.appendChild(ulClone);//section의 마지막자식 위치에 복제대상 붙여넣기(ctrl + v) -> appendChild
//--------------------------------
//while 반복문 - 조건이 참일 경우 무한 반복
//while(조건){ 괄호 안 조건이 참일 경우 실행문 } 조건거짓실행

/* let htmlQ = confirm('a태그는 alt속성이 있다. 맞으면 확인, 틀리면 취소를 누르세요')
console.log(htmlQ); *///확인(true) 취소(false)
//위 문제를 푸는 학생이 문제를 틀리면 무한반복질문
//문제를 맞추면 -> alert('정답입니다!')
/* while(htmlQ != false){//반대일때 느낌표(!)작성 ex)
    htmlQ = confirm('a태그는 alt속성이 있다. 맞으면 확인, 틀리면 취소를 누르세요')
}
alert('정답입니다') */

/* let cssQ = confirm('css grid의 졍렬방향 중 양 끝에 공간을 두고 균등 정렬을 하는방법을 space-evenly라고 한다 맞다면 확인, 틀렸다면 취소');
console.log(cssQ);
while(cssQ != false){
    cssQ = confirm('css grid의 졍렬방향 중 양 끝에 공간을 두고 균등 정렬을 하는방법을 space-evenly라고 한다 맞다면 확인, 틀렸다면 취소')
}
alert('정답입니다.') */
//let jsQ = confirm('');
let num = 1;
while(num <= 10){
    if(num === 5)break;
    console.log(num);
    num++;
}//작성 위치에도 큰 차이가 있으니 조심해야한다. console은 출력하기 때문에 if문보다 위에 올라가 있으면 안된다.

console.log('-------------------------');
for(var i=1; i<=10; i++){//var -> 전역변수로 인식하기위해 바꾼거
    continue;
    console.log(i);
}
console.log(i);// 11로 나옴
//1,2,3,... 계속 증감하다가 끝내 i가 10보다 더 높은 11이 될 때 종료가 된다. 
console.log('-------------------다중반복문');
//for문 안 for문이 추가로 있는 구조(2단, 3단 반복 가능)
//첫번째 for문이 한번 실행될때 두번째(안쪽)for문은 조건이 거짓이 될때까지 모두 반복실행된다.
for(let i=1; i<3; i++){//첫번째 for문
    for(let j=0; j<2; j++){//두번째 for문
        console.log('첫번째 i값', i,'두번째 j값', j);
    }
}
console.log('-------------------다중반복문 활용 구구단');
for(let i=2; i<=9; i++){
    for(let j=1; j<=9; j++){
        console.log(`${i}x${j} = ${i*j}`)
    }
    //2단 for 조건이 거짓일때(9보다 클때) 종료 위치
    console.log('----------------')//2단 for 종료 구분선 표시
}
const dan99 = document.querySelector('.dan99');
console.log(dan99);
for(let i=2; i<=9; i++){
    for(let j=1; j<=9; j++){
        dan99.innerHTML += (`${i}x${j} = ${i*j}<br>`)//9x9 81 대입연산자가 기존의 값을 지우고 새로 대입하기 때문이다.
    }
    dan99.innerHTML += `<hr>`//9로 끝나는 구간마다 줄이 쳐진다.
}
console.log('ES6 for~in');
const study = ['html','css','js']
const abc = 'abcdefghijklmn'
const user = {name:'여름',age:'20',area:'서울'}//객체
console.log(study);

for(let i of study){
    //console.log(study[i]);//html, css, js 결과 나옴
    console.log(i);
}
for(let i of abc){
    console.log(i);//1 ~ 13번까지 숫자로 결과가 나옴
}//in -> index에 접근한다.
for(let i in user){
    console.log(user[i]);//객체 이름으로 읽힌다.
    console.log(i);//객체의 속성으로 읽힌다.
}
for(let i of li){//querySelectorAll로 생성한 다수 li변수 접근
    console.log(i)
}