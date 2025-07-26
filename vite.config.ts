import { resolve } from 'path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import { readdirSync } from 'fs';

// This function dynamically finds all locale files to create separate entry points.
// This is the key to ensuring each locale becomes its own file in the dist folder.
const localeFiles = readdirSync(resolve(__dirname, 'src/locales'))
  .filter(file => file.endsWith('.ts') && file !== 'index.ts');

const localeEntries = localeFiles.reduce((acc: Record<string, string>, file) => {
  const entryName = `locales/${file.replace(/\.ts$/, '')}`;
  acc[entryName] = resolve(__dirname, `src/locales/${file}`);
  return acc;
}, {});

export default defineConfig({
  build: {
    lib: {
      // Configure multiple entry points: one for the main lib, and one for each locale.
      entry: {
        index: resolve(__dirname, 'src/index.ts'),
        ...localeEntries,
      },
      name: 'dt-i18n',
      formats: ['es'],
      // This function ensures files are placed correctly, e.g., dist/locales/bn.es.js
      fileName: (format, entryName) => `${entryName}.${format}.js`,
    },
  },
  plugins: [
    // This plugin generates the corresponding .d.ts type definition files.
    dts({
      outDir: 'dist',
    }),
  ],
});
