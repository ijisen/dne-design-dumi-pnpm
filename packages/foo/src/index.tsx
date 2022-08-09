import React from 'react';
import './style.less'
<<<<<<< HEAD
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
=======

export default ({ title }: { title: string }) => <h1 className='color'>{title}</h1>;
>>>>>>> 021635d54c863f1756e15adda30698edbdd1c68e
