import './TilemapUpload.css';

export function TilemapUpload() {
  return (
    <div className="utilitySubPanel">
      <h3>Upload Tilemap</h3>
      <p>Transparent color: 0xFF00FF</p>
      <input id="tilemapFile" type="file" accept="img/png" />
    </div>
  );
}