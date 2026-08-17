const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const dir = path.join(__dirname, 'public', 'images');

async function optimizeImages() {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    if (!file.match(/\.(webp|png|jpg|jpeg)$/i)) continue;
    
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    // Only optimize images over 100KB
    if (stat.size > 100 * 1024) {
      console.log(`Optimizing ${file} (${Math.round(stat.size / 1024)}KB)`);
      const tempPath = filePath + '.tmp';
      
      try {
        await sharp(filePath)
          .resize({ width: 800, withoutEnlargement: true }) // Project images don't need to be huge
          .webp({ quality: 80 })
          .toFile(tempPath);
        
        fs.renameSync(tempPath, filePath);
        const newStat = fs.statSync(filePath);
        console.log(` -> Reduced to ${Math.round(newStat.size / 1024)}KB`);
      } catch (err) {
        console.error(`Failed to optimize ${file}:`, err);
      }
    }
  }
}

optimizeImages();
