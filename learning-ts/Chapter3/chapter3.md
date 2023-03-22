# 3

---

# 유니언과 리터럴

타입스크립트가 해당 값을 바탕으로 추론을 수행하는 두가지 핵심 개념

- 유니언 uniom : 값에 허용된 타입을 두 개 이상의 가능한 타입으로 확장하는 것
- 내로잉 narrowing : 값에 허용된 타입이 하나 이상의 가능한 타입이 되지 않도록 좁히는 것

### 유니언

```jsx
let isNum = Math.random() > 0.5 ? undefined : 10;
```

isNum은 undefined 이거나 num 일 수 있다. 위와 같이 ‘이거 혹은 저거’ 와 같은 타입을 유니언 이라고 한다.

![image](https://user-images.githubusercontent.com/40158148/226801709-0803daa8-c355-44d0-9af2-0f1cfdb93754.png)

TS는 가능한 값 또는 구성 요소사이에 | (수직선) 연산자를 사용해 유니언 타입임을 나타낸다.

**타입선언**

변수에 대한 명시적 타입 애너테이션을 제공하는 것이 유용할 떄 유니언 타입을 사용한다

유니언 타입 선언의 순서는 중요하지 않다

```jsx
let school: "DSU" | null;
```

**유니언 속성**

유니언으로 선언한 모든 가능한 타입에 존재하는 멤버 속성에만 접근할 수 있다

유니언 외의 타입에 접근하려고 하면 검사 오류가 발생한다

```jsx
let isNum = Math.random() > 0.5 ? "123" : 10;

//ok
isNum.toString();
//not ok
isNum.toFixed();
```

![image](https://user-images.githubusercontent.com/40158148/226801734-c5b9982e-bb44-4638-963e-8118f7b144cc.png)

number | string 타입에서 공통적으로 있는 속성은 toString()은 사용할 수 있지만, toFixed( )는 사용할 수 없다.

객체가 어떤 속성을 포함한 타입으로 확실하게 알려지지 않은 경우, TS는 해당 속성을 사용하려고 시도하는 것이 안전하지 않다고 여긴다.

유니언 타입으로 정의된 여러타입 중 **하나의 타입으로 된 값의 속성을 사용**하려면 **코드에서 값이 보다 구체적인 타입 중 하나라는거을 TS에게 알려야 한다**. 이 과정의 **네로잉**이라고 한다.

### 네로잉

네로잉은 값이 정의, 선언 혹은 이전에 유추된 것보다 더 구체적인 타입임을 코드에서 유추하는 것이다.

타입을 좁히는데 사용할 수 있는 논리적 검사를 타입 가드라고 한다.

**값 할당을 통한 내로잉**

변수에 값을 직접할당하면 타입스크립트는 변수의 타입을 할당된 값의 타입으로 좁힌다.

```jsx
let school: string | null;

//ok
school = null;

//not ok
//type : string
school.split("o");
```

**조건 검사를 통한 내로잉**

TS에서는 변수가 알려진 값과 같은지 확인하는 if 문을 통해 변수의 값을 좁히는 방법을 사용한다.

```jsx
let number = Math.random() > 0.5 ? "123" : 10;

//ok
//type: number
if (number === 10) number.toFixed(1);

//not ok
number.toFixed(10);
```

**typeof 검사를 통한 내로잉**

typeof 연산자를 사용할 수도 있다.

```jsx
let myNumber = Math.random() > 0.5 ? "123" : 10;

//if else 절 가능
if (typeof myNumber === "number") {
  myNumber.toFixed(1);
} else {
  myNumber.toString();
}

//삼항 연산자 가능
typeof myNumber === "string" ? myNumber.toString() : myNumber.toFixed(1);
```

### 리터럴 타입

리터럴 타입은 좀 더 구체적인 버전의 원시타입이다.

```jsx
//string 타입
//"hysteria" 타입
const philosopher = "Hysteria";
```

원시 타입 값 중 어떤것이 아닌 특정 원싯값으로 알려진 타입

변수를 `const`로 선언하고 직접 `리터럴 값`을 할당하면 TS는 해당 변수를 할당된 리터럴 값으로 유추함

![image](https://user-images.githubusercontent.com/40158148/226801762-787f4abb-fd1e-4dda-8c00-0d308094ff97.png)

TS코드에 발견할 수 있는 타입

- boolean : true | false
- null, undefined : 둘 다 자기 자신, 즉 오직 하나의 리터럴 값만 가짐
- number
- string

유니언 타입 애너테이션에서는 리터럴과 원시타입을 섞어서 사용할 수 있다.

```
let lifespan: number | "ongoing" | "uncertain";

lifespan = 10;
lifespan = "ongoing";
lifespan = "uncertain";
```

**리터럴 할당 가능성**

number와 string과 같은 서로 다른 원시타입이 서로 할당되지 못한다.

서로 다른 리터럴 타입 또한 서로 할당할 수 없다.

```jsx
let myFreind: "KYM";

//ok
myFreind = "KYM";
//not ok
myFreind = "JUY";
```

![image](https://user-images.githubusercontent.com/40158148/226801777-9ab7e013-aa52-4ce2-85c2-f57d149deedd.png)

리터럴 타입은 그 값이 해당하는 원시타입에 할당할 수 있다. 모든 특정 문자열은 여전히 string 타입이기 때문이다.

```jsx
let myFreind: string;
const me = "JUY";
//ok
myFreind = "KYM";
//ok
myFreind = me;
```

**엄격한 null 검사**

리터럴로 좁혀진 유니언의 힘은 TS에서 엄격한 null 검사라 부르는 타입 시스템 영역인 ‘잠재적으로 정의되지 않은 undefined 값’으로 작업할 때 특히 두드러진다.

엄격한 null 검사를 활성해야만 코드가 null 또는 undefined 값으로 인한 오류로부터 안전한지 여부를 쉽게 파악할 수 있다.

**참 검사를 통한 내로잉**

JS에서 boolean 문맥에서 true로 간주되는 점을 생각해보자

js에서 false인 경우

- false
- 0
- -0
- 0n
- “”
- null
- undefined
- NaN

TS는 잠재적인 값 중 truthy로 확인된 일부에 한해서만 변수의 타입을 좁힐 수 있다.

**초기값이 없는 변수**

js 에서 초깃값이 없는 변수는 기본적으로 undefined가 된다. 값이 할당되기전에 속성 중 하나에 접근하려고 시도하면 오류가 발생한다.

하지만 TS에서 의도적으로 undefined를 주면 오류가 발생하지 않는다.

### 타입별칭

```jsx
type Myname = ...;
```

타입별칭은 타입 시스템의 ‘복사해서 붙여넣기’ 처럼 작동한다.

타입 별칭은 순전히 타입 시스템에만 존재하므로 런타임 코드에서는 참조할 수 없다.

‘개발 시’에만 존재한다.

**타입 별칭 결합**

타입 별칭은 다른 타입 별칭을 참조할 수 있다.
