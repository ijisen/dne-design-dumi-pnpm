import React from 'react';
import { default as Foo } from '@dne-design/pro-foo';
import { getName } from '@dne-design/pro-utils';
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
export default (function (_ref) {
  var title = _ref.title;
  getName("foo get Name");
  return /*#__PURE__*/_jsxs("div", {
    children: [/*#__PURE__*/_jsx("p", {
      children: "1111123"
    }), /*#__PURE__*/_jsx(Foo, {
      title: title
    }), /*#__PURE__*/_jsx("h1", {
      children: title
    })]
  });
});