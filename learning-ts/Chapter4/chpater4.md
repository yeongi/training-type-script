---

# 객체

객체 리터럴을 생성하면 TS는 해당 속성을 기반으로 새로운 객체 타입 또는 타입 형태를 고려한다.

객체 타입은 TS가 JS코드를 이해하는 방법에 대한 핵심 개념이다. `null`과 `undefined`를 제외한 모든 값은 그 값에 대한 `실제 타입의 멤버 집합`을 가지므로 TS는 `모든 값의 타입`을 확인하기 위해 `객체 타입`을 이해해야 한다.

### 객체 타입 선언

```jsx
let poetLater: {
  born: number,
  name: string,
};

//ok
poetLater = {
  born: 1923,
  name: "tailer swain",
};
```

객체 타입은 객체 리터럴과 유사하게 보이지만 필드 값 대신 타입을 사용해 설명한다.

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/da8361ae-b41e-45af-9466-b6e66ce3e4f0/Untitled.png)

### 별칭객체 타입

위와 같이 객체 타입을 계속 작성하는 일은 매우 귀찮다. 객체 타입에 타입 별칭을 할당해 사용하는 방법이 더 일반적이다.

이전 코드 스니펫을 `profile` 타입으로 다시 작성할 수 있고, TS의 할당 가능성 오류 메시지를 좀 더 직접적으로 읽기 쉽게 만드는 추가 이점이 있다.

```tsx
type profile = {
  born: number;
  name: string;
};

let poetLater: profile;

poetLater = {
  born: 1923,
  name: "tailer swain",
};
```

\*\* 대부분의 TS프로젝트는 객체 타입을 설명할 때 인터페이스 키워드를 사용한다. type과 인터페이스는 거의 동일함.

### 구조적 타이핑

TS의 타입시스템은 `구조적으로 타입화 (stucturally typed)`되어 이다. 즉 `타입을 충족하는 모든 값`을 해당 타입의 값으로 사용할 수 있다.

`매개변수`나 `변수`가 `특정 객체 타입으로 선언`되면 `타입 스크립트`에 어떤 객체를 사용하든 `해당 속성`이 있어야 한다.

```tsx
type WithFirstName = {
  firstName: string;
};

type WithLastName = {
  lastName: string;
};

const hasBorn = {
  firstName: "Jang",
  lastName: "uiYeong",
};

//firstName이 존재 ok
let withFirstName: WithFirstName = hasBorn;
//lastName이 존재 ok
let withLastName: WithLastName = hasBorn;
```

- TS의 타입검사기에서 구조적 타이핑은 정적 시스템이 타입을 검사하는 경우이다. ⇒ TS
- 덕타이핑은 런타임에서 사용될 때까지 객체 타입을 검사하지 않는것을 말한다. ⇒ JS

**사용검사**

객체 타입으로 애너테이션 된 위치에 값을 제공할 때 TS는 값을 해당객체 타입에 할당할 수 있는지 확인한다.

할당하는 값에 객체 타입의 필수 속성이 있어야한다.

만약 필요한 멤버가 없다면 TS는 타입 오류를 발생시킨다.

```tsx
type hasBorn = {
  firstName: "Jang";
  lastName: "uiYeong";
};

let baby: hasBorn;

//not ok
//don't have lastName
baby = {
  firstName: "Jang",
};
```

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/cebbf158-df9e-4755-8905-298645aacdd4/Untitled.png)

객체 타입은 필수 속성 이름과 해당 속성이 예상되는 타입을 모두 지정한다. 객체의 속성이 일치 하지 않으면 타입오류가 발생한다.

**초과 속성 검사**

변수가 객체 타입으로 선언되고, 초깃값에 객체 타입에서 정의된 것보다 많은 필드가 있다면 TS에서 타입오류가 발생함

초과 속성 검사는 객체 타입으로 선언된 위치에서 생성되는 객체 리터럴에 대해서만 일어난다.

기존 객체 리터럴을 제공하면 초과 속성 검사를 우회한다.

```tsx
type hasBorn = {
  firstName: "Jang";
  lastName: "uiYeong";
};

//초기값이 구조적으로 일치함
let baby: { firstName: string };
let myBaby: hasBorn = { firstName: "Jang", lastName: "uiYeong" };

baby = myBaby;
```

초과 속성을 금지하면 코드를 깨끗하게 유지할 수 있고, 예상한대로 작동하도록 만들 수 있다. 객체 타입에 `선언되지 않은 초과 속성`을 종종 `잘못 입력된 속성이름`이거나 `사용되지 않는 코드` 일 수 있다.

**중첩된 객체 타입**

TS에서도 객체를 중첩해서 사용할 수 있다.

```tsx
type HasBorn = {
  firstName: "Jang";
  lastName: "uiYeong";
};

type BabyProfile = {
  sex: string;
  hasBorn: HasBorn;
};
```

중첩된 객체 타입을 고유한 타입이름으로 바꿔서 사용하면 코드와 오류 메시지가 더 읽기 쉬워짐

**선택적 속성**

모든 객체에 객체 타입 속성이 필요한것은 아니다. 타입의 속성 애너테이션에서 **`:앞에 ?를 추가`** 하면 선택적 속성임을 나타낼 수 있다.

```tsx
type HasBorn = {
  firstName: string;
  lastName: string;
};

type BabyProfile = {
  sex?: string;
  profile: HasBorn;
};

const boyBaby = {
  sex: "male",
  profile: {
    firstName: "Jang",
    lastName: "uiYeong",
  },
};

//sex가 있을 수도 있고 없을 수도 있다.
const baby = {
  profile: {
    firstName: "Jang",
    lastName: "uiYeong",
  },
};
```

### 객체 타입 유니언

변수에 여러 객체 타입 중 하나가 될 수 있는 초기값이 주어지면 TS는 해당 타입을 객체 타입 유니언으로 유추한다.

**명시된 객체 타입 유니언**

객체 타입의 조합을 `명시`하면 객체 타입을 더 명확히 정의할 수 있다. 특히 객체 타입으로 구성된 유니언이라면 TS의 타입 시스템은 이런 `모든 유니언 타입에 존재하는 속성에 대한 접근`만 허용한다.

```tsx
type PoemWithPage = {
  name: string;
  pages: number;
};

type PoemWithRhymes = {
  name: string;
  rhymes: boolean;
};

type Poem = PoemWithPage | PoemWithRhymes;

const poem: Poem =
  Math.random() > 0.5
    ? { name: "작은것들을 위한 시 ", pages: 120 }
    : { name: "작은것들을 위한 시 ", rhymes: true };

//ok
poem.name;

//not ok 네로잉 필요
poem.page;
```

잠재적으로 존재하지 않는 객체의 멤버에 대한 접근을 제한해서 코드의 안전을 지킨다.

**객체 타입 내로잉**

객체 타입 유니언도 타입을 좁혀야 한다. 속성값을 이용해 좁혀야 한다.

```tsx
if ("pages" in poem) {
  poem.pages; // type : PoemWithPage
} else {
  poem.rhymes; // type : PoemWithRhymes
}
```

만약 `pome.pages` 처럼 객체에 직접 접근해서 판별하려고하면 오류가 발생한다.

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/1e654b54-5231-438f-9d90-7c48a1be7799/Untitled.png)

**판별된 유니언**

객체의 속성이 객체의 형태를 나타내도록 하는 것이다. 이러한 형태를 `판별된 유니언`이라 부리고, `객체의 타입을 가리키는 속성`이 `판별값`이다.

다음 `Poem` 타입은 `PoemWithPages` 타입 또는 `PoemWithRhymes` 타입 둘다 될 수 있는 객체를 설명하고 `type` 속성으로 어느 타입인지를 나타낸다.

```tsx
type PoemWithPage = {
  name: string;
  pages: number;
  type: "pages";
};

type PoemWithRhymes = {
  name: string;
  rhymes: boolean;
  type: "rhymes";
};
```

공통 속성으로 type으로 접근 할 수 있고, 어느 타입인지 판별할 수 있다.

```tsx
const poem: Poem =
  Math.random() > 0.5
    ? { name: "작은것들을 위한 시 ", pages: 120, type: "pages" }
    : { name: "작은것들을 위한 시 ", rhymes: true, type: "rhymes" };

if (poem.type === "pages") {
  poem.pages; // type : PoemWithPage
} else {
  poem.rhymes; // type : PoemWithRhymes
}
```

타입 내로잉 없이는 값에 존재하는 속성을 보장할 수 없다.

### 교차 타입

유니언 타입은 둘이상의 다른 타입 중 하나의 타입이 될 수 있음을 나타낸다.

TS에서 `& 교차 타입`을 사용해 여러 타입을 동시에 나타낼 수 있다. 교차 타입은 일반적으로 `여러 기존 객체 타입`을 별`칭 객체 타입으로 결합`해 `새로운 타입`을 생성한다.

```tsx
type PoemWithPage = {
  name: string;
  pages: number;
};

type PoemWithRhymes = {
  name: string;
  rhymes: boolean;
};

type MyPoem = PoemWithPage & PoemWithRhymes;

{
  name: string;
  pages: number;
  rhymes: boolean;
}
```

교차타입은 유용한 개념이지만 스스로나 TS컴파일러를 혼동시킨다.

- 교차 타입을 사용할 때는 가능한 한 코드를 간결하게 유지해야 한다.
- 할당 가능성 오류 메시지가 읽기 어려워진다.

**never**

교차타입은 잘못 사용하기 쉽고 불가능한 타입을 생성한다.

원시타입의 값은 동시에 여러 타입이 될 수 없기 때문에 교차 타입의 구성요소로 함께 결합 할 수 없다.

```tsx
type NotPossible = number & string; //type: never
```
