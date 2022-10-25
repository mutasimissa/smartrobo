import { Robot } from "./lib/SmartRobo/Robot.class.js";

(function () {
  const robot = new Robot();
  // robot.reset({
  //   length: "3",
  //   depth: -1,
  //   position: {
  //     x: 4,
  //     y: "1",
  //     direction: "W",
  //   },
  // })
  console.log(robot.status)
  robot.move(["R", "f","r", "F", "L", "w", "l","F","r"]);
  console.log(robot.status)
})();
