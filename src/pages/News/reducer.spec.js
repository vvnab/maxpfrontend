// import * as t from './actionTypes';
const sum = (a, b) => {
  return a + b;
}

describe('News TEST`s', () => {
  it('1-st', () => {
    expect(sum(1, 2)).toEqual(3);
  })
})