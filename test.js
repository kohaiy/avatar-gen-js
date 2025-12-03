// 测试头像生成函数
const { generateAvatar, generatePatternAvatar } = require('./src/index.js');

// 测试用例
const testCases = [
  'test@example.com',
  'user123',
  '张三',
  'john.doe'
];

console.log('=== 测试简单头像生成 ===');
testCases.forEach(test => {
  const avatar = generateAvatar(test);
  console.log(`\n输入: ${test}`);
  console.log(`输出: ${avatar}`);
});

console.log('\n=== 测试带图案头像生成 ===');
testCases.forEach(test => {
  const avatar = generatePatternAvatar(test);
  console.log(`\n输入: ${test}`);
  console.log(`输出: ${avatar}`);
});

console.log('\n=== 测试自定义调色盘 ===');
const customColors = ['#FF5733', '#33FF57', '#3357FF'];
testCases.forEach(test => {
  const avatar = generatePatternAvatar(test, { colors: customColors });
  console.log(`\n输入: ${test}`);
  console.log(`输出: ${avatar}`);
});

console.log('\n=== 测试不同尺寸 ===');
const sizes = [50, 200, 300];
sizes.forEach(size => {
  const avatar = generatePatternAvatar('test@example.com', { size });
  console.log(`\n尺寸: ${size}`);
  console.log(`输出: ${avatar}`);
});
