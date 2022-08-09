import type { CSSProperties } from 'react';
import React, { useCallback, useEffect } from 'react';
import classNames from 'classnames';
import type { LocaleType } from '@dne-design/pro-utils';
import { getLocaleObject } from '@dne-design/pro-utils';
import PageLoading from '../PageLoading';
import './style.less';
import locales from '../../locales';

export type MessageDescriptor = {
  id: any;
  description?: string;
  defaultMessage?: string;
};

export type BasicLayoutProps = {

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

  children?: React.ReactNode
};


/**
 * 🌃 Powerful and easy to use beautiful layout 🏄‍ Support multiple topics and layout types
 *
 * @param props
 */
const Index: React.FC<BasicLayoutProps> = (props) => {
  const {
    children,
    style,
    formatMessage: propsFormatMessage,
    loading,
  } = props || {};


  const formatMessage = useCallback(
    ({id, defaultMessage, ...restParams}: { id: string; defaultMessage?: string }): string => {
      if (propsFormatMessage) {
        return propsFormatMessage({
          id,
          defaultMessage,
          ...restParams,
        });
      }
      const gLocale = getLocaleObject({
        language: props?.language,
        locales
      });
      return gLocale[id] ? gLocale[id] : (defaultMessage as string);
    },
    [propsFormatMessage],
  );


  useEffect(() => {

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading) {
    return (
      <div className={classNames(props.className)}>
        <PageLoading isLoading={loading} />
      </div>
    );
  }

  return (
    <div className={classNames(props.className)} style={{...style}}>
      <h1>{formatMessage({
        id: 'app.setting.pagestyle'
      })}</h1>
      {children}
    </div>
  );
};


export default Index;
