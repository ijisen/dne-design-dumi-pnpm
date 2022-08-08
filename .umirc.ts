import { defineConfig } from 'dumi';
import chalk from 'chalk';
import { readdirSync } from 'fs';
import { join } from 'path';


// utils must build before core
// runtime must build before renderer-react
const pkgList = readdirSync(join(__dirname, 'packages')).filter(
  (pkg) => pkg.charAt(0) !== '.'
);

console.log(pkgList)

const alias = pkgList.reduce((pre: { [propName: string]: string }, pkg) => {
  pre[`@dne-design/pro-${pkg}`] = join(__dirname, 'packages', pkg, 'src');
  return {
    ...pre,
  };
}, {});

console.log(`🌼 alias list \n${chalk.blue(Object.keys(alias).join('\n'))}`);

const tailPkgList = pkgList
  .map((path) => [join('packages', path, 'src')])
  .reduce((acc, val) => acc.concat(val), []);

console.log(tailPkgList)

export default defineConfig({
  title: 'demo-umi',
  favicon: '/img/favicon.png',
  logo: '/img/favicon.png',
  outputPath: 'docs-dist',
  mode: 'site',
  alias,
  resolve: {
    includes: [...tailPkgList, 'docs'],
  },
  extraBabelPlugins: [
    [
      'import',
      {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: true,
      },
    ],
  ],
  // more config: https://d.umijs.org/config
});
