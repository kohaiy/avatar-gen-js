const fs = require('fs');
const path = require('path');

// 复制类型定义文件
function copyTypes() {
  const sourcePath = path.join(__dirname, '..', 'src', 'index.d.ts');
  const targetPath = path.join(__dirname, '..', 'dist', 'index.d.ts');
  
  try {
    // 确保dist目录存在
    const distDir = path.dirname(targetPath);
    if (!fs.existsSync(distDir)) {
      fs.mkdirSync(distDir, { recursive: true });
    }
    
    // 复制文件
    fs.copyFileSync(sourcePath, targetPath);
    console.log('✓ 类型定义文件已成功复制到dist目录');
  } catch (error) {
    console.error('✗ 复制类型定义文件失败:', error.message);
    process.exit(1);
  }
}

// 执行复制
copyTypes();
