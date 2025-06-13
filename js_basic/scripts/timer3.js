//HTML li상품 1개 준비 후 JS를 이용한 다수의 상품 복제 준비
//1. 복제 전 복제대상 선택
const productLi = document.querySelector('.product_list li');//정확한 구분을 위해서 중복성이 높지 않은 부모를 적음
//2. (위) 오류없는거 확인 후 복제변수 생성(true == 자식,자손까지 복제)
console.log(productLi);
//const proxuctLiClone = productLi.cloneNode(true);
//3. (위) 복제 후 붙여넣기할 위치 변수 선택
const productUl = document.querySelector('.product_list')
//4. (위) 오류 없으면 마지막 붙여넣기 진행
//productUl.appendChild(proxuctLiClone);
//console.log(productLi, proxuctLiClone, productUl);

//반복문 활용 7개 붙여넣기
for(let i=0; i<7; i++){
    console.log(i);
    const proxuctLiClone = productLi.cloneNode(true);
    productUl.appendChild(proxuctLiClone);
}

//슬라이드 애니메이션(타이머 함수 활용)
const slideContainer = document.querySelectorAll('.slide_container');//반복되어야 하는 변수
let num = 0;
console.log(slideContainer);
/* 1920 / 4 = 480px */
//0 = 480*0
//480 = 480*1
//960 = 480*2 .... 5
const productTimer = setInterval(() => {
    //처음만 0번이 이미 보이는걸로 시작해서 123450123450123...
    num++;
    if(num>5){num=0}
    //console.log(num, num*480);
    for(let i of slideContainer){
        i.style.transform = `translateX(-${num*480}px)`;
    }
}, 2000);//for문은 timer 안에 사용한다.

//동기와 비동기 출력 연습
//console.log('A');
//console.log('B');
//console.log('C');
//(위) 동기 작업은 순차적으로 콜스택에 쌓이며 실행된다.

console.log('A');//동기
setTimeout(()=>{
    console.log('B');
    //비동기 작업
},2000)
console.log('C');//동기
//(위) 동기(A,C)와 비동기(B)는 순차적으로 실행되지 않는다.
//동기작업(A,C)는 콜스택에 바로 쌓이며 즉시 실행되고
//비동기작업(B)는 콜백 큐에 저장되고 준비가 되면 순차적 순서 상관없이 독립적으로 실행된다.

//clearInterval(setInterval변수명)
//카운트다운 버튼 클릭 시 10초 카운트다운 시작
//1초 간격으로 10->9->8... 숫자가 감소되고 0초가 되면 타이머가 멈추고 '이벤트 종료' 메세지 출력
const saleTimer = document.querySelector('.sale_timer em');
const saleBtn = document.querySelector('.sale_btn');
console.log(saleTimer, saleBtn);
function startCountDownFunce(){
    let num = 10;
    const startCountDown = setInterval(()=>{
        if(num < 0){
            clearInterval(startCountDown);//타이머 종료 /setInterval의 반복을 멈출때 사용
            //console.log('종료!')
            alert('종료!');
        }else{
            //console.log(num);
            saleTimer.textContent = num;// 웹화면에 출력
            num--;
        }
    },1000)
}
saleBtn.addEventListener('click',startCountDownFunce)