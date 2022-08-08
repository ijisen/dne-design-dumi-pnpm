import React, { useState } from 'react';

import './index.less';

export type GlobalHeaderProps = {
  onCollapse?: (e?: any) => void;
  children?: React.ReactNode;
  style?: React.CSSProperties;
};

const GlobalHeader: React.FC<GlobalHeaderProps> = (props) => {
  const [collapse, setCollapse] = useState(false);
  const {
    onCollapse,
    children,
    style
  } = props;

  return (
    <div style={{ ...style }} onClick={e => {
      setCollapse(!collapse);
      onCollapse && onCollapse(e);
    }}>
      {
        collapse && (children)
      }
    </div>
  );
};

export default GlobalHeader;
