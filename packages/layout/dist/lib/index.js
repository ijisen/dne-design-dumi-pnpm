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

// src/index.tsx
var src_exports = {};
__export(src_exports, {
  BasicLayout: () => import_BasicLayout.default,
  GlobalFooter: () => import_GlobalFooter.default,
  GlobalHeader: () => import_GlobalHeader.default,
  PageLoading: () => import_PageLoading.default
});
module.exports = __toCommonJS(src_exports);
var import_GlobalHeader = __toESM(require("./components/GlobalHeader"));
var import_GlobalFooter = __toESM(require("./components/GlobalFooter"));
var import_BasicLayout = __toESM(require("./components/BasicLayout"));
var import_PageLoading = __toESM(require("./components/PageLoading"));
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  BasicLayout,
  GlobalFooter,
  GlobalHeader,
  PageLoading
});
