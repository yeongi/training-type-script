# 1

---

### 자바스크립트에서 타입스크립트로

### 값 비싼 자유

- 자바스크립트: 충돌가능성을 먼저 확인하지 않고 코드를 실행하는 동적 타입 언어
- 타입스크립트 : 컴파일러가 충돌할 수 있다고 판단하면 코드실행을 거부함

### 부족한 문서

- 자바스크립트 언어사양(specification)에는 함수의 매개변수, 함수 반환, 변수 또는 다른 구성요소의 의미를 설명하는 표 준화된 내용이 없음
- JS에서는 많은 개발자가 블록 주석으로 함수와 변수를 설명하는 JSDoc 표준을 채택 했음.

```jsx
/**
 * add two numbers
 * @type { (a: number, b: number) => number }
 */
const add = (a, b) => a + b;
```

- jsdoc 설명이 코드가 잘못되는 것을 막을 수 없음
- jsdoc 설명이 이전에는 정확해도 코드 리펙토링 중 생긴 변경사항과 관련된 현재 유효하지 않은 jsdoc 주석을 모두 찾는것은 어려움
- 복잡한 객체를 설명할 때에는 다루기 어렵고 장황함

### 타입스크립트

1. 프로그래밍 언어 : js 의 모든 구문과 타입을 정의하고 사용하기 위한 새로운 타입스크립트 고유 구문이 포함된 언어
2. 타입 검사기 : 자바 스크립트 및 타입스크립트로 작성된 일련의 파일에서 생성된 모든 구성 요소를 이해하고, 잘못 구성된 부분을 알려주는 프로그램
3. 컴파일러 : 타입 검사기를 실행하고 문제를 보고한 후 이에 대응되는 자바스크립트 코드를 생성하는 프로그램
4. 언어 서비스 : 타입 검사기를 사용해 비주얼 스튜디오 코드와 같은 편집기에 개발자에게 유용한 유틸리티 제공법을 알려주는 프로그램

### TS 플레이 그라운드

[TS Playground - An online editor for exploring TypeScript and JavaScript](https://www.typescriptlang.org/ko/play)

### 타입스크립트의 특징

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/9f9cc5e2-c6fb-4679-969a-350cc0656a5a/Untitled.png)

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/2b80ba74-61f5-414e-b200-8e3bda8a4be5/Untitled.png)

- 타입스크립트 타임검사기를 통해, 문자열의 길이 속성이 함수가 아니라 숫자라는 지식을 활용해 주석으로 오류 사항을 알려줌

- 매개변수와 변수에 제공되는 값의 타입을 지정할 수 있습니다. → 이런 식의 “제한”은 실제로 바람직하다고 생각함

### 설치

```jsx
npm i -g typescript
```

- 타입스크립트 전역 설치

```jsx
tsc --version
```

- 타입스크립트 버전 확인

```jsx
//tsconfig.json 파일 생성됨
tsc --init
```

- tsconfig.json 파일은 타입스크립트가 코드를 분석할 때 사용하는 설정을 확인함
- 타입스크립트 코드를 분석하는데 사용하는 설정은 해당 폴더의 tsconfig.json을 따르게 됨

### 타입스크립트에 대한 오해

- 타입스크립트는 자바스크립트 코드를 구조화하는 데 도움이 되지만, 타입 안정성 강화를 제외 하고는 해당 구조가 어떻게 보여야 하는지에 대해서는 어떤 것도 강요하지 않음
- 클래스 사용을 강조? TS가 좋은 코드 작성을 어렵게 만든다? 코드스타일이 불편하다? XX

타입스크립트의 설계 목표

```jsx
- 현재와 미래의 ECMA 스크립트 제안에 맞춘다.
- 모든 자바스크립트 코드의 런타임 동작을 유지한다.
```

- 타입스크립트는 JS의 작동방식을 전혀 변경하지 않음

- 타입스크립트는 타입 검사용으로만 사용함 → 어차피 결과물은 JS 파일임