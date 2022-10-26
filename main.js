import { Robot } from "./lib/SmartRobo/Robot.class.js";

(function () {
  const robot = new Robot();
  robot.reset({
    length: 100,
    depth: 100,
    position: {
      x: 50,
      y: 6,
      direction: "W",
    },
  })
  console.log(robot.status)
  robot.move(["R", "f","r", "F", "L", "w", "l","F","F","F","F","F","F","F","F","F","F","r","F","F","F","F","F","F","F"]);
  robot.move(["R", "f","r", "F", "L", "w", "l","F","F","F","F","F","F","F","F","F","F","r","F","F","F","F","F","F","F"]);
  robot.move(["R", "f","r", "F", "L", "w", "l","F","F","F","F","F","F","F","F","F","F","r","F","F","F","F","F","F","F"]);
  robot.move(["R", "f","r", "F", "L", "w", "l","F","F","F","F","F","F","F","F","F","F","r","F","F","F","F","F","F","F"]);
  robot.move(["R", "f","r", "F", "L", "w", "l","F","F","F","F","F","F","F","F","F","F","r","F","F","F","F","F","F","F"]);
  robot.move(["R", "f","r", "F", "L", "w", "l","F","F","F","F","F","F","F","F","F","F","r","F","F","F","F","F","F","F"]);
  console.log(robot.status)
})();
