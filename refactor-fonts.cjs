const fs = require('fs');
const path = require('path');

function replaceInDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      replaceInDir(fullPath);
    } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      content = content.replace(/font-\['Archivo:ExtraBold',sans-serif\]/g, 'font-sans font-extrabold');
      content = content.replace(/font-\['Archivo:Bold',sans-serif\]/g, 'font-sans font-bold');
      content = content.replace(/font-\['Archivo:SemiBold',sans-serif\]/g, 'font-sans font-semibold');
      content = content.replace(/font-\['Archivo:Medium',sans-serif\]/g, 'font-sans font-medium');
      content = content.replace(/font-\['Archivo:Regular',sans-serif\]/g, 'font-sans font-normal');
      content = content.replace(/font-\['Archivo:Light',sans-serif\]/g, 'font-sans font-light');
      content = content.replace(/font-\['Archivo',sans-serif\]/g, 'font-sans');
      fs.writeFileSync(fullPath, content, 'utf8');
    }
  }
}

replaceInDir(path.join(__dirname, 'src'));
