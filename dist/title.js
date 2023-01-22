import chalkAnimation from "chalk-animation";
const sleep = (ms = 1000) => new Promise((r) => setTimeout(r, ms));
async function title() {
    const rainbowTitle = chalkAnimation.rainbow('TSMake');
    await sleep();
    rainbowTitle.stop();
}
export default title;
