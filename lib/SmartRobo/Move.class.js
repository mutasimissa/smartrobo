import { Utility } from "./Utility.class.js";
const util = new Utility()
export class Move {
  constructor(status, sequence = []) {
    this.status = { ...status };
    this.sequence = sequence.filter((step) => util.isOneLetterOfRegex(String(step), /[L,R,F]/g));
    console.log(this.sequence)
    return this.status;
  }
}
