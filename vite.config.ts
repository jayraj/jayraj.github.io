import { defineConfig } from 'vite'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'


function figmaAssetResolver() {
  const assetsRoot = path.resolve(__dirname, 'src/assets')

  return {
    name: 'figma-asset-resolver',
    resolveId(id) {
      if (!id.startsWith('figma:asset/')) return

      const filename = id.slice('figma:asset/'.length)
      const resolved = path.resolve(assetsRoot, filename)
      const relative = path.relative(assetsRoot, resolved)

      if (relative.startsWith('..') || path.isAbsolute(relative)) {
        throw new Error(`Invalid figma asset import: ${id}`)
      }

      return resolved
    },
  }
}

export default defineConfig({
  plugins: [
    figmaAssetResolver(),
    // The React and Tailwind plugins are both required for Make, even if
    // Tailwind is not being actively used – do not remove them
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      // Alias @ to the src directory
      '@': path.resolve(__dirname, './src'),
    },
  },

  // File types to support raw imports. Never add .css, .tsx, or .ts files to this.
  assetsInclude: ['**/*.svg', '**/*.csv'],
})
