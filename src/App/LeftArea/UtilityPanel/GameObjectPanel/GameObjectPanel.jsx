import React from 'react';
import "./GameObjectPanel.css";
import {useGameObjects} from 'hooks';

export function GameObjectPanel() {
  const {gameObjects, createGameObject} = useGameObjects();

  const handleCreateClassBtn = () => {
    let name = window.prompt("Enter game object name", "New Game Object");
    if (name == null || name === '') {
      window.alert(`Failed to create game object: No name provided.`);
      return;
    }

    try {
      createGameObject(name);
    }
    catch (error) {
      window.alert(`Failed to create game object "${name}": ${error.message}`);
    }
  };

  return (
    <div className="utilitySubPanel">
      <h3>Game Objects</h3>
      <button onClick={handleCreateClassBtn}><p>Create new Game Object</p></button>
      {gameObjects.map(gameObject =>
        <p>{gameObject.getName()}</p>
      )}
    </div>
  )
}