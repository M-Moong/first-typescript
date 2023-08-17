/**
 * 타입(type)이란?
 * 타입스크립트에서 객체를 표현하기 위해 사용하는 약속입니다.
 * 인터페이스와 기능이 거의 같지만, 편의기능이 없으므로 적극 추천합니다.
 */

/**
 * 타입의 기본적인 사용법
 */ 
type 주소2 = {
    /**
    * 타입 속에서 데이터를 표현한 것 하나하나를 필드라고 부릅니다.
    * 필드의 구분자로 콤마를 사용합니다.
    */ 
    address1: string,
    /**
    * 필드의 구분자로 콜론을 사용할 수도 있습니다.
    * 콜론과 콤마 중에서 어느것을 사용해도 되지만, 타입에서는 콜론을 사용하는 것이 관례입니다.
    */
    address2: string;
}



/**
 * 문제) 
 * 타입은 객체를 표현할 수 있습니다.
 * 변수에 유저 타입의 객체를 할당해 보세요.
 */
type 유저3 = {
    id: string,
    성: string,
    명: string,
}

const 나1;



/**
 * 타입은 & 연산자로 연결하면 병합이 됩니다.
 * 이것을 인터섹션(교집합)이라고 합니다.
 */
type 사람3 = {
    키: number
}

type 유저4 = {
    id: string,
    성: string,
    명: string,
}

/**
 * 문제)
 * 아래의 변수를 초기화 해 보세요.
 */
const test: 사람3 & 유저4;