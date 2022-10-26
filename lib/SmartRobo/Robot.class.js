import { Setup } from "./Setup.class.js";
import { Move } from "./Move.class.js";

export class Robot {
  constructor(params = {}) {
    this.status = new Setup({ ...params });
  }
  reset = (params = {}) => (this.status = new Setup({ ...params }));
  move = (sequence = []) => (this.status = new Move(this.status, sequence));
}
