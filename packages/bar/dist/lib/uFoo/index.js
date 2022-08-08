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

// src/uFoo/index.tsx
var uFoo_exports = {};
__export(uFoo_exports, {
  default: () => uFoo_default
});
module.exports = __toCommonJS(uFoo_exports);
var import_react = __toESM(require("react"));
var import_pro_foo = __toESM(require("@dne-design/pro-foo"));
var import_pro_utils = require("@dne-design/pro-utils");
var uFoo_default = ({ title }) => {
  (0, import_pro_utils.getName)("foo get Name");
  return /* @__PURE__ */ import_react.default.createElement("div", null, /* @__PURE__ */ import_react.default.createElement("p", null, "1111123"), /* @__PURE__ */ import_react.default.createElement(import_pro_foo.default, {
    title
  }), /* @__PURE__ */ import_react.default.createElement("h1", null, title));
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {});
