export class Move {
    constructor(status, sequence = []){
        this.status = {...status}
        return this.status
    }
}