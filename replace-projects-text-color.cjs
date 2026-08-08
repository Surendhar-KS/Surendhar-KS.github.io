const fs = require('fs');

const files = [
  'src/imports/Body/index.tsx',
  'src/imports/390WDefault/index.tsx'
];

const targetTexts = [
  "AI-Powered Interview Platform",
  "Portable Microplastic Detection",
  "Retail Analytics Dashboard",
  "SmartBus Live Tracker",
  "Smart AI hiring platform.",
  "AI-based water analysis.",
  "Data-driven business insights.",
  "Live public transport tracking."
];

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let changed = false;

  targetTexts.forEach(text => {
    // Regex to match a div with classes, optionally including drop-shadow, text-white or text-white/78
    // followed by the p tag with our target text.
    // Example:
    // <div className="... text-white ... drop-shadow-[...] ..." ...>
    //   <p className="...">AI-Powered Interview Platform</p>
    
    // We will use a regex to match the preceding <div className="..."> block
    // We capture the div content and the p tag
    const escapedText = text.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    
    // Matches the div opening tag that precedes our target text
    const regex = new RegExp(`(<div className="[^"]*?")([^>]*>\\s*<p className="[^"]*">${escapedText}<\/p>)`, 'g');
    
    content = content.replace(regex, (match, divClass, rest) => {
      let newDivClass = divClass;
      
      // Replace text-white with text-[#111]
      newDivClass = newDivClass.replace(/\btext-white\b/g, 'text-[#111]');
      
      // Replace text-white/78 with text-[#111]/78
      newDivClass = newDivClass.replace(/\btext-white\/78\b/g, 'text-[#111]/78');
      
      // Remove drop-shadow classes
      newDivClass = newDivClass.replace(/\bdrop-shadow-\[[^\]]+\]\b/g, '');
      
      // Clean up multiple spaces if any
      newDivClass = newDivClass.replace(/\s+/g, ' ');
      
      if (divClass !== newDivClass) {
        changed = true;
        console.log(`Updated text color for "${text}" in ${file}`);
      }
      
      return newDivClass + rest;
    });
  });

  if (changed) {
    fs.writeFileSync(file, content, 'utf8');
  }
});

console.log("Done.");
