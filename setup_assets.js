import fs from 'node:fs';
import path from 'node:path';

const uploadedDir = 'C:\\Users\\User\\.gemini\\antigravity-ide\\brain\\f4733954-5743-4189-9040-26b9fb14e053\\.user_uploaded';
const galleryDir = path.resolve('public/images/gallery');
const imagesDir = path.resolve('public/images');

if (!fs.existsSync(galleryDir)) {
  fs.mkdirSync(galleryDir, { recursive: true });
}

const fileMappings = [
  { src: 'media_1792497574445.jpg', dest: 'bridal-1.jpg' },
  { src: 'media_1792497574535.jpg', dest: 'bridal-2.jpg' },
  { src: 'media_1792497574552.jpg', dest: 'bridal-3.jpg' },
  { src: 'media_1792497574485.jpg', dest: 'engagement-1.jpg' },
  { src: 'media_1792497574338.jpg', dest: 'festive-1.jpg' },
];

for (const m of fileMappings) {
  const srcPath = path.join(uploadedDir, m.src);
  const destPath = path.join(galleryDir, m.dest);
  if (fs.existsSync(srcPath)) {
    fs.copyFileSync(srcPath, destPath);
    console.log(`Copied ${m.src} -> ${m.dest}`);
  } else {
    console.warn(`Source not found: ${srcPath}`);
  }
}

// Also make baby shower, engagement-2, festive-2 copies or variants if needed
const extraMappings = [
  { src: 'bridal-1.jpg', dest: 'bridal-full-forearm.jpg' },
  { src: 'engagement-1.jpg', dest: 'babyshower-1.jpg' },
  { src: 'festive-1.jpg', dest: 'festive-2.jpg' },
  { src: 'engagement-1.jpg', dest: 'engagement-2.jpg' },
  { src: 'bridal-2.jpg', dest: 'babyshower-2.jpg' }
];

for (const em of extraMappings) {
  const s = path.join(galleryDir, em.src);
  const d = path.join(galleryDir, em.dest);
  if (fs.existsSync(s) && !fs.existsSync(d)) {
    fs.copyFileSync(s, d);
  }
}

const generatedFiles = [
  { src: 'royal_bridal_hero_1792498966320.jpg', dest: path.join(imagesDir, 'hero.jpg') },
  { src: 'royal_bridal_hero_1792498966320.jpg', dest: path.join(galleryDir, 'bridal-4.jpg') },
  { src: 'artist_vino_portrait_1792499034988.jpg', dest: path.join(imagesDir, 'artist-vino.jpg') },
  { src: 'babyshower_mehendi_1792498987826.jpg', dest: path.join(galleryDir, 'babyshower-1.jpg') },
  { src: 'engagement_mehendi_1792499011623.jpg', dest: path.join(galleryDir, 'engagement-2.jpg') },
];

const brainDir = 'C:\\Users\\User\\.gemini\\antigravity-ide\\brain\\f4733954-5743-4189-9040-26b9fb14e053';

for (const gf of generatedFiles) {
  const s = path.join(brainDir, gf.src);
  if (fs.existsSync(s)) {
    fs.copyFileSync(s, gf.dest);
    console.log(`Copied generated: ${gf.src} -> ${gf.dest}`);
  }
}

console.log('Asset setup complete.');

