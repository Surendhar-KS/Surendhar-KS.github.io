import fs from 'fs/promises';
import path from 'path';
import sharp from 'sharp';

const RESIZE_CONFIG = [
  // Avatars (displayed around 200x260, up to 2x retina = 450px)
  { file: 'public/images/avatar-front.webp', maxWidth: 450, quality: 85 },
  { file: 'public/images/avatar-back.webp', maxWidth: 450, quality: 85 },

  // Hero decorative icons (displayed <= 100px, 2x = 200px)
  { file: 'public/images/star.webp', maxWidth: 200, quality: 85 },
  { file: 'public/images/lightning.webp', maxWidth: 200, quality: 85 },

  // Background banner
  { file: 'public/images/build-to-scale-bg.webp', maxWidth: 1200, quality: 80 },

  // Projects (displayed around 650x450, 2x retina = 1200px)
  { file: 'public/projects/project1.webp', maxWidth: 1200, quality: 80 },
  { file: 'public/projects/project2.webp', maxWidth: 1200, quality: 80 },
  { file: 'public/projects/project3.webp', maxWidth: 1200, quality: 80 },
  { file: 'public/projects/project4.webp', maxWidth: 1200, quality: 80 },

  // Certificates & Badges
  { file: 'public/images/certificates/oracle-logo-1.png', maxWidth: 600, quality: 90, format: 'png' },
  { file: 'public/images/certificates/badge-image-4.png', maxWidth: 400, quality: 90, format: 'png' },
  { file: 'public/images/certificates/badge-image-5.png', maxWidth: 400, quality: 90, format: 'png' },
  { file: 'public/images/certificates/badge-image-6.png', maxWidth: 400, quality: 90, format: 'png' },
  { file: 'public/images/certificates/servicenow-cis-df-1.png', maxWidth: 250, quality: 90, format: 'png' },
  { file: 'public/images/certificates/servicenow-csa-1.png', maxWidth: 250, quality: 90, format: 'png' },
  { file: 'public/images/certificates/aws-certified-cloud-practitioner.png', maxWidth: 250, quality: 90, format: 'png' },
  { file: 'public/images/certificates/mosaic-background-1.png', maxWidth: 500, quality: 80, format: 'png' },
];

async function resizeImage({ file, maxWidth, quality = 85, format }) {
  try {
    const filePath = path.resolve(file);
    const exists = await fs.access(filePath).then(() => true).catch(() => false);
    if (!exists) {
      console.log(`Skipping (not found): ${file}`);
      return;
    }

    const inputBuffer = await fs.readFile(filePath);
    const beforeKb = (inputBuffer.length / 1024).toFixed(1);

    const image = sharp(inputBuffer);
    const metadata = await image.metadata();

    if (metadata.width && metadata.width > maxWidth) {
      let pipeline = sharp(inputBuffer).resize({ width: maxWidth, withoutEnlargement: true });

      const ext = path.extname(filePath).toLowerCase();
      if (format === 'png' || ext === '.png') {
        pipeline = pipeline.png({ quality: quality || 90, compressionLevel: 9 });
      } else {
        pipeline = pipeline.webp({ quality: quality || 80 });
      }

      const outputBuffer = await pipeline.toBuffer();
      await fs.writeFile(filePath, outputBuffer);

      const afterKb = (outputBuffer.length / 1024).toFixed(1);
      console.log(`✓ Resized ${file}: ${metadata.width}px -> ${maxWidth}px (${beforeKb} KB -> ${afterKb} KB)`);
    } else {
      console.log(`- Already optimized: ${file} (${metadata.width}px <= ${maxWidth}px, ${beforeKb} KB)`);
    }
  } catch (err) {
    console.error(`Error resizing ${file}:`, err.message);
  }
}

async function main() {
  console.log('Starting image resizing & optimization...');
  for (const config of RESIZE_CONFIG) {
    await resizeImage(config);
  }
  console.log('Image optimization finished.');
}

main();
