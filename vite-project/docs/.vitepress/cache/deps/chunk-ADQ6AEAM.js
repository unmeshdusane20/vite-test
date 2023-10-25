import {
  h
} from "./chunk-3SL7DDGR.js";

// node_modules/@telekom/scale-components/dist/esm/render-icon-05777d0c.js
var renderIcon = (value, customContainerClass) => {
  if (typeof value === "function") {
    return h("span", { innerHTML: value(), class: customContainerClass });
  }
  if (typeof value === "string") {
    return h("scale-icon", { name: value });
  }
  const Tag = value.tag;
  return h(Tag, Object.assign({}, value.attributes));
};

export {
  renderIcon
};
/*! Bundled license information:

@telekom/scale-components/dist/esm/render-icon-05777d0c.js:
  (**
   * @license
   * Scale https://github.com/telekom/scale
   *
   * Copyright (c) 2021 Egor Kirpichev and contributors, Deutsche Telekom AG
   *
   * This Source Code Form is subject to the terms of the Mozilla Public
   * License, v. 2.0. If a copy of the MPL was not distributed with this
   * file, You can obtain one at https://mozilla.org/MPL/2.0/.
   *)
*/
//# sourceMappingURL=chunk-ADQ6AEAM.js.map
