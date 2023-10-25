import {
  Host,
  getElement,
  h,
  registerInstance
} from "./chunk-3SL7DDGR.js";

// node_modules/@telekom/scale-components/dist/esm/scale-telekom-app-shell.entry.js
var telekomAppShellCss = ":host{--spacing-x:0;--min-height:100vh}[part~='base']{display:flex;min-height:var(--min-height);flex-direction:column}[part~='content']{box-sizing:border-box;align-self:center;width:100%;padding-left:var(--spacing-x);padding-right:var(--spacing-x);flex:1}";
var Shell = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return h(Host, null, this.styles && h("style", null, this.styles), h("div", { part: "base" }, h("slot", { name: "header" }), h("main", { part: "content" }, h("slot", null)), h("slot", { name: "footer" })));
  }
  get hostElement() {
    return getElement(this);
  }
};
Shell.style = telekomAppShellCss;
export {
  Shell as scale_telekom_app_shell
};
//# sourceMappingURL=scale-telekom-app-shell.entry-LCFIHNX2.js.map
