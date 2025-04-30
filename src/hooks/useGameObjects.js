import {useState} from 'react';
import {GameObject} from 'classes/gameObject';
export function useGameObjects() {
  const [gameObjects, setGameObjects] = useState([]);

  // Determine if a class name is already taken.
  const nameTaken = (name) => {
    console.log("Is name taken " + name);
    for (let item of gameObjects) {

      if (item.getName().toLowerCase().trim() === name.toLowerCase().trim()) {
        console.log("They equal!");
        return true;
      }
    }
    return false;
  }

  const createGameObject = (name) => {
    if (nameTaken(name)) {
      throw new Error(`Name already taken`);
    }

    let gameObject = new GameObject(name);
    setGameObjects(gameObjects.concat([gameObject]));
  }

  return {gameObjects, createGameObject};
}
