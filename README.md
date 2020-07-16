# Motivation
This is really a small personal project I started to generate an importable calendar from a strictly formatted CSV. I built this to be very lightweight however I have made lots of assumptions to increase the simplicity. I could try and list the things this tool does and does not do however I will try and explain it with a single sentence:

***You will find this tool useful if you have a strictly formatted CSV file containing a list of shifts that fit into a single day window.***

# Getting Started
## Installation
```bash
npm i
```
```bash
npm run compile
```
## Usage
The tools requires two arguments to be passed:
- eventName - This is the 'summary' name seen in the calendar.
- shiftFile - The input file to read shift data from.
```bash
node build/src/index.js \
  --eventName="Work Shift" \
  --shiftFile=./sample/input.csv
```

This will output the ICS file to your console. Alternatively you can provide the `--outFile` option to output the result to a file like so:
```bash
node build/src/index.js \
  --eventName="Work Shift" \
  --shiftFile=./sample/input.csv \
  --outFile=./sample/output.ics
```