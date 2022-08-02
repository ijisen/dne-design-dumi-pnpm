import classNames from 'classnames';
import React from 'react';
import './index.less';

export type GlobalFooterProps = {
  copyright?: React.ReactNode;
  style?: React.CSSProperties;
  prefixCls?: string;
  className?: string;
};

export default ({ className, copyright, style }: GlobalFooterProps) => {

  const baseClassName = 'dne-pro-layout-footer';
  const clsString = classNames(baseClassName, className);
  return (
    <div className={clsString} style={style}>
      {copyright && <div className={`${baseClassName}-copyright`}>{copyright}</div>}
    </div>
  );
};
