/* 25/05/16 */
//증감 연산자(단항)
let a = 1;
let b = 10;
//console.log(a,b);//1 10 초기값 그대로 보여줌
//b = ++a;//2 2 - 1을 증가시킨 후 a 연산을 진행한다.
//a의 값을 2에 대입해서 기존에 있던 10의 값이 없어지고 a의 값을 가져와서 2가 되었다.
//b = a++;//2 1 - 연산을 먼저 수행하고 1 증가시켜라
//a를 먼저 보낸 후 1을 증가시킨다.
//console.log(a,b);
//a = --b;//9 9 - b를 1 먼저 뺀 후 그 값을 a에 대입한다.
a = b--;//10 9 - b를 a에 먼저 대입한 후 1을 뺀다.
//console.log(a,b);
//==================예제2
let x = 5;
//let y = ++x;//1증가된 x값을 대입받는 y변수
//증감연산은 x변수 자체에 영향을 주기 때문에 일회성 더하기 연산자로 +1 을 붙여서 계산하고 x에 영향을 주지 않게 y에 대입한다.
let y = x+1;
console.log(x,y);//5 6
y = x++;//y는 x값이 증가되기 전의 값을 받아서 5이고 이전값의5에서 +1을 해서 x가 6이 된거다.
console.log(x,y);//6 5
x = ++y;//y를 1증가하고 증가한 값을 x에 대입한다. x값은 새로 받는값이라서 기존값 5는 없어진다.
console.log(x,y);//6 6
x++;
console.log(x,y);//7 6
--y;//증감연산자는 대입이 없어도 변수에 영향을 준다.
console.log(x,y);//7 5
x+1;//더하기, 빼기, 곱하기, 나누기 등 일반 산술연산자는 대입 연산자가 없으면 변수에 영향을 주지 않는다.
//=====================증감연산자 연습문제
let num1 = 10;
let num2 = 20;
let num3 = 30;
let num4 = 40;
//num1, num2, num3, num4d의 값은?
console.log(num1,num2,num3,num4);//10 20 30 40

num1++;//11
num2--;//19
num3++;//31
num4--;//39
//num1, num2, num3, num4d의 값은?
console.log(num1,num2,num3,num4);//11 19 31 39

num1 = ++num2;//21
num2 = num1++;//20 //num1의 20을 먼저 받아서 num2는 20이 되고 num1은 나중에 계산되어서 21이 된다.
//num1, num2, num3, num4d의 값은?
console.log(num1,num2,num3,num4);//21 20 31 39

num3 = num1+num2;//42 증감연산자는 나 자신에게도 영향을 준다.
num4 = ++num3;//42 
//num1, num2, num3, num4d의 값은?
console.log(num1,num2,num3,num4);//24 20 42 42

num1 = ++num3 + 10;//53 증감연산자는 나 자신에게도 영향을 준다.
num2 = --num4 + 1;//42
//num1, num2, num3, num4d의 값은?
console.log(num1,num2,num3,num4);
//=======================복합대입연산자
console.log('================');
let number = 10;
//number = 15; //기존값을 제거하고 단순 새로운 값 삽입 X
//number = 5; //위와 동일
//number = number + 5; //기존 값을 유지하고 원하는 계산 추가 O
number += 5;//복합대입 활용(위와 결과 동일)
console.log(number); //15
number -= 5;//빼기복합 number = number-5;
console.log(number); //10
number *= 5;//곱하기복합 number = number*5;
console.log(number); //50
number /= 5;//나누기복합 number = number/5;
console.log(number); //10
number %= 5;//나머지복합 number = number%5;
console.log(number); //0