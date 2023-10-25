import {
  classnames
} from "./chunk-2EMOA6GN.js";
import {
  Host,
  getElement,
  h,
  registerInstance
} from "./chunk-3SL7DDGR.js";

// node_modules/@telekom/scale-components/dist/esm/scale-accordion.entry.js
var Accordion = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.dependent = false;
    this.expanded = false;
    this.headingLevel = null;
    this.iconLocation = "left";
  }
  /**
   * Handle `dependent`
   */
  collapsibleHandler(event) {
    event.stopPropagation();
    const { expanded } = event.detail;
    if (!this.dependent || expanded === false) {
      return;
    }
    this.getCollapsibleChildren().forEach((child) => {
      if (child !== event.target && child.hasAttribute("expanded")) {
        child.expanded = false;
      }
    });
  }
  headingLevelChanged(newValue) {
    this.propagatePropsToChildren(newValue, this.iconLocation);
  }
  iconLocationChanged(newValue) {
    this.propagatePropsToChildren(this.headingLevel, newValue);
  }
  connectedCallback() {
    if (!this.dependent) {
      this.getCollapsibleChildren().forEach((child) => {
        child.expanded = this.expanded;
      });
    }
  }
  componentDidLoad() {
    if (this.headingLevel !== null || this.iconLocation !== "left") {
      this.propagatePropsToChildren(this.headingLevel, this.iconLocation);
    }
  }
  getCollapsibleChildren() {
    return Array.from(this.el.children).filter((el) => el.tagName === "SCALE-COLLAPSIBLE");
  }
  propagatePropsToChildren(headingLevel, iconLocation) {
    this.getCollapsibleChildren().forEach((item) => {
      item.headingLevel = headingLevel;
      item.iconLocation = iconLocation;
    });
  }
  render() {
    return h(Host, null, this.styles && h("style", null, this.styles), h("div", { class: this.getCssClassMap(), part: "base" }, h("slot", null)));
  }
  getCssClassMap() {
    return classnames("accordion");
  }
  get el() {
    return getElement(this);
  }
  static get watchers() {
    return {
      "headingLevel": ["headingLevelChanged"],
      "iconLocation": ["iconLocationChanged"]
    };
  }
};
export {
  Accordion as scale_accordion
};
//# sourceMappingURL=scale-accordion.entry-UGW4YVEO.js.map
