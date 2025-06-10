//오늘의 할일 JS
//1. 오늘의 할일 입력 후
//2. 등록버튼 클릭(클릭 이벤트 내에서 1번 입력값 인식)
//3. "여기에 할 일이 등록됩니다" 기존 li의 다음형제 위치에 입력한 정보 등록
//★위 알고리즘 3번 작업 시 주의사항
//ul태그의 마지막 자식 위치(appendChild)로 li추가(문자열생성"<li>"x, 함수createElement()가능)
const toInput = document.querySelector('.to')
const toBtn = document.querySelector('#to_btn')
const ul = document.querySelector('ul')
console.log(toInput,toBtn,ul)
toBtn.addEventListener('click',()=>{
    if(toInput.value == ''){//input의 값이 입력되지 않았을 경우
        //경고창으로 "입력 후 등록해야 합니다 메세지 출력하기"
        alert("입력 후 등록해야 합니다")
    }else{
        //console.log(toInput.value);//입력한 값을 알고 싶을때
        //ul.appendChild("<li>aba</li>"); //문자열삽입에러 x
        let li = document.createElement('li');//시작태그와 닫기태그가 한쌍으로 나타난다.//js에서태그 만드는법
        li.innerHTML = `<span>${toInput.value}</span><button type="button" class="del_btn">X</button>`;//입력한 값 추가
        console.log(li);//<li></li>
        ul.appendChild(li);
        toInput.value = ''//입력값 초기화 //등록된게 남아있지 않도록

        //등록된 할일 옆 x 클릭 시 내 부모 li제거하기
        const close = document.querySelectorAll('.del_btn')
        for(let i of close){
            console.log(i);//배열 형태가 아닌 객체형태로 출력되서 바로 사용가능한 형태인지 확인
            i.addEventListener('click',()=>{
                i.parentNode.remove();//parentNode->부모노드//remoneChild ->제거
            })
        }
        const span = document.querySelectorAll('li span')
        for(let i of span){
            console.log(i);
            i.addEventListener('click',()=>{
                i.parentNode.style.textDecoration = 'line-through';
            })
        }
    }//조건문 else(거짓) 사용자가 값을 입력했을 때 블록 위치
    //반복될 가능성이 있다면 함수(function)로 호출하는게 좋다
})//toBtn 이벤트 종료(블록) 위치