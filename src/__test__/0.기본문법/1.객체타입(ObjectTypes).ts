export {}
/**
  * 타입스크립트의 객체 타입은 아래와 같습니다.
  * 함수 타입과 클래스 타입은 따로 정리하겠습니다.
  * 
  * object: 객체 타입 (원시 타입을 제외한 모든 값)
  * array: 배열 타입
  * tuple: 고정된 길이의 배열 타입
  * enum: 열거형 타입
  * function: 함수 타입
  * class: 클래스 타입
*/



/**
 * 0. 배열 타입
 * 자바스크립트의 배열을 표현하는 타입입니다.
 * 타입이름 뒤에 [](중괄호) 를 붙여서 사용합니다.
 * /
 
/** 문제) 
 * unknown 대신에 적절한 타입 어노테이션을 입력해 보세요.
 * IDE의 지원을 받으면 더 쉽게 입력할 수 있습니다.
 */
let 숫자배열: unknown = [1,2,3];
let 문자열배열: unknown = ['1','2','3'];
let 불리언배열: unknown = [true, false];

/**
 * 1. 튜플 타입
 * 요소의 갯수와 자료형이 고정된 자료형입니다.
 * 사용하는 방법은 배열과 같습니다.
 * recoil 등 일부 라이브러리가 튜플을 매개변수로 사용합니다.
 */

/** 문제) 
 * unknown 대신에 적절한 타입 어노테이션을 입력해 보세요.
 * IDE의 지원을 받으면 더 쉽게 입력할 수 있습니다.
 */
let 튜플: unknown = [1, '1', true]
튜플 = [1, '1', true, 0]
튜플 = [1, '1', 'true']



/**
 * 1. 객체 타입
 * 자바스크립트의 객체를 표현하는 타입입니다.
 * {}(대괄호) 안에 타입을 적어서 표현합니다.
 * 객체를 선언하는 방식과 아주 닮았습니다.
 */
let 이름: { 성: string, 명: string } = { 성: '서', 명: '재원' }

/** 문제) 
 * unknown 대신에 적절한 타입 어노테이션을 입력해 보세요.
 * IDE의 지원을 받으면 더 쉽게 입력할 수 있습니다.
 */ 
let 주소: unknown = {
    address1: '서울시 영등포구',
    address2: '선착장',
}

let 사용자: unknown = {
    name: '홍길동',
    age: 12,
    checked: false,
    address: 주소
}



/**
 * 2. 열거형 타입(enum)
 * 숫자 집합과 문자 집합에 이름을 붙이는 타입입니다.
 * 타입이지만 그 자체로 값이 되는 특이한 타입입니다.
 * 다른 타입으로 대체할 수 있어서 실제로 사용하는 일이 드뭅니다.
 */

// 아래의 예는 0 부터 7사이의 수에 요일 이름을 붙이는 예입니다.
enum 일주일 {
    일,
    월,
    화,
    수,
    목,
    금,
    토
}
// 위의 코드는 아래와 같습니다.
enum 숫자붙은_일주일 {
    일 = 0,
    월 = 1,
    화 = 2,
    수 = 3,
    목 = 4,
    금 = 5,
    토 = 6,
}

let 숫자요일: 숫자붙은_일주일 = 0
console.log(숫자요일); // 0

// 문자열 집합에 이름을 붙일 수도 있습니다.
enum 문자열붙은_일주일 {
    일 = '일요일',
    월 = '월요일',
    화 = '화요일',
    수 = '수요일',
    목 = '목요일',
    금 = '금요일',
    토 = '토요일',
}

// 이렇게 사용할 수 있습니다.
let 문자요일: 문자열붙은_일주일 = 문자열붙은_일주일.월
console.log(문자요일); // 월요일