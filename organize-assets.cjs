const fs = require('fs');
const path = require('path');

const targetDir = path.join(__dirname, 'src/imports/390WDefault');
const publicImagesDir = path.join(__dirname, 'public/images');
const indexFile = path.join(targetDir, 'index.tsx');

if (!fs.existsSync(publicImagesDir)) {
  fs.mkdirSync(publicImagesDir, { recursive: true });
}

let content = fs.readFileSync(indexFile, 'utf8');

const importRegex = /import\s+(\w+)\s+from\s+["']\.\/([^"']+\.png)["']/g;
let match;
const replacements = [];

while ((match = importRegex.exec(content)) !== null) {
  const varName = match[1];
  const oldFilename = match[2];
  
  // Clean up the variable name for the new filename
  let cleanName = varName;
  if (cleanName.startsWith('img')) {
    cleanName = cleanName.substring(3);
  }
  
  // Convert camelCase to kebab-case
  cleanName = cleanName.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase();
  
  // Check if it's just random gibberish (e.g., long string of random chars without words)
  // If it's mostly random letters and longer than 15 chars, maybe we keep it short, 
  // but kebab-case handles it fine. Let's just use the kebab-cased name.
  if (cleanName.length > 30 && !cleanName.includes('-')) {
     // it's likely a hash or random string, let's keep it but truncate
     cleanName = cleanName.substring(0, 15);
  }

  const newFilename = `${cleanName}.png`;
  
  const oldPath = path.join(targetDir, oldFilename);
  const newPath = path.join(publicImagesDir, newFilename);
  
  if (fs.existsSync(oldPath)) {
    console.log(`Copying ${oldFilename} to ${newFilename}`);
    fs.copyFileSync(oldPath, newPath);
    // Optionally delete the old file
    fs.unlinkSync(oldPath);
  } else {
    console.log(`Warning: ${oldPath} not found.`);
  }
  
  // Prepare replacement
  replacements.push({
    oldStr: match[0],
    newStr: `const ${varName} = "/images/${newFilename}";`
  });
}

// Apply replacements
for (const rep of replacements) {
  content = content.replace(rep.oldStr, rep.newStr);
}

fs.writeFileSync(indexFile, content, 'utf8');
console.log('Done organizing 390WDefault assets!');
