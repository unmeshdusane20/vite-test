import {
  createBreakpointValuedProp,
  createCssString
} from "./chunk-Q2ITFOQW.js";
import {
  Host,
  getElement,
  h,
  registerInstance
} from "./chunk-3SL7DDGR.js";

// node_modules/@telekom/scale-components/dist/esm/scale-grid.entry.js
var Grid = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  componentWillLoad() {
    const sizedProps = [
      createBreakpointValuedProp("columns", this.columns),
      createBreakpointValuedProp("gutter-y", this.gutterY),
      createBreakpointValuedProp("gutter-x", this.gutterX),
      createBreakpointValuedProp("spacing", this.spacing)
    ].filter((sizeProp) => sizeProp);
    const sizableCssStrings = sizedProps.map((sizedProp) => createCssString(sizedProp));
    const maxWidthCssStirng = this.maxWidth ? `--max-width:${this.maxWidth};` : "";
    const styleString = sizableCssStrings.join("") + maxWidthCssStirng;
    this.hostElement.setAttribute("style", styleString);
  }
  render() {
    return h(Host, null, h("slot", null));
  }
  get hostElement() {
    return getElement(this);
  }
};
export {
  Grid as scale_grid
};
//# sourceMappingURL=scale-grid.entry-NQF5LWOH.js.map
