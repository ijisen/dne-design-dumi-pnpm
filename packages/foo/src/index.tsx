import React from 'react';
import './style.less'
import Button from '@dne-design/pro-button'
import { getName } from '@dne-design/pro-utils'

export default ({ title }: { title: string }) => {
  getName('foo Name');
  return (
    <div>
      <Button title={"Foo Btn"} />
    </div>
  )
};
