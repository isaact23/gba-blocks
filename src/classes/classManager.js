
let classes = [];

class GbaClass {
  constructor(name) {
    this.name = name;
  }
}

export function createClass(name) {
  let gbaClass = new GbaClass(name);
  classes.push(gbaClass);
}
