import {
  emitEvent,
  generateUniqueId
} from "./chunk-QJ3V7W6Z.js";
import {
  statusNote
} from "./chunk-VGXEJTC4.js";
import {
  classnames
} from "./chunk-2EMOA6GN.js";
import {
  Host,
  NAMESPACE,
  createEvent,
  getElement,
  h,
  registerInstance
} from "./chunk-3SL7DDGR.js";

// node_modules/@telekom/scale-components/dist/esm/scale-date-picker.entry.js
var scopeId;
var contentRef;
var hostTagName;
var useNativeShadowDom = false;
var checkSlotFallbackVisibility = false;
var checkSlotRelocate = false;
var isSvgMode = false;
var queuePending = false;
var win = typeof window !== "undefined" ? window : {};
var doc = win.document || { head: {} };
var plt = {
  $flags$: 0,
  $resourcesUrl$: "",
  jmp: (h3) => h3(),
  raf: (h3) => requestAnimationFrame(h3),
  ael: (el, eventName, listener, opts) => el.addEventListener(eventName, listener, opts),
  rel: (el, eventName, listener, opts) => el.removeEventListener(eventName, listener, opts),
  ce: (eventName, opts) => new CustomEvent(eventName, opts)
};
var supportsShadow = true;
var promiseResolve = (v) => Promise.resolve(v);
var supportsConstructibleStylesheets = (() => {
  try {
    new CSSStyleSheet();
    return typeof new CSSStyleSheet().replace === "function";
  } catch (e) {
  }
  return false;
})();
var addHostEventListeners = (elm, hostRef, listeners, attachParentListeners) => {
  if (listeners) {
    listeners.map(([flags, name, method]) => {
      const target = getHostListenerTarget(elm, flags);
      const handler = hostListenerProxy(hostRef, method);
      const opts = hostListenerOpts(flags);
      plt.ael(target, name, handler, opts);
      (hostRef.$rmListeners$ = hostRef.$rmListeners$ || []).push(() => plt.rel(target, name, handler, opts));
    });
  }
};
var hostListenerProxy = (hostRef, methodName) => (ev) => {
  try {
    {
      if (hostRef.$flags$ & 256) {
        hostRef.$lazyInstance$[methodName](ev);
      } else {
        (hostRef.$queuedListeners$ = hostRef.$queuedListeners$ || []).push([methodName, ev]);
      }
    }
  } catch (e) {
    consoleError(e);
  }
};
var getHostListenerTarget = (elm, flags) => {
  if (flags & 4)
    return doc;
  if (flags & 8)
    return win;
  return elm;
};
var hostListenerOpts = (flags) => (flags & 2) !== 0;
var CONTENT_REF_ID = "r";
var ORG_LOCATION_ID = "o";
var SLOT_NODE_ID = "s";
var TEXT_NODE_ID = "t";
var HYDRATE_ID = "s-id";
var HYDRATED_STYLE_ID = "sty-id";
var HYDRATE_CHILD_ID = "c-id";
var XLINK_NS = "http://www.w3.org/1999/xlink";
var createTime = (fnName, tagName = "") => {
  {
    return () => {
      return;
    };
  }
};
var uniqueTime = (key, measureText) => {
  {
    return () => {
      return;
    };
  }
};
var rootAppliedStyles = /* @__PURE__ */ new WeakMap();
var registerStyle = (scopeId2, cssText, allowCS) => {
  let style = styles.get(scopeId2);
  if (supportsConstructibleStylesheets && allowCS) {
    style = style || new CSSStyleSheet();
    style.replace(cssText);
  } else {
    style = cssText;
  }
  styles.set(scopeId2, style);
};
var addStyle = (styleContainerNode, cmpMeta, mode, hostElm) => {
  let scopeId2 = getScopeId(cmpMeta);
  const style = styles.get(scopeId2);
  styleContainerNode = styleContainerNode.nodeType === 11 ? styleContainerNode : doc;
  if (style) {
    if (typeof style === "string") {
      styleContainerNode = styleContainerNode.head || styleContainerNode;
      let appliedStyles = rootAppliedStyles.get(styleContainerNode);
      let styleElm;
      if (!appliedStyles) {
        rootAppliedStyles.set(styleContainerNode, appliedStyles = /* @__PURE__ */ new Set());
      }
      if (!appliedStyles.has(scopeId2)) {
        if (styleContainerNode.host && (styleElm = styleContainerNode.querySelector(`[${HYDRATED_STYLE_ID}="${scopeId2}"]`))) {
          styleElm.innerHTML = style;
        } else {
          {
            styleElm = doc.createElement("style");
            styleElm.innerHTML = style;
          }
          styleContainerNode.insertBefore(styleElm, styleContainerNode.querySelector("link"));
        }
        if (appliedStyles) {
          appliedStyles.add(scopeId2);
        }
      }
    } else if (!styleContainerNode.adoptedStyleSheets.includes(style)) {
      styleContainerNode.adoptedStyleSheets = [...styleContainerNode.adoptedStyleSheets, style];
    }
  }
  return scopeId2;
};
var attachStyles = (hostRef) => {
  const cmpMeta = hostRef.$cmpMeta$;
  const elm = hostRef.$hostElement$;
  const flags = cmpMeta.$flags$;
  const endAttachStyles = createTime("attachStyles", cmpMeta.$tagName$);
  const scopeId2 = addStyle(elm.shadowRoot ? elm.shadowRoot : elm.getRootNode(), cmpMeta);
  if (flags & 10) {
    elm["s-sc"] = scopeId2;
    elm.classList.add(scopeId2 + "-h");
  }
  endAttachStyles();
};
var getScopeId = (cmp, mode) => "sc-" + cmp.$tagName$;
var EMPTY_OBJ = {};
var SVG_NS = "http://www.w3.org/2000/svg";
var HTML_NS = "http://www.w3.org/1999/xhtml";
var isDef = (v) => v != null;
var isComplexType = (o) => {
  o = typeof o;
  return o === "object" || o === "function";
};
var h2 = (nodeName, vnodeData, ...children) => {
  let child = null;
  let key = null;
  let slotName = null;
  let simple = false;
  let lastSimple = false;
  const vNodeChildren = [];
  const walk = (c) => {
    for (let i = 0; i < c.length; i++) {
      child = c[i];
      if (Array.isArray(child)) {
        walk(child);
      } else if (child != null && typeof child !== "boolean") {
        if (simple = typeof nodeName !== "function" && !isComplexType(child)) {
          child = String(child);
        }
        if (simple && lastSimple) {
          vNodeChildren[vNodeChildren.length - 1].$text$ += child;
        } else {
          vNodeChildren.push(simple ? newVNode(null, child) : child);
        }
        lastSimple = simple;
      }
    }
  };
  walk(children);
  if (vnodeData) {
    if (vnodeData.key) {
      key = vnodeData.key;
    }
    if (vnodeData.name) {
      slotName = vnodeData.name;
    }
    {
      const classData = vnodeData.className || vnodeData.class;
      if (classData) {
        vnodeData.class = typeof classData !== "object" ? classData : Object.keys(classData).filter((k) => classData[k]).join(" ");
      }
    }
  }
  if (typeof nodeName === "function") {
    return nodeName(vnodeData === null ? {} : vnodeData, vNodeChildren, vdomFnUtils);
  }
  const vnode = newVNode(nodeName, null);
  vnode.$attrs$ = vnodeData;
  if (vNodeChildren.length > 0) {
    vnode.$children$ = vNodeChildren;
  }
  {
    vnode.$key$ = key;
  }
  {
    vnode.$name$ = slotName;
  }
  return vnode;
};
var newVNode = (tag, text) => {
  const vnode = {
    $flags$: 0,
    $tag$: tag,
    $text$: text,
    $elm$: null,
    $children$: null
  };
  {
    vnode.$attrs$ = null;
  }
  {
    vnode.$key$ = null;
  }
  {
    vnode.$name$ = null;
  }
  return vnode;
};
var Host2 = {};
var isHost = (node) => node && node.$tag$ === Host2;
var vdomFnUtils = {
  forEach: (children, cb) => children.map(convertToPublic).forEach(cb),
  map: (children, cb) => children.map(convertToPublic).map(cb).map(convertToPrivate)
};
var convertToPublic = (node) => ({
  vattrs: node.$attrs$,
  vchildren: node.$children$,
  vkey: node.$key$,
  vname: node.$name$,
  vtag: node.$tag$,
  vtext: node.$text$
});
var convertToPrivate = (node) => {
  if (typeof node.vtag === "function") {
    const vnodeData = Object.assign({}, node.vattrs);
    if (node.vkey) {
      vnodeData.key = node.vkey;
    }
    if (node.vname) {
      vnodeData.name = node.vname;
    }
    return h2(node.vtag, vnodeData, ...node.vchildren || []);
  }
  const vnode = newVNode(node.vtag, node.vtext);
  vnode.$attrs$ = node.vattrs;
  vnode.$children$ = node.vchildren;
  vnode.$key$ = node.vkey;
  vnode.$name$ = node.vname;
  return vnode;
};
var setAccessor = (elm, memberName, oldValue, newValue, isSvg, flags) => {
  if (oldValue !== newValue) {
    let isProp = isMemberInElement(elm, memberName);
    let ln = memberName.toLowerCase();
    if (memberName === "class") {
      const classList = elm.classList;
      const oldClasses = parseClassList(oldValue);
      const newClasses = parseClassList(newValue);
      classList.remove(...oldClasses.filter((c) => c && !newClasses.includes(c)));
      classList.add(...newClasses.filter((c) => c && !oldClasses.includes(c)));
    } else if (memberName === "style") {
      {
        for (const prop in oldValue) {
          if (!newValue || newValue[prop] == null) {
            if (prop.includes("-")) {
              elm.style.removeProperty(prop);
            } else {
              elm.style[prop] = "";
            }
          }
        }
      }
      for (const prop in newValue) {
        if (!oldValue || newValue[prop] !== oldValue[prop]) {
          if (prop.includes("-")) {
            elm.style.setProperty(prop, newValue[prop]);
          } else {
            elm.style[prop] = newValue[prop];
          }
        }
      }
    } else if (memberName === "key")
      ;
    else if (memberName === "ref") {
      if (newValue) {
        newValue(elm);
      }
    } else if (!isProp && memberName[0] === "o" && memberName[1] === "n") {
      if (memberName[2] === "-") {
        memberName = memberName.slice(3);
      } else if (isMemberInElement(win, ln)) {
        memberName = ln.slice(2);
      } else {
        memberName = ln[2] + memberName.slice(3);
      }
      if (oldValue) {
        plt.rel(elm, memberName, oldValue, false);
      }
      if (newValue) {
        plt.ael(elm, memberName, newValue, false);
      }
    } else {
      const isComplex = isComplexType(newValue);
      if ((isProp || isComplex && newValue !== null) && !isSvg) {
        try {
          if (!elm.tagName.includes("-")) {
            const n = newValue == null ? "" : newValue;
            if (memberName === "list") {
              isProp = false;
            } else if (oldValue == null || elm[memberName] != n) {
              elm[memberName] = n;
            }
          } else {
            elm[memberName] = newValue;
          }
        } catch (e) {
        }
      }
      let xlink = false;
      {
        if (ln !== (ln = ln.replace(/^xlink\:?/, ""))) {
          memberName = ln;
          xlink = true;
        }
      }
      if (newValue == null || newValue === false) {
        if (newValue !== false || elm.getAttribute(memberName) === "") {
          if (xlink) {
            elm.removeAttributeNS(XLINK_NS, memberName);
          } else {
            elm.removeAttribute(memberName);
          }
        }
      } else if ((!isProp || flags & 4 || isSvg) && !isComplex) {
        newValue = newValue === true ? "" : newValue;
        if (xlink) {
          elm.setAttributeNS(XLINK_NS, memberName, newValue);
        } else {
          elm.setAttribute(memberName, newValue);
        }
      }
    }
  }
};
var parseClassListRegex = /\s/;
var parseClassList = (value) => !value ? [] : value.split(parseClassListRegex);
var updateElement = (oldVnode, newVnode, isSvgMode2, memberName) => {
  const elm = newVnode.$elm$.nodeType === 11 && newVnode.$elm$.host ? newVnode.$elm$.host : newVnode.$elm$;
  const oldVnodeAttrs = oldVnode && oldVnode.$attrs$ || EMPTY_OBJ;
  const newVnodeAttrs = newVnode.$attrs$ || EMPTY_OBJ;
  {
    for (memberName in oldVnodeAttrs) {
      if (!(memberName in newVnodeAttrs)) {
        setAccessor(elm, memberName, oldVnodeAttrs[memberName], void 0, isSvgMode2, newVnode.$flags$);
      }
    }
  }
  for (memberName in newVnodeAttrs) {
    setAccessor(elm, memberName, oldVnodeAttrs[memberName], newVnodeAttrs[memberName], isSvgMode2, newVnode.$flags$);
  }
};
var createElm = (oldParentVNode, newParentVNode, childIndex, parentElm) => {
  const newVNode2 = newParentVNode.$children$[childIndex];
  let i = 0;
  let elm;
  let childNode;
  let oldVNode;
  if (!useNativeShadowDom) {
    checkSlotRelocate = true;
    if (newVNode2.$tag$ === "slot") {
      if (scopeId) {
        parentElm.classList.add(scopeId + "-s");
      }
      newVNode2.$flags$ |= newVNode2.$children$ ? (
        // slot element has fallback content
        2
      ) : (
        // slot element does not have fallback content
        1
      );
    }
  }
  if (newVNode2.$text$ !== null) {
    elm = newVNode2.$elm$ = doc.createTextNode(newVNode2.$text$);
  } else if (newVNode2.$flags$ & 1) {
    elm = newVNode2.$elm$ = doc.createTextNode("");
  } else {
    if (!isSvgMode) {
      isSvgMode = newVNode2.$tag$ === "svg";
    }
    elm = newVNode2.$elm$ = doc.createElementNS(isSvgMode ? SVG_NS : HTML_NS, newVNode2.$flags$ & 2 ? "slot-fb" : newVNode2.$tag$);
    if (isSvgMode && newVNode2.$tag$ === "foreignObject") {
      isSvgMode = false;
    }
    {
      updateElement(null, newVNode2, isSvgMode);
    }
    if (isDef(scopeId) && elm["s-si"] !== scopeId) {
      elm.classList.add(elm["s-si"] = scopeId);
    }
    if (newVNode2.$children$) {
      for (i = 0; i < newVNode2.$children$.length; ++i) {
        childNode = createElm(oldParentVNode, newVNode2, i, elm);
        if (childNode) {
          elm.appendChild(childNode);
        }
      }
    }
    {
      if (newVNode2.$tag$ === "svg") {
        isSvgMode = false;
      } else if (elm.tagName === "foreignObject") {
        isSvgMode = true;
      }
    }
  }
  {
    elm["s-hn"] = hostTagName;
    if (newVNode2.$flags$ & (2 | 1)) {
      elm["s-sr"] = true;
      elm["s-cr"] = contentRef;
      elm["s-sn"] = newVNode2.$name$ || "";
      oldVNode = oldParentVNode && oldParentVNode.$children$ && oldParentVNode.$children$[childIndex];
      if (oldVNode && oldVNode.$tag$ === newVNode2.$tag$ && oldParentVNode.$elm$) {
        putBackInOriginalLocation(oldParentVNode.$elm$, false);
      }
    }
  }
  return elm;
};
var putBackInOriginalLocation = (parentElm, recursive) => {
  plt.$flags$ |= 1;
  const oldSlotChildNodes = parentElm.childNodes;
  for (let i = oldSlotChildNodes.length - 1; i >= 0; i--) {
    const childNode = oldSlotChildNodes[i];
    if (childNode["s-hn"] !== hostTagName && childNode["s-ol"]) {
      parentReferenceNode(childNode).insertBefore(childNode, referenceNode(childNode));
      childNode["s-ol"].remove();
      childNode["s-ol"] = void 0;
      checkSlotRelocate = true;
    }
    if (recursive) {
      putBackInOriginalLocation(childNode, recursive);
    }
  }
  plt.$flags$ &= ~1;
};
var addVnodes = (parentElm, before, parentVNode, vnodes, startIdx, endIdx) => {
  let containerElm = parentElm["s-cr"] && parentElm["s-cr"].parentNode || parentElm;
  let childNode;
  if (containerElm.shadowRoot && containerElm.tagName === hostTagName) {
    containerElm = containerElm.shadowRoot;
  }
  for (; startIdx <= endIdx; ++startIdx) {
    if (vnodes[startIdx]) {
      childNode = createElm(null, parentVNode, startIdx, parentElm);
      if (childNode) {
        vnodes[startIdx].$elm$ = childNode;
        containerElm.insertBefore(childNode, referenceNode(before));
      }
    }
  }
};
var removeVnodes = (vnodes, startIdx, endIdx, vnode, elm) => {
  for (; startIdx <= endIdx; ++startIdx) {
    if (vnode = vnodes[startIdx]) {
      elm = vnode.$elm$;
      callNodeRefs(vnode);
      {
        checkSlotFallbackVisibility = true;
        if (elm["s-ol"]) {
          elm["s-ol"].remove();
        } else {
          putBackInOriginalLocation(elm, true);
        }
      }
      elm.remove();
    }
  }
};
var updateChildren = (parentElm, oldCh, newVNode2, newCh) => {
  let oldStartIdx = 0;
  let newStartIdx = 0;
  let idxInOld = 0;
  let i = 0;
  let oldEndIdx = oldCh.length - 1;
  let oldStartVnode = oldCh[0];
  let oldEndVnode = oldCh[oldEndIdx];
  let newEndIdx = newCh.length - 1;
  let newStartVnode = newCh[0];
  let newEndVnode = newCh[newEndIdx];
  let node;
  let elmToMove;
  while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
    if (oldStartVnode == null) {
      oldStartVnode = oldCh[++oldStartIdx];
    } else if (oldEndVnode == null) {
      oldEndVnode = oldCh[--oldEndIdx];
    } else if (newStartVnode == null) {
      newStartVnode = newCh[++newStartIdx];
    } else if (newEndVnode == null) {
      newEndVnode = newCh[--newEndIdx];
    } else if (isSameVnode(oldStartVnode, newStartVnode)) {
      patch(oldStartVnode, newStartVnode);
      oldStartVnode = oldCh[++oldStartIdx];
      newStartVnode = newCh[++newStartIdx];
    } else if (isSameVnode(oldEndVnode, newEndVnode)) {
      patch(oldEndVnode, newEndVnode);
      oldEndVnode = oldCh[--oldEndIdx];
      newEndVnode = newCh[--newEndIdx];
    } else if (isSameVnode(oldStartVnode, newEndVnode)) {
      if (oldStartVnode.$tag$ === "slot" || newEndVnode.$tag$ === "slot") {
        putBackInOriginalLocation(oldStartVnode.$elm$.parentNode, false);
      }
      patch(oldStartVnode, newEndVnode);
      parentElm.insertBefore(oldStartVnode.$elm$, oldEndVnode.$elm$.nextSibling);
      oldStartVnode = oldCh[++oldStartIdx];
      newEndVnode = newCh[--newEndIdx];
    } else if (isSameVnode(oldEndVnode, newStartVnode)) {
      if (oldStartVnode.$tag$ === "slot" || newEndVnode.$tag$ === "slot") {
        putBackInOriginalLocation(oldEndVnode.$elm$.parentNode, false);
      }
      patch(oldEndVnode, newStartVnode);
      parentElm.insertBefore(oldEndVnode.$elm$, oldStartVnode.$elm$);
      oldEndVnode = oldCh[--oldEndIdx];
      newStartVnode = newCh[++newStartIdx];
    } else {
      idxInOld = -1;
      {
        for (i = oldStartIdx; i <= oldEndIdx; ++i) {
          if (oldCh[i] && oldCh[i].$key$ !== null && oldCh[i].$key$ === newStartVnode.$key$) {
            idxInOld = i;
            break;
          }
        }
      }
      if (idxInOld >= 0) {
        elmToMove = oldCh[idxInOld];
        if (elmToMove.$tag$ !== newStartVnode.$tag$) {
          node = createElm(oldCh && oldCh[newStartIdx], newVNode2, idxInOld, parentElm);
        } else {
          patch(elmToMove, newStartVnode);
          oldCh[idxInOld] = void 0;
          node = elmToMove.$elm$;
        }
        newStartVnode = newCh[++newStartIdx];
      } else {
        node = createElm(oldCh && oldCh[newStartIdx], newVNode2, newStartIdx, parentElm);
        newStartVnode = newCh[++newStartIdx];
      }
      if (node) {
        {
          parentReferenceNode(oldStartVnode.$elm$).insertBefore(node, referenceNode(oldStartVnode.$elm$));
        }
      }
    }
  }
  if (oldStartIdx > oldEndIdx) {
    addVnodes(parentElm, newCh[newEndIdx + 1] == null ? null : newCh[newEndIdx + 1].$elm$, newVNode2, newCh, newStartIdx, newEndIdx);
  } else if (newStartIdx > newEndIdx) {
    removeVnodes(oldCh, oldStartIdx, oldEndIdx);
  }
};
var isSameVnode = (vnode1, vnode2) => {
  if (vnode1.$tag$ === vnode2.$tag$) {
    if (vnode1.$tag$ === "slot") {
      return vnode1.$name$ === vnode2.$name$;
    }
    {
      return vnode1.$key$ === vnode2.$key$;
    }
  }
  return false;
};
var referenceNode = (node) => {
  return node && node["s-ol"] || node;
};
var parentReferenceNode = (node) => (node["s-ol"] ? node["s-ol"] : node).parentNode;
var patch = (oldVNode, newVNode2) => {
  const elm = newVNode2.$elm$ = oldVNode.$elm$;
  const oldChildren = oldVNode.$children$;
  const newChildren = newVNode2.$children$;
  const tag = newVNode2.$tag$;
  const text = newVNode2.$text$;
  let defaultHolder;
  if (text === null) {
    {
      isSvgMode = tag === "svg" ? true : tag === "foreignObject" ? false : isSvgMode;
    }
    {
      if (tag === "slot")
        ;
      else {
        updateElement(oldVNode, newVNode2, isSvgMode);
      }
    }
    if (oldChildren !== null && newChildren !== null) {
      updateChildren(elm, oldChildren, newVNode2, newChildren);
    } else if (newChildren !== null) {
      if (oldVNode.$text$ !== null) {
        elm.textContent = "";
      }
      addVnodes(elm, null, newVNode2, newChildren, 0, newChildren.length - 1);
    } else if (oldChildren !== null) {
      removeVnodes(oldChildren, 0, oldChildren.length - 1);
    }
    if (isSvgMode && tag === "svg") {
      isSvgMode = false;
    }
  } else if (defaultHolder = elm["s-cr"]) {
    defaultHolder.parentNode.textContent = text;
  } else if (oldVNode.$text$ !== text) {
    elm.data = text;
  }
};
var updateFallbackSlotVisibility = (elm) => {
  const childNodes = elm.childNodes;
  let childNode;
  let i;
  let ilen;
  let j;
  let slotNameAttr;
  let nodeType;
  for (i = 0, ilen = childNodes.length; i < ilen; i++) {
    childNode = childNodes[i];
    if (childNode.nodeType === 1) {
      if (childNode["s-sr"]) {
        slotNameAttr = childNode["s-sn"];
        childNode.hidden = false;
        for (j = 0; j < ilen; j++) {
          nodeType = childNodes[j].nodeType;
          if (childNodes[j]["s-hn"] !== childNode["s-hn"] || slotNameAttr !== "") {
            if (nodeType === 1 && slotNameAttr === childNodes[j].getAttribute("slot")) {
              childNode.hidden = true;
              break;
            }
          } else {
            if (nodeType === 1 || nodeType === 3 && childNodes[j].textContent.trim() !== "") {
              childNode.hidden = true;
              break;
            }
          }
        }
      }
      updateFallbackSlotVisibility(childNode);
    }
  }
};
var relocateNodes = [];
var relocateSlotContent = (elm) => {
  let childNode;
  let node;
  let hostContentNodes;
  let slotNameAttr;
  let relocateNodeData;
  let j;
  let i = 0;
  const childNodes = elm.childNodes;
  const ilen = childNodes.length;
  for (; i < ilen; i++) {
    childNode = childNodes[i];
    if (childNode["s-sr"] && (node = childNode["s-cr"]) && node.parentNode) {
      hostContentNodes = node.parentNode.childNodes;
      slotNameAttr = childNode["s-sn"];
      for (j = hostContentNodes.length - 1; j >= 0; j--) {
        node = hostContentNodes[j];
        if (!node["s-cn"] && !node["s-nr"] && node["s-hn"] !== childNode["s-hn"]) {
          if (isNodeLocatedInSlot(node, slotNameAttr)) {
            relocateNodeData = relocateNodes.find((r) => r.$nodeToRelocate$ === node);
            checkSlotFallbackVisibility = true;
            node["s-sn"] = node["s-sn"] || slotNameAttr;
            if (relocateNodeData) {
              relocateNodeData.$slotRefNode$ = childNode;
            } else {
              relocateNodes.push({
                $slotRefNode$: childNode,
                $nodeToRelocate$: node
              });
            }
            if (node["s-sr"]) {
              relocateNodes.map((relocateNode) => {
                if (isNodeLocatedInSlot(relocateNode.$nodeToRelocate$, node["s-sn"])) {
                  relocateNodeData = relocateNodes.find((r) => r.$nodeToRelocate$ === node);
                  if (relocateNodeData && !relocateNode.$slotRefNode$) {
                    relocateNode.$slotRefNode$ = relocateNodeData.$slotRefNode$;
                  }
                }
              });
            }
          } else if (!relocateNodes.some((r) => r.$nodeToRelocate$ === node)) {
            relocateNodes.push({
              $nodeToRelocate$: node
            });
          }
        }
      }
    }
    if (childNode.nodeType === 1) {
      relocateSlotContent(childNode);
    }
  }
};
var isNodeLocatedInSlot = (nodeToRelocate, slotNameAttr) => {
  if (nodeToRelocate.nodeType === 1) {
    if (nodeToRelocate.getAttribute("slot") === null && slotNameAttr === "") {
      return true;
    }
    if (nodeToRelocate.getAttribute("slot") === slotNameAttr) {
      return true;
    }
    return false;
  }
  if (nodeToRelocate["s-sn"] === slotNameAttr) {
    return true;
  }
  return slotNameAttr === "";
};
var callNodeRefs = (vNode) => {
  {
    vNode.$attrs$ && vNode.$attrs$.ref && vNode.$attrs$.ref(null);
    vNode.$children$ && vNode.$children$.map(callNodeRefs);
  }
};
var renderVdom = (hostRef, renderFnResults) => {
  const hostElm = hostRef.$hostElement$;
  const cmpMeta = hostRef.$cmpMeta$;
  const oldVNode = hostRef.$vnode$ || newVNode(null, null);
  const rootVnode = isHost(renderFnResults) ? renderFnResults : h2(null, null, renderFnResults);
  hostTagName = hostElm.tagName;
  if (cmpMeta.$attrsToReflect$) {
    rootVnode.$attrs$ = rootVnode.$attrs$ || {};
    cmpMeta.$attrsToReflect$.map(([propName, attribute]) => rootVnode.$attrs$[attribute] = hostElm[propName]);
  }
  rootVnode.$tag$ = null;
  rootVnode.$flags$ |= 4;
  hostRef.$vnode$ = rootVnode;
  rootVnode.$elm$ = oldVNode.$elm$ = hostElm.shadowRoot || hostElm;
  {
    scopeId = hostElm["s-sc"];
  }
  {
    contentRef = hostElm["s-cr"];
    useNativeShadowDom = (cmpMeta.$flags$ & 1) !== 0;
    checkSlotFallbackVisibility = false;
  }
  patch(oldVNode, rootVnode);
  {
    plt.$flags$ |= 1;
    if (checkSlotRelocate) {
      relocateSlotContent(rootVnode.$elm$);
      let relocateData;
      let nodeToRelocate;
      let orgLocationNode;
      let parentNodeRef;
      let insertBeforeNode;
      let refNode;
      let i = 0;
      for (; i < relocateNodes.length; i++) {
        relocateData = relocateNodes[i];
        nodeToRelocate = relocateData.$nodeToRelocate$;
        if (!nodeToRelocate["s-ol"]) {
          orgLocationNode = doc.createTextNode("");
          orgLocationNode["s-nr"] = nodeToRelocate;
          nodeToRelocate.parentNode.insertBefore(nodeToRelocate["s-ol"] = orgLocationNode, nodeToRelocate);
        }
      }
      for (i = 0; i < relocateNodes.length; i++) {
        relocateData = relocateNodes[i];
        nodeToRelocate = relocateData.$nodeToRelocate$;
        if (relocateData.$slotRefNode$) {
          parentNodeRef = relocateData.$slotRefNode$.parentNode;
          insertBeforeNode = relocateData.$slotRefNode$.nextSibling;
          orgLocationNode = nodeToRelocate["s-ol"];
          while (orgLocationNode = orgLocationNode.previousSibling) {
            refNode = orgLocationNode["s-nr"];
            if (refNode && refNode["s-sn"] === nodeToRelocate["s-sn"] && parentNodeRef === refNode.parentNode) {
              refNode = refNode.nextSibling;
              if (!refNode || !refNode["s-nr"]) {
                insertBeforeNode = refNode;
                break;
              }
            }
          }
          if (!insertBeforeNode && parentNodeRef !== nodeToRelocate.parentNode || nodeToRelocate.nextSibling !== insertBeforeNode) {
            if (nodeToRelocate !== insertBeforeNode) {
              if (!nodeToRelocate["s-hn"] && nodeToRelocate["s-ol"]) {
                nodeToRelocate["s-hn"] = nodeToRelocate["s-ol"].parentNode.nodeName;
              }
              parentNodeRef.insertBefore(nodeToRelocate, insertBeforeNode);
            }
          }
        } else {
          if (nodeToRelocate.nodeType === 1) {
            nodeToRelocate.hidden = true;
          }
        }
      }
    }
    if (checkSlotFallbackVisibility) {
      updateFallbackSlotVisibility(rootVnode.$elm$);
    }
    plt.$flags$ &= ~1;
    relocateNodes.length = 0;
  }
};
var getElement2 = (ref) => getHostRef(ref).$hostElement$;
var createEvent2 = (ref, name, flags) => {
  const elm = getElement2(ref);
  return {
    emit: (detail) => {
      return emitEvent2(elm, name, {
        bubbles: !!(flags & 4),
        composed: !!(flags & 2),
        cancelable: !!(flags & 1),
        detail
      });
    }
  };
};
var emitEvent2 = (elm, name, opts) => {
  const ev = plt.ce(name, opts);
  elm.dispatchEvent(ev);
  return ev;
};
var attachToAncestor = (hostRef, ancestorComponent) => {
  if (ancestorComponent && !hostRef.$onRenderResolve$ && ancestorComponent["s-p"]) {
    ancestorComponent["s-p"].push(new Promise((r) => hostRef.$onRenderResolve$ = r));
  }
};
var scheduleUpdate = (hostRef, isInitialLoad) => {
  {
    hostRef.$flags$ |= 16;
  }
  if (hostRef.$flags$ & 4) {
    hostRef.$flags$ |= 512;
    return;
  }
  attachToAncestor(hostRef, hostRef.$ancestorComponent$);
  const dispatch = () => dispatchHooks(hostRef, isInitialLoad);
  return writeTask(dispatch);
};
var dispatchHooks = (hostRef, isInitialLoad) => {
  const endSchedule = createTime("scheduleUpdate", hostRef.$cmpMeta$.$tagName$);
  const instance = hostRef.$lazyInstance$;
  let promise;
  if (isInitialLoad) {
    {
      hostRef.$flags$ |= 256;
      if (hostRef.$queuedListeners$) {
        hostRef.$queuedListeners$.map(([methodName, event]) => safeCall(instance, methodName, event));
        hostRef.$queuedListeners$ = null;
      }
    }
    {
      promise = safeCall(instance, "componentWillLoad");
    }
  } else {
    {
      promise = safeCall(instance, "componentWillUpdate");
    }
  }
  {
    promise = then(promise, () => safeCall(instance, "componentWillRender"));
  }
  endSchedule();
  return then(promise, () => updateComponent(hostRef, instance, isInitialLoad));
};
var updateComponent = async (hostRef, instance, isInitialLoad) => {
  const elm = hostRef.$hostElement$;
  const endUpdate = createTime("update", hostRef.$cmpMeta$.$tagName$);
  const rc = elm["s-rc"];
  if (isInitialLoad) {
    attachStyles(hostRef);
  }
  const endRender = createTime("render", hostRef.$cmpMeta$.$tagName$);
  {
    callRender(hostRef, instance);
  }
  if (rc) {
    rc.map((cb) => cb());
    elm["s-rc"] = void 0;
  }
  endRender();
  endUpdate();
  {
    const childrenPromises = elm["s-p"];
    const postUpdate = () => postUpdateComponent(hostRef);
    if (childrenPromises.length === 0) {
      postUpdate();
    } else {
      Promise.all(childrenPromises).then(postUpdate);
      hostRef.$flags$ |= 4;
      childrenPromises.length = 0;
    }
  }
};
var callRender = (hostRef, instance, elm) => {
  try {
    instance = instance.render();
    {
      hostRef.$flags$ &= ~16;
    }
    {
      hostRef.$flags$ |= 2;
    }
    {
      {
        {
          renderVdom(hostRef, instance);
        }
      }
    }
  } catch (e) {
    consoleError(e, hostRef.$hostElement$);
  }
  return null;
};
var postUpdateComponent = (hostRef) => {
  const tagName = hostRef.$cmpMeta$.$tagName$;
  const elm = hostRef.$hostElement$;
  const endPostUpdate = createTime("postUpdate", tagName);
  const instance = hostRef.$lazyInstance$;
  const ancestorComponent = hostRef.$ancestorComponent$;
  {
    safeCall(instance, "componentDidRender");
  }
  if (!(hostRef.$flags$ & 64)) {
    hostRef.$flags$ |= 64;
    {
      addHydratedFlag(elm);
    }
    {
      safeCall(instance, "componentDidLoad");
    }
    endPostUpdate();
    {
      hostRef.$onReadyResolve$(elm);
      if (!ancestorComponent) {
        appDidLoad();
      }
    }
  } else {
    {
      safeCall(instance, "componentDidUpdate");
    }
    endPostUpdate();
  }
  {
    hostRef.$onInstanceResolve$(elm);
  }
  {
    if (hostRef.$onRenderResolve$) {
      hostRef.$onRenderResolve$();
      hostRef.$onRenderResolve$ = void 0;
    }
    if (hostRef.$flags$ & 512) {
      nextTick(() => scheduleUpdate(hostRef, false));
    }
    hostRef.$flags$ &= ~(4 | 512);
  }
};
var appDidLoad = (who) => {
  {
    addHydratedFlag(doc.documentElement);
  }
  nextTick(() => emitEvent2(win, "appload", { detail: { namespace: NAMESPACE } }));
};
var safeCall = (instance, method, arg) => {
  if (instance && instance[method]) {
    try {
      return instance[method](arg);
    } catch (e) {
      consoleError(e);
    }
  }
  return void 0;
};
var then = (promise, thenFn) => {
  return promise && promise.then ? promise.then(thenFn) : thenFn();
};
var addHydratedFlag = (elm) => elm.classList.add("hydrated");
var initializeClientHydrate = (hostElm, tagName, hostId, hostRef) => {
  const endHydrate = createTime("hydrateClient", tagName);
  const shadowRoot = hostElm.shadowRoot;
  const childRenderNodes = [];
  const slotNodes = [];
  const shadowRootNodes = shadowRoot ? [] : null;
  const vnode = hostRef.$vnode$ = newVNode(tagName, null);
  if (!plt.$orgLocNodes$) {
    initializeDocumentHydrate(doc.body, plt.$orgLocNodes$ = /* @__PURE__ */ new Map());
  }
  hostElm[HYDRATE_ID] = hostId;
  hostElm.removeAttribute(HYDRATE_ID);
  clientHydrate(vnode, childRenderNodes, slotNodes, shadowRootNodes, hostElm, hostElm, hostId);
  childRenderNodes.map((c) => {
    const orgLocationId = c.$hostId$ + "." + c.$nodeId$;
    const orgLocationNode = plt.$orgLocNodes$.get(orgLocationId);
    const node = c.$elm$;
    if (orgLocationNode && supportsShadow && orgLocationNode["s-en"] === "") {
      orgLocationNode.parentNode.insertBefore(node, orgLocationNode.nextSibling);
    }
    if (!shadowRoot) {
      node["s-hn"] = tagName;
      if (orgLocationNode) {
        node["s-ol"] = orgLocationNode;
        node["s-ol"]["s-nr"] = node;
      }
    }
    plt.$orgLocNodes$.delete(orgLocationId);
  });
  if (shadowRoot) {
    shadowRootNodes.map((shadowRootNode) => {
      if (shadowRootNode) {
        shadowRoot.appendChild(shadowRootNode);
      }
    });
  }
  endHydrate();
};
var clientHydrate = (parentVNode, childRenderNodes, slotNodes, shadowRootNodes, hostElm, node, hostId) => {
  let childNodeType;
  let childIdSplt;
  let childVNode;
  let i;
  if (node.nodeType === 1) {
    childNodeType = node.getAttribute(HYDRATE_CHILD_ID);
    if (childNodeType) {
      childIdSplt = childNodeType.split(".");
      if (childIdSplt[0] === hostId || childIdSplt[0] === "0") {
        childVNode = {
          $flags$: 0,
          $hostId$: childIdSplt[0],
          $nodeId$: childIdSplt[1],
          $depth$: childIdSplt[2],
          $index$: childIdSplt[3],
          $tag$: node.tagName.toLowerCase(),
          $elm$: node,
          $attrs$: null,
          $children$: null,
          $key$: null,
          $name$: null,
          $text$: null
        };
        childRenderNodes.push(childVNode);
        node.removeAttribute(HYDRATE_CHILD_ID);
        if (!parentVNode.$children$) {
          parentVNode.$children$ = [];
        }
        parentVNode.$children$[childVNode.$index$] = childVNode;
        parentVNode = childVNode;
        if (shadowRootNodes && childVNode.$depth$ === "0") {
          shadowRootNodes[childVNode.$index$] = childVNode.$elm$;
        }
      }
    }
    for (i = node.childNodes.length - 1; i >= 0; i--) {
      clientHydrate(parentVNode, childRenderNodes, slotNodes, shadowRootNodes, hostElm, node.childNodes[i], hostId);
    }
    if (node.shadowRoot) {
      for (i = node.shadowRoot.childNodes.length - 1; i >= 0; i--) {
        clientHydrate(parentVNode, childRenderNodes, slotNodes, shadowRootNodes, hostElm, node.shadowRoot.childNodes[i], hostId);
      }
    }
  } else if (node.nodeType === 8) {
    childIdSplt = node.nodeValue.split(".");
    if (childIdSplt[1] === hostId || childIdSplt[1] === "0") {
      childNodeType = childIdSplt[0];
      childVNode = {
        $flags$: 0,
        $hostId$: childIdSplt[1],
        $nodeId$: childIdSplt[2],
        $depth$: childIdSplt[3],
        $index$: childIdSplt[4],
        $elm$: node,
        $attrs$: null,
        $children$: null,
        $key$: null,
        $name$: null,
        $tag$: null,
        $text$: null
      };
      if (childNodeType === TEXT_NODE_ID) {
        childVNode.$elm$ = node.nextSibling;
        if (childVNode.$elm$ && childVNode.$elm$.nodeType === 3) {
          childVNode.$text$ = childVNode.$elm$.textContent;
          childRenderNodes.push(childVNode);
          node.remove();
          if (!parentVNode.$children$) {
            parentVNode.$children$ = [];
          }
          parentVNode.$children$[childVNode.$index$] = childVNode;
          if (shadowRootNodes && childVNode.$depth$ === "0") {
            shadowRootNodes[childVNode.$index$] = childVNode.$elm$;
          }
        }
      } else if (childVNode.$hostId$ === hostId) {
        if (childNodeType === SLOT_NODE_ID) {
          childVNode.$tag$ = "slot";
          if (childIdSplt[5]) {
            node["s-sn"] = childVNode.$name$ = childIdSplt[5];
          } else {
            node["s-sn"] = "";
          }
          node["s-sr"] = true;
          if (shadowRootNodes) {
            childVNode.$elm$ = doc.createElement(childVNode.$tag$);
            if (childVNode.$name$) {
              childVNode.$elm$.setAttribute("name", childVNode.$name$);
            }
            node.parentNode.insertBefore(childVNode.$elm$, node);
            node.remove();
            if (childVNode.$depth$ === "0") {
              shadowRootNodes[childVNode.$index$] = childVNode.$elm$;
            }
          }
          slotNodes.push(childVNode);
          if (!parentVNode.$children$) {
            parentVNode.$children$ = [];
          }
          parentVNode.$children$[childVNode.$index$] = childVNode;
        } else if (childNodeType === CONTENT_REF_ID) {
          if (shadowRootNodes) {
            node.remove();
          } else {
            hostElm["s-cr"] = node;
            node["s-cn"] = true;
          }
        }
      }
    }
  } else if (parentVNode && parentVNode.$tag$ === "style") {
    const vnode = newVNode(null, node.textContent);
    vnode.$elm$ = node;
    vnode.$index$ = "0";
    parentVNode.$children$ = [vnode];
  }
};
var initializeDocumentHydrate = (node, orgLocNodes) => {
  if (node.nodeType === 1) {
    let i = 0;
    for (; i < node.childNodes.length; i++) {
      initializeDocumentHydrate(node.childNodes[i], orgLocNodes);
    }
    if (node.shadowRoot) {
      for (i = 0; i < node.shadowRoot.childNodes.length; i++) {
        initializeDocumentHydrate(node.shadowRoot.childNodes[i], orgLocNodes);
      }
    }
  } else if (node.nodeType === 8) {
    const childIdSplt = node.nodeValue.split(".");
    if (childIdSplt[0] === ORG_LOCATION_ID) {
      orgLocNodes.set(childIdSplt[1] + "." + childIdSplt[2], node);
      node.nodeValue = "";
      node["s-en"] = childIdSplt[3];
    }
  }
};
var parsePropertyValue = (propValue, propType) => {
  if (propValue != null && !isComplexType(propValue)) {
    if (propType & 4) {
      return propValue === "false" ? false : propValue === "" || !!propValue;
    }
    if (propType & 2) {
      return parseFloat(propValue);
    }
    if (propType & 1) {
      return String(propValue);
    }
    return propValue;
  }
  return propValue;
};
var getValue = (ref, propName) => getHostRef(ref).$instanceValues$.get(propName);
var setValue = (ref, propName, newVal, cmpMeta) => {
  const hostRef = getHostRef(ref);
  const elm = hostRef.$hostElement$;
  const oldVal = hostRef.$instanceValues$.get(propName);
  const flags = hostRef.$flags$;
  const instance = hostRef.$lazyInstance$;
  newVal = parsePropertyValue(newVal, cmpMeta.$members$[propName][0]);
  const areBothNaN = Number.isNaN(oldVal) && Number.isNaN(newVal);
  const didValueChange = newVal !== oldVal && !areBothNaN;
  if ((!(flags & 8) || oldVal === void 0) && didValueChange) {
    hostRef.$instanceValues$.set(propName, newVal);
    if (instance) {
      if (cmpMeta.$watchers$ && flags & 128) {
        const watchMethods = cmpMeta.$watchers$[propName];
        if (watchMethods) {
          watchMethods.map((watchMethodName) => {
            try {
              instance[watchMethodName](newVal, oldVal, propName);
            } catch (e) {
              consoleError(e, elm);
            }
          });
        }
      }
      if ((flags & (2 | 16)) === 2) {
        scheduleUpdate(hostRef, false);
      }
    }
  }
};
var proxyComponent = (Cstr, cmpMeta, flags) => {
  if (cmpMeta.$members$) {
    if (Cstr.watchers) {
      cmpMeta.$watchers$ = Cstr.watchers;
    }
    const members = Object.entries(cmpMeta.$members$);
    const prototype = Cstr.prototype;
    members.map(([memberName, [memberFlags]]) => {
      if (memberFlags & 31 || flags & 2 && memberFlags & 32) {
        Object.defineProperty(prototype, memberName, {
          get() {
            return getValue(this, memberName);
          },
          set(newValue) {
            setValue(this, memberName, newValue, cmpMeta);
          },
          configurable: true,
          enumerable: true
        });
      } else if (flags & 1 && memberFlags & 64) {
        Object.defineProperty(prototype, memberName, {
          value(...args) {
            const ref = getHostRef(this);
            return ref.$onInstancePromise$.then(() => ref.$lazyInstance$[memberName](...args));
          }
        });
      }
    });
    if (flags & 1) {
      const attrNameToPropName = /* @__PURE__ */ new Map();
      prototype.attributeChangedCallback = function(attrName, _oldValue, newValue) {
        plt.jmp(() => {
          const propName = attrNameToPropName.get(attrName);
          if (this.hasOwnProperty(propName)) {
            newValue = this[propName];
            delete this[propName];
          } else if (prototype.hasOwnProperty(propName) && typeof this[propName] === "number" && this[propName] == newValue) {
            return;
          }
          this[propName] = newValue === null && typeof this[propName] === "boolean" ? false : newValue;
        });
      };
      Cstr.observedAttributes = members.filter(
        ([_, m]) => m[0] & 15
        /* HasAttribute */
      ).map(([propName, m]) => {
        const attrName = m[1] || propName;
        attrNameToPropName.set(attrName, propName);
        if (m[0] & 512) {
          cmpMeta.$attrsToReflect$.push([propName, attrName]);
        }
        return attrName;
      });
    }
  }
  return Cstr;
};
var initializeComponent = async (elm, hostRef, cmpMeta, hmrVersionId, Cstr) => {
  if ((hostRef.$flags$ & 32) === 0) {
    {
      hostRef.$flags$ |= 32;
      Cstr = loadModule(cmpMeta);
      if (Cstr.then) {
        const endLoad = uniqueTime();
        Cstr = await Cstr;
        endLoad();
      }
      if (!Cstr.isProxied) {
        {
          cmpMeta.$watchers$ = Cstr.watchers;
        }
        proxyComponent(
          Cstr,
          cmpMeta,
          2
          /* proxyState */
        );
        Cstr.isProxied = true;
      }
      const endNewInstance = createTime("createInstance", cmpMeta.$tagName$);
      {
        hostRef.$flags$ |= 8;
      }
      try {
        new Cstr(hostRef);
      } catch (e) {
        consoleError(e);
      }
      {
        hostRef.$flags$ &= ~8;
      }
      {
        hostRef.$flags$ |= 128;
      }
      endNewInstance();
      fireConnectedCallback(hostRef.$lazyInstance$);
    }
    if (Cstr.style) {
      let style = Cstr.style;
      const scopeId2 = getScopeId(cmpMeta);
      if (!styles.has(scopeId2)) {
        const endRegisterStyles = createTime("registerStyles", cmpMeta.$tagName$);
        registerStyle(scopeId2, style, !!(cmpMeta.$flags$ & 1));
        endRegisterStyles();
      }
    }
  }
  const ancestorComponent = hostRef.$ancestorComponent$;
  const schedule = () => scheduleUpdate(hostRef, true);
  if (ancestorComponent && ancestorComponent["s-rc"]) {
    ancestorComponent["s-rc"].push(schedule);
  } else {
    schedule();
  }
};
var fireConnectedCallback = (instance) => {
  {
    safeCall(instance, "connectedCallback");
  }
};
var connectedCallback = (elm) => {
  if ((plt.$flags$ & 1) === 0) {
    const hostRef = getHostRef(elm);
    const cmpMeta = hostRef.$cmpMeta$;
    const endConnected = createTime("connectedCallback", cmpMeta.$tagName$);
    if (!(hostRef.$flags$ & 1)) {
      hostRef.$flags$ |= 1;
      let hostId;
      {
        hostId = elm.getAttribute(HYDRATE_ID);
        if (hostId) {
          if (cmpMeta.$flags$ & 1) {
            const scopeId2 = addStyle(elm.shadowRoot, cmpMeta);
            elm.classList.remove(scopeId2 + "-h", scopeId2 + "-s");
          }
          initializeClientHydrate(elm, cmpMeta.$tagName$, hostId, hostRef);
        }
      }
      if (!hostId) {
        if (cmpMeta.$flags$ & (4 | 8)) {
          setContentReference(elm);
        }
      }
      {
        let ancestorComponent = elm;
        while (ancestorComponent = ancestorComponent.parentNode || ancestorComponent.host) {
          if (ancestorComponent.nodeType === 1 && ancestorComponent.hasAttribute("s-id") && ancestorComponent["s-p"] || ancestorComponent["s-p"]) {
            attachToAncestor(hostRef, hostRef.$ancestorComponent$ = ancestorComponent);
            break;
          }
        }
      }
      if (cmpMeta.$members$) {
        Object.entries(cmpMeta.$members$).map(([memberName, [memberFlags]]) => {
          if (memberFlags & 31 && elm.hasOwnProperty(memberName)) {
            const value = elm[memberName];
            delete elm[memberName];
            elm[memberName] = value;
          }
        });
      }
      {
        initializeComponent(elm, hostRef, cmpMeta);
      }
    } else {
      addHostEventListeners(elm, hostRef, cmpMeta.$listeners$);
      fireConnectedCallback(hostRef.$lazyInstance$);
    }
    endConnected();
  }
};
var setContentReference = (elm) => {
  const contentRefElm = elm["s-cr"] = doc.createComment("");
  contentRefElm["s-cn"] = true;
  elm.insertBefore(contentRefElm, elm.firstChild);
};
var disconnectedCallback = (elm) => {
  if ((plt.$flags$ & 1) === 0) {
    const hostRef = getHostRef(elm);
    const instance = hostRef.$lazyInstance$;
    {
      if (hostRef.$rmListeners$) {
        hostRef.$rmListeners$.map((rmListener) => rmListener());
        hostRef.$rmListeners$ = void 0;
      }
    }
    {
      safeCall(instance, "disconnectedCallback");
    }
  }
};
var proxyCustomElement = (Cstr, compactMeta) => {
  const cmpMeta = {
    $flags$: compactMeta[0],
    $tagName$: compactMeta[1]
  };
  {
    cmpMeta.$members$ = compactMeta[2];
  }
  {
    cmpMeta.$listeners$ = compactMeta[3];
  }
  {
    cmpMeta.$watchers$ = Cstr.$watchers$;
  }
  {
    cmpMeta.$attrsToReflect$ = [];
  }
  const originalConnectedCallback = Cstr.prototype.connectedCallback;
  const originalDisconnectedCallback = Cstr.prototype.disconnectedCallback;
  Object.assign(Cstr.prototype, {
    __registerHost() {
      registerHost(this, cmpMeta);
    },
    connectedCallback() {
      connectedCallback(this);
      if (originalConnectedCallback) {
        originalConnectedCallback.call(this);
      }
    },
    disconnectedCallback() {
      disconnectedCallback(this);
      if (originalDisconnectedCallback) {
        originalDisconnectedCallback.call(this);
      }
    },
    __attachShadow() {
      {
        {
          this.attachShadow({ mode: "open" });
        }
      }
    }
  });
  Cstr.is = cmpMeta.$tagName$;
  return proxyComponent(
    Cstr,
    cmpMeta,
    1 | 2
    /* proxyState */
  );
};
var hostRefs = /* @__PURE__ */ new WeakMap();
var getHostRef = (ref) => hostRefs.get(ref);
var registerHost = (elm, cmpMeta) => {
  const hostRef = {
    $flags$: 0,
    $hostElement$: elm,
    $cmpMeta$: cmpMeta,
    $instanceValues$: /* @__PURE__ */ new Map()
  };
  {
    hostRef.$onInstancePromise$ = new Promise((r) => hostRef.$onInstanceResolve$ = r);
  }
  {
    hostRef.$onReadyPromise$ = new Promise((r) => hostRef.$onReadyResolve$ = r);
    elm["s-p"] = [];
    elm["s-rc"] = [];
  }
  addHostEventListeners(elm, hostRef, cmpMeta.$listeners$);
  return hostRefs.set(elm, hostRef);
};
var isMemberInElement = (elm, memberName) => memberName in elm;
var consoleError = (e, el) => (0, console.error)(e, el);
var cmpModules = /* @__PURE__ */ new Map();
var loadModule = (cmpMeta, hostRef, hmrVersionId) => {
  const exportName = cmpMeta.$tagName$.replace(/-/g, "_");
  const bundleId = cmpMeta.$lazyBundleId$;
  const module = cmpModules.get(bundleId);
  if (module) {
    return module[exportName];
  }
  return import(
    /* @vite-ignore */
    /* webpackInclude: /\.entry\.js$/ */
    /* webpackExclude: /\.system\.entry\.js$/ */
    /* webpackMode: "lazy" */
    `./${bundleId}.entry.js${""}`
  ).then((importedModule) => {
    {
      cmpModules.set(bundleId, importedModule);
    }
    return importedModule[exportName];
  }, consoleError);
};
var styles = /* @__PURE__ */ new Map();
var queueDomReads = [];
var queueDomWrites = [];
var queueTask = (queue, write) => (cb) => {
  queue.push(cb);
  if (!queuePending) {
    queuePending = true;
    if (write && plt.$flags$ & 4) {
      nextTick(flush);
    } else {
      plt.raf(flush);
    }
  }
};
var consume = (queue) => {
  for (let i = 0; i < queue.length; i++) {
    try {
      queue[i](performance.now());
    } catch (e) {
      consoleError(e);
    }
  }
  queue.length = 0;
};
var flush = () => {
  consume(queueDomReads);
  {
    consume(queueDomWrites);
    if (queuePending = queueDomReads.length > 0) {
      plt.raf(flush);
    }
  }
};
var nextTick = (cb) => promiseResolve().then(cb);
var writeTask = queueTask(queueDomWrites, true);
var ISO_DATE_FORMAT = /^(\d{4})-(\d{2})-(\d{2})$/;
var DaysOfWeek;
(function(DaysOfWeek2) {
  DaysOfWeek2[DaysOfWeek2["Sunday"] = 0] = "Sunday";
  DaysOfWeek2[DaysOfWeek2["Monday"] = 1] = "Monday";
  DaysOfWeek2[DaysOfWeek2["Tuesday"] = 2] = "Tuesday";
  DaysOfWeek2[DaysOfWeek2["Wednesday"] = 3] = "Wednesday";
  DaysOfWeek2[DaysOfWeek2["Thursday"] = 4] = "Thursday";
  DaysOfWeek2[DaysOfWeek2["Friday"] = 5] = "Friday";
  DaysOfWeek2[DaysOfWeek2["Saturday"] = 6] = "Saturday";
})(DaysOfWeek || (DaysOfWeek = {}));
function createDate(year, month, day) {
  var dayInt = parseInt(day, 10);
  var monthInt = parseInt(month, 10);
  var yearInt = parseInt(year, 10);
  const isValid = Number.isInteger(yearInt) && // all parts should be integers
  Number.isInteger(monthInt) && Number.isInteger(dayInt) && monthInt > 0 && // month must be 1-12
  monthInt <= 12 && dayInt > 0 && // day must be 1-31
  dayInt <= 31 && yearInt > 0;
  if (isValid) {
    return new Date(yearInt, monthInt - 1, dayInt);
  }
}
function parseISODate(value) {
  if (!value) {
    return;
  }
  const matches = value.match(ISO_DATE_FORMAT);
  if (matches) {
    return createDate(matches[1], matches[2], matches[3]);
  }
}
function printISODate(date) {
  if (!date) {
    return "";
  }
  var d = date.getDate().toString(10);
  var m = (date.getMonth() + 1).toString(10);
  var y = date.getFullYear().toString(10);
  if (date.getDate() < 10) {
    d = `0${d}`;
  }
  if (date.getMonth() < 9) {
    m = `0${m}`;
  }
  return `${y}-${m}-${d}`;
}
function isEqual(a, b) {
  if (a == null || b == null) {
    return false;
  }
  return a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate();
}
function addDays(date, days) {
  var d = new Date(date);
  d.setDate(d.getDate() + days);
  return d;
}
function startOfWeek(date, firstDayOfWeek = DaysOfWeek.Monday) {
  var d = new Date(date);
  var day = d.getDay();
  var diff = (day < firstDayOfWeek ? 7 : 0) + day - firstDayOfWeek;
  d.setDate(d.getDate() - diff);
  return d;
}
function endOfWeek(date, firstDayOfWeek = DaysOfWeek.Monday) {
  var d = new Date(date);
  var day = d.getDay();
  var diff = (day < firstDayOfWeek ? -7 : 0) + 6 - (day - firstDayOfWeek);
  d.setDate(d.getDate() + diff);
  return d;
}
function startOfMonth(date) {
  return new Date(date.getFullYear(), date.getMonth(), 1);
}
function endOfMonth(date) {
  return new Date(date.getFullYear(), date.getMonth() + 1, 0);
}
function setMonth(date, month) {
  const d = new Date(date);
  d.setMonth(month);
  return d;
}
function setYear(date, year) {
  const d = new Date(date);
  d.setFullYear(year);
  return d;
}
function inRange(date, min, max) {
  return clamp(date, min, max) === date;
}
function clamp(date, min, max) {
  const time = date.getTime();
  if (min && min instanceof Date && time < min.getTime()) {
    return min;
  }
  if (max && max instanceof Date && time > max.getTime()) {
    return max;
  }
  return date;
}
function getDaysInRange(start, end) {
  const days = [];
  let current = start;
  while (!isEqual(current, end)) {
    days.push(current);
    current = addDays(current, 1);
  }
  days.push(current);
  return days;
}
function getViewOfMonth(date, firstDayOfWeek = DaysOfWeek.Monday) {
  const start = startOfWeek(startOfMonth(date), firstDayOfWeek);
  const end = endOfWeek(endOfMonth(date), firstDayOfWeek);
  return getDaysInRange(start, end);
}
function chr4() {
  return Math.random().toString(16).slice(-4);
}
function createIdentifier(prefix) {
  return `${prefix}-${chr4()}${chr4()}-${chr4()}-${chr4()}-${chr4()}-${chr4()}${chr4()}${chr4()}`;
}
var DatePickerInput = ({ onClick, dateFormatter, localization: localization2, name, formattedValue, valueAsDate, value, identifier, disabled, required, role, buttonRef, inputRef, onInput, onBlur, onFocus }) => {
  return h2(
    "div",
    { class: "duet-date__input-wrapper" },
    h2("input", { class: "duet-date__input", value: formattedValue, placeholder: localization2.placeholder, id: identifier, disabled, role, required: required ? true : void 0, "aria-autocomplete": "none", onInput, onFocus, onBlur, autoComplete: "off", ref: inputRef }),
    h2("input", { type: "hidden", name, value }),
    h2(
      "button",
      { class: "duet-date__toggle", onClick, disabled, ref: buttonRef, type: "button" },
      h2(
        "span",
        { class: "duet-date__toggle-icon" },
        h2(
          "svg",
          { "aria-hidden": "true", height: "24", viewBox: "0 0 21 21", width: "24", xmlns: "http://www.w3.org/2000/svg" },
          h2(
            "g",
            { fill: "none", "fill-rule": "evenodd", transform: "translate(2 2)" },
            h2("path", { d: "m2.5.5h12c1.1045695 0 2 .8954305 2 2v12c0 1.1045695-.8954305 2-2 2h-12c-1.1045695 0-2-.8954305-2-2v-12c0-1.1045695.8954305-2 2-2z", stroke: "currentColor", "stroke-linecap": "round", "stroke-linejoin": "round" }),
            h2("path", { d: "m.5 4.5h16", stroke: "currentColor", "stroke-linecap": "round", "stroke-linejoin": "round" }),
            h2(
              "g",
              { fill: "currentColor" },
              h2("circle", { cx: "8.5", cy: "8.5", r: "1" }),
              h2("circle", { cx: "4.5", cy: "8.5", r: "1" }),
              h2("circle", { cx: "12.5", cy: "8.5", r: "1" }),
              h2("circle", { cx: "8.5", cy: "12.5", r: "1" }),
              h2("circle", { cx: "4.5", cy: "12.5", r: "1" }),
              h2("circle", { cx: "12.5", cy: "12.5", r: "1" })
            )
          )
        )
      ),
      h2(
        "span",
        { class: "duet-date__vhidden" },
        localization2.buttonLabel,
        valueAsDate && h2(
          "span",
          null,
          ", ",
          localization2.selectedDateMessage,
          " ",
          dateFormatter.format(valueAsDate)
        )
      )
    )
  );
};
var DatePickerDay = ({ focusedDay, today, day, onDaySelect, onKeyboardNavigation, focusedDayRef, inRange: inRange2, isSelected, dateFormatter }) => {
  const isToday = isEqual(day, today);
  const isFocused = isEqual(day, focusedDay);
  const isDisabled = day.getMonth() !== focusedDay.getMonth();
  const isOutsideRange = !inRange2;
  function handleClick(e) {
    onDaySelect(e, day);
  }
  return h2(
    "button",
    { class: {
      "duet-date__day": true,
      "is-outside": isOutsideRange,
      "is-disabled": isDisabled,
      "is-today": isToday
    }, tabIndex: isFocused ? 0 : -1, onClick: handleClick, onKeyDown: onKeyboardNavigation, disabled: isOutsideRange || isDisabled, type: "button", "aria-pressed": isSelected ? "true" : "false", ref: (el) => {
      if (isFocused && el && focusedDayRef) {
        focusedDayRef(el);
      }
    } },
    h2("span", { "aria-hidden": "true" }, day.getDate()),
    h2("span", { class: "duet-date__vhidden" }, dateFormatter.format(day))
  );
};
function chunk(array, chunkSize) {
  const result = [];
  for (let i = 0; i < array.length; i += chunkSize) {
    result.push(array.slice(i, i + chunkSize));
  }
  return result;
}
function mapWithOffset(array, startingOffset, mapFn) {
  return array.map((_, i) => {
    const adjustedIndex = (i + startingOffset) % array.length;
    return mapFn(array[adjustedIndex]);
  });
}
var DatePickerMonth = ({ selectedDate, focusedDate, labelledById, localization: localization2, firstDayOfWeek, min, max, dateFormatter, onDateSelect, onKeyboardNavigation, focusedDayRef }) => {
  const today = /* @__PURE__ */ new Date();
  const days = getViewOfMonth(focusedDate, firstDayOfWeek);
  return h2(
    "table",
    { class: "duet-date__table", "aria-labelledby": labelledById },
    h2(
      "thead",
      null,
      h2("tr", null, mapWithOffset(localization2.dayNames, firstDayOfWeek, (dayName) => h2(
        "th",
        { class: "duet-date__table-header", scope: "col" },
        h2("span", { "aria-hidden": "true" }, dayName.substr(0, 2)),
        h2("span", { class: "duet-date__vhidden" }, dayName)
      )))
    ),
    h2("tbody", null, chunk(days, 7).map((week) => h2("tr", { class: "duet-date__row" }, week.map((day) => h2(
      "td",
      { class: "duet-date__cell" },
      h2(DatePickerDay, { day, today, focusedDay: focusedDate, isSelected: isEqual(day, selectedDate), inRange: inRange(day, min, max), onDaySelect: onDateSelect, dateFormatter, onKeyboardNavigation, focusedDayRef })
    )))))
  );
};
var localization = {
  buttonLabel: "Choose date",
  placeholder: "YYYY-MM-DD",
  selectedDateMessage: "Selected date is",
  prevMonthLabel: "Previous month",
  nextMonthLabel: "Next month",
  monthSelectLabel: "Month",
  yearSelectLabel: "Year",
  closeLabel: "Close window",
  keyboardInstruction: "You can use arrow keys to navigate dates",
  calendarHeading: "Choose a date",
  dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  monthNames: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ],
  monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  locale: "en-GB"
};
var isoAdapter = { parse: parseISODate, format: printISODate };
var duetDatePickerCss = '.duet-date *,.duet-date *::before,.duet-date *::after{box-sizing:border-box;margin:0;width:auto}.duet-date{box-sizing:border-box;color:var(--duet-color-text);display:block;font-family:var(--duet-font);margin:0;position:relative;text-align:left;width:100%}.duet-date__input{-webkit-appearance:none;appearance:none;background:var(--duet-color-surface);border:1px solid var(--duet-color-text);border-radius:var(--duet-radius);color:var(--duet-color-text);float:none;font-family:var(--duet-font);font-size:100%;line-height:normal;padding:14px 60px 14px 14px;width:100%}.duet-date__input:focus{border-color:var(--duet-color-primary);box-shadow:0 0 0 1px var(--duet-color-primary);outline:0}.duet-date__input::-webkit-input-placeholder{color:var(--duet-color-placeholder);opacity:1}.duet-date__input:-moz-placeholder{color:var(--duet-color-placeholder);opacity:1}.duet-date__input:-ms-input-placeholder{color:var(--duet-color-placeholder)}.duet-date__input-wrapper{position:relative;width:100%}.duet-date__toggle{-moz-appearance:none;-webkit-appearance:none;-webkit-user-select:none;align-items:center;appearance:none;background:var(--duet-color-button);border:0;border-radius:0;border-bottom-right-radius:var(--duet-radius);border-top-right-radius:var(--duet-radius);box-shadow:inset 1px 0 0 rgba(0, 0, 0, 0.1);color:var(--duet-color-text);cursor:pointer;display:flex;height:calc(100% - 2px);justify-content:center;padding:0;position:absolute;right:1px;top:1px;user-select:none;width:48px;z-index:2}.duet-date__toggle:focus{box-shadow:0 0 0 2px var(--duet-color-primary);outline:0}.duet-date__toggle-icon{display:flex;flex-basis:100%;justify-content:center;align-items:center}.duet-date__dialog{display:flex;left:0;min-width:320px;opacity:0;position:absolute;top:100%;transform:scale(0.96) translateZ(0) translateY(-20px);transform-origin:top right;transition:transform 300ms ease, opacity 300ms ease, visibility 300ms ease;visibility:hidden;width:100%;will-change:transform, opacity, visibility;z-index:var(--duet-z-index)}@media (max-width: 35.9375em){.duet-date__dialog{background:var(--duet-color-overlay);bottom:0;position:fixed;right:0;top:0;transform:translateZ(0);transform-origin:bottom center}}.duet-date__dialog.is-left{left:auto;right:0;width:auto}.duet-date__dialog.is-active{opacity:1;transform:scale(1.0001) translateZ(0) translateY(0);visibility:visible}.duet-date__dialog-content{background:var(--duet-color-surface);border:1px solid rgba(0, 0, 0, 0.1);border-radius:var(--duet-radius);box-shadow:0 4px 10px 0 rgba(0, 0, 0, 0.1);margin-left:auto;margin-top:8px;max-width:310px;min-width:290px;padding:16px 16px 20px;position:relative;transform:none;width:100%;z-index:var(--duet-z-index)}@media (max-width: 35.9375em){.duet-date__dialog-content{border:0;border-radius:0;border-top-left-radius:var(--duet-radius);border-top-right-radius:var(--duet-radius);bottom:0;left:0;margin:0;max-width:none;min-height:26em;opacity:0;padding:0 8% 20px;position:absolute;transform:translateZ(0) translateY(100%);transition:transform 400ms ease, opacity 400ms ease, visibility 400ms ease;visibility:hidden;will-change:transform, opacity, visibility}.is-active .duet-date__dialog-content{opacity:1;transform:translateZ(0) translateY(0);visibility:visible}}.duet-date__table{border-collapse:collapse;border-spacing:0;color:var(--duet-color-text);font-size:1rem;font-weight:var(--duet-font-normal);line-height:1.25;text-align:center;width:100%}.duet-date__table-header{font-size:0.75rem;font-weight:var(--duet-font-bold);letter-spacing:1px;line-height:1.25;padding-bottom:8px;text-decoration:none;text-transform:uppercase}.duet-date__cell{text-align:center}.duet-date__day{-moz-appearance:none;-webkit-appearance:none;appearance:none;background:transparent;border:0;border-radius:50%;color:var(--duet-color-text);cursor:pointer;display:inline-block;font-family:var(--duet-font);font-size:0.875rem;font-variant-numeric:tabular-nums;font-weight:var(--duet-font-normal);height:36px;line-height:1.25;padding:0 0 1px;position:relative;text-align:center;vertical-align:middle;width:36px;z-index:1}.duet-date__day.is-today{box-shadow:0 0 0 1px var(--duet-color-primary);position:relative;z-index:200}.duet-date__day:hover::before,.duet-date__day.is-today::before{background:var(--duet-color-primary);border-radius:50%;bottom:0;content:"";left:0;opacity:0.06;position:absolute;right:0;top:0}.duet-date__day[aria-pressed=true],.duet-date__day:focus{background:var(--duet-color-primary);box-shadow:none;color:var(--duet-color-text-active);outline:0}.duet-date__day:active{background:var(--duet-color-primary);box-shadow:0 0 5px var(--duet-color-primary);color:var(--duet-color-text-active);z-index:200}.duet-date__day:focus{box-shadow:0 0 5px var(--duet-color-primary);z-index:200}.duet-date__day.is-disabled{background:transparent;box-shadow:none;color:var(--duet-color-text);cursor:default;opacity:0.5}.duet-date__day.is-disabled::before{display:none}.duet-date__day.is-outside{background:var(--duet-color-button);box-shadow:none;color:var(--duet-color-text);cursor:default;opacity:0.6;pointer-events:none}.duet-date__day.is-outside::before{display:none}.duet-date__header{align-items:center;display:flex;justify-content:space-between;margin-bottom:16px;width:100%}.duet-date__nav{white-space:nowrap}.duet-date__prev,.duet-date__next{-moz-appearance:none;-webkit-appearance:none;align-items:center;appearance:none;background:var(--duet-color-button);border:0;border-radius:50%;color:var(--duet-color-text);cursor:pointer;display:inline-flex;height:32px;justify-content:center;margin-left:8px;padding:0;transition:background-color 300ms ease;width:32px}@media (max-width: 35.9375em){.duet-date__prev,.duet-date__next{height:40px;width:40px}}.duet-date__prev:focus,.duet-date__next:focus{box-shadow:0 0 0 2px var(--duet-color-primary);outline:0}.duet-date__prev:active:focus,.duet-date__next:active:focus{box-shadow:none}.duet-date__prev:disabled,.duet-date__next:disabled{cursor:default;opacity:0.5}.duet-date__prev svg,.duet-date__next svg{margin:0 auto}.duet-date__select{display:inline-flex;margin-top:4px;position:relative}.duet-date__select span{margin-right:4px}.duet-date__select select{cursor:pointer;font-size:1rem;height:100%;left:0;opacity:0;position:absolute;top:0;width:100%;z-index:2}.duet-date__select select:focus+.duet-date__select-label{box-shadow:0 0 0 2px var(--duet-color-primary)}.duet-date__select-label{align-items:center;border-radius:var(--duet-radius);color:var(--duet-color-text);display:flex;font-size:1.25rem;font-weight:var(--duet-font-bold);line-height:1.25;padding:0 4px 0 8px;pointer-events:none;position:relative;width:100%;z-index:1}.duet-date__select-label svg{width:16px;height:16px}.duet-date__mobile{align-items:center;border-bottom:1px solid rgba(0, 0, 0, 0.12);display:flex;justify-content:space-between;margin-bottom:20px;margin-left:-10%;overflow:hidden;padding:12px 20px;position:relative;text-overflow:ellipsis;white-space:nowrap;width:120%}@media (min-width: 36em){.duet-date__mobile{border:0;margin:0;overflow:visible;padding:0;position:absolute;right:-8px;top:-8px;width:auto}}.duet-date__mobile-heading{display:inline-block;font-weight:var(--duet-font-bold);max-width:84%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}@media (min-width: 36em){.duet-date__mobile-heading{display:none}}.duet-date__close{-webkit-appearance:none;align-items:center;appearance:none;background:var(--duet-color-button);border:0;border-radius:50%;color:var(--duet-color-text);cursor:pointer;display:flex;height:24px;justify-content:center;padding:0;width:24px}@media (min-width: 36em){.duet-date__close{opacity:0}}.duet-date__close:focus{box-shadow:0 0 0 2px var(--duet-color-primary);outline:none}@media (min-width: 36em){.duet-date__close:focus{opacity:1}}.duet-date__close svg{margin:0 auto}.duet-date__vhidden{border:0;clip:rect(1px, 1px, 1px, 1px);height:1px;overflow:hidden;padding:0;position:absolute;top:0;width:1px}';
function range(from, to) {
  var result = [];
  for (var i = from; i <= to; i++) {
    result.push(i);
  }
  return result;
}
var keyCode = {
  TAB: 9,
  ESC: 27,
  SPACE: 32,
  PAGE_UP: 33,
  PAGE_DOWN: 34,
  END: 35,
  HOME: 36,
  LEFT: 37,
  UP: 38,
  RIGHT: 39,
  DOWN: 40
};
var DISALLOWED_CHARACTERS = /[^0-9\.\/\-]+/g;
var TRANSITION_MS = 300;
var DuetDatePicker = class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.duetChange = createEvent2(this, "duetChange", 7);
    this.duetBlur = createEvent2(this, "duetBlur", 7);
    this.duetFocus = createEvent2(this, "duetFocus", 7);
    this.monthSelectId = createIdentifier("DuetDateMonth");
    this.yearSelectId = createIdentifier("DuetDateYear");
    this.dialogLabelId = createIdentifier("DuetDateLabel");
    this.initialTouchX = null;
    this.initialTouchY = null;
    this.activeFocus = false;
    this.focusedDay = /* @__PURE__ */ new Date();
    this.open = false;
    this.name = "date";
    this.identifier = "";
    this.disabled = false;
    this.direction = "right";
    this.required = false;
    this.value = "";
    this.min = "";
    this.max = "";
    this.firstDayOfWeek = DaysOfWeek.Monday;
    this.localization = localization;
    this.dateAdapter = isoAdapter;
    this.enableActiveFocus = () => {
      this.activeFocus = true;
    };
    this.disableActiveFocus = () => {
      this.activeFocus = false;
    };
    this.toggleOpen = (e) => {
      e.preventDefault();
      this.open ? this.hide(false) : this.show();
    };
    this.handleEscKey = (event) => {
      if (event.keyCode === keyCode.ESC) {
        this.hide();
      }
    };
    this.handleBlur = (event) => {
      event.stopPropagation();
      this.duetBlur.emit({
        component: "duet-date-picker"
      });
    };
    this.handleFocus = (event) => {
      event.stopPropagation();
      this.duetFocus.emit({
        component: "duet-date-picker"
      });
    };
    this.handleTouchStart = (event) => {
      const touch = event.changedTouches[0];
      this.initialTouchX = touch.pageX;
      this.initialTouchY = touch.pageY;
    };
    this.handleTouchMove = (event) => {
      event.preventDefault();
    };
    this.handleTouchEnd = (event) => {
      const touch = event.changedTouches[0];
      const distX = touch.pageX - this.initialTouchX;
      const distY = touch.pageY - this.initialTouchY;
      const threshold = 70;
      const isHorizontalSwipe = Math.abs(distX) >= threshold && Math.abs(distY) <= threshold;
      const isDownwardsSwipe = Math.abs(distY) >= threshold && Math.abs(distX) <= threshold && distY > 0;
      if (isHorizontalSwipe) {
        this.addMonths(distX < 0 ? 1 : -1);
      } else if (isDownwardsSwipe) {
        this.hide(false);
        event.preventDefault();
      }
      this.initialTouchY = null;
      this.initialTouchX = null;
    };
    this.handleNextMonthClick = (event) => {
      event.preventDefault();
      this.addMonths(1);
    };
    this.handlePreviousMonthClick = (event) => {
      event.preventDefault();
      this.addMonths(-1);
    };
    this.handleFirstFocusableKeydown = (event) => {
      if (event.keyCode === keyCode.TAB && event.shiftKey) {
        this.focusedDayNode.focus();
        event.preventDefault();
      }
    };
    this.handleKeyboardNavigation = (event) => {
      if (event.keyCode === keyCode.TAB && !event.shiftKey) {
        event.preventDefault();
        this.firstFocusableElement.focus();
        return;
      }
      var handled = true;
      switch (event.keyCode) {
        case keyCode.RIGHT:
          this.addDays(1);
          break;
        case keyCode.LEFT:
          this.addDays(-1);
          break;
        case keyCode.DOWN:
          this.addDays(7);
          break;
        case keyCode.UP:
          this.addDays(-7);
          break;
        case keyCode.PAGE_UP:
          if (event.shiftKey) {
            this.addYears(-1);
          } else {
            this.addMonths(-1);
          }
          break;
        case keyCode.PAGE_DOWN:
          if (event.shiftKey) {
            this.addYears(1);
          } else {
            this.addMonths(1);
          }
          break;
        case keyCode.HOME:
          this.startOfWeek();
          break;
        case keyCode.END:
          this.endOfWeek();
          break;
        default:
          handled = false;
      }
      if (handled) {
        event.preventDefault();
        this.enableActiveFocus();
      }
    };
    this.handleDaySelect = (_event, day) => {
      if (!inRange(day, parseISODate(this.min), parseISODate(this.max))) {
        return;
      }
      if (day.getMonth() === this.focusedDay.getMonth()) {
        this.setValue(day);
        this.hide();
      } else {
        this.setFocusedDay(day);
      }
    };
    this.handleMonthSelect = (e) => {
      this.setMonth(parseInt(e.target.value, 10));
    };
    this.handleYearSelect = (e) => {
      this.setYear(parseInt(e.target.value, 10));
    };
    this.handleInputChange = (e) => {
      const target = e.target;
      target.value = target.value.replace(DISALLOWED_CHARACTERS, "");
      const parsed = this.dateAdapter.parse(target.value, createDate);
      if (parsed || target.value === "") {
        this.setValue(parsed);
      }
    };
    this.processFocusedDayNode = (element) => {
      this.focusedDayNode = element;
      if (this.activeFocus && this.open) {
        setTimeout(() => element.focus(), 0);
      }
    };
  }
  connectedCallback() {
    this.createDateFormatters();
  }
  createDateFormatters() {
    this.dateFormatShort = new Intl.DateTimeFormat(this.localization.locale, { day: "numeric", month: "long" });
    this.dateFormatLong = new Intl.DateTimeFormat(this.localization.locale, {
      day: "numeric",
      month: "long",
      year: "numeric"
    });
  }
  /**
   * Component event handling.
   */
  handleDocumentClick(e) {
    if (!this.open) {
      return;
    }
    const target = e.target;
    if (this.dialogWrapperNode.contains(target) || this.datePickerButton.contains(target)) {
      return;
    }
    this.hide(false);
  }
  /**
   * Public methods API
   */
  /**
   * Sets focus on the date picker's input. Use this method instead of the global `focus()`.
   */
  async setFocus() {
    return this.datePickerInput.focus();
  }
  /**
   * Show the calendar modal, moving focus to the calendar inside.
   */
  async show() {
    this.open = true;
    this.setFocusedDay(parseISODate(this.value) || /* @__PURE__ */ new Date());
    clearTimeout(this.focusTimeoutId);
    this.focusTimeoutId = setTimeout(() => this.monthSelectNode.focus(), TRANSITION_MS);
  }
  /**
   * Hide the calendar modal. Set `moveFocusToButton` to false to prevent focus
   * returning to the date picker's button. Default is true.
   */
  async hide(moveFocusToButton = true) {
    this.open = false;
    clearTimeout(this.focusTimeoutId);
    if (moveFocusToButton) {
      setTimeout(() => this.datePickerButton.focus(), TRANSITION_MS + 200);
    }
  }
  addDays(days) {
    this.setFocusedDay(addDays(this.focusedDay, days));
  }
  addMonths(months) {
    this.setMonth(this.focusedDay.getMonth() + months);
  }
  addYears(years) {
    this.setYear(this.focusedDay.getFullYear() + years);
  }
  startOfWeek() {
    this.setFocusedDay(startOfWeek(this.focusedDay, this.firstDayOfWeek));
  }
  endOfWeek() {
    this.setFocusedDay(endOfWeek(this.focusedDay, this.firstDayOfWeek));
  }
  setMonth(month) {
    const min = setMonth(startOfMonth(this.focusedDay), month);
    const max = endOfMonth(min);
    const date = setMonth(this.focusedDay, month);
    this.setFocusedDay(clamp(date, min, max));
  }
  setYear(year) {
    const min = setYear(startOfMonth(this.focusedDay), year);
    const max = endOfMonth(min);
    const date = setYear(this.focusedDay, year);
    this.setFocusedDay(clamp(date, min, max));
  }
  setFocusedDay(day) {
    this.focusedDay = clamp(day, parseISODate(this.min), parseISODate(this.max));
  }
  setValue(date) {
    this.value = printISODate(date);
    this.duetChange.emit({
      component: "duet-date-picker",
      value: this.value,
      valueAsDate: date
    });
  }
  /**
   * render() function
   * Always the last one in the class.
   */
  render() {
    const valueAsDate = parseISODate(this.value);
    const formattedDate = valueAsDate && this.dateAdapter.format(valueAsDate);
    const selectedYear = (valueAsDate || this.focusedDay).getFullYear();
    const focusedMonth = this.focusedDay.getMonth();
    const focusedYear = this.focusedDay.getFullYear();
    const minDate = parseISODate(this.min);
    const maxDate = parseISODate(this.max);
    const prevMonthDisabled = minDate != null && minDate.getMonth() === focusedMonth && minDate.getFullYear() === focusedYear;
    const nextMonthDisabled = maxDate != null && maxDate.getMonth() === focusedMonth && maxDate.getFullYear() === focusedYear;
    const minYear = minDate ? minDate.getFullYear() : selectedYear - 10;
    const maxYear = maxDate ? maxDate.getFullYear() : selectedYear + 10;
    return h2(Host2, null, h2("div", { class: "duet-date" }, h2(DatePickerInput, { dateFormatter: this.dateFormatLong, value: this.value, valueAsDate, formattedValue: formattedDate, onInput: this.handleInputChange, onBlur: this.handleBlur, onFocus: this.handleFocus, onClick: this.toggleOpen, name: this.name, disabled: this.disabled, role: this.role, required: this.required, identifier: this.identifier, localization: this.localization, buttonRef: (element) => this.datePickerButton = element, inputRef: (element) => this.datePickerInput = element }), h2("div", { class: {
      "duet-date__dialog": true,
      "is-left": this.direction === "left",
      "is-active": this.open
    }, role: "dialog", "aria-modal": "true", "aria-hidden": this.open ? "false" : "true", "aria-labelledby": this.dialogLabelId, onTouchMove: this.handleTouchMove, onTouchStart: this.handleTouchStart, onTouchEnd: this.handleTouchEnd }, h2("div", { class: "duet-date__dialog-content", onKeyDown: this.handleEscKey, ref: (element) => this.dialogWrapperNode = element }, h2("div", { class: "duet-date__vhidden duet-date__instructions", "aria-live": "polite" }, this.localization.keyboardInstruction), h2("div", { class: "duet-date__mobile", onFocusin: this.disableActiveFocus }, h2("label", { class: "duet-date__mobile-heading" }, this.localization.calendarHeading), h2("button", { class: "duet-date__close", ref: (element) => this.firstFocusableElement = element, onKeyDown: this.handleFirstFocusableKeydown, onClick: () => this.hide(), type: "button" }, h2("svg", { "aria-hidden": "true", fill: "currentColor", xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24" }, h2("path", { d: "M0 0h24v24H0V0z", fill: "none" }), h2("path", { d: "M18.3 5.71c-.39-.39-1.02-.39-1.41 0L12 10.59 7.11 5.7c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.02 0 1.41L10.59 12 5.7 16.89c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0L12 13.41l4.89 4.89c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4z" })), h2("span", { class: "duet-date__vhidden" }, this.localization.closeLabel))), h2("div", { class: "duet-date__header", onFocusin: this.disableActiveFocus }, h2("div", null, h2("h2", { id: this.dialogLabelId, class: "duet-date__vhidden", "aria-live": "polite", "aria-atomic": "true" }, this.localization.monthNames[focusedMonth], " ", this.focusedDay.getFullYear()), h2("label", { htmlFor: this.monthSelectId, class: "duet-date__vhidden" }, this.localization.monthSelectLabel), h2("div", { class: "duet-date__select" }, h2("select", { id: this.monthSelectId, class: "duet-date__select--month", ref: (element) => this.monthSelectNode = element, onChange: this.handleMonthSelect }, this.localization.monthNames.map((month, i) => h2("option", { key: month, value: i, selected: i === focusedMonth }, month))), h2("div", { class: "duet-date__select-label", "aria-hidden": "true" }, h2("span", null, this.localization.monthNamesShort[focusedMonth]), h2("svg", { fill: "currentColor", xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24" }, h2("path", { d: "M8.12 9.29L12 13.17l3.88-3.88c.39-.39 1.02-.39 1.41 0 .39.39.39 1.02 0 1.41l-4.59 4.59c-.39.39-1.02.39-1.41 0L6.7 10.7c-.39-.39-.39-1.02 0-1.41.39-.38 1.03-.39 1.42 0z" })))), h2("label", { htmlFor: this.yearSelectId, class: "duet-date__vhidden" }, this.localization.yearSelectLabel), h2("div", { class: "duet-date__select" }, h2("select", { id: this.yearSelectId, class: "duet-date__select--year", onChange: this.handleYearSelect }, range(minYear, maxYear).map((year) => h2("option", { key: year, selected: year === focusedYear }, year))), h2("div", { class: "duet-date__select-label", "aria-hidden": "true" }, h2("span", null, this.focusedDay.getFullYear()), h2("svg", { fill: "currentColor", xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24" }, h2("path", { d: "M8.12 9.29L12 13.17l3.88-3.88c.39-.39 1.02-.39 1.41 0 .39.39.39 1.02 0 1.41l-4.59 4.59c-.39.39-1.02.39-1.41 0L6.7 10.7c-.39-.39-.39-1.02 0-1.41.39-.38 1.03-.39 1.42 0z" }))))), h2("div", { class: "duet-date__nav" }, h2("button", { class: "duet-date__prev", onClick: this.handlePreviousMonthClick, disabled: prevMonthDisabled, type: "button" }, h2("svg", { "aria-hidden": "true", fill: "currentColor", xmlns: "http://www.w3.org/2000/svg", width: "21", height: "21", viewBox: "0 0 24 24" }, h2("path", { d: "M14.71 15.88L10.83 12l3.88-3.88c.39-.39.39-1.02 0-1.41-.39-.39-1.02-.39-1.41 0L8.71 11.3c-.39.39-.39 1.02 0 1.41l4.59 4.59c.39.39 1.02.39 1.41 0 .38-.39.39-1.03 0-1.42z" })), h2("span", { class: "duet-date__vhidden" }, this.localization.prevMonthLabel)), h2("button", { class: "duet-date__next", onClick: this.handleNextMonthClick, disabled: nextMonthDisabled, type: "button" }, h2("svg", { "aria-hidden": "true", fill: "currentColor", xmlns: "http://www.w3.org/2000/svg", width: "21", height: "21", viewBox: "0 0 24 24" }, h2("path", { d: "M9.29 15.88L13.17 12 9.29 8.12c-.39-.39-.39-1.02 0-1.41.39-.39 1.02-.39 1.41 0l4.59 4.59c.39.39.39 1.02 0 1.41L10.7 17.3c-.39.39-1.02.39-1.41 0-.38-.39-.39-1.03 0-1.42z" })), h2("span", { class: "duet-date__vhidden" }, this.localization.nextMonthLabel)))), h2(DatePickerMonth, { dateFormatter: this.dateFormatShort, selectedDate: valueAsDate, focusedDate: this.focusedDay, onDateSelect: this.handleDaySelect, onKeyboardNavigation: this.handleKeyboardNavigation, labelledById: this.dialogLabelId, localization: this.localization, firstDayOfWeek: this.firstDayOfWeek, focusedDayRef: this.processFocusedDayNode, min: minDate, max: maxDate })))));
  }
  get element() {
    return this;
  }
  static get watchers() {
    return {
      "localization": ["createDateFormatters"]
    };
  }
  static get style() {
    return duetDatePickerCss;
  }
};
var DuetDatePicker$1 = proxyCustomElement(DuetDatePicker, [0, "duet-date-picker", { "name": [1], "identifier": [1], "disabled": [516], "role": [1], "direction": [1], "required": [4], "value": [513], "min": [1], "max": [1], "firstDayOfWeek": [2, "first-day-of-week"], "localization": [16], "dateAdapter": [16], "activeFocus": [32], "focusedDay": [32], "open": [32] }, [[6, "click", "handleDocumentClick"]]]);
var datePickerCss = "duet-date-picker{--duet-color-primary:var(--telekom-color-primary-standard);--duet-color-text:var(--telekom-color-text-and-icon-standard);--duet-color-overlay:var(--telekom-color-background-surface);--duet-font:var(--telekom-typography-font-family-sans);--duet-font-normal:var(--telekom-typography-font-weight-regular);--duet-font-bold:var(--telekom-typography-font-weight-medium);--duet-color-placeholder:var(--telekom-color-ui-regular);--duet-radius:var(--telekom-radius-standard);--duet-radius-toggle-focus:6px;--duet-color-text-active:var(--telekom-color-text-and-icon-white-standard);--duet-color-button:var(--telekom-color-background-surface);--duet-color-surface:var(--telekom-color-background-surface);--duet-z-index:600;--duet-z-index-toggle:2;--spacing-x:var(--telekom-spacing-composition-space-05);--spacing-heading:0 0 var(--telekom-spacing-composition-space-06) 0;--font-size-heading:var(--telekom-typography-font-size-body);--radius-day:var(--telekom-radius-standard);--font-size-day:var(--telekom-typography-font-size-body);--font-size-table-header:var(--telekom-typography-font-size-caption);--font-weight-table-header:var(--telekom-typography-font-weight-extra-bold);--focus-outline:var(--telekom-line-weight-highlight) solid\n    var(--telekom-color-functional-focus-standard);--z-index-label:10}duet-date-picker .duet-date__input{border:var(--telekom-line-weight-standard) solid\n    var(--telekom-color-ui-border-standard);background-color:var(--telekom-color-ui-state-fill-standard);padding:1.125rem calc(2rem - var(--telekom-spacing-composition-space-01))\n    0.25rem calc(var(--spacing-x) - var(--telekom-spacing-composition-space-01));height:var(--telekom-spacing-composition-space-13);font:var(--telekom-text-style-body)}duet-date-picker .duet-date__input:hover{border:var(--telekom-spacing-composition-space-01) solid\n    var(--telekom-color-ui-border-hovered);background-color:var(--telekom-color-ui-state-fill-hovered)}duet-date-picker .duet-date__input:focus{border:var(--telekom-line-weight-standard) solid\n    var(--telekom-color-ui-border-pressed);outline:var(--focus-outline);box-shadow:none;outline-offset:1px}duet-date-picker .duet-date__toggle{border-radius:0 var(--duet-radius-toggle-focus)\n    var(--duet-radius-toggle-focus) 0;background:transparent;z-index:var(--duet-z-index-toggle);box-shadow:inset 1px 0 0 var(--telekom-color-ui-faint);width:var(--telekom-spacing-composition-space-13)}duet-date-picker .duet-date__toggle:focus{outline:var(--focus-outline);outline-offset:2px;box-shadow:none}.scale-date-picker:not(.scale-date-picker--disabled) duet-date-picker .duet-date__toggle:hover{background-color:var(--telekom-color-ui-state-fill-hovered)}.scale-date-picker:not(.scale-date-picker--disabled) duet-date-picker .duet-date__toggle:active{background-color:var(--telekom-color-ui-state-fill-pressed)}duet-date-picker .duet-date__toggle:hover scale-icon-content-calendar{color:var(--telekom-color-text-and-icon-standard)}duet-date-picker .duet-date__toggle:active scale-icon-content-calendar{color:var(--telekom-color-text-and-icon-standard)}@media screen and (forced-colors: active), (-ms-high-contrast: active){duet-date-picker .duet-date__toggle scale-icon-content-calendar,duet-date-picker .duet-date__header .duet-date__select-label,duet-date-picker .duet-date__header .duet-date__nav svg{color:var(--telekom-color-text-and-icon-inverted-standard)}duet-date-picker .duet-date__day[aria-pressed='true']{border:1px solid transparent}duet-date-picker .duet-date__day.is-today::before{border:2px solid transparent}}.scale-date-picker{position:relative}.scale-date-picker .date-picker__helper-text{font-weight:var(--telekom-typography-font-weight-bold);transition:all var(--telekom-motion-duration-transition)\n    var(--telekom-motion-easing-standard);padding-left:var(--telekom-spacing-composition-space-05);font-size:var(--telekom-typography-font-size-small);line-height:var(--telekom-typography-line-spacing-standard);color:var(--telekom-color-text-and-icon-functional-informational)}.scale-date-picker .date-picker__label{top:0;left:0;color:var(--telekom-color-text-and-icon-additional);display:flex;z-index:var(--z-index-label);position:absolute;transition:all var(--telekom-motion-duration-transition)\n    var(--telekom-motion-easing-standard);pointer-events:none;font:var(--telekom-text-style-ui);transform:translate(var(--telekom-spacing-composition-space-05), 0.875rem)}duet-date-picker .duet-date__input::placeholder{visibility:hidden;color:transparent;transition:all var(--telekom-motion-duration-transition)\n    var(--telekom-motion-easing-standard)}duet-date-picker .duet-date__header{margin-top:var(--telekom-spacing-composition-space-04);margin-bottom:var(--telekom-spacing-composition-space-04);font:var(--telekom-text-style-ui)}duet-date-picker .duet-date__select{height:var(--telekom-spacing-composition-space-10)}duet-date-picker .duet-date__prev,duet-date-picker .duet-date__next{width:var(--telekom-spacing-composition-space-10);height:var(--telekom-spacing-composition-space-10)}duet-date-picker .duet-date__day{width:var(--telekom-spacing-composition-space-13);height:var(--telekom-spacing-composition-space-13)}.scale-date-picker.scale-date-picker--focus .date-picker__label,.scale-date-picker.animated .date-picker__label{color:var(--telekom-color-text-and-icon-additional);transition:all var(--telekom-motion-duration-transition)\n    var(--telekom-motion-easing-standard);font:var(--telekom-text-style-small-bold);transform:translate(\n    0.75rem,\n    calc(0.25rem + var(--telekom-spacing-composition-space-01))\n  )}.scale-date-picker.animated .duet-date__input::placeholder,duet-date-picker .duet-date__input:focus::placeholder{visibility:initial;color:var(--telekom-color-text-and-icon-standard);transition:all var(--telekom-motion-duration-transition)\n    var(--telekom-motion-easing-standard)}duet-date-picker .duet-date__table{margin-top:var(--telekom-spacing-composition-space-04)}.scale-date-picker--status-error duet-date-picker .duet-date__input{margin-top:-1px;margin-bottom:-1px;border:var(--telekom-line-weight-highlight) solid\n    var(--telekom-color-functional-danger-standard)}.scale-date-picker--status-error duet-date-picker .duet-date__input:hover{border:var(--telekom-line-weight-highlight) solid\n    var(--telekom-color-functional-danger-hovered)}.scale-date-picker--status-error duet-date-picker .duet-date__input:focus{outline:var(--focus-outline);outline-offset:1px;box-shadow:none}.scale-date-picker--status-error .duet-date__toggle{width:47px}.scale-date-picker.scale-date-picker--disabled input,.scale-date-picker.scale-date-picker--disabled .duet-date__toggle{cursor:not-allowed}.scale-date-picker.scale-date-picker--disabled input,.scale-date-picker.scale-date-picker--disabled input:hover{color:var(--telekom-color-text-and-icon-disabled);border-color:var(--telekom-color-ui-border-disabled);background:none}.scale-date-picker.scale-date-picker--disabled .duet-date__toggle{color:var(--telekom-color-text-and-icon-disabled);box-shadow:inset 1px 0 0 var(--telekom-color-ui-border-disabled)}.scale-date-picker.scale-date-picker--disabled .duet-date__toggle:hover,.scale-date-picker.scale-date-picker--disabled .duet-date__toggle:hover scale-icon-content-calendar{color:var(--telekom-color-text-and-icon-disabled)}.scale-date-picker.scale-date-picker--disabled .date-picker__label{color:var(--telekom-color-text-and-icon-disabled)}.scale-date-picker__popup-heading{text-align:center;padding:var(--spacing-heading);font-size:var(--font-size-heading);font:var(--telekom-text-style-heading-6);color:var(--telekom-color-text-and-icon-standard) !important}duet-date-picker .duet-date__dialog-content{border:none;box-shadow:var(--telekom-shadow-raised-standard);max-width:324px;padding:var(--telekom-spacing-composition-space-06)\n    var(--telekom-spacing-composition-space-04)\n    var(--telekom-spacing-composition-space-04)\n    var(--telekom-spacing-composition-space-04);margin-top:var(--telekom-spacing-composition-space-03)}duet-date-picker .duet-date__cell{padding:0}duet-date-picker .duet-date__mobile{margin-left:0;padding:var(--telekom-spacing-composition-space-03) 0\n    var(--telekom-spacing-composition-space-05) 0}duet-date-picker .duet-date__select{margin-top:0}duet-date-picker .duet-date__select:nth-of-type(1){margin-right:var(--telekom-spacing-composition-space-04)}duet-date-picker .duet-date__select-label{font:var(--telekom-text-style-ui)}duet-date-picker .duet-date__select-label svg{width:16px;height:16px;margin-left:var(--telekom-spacing-composition-space-04)}duet-date-picker .duet-date__select select:focus+.duet-date__select-label{outline:var(--focus-outline)}duet-date-picker .duet-date__select select:hover+.duet-date__select-label{background:var(--telekom-color-primary-hovered);color:var(--telekom-color-text-and-icon-white-standard)}duet-date-picker .duet-date__select select:active+.duet-date__select-label{box-shadow:none;background:var(--telekom-color-primary-pressed);color:var(--telekom-color-text-and-icon-white-standard)}duet-date-picker .duet-date__prev,duet-date-picker .duet-date__next{border-radius:var(--duet-radius);margin-left:var(--telekom-spacing-composition-space-02)}duet-date-picker .duet-date__prev:hover,duet-date-picker .duet-date__next:hover{background:var(--telekom-color-primary-hovered);color:var(--telekom-color-text-and-icon-white-standard)}duet-date-picker .duet-date__prev:active,duet-date-picker .duet-date__next:active{background:var(--telekom-color-primary-pressed);color:var(--telekom-color-text-and-icon-white-standard)}duet-date-picker .duet-date__prev:focus,duet-date-picker .duet-date__next:focus{outline:var(--focus-outline)}duet-date-picker .duet-date__close{border-radius:var(--duet-radius)}duet-date-picker .duet-date__close:focus{outline:var(--focus-outline)}duet-date-picker .duet-date__table-header{height:var(--telekom-spacing-composition-space-14);padding:0;font-size:var(--font-size-table-header);font-weight:var(--font-weight-table-header)}duet-date-picker .duet-date__day{padding:0;border-radius:var(--radius-day);font-size:var(--font-size-day);color:var(--telekom-color-text-and-icon-standard)}duet-date-picker .duet-date__day.is-today{box-shadow:none}duet-date-picker .duet-date__day.is-disabled{opacity:1;color:var(--telekom-color-text-and-icon-disabled);pointer-events:none}duet-date-picker .duet-date__day.is-today::before{content:'';display:inline-block;width:var(--telekom-spacing-composition-space-03);height:var(--telekom-spacing-composition-space-03);border-radius:var(--telekom-radius-standard);background-color:var(--telekom-color-primary-standard);opacity:1;left:var(--telekom-spacing-composition-space-07);top:var(--telekom-spacing-composition-space-10)}duet-date-picker [aria-selected='true'] .duet-date__day.is-today::before,duet-date-picker .duet-date__day.is-today:hover::before{background-color:var(--telekom-color-background-surface)}duet-date-picker .duet-date__day.is-today.is-disabled::before{background-color:var(--telekom-radius-standard)}duet-date-picker .duet-date__day:focus{background:var(--telekom-color-background-surface);color:var(--telekom-color-text-and-icon-standard);outline:var(--focus-outline);box-shadow:none}duet-date-picker .duet-date__day:hover{background:var(--telekom-color-primary-hovered);color:var(--telekom-color-text-and-icon-white-standard)}duet-date-picker .duet-date__day:active{box-shadow:none;background:var(--telekom-color-primary-pressed);color:var(--telekom-color-text-and-icon-white-standard)}duet-date-picker .duet-date__day:hover::before{border-radius:var(--duet-radius);opacity:1;background:transparent;color:var(--telekom-color-text-and-icon-white-standard)}duet-date-picker .scale-date-picker__popup-heading{padding:var(--telekom-spacing-composition-space-04)}scale-date-picker .has-helper-text scale-helper-text{display:block;margin-top:var(--telekom-spacing-composition-space-03)}@media (max-width: 35.9375em) and (orientation: landscape){duet-date-picker .duet-date__dialog-content{zoom:70%}}@media (max-width: 35.9375em){duet-date-picker .scale-date-picker__popup-heading{display:none}duet-date-picker .duet-date__dialog-content{max-width:none}}";
if (typeof window !== "undefined" && typeof window.Audio !== "undefined" && !customElements.get("duet-date-picker")) {
  customElements.define("duet-date-picker", DuetDatePicker$1);
}
var DEFAULT_ICON_SIZE = 20;
var DatePicker = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.scaleChange = createEvent(this, "scale-change", 7);
    this.scaleChangeLegacy = createEvent(this, "scaleChange", 7);
    this.scaleBlur = createEvent(this, "scale-blur", 7);
    this.scaleBlurLegacy = createEvent(this, "scaleBlur", 7);
    this.scaleFocus = createEvent(this, "scale-focus", 7);
    this.scaleFocusLegacy = createEvent(this, "scaleFocus", 7);
    this.name = "date";
    this.popupTitle = "Pick a date";
    this.disabled = false;
    this.direction = "right";
    this.required = false;
    this.value = "";
    this.min = "";
    this.max = "";
    this.helperText = "";
    this.status = "";
    this.label = "";
    this.placeholder = "";
    this.variant = "informational";
    this.hasFocus = false;
    this.hasValue = this.value != null && this.value !== "";
    this.internalId = generateUniqueId();
    this.adjustButtonsLabelsForA11y = () => {
      const table = this.hostElement.querySelector(".duet-date__table");
      if (!table) {
        setTimeout(this.adjustButtonsLabelsForA11y);
        return;
      }
      const options = { subtree: true, childList: true, attributes: true };
      const callback = () => {
        this.mo.disconnect();
        const buttons = Array.from(this.hostElement.querySelectorAll(".duet-date__day"));
        buttons.forEach((button) => {
          const span = button.querySelector(".duet-date__vhidden");
          const text = span.textContent;
          button.setAttribute("aria-label", text);
          span.setAttribute("hidden", "hidden");
        });
        this.mo.observe(table, options);
      };
      this.mo = new MutationObserver(callback);
      callback();
    };
  }
  /**
   * Public methods API
   */
  /**
   * Sets focus on the date picker's input. Use this method instead of the global `focus()`.
   */
  async setFocus() {
    return this.duetInput.setFocus();
  }
  /**
   * Show the calendar modal, moving focus to the calendar inside.
   */
  async show() {
    return this.duetInput.show();
  }
  /**
   * Hide the calendar modal. Set `moveFocusToButton` to false to prevent focus
   * returning to the date picker's button. Default is true.
   */
  async hide(moveFocusToButton = true) {
    return this.duetInput.hide(moveFocusToButton);
  }
  /**
   * Watch `value` property for changes and update `hasValue` based on that.
   */
  onValueChange() {
    this.hasValue = this.value != null && this.value !== "";
    this.duetInput.querySelector(".duet-date__input").value = this.value;
  }
  /**
   * Watch `placeholder` property for changes and update `placeholder` based on that.
   */
  onPlaceholderChange(newValue) {
    const input = this.duetInput.querySelector(".duet-date__input");
    if (input && this.placeholder) {
      input.setAttribute("placeholder", newValue);
    }
  }
  componentWillLoad() {
    if (this.popupTitle !== "Pick a date") {
      statusNote({
        tag: "deprecated",
        message: 'Property "popupTitle" is deprecate in favor of localization.calendarHeading.',
        type: "warn",
        source: this.hostElement
      });
    }
    this.handleKeyPress = this.handleKeyPress.bind(this);
    if (this.identifier == null) {
      this.identifier = "scale-date-picker-" + this.internalId;
    }
  }
  componentDidLoad() {
    var _a, _b;
    const calendarIcon = this.duetInput.querySelector(".duet-date__toggle-icon");
    if (calendarIcon) {
      const icon = document.createElement("scale-icon-content-calendar");
      icon.size = DEFAULT_ICON_SIZE;
      calendarIcon.replaceWith(icon);
    }
    const navLeftIcon = this.duetInput.querySelector(".duet-date__prev svg");
    if (navLeftIcon) {
      const scaleNavLeftIcon = document.createElement("scale-icon-navigation-left");
      scaleNavLeftIcon.size = 16;
      navLeftIcon.replaceWith(scaleNavLeftIcon);
    }
    const navRightIcon = this.duetInput.querySelector(".duet-date__next svg");
    if (navRightIcon) {
      const scaleNavRightIcon = document.createElement("scale-icon-navigation-right");
      scaleNavRightIcon.size = 16;
      navRightIcon.replaceWith(scaleNavRightIcon);
    }
    const selectIcon = this.duetInput.querySelectorAll(".duet-date__select-label svg");
    if (selectIcon) {
      Array.from(selectIcon).forEach((icon) => icon.replaceWith(document.createElement("scale-icon-navigation-collapse-down")));
    }
    const input = this.duetInput.querySelector(".duet-date__input");
    if (input) {
      input.addEventListener("keyup", this.handleKeyPress);
    }
    if (input && this.helperText) {
      input.setAttribute("aria-describedby", `helper-message-${this.internalId}`);
    }
    if (input && this.placeholder) {
      input.setAttribute("placeholder", this.placeholder);
    }
    if (input && (this.status === "error" || this.invalid)) {
      input.setAttribute("aria-invalid", "true");
    }
    const dialog = this.hostElement.querySelector(".duet-date__dialog");
    let duetHeadingId = "";
    if (dialog) {
      duetHeadingId = dialog.getAttribute("aria-labelledby");
      if (duetHeadingId) {
        const duetHeading = this.hostElement.querySelector(`#${duetHeadingId}`);
        if (duetHeading) {
          duetHeading.parentElement.removeChild(duetHeading);
        }
      }
    }
    const dialogContent = this.hostElement.querySelector(".duet-date__dialog-content");
    if (dialogContent) {
      const calendarHeading = ((_a = this.localization) === null || _a === void 0 ? void 0 : _a.calendarHeading) || this.popupTitle || "Pick a date";
      const heading = document.createElement("h2");
      heading.id = duetHeadingId;
      heading.className = "scale-date-picker__popup-heading";
      heading.innerHTML = calendarHeading;
      dialogContent.insertBefore(heading, dialogContent.firstChild);
    }
    const tableHeadings = this.hostElement.querySelectorAll('.duet-date__table-header span[aria-hidden="true"]');
    if (tableHeadings) {
      Array.from(tableHeadings).forEach((item) => item.innerHTML = item.innerHTML[0]);
    }
    const today = this.hostElement.querySelector(".duet-date__day.is-today span.duet-date__vhidden");
    if (today) {
      today.innerHTML = `${today.innerHTML}, ${((_b = this.localization) === null || _b === void 0 ? void 0 : _b.today) || "today"}`;
    }
    this.adjustButtonsLabelsForA11y();
  }
  componentDidRender() {
    if (this.status !== "") {
      statusNote({
        tag: "deprecated",
        message: 'Property "status" is deprecated. Please use the "invalid" property!',
        type: "warn",
        source: this.hostElement
      });
    }
    if (this.size) {
      statusNote({
        tag: "deprecated",
        message: 'Property "size" is deprecated. Please use css overwrite!',
        type: "warn",
        source: this.hostElement
      });
    }
  }
  disconnectedCallback() {
    if (this.duetInput) {
      const input = this.duetInput.querySelector(".duet-date__input");
      if (input) {
        input.removeEventListener("keyup", this.handleKeyPress);
      }
    }
    if (this.mo) {
      this.mo.disconnect();
    }
  }
  handleKeyPress(e) {
    this.hasValue = e.target.value != null && e.target.value !== "";
  }
  render() {
    return h(Host, null, this.styles && h("style", null, this.styles), h("div", { class: classnames("scale-date-picker", this.status && `scale-date-picker--status-${this.status}`, this.invalid && `scale-date-picker--status-error`, this.hasFocus && "scale-date-picker--focus", this.disabled && "scale-date-picker--disabled", this.hasValue && "animated", this.helperText && "has-helper-text") }, h("label", { class: "date-picker__label", htmlFor: this.identifier }, this.label), h("duet-date-picker", { onDuetChange: (e) => {
      emitEvent(this, "scaleChange", e.detail);
      this.handleKeyPress(e);
    }, onDuetFocus: (e) => {
      emitEvent(this, "scaleFocus", e.detail);
      this.hasFocus = true;
    }, onDuetBlur: (e) => {
      emitEvent(this, "scaleBlur", e.detail);
      this.hasFocus = false;
    }, name: this.name, identifier: this.identifier, role: this.innerRole, direction: this.direction, required: this.required, min: this.min, max: this.max, firstDayOfWeek: this.firstDayOfWeek, localization: this.localization, dateAdapter: this.dateAdapter, disabled: this.disabled, value: this.value, ref: (element) => this.duetInput = element }), this.helperText && h("scale-helper-text", { helperText: this.helperText, variant: this.invalid ? "danger" : this.variant })));
  }
  get hostElement() {
    return getElement(this);
  }
  static get watchers() {
    return {
      "value": ["onValueChange"],
      "placeholder": ["onPlaceholderChange"]
    };
  }
};
DatePicker.style = datePickerCss;
export {
  DatePicker as scale_date_picker
};
/*! Bundled license information:

@telekom/scale-components/dist/esm/scale-date-picker.entry.js:
  (*!__STENCIL_STATIC_IMPORT_SWITCH__*)
*/
//# sourceMappingURL=scale-date-picker.entry-7CTONDTF.js.map
