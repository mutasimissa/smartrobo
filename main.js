import { Robot } from "./lib/SmartRobo/Robot.class.js";

(function () {
  const robot = new Robot();
  robot.reset({
    length: "3",
    depth: -1,
    position: {
      x: 1,
      y: "1",
      direction: "N",
    },
  })
  console.log(robot.status)
  robot.move(["R", "f","r", "F", "L", "w", "l","F","F","F","F","F","F","F","F","F","F","r","F","F","F","F","F","F","F"]);
  console.log(robot.status)
})();
