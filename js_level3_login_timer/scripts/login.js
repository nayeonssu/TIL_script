//로그인 후 활동 없을 시 5초 자동 로그아웃 알고리즘
let userLogin = true; //사용자의 로그인 상태(참, 거짓)
let logouTime = 5000; //5초(밀리초)
let logoutInterval;

//사용자가 로그인한 상태라면 자동로그아웃 알고리즘을 시작한다.
if(userLogin == true){
    logouTimerFunc()
}

function logouTimerFunc(){
    clearInterval(logoutInterval);//이 전에 반복하던 setInterval을 멈춘다.//정지

    logoutInterval = setInterval(()=>{//몇초 간격으로 반복
        console.log('활동없음. 자동로그아웃 합니다');
        window.location.href = './index.html'
    },logouTime)
}

//사용자의 활동감지 이벤트(마우스아동, 키보드우를때, 마우스클릭)
document.addEventListener('mousemove',logouTimerFunc)//document -> 웹 문서
document.addEventListener('keydown',logouTimerFunc)
document.addEventListener('click',logouTimerFunc)