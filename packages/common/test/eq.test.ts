import { Eq } from '@rimbu/common';

describe('Eq', () => {
  it('objectIs', () => {
    const { areEqual: e } = Eq.objectIs;
    expect(e(1, 1)).toBe(true);
    expect(e(1, 2)).toBe(false);
    expect(e(-0, 0)).toBe(false);
  });

  it('iterableEq', () => {
    const { areEqual: e } = Eq.iterableEq();
    expect(e('', '')).toBe(true);
    expect(e('', 'a')).toBe(false);
    expect(e('a', '')).toBe(false);
    expect(e('a', 'a')).toBe(true);
    expect(e('ab', 'a')).toBe(false);
  });

  it('objectEq', () => {
    const { areEqual: e } = Eq.objectEq();

    expect(e({}, {})).toBe(true);
    expect(e({ a: 1 }, {})).toBe(false);
    expect(e({}, { a: 1 })).toBe(false);
    expect(e({ a: 1 }, { a: 1 })).toBe(true);
    expect(e({ a: 1, b: true }, { a: 1 })).toBe(false);
    expect(e({ a: 1 }, { a: 1, b: true })).toBe(false);
    expect(e({ a: 1, b: true }, { a: 1, b: true })).toBe(true);
    expect(e({ a: 1, b: true }, { b: true, a: 1 })).toBe(true);

    class O {
      constructor(readonly value: number) {}
    }

    expect(e(new O(5), new O(5))).toBe(true);
    expect(e(new O(5), new O(6))).toBe(false);
  });

  it('anyFlatEq', () => {
    const { areEqual: e } = Eq.anyFlatEq();

    expect(e(undefined, undefined)).toBe(true);
    expect(e(null, null)).toBe(true);
    expect(e(undefined, null)).toBe(false);
    expect(e(null, undefined)).toBe(false);
    expect(e(null, 'a')).toBe(false);
    expect(e('a', null)).toBe(false);
    expect(e(undefined, 'a')).toBe(false);
    expect(e('a', undefined)).toBe(false);
    expect(e(1, '1')).toBe(false);
    expect(e('1', 1)).toBe(false);
    expect(e(new Date(2020, 1, 1), new Date(2020, 1, 1))).toBe(true);
    expect(
      e(
        function t() {},
        function t() {}
      )
    ).toBe(false);
    expect(e(Object.is, Object.is)).toBe(true);
    expect(e({}, new (class Obj {})())).toBe(false);
    // flat does not compare object contents, to be safe returns false
    expect(e({}, {})).toBe(false);
    // not same constructor
    expect(e(new (class Obj {})(), new (class Obj {})())).toBe(false);

    class O {
      constructor(readonly v: number) {}
    }

    // same constructor but flat does not compare contents
    expect(e(new O(1), new O(1))).toBe(false);
    // because toString gives [object object], this will be true
    // expect(e(new O(1), new O(2))).toBe(false);
  });

  it('anyShallowEq', () => {
    const { areEqual: e } = Eq.anyShallowEq();

    expect(e([], [])).toBe(true);
    expect(e([1, 2], [1, 2])).toBe(true);
    expect(e([1, 2], [1, 3])).toBe(false);
    expect(e([1], [1, 3])).toBe(false);
    expect(e({}, { a: 1 })).toBe(false);
    expect(e({ a: 1 }, { a: 1 })).toBe(true);
    // shallow only checks one level deep, to be safe will return false for deeper nested objects
    expect(e({ a: 1, b: { c: 4 } }, { a: 1, b: { c: 4 } })).toBe(false);
    expect(e({ a: 1, b: { c: 4 } }, { a: 1, b: { c: 5 } })).toBe(false);
    expect(e(1, 2)).toBe(false);
    expect(e(2, 2)).toBe(true);
    expect(e(undefined, undefined)).toBe(true);
    expect(e('a', 'a')).toBe(true);
    expect(e('a', 'b')).toBe(false);
    expect(e(Symbol('a'), Symbol('a'))).toBe(false);

    class O {
      constructor(readonly v: number) {}
    }

    // same constructor
    expect(e(new O(1), new O(1))).toBe(true);
  });

  it('anyDeepEq', () => {
    const { areEqual: e } = Eq.anyDeepEq();

    expect(e([[[]]], [[]])).toBe(false);
    expect(e([[[1, 2]]], [[[[1, 3]]]])).toBe(false);
    expect(e([[[1, 2], [3]]], [[[1, 2]]])).toBe(false);
    expect(e([[[1, 2], [3]], [4]], [[[1, 2], [3]], [4]])).toBe(true);
  });

  it('dateEq', () => {
    const { areEqual: e } = Eq.dateEq();
    expect(e(new Date(2020, 1, 1), new Date(2020, 1, 1))).toBe(true);
    expect(e(new Date(2020, 1, 1), new Date(2020, 2, 1))).toBe(false);
    const d = new Date(2020, 1, 1);
    expect(e(d, d)).toBe(true);
  });

  it('valueOfEq', () => {
    const { areEqual: e } = Eq.valueOfEq();
    expect(e(new Date(2020, 1, 1), new Date(2020, 1, 1))).toBe(true);
    expect(e(new Date(2020, 1, 1), new Date(2020, 2, 1))).toBe(false);
    expect(e(new Boolean(true), new Boolean(false))).toBe(false);
    expect(e(new Boolean(true), new Boolean(true))).toBe(true);
    expect(e(new Boolean(true), new String(true))).toBe(false);
  });

  it('iterableEq', () => {
    const { areEqual: e } = Eq.iterableEq();
    expect(e('', '')).toBe(true);
    expect(e('', 'a')).toBe(false);
    expect(e('a', '')).toBe(false);
    expect(e('a', 'a')).toBe(true);
    expect(e('ab', 'a')).toBe(false);
  });

  it('iterableEq with item', () => {
    const { areEqual: e } = Eq.iterableEq(Eq.dateEq());
    expect(e([], [])).toBe(true);
    expect(e([new Date(2020, 1, 1)], [])).toBe(false);
    expect(e([], [new Date(2020, 1, 1)])).toBe(false);
    expect(
      e([new Date(2020, 1, 1), new Date(2020, 1, 1)], [new Date(2020, 1, 1)])
    ).toBe(false);
    expect(
      e([new Date(2020, 1, 1)], [new Date(2020, 1, 1), new Date(2020, 1, 1)])
    ).toBe(false);
    expect(
      e(
        [new Date(2020, 1, 1), new Date(2020, 2, 1)],
        [new Date(2020, 2, 1), new Date(2020, 1, 1)]
      )
    ).toBe(false);
    expect(
      e(
        [new Date(2020, 1, 1), new Date(2020, 2, 1)],
        [new Date(2020, 1, 1), new Date(2020, 2, 1)]
      )
    ).toBe(true);
  });

  it('tupleSymmetric', () => {
    const { areEqual: e } = Eq.tupleSymmetric();
    expect(e([1, 1], [1, 1])).toBe(true);
    expect(e([1, 2], [1, 2])).toBe(true);
    expect(e([1, 2], [2, 1])).toBe(true);
    expect(e([1, 2], [3, 1])).toBe(false);
    expect(e([1, 2], [2, 2])).toBe(false);
  });

  it('tupleSymmetric nested', () => {
    const { areEqual: e } = Eq.tupleSymmetric(Eq.tupleSymmetric());

    expect(
      e(
        [
          [1, 1],
          [1, 1],
        ],
        [
          [1, 1],
          [1, 1],
        ]
      )
    ).toBe(true);

    expect(
      e(
        [
          [1, 2],
          [1, 1],
        ],
        [
          [1, 2],
          [1, 1],
        ]
      )
    ).toBe(true);

    expect(
      e(
        [
          [1, 2],
          [1, 1],
        ],
        [
          [1, 1],
          [2, 1],
        ]
      )
    ).toBe(true);

    expect(
      e(
        [
          [1, 2],
          [1, 1],
        ],
        [
          [1, 1],
          [3, 1],
        ]
      )
    ).toBe(false);
  });
});
