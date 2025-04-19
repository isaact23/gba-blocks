import React from 'react';
import './TilemapUpload.css';
import {useTilemap} from 'hooks/useTilemap';

export function TilemapUpload() {
  const {tilemap, setTilemap} = useTilemap();

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setTilemap(file);
  };

  return (
    <div className="utilitySubPanel">
      <h3>Upload Tilemap</h3>
      <p>Transparent color: 0xFF00FF</p>
      <input onInput={handleFileUpload} type="file" accept="img/png" />
    </div>
  );
}