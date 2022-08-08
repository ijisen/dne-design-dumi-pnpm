import React from 'react';
import './index.less';
export declare type GlobalHeaderProps = {
    onCollapse?: (e?: any) => void;
    children?: React.ReactNode;
    style?: React.CSSProperties;
};
declare const GlobalHeader: React.FC<GlobalHeaderProps>;
export default GlobalHeader;
