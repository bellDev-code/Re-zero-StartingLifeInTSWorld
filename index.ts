import readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", async function (line) {
  await execSolve(line);
  rl.close();
});

rl.on("close", function () {
  process.exit();
});

async function execSolve(input: string) {
  const solve = await import("./solve");

  const solveFunc: (...args: any) => any = solve.default;
  return solveFunc(input);
}