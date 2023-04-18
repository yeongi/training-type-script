---

### 함수

```tsx
function sing(song: string) {
  console.log(`Singing: ${song}!`);
}
```

- 타입 애너테이션으로 함수 매개변수 타입을 선언할 수 있음
  선언 해주지 않으면 any 타입으로 간주…
- 타입 스크립트는 함수에 선언된 모든 매개변수가 필수라고 가정함

### 선택적 매개변수

```tsx
function announceSong(song: string, singer?: string) {
  console.log(`Song: ${song}!`);

  if (singer) {
    console.log(`Singer: ${singer}!`);
  }
}
```

- 선택적 매개변수를 타입 애너테이션 앞에 ?:를 추가해 선택적이라고 표시함
- 선택적 매개변수에는 항상 `| undefined` 유니언타입으로 추가되어 있음

### 기본값

```tsx
function rateSong(song: string, rating = 0) {
  console.log(`song : ${song}, score : ${rating}`);
}
```

- 매개변수에 기본값을 넣을 수 있음
- 이 때 타입은 추론되서 유추 됨.

### 나머지 매개변수

```tsx
function singAllTheSong(singer: string, ...songs: string[]) {
  songs.forEach((song) => console.log(singer, ":", song));
}
```

- … 스프레드 연산자는 함수 선언의 마지막 매개변수에 위치
- 나머지 매개변수의 타입을 배열로 선언해서 사용

### 반환타입

- 타입스크립트는 지각적 : 함수가 반환할 수 있는 가능한 모든 값을 이해하면 함수가 반환하는 타입을 알 수 있음.

```tsx
function getSongList(songs: string[]) {
  return songs.length;
}
```

- 만약 반환타입이 여러개면, 모든 반환 타입의 유니언 타입으로 유추함

### 명시적 반환 타입

함수에서 명시적으로 선언하는 방식이 매우 유용할 때가 있음

1. 가능한 반환값이 많은 함수가 항상 동일한 타입의 값을 반환하도록 강제함
2. 타입스크립트 재귀함수의 반환타입을 통해 타입을 유추하는것을 거부함
3. 매우 큰 타입스크립트 프로젝트에서 타입스크립트 타입 검사 속도를 높일 수 있음

```tsx
//함수 반환 타입 설정
function addAtoB(a: number, b: number): number {
  return a + b;
}

//화살표 함수 반환 타입 설정
const addAtoBtoC = (a: number, b: number): number => {
  return a + b;
};
```

### 함수 타입

js는 함수를 매개변수로 넘길 수 있음. 즉 함수를 가지기 위한 매개변수 또는 변수의 타입을 선언하는 방법이 필요함

```tsx
let nothingInGivesString: () => string;
```

```tsx
let inputAndOutput: (songs: string[], count?: number) => number;
```

- 함수 타입은 다른 타입이 사용되는 모든곳에 사용될 수 있음

### 매개변수 타입 추론

- ts에서는 선언된 타입의 위치에 제공된 함수의 매개변수 타입을 유추할 수 잇음.

```tsx
let singer: (song: string) => string;

singer = function (song) {
  return song;
};
```

### void 반환 타입

일부 함수는 어떤 값도 반환하지 않음 → return문만 있는 함수, return문이 없는 함수

- void키워드를 사용해 반환값이 없는 함수의 반환 타입을 확인할 수 있음.
- void를 반환하도록 선언된 타입 위치에 전달된 함수가 반환된 모든 값을 무시하도록 설정할 때 유용
