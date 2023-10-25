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

// node_modules/@telekom/scale-components/dist/esm/scale-grid-item.entry.js
var GridItem = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  componentWillLoad() {
    const setProps = [
      createBreakpointValuedProp("size", this.size),
      createBreakpointValuedProp("offset", this.offset)
    ].filter((setProp) => setProp);
    const cssStrings = setProps.map((setProp) => createCssString(setProp));
    this.hostElement.setAttribute("style", cssStrings.join(""));
  }
  render() {
    return h(Host, null, h("slot", null));
  }
  get hostElement() {
    return getElement(this);
  }
};
export {
  GridItem as scale_grid_item
};
//# sourceMappingURL=scale-grid-item.entry-ZHZWVZIK.js.map
