import {convertImage} from './imageConverter';

const tilemapFile = document.getElementById('tilemapFile');
let tilemapData = undefined;

export function isTilemapLoaded() {
  return tilemapData !== undefined;
}

export function getTilemapString() {
  return tilemapData;
}

// Update code when tilemap changes
tilemapFile.addEventListener("change", async (e) => {
  const tilemap = document.getElementById('tilemapFile');
  const img = tilemap.files[0];
  if (img !== undefined) {
    const conversion = await convertImage(img);
    tilemapData = conversion.source;
  } else {
    tilemapData = undefined;
  }

  //runCode();
});
