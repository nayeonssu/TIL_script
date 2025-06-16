//window.scrollTo(x,y) 문서 스크롤 이동하는 내장함수(절대좌표)
const btn1 = document.querySelector('#btn1');
const topBtn = document.querySelector('#top');
console.log(btn1,topBtn);
btn1.addEventListener('click',()=>{
    //window.scrollTo(0,200);//숫자는 자동으로 px반환된다.
    //추가속성이나 메서드 연결 시에는 x y를 {객체} 문법으로 작성한다.
    window.scrollTo({left:0, top:500, behavior:'smooth'})
})
topBtn.addEventListener('click',()=>{
    //window.scrollTo(0,0)
    window.scrollTo({left:0, top:0, behavior:'smooth'})
})
//behavior:'smooth'
//위 동작은 CSS의 body, html {scroll-behavior:'smooth'} 기능과 동일하다.

//특정 위치로 바로가기, 위치속성 offsetTop 활용법
const cafeBtn = document.querySelector('#cafe_btn');
const section = document.querySelectorAll('section');//4
const navBtn = document.querySelectorAll('.nav button');//4
console.log(cafeBtn,section,navBtn);

//forEach 활용 navBtn, section 묶기
//forEach의 시작은 이벤트DOM 대상 권장
navBtn.forEach((obj, ind)=>{
    console.log(obj,ind);
    //obj 클릭이벤트 생성
    obj.addEventListener('click',()=>{
        //클릭이벤트 내에서 window.scrollTo 동일 인덱스의 section top위치이동
        window.scrollTo({
            left:0, top:section[ind].offsetTop,
            behavior:'smooth'
        })
    })
})

/* cafeBtn.addEventListener('click',()=>{
    window.scrollTo({
        left:0,
        top:section[1].offsetTop,
        behavior:'smooth'
    })
}) */
/* newsBtn.addEventListener('click',()=>{
    window.scrollTo({left:0,
        top:section[2].offsetTop,
        behavior:'smooth'})
}) */
/* webtoonBtn.addEventListener('click',()=>{
    window.scrollTo({left:0,
        top:section[3].offsetTop,
        behavior:'smooth'})
}) */
//부모 자식 관계가 아니라면 index로 잡는게좋다

//스크롤 상대적 이동 DOM.scrollBy = 동적.scrollBy
//이전, 다음 버튼 클릭 시 웹툰 width만큼 가로스크롤(윈도우x, toon_wrap o)이동하기
const toonWrap = document.querySelector('.toon_wrap');
const toonNext = document.querySelector('.toon_wrap_all .next');
const toonPrev = document.querySelector('.toon_wrap_all .prev');
console.log(toonWrap,toonNext,toonPrev);
toonNext.addEventListener('click',()=>{
    //toonWrap.scrollBy(120,0);
    toonWrap.scrollBy(toonWrap.children[0].children[0].offsetWidth, 0);
})
toonPrev.addEventListener('click',()=>{
    toonWrap.scrollBy(-toonWrap.children[0].children[0].offsetWidth, 0)
})