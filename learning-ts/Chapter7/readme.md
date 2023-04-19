---

### 인터페이스

```tsx
interface Poet {
  born: number;
  name: string;
}
```

### 타입 별칭 vs 인터페이스

- 인터페이스는 속성 증가를 위해 병합할 수 있습니다. / 전역 인터페이스 또는 npm패키지와 같은 외부코드를 사용할 때 특히 유용합니다.
- 클래스가 선언된 구조의 타입을 확인하는 데 사용할 수 있지만 타입 별칭은 사용할 수 없습니다.
- 타입검사기가 더 빨리 작동합니다. 내부적으로 더 쉽게 캐시할 수 있는 명명된 타입을 선언합니다.
- 객체리터럴 별칭이 아닌 이름있는 객체 간주되므로 오류메시지를 좀 더 쉽게 읽을 수 있습니다.

### 속성 타입

- 유용한 타입 시스템 제공

```tsx
interface Book {
  author?: string;
  pages: number;
}
```

- 선택적 속성

```tsx
interface Page {
  readonly text: string;
}
```

- 읽기 전용 속성 : 타입시스템에만 존재하여 인터페이스에서만 사용할 수 있음.

### 함수와 메서드

```tsx
interface HasBothFunctionsTypes {
  //메서드 구문
  property: () => string;
  //속성 구문
  method(): string;
}
```

- 메서드는 readonly로 선언할 수 없지만 속성은 가능합니다.
- 이번 장 후반부에서 살펴볼 인터페이스 병합은 메서드와 속성을 다르게 처리합니다.
- 타입에서 수행되는 일부작업은 메서드와 속성을 다르게 처리합니다.
- 기본함수가 this를 참조할 수 있다는것을 알고 있다면 메서드 함수를 사용하세요.

### 호출 시그니쳐

인터페이스와 객체 타입은 호출 시그니쳐로 선언할 수 있음.

```tsx
type FunctionAlias = (input: string) => number;

interface CallSignature {
  (input: string): number;
}

const typedFunctionAlias: FunctionAlias = (input) => input.length;
```

- 사용자 정의 속성을 추가로 갖는 함수를 설명하는데 사용할 수 있습니다.

### 인덱스 시그니쳐

- 타입스크립트는 인덱스 시그니처 구문을 제공해 인터페이스의 객체가 임의의 키를 받고, 해당 키 아래의 특정 타입을 반환할 수 있음을 나타냄

```tsx
const counts: WordCounts = {};

counts.apple = 0;
counts.banana = 1;
//Type 'boolean' is not assignable to type 'number'.
counts.cherry = false;
```

- 인덱스 시그니처는 객체가 어떤 속성에 접근하든 간에 값을 반환해야 함을 나타냄

### 속성과 인덱스 시그니처 혼합

- 명시적으로 명명된 속성과 포괄적인 용도의 string 인덱스 시그니처를 한번에 포함 가능

```tsx
interface HistoricalNovels {
  Oroonoko: number;
  [i: string]: number;
}

const novels: HistoricalNovels = {
  Oroonoko: 1688,
  Outlander: 1991,
};
```

### 숫자 인덱스 시그니처

- 자바스크립트 암묵적으로 객체 속성 조회 키를 문자열로 변환하지만 때로는 객체의 키로 숫자만 허용하는 것이 바람직할 수 있습니다.
- 명명된 속성은 그 타입을 포괄적인 용도의 string 인덱스 시그니처의 타입으로 할당할 수 있음.

```tsx
interface MoreNarrowNumbers {
  [i: number]: string;
  [i: string]: string | undefined;
}

const mixesNumbersAndStrings: MoreNarrowNumbers = {
  0: "",
  key1: "",
  key2: "",
};
```

### 중첩 인터페이스

```tsx
interface Novel {
  author: {
    name: string;
  };
  setting: Setting;
}

interface Setting {
  place: string;
  year: number;
}

let myNobel: Novel;

myNobel = {
  author: {
    name: "Jane An",
  },
  setting: {
    place: "England",
    year: 1812,
  },
};
```

### 인터페이스 확장

- 인터페이스가 다른 인터페이스의 모든 멤버를 복사해서 선언할 수 있는 확장된 인터페이스를 허용합니다.
- 모든 객체가 기본 인터페이스의 모든 멤버도 가져야함

```tsx
interface Writing {
  title: string;
}

interface Novella extends Writing {
  pages: number;
}

let myNovella: Novella = {
  pages: 195,
  title: "Ethan Frome",
};
```

- 파생 인터페이스는 다른 타입 속성으로 다시 선언해 기본 인터페이스의 속성을 재정의 하거나 대체할 수 있음.

```tsx
interface WithNullableName {
  name: string | null;
}

interface WithNonNullableName extends WithNullableName {
  name: string;
}
```

- 여러 개의 다른 인터페이스를 확장해서 선언할 수 있음.

```tsx
interface GivesNumber {
  giveNumber(): number;
}

interface GivesString {
  giveString(): string;
}

interface GivesBothAndEither extends GivesNumber, GivesString {
  giveEither(): number | string;
}

function useGivesBoth(instance: GivesBothAndEither) {
  instance.giveEither();
  instance.giveNumber();
  instance.giveString();
}
```

### 인터페이스 병합

```tsx
interface Merged {
  fromFirst: string;
}

interface Merged {
  fromSecond: number;
}
```

- 선언된 모든 필드를 포함하는 더 큰 인터페이스가 코드에 추가됨
