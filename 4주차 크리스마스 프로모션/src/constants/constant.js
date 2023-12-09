const CALENDAR = Object.freeze({
  weekend: [1, 2, 8, 9, 15, 16, 22, 23, 29, 30],
  special: [3, 10, 17, 24, 25, 31],
  christmas: 25,
});

const CATEGORY = Object.freeze({
  appetizer: '애피타이저',
  main: '메인',
  dessert: '디저트',
  drink: '음료',
});

const MENU = Object.freeze({
  [CATEGORY.appetizer]: [
    {
      menu: '양송이수프',
      prize: 6_000,
    },
    {
      menu: '타파스',
      prize: 5_500,
    },
    {
      menu: '시저샐러드',
      prize: 8_000,
    },
  ],

  [CATEGORY.main]: [
    {
      menu: '티본스테이크',
      prize: 55_000,
    },
    {
      menu: '바비큐립',
      prize: 54_000,
    },
    {
      menu: '해산물파스타',
      prize: 35_000,
    },
    {
      menu: '크리스마스파스타',
      prize: 25_000,
    },
  ],

  [CATEGORY.dessert]: [
    {
      menu: '초코케이크',
      prize: 15_000,
    },
    {
      menu: '아이스크림',
      prize: 5_000,
    },
  ],

  [CATEGORY.drink]: [
    {
      menu: '제로콜라',
      prize: 3_000,
    },
    {
      menu: '레드와인',
      prize: 60_000,
    },
    {
      menu: '샴페인',
      prize: 25_000,
    },
  ],
});

export { CALENDAR, MENU, CATEGORY };
