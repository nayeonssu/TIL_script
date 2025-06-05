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
//네이버 로그인 에러 메세지 알고리즘
/* 

조건2) 아이디를 입력하고 비밀번호를 입력하지 않고 로그인 클릭 시
조건2 결과) 비밀번호를 입력해 주세요.
조건3) 아이디, 비밀번호를 모두 입력하고 로그인 클릭 시 정보가 틀렸을 때
조건3 결과) 아이디(로그인 전화번호, 로그인 전용 아이디) 또는 비밀번호가 잘못 되었습니다. 아이디와 비밀번호를 정확히 입력해 주세요.
조건4)  조건3 상황에서 로그인실패가 3회 이상일때
조건4 결과) 영수증 퀴즈와 '아이디(로그인 전화번호, 로그인 전용 아이디) 또는 비밀번호가 잘못 되었습니다. 아이디와 비밀번호를 정확히 입력해 주세요.'
다시 로그인해 주세요
*/

//네이버 회원정보 저장DB
const naverUserDB = [{
    id:'aaa',
    pw:'a1234',
},{
    id:'bbb',
    pw:'b1234',
}]
console.log(naverUserDB);

//조건1) 아이디와 비밀번호를 모두 입력하지 않고 로그인 클릭 시
//조건1 결과) 아이디 또는 전화번호를 입력해 주세요.
const userId = document.querySelector('input[name=user_id]')
const userPw = document.querySelector('input[name=user_pw]')
const errorMsg = document.querySelector('.error_msg')
const loginBtn = document.querySelector('#login_btn')
console.log(userId, userPw, errorMsg, loginBtn)
loginBtn.addEventListener('click',()=>{
    //유저 아이디도 빈 문자열이고, 비밀번호도 빈 문자열일 때 //&&
    if(userId.value == '' && userPw.value == ''){
        //아이디와 비밀번호 모두 입력하지 않았을 시(참) 실행결과
        errorMsg.textContent = '아이디 또는 전화번호를 입력해 주세요.'
        //input -> value | 다른 태그 -> textContent
    }else if(userPw.value == ''){
        //아이디는 작성했는데 비밀번호를 작성하지 않았냐고 물어봄
        //조건2)조건1이 거짓이고 조건2의 비밀번호를 입력안했는가(참)
        errorMsg.textContent = '비밀번호를 입력해 주세요.'
    }else if(userId.value == ''){
        //조건3)조건1, 2가 모두 거짓일때 아이디를 입력안했는가(참)
        errorMsg.textContent = '아이디를 입력해 주세요.'
    }else if(userId.value == naverUserDB[0].id && userPw.value == naverUserDB[0].pw){
        //아이디와 비밀번호가 DB서버의 0인덱스값과 모두 일치할 때 네이버 메인페이지로 이동
        console.log('id 일치')
        window.location.href = 'https://m.naver.com/'
    }else {
        //위 모든 조건이 거짓일때
        errorMsg.textContent = '아이디(로그인 전화번호, 로그인 전용 아이디) 또는 비밀번호가 잘못 되었습니다. 아이디와 비밀번호를 정확히 입력해 주세요.';
    }
    //삼항조건 활용 조건1
    //조건식 ? 조건식참결과 : 조건식거짓결과
    //(아래)조건결과대입변수 = 조건식 ? 조건식참결과 : 조건식거짓결과
    //errorMsg.textContent = userId.value == '' && userPw.value == '' ? '아이디 또는 전화번호를 입력해 주세요.':'';
})