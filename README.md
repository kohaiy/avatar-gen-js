# avatar-gen-js

一个支持浏览器和Node.js的npm库，用于根据用户昵称（可能是邮箱）生成默认头像。

## 特性

- 🎨 **随机颜色**：使用明亮饱和的颜色，避免过亮过暗或死灰色
- 🎭 **图案支持**：生成类似GitHub风格的沿垂直中线对称的图案
- 📏 **自定义尺寸**：支持任意尺寸设置
- 🎨 **自定义调色盘**：支持传入不定长的数组作为调色盘
- 🔲 **自定义格子数**：支持自定义图案的格子数（默认5）
- 🔄 **一致性保证**：相同输入始终产生相同输出
- 🌐 **跨平台支持**：支持浏览器和Node.js环境
- 📦 **多种格式**：支持ES、CJS、UMD三种模块格式
- 🔢 **Base64支持**：支持导出为Base64编码的SVG URL

## 安装

```bash
npm install avatar-gen-js
```

## 使用

### 基本使用

```javascript
// ES模块
import generateAvatar from 'avatar-gen-js';
// CommonJS
const { generateAvatar, generatePatternAvatar } = require('avatar-gen-js');

// 生成带图案的头像（默认）
const avatar = generateAvatar('test@example.com');
console.log(avatar);
// 输出SVG字符串
```

### 自定义配置

```javascript
const { generateAvatar } = require('avatar-gen-js');

// 自定义尺寸、颜色和格子数
const avatar = generateAvatar('test@example.com', {
  size: 200,
  colors: ['#FF5733', '#33FF57', '#3357FF'],
  gridSize: 7
});

// 生成Base64编码的SVG URL
const avatarUrl = generateAvatar('test@example.com', {
  size: 200,
  toBase64: true
});
```

## API

### `generateAvatar(str: string, options?: AvatarOptions): string | string`

生成带图案的SVG头像（默认导出）。

#### 参数

- `str`: 输入字符串（昵称或邮箱）
- `options`: 配置选项
  - `size`: 头像大小，默认100
  - `colors`: 自定义调色盘，默认使用内置的明亮饱和颜色
  - `gridSize`: 图案格子数，默认5，范围3-10
  - `toBase64`: 是否返回Base64编码的SVG URL，默认false

#### 返回值

- SVG字符串或Base64编码的SVG URL

### `generatePatternAvatar(str: string, options?: AvatarOptions): string | string`

生成带图案的SVG头像（命名导出）。

#### 参数

- `str`: 输入字符串（昵称或邮箱）
- `options`: 配置选项
  - `size`: 头像大小，默认100
  - `colors`: 自定义调色盘，默认使用内置的明亮饱和颜色
  - `gridSize`: 图案格子数，默认5，范围3-10
  - `toBase64`: 是否返回Base64编码的SVG URL，默认false

#### 返回值

- SVG字符串或Base64编码的SVG URL

### `AvatarOptions` 接口

```javascript
interface AvatarOptions {
  size?: number;
  colors?: string[];
  gridSize?: number;
  toBase64?: boolean;
}
```

### `svgToBase64(svg: string): string`

将SVG字符串转换为Base64编码的SVG URL。

#### 参数

- `svg`: SVG字符串

#### 返回值

- Base64编码的SVG URL

## 示例

### 输入

```javascript
generateAvatar('test@example.com');
```

### 输出

```svg
<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100">
  <rect width="100" height="100" fill="#DDA0DD" />
  <rect x="0" y="0" width="20" height="20" fill="white" opacity="0.3" />
  <rect x="80" y="0" width="20" height="20" fill="white" opacity="0.3" />
  <!-- 其他图案元素 -->
</svg>
```

## 浏览器兼容性

支持所有现代浏览器，包括：

- Chrome
- Firefox
- Safari
- Edge

## Node.js兼容性

支持Node.js 14及以上版本。

## 开发

```bash
# 安装依赖
npm install

# 构建
npm run build

# 开发模式
npm run dev

# 启动demo服务器
npm start
```

## 测试

```bash
npm test
```

## 许可证

MIT