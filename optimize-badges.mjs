import fs from 'fs/promises';
import path from 'path';
import sharp from 'sharp';

const dirs = ['public/badges'];

async function processDir(dir) {
  try {
    const items = await fs.readdir(dir, { withFileTypes: true });
    for (const item of items) {
      const fullPath = path.join(dir, item.name);
      if (item.isDirectory()) {
        await processDir(fullPath);
      } else {
        const ext = path.extname(fullPath).toLowerCase();
        if (['.png', '.jpg', '.jpeg'].includes(ext)) {
          const newPath = fullPath.substring(0, fullPath.lastIndexOf('.')) + '.webp';
          console.log(`Converting ${fullPath} to ${newPath}`);
          await sharp(fullPath).webp({ quality: 85 }).toFile(newPath);
          await fs.unlink(fullPath);
        }
      }
    }
  } catch (e) {
    if (e.code !== 'ENOENT') {
      console.error(`Error processing ${dir}:`, e);
    }
  }
}

async function run() {
  for (const dir of dirs) {
    await processDir(dir);
  }
  console.log('Badges optimization complete!');
}

run();
