import '@testing-library/jest-dom';
import React from 'react';
import { render, screen } from '@testing-library/react';
<<<<<<< HEAD
import { Foo } from "@dne-design/pro-components";

describe('<Foo />', () => {
=======
import { Foo } from "@dne/pro-components";

describe('<foo />', () => {
>>>>>>> 021635d54c863f1756e15adda30698edbdd1c68e
  it('render foo with dumi', () => {
    const msg = 'dumi';

    render(<Foo title={msg}/>);
    expect(screen.queryByText(msg)).toBeInTheDocument();
  });
});
