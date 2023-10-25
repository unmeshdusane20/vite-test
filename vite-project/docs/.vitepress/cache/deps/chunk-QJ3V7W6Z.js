// node_modules/@telekom/scale-components/dist/esm/utils-c4af5b47.js
var hasShadowDom = (el) => {
  return !!el.shadowRoot && !!el.attachShadow;
};
var isPseudoClassSupported = (pseudoClass) => {
  let ss = document.styleSheets[0];
  if (!ss) {
    const el = document.createElement("style");
    document.head.appendChild(el);
    ss = document.styleSheets[0];
    document.head.removeChild(el);
  }
  function testPseudo() {
    try {
      if (!/^:/.test(pseudoClass)) {
        pseudoClass = ":" + pseudoClass;
      }
      ss.insertRule("html" + pseudoClass + "{}", 0);
      ss.deleteRule(0);
      return true;
    } catch (e) {
      return false;
    }
  }
  return testPseudo();
};
function emitEvent(instance, eventKey, detail) {
  const legacyKey = eventKey + "Legacy";
  const emitted = [];
  if (typeof instance[legacyKey] !== "undefined") {
    emitted.push(instance[legacyKey].emit(detail));
  }
  emitted.push(instance[eventKey].emit(detail));
  return emitted;
}
function isClickOutside(event, host) {
  let target = event.target;
  const hasShadow = target.shadowRoot != null;
  const composedPath = hasShadow ? event.composedPath() : [];
  do {
    if (target === host) {
      return false;
    }
    if (hasShadow) {
      target = composedPath.shift();
    } else {
      target = target.parentNode;
    }
  } while (target);
  return true;
}
var isScaleIcon = (el) => {
  if (el == null || el.nodeType !== 1) {
    return false;
  }
  return el.nodeName.toUpperCase().substring(0, 10) === "SCALE-ICON";
};
var id = 0;
function generateUniqueId() {
  return id++;
}
var animationsFinished = (el) => {
  return Promise.all(el.getAnimations({ subtree: true }).map((x) => x.finished));
};

export {
  hasShadowDom,
  isPseudoClassSupported,
  emitEvent,
  isClickOutside,
  isScaleIcon,
  generateUniqueId,
  animationsFinished
};
/*! Bundled license information:

@telekom/scale-components/dist/esm/utils-c4af5b47.js:
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
//# sourceMappingURL=chunk-QJ3V7W6Z.js.map
