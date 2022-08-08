import React from 'react';
import { default as Foo } from '@dne-design/pro-foo';
import { getName } from '@dne-design/pro-utils';

export default ({title}: { title: string }) => {
  getName("foo get Name");
  return (
    <div>
      <p>1111123</p>
      <Foo title={title}/>
      <h1>{title}</h1>
    </div>
  )
};
