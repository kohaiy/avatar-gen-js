/**
 * 配置选项接口
 */
export interface AvatarOptions {
  /**
   * 头像大小，默认100
   */
  size?: number;
  /**
   * 自定义调色盘
   */
  colors?: string[];
  /**
   * 图案格子数，默认5，范围3-10
   */
  gridSize?: number;
  /**
   * 是否返回Base64 URL，默认false
   */
  toBase64?: boolean;
}

/**
 * 生成简单的SVG头像（纯色背景）
 * @param str - 输入字符串（昵称或邮箱）
 * @param options - 配置选项
 * @returns SVG字符串或Base64 URL
 */
export function generateAvatar(str: string, options?: AvatarOptions): string;

/**
 * 生成带图案的SVG头像（类似GitHub风格）
 * @param str - 输入字符串（昵称或邮箱）
 * @param options - 配置选项
 * @returns SVG字符串或Base64 URL
 */
export function generatePatternAvatar(str: string, options?: AvatarOptions): string;

/**
 * 将SVG字符串转换为Base64 URL
 * @param svg - SVG字符串
 * @returns Base64编码的SVG URL
 */
export function svgToBase64(svg: string): string;

export default generatePatternAvatar;
