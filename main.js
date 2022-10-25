import { Robot } from "./lib/SmartRobo/Robot.class.js";

(function () {
  const robot = new Robot();
  robot.reset({
    length: "3",
    depth: -1,
    position: {
      x: 4,
      y: "1",
      z: "ABE",
    },
  })
  robot.move(["R", "R", "F", "L"]);
  console.log(robot.status)
})();
