const BUILD_TYPE = process.env.BUILD_TYPE;


const extraBabelPlugins = [
  [
    'babel-plugin-import',
    { libraryName: 'antd', libraryDirectory: 'lib', style: true },
    'antd',
  ],
]

let config: { [propName: string]: any } = {
  // more father 4 config: https://github.com/umijs/father-next/blob/master/docs/config.md
  extraBabelPlugins,
};

if(BUILD_TYPE === 'lib') {
  // commonJs 打包配置
  config = {
    ...config,
    cjs: {
      output: 'dist/lib'
    },
  }
} else if(BUILD_TYPE === 'umd') {
  // UMD打包配置
  config = {
    ...config,
    // 'dist/umd'
    umd: {},
  }
} else {
  // 默认打包为 ESM 模块
  config = {
    ...config,
    esm: {
      output: 'dist/es'
    },
    extraBabelPlugins: [
      [require('./scripts/replaceLib')],
      ...extraBabelPlugins,
    ]
  }
}

export default config
