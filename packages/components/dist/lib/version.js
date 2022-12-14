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

// src/version.ts
var version_exports = {};
__export(version_exports, {
  version: () => version
});
module.exports = __toCommonJS(version_exports);
var version = {
  "@dne-design/pro-bar": "2.0.1",
  "@dne-design/pro-button": "2.0.1",
  "@dne-design/pro-components": "2.0.3",
  "@dne-design/pro-foo": "2.0.1",
  "@dne-design/pro-header": "0.0.3",
  "@dne-design/pro-layout": "2.0.1",
  "@dne-design/pro-utils": "2.0.2"
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  version
});
