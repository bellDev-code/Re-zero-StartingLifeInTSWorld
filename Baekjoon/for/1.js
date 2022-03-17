import readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("close", function () {
  process.exit();
});

function question(query: string = "") {
  return new Promise<string>(function (resolve) {
    rl.question(query, function (input) {
      resolve(input);
    });
  });
}

function solution(inputs: string[]) {
  console.log(inputs);
}

async function exec() {
  const inputCount = parseInt(await question(""), 10);

  if (isNaN(inputCount)) throw new Error("first input should be number");

  const cases = [];
  for (let i = 0; i < inputCount; i++) {
    cases.push(await question());
  }

  solution(cases);
  process.exit();
}

exec();