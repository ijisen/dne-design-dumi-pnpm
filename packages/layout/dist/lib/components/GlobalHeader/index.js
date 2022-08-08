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

// src/components/GlobalHeader/index.tsx
var GlobalHeader_exports = {};
__export(GlobalHeader_exports, {
  default: () => GlobalHeader_default
});
module.exports = __toCommonJS(GlobalHeader_exports);
var import_react = __toESM(require("react"));
var import_index = require("./index.less");
var GlobalHeader = (props) => {
  const [collapse, setCollapse] = (0, import_react.useState)(false);
  const {
    onCollapse,
    children,
    style
  } = props;
  return /* @__PURE__ */ import_react.default.createElement("div", {
    style: { ...style },
    onClick: (e) => {
      setCollapse(!collapse);
      onCollapse && onCollapse(e);
    }
  }, collapse && children);
};
var GlobalHeader_default = GlobalHeader;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {});
