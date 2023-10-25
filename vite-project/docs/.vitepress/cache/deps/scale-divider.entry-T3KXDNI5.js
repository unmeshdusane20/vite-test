import {
  classnames
} from "./chunk-2EMOA6GN.js";
import {
  Host,
  h,
  registerInstance
} from "./chunk-3SL7DDGR.js";

// node_modules/@telekom/scale-components/dist/esm/scale-divider.entry.js
var dividerCss = ":host{--width:100%;--height:100%;--spacing:var(--telekom-spacing-composition-space-05);--color:var(--telekom-color-ui-faint);--border-width:var(--telekom-spacing-composition-space-01);--min-height-vertical:var(--telekom-spacing-composition-space-08);width:var(--width);height:var(--height)}.divider{padding:var(--spacing)}.divider--vertical{display:inline-flex;height:inherit}.divider__horizontal{margin:0;border:0;border-top:var(--border-width) solid var(--color)}.divider__vertical{display:inline-flex;height:inherit;min-height:var(--min-height-vertical);border-left:var(--border-width) solid var(--color)}";
var Divider = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.vertical = false;
  }
  render() {
    return h(Host, null, this.styles && h("style", null, this.styles), h("div", { class: this.getCssClassMap(), "aria-hidden": "true", part: classnames("base", this.vertical && "vertical") }, !this.vertical ? h("hr", { class: "divider__horizontal", part: "rule-horizontal" }) : h("span", { class: "divider__vertical", part: "rule-vertical" })));
  }
  getCssClassMap() {
    return classnames("divider", this.vertical && `divider--vertical`);
  }
};
Divider.style = dividerCss;
export {
  Divider as scale_divider
};
//# sourceMappingURL=scale-divider.entry-T3KXDNI5.js.map
