// <ul id="container"> DB 무한스크롤 삽입
const container = document.querySelector('#container');
//무한 스크롤로 인해서 불러오는 DB값이 매번 다르므로 필요한 변수 생성
//한번에 출력되는 개수는 4개
const itemLoad = 4;
//스크롤내릴때 인식하는 반복운의 초기값
const startIndex = 0;
//스크롤내릴때 인식하는 반복운의 종료값(조건문)
let endIndex = startIndex + itemLoad;//초기값 + 출력갯수
console.log(itemLoad, startIndex, endIndex);
let isLoading =false //로딩완료 true //false //처음부터 로딩안되니까 false(거짓)
console.log(container);

loadMoreContent()//처음보이는 제품나열을 우한 함수 호출
function loadMoreContent(){
    //이미지->제품명->요약설명->가격->할인가->세일->리뷰
    //할인가 계산식
    //(원가 * (1 - 할인율 /100)).toLocaleString('ko-kr')
    //Math.round(원가 * (1 - 할인율 /100)).toLocaleString('ko-kr')
    

    //변수를 활용한 반복문
    for(let i=startIndex; i<endIndex; i++){
        const newLi = document.createElement('li');//변수 li 생성
        newLi.innerHTML = `<img src="${kurlyDB[i].src}" alt="${kurlyDB[i].name}">`;
        newLi.innerHTML += `<p class="name">${kurlyDB[i].name}</p>`;
        newLi.innerHTML += `<p class="summary">${kurlyDB[i].summary}</p>`;
        newLi.innerHTML += `<p class="price_original"><del>${(kurlyDB[i].price).toLocaleString('ko-kr')}원</del></p>`;//del -> 취소선
        newLi.innerHTML += `<p class="price">${Math.round(kurlyDB[i].price * (1 - kurlyDB[i].sale / 100)).toLocaleString('ko-kr')}원</p>`;
        newLi.innerHTML += `<p class="sale">${kurlyDB[i].sale}%</p>`;
        newLi.innerHTML += `<p class="review">${kurlyDB[i].review}+</p>`;
        //대입연산자= 기존의 데이터를 지운다. -> 복합대입+= 으로 바꾼다.
        container.appendChild(newLi);
    }
    //위 for문 한번 출력 후 스크롤이벤트로 인해 재출력 시 endIndex값이 다음출력되는 DB 개수만큼 증가되게 수정
    endIndex += itemLoad;
    isLoading = false;
}
//광고 뷰포트 영역세어 등장하는 자바스크립트
const ad = document.querySelectorAll('.ad p')
console.log(ad);
//스크롤 이벤트
window.addEventListener('scroll',()=>{

    //1. 요소가 뷰포트와의 거리가 어떻게 되는지 확인 변수
    /* const adTop = ad[0].getBoundingClientRect().top;
    console.log(adTop);
    //2. 요소가 뷰포트의 80% 지점에 도착했을 때
    if(adTop < window.innerHeight * 0.8){
        ad[0].classList.add('active');//보임
    }else{
        ad[0].classList.remove('active');//안보임
    }
    //ad[1]복습
    const adTop1 = ad[1].getBoundingClientRect().top;
    console.log(adTop1);
    if(adTop1 < window.innerHeight * 0.8){
        ad[1].classList.add('active');
    }else{
        ad[1].classList.remove('active');
    } */

    //반복문 활용
    //여러장의 이미지를 for문을 이용해서 작업량을 줄일 수 있음
    for(let i of ad){//of -> 여려개 객체에서 사용가능
        //console.log(i)
        const adTop = i.getBoundingClientRect().top;
        if(adTop < window.innerHeight * 0.8){
            i.classList.add('active');
        }else{
            i.classList.remove('active');
        }
    }
    //현재 뷰포트 하단 위치 window.scrollY + window.innerHeight
    //문서 전체 높이 document.documentElement.scrollHeight
    const currentScroll = window.scrollY + window.innerHeight
    const totalHight = document.documentElement.scrollHeight
    const scrollValue = 0.9;//0~1 기준으로 사용자의 스크롤 위치 파악값 //화면의 80%위치기점
    console.log(`현재 뷰포트값 ${currentScroll}, 전체높이${totalHight}`)

    //현재 스크롤 위치가 전체 스크롤 위치대비 80% 뷰포트 위치에 왔는지 + DB로드안된 상태인지
    //현재뷰포트값 >= 전체스크롤값 * 사용자위치값
    if(currentScroll >= totalHight * scrollValue && !isLoading){
        //로드된 종료인덱스가 DB 전체 개수와 같으면 종료
        //kurlyDB.js에 들어있는 제품이 12개 뿐이라서 그것만 나오도록
        if(endIndex >= kurlyDB.length){//종료 인덱스 == kurlyDB.js length
            return
        }
        console.log('새로운 콘텐츠 로드중...')
        isLoading = true;
        loadMoreContent();
    }//&& -> 논리 연산자
    
})//스크롤 이벤트 종료위치
