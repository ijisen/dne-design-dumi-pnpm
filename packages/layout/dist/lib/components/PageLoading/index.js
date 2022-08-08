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

// src/components/PageLoading/index.tsx
var PageLoading_exports = {};
__export(PageLoading_exports, {
  default: () => PageLoading_default
});
module.exports = __toCommonJS(PageLoading_exports);
var import_antd = require("antd");
var import_react = __toESM(require("react"));
var PageLoading = ({
  isLoading,
  pastDelay,
  timedOut,
  error,
  retry,
  ...reset
}) => /* @__PURE__ */ import_react.default.createElement("div", {
  style: { paddingTop: 50, textAlign: "center" }
}, /* @__PURE__ */ import_react.default.createElement(import_antd.Spin, {
  size: "large",
  ...reset
}));
var PageLoading_default = PageLoading;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {});
