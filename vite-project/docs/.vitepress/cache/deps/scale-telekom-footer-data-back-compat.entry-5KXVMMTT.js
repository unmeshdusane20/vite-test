import {
  h,
  registerInstance
} from "./chunk-3SL7DDGR.js";

// node_modules/@telekom/scale-components/dist/esm/scale-telekom-footer-data-back-compat.entry.js
var readData = (data) => {
  let parsedData;
  try {
    parsedData = JSON.parse(data);
  } catch (error) {
    parsedData = data;
  }
  return parsedData;
};
var TelekomFooterDataBackCompat = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.type = "standard";
    this.footerNavigation = [];
    this.copyright = "© Deutsche Telekom AG";
  }
  render() {
    return h("scale-telekom-footer", { type: this.type }, h("scale-telekom-footer-content", null, h("span", { slot: "notice" }, " ", this.copyright, " "), h("ul", { slot: "navigation" }, readData(this.footerNavigation).map(({ name, id, href = "javascript:void(0);", target = "_self" }) => {
      return h("li", null, h("a", { href, id, target }, name));
    }))));
  }
};
export {
  TelekomFooterDataBackCompat as scale_telekom_footer_data_back_compat
};
//# sourceMappingURL=scale-telekom-footer-data-back-compat.entry-5KXVMMTT.js.map
