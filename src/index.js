// 生成默认头像的核心逻辑

// 默认调色盘 - 明亮饱和的颜色
const DEFAULT_COLORS = [
  '#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FFEAA7',
  '#DDA0DD', '#98D8C8', '#F7DC6F', '#BB8FCE', '#85C1E2',
  '#F8C471', '#82E0AA', '#F1948A', '#AED6F1', '#D7BDE2'
];

/**
 * 生成哈希值
 * @param str - 输入字符串
 * @returns {number} 哈希值
 */
function generateHash(str) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash;
  }
  return Math.abs(hash);
}

/**
 * 从调色盘中选择颜色
 * @param {string} str - 输入字符串
 * @param {string[]} colors - 自定义调色盘
 * @returns {string} 选中的颜色
 */
function getColor(str, colors = DEFAULT_COLORS) {
  const hash = generateHash(str);
  return colors[hash % colors.length];
}

/**
 * 生成简单的SVG头像（纯色背景）
 * @param str - 输入字符串
 * @param options - 配置选项
 * @param options.toBase64 - 是否返回Base64 URL（默认false）
 * @returns SVG字符串或Base64 URL
 */
export function generateAvatar(str, options = {}) {
  const {
    size = 100,
    colors = DEFAULT_COLORS,
    toBase64 = false
  } = options;

  const hash = generateHash(str);
  const color = getColor(str, colors);
  const backgroundColor = color;
  
  // 生成SVG
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 ${size} ${size}">
      <rect width="${size}" height="${size}" fill="${backgroundColor}" />
    </svg>
  `.trim();
  
  // 根据选项返回SVG字符串或Base64 URL
  return toBase64 ? svgToBase64(svg) : svg;
}

/**
 * 将SVG字符串转换为Base64 URL
 * @param svg - SVG字符串
 * @returns Base64编码的SVG URL
 */
export function svgToBase64(svg) {
  const encoded = encodeURIComponent(svg);
  return `data:image/svg+xml;charset=utf-8,${encoded}`;
}

/**
 * 生成带图案的SVG头像（类似GitHub风格，沿垂直中线对称）
 * @param str - 输入字符串
 * @param options - 配置选项
 * @param options.gridSize - 图案格子数（默认5）
 * @param options.toBase64 - 是否返回Base64 URL（默认false）
 * @returns SVG字符串或Base64 URL
 */
export function generatePatternAvatar(str, options = {}) {
  const {
    size = 100,
    colors = DEFAULT_COLORS,
    gridSize = 5,
    toBase64 = false
  } = options;

  const hash = generateHash(str);
  const color = getColor(str, colors);
  const backgroundColor = color;
  
  // 生成类似GitHub的图案
  const blockSize = size / gridSize;
  let patternSvg = '';
  
  // 使用哈希值生成唯一图案，沿垂直中线对称
  for (let i = 0; i < gridSize; i++) {
    // 创建每行的图案数据
    const rowBits = [];
    const midPoint = Math.floor(gridSize / 2);
    const isOdd = gridSize % 2 === 1;
    
    // 只计算左侧列，右侧通过对称得到
    for (let j = 0; j < midPoint + (isOdd ? 1 : 0); j++) {
      const bit = (hash >> (i * gridSize + j)) & 1;
      rowBits[j] = bit;
      // 右侧对称位置
      if (j < midPoint) {
        rowBits[gridSize - 1 - j] = bit;
      }
    }
    
    // 绘制每行的方块
    for (let j = 0; j < gridSize; j++) {
      if (rowBits[j]) {
        const x = j * blockSize;
        const y = i * blockSize;
        patternSvg += `<rect x="${x}" y="${y}" width="${blockSize}" height="${blockSize}" fill="white" opacity="0.3" />`;
      }
    }
  }
  
  // 生成SVG
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 ${size} ${size}">
      <rect width="${size}" height="${size}" fill="${backgroundColor}" />
      ${patternSvg}
    </svg>
  `.trim();
  
  // 根据选项返回SVG字符串或Base64 URL
  return toBase64 ? svgToBase64(svg) : svg;
}

// 导出默认函数（默认带图案）
export default generatePatternAvatar;
