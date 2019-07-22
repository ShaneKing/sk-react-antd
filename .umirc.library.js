export default {
  // cjs: { type: 'babel' },
  cjs: 'rollup',
  doc: {
    base: '/sk-antd',
  },
  entry: 'src/index.js',
  esm: 'rollup',
  extraBabelPlugins: [
    ['babel-plugin-import', {
      libraryName: 'antd',
      libraryDirectory: 'lib',
      style: true,
    }],
  ],
};
