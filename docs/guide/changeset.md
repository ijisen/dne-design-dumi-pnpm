
## GUIDE CHANGESET!


### `使用命令`

```
// 初始化配置
pnpm changeset init

// 编写 修改日志文件
pnpm run changeset

// 版本更新
pnpm changeset version

```

### `config.json 配置文件说明`
````
{
   //
  "$schema": "https://unpkg.com/@changesets/config@2.1.1/schema.json",
   //   changelog  生成方式
  "changelog": "@changesets/cli/changelog",
  // 操作 ”changeset add“ &&  ”changeset version“ 命令时，是否使用 git commit ;
  // 默认： false。 手动commit
  "commit": false,
  // 包版本同步发布
  // [["@changesets/button", "@changesets/theme"]]  button & theme 版本同步变更
  "fixed": [],
  // 共享版本
  // [["@changesets/button", "@changesets/theme"]]  button & theme 版本同步变更
  "linked": [],
  // 设置了包的发布方式 默认： restricted
  // - 如果访问：“restricted”，包将作为私有发布，需要登录到具有安装权限的 npm 帐户。
  // - 如果访问：“public”，包将在公共注册表上可用。
  // 如果package.json设置{ private: true}，此包不会发布
  "access": "restricted",
  // git 分支名称
  "baseBranch": "master",
  // 更新各包中的依赖版本
  // 当某一个包版本变更时，同步修改依赖此包的包版本信息
  // 更新级别： major > minor > patch 
  "updateInternalDependencies": "patch",
  // 忽略发布的包
  "ignore": []
}

````
