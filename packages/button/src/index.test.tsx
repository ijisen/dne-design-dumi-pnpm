import '@testing-library/jest-dom';
import React from 'react';
import { render, screen } from '@testing-library/react';
import { Foo } from "@dne-design/pro-components";

describe('<Foo />', () => {
  it('render foo with dumi', () => {
    const msg = 'dumi';

    render(<Foo title={msg}/>);
    expect(screen.queryByText(msg)).toBeInTheDocument();
  });
});
