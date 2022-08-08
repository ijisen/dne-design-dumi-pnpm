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

// src/locales/en-US/settingDrawer.ts
var settingDrawer_exports = {};
__export(settingDrawer_exports, {
  default: () => settingDrawer_default
});
module.exports = __toCommonJS(settingDrawer_exports);
var settingDrawer_default = {
  "app.setting.pagestyle": "Page style setting",
  "app.setting.pagestyle.dark": "Dark Menu style",
  "app.setting.pagestyle.light": "Light Menu style",
  "app.setting.pagestyle.realdark": "Dark style (Beta)",
  "app.setting.content-width": "Content Width",
  "app.setting.content-width.fixed": "Fixed",
  "app.setting.content-width.fluid": "Fluid",
  "app.setting.themecolor": "Theme Color",
  "app.setting.themecolor.dust": "Dust Red",
  "app.setting.themecolor.volcano": "Volcano",
  "app.setting.themecolor.sunset": "Sunset Orange",
  "app.setting.themecolor.cyan": "Cyan",
  "app.setting.themecolor.green": "Polar Green",
  "app.setting.themecolor.daybreak": "Daybreak Blue (default)",
  "app.setting.themecolor.geekblue": "Geek Blue",
  "app.setting.themecolor.purple": "Golden Purple",
  "app.setting.navigationmode": "Navigation Mode",
  "app.setting.regionalsettings": "Regional Settings",
  "app.setting.regionalsettings.header": "Header",
  "app.setting.regionalsettings.menu": "Menu",
  "app.setting.regionalsettings.footer": "Footer",
  "app.setting.regionalsettings.menuHeader": "Menu Header",
  "app.setting.sidemenu": "Side Menu Layout",
  "app.setting.topmenu": "Top Menu Layout",
  "app.setting.mixmenu": "Mix Menu Layout",
  "app.setting.splitMenus": "Split Menus",
  "app.setting.fixedheader": "Fixed Header",
  "app.setting.fixedsidebar": "Fixed Sidebar",
  "app.setting.fixedsidebar.hint": "Works on Side Menu Layout",
  "app.setting.hideheader": "Hidden Header when scrolling",
  "app.setting.hideheader.hint": "Works when Hidden Header is enabled",
  "app.setting.othersettings": "Other Settings",
  "app.setting.weakmode": "Weak Mode",
  "app.setting.copy": "Copy Setting",
  "app.setting.loading": "Loading theme",
  "app.setting.copyinfo": "copy success\uFF0Cplease replace defaultSettings in src/models/setting.js",
  "app.setting.production.hint": "Setting panel shows in development environment only, please manually modify"
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {});
