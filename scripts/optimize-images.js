import fs from "fs";
import path from "path";
import sharp from "sharp";

const INPUT_DIR = "public/images";

// Funktion, um rekursiv alle Dateien zu sammeln
const walk = dir =>
  fs.readdirSync(dir).flatMap(file => {
    const full = path.join(dir, file);
    return fs.statSync(full).isDirectory() ? walk(full) : full;
  });

// Alle PNG/JPG/JPEG Dateien finden
const images = walk(INPUT_DIR).filter(f =>
  /\.(png|jpe?g)$/i.test(f)
);

for (const file of images) {
  const webpPath = file.replace(/\.(png|jpe?g)$/i, ".webp");

  // Bild konvertieren
  await sharp(file)
    .resize({ width: 1600, withoutEnlargement: true })
    .webp({ quality: 75 })
    .toFile(webpPath);

  console.log("✔ optimized:", webpPath);

  // Originaldatei löschen
  fs.unlinkSync(file);
  console.log("🗑 deleted original:", file);
}
