# 2

---

### 타입의 종류

“타입”은 JS에서 다루는 값의 `형태`에 대한 설명이다. 여기서 `형태`란 값에 `존재하는 속성`과 `메서드` 그리고 내장되어 있는 `typeof 연산자`가 설명하는것을 의미함

```jsx
let name = "장의영"; //type : string
```

TS의 기본적인 타입은 JS의 기본 원시타입과 동일함. 다음 값을 기본 원시 타입 중 하나로 간주함.

```jsx
-null - // null
  undefined - //undefind
  boolean - // true
  number - // 12, 1, 5
  bigint - // 1337n
  string - // “123”
  symbol; // Symbole(”Frank”)
```

### 타입시스템

타입시스템은 프로그래밍 언어가 프로그램에서 가질 수 있는 타입을 이해하는 방법에 대한 규칙 집합이다.

1. 코드를 읽고 존재하는 모든 타입과 값 을 이해함
2. 각 값이 초기 선언에서 가질 수 있는 타입을 확인함
3. 각 값이 추후 코드에서 어떻게 사용될 수 있 는지 모든 방법을 확인함
4. 값의 사용법이 타입과 일치하지 않으면 사용자에게 오류를 표시함

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/bc3b1ec3-0a16-42a6-9dac-ff9068f774a1/Untitled.png)

타입스크립트는 다음과 같은 순서로 오류를 표시함

1. 코드를 읽고 firstName이라는 변수를 이해함
2. 초깃값이 “Whitney” 이므로 firstName이 string 타입이라고 결론 지음
3. firstName의 .length 멤버를 함수처럼 호출하는 코드를 확인함
4. string의 .length 멤버는 함수가 아닌 숫자라는 오류를 표시함 → 즉 함수처럼 호출 할 수 없습니다.

### 오류 종류

- 구문 오류 : 타입스크립트가 자바스크립트로 변환되는 것을 차단한 경우
- 타입 오류: 타입검사기에 따라 일치하지 않는것이 감지된 경우

# 구문 오류

- 타입스크립트가 코드로 이해할 수 없는 잘못된 구문을 감지할 떼 발생함
- 타입스크립트는 구문오류와는 상관없이 자바스크립트의 코드를 출력하기 위해 최선을 다하지만, 원하는 출력결과가 아니수 있음
- 따라서 자바스크립트를 실행하기 전에 구문 오류를 수정하는 것이 좋다.

# 타입 오류

- 타입 검사기가 프로그램의 타입에서 오류를 감지했을 때 발생함
- 타입스크립트의 구문이 자바스크립트로 변환되는 것을 차단하지는 않음
- 코드가 실행되면 무언가 충돌하거나 예기치 않게 작동할 수 있음을 나타냄

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/bc3b1ec3-0a16-42a6-9dac-ff9068f774a1/Untitled.png)

- 자바스크립트를 실행하기 전에 타입오류를 확인하고 발견된 문제를 먼저 해결하는 것이 가장 좋음

### 할당 가능성

새롭게 할당된 값의 타입이 변수의 타입과 동일한지 확인함

```jsx
let firstName = "장의영";
firstName = "suzi";
```

- TS변수에 동일한 타입의 다른 값이 할당될 때는 문제가 없음

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/7a36597c-fb2e-4105-aa31-ba57f1b84c40/Untitled.png)

- 다른 타입의 값이 할당될때에 타입오류가 발생함
- 할당가능성 : TS에서 함수 호출이나 변수에 값을 제공할 수 있는지 여부를 확인하는것

### 타입 애너테이션

TS는 기본적으로 변수를 암묵적인 any 타입으로 간주함

초기 타입을 유추할 수 없는 변수는 진화하는 any 라고 부름 특정타입을 강제하는 대신 새로운 값이 할당될 때마다 변수타입에 대한 이해를 발전시킴

```jsx
let rocker; // 타입 : any
rocker = "Jang Ui Yeong"; // 타입 : string

rocker.toUpperCase(); // OK!

rocker = 19; //타입 : number
rocker.toPrecision(1); // OK

rocker.toUpperCase(); // ERROR
```

- 일반적으로 any 타입을 사용해 any타입으로 진화하는 것을 허용하게 되면 TS의 타입 검사 목적을 부분적으로 쓸모없게 만듬
- TS는 값이 어떤 타입인지 알고 있을 때 가장 잘 작동됨

**초기값을 할당하지 않고도 변수의 타입을 선언할 수 있는 구문인 타입애너테이션을 제공함**

```jsx
let rocker: string;
rocker = "Jang";
```

- 타입 애너테이션은 TS에서만 존재하며 런타임 코드에 영향을 주지 않고, 유효한 js 구문도 아님
- tsc명령어를 실행해 타입 스크립트 소스코드를 자바스크립트로 컴파일 하면 해당코드가 삭제됨

**초기값이 있는 변수에 타입 애너테이션을 추가하면 TS는 변수에 할당된 값의 타입이 일치하는지 확인함**

```jsx
let firstName: string = "jang";
```

### **타입 형태**

코드에서 변수의 속성이 접근하려고 한다면 TS는 접근하려는 속성이 해당 변수의 타입에 존재하는지 확인함

```jsx
class a {
  age: number;
  height: number;

  constructor(age: number, height: number) {
    this.age = age;
    this.height = height;
  }

  getAge() {
    return this.age;
  }

  getHeight() {
    return this.height;
  }
}
```

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/48a34be7-73cd-42d3-b024-6c0c9efb03a7/Untitled.png)

- TS는 객체의 형태에 대한 이해를 바탕으로 할당 가능성뿐만 아니라 객체 사용과 관련된 문제도 알려줌

- TS는 CommonJS와 같은 이전 모듈을 사용해서 작성된 TS파일의 import, export 형태는 인식하지 못함.
- TS는 일반적으로 CommonJS 스타일의 require 함 수에서 반환된 값을 any 타입으로 간주함
