//스크롤 이벤트 문법
//window.addEventListener('scroll',()=>{실행결과})
//스크롤 이벤트와 상관없이 바로 숨겨야 하므로 스크롤이벤트 밖에서 선언
const scrollTop = document.querySelector('#top')
    scrollTop.style.display = 'none'
scrollTop.addEventListener('click', (e)=>{
    console.log(e)
    e.preventDefault();//태그의 기본이벤트 막기
    //window.scrollTo(0,0)
    window.scrollTo({top:0, left:0, behavior:'smooth'})
})

//검색 폼 복제 변수
const searchClone = document.querySelector('header form').cloneNode(true);//자직자손까지 선택 + 복제
let isSearchClone = false//안보이면 false 보이면 true//처음에는 원래 안보인다.
window.addEventListener('scroll',()=>{

    console.log(window.scrollY)
    //1. 스크롤 이벤트에 따라 헤더 디자인 변경
    const headerBtm = document.querySelector('.bottom');//변수생성
    //변수가 if안에 있을경우에 에러가 뜸

    if(window.scrollY > 100){//스크롤 위치가 100보다 크면
        headerBtm.classList.add('active');//100보다 클때 그림자 보이게
        headerBtm.appendChild(searchClone);
        isSearchClone = true;//100보다 Y가 클때 참(복제한게 보인다.)
        
    }else{//위 조건이 아니면(100보다 작으면)
        if(isSearchClone){//(위)else 1001보다 작으면 바로 실행하지 않고 이중검사 후 실행
            headerBtm.classList.remove('active');
            headerBtm.removeChild(searchClone);//시작 위치에서 없는걸 지우라고 해서 에러가 뜸
            isSearchClone = false;//작을때 거짓(보이지 않는다.)
        }
    }

    //2. 스크롤 이벤트에 따라 맨위로 디자인 변경
    //맨 위로 숨기기
    //스크롤 위치가 500보다 크면 맨 위로 보이기(반대면 숨기기)
    if(window.scrollY > 500){
        scrollTop.style.display = 'block';
    }else{
        scrollTop.style.display = 'none';
    }
    //맨 위로 클릭하면 스크롤y 0위치로 올리기
})//스크롤 이벤트 종료