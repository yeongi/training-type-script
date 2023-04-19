interface Book {
  author?: string;
  pages: number;
}

interface Page {
  readonly text: string;
}

interface HasBothFunctionsTypes {
  property: () => string;
  method(): string;
}

type FunctionAlias = (input: string) => number;

interface CallSignature {
  (input: string): number;
}

const typedFunctionAlias: FunctionAlias = (input) => input.length;

interface WordCounts {
  [i: string]: number;
}

const counts: WordCounts = {};

counts.apple = 0;
counts.banana = 1;

// counts.cherry = false;

interface HistoricalNovels {
  Oroonoko: number;
  [i: string]: number;
}

const novels: HistoricalNovels = {
  Oroonoko: 1688,
  Outlander: 1991,
};

interface MoreNarrowNumbers {
  [i: number]: string;
  [i: string]: string | undefined;
}

const mixesNumbersAndStrings: MoreNarrowNumbers = {
  0: "",
  key1: "",
  key2: "",
};

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

interface WithNullableName {
  name: string | null;
}

interface WithNonNullableName extends WithNullableName {
  name: string;
}

interface Merged {
  fromFirst: string;
}

interface Merged {
  fromSecond: number;
}

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
