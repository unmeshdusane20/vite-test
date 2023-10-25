// node_modules/@telekom/scale-components/dist/esm/menu-utils-ee192675.js
var findSelected = (structure = [], id, parent) => structure.reduce((acc, item) => {
  if (item.id === id) {
    return { selected: item, parent };
  }
  if (item.children && item.children.length && !!findSelected(item.children, id, item).selected) {
    return findSelected(item.children, id, item);
  }
  return acc;
}, { selected: null, parent: null });
var findRootNode = (structure, id) => {
  let result = findSelected(structure, id);
  while (result.parent) {
    result = findSelected(structure, result.parent.id);
  }
  return result.selected;
};

export {
  findSelected,
  findRootNode
};
/*! Bundled license information:

@telekom/scale-components/dist/esm/menu-utils-ee192675.js:
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
//# sourceMappingURL=chunk-UEID6AGC.js.map
