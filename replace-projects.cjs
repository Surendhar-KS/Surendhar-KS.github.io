const fs = require('fs');
const path = require('path');

const importsDir = path.join(__dirname, 'src/imports');
const publicProjectsDir = path.join(__dirname, 'public/projects');

// Create public/projects if it doesn't exist
if (!fs.existsSync(publicProjectsDir)) {
  fs.mkdirSync(publicProjectsDir, { recursive: true });
}

// Copy images
const srcImages = [
  'D:\\project\\portfolio2\\project1.png',
  'D:\\project\\portfolio2\\project2.png',
  'D:\\project\\portfolio2\\project3.png',
  'D:\\project\\portfolio2\\project4.png'
];

srcImages.forEach(srcImage => {
  const destImage = path.join(publicProjectsDir, path.basename(srcImage));
  if (fs.existsSync(srcImage)) {
    fs.copyFileSync(srcImage, destImage);
    console.log(`Copied ${path.basename(srcImage)} to public/projects/`);
  } else {
    console.log(`Warning: Source image ${srcImage} not found.`);
  }
});

// Variables to replace and their new values
const replacements = [
  { varName: 'imgWgEhvRrQs62RgxlzrnXjj8Rr4Png', newPath: '/projects/project1.png' },
  { varName: 'imgI3AzeVtkvdKbGl9Tx38TUdXEb0Png', newPath: '/projects/project2.png' },
  { varName: 'img1C3ZqErGdc7PqPIbDxtBaD4VGiQPng', newPath: '/projects/project3.png' },
  { varName: 'imgVnxqLcPHw9VbVzy6BDpZ8PUsaUPng', newPath: '/projects/project4.png' }
];

// Helper to update a file
function updateFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let changed = false;

  replacements.forEach(({ varName, newPath }) => {
    // Regex to match either:
    // import varName from "...";
    // const varName = "...";
    // const varName = "...";; // sometimes there's a double semicolon from previous scripts
    const regex = new RegExp(`(?:import\\s+${varName}\\s+from\\s+["'][^"']+["'];?|const\\s+${varName}\\s+=\\s+["'][^"']+["'];*;?)`, 'g');
    
    if (regex.test(content)) {
      content = content.replace(regex, `const ${varName} = "${newPath}";`);
      changed = true;
      console.log(`Updated ${varName} in ${filePath}`);
    }
  });

  if (changed) {
    fs.writeFileSync(filePath, content, 'utf8');
  }
}

// Walk through directories and find index.tsx
const dirs = fs.readdirSync(importsDir);
dirs.forEach(dir => {
  const fullPath = path.join(importsDir, dir);
  if (fs.statSync(fullPath).isDirectory()) {
    const indexPath = path.join(fullPath, 'index.tsx');
    if (fs.existsSync(indexPath)) {
      updateFile(indexPath);
    }
  }
});

console.log('Finished updating projects!');
