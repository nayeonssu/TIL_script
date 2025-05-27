//프로젝트 소개 팝업 알고리즘
//1. 팝업 숨기기 (popup_bg) display:none;
//2. 썸네일 이미지(a) 클릭 시 팝업 보이기 (popup_bg)
//3. (팝업 실행 기준) 배경(popup_bg)클릭 시 팝업 숨기기 (popup_bg)
//프로젝트 팝업 실행 시 클릭한 대상의 이미지가 출력되는 알고리즘
//1. 클릭한 대상의 이미지 경로 확인

//2. 위 경로를 팝업 이미지의 경로에 대입

//알고리즘 기준 반복해야하는 데이터를 변수로 생성하기
const popupBg = document.querySelector('.popup_bg');
const thumbNailA = document.querySelectorAll('.design a');
console.log(popupBg, thumbNailA);
//1. 팝업 숨기기
popupBg.style.display = 'none';//display:none;과 같다.
//변수로 만든 DOM요소가 여러개일 경우 이벤트를 위해 접근할때는 인덱스를 사용해서 하나씩 개별 접근해야한다. 인덱스(번호)
thumbNailA[0].addEventListener('click',function(){
    //익명함수로
    console.log(this);//작동 테스트
    console.log(this);//이벤트객체 자동인식하는지 확인
    console.log(this.children[0].src);//현재(this) 객체의 자식(childern)의 src를 찍어라
    console.log(popupBg.children[0].children[0].src);//팝업bg의 자식의 자식의 src확인
    popupShow(this); //팝업 출력 함수 호출
    //클릭하고 싶은 이미지 넣고 싶을때
    
});
thumbNailA[1].addEventListener('click',function(){
    popupShow(this);
});
thumbNailA[2].addEventListener('click',function(){
    popupShow(this);
});
thumbNailA[3].addEventListener('click',function(){
    popupShow(this);
});
function popupShow(target) {
    console.log('----------------------함수시작위치와 에러체크');
    popupBg.style.display = 'flex';//flex와 block이 다르다. | flex로 디자인을 해서 다시 flex작성해주면 된다.(원래 가지고 있던 속성을 그대로 넣는것이다.)
    //console.log(this.children[0]);//정상체크
    popupBg.children[0].children[0].src = target.children[0].src//대입되는 위치
    //함수를 작동할때마다 this를 새로 작성해야한다.
    return //함수 종료 표시
}
//3. 배경 클릭 시 팝업 숨기기
popupBg.addEventListener('click',popupHide);
function popupHide() {
    return popupBg.style.display = 'none';
}