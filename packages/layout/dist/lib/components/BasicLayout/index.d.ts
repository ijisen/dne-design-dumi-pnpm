import type { CSSProperties } from 'react';
import React from 'react';
import type { LocaleType } from '@dne-design/pro-utils';
import './style.less';
export declare type MessageDescriptor = {
    id: any;
    description?: string;
    defaultMessage?: string;
};
export declare type BasicLayoutProps = {
    /**
     * @name language
     *
     * @description "zh-CN" | "en-US"
     * @example 中文 language="zh-CN"
     * @example 英文 language="en-US"
     */
    language?: LocaleType;
    /**
     * @name loading 的 loading 效果，设置完成之后只展示一个 loading
     *
     * @example loading={true}
     */
    loading?: boolean;
    formatMessage?: (message: MessageDescriptor) => string;
    /**
     * content 的样式
     *
     * @example 背景颜色为红色 contentStyle={{ backgroundColor: 'red '}}
     */
    style?: CSSProperties;
    className?: string;
    children?: React.ReactNode;
};
/**
 * 🌃 Powerful and easy to use beautiful layout 🏄‍ Support multiple topics and layout types
 *
 * @param props
 */
declare const Index: React.FC<BasicLayoutProps>;
export default Index;
