import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    lib: {
      entry: './src/index.js',
      name: 'AvatarGen',
      fileName: (format) => `index.${format}.js`,
      formats: ['es', 'cjs', 'umd']
    },
    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖
      external: [],
      output: {
        // 在UMD构建模式下为这些外部化的依赖提供一个全局变量
        globals: {},
        // 解决同时使用默认导出和命名导出的警告
        exports: 'named'
      }
    }
  }
});
