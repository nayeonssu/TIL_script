/* func2.js */
let b = 20;//전역변수(블록{}밖) 해석 - 변수 b에 20을 대입한다.
let c = 30;//전역변수(블록{}밖) //지역, 전역 어디서든 다 쓸 수 있다.
function test(){ //블록선언(여기부터 지역스코프 시작)
    let a = 10;//지역변수(블록{}안)
    console.log(a+b);
}//블록종료(지역 종료)//함수 선언 - function
test();//함수호출(함수밖에서)
//함수 실행을 하기 위해서 는 반드지 중괄호{}밖에서 호출을 해야한다.
//console.log(a); //지역변수는 전역에서 호출하면 에러
//console.log(a+b);//지역변수인 a때문에 에러난다. //지역변수는 전역에서 호출하면 에러남
console.log(b+c);//(a+b)위에서 이미 에러가 나서 에러가 난다. //전역변수이기 때문에 전역스코프 위치 실행 가능
console.log('---------------------------------------');
let d = 5;//전역변수
let e = 15;//전역
let f; //전역변수 생성(값 선언 안된 상태 undefined)
let g; //전역변수 생성(값 선언 안된 상태 undefined)
scopeTest();//호출(함수 실행)
console.log(f); //호출 후 f의 결과를 실행하는 함수기 때문에 25가 실행된다.
//함수 대기상태는 절대 실행되지 않는다. 호출을 해야만 실행된다!
function scopeTest(){//지역스코프 시작 //함수 호출 전 대기상태의 함수 생성구조
    f = 25;//지역변수
    g = 35;//지역변수
    console.log(d+f);//30
    console.log(e+g);//50
}//지역스코프 닫힘
//console.log(f);//지역스코프 안에 있어서 에러남
console.log(g+d);//40//g가 지역스코프 안에 있어서 에러남
console.log(d+e);//5+15
console.log('---------------------------------------');

let x = 1;//전역변수
let y;//전역변수로 바꿈
function func1(){//함수 대기상태 func1
    y = 5;//전역변수에 값 대입
    console.log(x+y);
}
function func2(){//함수 대기 상태 func2
    z = 10; //지역변수 생성과 값 대입
    func1();//6 //func2함수대기 안 func1함수 호출(func2대기상태로 실행되지 않음)
    //다른 함수를 지역스코프 안에다가 호출 할 수 있다.
    console.log(x+y+z);
}//z는 선언된 지역이라서 상관없음, x는 전역변수라서 상관없음
func2(); //16 //func2 함수 호출(func2 안 func1도 함께 절차에 맞게 실행)
//ex) func1 - 헨젤과 그레텔이 돌아올때 써야할 재료?
//ex) func2 - 헨젤과 그레텔이 집으로 목표
console.log('---------------------------------------헨젤과 그레텔');
function storyFunc1(){
    let person =['헨젤','그레텔'];//2개 이상일때 대괄호[]
    let src = '조약돌';
    //헨젤과 그레텔이 조약돌을 이용해서 집을 찾아갔습니다.
    console.log(`${person[0]}과${person[1]}이 ${src}을 이용해서 집을 찾아갔습니다.`);
}
function storyFunc2(){
    let person =['헨젤','그레텔'];//2개 이상일때 대괄호[]
    let src = '빵부스러기';
    //헨젤과 그레텔이 빵부스러기를 이용해서 집을 찾아갔습니다.
    console.log(`${person[0]}과${person[1]}이 ${src}를 이용해서 집을 찾아갔습니다.`);
}
storyFunc1();//function(함수)의 대기상태를 호출함
storyFunc2();//function(함수)의 대기상태를 호출함
console.log('---------------------------------------헨젤과 그레텔 알고리즘-매개변수');
function storyFunc(src){//생성매개변수
    let person =['헨젤','그레텔'];
    //let src = '빵부스러기';
    //헨젤과 그레텔이 조약돌를(을) 이용해서 집을 찾아갔습니다.
    //헨젤과 그레텔이 빵부스러기를(을) 이용해서 집을 찾아갔습니다.
    console.log(`${person[0]}과${person[1]}이 ${src}를(을) 이용해서 집을 찾아갔습니다.`);// ${src} - 출력
}
storyFunc('조약돌');//대입값
storyFunc('빵부스러기');//대입값
console.log('---------------------------------------커피 레시피(기본값 포함)');
//function coffeeFunc1(){} 함수를 생성한다. 실행결과가 항상 같으므로 매개변수는 선언하지 않는다.
//function coffeeFunce1(data1){} 함수를 생성한다. 결과 실행 시 매번 달라지는 데이터가 1개 있기 때문에 매개변수를 1개 생성한다.
//function coffeeFunc1(data1, data2){} 함수를 생성한다. 결과 실행 시 매번 달라지는 데이터가 2개 있기 때문에 매개변수를 2개 생성한다.
//function coffeeFunc1(data1){}
//coffeeFunc1(10);
//(위)프호그래밍해석 : 함수를 생성 후 달라지는 데이터1개에 맞춘 매개변수1개 생성완료. 이후 함수를 호출하고 매개변수에 대입할 10값 입력.
//function coffeeFunc1(data1){실행함수+매개변수data1활용}
//coffeeFunc1(10);
//매개변수를 생성하고 매개변수에 값을 대입했다면 반드시 함수 내부에 매개변수를 활용한 결과식을 만들어야 한다.
//매개변수 사용 시 호출할 때 매개변수에 전달할 대입값을 작성안해도 함수가 실행되게 하고 싶다면 매개변수 생성 시 기본값을 함께 작성해야 합니다. function 함수명(매개변수=기본값){}
function coffeeFunc1(data1=1, data2=0.5){//달라지는 것만 매개변수로 만든다.
    let water = data1+'컵 물을 채운다';
    let espresso = `${data2}샷 에스프레소를 넣는다`;
    console.log(water, espresso);
}
coffeeFunc1(2, 1);
coffeeFunc1(3, 0.5);
coffeeFunc1();//매개변수를 요청하지 않았을때는 기본값이 있어야 한다. //기본값은 필수가 아니다.
//==========================커피주문 알고리즘(고객입장)
console.log('---------------------------------------');
function order(menu, num=1){//1 기본값 세팅
    //let coffee = `${menu}`
    //let cup = `${num}잔 주문완료되었습니다.`
    //console.log(coffee, cup);
    const msg = '잔 주문완료되었습니다.'//고정값
    console.log(menu, num, msg);//(매개변수1, 매개변수2, const)
}
order('카페라떼');//기본값이라 두번째 매개변수 생략
order('아메리카노',2);//기본값이 아니라 매개변수 모두 작성
order('녹차라떼');
order('아메리카노',4);
console.log('---------------------------------------');
function coffeeOrder(hotIce ,menu, num=1){//매개변수 1개만 추가하면 된다.
    const msg = '잔 주문완료되었습니다.'
    const type = ['따듯한','차가운']
    console.log(type[hotIce], menu, num, msg)
}
coffeeOrder(0,'카페라떼',2);
coffeeOrder(1,'아메리카노');
coffeeOrder(0,'녹차라떼',2);
coffeeOrder(1,'아메리카노');
console.log('---------------------------------------함수의 리턴(return)');
//더하기 알고리즘
//함수 내부 {}는 대기장소로 호출하지 않는한 절대 실행되지 않는다.
//함수 외부는 {}가 끝난 위치로 함수를 호출해서 실행할 수 있는 위치다.
//함수 내에서 return을 작성하면 내부의 데이터를 함수  외부로 반환해서 실행시키거나 데이터를 전달하는 것을 말한다.
function plusFunc(num) {
    let total = num+1;
    //return console.log(total);
    return total; //리턴으로 실행함수가 아닌 값만 보냈다면?
}
plusFunc(2);
//호출 할때 리턴이 보낸 반환값을 묶어준는 실행함수를 별도로 작성한다.
//리턴은 무조건 필수!
console.log(plusFunc(2));
console.log('---------------------------------------구구단 알고리즘(리턴과 매개변수 활용)');
let dan99 = '';//전역변수(초기값) 앞으로 문자데이터가 들어올 예정으로 빈문자초기값
function dan99Func(num){//호출한 값(2)를 받을 매개변수 준비
    dan99 = `${num}x1=${num*1} `;
    //dan99 = dan99 + `${num}x2=${num*2}`
    //기존 dan99변수에 우측 데이터를 더해서 대입하라
    dan99 += `${num}x2=${num*2} `;
    dan99 += `${num}x3=${num*3} `;
    dan99 += `${num}x4=${num*4} `;
    dan99 += `${num}x5=${num*5} `;
    dan99 += `${num}x6=${num*6} `;
    dan99 += `${num}x7=${num*7} `;
    dan99 += `${num}x8=${num*8} `;
    dan99 += `${num}x9=${num*9}`;
    return dan99;//복합대입연산자 += - 기존 값에 더해서 계산한다.
}
dan99Func(2);//구구단 2단
console.log(dan99Func(2));
console.log(dan99Func(7));
console.log('---------------------------------------할인율 계산기');
//27900원을 입력했을 때(가격은 달라질 수 있음)
//입력한 가격에 대한 5%, 10%, 20%, 30%, 40%, 50% 할인율 동시출력
//10% 할인율 계산법 : 가격 * 0.9
//4% 할인율 계산법 : 100-4 = 96 -> 0.96
//결과예시) 5% 할인율 결과 : ????원
let discountResult = '';
function discount(num){
    discountResult = `5% 할인율 결과 : ${num * 0.95}원 `;
    discountResult += `10% 할인율 결과 : ${num * 0.9}원 `;
    discountResult += `20% 할인율 결과 : ${num * 0.8}원 `;
    discountResult += `30% 할인율 결과 : ${num * 0.7}원 `;
    discountResult += `40% 할인율 결과 : ${num * 0.6}원 `;
    discountResult += `50% 할인율 결과 : ${num * 0.5}원`;
    return discountResult;//return을 외부 함수로 빼겠다.
}
//discount();
console.log(discount(27500));//내부 함수로부터 값을 받아 계산한다.
console.log(discount(35000));