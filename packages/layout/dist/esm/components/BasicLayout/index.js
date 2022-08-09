var _excluded = ["id", "defaultMessage"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React, { useCallback, useEffect } from 'react';
import classNames from 'classnames';
import { getLocaleObject } from '@dne/pro-utils';
import PageLoading from "../PageLoading";
import "./style.less";
import locales from "../../locales";
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";

/**
 * 🌃 Powerful and easy to use beautiful layout 🏄‍ Support multiple topics and layout types
 *
 * @param props
 */
var Index = function Index(props) {
  var _ref = props || {},
      children = _ref.children,
      style = _ref.style,
      propsFormatMessage = _ref.formatMessage,
      loading = _ref.loading;

  var formatMessage = useCallback(function (_ref2) {
    var id = _ref2.id,
        defaultMessage = _ref2.defaultMessage,
        restParams = _objectWithoutProperties(_ref2, _excluded);

    if (propsFormatMessage) {
      return propsFormatMessage(_objectSpread({
        id: id,
        defaultMessage: defaultMessage
      }, restParams));
    }

    var gLocale = getLocaleObject({
      language: props === null || props === void 0 ? void 0 : props.language,
      locales: locales
    });
    return gLocale[id] ? gLocale[id] : defaultMessage;
  }, [propsFormatMessage]);
  useEffect(function () {// eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading) {
    return /*#__PURE__*/_jsx("div", {
      className: classNames(props.className),
      children: /*#__PURE__*/_jsx(PageLoading, {})
    });
  }

  return /*#__PURE__*/_jsxs("div", {
    className: classNames(props.className),
    style: _objectSpread({}, style),
    children: [/*#__PURE__*/_jsx("h1", {
      children: formatMessage({
        id: 'app.setting.pagestyle'
      })
    }), children]
  });
};

export default Index;