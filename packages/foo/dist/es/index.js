import React from 'react';
import "./style.less";
import Button from '@dne-design/pro-button';
import { getName } from '@dne-design/pro-utils';
import { jsx as _jsx } from "react/jsx-runtime";
export default (function (_ref) {
  var title = _ref.title;
  getName('foo Name');
  return /*#__PURE__*/_jsx("div", {
    children: /*#__PURE__*/_jsx(Button, {
      title: "Foo Btn"
    })
  });
});