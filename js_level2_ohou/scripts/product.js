// ## 11. 상품 옵션 선택 시 색상 선택 후(클릭(x) 변경(o)) 사이즈 선택 가능, 색상 미선택 시 사이즈 선택 불가
//색상, 사이즈 select태그 변수 선언
const colorSelect = document.querySelector('select[name=color]')//색상
const sizeSelect = document.querySelector('select[name=size]')//사이즈
const orderColor = document.querySelector('.order_select .color');// 선택 후 나오는 색상 정보
const orderSize = document.querySelector('.order_select .size');// 선택 후 나오는 사이즈 정보
console.log(colorSelect, sizeSelect);
sizeSelect.disabled = true;//사이즈 비활성화 초기값 설정

//색상 select를 변경 했을 때 이벤트 생성
/* colorSelect.addEventListener('change',changeFunc);//색상 선택하고 바꿨을때 생성
function changeFunc(){
    return sizeSelect.disabled = false;//색상이 변경되었을 때 사이즈 재활성화
} */
console.log('----------12번---------')
// ## 12. 색상 -> 사이즈 선택 시 선택한 정보가 아래 새로운 요소에 수량, 가격과 함께 출력
// ### 12-1. 위 (12)번 진행 전 새로운 요소(.order_select) 숨기기
const orderSelect = document.querySelector('.order_select');
console.log(orderSelect);
orderSelect.style.display = 'none';
// ### 12-2. 위 (12)번 색상 -> 사이즈 선택 시 새로운 요소(.order_select) 보이기
// 색상 -> 사이즈 선택 시 이벤트와 함수 생성
colorSelect.addEventListener('change',orderFunc);//컬러가 변경되었을 때
sizeSelect.addEventListener('change',orderFunc);//사이즈가 변경되었을때
function orderFunc(){
    //console.log(0) //정상확인
    console.log(colorSelect.value);//자바스크립트는 value를 추척할 수 있다.//선택한 색상정보 확인
    sizeSelect.disabled = false; //사이즈 비활성화
    //특정 상황에서 아래orderSelect 출력되고 싶다면? 상황을 조건문으로 작성해야 한다!
    // orderSelect 출력 조건 -> color의 value값이 존재하는 option선택 후 size의 value값이 존재하는 option을 추가로 선택했을 경우
    orderSelect.style.display = 'block'
    //조건문 연습
    //if(조건식){조건식이 참일 경우 실행되는 명령}
    //if('블랙'){console.log('조건실행테스트')};//나오는지 확인
    console.log(Boolean(colorSelect.value));//colorSelect의 값이 참이냐 거짓이냐 검사하기.
    //사용자가 선택한 color, size의 값(value)이 모두 참일 때 조건 실행(value="" 빈문자열이면 거짓)
    if(colorSelect.value && sizeSelect.value){
        orderSelect.style.display = 'block'//색깔과 사이즈를 눌러야만 보인다. //주문영역 보이기
        //order_select color안에 선택한 colorSelect 값 대입하기
        orderColor.textContent = colorSelect.value;
        //order_select size안에 선택한 sizeSelect 값 대입하기
        orderSize.textContent = sizeSelect.value;
    }
}
// ## 13. 수량 조정 시 1~9999개까지 선택 가능 기능
// ### 13-1. `-`버튼 클릭 시 수량값이 1보다 작으면 1~9999개까지 선택가능합니다 메세지 출력
// ### 13-2. `+`버튼 클릭 시 수량값이 9999보다 크면 1~9999개까지 선택가능합니다 메세지 출력
// ### 13-3. `-`,`+` 버튼 클릭 시 수량이 범위값 안에서 1씩 감소 또는 증가
const minusBtn = document.querySelector('#minus');
const plusBtn = document.querySelector('#plus');
const orderNum = document.querySelector('input[name=user_num]');
const totalPrice = document.querySelector('.order_select .price em');
let num = 9999;//초기 수량
let price = 39900;//초기 가격
let total = 0; //수량에 따라 가격 계산하는 최종 변수
console.log(minusBtn,plusBtn,orderNum,totalPrice);

//초기설정
orderNum.value = num//num을 orderNum.value에 대입한다.
//증가 +버튼 클릭 시 수량이 1씩 증가되서 orderNum 출력
plusBtn.addEventListener('click',()=>{
    num++;//먼저 증가 시킴
    if(num > 9999){alert('1~9999개까지 선택이 가능합니다.')}
    if(num >= 1 && num <= 9999){
        total = num*price;
        orderNum.value = num;//먼저 증가 시킨 num을 orderNum.value에 대입시킨다.
        totalPrice.textContent = total.toLocaleString('ko-kr');
    }
    //toLocaleString - 숫자3자리부터 (,)콤마로 보이게 하는방법, 나라마다 달라서 작성법도 다르다.
    //textContent - 수량 증가할때 화면에서 바로 수량변경되는걸 확인이 가능하다.(console은 관리자에서만 보임)
})//화살표 함수 -> 함수 호출 안해도 된다.
//감소 - 버튼 클릭 시 수량이 1씩 감소되서 orderNum 출력
minusBtn.addEventListener('click',()=>{
    num--;
    //감소 수량이 1보다 작은 경우 경고메세지 출력
    if(num < 1){alert('1~9999개까지 선택이 가능합니다.')}
    //숫자가 0으로 변경되지 않도록
    if(num >= 1){
        total = num*price;
        orderNum.value = num;
        totalPrice.textContent = total.toLocaleString('ko-kr');
    }
})// this는 화살표 함수 안에서는 작성할 수 없다. this할려면 익명함수로 작성해야한다.
// ## 15. 위 (12)번에서 나온 박스의 x 클릭 시 주문 정보 모두 삭제
const closeBtn = document.querySelector('.order_select .close');
console.log(closeBtn);
closeBtn.addEventListener('click',()=>{
    orderSelect.style.display = 'none'
});
// 반복하고 싶을때는 함수를 작성, 1번만 사용하는경우는 익명함수나 화살표함수 사용
//장바구니 클릭 시 '장바구니에 담겼습니다' 메세지 출력
const cartBtn = document.querySelector('#cart_btn');
const buyBtn = document.querySelector('#buy_btn');
console.log(cartBtn,buyBtn);
cartBtn.addEventListener('click',cartClick) //장바구니 - 함수호출(함수반복)
function cartClick(){return alert('장바구니에 담겼습니다')}//반복이 필요한 경우 return작성
//cartBtn.addEventListener('click',function(){alert('장바구니에 담겼습니다')}) //장바구니 - 익명함수(this)
//cartBtn.addEventListener('click',()=>{alert('장바구니에 담겼습니다')}) //장바구니 - 화살표함수
//바로구매 클릭 시 '로그인이 필요합니다' 메세지 출력
buyBtn.addEventListener('click',buyClick)// 구매 -함수호출(함수반복)
function buyClick(){return alert('로그인이 필요합니다')}//반복이 필요한 경우 return작성
//buyBtn.addEventListener('click',function(){alert('장바구니에 담겼습니다')})// 구매 - 익명함수
//buyBtn.addEventListener('click',()=>{alert('장바구니에 담겼습니다')})// 구매 - 화살표함수