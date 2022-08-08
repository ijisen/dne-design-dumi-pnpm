import classNames from 'classnames';
import React from 'react';
import "./index.less";
import { jsx as _jsx } from "react/jsx-runtime";
export default (function (_ref) {
  var className = _ref.className,
      copyright = _ref.copyright,
      style = _ref.style;
  var baseClassName = 'dne-pro-layout-footer';
  var clsString = classNames(baseClassName, className);
  return /*#__PURE__*/_jsx("div", {
    className: clsString,
    style: style,
    children: copyright && /*#__PURE__*/_jsx("div", {
      className: "".concat(baseClassName, "-copyright"),
      children: copyright
    })
  });
});