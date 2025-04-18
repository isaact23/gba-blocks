import {useEffect, useState} from "react";
import {convertImage} from "src/logic/imageConvert/imageConverter";

export function useTilemap() {
  const [tilemap, setTilemap] = useState(null);
  const [tilemapString, setTilemapString] = useState("");

  // Re-calculate the string representation of the tilemap when a new tilemap is uploaded
  useEffect(async () => {
    if (tilemap === null) {
      setTilemapString("");
      return;
    }
    const res = await convertImage(tilemap);
    setTilemapString(res);

  }, [tilemap]);

  return {tilemap, setTilemap, tilemapString};
}
