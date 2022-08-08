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

// src/components/GlobalFooter/index.tsx
var GlobalFooter_exports = {};
__export(GlobalFooter_exports, {
  default: () => GlobalFooter_default
});
module.exports = __toCommonJS(GlobalFooter_exports);
var import_classnames = __toESM(require("classnames"));
var import_react = __toESM(require("react"));
var import_index = require("./index.less");
var GlobalFooter_default = ({ className, copyright, style }) => {
  const baseClassName = "dne-pro-layout-footer";
  const clsString = (0, import_classnames.default)(baseClassName, className);
  return /* @__PURE__ */ import_react.default.createElement("div", {
    className: clsString,
    style
  }, copyright && /* @__PURE__ */ import_react.default.createElement("div", {
    className: `${baseClassName}-copyright`
  }, copyright));
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {});
