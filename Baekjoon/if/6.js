const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];

rl.on('line', function (line) {
  input.push(line)
}).on('close', function () {
  const [time, cookMinutesInput] = input;

  const [a, b] = time.split(" ")
  if (typeof a === 'undefined' || typeof b === 'undefined') return console.log("")


  const oriHour = parseInt(a);
  const oriMinutes = parseInt(b)

  const cookMinutes = parseInt(cookMinutesInput)


  const addHour = Math.floor(cookMinutes / 60);
  const addMinutes = cookMinutes % 60;
  
  let hour = (oriHour + addHour) % 24;
  let minutes = oriMinutes;

  if (oriMinutes + addMinutes > 60) {
    hour++;

    const remain =  oriMinutes + addMinutes - 60
    minutes = remain;
  } else {
    minutes += addMinutes
  }

  // 1000분이 16시간 40분  960 + 40   31 10
  console.log(`${hour} ${minutes}`)

  process.exit();
});