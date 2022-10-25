export class Setup {
  constructor(params = {}) {
    this.params = {...params};
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
    let posZ = this.params.position?.z;
    if (
      !(
        this.params.position?.z.length === 1 &&
        this.params.position?.z.toUpperCase() !==
          this.params.position?.z.toLowerCase() &&
        this.params.position?.z.toUpperCase().match(/[E,W,N,S]/g)
      )
    ) {
      posZ = "N";
    }
    const position = {
      x: posX,
      y: posY,
      z: posZ,
    };
    return {
      length,
      depth,
      position,
    };
  }
}
