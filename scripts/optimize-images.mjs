import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const dirs = ['public/images', 'public/projects'];

async function optimizeImages() {
  for (const dir of dirs) {
    if (!fs.existsSync(dir)) continue;
    
    const files = fs.readdirSync(dir);
    for (const file of files) {
      if (file.match(/\.(png|jpg|jpeg)$/i)) {
        const fullPath = path.join(dir, file);
        const parsed = path.parse(fullPath);
        const outPath = path.join(parsed.dir, `${parsed.name}.webp`);
        
        console.log(`Converting ${file} to WebP...`);
        try {
          await sharp(fullPath)
            .webp({ quality: 85 })
            .toFile(outPath);
            
          // Delete original
          fs.unlinkSync(fullPath);
          console.log(`  -> Success and deleted ${file}`);
        } catch (e) {
          console.error(`  -> Failed to convert ${file}:`, e.message);
        }
      }
    }
  }
  console.log('All image conversions complete!');
}

optimizeImages();
