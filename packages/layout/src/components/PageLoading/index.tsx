import type { SpinProps } from 'antd';
import { Spin } from 'antd';
import React from 'react';

const PageLoading: React.FC<SpinProps & any> = ({
  isLoading,
  pastDelay,
  timedOut,
  error,
  retry,
  ...reset
}) => (
  <div style={{ paddingTop: 50, textAlign: 'center' }}>
    <Spin size="large" {...reset} />
  </div>
);

export default PageLoading;
