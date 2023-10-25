import {
  statusNote
} from "./chunk-VGXEJTC4.js";
import {
  Host,
  getElement,
  h,
  registerInstance
} from "./chunk-3SL7DDGR.js";

// node_modules/@telekom/scale-components/dist/esm/scale-tab-panel.entry.js
var tabPanelCss = ":host{--spacing-top:var(--telekom-spacing-composition-space-08)}.tab-panel{margin-top:var(--spacing-top)}";
var i = 0;
var TabPanel = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.generatedId = i++;
    this.small = false;
    this.size = "small";
  }
  componentDidRender() {
    if (this.small !== false) {
      statusNote({
        tag: "deprecated",
        message: 'Property "small" is deprecated.',
        type: "warn",
        source: this.el
      });
    }
  }
  render() {
    return h(Host, { id: `scale-tab-panel-${this.generatedId}`, role: "tabpanel", tabindex: "0" }, this.styles && h("style", null, this.styles), h("div", { part: "tab-panel", class: "tab-panel" }, h("slot", null)));
  }
  get el() {
    return getElement(this);
  }
};
TabPanel.style = tabPanelCss;
export {
  TabPanel as scale_tab_panel
};
//# sourceMappingURL=scale-tab-panel.entry-WEYGSB6G.js.map
