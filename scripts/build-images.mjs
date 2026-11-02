// Builds optimized portrait assets from the profile photo in public/assets.
import sharp from 'sharp';
import { mkdirSync } from 'node:fs';

const OUT = 'public/assets';
const SOURCE = `${OUT}/nanda-profile.png`;
mkdirSync(OUT, { recursive: true });

const { width } = await sharp(SOURCE).metadata();
await sharp(SOURCE).jpeg({ quality: 90 }).toFile(`${OUT}/nanda-profile.jpg`);

for (const w of [1100, 720, 420]) {
  await sharp(SOURCE).resize({ width: w }).webp({ quality: 86 }).toFile(`${OUT}/nanda-profile-${w}.webp`);
}

// Social share image (1200x630) on a dark backdrop
const portrait = await sharp(SOURCE).resize({ height: 600 }).png().toBuffer();
await sharp({ create: { width: 1200, height: 630, channels: 4, background: '#07070a' } })
  .composite([
    {
      input: Buffer.from(`<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
        <defs><radialGradient id="g" cx="78%" cy="45%" r="45%"><stop offset="0" stop-color="#e5132b" stop-opacity="0.45"/><stop offset="1" stop-color="#e5132b" stop-opacity="0"/></radialGradient></defs>
        <rect width="1200" height="630" fill="url(#g)"/>
      </svg>`),
    },
    { input: portrait, gravity: 'southeast' },
    {
      input: Buffer.from(`<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
        <text x="72" y="280" font-family="Impact, 'Arial Narrow', sans-serif" font-size="88" fill="#f4f1ec" letter-spacing="3">NANDA KUMAR</text>
        <text x="78" y="342" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="26" fill="#ff3d5a" letter-spacing="14">THE SERIES</text>
        <text x="78" y="410" font-family="Helvetica, Arial, sans-serif" font-weight="600" font-size="18" fill="#a7a6ad" letter-spacing="4">JAVA FULL STACK DEVELOPER</text>
      </svg>`),
    },
  ])
  .jpeg({ quality: 85 })
  .toFile(`${OUT}/og-image.jpg`);
console.log(`images built from ${SOURCE} (${width}px wide)`);
