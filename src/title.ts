import chalkAnimation from "chalk-animation";
import figlet from "figlet";

const sleep = (ms = 2000) => new Promise((r) => setTimeout(r, ms));

async function title() {
  const rainbowTitle = chalkAnimation.rainbow('Fast Typescript Project Generator');

  await sleep();
  rainbowTitle.stop();

  figlet("TSMake", function (err, data) {
    if (err) {
      console.log("Something went wrong...");
      console.dir(err);
      return;
    }
    console.log(data);
  });
}

export default title;
