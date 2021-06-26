/* Date 객체 */

/* Date 객체 생성 */

// 생성자 함수를 사용하여 객체를 생성하여 변수에 할당. 
let date = new Date(); // 현재 날짜와 시간으로 date 객체생성
console.log(date); 

date = new Date(100000); // 매개변수 : 숫자, 1970년 1월 1일 00:00:00 UTC(UNIX 시간)부터의 시간을 밀리초 단위로 표현한 숫자
console.log(date); // Thu Jan 01 1970 09:01:40 GMT+0900 (대한민국 표준시)

date = new Date('2002-01-17T11:22:22'); // 매개변수 : 문자열, 해당 문자열은 날짜와 시간으로 표현한다.
console.log(date); // Thu Jan 17 2002 11:22:22 GMT+0900 (대한민국 표준시)

date = new Date(2002, 3); // 매개변수 : 년도, 월의 인덱스번호 ... 년도와 월을 지정하여 객체 생성.
console.log(date); // Mon Apr 01 2002 00:00:00 GMT+0900 (대한민국 표준시)

date = new Date(2022, 1, 28); // 매개변수 : 년도, 월의 인덱스번호, 일 .. 년도와 월 그리고 날짜를 지정하여 객체 생성.
console.log(date) // Mon Feb 28 2022 00:00:00 GMT+0900 (대한민국 표준시)

date = new Date(2016, 11, 2, 17); // 매개변수 : 년도, 월의 인덱스번호, 일, 시간 ... 년도 월 일 시간을 지정하여 객체 생성.
console.log(date); // Mon Feb 28 2022 00:00:00 GMT+0900 (대한민국 표준시)

date = new Date(2031, 5, 17, 2, 25); // 매개변수 : 년도, 월의 인덱스번호, 일, 시간, 분 ... 년도 월 일 시간, 분을 지정하여 객체 생성.
console.log(date); // Tue Jun 17 2031 02:25:00 GMT+0900 (대한민국 표준시)

date = new Date(1995, 1, 17, 4, 25, 59); // 매개변수 : 년도, 월의 인덱스번호, 일, 시간, 분, 초 ... 년도 월 일 시간, 분, 초를 지정하여 객체 생성.
console.log(date); // Fri Feb 17 1995 04:25:59 GMT+0900 (대한민국 표준시)

date = new Date(2102, 1, 30, 21, 18, 49, 12); // 매개변수 : 년도, 월의 인덱스번호, 일, 시간, 분, 초, 밀리초 ... 년도 월 일 시간, 분, 초, 밀리초를 지정하여 객체 생성.
console.log(date); // Thu Mar 02 2102 21:18:49 GMT+0900 (대한민국 표준시)


// Date.now()
date = Date.now(); // 1970년 1월 1일 00:00:00 UTC(UNIX 시간)부터의 시간을 밀리초 단위로 값을 반환
console.log(date); // 1624716115683

/* 날짜 와 시간 값 가져오기 */
date = new Date(2102, 1, 30, 21, 18, 49, 12); // date 객체 생성

// 1. getDate ... 일 반환하기
console.log(date.getDate()); // 2

// 2. getDay ... 요일 반환 .... 해당 요일의 인덱스번호로 반환 0 : 일, 1 : 월, 2 : 화 .... 6 : 토
let day = ['일', '월', '화', '수', '목', '금', '토'];

console.log(date.getDay()); // 4
console.log(day[date.getDay()]); // 목

// 3. getFullYear ... 년도 반환
console.log(date.getFullYear()); // 2102

// 4. getHours ... 시간 반환
console.log(date.getHours()); // 21

// 5. getMinutes ... 분 반환
console.log(date.getMinutes()); // 18

// 6. getSeconds ... 초 반환
console.log(date.getSeconds()) // 49

// 7. getMilliseconds ... 밀리초 반환
console.log(date.getMilliseconds()); // 12

// 8. getMonth ... 월 반환 ... 인덱스 번호로 반환 .. 0 : 1월, 1 : 2월, 2 : 3월 .... 11 : 12월
let month = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"]

console.log(date.getMonth()); // 2
console.log(month[date.getMonth()]); // MAR

// 9. getTime() ... 1970 년 1 월 1 일 00:00:00 UTC와 주어진 날짜 사이의 경과 시간 (밀리 초)을 나타내는 숫자
console.log(date.getTime()); // 4170745129012


/* 날짜 와 시간 값 설정하기 */

// 1. setFullYear 년도 설정
date.setFullYear(2021);
console.log(date.getFullYear()); // 2021

// 2. setMonth 월 설정
date.setMonth(6);
console.log(date.getMonth()); // 6 ... 7월
console.log(month[date.getMonth()]); // JUL

// 3. setDate 일 설정
date.setDate(23);
console.log(date.getDate()); // 23

// 4.getHours 시간 설정
date.setHours(6);
console.log(date.getHours()); // 6

// 5. setMinutes 분 설정
date.setMinutes(59);
console.log(date.getMinutes()); // 59

// 6. setSeconds 초 설정
date.setSeconds(18);
console.log(date.getSeconds()); // 18

// 7. setMilliseconds 밀리초 설정
date.setMilliseconds(34);
console.log(date.getMilliseconds()); // 18

// 8. setTime 경과된 시간으르 밀리초로 설정
date.setTime(10002); // 1970년 부터 경과된 밀리 초 값을 입력 
console.log(date); // Thu Jan 01 1970 09:00:10 GMT+0900 (대한민국 표준시)

/* toString */
// 날짜 값을 문자열로 출력
console.log(date.toString()); // Thu Jan 01 1970 09:00:10 GMT+0900 (대한민국 표준시)


