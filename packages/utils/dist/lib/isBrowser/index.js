var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
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
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/isBrowser/index.ts
var isBrowser_exports = {};
__export(isBrowser_exports, {
  default: () => isBrowser_default
});
module.exports = __toCommonJS(isBrowser_exports);
var isNode = typeof process !== "undefined" && process.versions != null && process.versions.node != null;
var isBrowser = () => {
  if (process.env.NODE_ENV === "TEST") {
    return true;
  }
  return typeof window !== "undefined" && typeof window.document !== "undefined" && typeof window.matchMedia !== "undefined" && !isNode;
};
var isBrowser_default = isBrowser;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {});
