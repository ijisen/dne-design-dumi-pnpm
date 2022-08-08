var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target, mod));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/components/BasicLayout/index.tsx
var BasicLayout_exports = {};
__export(BasicLayout_exports, {
  default: () => BasicLayout_default
});
module.exports = __toCommonJS(BasicLayout_exports);
var import_react = __toESM(require("react"));
var import_classnames = __toESM(require("classnames"));
var import_pro_utils = require("@dne-design/pro-utils");
var import_PageLoading = __toESM(require("../PageLoading"));
var import_style = require("./style.less");
var import_locales = __toESM(require("../../locales"));
var Index = (props) => {
  const {
    children,
    style,
    formatMessage: propsFormatMessage,
    loading
  } = props || {};
  const formatMessage = (0, import_react.useCallback)(({ id, defaultMessage, ...restParams }) => {
    if (propsFormatMessage) {
      return propsFormatMessage({
        id,
        defaultMessage,
        ...restParams
      });
    }
    const gLocale = (0, import_pro_utils.getLocaleObject)({
      language: props == null ? void 0 : props.language,
      locales: import_locales.default
    });
    return gLocale[id] ? gLocale[id] : defaultMessage;
  }, [propsFormatMessage]);
  (0, import_react.useEffect)(() => {
  }, []);
  if (loading) {
    return /* @__PURE__ */ import_react.default.createElement("div", {
      className: (0, import_classnames.default)(props.className)
    }, /* @__PURE__ */ import_react.default.createElement(import_PageLoading.default, {
      isLoading: loading
    }));
  }
  return /* @__PURE__ */ import_react.default.createElement("div", {
    className: (0, import_classnames.default)(props.className),
    style: { ...style }
  }, /* @__PURE__ */ import_react.default.createElement("h1", null, formatMessage({
    id: "app.setting.pagestyle"
  })), children);
};
var BasicLayout_default = Index;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {});
