import react from '@vitejs/plugin-react'
import ssr from 'vite-plugin-ssr/plugin'
import { UserConfig } from 'vite'
import { cjsInterop } from 'vite-plugin-cjs-interop'

const config: UserConfig = {
  plugins: [
    react(),
    ssr(),
    cjsInterop({
      dependencies: ['lexical']
    })
  ],
  ssr: {
    external: ['@mdxeditor/editor', 'lexical']
  }
}

export default config
