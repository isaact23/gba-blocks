import {useState} from 'react';
import {GbaClass} from 'classes/gbaClass';

export function useClasses() {
  const [classes, setClasses] = useState([]);

  const createClass = (name) => {
    let gbaClass = new GbaClass(name);
    setClasses(classes.concat(gbaClass));
  }

  return {classes, createClass};
}
