const fs = require('fs').promises;
const path = require('path');

const depsToRemove = [
  '@hookform/resolvers',
  '@milosmladenovicwork/react-image-magnify',
  '@radix-ui/react-accordion',
  '@radix-ui/react-alert-dialog',
  '@radix-ui/react-aspect-ratio',
  '@radix-ui/react-avatar',
  '@radix-ui/react-checkbox',
  '@radix-ui/react-collapsible',
  '@radix-ui/react-context-menu',
  '@radix-ui/react-dialog',
  '@radix-ui/react-dropdown-menu',
  '@radix-ui/react-hover-card',
  '@radix-ui/react-label',
  '@radix-ui/react-menubar',
  '@radix-ui/react-navigation-menu',
  '@radix-ui/react-popover',
  '@radix-ui/react-progress',
  '@radix-ui/react-radio-group',
  '@radix-ui/react-scroll-area',
  '@radix-ui/react-select',
  '@radix-ui/react-separator',
  '@radix-ui/react-slider',
  '@radix-ui/react-slot',
  '@radix-ui/react-switch',
  '@radix-ui/react-tabs',
  '@radix-ui/react-toast',
  '@radix-ui/react-toggle',
  '@radix-ui/react-toggle-group',
  '@radix-ui/react-tooltip',
  'autoprefixer',
  'class-variance-authority',
  'classnames',
  'clsx',
  'cmdk',
  'embla-carousel-react',
  'input-otp',
  'lucide-react',
  'mapbox-gl',
  'maplibre-gl',
  'next-themes',
  'react-hook-form',
  'react-image-magnify',
  'react-map-gl',
  'react-resizable-panels',
  'recharts',
  'sonner',
  'tailwind-merge',
  'tailwindcss-animate',
  'vaul',
  'zod'
];

async function removeUnusedDependencies() {
  console.log('Starting dependency removal process...');
  
  try {
    // Read package.json
    const packageJsonPath = path.join(process.cwd(), 'package.json');
    const packageJsonContent = await fs.readFile(packageJsonPath, 'utf8');
    const packageJson = JSON.parse(packageJsonContent);
    
    // Keep track of removed dependencies
    const removedDeps = [];
    const notFoundDeps = [];
    
    // Remove each dependency
    depsToRemove.forEach(dep => {
      if (packageJson.dependencies[dep]) {
        delete packageJson.dependencies[dep];
        removedDeps.push(dep);
      } else {
        notFoundDeps.push(dep);
      }
    });
    
    // Write updated package.json
    await fs.writeFile(
      packageJsonPath,
      JSON.stringify(packageJson, null, 2) + '\n',
      'utf8'
    );
    
    // Print summary
    console.log('\nDependency Removal Summary:');
    console.log('-------------------------');
    console.log(`Total dependencies processed: ${depsToRemove.length}`);
    console.log(`Successfully removed: ${removedDeps.length}`);
    console.log(`Not found: ${notFoundDeps.length}`);
    
    if (removedDeps.length > 0) {
      console.log('\n✅ Removed dependencies:');
      removedDeps.forEach(dep => console.log(`  - ${dep}`));
    }
    
    if (notFoundDeps.length > 0) {
      console.log('\n⚠️ Dependencies not found:');
      notFoundDeps.forEach(dep => console.log(`  - ${dep}`));
    }
    
    console.log('\n⚡ Next steps:');
    console.log('1. Run "npm install" or "yarn" to update your package-lock.json or yarn.lock');
    console.log('2. Test your application to ensure everything works correctly');
    
  } catch (error) {
    console.error('❌ Error:', error.message);
    process.exit(1);
  }
}

removeUnusedDependencies(); 