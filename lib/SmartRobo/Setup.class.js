import { Utility } from "./Utility.class.js";

const utility = new Utility();

export class Setup {
  constructor(params = {}) {
    this.params = { ...params };
    let length = parseInt(this.params.length);
    if (!length || !(length > 1)) {
      length = 10;
    }

    let depth = parseInt(this.params.depth);
    if (!depth || !(depth > 1)) {
      depth = 10;
    }
    let posX = parseInt(this.params.position?.x);
    if (
      !this.params.position?.x ||
      !(this.params.position?.x > 1) ||
      this.params.position?.x > length
    ) {
      posX = 1;
    }
    let posY = parseInt(this.params.start?.x);
    if (
      !this.params.position?.y ||
      !(this.params.position?.y > 1) ||
      this.params.position?.x > depth
    ) {
      posY = 1;
    }
    const position = {
      x: posX,
      y: posY,
      direction:  utility.isOneLetterOfRegex(this.params.position?.direction, /[E,W,N,S]/g) ? String(this.params.position?.direction).toUpperCase() : "N",
    };
    return {
      length,
      depth,
      position,
    };
  }
}
