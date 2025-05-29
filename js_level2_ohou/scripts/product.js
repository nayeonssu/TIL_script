// ## 11. 상품 옵션 선택 시 색상 선택 후(클릭(x) 변경(o)) 사이즈 선택 가능, 색상 미선택 시 사이즈 선택 불가
//색상, 사이즈 select태그 변수 선언
const colorSelect = document.querySelector('select[name=color]')//색상
const sizeSelect = document.querySelector('select[name=size]')//사이즈
console.log(colorSelect, sizeSelect);
sizeSelect.disabled = true;//사이즈 비활성화 초기값 설정

//색상 select를 변경 했을 때 이벤트 생성
colorSelect.addEventListener('change',changeFunc);//색상 선택하고 바꿨을때 생성
function changeFunc(){
    return sizeSelect.disabled = false;//색상이 변경되었을 때 사이즈 재활성화
}