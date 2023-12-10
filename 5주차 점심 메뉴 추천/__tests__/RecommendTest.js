import Recommend from '../src/domains/Recommend.js';
import { RECOMMEND_DAY } from '../src/constants/constant.js';

describe('Recommend 클래스', () => {
  let recommend;

  beforeEach(() => {
    recommend = new Recommend();
  });

  describe('카테고리 추천 기능 테스트', () => {
    test('각 조건에 유효한 카테고리 배열을 반환하는지 테스트', () => {
      const result = recommend.getRecommendCategories();

      // 검증 1: 반환된 값은 배열이어야 함
      expect(Array.isArray(result)).toBeTruthy();

      // 검증 2: 반환된 배열의 길이는 RECOMMEND_DAY 상수의 길이와 일치해야 함
      expect(result.length).toEqual(RECOMMEND_DAY.length);
    });
  });

  describe('메뉴 추천 기능 테스트', () => {
    test('각 조건에 유효한 메뉴 배열을 반환하는지 테스트', () => {
      const hateMenus = ['라면', '김밥'];
      const result = recommend.getRecommendMenus(hateMenus);

      // 검증 1: 반환된 값은 배열이어야 함
      expect(Array.isArray(result)).toBeTruthy();

      // 검증 2: 반환된 배열의 길이는 RECOMMEND_DAY 상수의 길이와 일치해야 함
      expect(result.length).toEqual(RECOMMEND_DAY.length);

      // 검증 3: 추천 메뉴에는 싫어하는 메뉴가 포함되어 있으면 안 됨
      hateMenus.forEach((hatedMenu) => {
        expect(result).not.toContain(hatedMenu);
      });

      // 검증 4: 반환된 배열에 중복된 메뉴가 없어야 함
      const uniqueResult = new Set(result);

      expect(uniqueResult.size).toEqual(result.length);
    });

    test('싫어하는 메뉴가 없을 경우에도 정상적으로 동작하는지 테스트', () => {
      const result = recommend.getRecommendMenus([]);

      expect(Array.isArray(result)).toBeTruthy();
      expect(result.length).toEqual(RECOMMEND_DAY.length);

      const uniqueResult = new Set(result);

      expect(uniqueResult.size).toEqual(result.length);
    });
  });
});
