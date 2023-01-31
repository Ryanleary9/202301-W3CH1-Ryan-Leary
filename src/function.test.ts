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

// Describe('Given king rank class', () => {
//   const r = new KingRank(
//     'Pedro',
//     'Malahierba',
//     51,
//     true,
//     14,
//     'Vais a morir todos'
//   );
//   test('When given king rank to someone he gets all of the properties', () => {
//     expect(r).toHaveProperty('names');
//     expect(r).toHaveProperty('bloodline');
//     expect(r).toHaveProperty('age');
//     expect(r).toHaveProperty('life');
//     expect(r).toHaveProperty('reitime');
//     expect(r).toHaveProperty('message');
//   });
// });a
