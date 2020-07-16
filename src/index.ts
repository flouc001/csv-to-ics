import {parseArgs, checkArgs, ARG_NAMES} from './args';
import {readFileAsync, writeFileAsync} from './utils';
import {parseInput} from './input';
import {parseToCal} from './cal';

async function main(argMap: Map<string, string>): Promise<void> {
  try {
    checkArgs(argMap);
    const eventName = argMap.get(ARG_NAMES.EVENT_NAME) || '';
    const shiftFilepath = argMap.get(ARG_NAMES.SHIFT_FILE) || '';
    const shiftDataBuffer = await readFileAsync(shiftFilepath);
    const shifts = parseInput(shiftDataBuffer.toString());
    const output = parseToCal(eventName, shifts);
    const outputFilepath = argMap.get(ARG_NAMES.OUT_FILE);
    if (outputFilepath) await writeFileAsync(outputFilepath, output);
    else console.log(output);
  } catch (err) {
    if (typeof err === 'string') console.error(`[ERROR]: ${err}`);
    else console.error(err);
    return;
  }
}

const args = parseArgs(process.argv.slice(2));

main(args);
