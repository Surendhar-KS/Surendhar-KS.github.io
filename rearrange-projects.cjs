const fs = require('fs');
const path = require('path');

const importsDir = path.join(__dirname, 'src/imports');

// The new mapping to achieve 1, 2, 3, 4 based on user feedback that the previous mapping was 4, 1, 2, 3.
const replacements = [
  { varName: 'imgWgEhvRrQs62RgxlzrnXjj8Rr4Png', newPath: '/projects/project2.png' }, // Slot 1
  { varName: 'imgI3AzeVtkvdKbGl9Tx38TUdXEb0Png', newPath: '/projects/project3.png' }, // Slot 2
  { varName: 'img1C3ZqErGdc7PqPIbDxtBaD4VGiQPng', newPath: '/projects/project4.png' }, // Slot 3
  { varName: 'imgVnxqLcPHw9VbVzy6BDpZ8PUsaUPng', newPath: '/projects/project1.png' }  // Slot 4
];

// Helper to update a file
function updateFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let changed = false;

  replacements.forEach(({ varName, newPath }) => {
    // Regex to match: const varName = "/projects/projectX.png";
    const regex = new RegExp(`const\\s+${varName}\\s+=\\s+["'][^"']+["'];?`, 'g');
    
    if (regex.test(content)) {
      content = content.replace(regex, `const ${varName} = "${newPath}";`);
      changed = true;
      console.log(`Updated ${varName} to ${newPath} in ${filePath}`);
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

console.log('Finished rearranging projects!');
