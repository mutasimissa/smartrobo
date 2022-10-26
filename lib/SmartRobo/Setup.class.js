import { Utility } from "./Utility.class.js";

const utility = new Utility();

export class Setup {
  constructor(params = {}) {
    this.params = { ...params };
    let length = utility.isPositiveInt(this.params.length)
      ? this.params.length
      : 10;
    let depth = utility.isPositiveInt(this.params.depth)
      ? this.params.depth
      : 10;
    let position = {
      x: utility.isPositiveIntNotMoreThan(this.params.position?.x, length)
        ? this.params.position?.x
        : 1,
      y: utility.isPositiveIntNotMoreThan(this.params.position?.y, depth)
        ? this.params.position?.y
        : 1,
      direction: utility.isDirectionLetter(this.params.position?.direction)
        ? this.params.position?.direction
        : "N",
    };
    return {
      length,
      depth,
      position,
    };
  }
}
