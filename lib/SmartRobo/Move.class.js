import { Utility } from "./Utility.class.js";
const util = new Utility();
export class Move {
  constructor(status, sequence = []) {
    this.status = status;
    this.sequence = [...sequence];
    this.sequence.forEach((command) => {
      this.status = {
        ...this.status,
        position: this.twoDeimsnionsMove(this.status, command),
      };
    });
    return this.status;
  }
  twoDeimsnionsMove = ({ length, depth, position }, command) => {
    let newPosition = { ...position };
    if (
      !util.isOneLetterOfRegex(position?.direction, /[E,W,N,S]/g) ||
      !util.isOneLetterOfRegex(command, /[L,R,F]/g)
    ) {
      return newPosition;
    }
    const getDirection = () => {
      const sortedDirections = ["N", "E", "S", "W"];
      let currentDirectionIndex = sortedDirections.indexOf(position.direction);
      if (String(command).toUpperCase() === "R") {
        currentDirectionIndex++;
        if (currentDirectionIndex > sortedDirections.length--) {
          currentDirectionIndex = 0;
        }
      }
      if (String(command).toUpperCase() === "L") {
        currentDirectionIndex--;
        if (currentDirectionIndex < 0) {
          currentDirectionIndex = sortedDirections.length--;
        }
      }
      let direction = sortedDirections[currentDirectionIndex];
      return {
        direction,
      };
    };
    const getCoordinates = () => {
      let { x, y } = position;
      if (String(command).toUpperCase() === "F") {
        const { direction } = getDirection();
        switch (direction) {
          case "N":
            y = y++ > depth ? depth : y++;
            break;
          case "S":
            y = y-- > 1 ? y-- : 1;
            break;
          case "E":
            x = x++ > length ? length : x++;
            break;
          case "W":
            x = x-- > 1 ? x-- : 1;
            break;
        }
      }
      return {
        x,
        y,
      };
    };

    newPosition = {
      ...getCoordinates(),
      ...getDirection(),
    };

    console.log(command, newPosition);
    return newPosition;
  };
}
