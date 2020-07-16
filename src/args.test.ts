import {parseArgs, ARG_NAMES, checkArgs} from './args';

describe('parseArgs', () => {
  it('should return an empty map if no args are passed', () => {
    const emptyArgsArray: string[] = [];
    const argsMap = parseArgs(emptyArgsArray);
    expect(argsMap.size).toBe(0);
  });

  it('should return a key-value map of correctly formatted args', () => {
    const key = 'eventName';
    const value = 'Shift';
    const argsArray = [`--${key}=${value}`];
    const argsMap = parseArgs(argsArray);
    expect(argsMap.has(key)).toBe(true);
    expect(argsMap.get(key)).toBe(value);
  });

  it('should ignore an arg if it does not have a key and a value', () => {
    const key = 'eventName';
    const argsArray = [`--${key}`];
    const argsMap = parseArgs(argsArray);
    expect(argsMap.has(key)).toBe(false);
  });

  it('should accept a key even if it is not prefixed with --', () => {
    const key = 'eventName';
    const value = 'Shift';
    const argsArray = [`${key}=${value}`];
    const argsMap = parseArgs(argsArray);
    expect(argsMap.has(key)).toBe(true);
    expect(argsMap.get(key)).toBe(value);
  });
});

describe('checkArgs', () => {
  it('should return an error if eventName is missing', () => {
    const parsedArgs = new Map();
    expect(() => checkArgs(parsedArgs)).toThrow();
  });

  it('should throw an error if shiftFile is missing', () => {
    const parsedArgs = new Map([[ARG_NAMES.EVENT_NAME, 'testName']]);
    expect(() => checkArgs(parsedArgs)).toThrow();
  });

  it('should run without throwing if eventName and shiftFile are defined', () => {
    const parsedArgs = new Map([
      [ARG_NAMES.EVENT_NAME, 'someName'],
      [ARG_NAMES.SHIFT_FILE, 'someFilePath/file.txt'],
    ]);
    expect(() => checkArgs(parsedArgs)).not.toThrow();
  });
});
