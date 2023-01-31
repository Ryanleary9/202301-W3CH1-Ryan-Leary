import { Personas } from '../src/function';

describe('Given Personas class', () => {
  const r = new Personas('Juan', 'monkey', 32, true);
  test('When entered the names should give back the names in order', () => {
    expect(r).toHaveProperty('names');
    expect(r).toHaveProperty('bloodline');
    expect(r).toHaveProperty('age');
    expect(r).toHaveProperty('life');
  });
});
