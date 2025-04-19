import {useEffect, useState} from "react";
import {convertImage} from "logic/imageConvert/imageConverter";

export function useTilemap() {
  const [tilemap, setTilemap] = useState(null);
  const [tilemapString, setTilemapString] = useState("");

  // Re-calculate the string representation of the tilemap when a new tilemap is uploaded
  useEffect(() => {
    if (tilemap === null) {
      setTilemapString("");
      return;
    }
    convertImage(tilemap).then(res => setTilemapString(res));
  }, [tilemap]);

  return {tilemap, setTilemap, tilemapString};
}
