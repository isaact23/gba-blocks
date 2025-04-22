import {useState} from 'react';
import {GbaClass} from 'classes/gbaClass';

export function useClasses() {
  const [classes, setClasses] = useState([]);

  // Determine if a class name is already taken.
  const nameTaken = (name) => {
    console.log("Is name taken " + name);
    for (let item of classes) {

      if (item.getName().toLowerCase().trim() === name.toLowerCase().trim()) {
        console.log("They equal!");
        return true;
      }
    }
    return false;
  }

  const createClass = (name) => {
    if (nameTaken(name)) {
      throw new Error(`Class name already taken`);
    }

    let gbaClass = new GbaClass(name);
    setClasses(classes.concat([gbaClass]));
  }

  return {classes, createClass};
}
