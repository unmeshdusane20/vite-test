import {
  classnames
} from "./chunk-2EMOA6GN.js";
import {
  Host,
  h,
  registerInstance
} from "./chunk-3SL7DDGR.js";

// node_modules/@telekom/scale-components/dist/esm/scale-menu-flyout-divider.entry.js
var menuFlyoutDividerCss = ":host{display:block;--color:var(--telekom-color-ui-faint)}.menu-flyout-divider{border-top:var(--telekom-line-weight-standard) solid var(--color);margin:6px 0}";
var MenuFlyoutDivider = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  getCssClassMap() {
    return classnames("menu-flyout-divider");
  }
  render() {
    return h(Host, { role: "separator" }, this.styles && h("style", null, this.styles), h("div", { class: this.getCssClassMap(), part: "base", "aria-hidden": "true" }));
  }
};
MenuFlyoutDivider.style = menuFlyoutDividerCss;
export {
  MenuFlyoutDivider as scale_menu_flyout_divider
};
//# sourceMappingURL=scale-menu-flyout-divider.entry-V7OMS7DK.js.map
