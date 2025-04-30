import {useTilemap} from "hooks/useTilemap";
import React from "react";

export function TilemapEditor() {
  const {tilemap, setTilemap} = useTilemap();

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setTilemap(file);
  };

  return (
    <div className="tilemapEditor">
      <h3>Upload Tilemap</h3>
      <p>Transparent color: 0xFF00FF</p>
      <input onInput={handleFileUpload} type="file" accept="img/png" />
    </div>
  )
}