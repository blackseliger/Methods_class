import Character from '../app';

describe('check class Character', () => {
  test('check return this of Character', () => {
    const expected = {
      level: 2,
      attack: 12,
      defence: 12,
      health: 100,
    };
    const test1 = new Character(1, 10, 10, 20);
    test1.levelup();
    const received = test1;
    expect(received).toEqual(expected);
  });
  test('check return Error if health = 0', () => {
    const test1 = new Character(1, 10, 10, 0);
    const received = test1.levelup();
    expect(received).toThrowError('Character has dead :(');
  });
});
