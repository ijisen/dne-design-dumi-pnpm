---
group:
  path: /
nav:
  title: 组件
  path: /components
---
## Layout

PageLoading Demo:

```tsx
import React from 'react';
import { PageLoading } from '@dne/pro-components';

export default () => <PageLoading loading={true} />;
```

BasicLayout Demo:

```tsx
import React from 'react';
import { BasicLayout } from '@dne/pro-components';

export default () => <BasicLayout loading={true} language={'en-US'} ><h1>1111</h1></BasicLayout>;
```

More skills for writing demo: https://d.umijs.org/guide/basic#write-component-demo
