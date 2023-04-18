function sing(song: string) {
  console.log(`Singing: ${song}!`);
}

function announceSong(song: string, singer?: string) {
  console.log(`Song: ${song}!`);

  if (singer) {
    console.log(`Singer: ${singer}!`);
  }
}

function rateSong(song: string, rating = 0) {
  console.log(`song : ${song}, score : ${rating}`);
}

function singAllTheSong(singer: string, ...songs: string[]) {
  songs.forEach((song) => console.log(singer, ":", song));
  return songs.length;
}

function getSongList(songs: string[]) {
  return songs.length;
}

//함수 반환 타입 설정
function addAtoB(a: number, b: number): number {
  return a + b;
}

//화살표 함수 반환 타입 설정
const addAtoBtoC = (a: number, b: number): number => {
  return a + b;
};

let singer: (song: string) => string;
singer = function (song) {
  return song;
};
