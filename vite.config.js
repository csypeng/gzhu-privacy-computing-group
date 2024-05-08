import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// import eslintPlugin from 'vite-plugin-eslint'
import path from 'path'
// import svgLoader from 'vite-svg-loader'


// https://vitejs.dev/config/
export default defineConfig({
  base: process.env.NODE_ENV === "production" ? "/vue-sample/" : "/",
  // build: {
  //   outDir: 'public'
  // },
  server: {
    host: 'localhost',
    port: 8000
  },
  plugins: [
    vue(),
    // eslintPlugin({
    //   include: ['src/**/*.js', 'src/**/*.vue', 'src/*.js', 'src/*.vue']
    // }),
    // svgLoader()
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src/')
    }
  }
})
