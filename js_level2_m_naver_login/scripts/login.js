//main .lang_group 기준
//초기설정 : 한국어~중국어 옵션 숨기기
const langSelect = document.querySelector('#lang_select')
const langOpen = document.querySelector('.lang_open')
console.log(langSelect, langOpen)
langOpen.style.display = 'none'//초기 숨기기
//참(보이기), 거짓(숨기기)
let openif = false;//초기 거짓(숨겨진) 상태
//#lang_select 클릭 시 .lang_open 보이기
langSelect.addEventListener('click',()=>{
    //langOpen 숨겨진 상태면 보이기
    if(openif==false){
        langOpen.style.display ='flex';//css의 .lang_open의 display에 flex를 줘서
        openif = true;//상태값 변경
    }else if(openif==true){
        //langOpen 보이는 상태면 숨기기
        langOpen.style.display ='none';
        openif = false;//상태값 변경 //이거 없으면 반복 클릭 안됨
    }
})

//.lang_open이 보이는 상태라면 #lang_select 클릭 시 .lang_open 숨기기
//변수생성  -> 이벤트 제작 -> 이벤트 만족 시 실행함수(중간중간 콘솔 자주 체크)