const aniImg = document.querySelector('main > img');
const topBtn = document.querySelector('.control .top');
const leftBtn = document.querySelector('.control .left');
const downBtn = document.querySelector('.control .down');
const rightBtn = document.querySelector('.control .right');
const inputMove = document.querySelector('.io input');
let currentY = 0;//이미지의 y 초기좌표
let currnetX = 0;//이미지의 X 초기좌표
console.log(aniImg,topBtn,leftBtn,downBtn,rightBtn,inputMove);
//aniImg.style.transform = 'translate(20px, 20px)'
//↓ 클릭 시 이미지를 아래방향으로 20px 이동시키기
downBtn.addEventListener('click',downFunce);
topBtn.addEventListener('click',topFunce);
rightBtn.addEventListener('click',rightFunce)
leftBtn.addEventListener('click',leftFunce)
function downFunce(){
    currentY += 20;//복합대입연산자 사용 아래방향
    return aniImg.style.transform = `translate(${currnetX}px, ${currentY}px)`
}
function topFunce(){
    currentY -= 20;
    return aniImg.style.transform = `translate(${currnetX}px, ${currentY}px)`
}
function rightFunce(){
    currnetX += 20;
    return aniImg.style.transform = `translate(${currnetX}px, ${currentY}px)`
}
function leftFunce(){
    currnetX -= 20;
    return aniImg.style.transform = `translate(${currnetX}px, ${currentY}px)`
}
//함수 : 반복을 쉽게 할수 있도록하기 위해서
//input 입력창에 허용키를 입력하고 Enter를 누르면 캐릭터가 이동하는 알고리즘
//허용키 : 왼쪽, 오른쪽, 위, 아래
inputMove.addEventListener('keydown',function(e){
    if(e.key === 'Enter'){
        //왼쪽 입력 후 Enter 실행 시 이미지가 왼쪽 20px 이동
        console.log('엔터확인');
        if(inputMove.value === '왼쪽'){
            currnetX -= 20;
            aniImg.style.transform = `translate(${currnetX}px, ${currentY}px)`
            inputMoveFunce()//엔터를 친 후에 남아있는 글자 없애기
        }else if(inputMove.value === '오른쪽'){//조건1 거짓일 때 검사하는 조건2 - 오른쪽
            currnetX += 20;
            aniImg.style.transform = `translate(${currnetX}px, ${currentY}px)`
            inputMoveFunce()
        }else if(inputMove.value === '위'){//조건1,2 거짓일 때 검사하는 조건3 - 위
            currentY -= 20;
            aniImg.style.transform = `translate(${currnetX}px, ${currentY}px)`
            inputMoveFunce()
        }else {//조건1,2,3 모두 거짓일때 실행결과 - 아래
            currentY += 20;
            aniImg.style.transform = `translate(${currnetX}px, ${currentY}px)`
            inputMoveFunce()
        }
    }
});//동작된걸 알아야하기 때문에 익명함수 사용
// 반복적인 조건이 들어갈때 한번에 변경할 수 있도록 함수를 따로 만들어준다.
function inputMoveFunce(){
    return inputMove.value = '';
}