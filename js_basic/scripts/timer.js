function greeting(){
    return console.log('hello');
}
setInterval(greeting,3000);
//타이머함수 setInterval 일정시간 반복
let num1 = 0;//초기값을 0으로 설정한 변수
function num1Func(){
    if(num1>4){num1=0}//배너만들때 주로 사용한다.
    num1++;
    console.log(num1);
    //1234123412341234
}
//setInterval(num1Func,1000);

let num2 = 0;
//0~5까지 반복 출력 타이머 0123450123....
function num2Func(){
    console.log(num2);
    num2++;
    if(num2>5){num2=0}
}
//setInterval(num2Func,500)

//6~0 출력타이머 6543210654...
let num3 = 6;
function num3Func(){
    console.log(num3);
    num3--;
    if(num3<0){num3=6};
}
setInterval(num3Func,500)