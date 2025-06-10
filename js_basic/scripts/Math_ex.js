const yearDate = document.querySelector('#yeardate');
const dateBtn = document.querySelector('#year_btn');
const resultDate = document.querySelector('.date em');
console.log(yearDate, dateBtn, resultDate)
dateBtn.addEventListener('click',yearFunc)
function yearFunc(){
    const year = new Date(yearDate.value);
    const today = new Date();
    console.log(year, today);
    //숫자만 반환해서 계산
    const year2026 = today.getTime() - year.getTime();
    console.log(year2026);
    //흐른날짜 흐른시간 계산
    const dataFlow = Math.floor(year2026 / (1000*60*60*24));
    resultDate.textContent = dataFlow;
}
