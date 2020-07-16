export enum ARG_NAMES {
  EVENT_NAME = 'eventName',
  SHIFT_FILE = 'shiftFile',
  OUT_FILE = 'outFile',
}

export const parseArgs = (args: string[]): Map<string, string> => {
  const argMap = new Map();

  if (args.length === 0) return argMap;

  // Only support format --argKey=argValue
  args.forEach(arg => {
    const [key, value] = arg.split('=');

    if (key && value) {
      const trimmedKey = key.slice(0, 2) === '--' ? key.slice(2) : key;

      argMap.set(trimmedKey, value);
    }
  });

  return argMap;
};

export const checkArgs = (argMap: Map<string, string>): void => {
  if (!argMap.has(ARG_NAMES.EVENT_NAME)) throw 'Must pass eventName arg.';
  if (!argMap.has(ARG_NAMES.SHIFT_FILE)) throw 'Must pass shiftFile arg.';
};
