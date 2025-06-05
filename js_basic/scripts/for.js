//for(초기변수; 조건문; 증감식){조건문이 참일때 반복실행결과}
//"자바스크립트" 문자열 10번 반복
for(let i=1; i<11; i++){
    console.log('자바스크립트');
}//보통 변수는 var나 let을 넣는다, (i)라는 변수 이름을 주로 넣는다.
//"1월 ~ 12월" 12번 반복
//개발자가 화면에 출력하고 싶은 첫번째 번호가 for문의 초기변수에 들어가는 값이 된다.
//i를 1로 시작하고 i가 12보다 작거나 같을때까지 증감하라 결과
for(let i=1; i<=12; i++){
    console.log(i+'월')
}//i<=12(참)이 되도록
//6월 ~ 12월 반복 출력
console.log('------------------------')
for(let i=6; i<13; i++){
    console.log(i+'월')
}
console.log('------------------------')
const coffee = ['아메리카노','카레라떼','에스프레소','녹차라떼','딸기라떼','자스민차','초코라떼']
console.log(coffee);
for(let i=0; i<coffee.length; i++){
    console.log(coffee[i])
    //현재배열의갯수를 i<''안에서 작성한다. | .length는 1에서 시작한다.
}
//1번 메뉴 아메리카노
//2번 메뉴 카페라떼...반복
for(let i=0; i<coffee.length; i++){
    console.log((i+1)+'번 메뉴 '+ coffee[i])
}
//역순
for(let i=coffee.length-1; i>=0; i--){
    console.log(coffee[i])
}
console.log('------------------------')
//구구단 2단 ~ 9단 출력
//2단 2x1=2 형태로 출력
//반복문 -> 어떤 숫자를 정하고 어디까지 증가,감소 할건지
for(let i=1; i<10; i++){
    console.log(`2x${i}=${2*i}`)
}
//for 반복 + if 조건
//1~20까지 출력 반복문
for(let i=1; i<=20; i++){
    //조건문 if를 활용 1~20까지 반복숫자 중 홀수만 출력
    //숫자%2 == 1
    if(i%2==1){
        console.log(i)
    }
}
console.log('------------------------')
//10~20까지 역순으로 짝수만 출력 반복문
for(let i=20; i>=0; i--){
    //console.log(i)
    if(i%2==0){
        console.log(i)
    }
}
console.log('------------------------')
const navA = document.querySelectorAll('nav a')
console.log(navA);
for(let i=0; i<navA.length; i++){
    //console.log(navA[i])
    //모든 a 글자색 빨강
    //navA[i].style.color = '#f00'//모든 a를 잡고있어 error가 뜬다.
    //홀수 a 빨강, 짝수 a 파랑
    if(i%2==1){
        navA[i].classList.add('odd');
        //navA[i].style.color = '#f00'
        //navA[i].style.backgroundColor = '#ff0'
    }else {
        navA[i].classList.add('even');
        //한개만 있을때는 style, 많이 있을때는 classList로 가져온다.
        //navA[i].style.color = '#00f'
        //navA[i].style.backgroundColor = '#eee'
    }
}
//li 변수를 만들고 배경색 노랑 변경
const listA = document.querySelectorAll('.list li')
console.log(listA);
for(let i=0; i<listA.length; i++){
    //console.log(listA[i])
    //배경색 노랑
    listA[i].style.backgroundColor = '#ff0'
    //변수를 잡을때 All이라고 했으면 for문을 활용해야한다. li를 모두 잡고있는 i를 넣는다.
    //숫자를 먼처 확인하고 그 뒤에 꾸며준다.
}