export const data = [
  {
    name: "Miód prosto z pasieki",
    description:
      "W naszym gospodarstwie prowadzimy dużą pasiekę, dzięki czemu możemy zaoferować państwu najwyższej klasy miody, latem wielokwiatowe, a jesienią wyjątkowo cenne miody spadziowe. Niezapomnianym doznaniem może być posmakowanie miodu prosto z plastra, a zainteresowani mogą uczestniczyć w pracach pszczelarskich i dowiedzieć się wielu zadziwiających informacji z życia pszczół.",
    photoSrc: "/photos/attractions/beeyard-2-x0.25.jpg",
  },
  {
    name: "Dary natury",
    description:
      "W naszym gosdpodarstwie posiadamy małą winnicę i jagodnik z borówką amerykańską, z których owoce będą doskonałym deserem, a jaja od naszych kur w dodatkiem szczypiorku i cebulki z naszego warzywniaka to idealny pomysł na wiejskie śniadanie.",
    photoSrc: "/photos/attractions/winery-1-x0.25.jpg",
  },
  {
    name: "Grill z pstrągiem w roli głównej",
    description: `Nad naszym stawem zorganizowaliśmy miejsce na ognisko i grila, gdzie w każdej chwili można rozpalić ogień a w wakacje i jesienią usmażyć własnoręcznie złowionego u nas pstrąga.`,
    photoSrc: "/photos/attractions/lake-6.jpg",
  },
  {
    name: "Wypoczynek na łonie natury",
    description:
      "Oddalenie naszego gospodarstwa od centrum Wysowej, zdala od głównych dróg i szlaków komunikacyjnych spawia że panują u nas idealne warunki do wyciszenia się, wsłuchania się we własne myśli, kontenplacji i odnowy sił mentalnych. W ciszy i spokoju, siedząc na słonecznym tarasie, nad stawem lub w cieniu brzóz można poczytać książkę czy też ukoić zmysły wsłuchując się w dźwięki natury.",
    photoSrc: "/photos/attractions/backyard-6-x0.25.jpg",
  },
  {
    name: "Aktywny wypoczynek",
    description:
      "Położenie naszego gospodarstwa sprawia że jest idealną bazą wypadową na szlaki piesze i rowerowe po Beskidzie Niskim i Sądeckim, nieopodal biegnie ścieżka nordic walking. Duży ogród pozwala na zagranie w siatkówkę, badminktona lub pokopanie w piłkę. W Wysowej znajduje się kryty basen, park zdrojowy, „ścieżki zdrowia”",
    photoSrc: "/photos/attractions/backyard-1-x0.25.jpg",
  },
  {
    name: "Raj dla miłośników przyrody",
    description:
      "Przyroda Beskidu niskiego jest jeszcze na tyle nienaruszona ludzką ręką, że bez trudu można tu spotkać rzadkie zwierzęta i rośliny. Mnogość gatunków ptaków wręcz powala, a takie zagrożone gatunki jak dziewięćsił czy nadobnica alpejska to tutaj rzecz pospolita. Otaczające nas zewsząd lasy obfitują w grzyby, maliny, poziomki i czenice. Wrześniową porą pojedynek na głosy prowadzą nieustannie cykające świerszcze z donośnie ryczącymi bykami jeleni. Nierzadko zawitają w te tereny także wilki, a okoliczne potoki poprzerywane są żeremiami bobrowymi. To raz zakuka kukułka, pohuknie sowa, zabzyczy pszczoła, zarechota kumak górski albo zasyczy zaskroniec. W stawie pływają pstrągi tęczowe, których dokarmianie dostarczy wielu wrażeń.",
    photoSrc: "/photos/attractions/beaver-2-x0.25.jpg",
  },
];

type Lens<T> = {};

type Index = <T>(index: number) => (xs: T[]) => T;
type Find = <T>(f: (x: T) => boolean) => (xs: T[]) => T;
type Path = <T>(x: keyof T) => (x: T) => T[keyof T];
type ValueOr = <T>(x: T) => (x: T) => T;

const index: Index = i => xs => xs[i];
const find: Find = f => xs => xs.find(f);
const prop: Path = p => x => x[p];
const valueOr: ValueOr = x1 => x2 => x1;

function compose<A, B, C>(f: (x: A) => B, g: (x: B) => C): (x: A) => C
function compose<A, B, C, D>(
  f: (x: A) => B,
  g: (x: B) => C,
  h: (x: C) => D,
): (x: A) => D
function compose<A, B, C, D, E>(
  f: (x: A) => B,
  g: (x: B) => C,
  h: (x: C) => D,
  i: (x: D) => E,
): (x: A) => E
function compose<T>(...fns: ((x: T) => T)[]): (x: T) => T {
  return (x: T) => fns.reduce((prev, fn) => fn(prev), x);
}

const findA: (xs: [{ a: number }]) => number = compose(index(1), x => x.a);
const findB: (xs: [{ a: number }]) => number = compose(
  find(x => x.a == 0),
  x => x.a,
);
const findC: (xs: [{ a: number }]) => number = compose(
  find(x => x.a == 0),
  prop("a"),
);

type Model = {
  titles: Array<
    {
      language: string;
      text: string;
    }
  >;
};
const model = {
  titles: [
    { language: "en", text: "New title" },
    { language: "sv", text: "Rubrik" },
  ],
};

const textIn: (language: string) => (m: Model) => string = language =>
  compose(
    prop("titles"),
    find(x => x.language === language),
    valueOr({ language, text: "" }),
    prop("text"),
  );

textIn("en")(model);

type Get = <A, B>(f: (a: A) => B, a: A) => B;
type Set = <A, B>(f: (a: A) => B, b: B, A: A) => A;

const get: Get = (f, a) => f(a);
const set: Set = (f, b, a) => a;

get(textIn("en"), model);
set(textIn("en"), "lol", model);


set(textIn("pl"), "Tytuł", model);