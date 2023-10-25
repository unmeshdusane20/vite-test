import {
  classnames
} from "./chunk-2EMOA6GN.js";
import {
  Host,
  getElement,
  h,
  registerInstance
} from "./chunk-3SL7DDGR.js";

// node_modules/@telekom/scale-components/dist/esm/scale-list.entry.js
var listCss = ":host{--spacing-left:0;--spacing-left-nested:var(--telekom-spacing-composition-space-04)}.list{padding-left:var(--spacing-left)}.list--nested{margin-top:0;margin-bottom:0;padding-left:var(--spacing-left-nested)}";
var List = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.isNested = false;
    this.ordered = false;
  }
  orderedChanged(newValue) {
    this.propagatePropsToChildren(newValue);
  }
  componentDidLoad() {
    this.propagatePropsToChildren(this.ordered);
  }
  connectedCallback() {
    this.isNested = this.el.closest("scale-list-item") != null;
    if (this.isNested) {
      this.el.setAttribute("slot", "nested");
    } else {
      this.el.removeAttribute("slot");
    }
  }
  propagatePropsToChildren(ordered) {
    const items = Array.from(this.el.children).filter((child) => child.matches("scale-list-item"));
    items.forEach((item, index) => {
      item.ordered = ordered;
      item.index = index + 1;
    });
  }
  render() {
    const Tag = this.ordered ? "ol" : "ul";
    return h(Host, null, this.styles && h("style", null, this.styles), h(Tag, { class: this.getCssClassMap(), part: classnames("base", this.ordered && "ordered", this.isNested && "nested") }, h("slot", null)));
  }
  getCssClassMap() {
    return classnames("list", this.ordered && "list--type-ordered", this.isNested && "list--nested");
  }
  get el() {
    return getElement(this);
  }
  static get watchers() {
    return {
      "ordered": ["orderedChanged"]
    };
  }
};
List.style = listCss;
export {
  List as scale_list
};
//# sourceMappingURL=scale-list.entry-7MWFL5ZM.js.map
