import { EventEmitter } from "events";

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();

const event = "user:click";

myEmitter.on(event, (click) => console.log("the user clicked", click));
myEmitter.emit(event, "on ok");
myEmitter.emit(event, "on scroll bar");

let counter = 0;
while (counter < 10) {
  counter++;
  myEmitter.emit(event, "on ok " + counter);
}

const stdin = process.openStdin();

const main = () => {
  return new Promise((resolve, reject) => {
    stdin.addListener("data", (data) => {
      // console.log(`You typed: ${data.toString().trim()}`);
      return resolve(data);
    });
  });
};

// let flag = 1;

// const capture = () => {
//   stdin.addListener("data", (data) => {
//     flag = data.toNumber().trim();
//     return flag;
//   });
// };

// while (flag != 0) {
// }

main().then((result) => {
	console.log("resultado: ", result.toString());
});