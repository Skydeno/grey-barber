import images from './images';

const master = [
  {
    title: 'Combo Master Barber',
    price: '110 PLN',
    tags: 'Strzyżenie włosów | Strzyżenie brody | Mycie | Modelowanie | Regulacja brwi | Gorący ręcznik',
  },
  {
    title: 'Combo Tata & Syn',
    price: '140 PLN',
    tags: 'Combo Master Tata | Strzyżenie Syna',
  },
  {
    title: 'Luxury Combo',
    price: '190 PLN',
    tags: 'Strzyżenie włosów | Strzyżenie brody | Mycie | Modelowanie | Woskowanie nosa i brwi | Black mask | peeling | Wapozon',
  },
  {
    title: 'Luxury SPA',
    price: '210 PLN',
    tags: 'Strzyżenie włosów | Strzyżenie brody | Mycie | Modelowanie | Woskowanie nosa i brwi | Black mask | peeling | Wapozon | Masaż',
  },
  {
    title: 'Combo Friends',
    price: '190 PLN',
    tags: 'Podwójne strzyżenie włosów | Podwójne strzyżenie brody | Podwójne mycie | Podwójne modelowanie ',
  },
];

const junior = [
  {
    title: 'Combo Junior',
    price: '80 PLN',
    tags: 'Strzyżenie włosów | Strzyżenie brody | Mycie | Modelowanie | Regulacja brwi | Gorący ręcznik',
  },
  {
    title: "Strzyżenie Włosów",
    price: '50 PLN',
    tags: 'Strzyżenie włosów | Mycie | Modelowanie',
  },
  {
    title: 'Strzyżenie Brody',
    price: '40 PLN',
    tags: 'Strzyżenie brody | Kawa ',
  },
];

const others = [
  {
    title: 'Strzyżenie brody',
    price: '60 PLN',
    tags: 'Mistrz',
  },
  {
    title: 'Strzyżenie dziecka do 12lat',
    price: '60 PLN',
    tags: 'Mistrz',
  },
  {
    title: 'Strzyżenie Włosów',
    price: '70 PLN',
    tags: 'Mistrz | Strzyżenie włosów | Mycie | Modelowanie',
  },
  {
    title: 'Strzyżenie nożyczkami',
    price: '80 PLN',
    tags: 'Mistrz | Strzyżenie włosów | Mycie | Modelowanie',
  },
  {
    title: 'Tata & Syn',
    price: '110 PLN',
    tags: 'Mistrz | Strzyżenie Taty | Strzyżenie Syna',
  },
  {
    title: 'Woskowanie',
    price: '30 PLN',
    tags: 'Woskowanie uszy | Woskowanie nos',
  },
  {
    title: 'Odsiwianie',
    price: '80 PLN',
    tags: ' ',
  },
  {
    title: 'SPA',
    price: '70 PLN',
    tags: 'Black mask | Peeling',
  },
]

const awards = [
  {
    imgUrl: images.award02,
    title: 'Bib Gourmond',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award01,
    title: 'Rising Star',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award05,
    title: 'AA Hospitality',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award03,
    title: 'Outstanding Chef',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
];

export default { master, junior, others, awards };
