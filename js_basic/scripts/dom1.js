//DOM EVENT
//HTML태그에서 JS로 동적제어하고 싶은 대상만 변수로 만든다.
//회원만 주문되는 주문하기 버튼 알고리즘

// (비회원인 경우) 주문하기 버튼을 클릭했을 때 '회원만 주문할 수 있습니다' 메세지 출력
//주문하기 버튼 == DOM객체변수
//클릭했을 때 == 이벤트(HTML, Javascript)
//회원만 메세지 출력 == 함수

//이벤트 리스너? -> 리스너(Listener)란? 특정 이벤트가 발생했을 때 실행할 함수를 의미한다.
const buyBtn = document.querySelector('#buyBtn');//변수생성
//id buyBtn을 찾아서 문서를 buyBtn에 대입해라
//null - > #buyBtn을 찾지 못해서 | 해결 : script에 defer(페이지 로드가 완료된 후 즉시 실행 스크립트)를 넣는다.
console.log(buyBtn);//변수정상확인
//버튼 onclick 이벤트리스너로 호출할 함수 생성
function userOderMsg(){
    return console.log('회원만 주문 가능합니다.')//반환해야해서 return 작성
}//함수에 이름이 써있을때 - 일반함수 | function뒤에 이름이 없을때 - 익명함수
//결제하기 클릭 시 '결제 완료되었습니다' 출력 알고리즘
const payBtn = document.querySelector('#payBtn');
console.log(payBtn);
function userBuyMsg(){
    return console.log('결제 완료되었습니다.')
}
//아이디 중복확인 클릭 시 '아이디가 중복되지 않습니다. 사용하셔도 좋습니다' 출력 알고리즘
const idBtn = document.querySelector('#idBtn');
console.log(idBtn);
function ueerIdCeck(){
    return console.log('아이디가 중복되지 않습니다. 사용하셔도 좋습니다.')
}
//키보드 이벤트
//리뷰입력창에 키보드를 눌렀을때 '50자 이상 입려하세요' 출력 알고리즘
const userReview = document.querySelector('input[name*=review]');
console.log(userReview);
function review50Msg(){
    return console.log('50자 이상 입력하세요')
}//function - 함수
//id 입력창 객체 준비 후 키보드를 아무키나 입력했을 때 '아이디는 영어로 시작해야합니다' 출력 알고리즘
const userId = document.querySelector('input[name*=id]');
console.log(userId);
function idMsg(){
    return console.log('아이디는 영어로 시작해야합니다')
}
//pw 입력창 객체 준비 후 키보드를 아무키나 입력했을 때 '비밀번호는 특수문자 포함 12글자 이상 입력하세요' 출력 알고리즘
const userPsw = document.querySelector('input[name*=psw]');
console.log(userPsw);
function pswMsg(){
    return console.log('비밀번호는 특수문자 포함 12글자 이상 입력하세요')
}
//기타 이벤트
//focus 특정 요소에 포커스(커서 활성화)됐을 경우
//userId.style.border = '2px solid green';//즉시 실행 테스트
userId.style.outline = 'none';
function focusGreen(){
    return userId.style.border ='2px solid green';
}
function blurGray(){
    return userId.style.border = '1px solid gray';
}
//쇼핑몰 상품 수량 입력 알고리즘
//기본수량 1
//사용자가 숫자 입력을 위해서 커서를 두면 배경색-노랑변경
//커서를 빼면 배경색-흰색
const itemNum = document.querySelector('input[name*=num]');
console.log(itemNum);
function focusYellow(){
    return itemNum.style.backgroundColor = 'yellow';
}//넣고싶은 style작성할때는 css작성법과 다르기 때문에 언더바는 빼고 작성한다.
function blurWhite(){
    return itemNum.style = 'background-color:white';
}
//문서가 로딩되었을 때 실행함수
function loadMsg(){
    return alert('문서 로딩 완료');
}
console.log('----------------------------이벤트와 콜백함수');
//객 - 이 -> 함
const googleJoin = document.querySelector('.google_join');
console.log(googleJoin);
//자바스크립트에 작성하는 객체 이벤트 문법
//객체.addEventListener('이벤트',콜백함수);
//addEventListener이벤트 작성 시 'on' 없이 이벤트만 작성한다.
//on은 태그에 쓸때만 작성
googleJoin.addEventListener('click',googleGo);//콜백함수로 쓸때는 괄호()가 없어도 된다.
function googleGo(){
    return window.open('https://accounts.google.com','_blank')
}
//네이버 아이디 가입
const naverJoin = document.querySelector('.naver_join');
console.log(naverJoin);//검사
naverJoin.addEventListener('click',naverGo);
function naverGo(){
    return window.open('https://nid.naver.com','_blank')
}
//카카오 아이디 가입
const kakaoJoin = document.querySelector('.kakao_join');
console.log(kakaoJoin);//검사
kakaoJoin.addEventListener('click',kakaoGo);
function kakaoGo(){
    return window.open('https://kakaocorp.com','_blank')
}
//_blank - 주소를 연다라고 그냥 같이 적는거
//현재 페이지 변경방법
//1. 객체
const fileLink = document.querySelector('.file_link');
console.log(fileLink);
//2. 이벤트
fileLink.addEventListener('click',link0520);
//3. 함수
//JS에서 상대경로 연결 시 js파일 기준이 아닌 js가 연결된 html파일이 저장된 위치를 기준으로 상대경로를 작성한다.
function link0520(){
    return window.location.href = 'bom1.html';//href - 주소 연결
}
//href에 연결된 html을 기준으로 경로를 쓰기 때문에 ../가 필요없다.
const fileIndex = document.querySelector('.file_index');
const fileReadme = document.querySelector('.file_README');
console.log(fileIndex,fileReadme);
fileIndex.addEventListener('click',indexGo);
fileReadme.addEventListener('click',readmeGo);
function indexGo(){
    return window.location.href = 'index.html';
}
function readmeGo(){
    return window.location.href = '../README.md';
}//html 기준이라서 readme는 상위경로 ../를 쓴다.
/* 상품 수량 증가 알고리즘 */
//1. 수량 초기값 1
//2. +버튼 클릭 시 수량이 1씩 증가해야 한다
// 객체 : 수량,+버튼 | 이벤트 : 증가 | 함수 : 증가
const numInput = document.querySelector('input[name=num]');
const numBtn = document.querySelector('#num_btn');
const numBtnMinus = document.querySelector('#num_btn_minus');
console.log(numInput,numBtn,numBtnMinus);
//1.수량 초기값1
numInput.value = 1;//value는 속성이라서 뒤에 괄호 필요 없음(함수는 괄호 필요)
//초기값이라서 이벤트 없이 바로 작성
//2. +버튼 클릭 시
numBtn.addEventListener('click',numPlus);
//2. -버튼 클릭 시
numBtnMinus.addEventListener('click',numMinus);
function numPlus(){
    //수량이 1씩 증가해야 한다
    //Hint : 기존의 input 값이 1증가해야한다.
    //1.증감연산자 활용법
    //return numInput.value = ++numInput.value;
    //2. 더하기연산자와 형변환메서드 활용법
    console.log(typeof numInput.value);//데이터타입 확인
    return numInput.value = Number(numInput.value)+1;//문자와 숫자가 붙어있으면 문자 연결로 인식된다.
}
function numMinus(){
    //수량이 1씩 감소해야한다.
    return numBtnMinus.value = --numInput.value;
}