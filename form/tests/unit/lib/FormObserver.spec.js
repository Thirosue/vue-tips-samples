import { FormObserver } from '@/lib';

describe('FormObserver', () => {
  const names = ['item1', 'item2'];
  let formObserver;
  beforeEach(() => {
    formObserver = new FormObserver(names);
  });

  it('constructor', () => {
    expect.assertions(names.length * 2 + 2);

    expect(formObserver._names).toBe(names);
    expect(formObserver.hasError).toBe(true);
    Object.keys(formObserver._results).forEach(name => {
      expect(names.includes(name)).toBe(true);
      expect(formObserver._results[name]).toBe(false);
    });
  });

  it('setResult', () => {
    const targetName = names[0];
    formObserver.setResult(targetName, true);

    expect(formObserver._results[targetName]).toBe(true);
  });

  it('全ての要素の結果がtrue', () => {
    for (const name of names) {
      formObserver.setResult(name, true);
    }

    expect(formObserver.hasError).toBe(false);
  });

  it('1つがtrueでもう1つがfalse', () => {
    formObserver.setResult(names[0], true);
    formObserver.setResult(names[1], false);

    expect(formObserver.hasError).toBe(true);
  });

  it('1つがfalseでもう1つがtrue', () => {
    formObserver.setResult(names[0], false);
    formObserver.setResult(names[1], true);

    expect(formObserver.hasError).toBe(true);
  });
});
