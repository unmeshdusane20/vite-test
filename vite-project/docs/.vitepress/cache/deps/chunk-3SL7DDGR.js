// node_modules/@telekom/scale-components/dist/esm/index-6d95a4bc.js
var NAMESPACE = "scale-components";
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
var H = win.HTMLElement || class {
};
var plt = {
  $flags$: 0,
  $resourcesUrl$: "",
  jmp: (h2) => h2(),
  raf: (h2) => requestAnimationFrame(h2),
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
var HYDRATED_CSS = "{visibility:hidden}.hydrated{visibility:inherit}";
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
var convertScopedToShadow = (css) => css.replace(/\/\*!@([^\/]+)\*\/[^\{]+\{/g, "$1{");
var EMPTY_OBJ = {};
var SVG_NS = "http://www.w3.org/2000/svg";
var HTML_NS = "http://www.w3.org/1999/xhtml";
var isDef = (v) => v != null;
var isComplexType = (o) => {
  o = typeof o;
  return o === "object" || o === "function";
};
var h = (nodeName, vnodeData, ...children) => {
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
var Host = {};
var isHost = (node) => node && node.$tag$ === Host;
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
    return h(node.vtag, vnodeData, ...node.vchildren || []);
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
  const rootVnode = isHost(renderFnResults) ? renderFnResults : h(null, null, renderFnResults);
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
var getElement = (ref) => getHostRef(ref).$hostElement$;
var createEvent = (ref, name, flags) => {
  const elm = getElement(ref);
  return {
    emit: (detail) => {
      return emitEvent(elm, name, {
        bubbles: !!(flags & 4),
        composed: !!(flags & 2),
        cancelable: !!(flags & 1),
        detail
      });
    }
  };
};
var emitEvent = (elm, name, opts) => {
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
  nextTick(() => emitEvent(win, "appload", { detail: { namespace: NAMESPACE } }));
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
var patchCloneNode = (HostElementPrototype) => {
  const orgCloneNode = HostElementPrototype.cloneNode;
  HostElementPrototype.cloneNode = function(deep) {
    const srcNode = this;
    const isShadowDom = srcNode.shadowRoot && supportsShadow;
    const clonedNode = orgCloneNode.call(srcNode, isShadowDom ? deep : false);
    if (!isShadowDom && deep) {
      let i = 0;
      let slotted, nonStencilNode;
      const stencilPrivates = [
        "s-id",
        "s-cr",
        "s-lr",
        "s-rc",
        "s-sc",
        "s-p",
        "s-cn",
        "s-sr",
        "s-sn",
        "s-hn",
        "s-ol",
        "s-nr",
        "s-si"
      ];
      for (; i < srcNode.childNodes.length; i++) {
        slotted = srcNode.childNodes[i]["s-nr"];
        nonStencilNode = stencilPrivates.every((privateField) => !srcNode.childNodes[i][privateField]);
        if (slotted) {
          {
            clonedNode.appendChild(slotted.cloneNode(true));
          }
        }
        if (nonStencilNode) {
          clonedNode.appendChild(srcNode.childNodes[i].cloneNode(true));
        }
      }
    }
    return clonedNode;
  };
};
var bootstrapLazy = (lazyBundles, options = {}) => {
  const endBootstrap = createTime();
  const cmpTags = [];
  const exclude = options.exclude || [];
  const customElements = win.customElements;
  const head = doc.head;
  const metaCharset = head.querySelector("meta[charset]");
  const visibilityStyle = doc.createElement("style");
  const deferredConnectedCallbacks = [];
  const styles2 = doc.querySelectorAll(`[${HYDRATED_STYLE_ID}]`);
  let appLoadFallback;
  let isBootstrapping = true;
  let i = 0;
  Object.assign(plt, options);
  plt.$resourcesUrl$ = new URL(options.resourcesUrl || "./", doc.baseURI).href;
  {
    plt.$flags$ |= 2;
  }
  {
    for (; i < styles2.length; i++) {
      registerStyle(styles2[i].getAttribute(HYDRATED_STYLE_ID), convertScopedToShadow(styles2[i].innerHTML), true);
    }
  }
  lazyBundles.map((lazyBundle) => {
    lazyBundle[1].map((compactMeta) => {
      const cmpMeta = {
        $flags$: compactMeta[0],
        $tagName$: compactMeta[1],
        $members$: compactMeta[2],
        $listeners$: compactMeta[3]
      };
      {
        cmpMeta.$members$ = compactMeta[2];
      }
      {
        cmpMeta.$listeners$ = compactMeta[3];
      }
      {
        cmpMeta.$attrsToReflect$ = [];
      }
      {
        cmpMeta.$watchers$ = {};
      }
      const tagName = cmpMeta.$tagName$;
      const HostElement = class extends HTMLElement {
        // StencilLazyHost
        constructor(self) {
          super(self);
          self = this;
          registerHost(self, cmpMeta);
          if (cmpMeta.$flags$ & 1) {
            {
              {
                self.attachShadow({ mode: "open" });
              }
            }
          }
        }
        connectedCallback() {
          if (appLoadFallback) {
            clearTimeout(appLoadFallback);
            appLoadFallback = null;
          }
          if (isBootstrapping) {
            deferredConnectedCallbacks.push(this);
          } else {
            plt.jmp(() => connectedCallback(this));
          }
        }
        disconnectedCallback() {
          plt.jmp(() => disconnectedCallback(this));
        }
        componentOnReady() {
          return getHostRef(this).$onReadyPromise$;
        }
      };
      {
        patchCloneNode(HostElement.prototype);
      }
      cmpMeta.$lazyBundleId$ = lazyBundle[0];
      if (!exclude.includes(tagName) && !customElements.get(tagName)) {
        cmpTags.push(tagName);
        customElements.define(tagName, proxyComponent(
          HostElement,
          cmpMeta,
          1
          /* isElementConstructor */
        ));
      }
    });
  });
  {
    visibilityStyle.innerHTML = cmpTags + HYDRATED_CSS;
    visibilityStyle.setAttribute("data-styles", "");
    head.insertBefore(visibilityStyle, metaCharset ? metaCharset.nextSibling : head.firstChild);
  }
  isBootstrapping = false;
  if (deferredConnectedCallbacks.length) {
    deferredConnectedCallbacks.map((host) => host.connectedCallback());
  } else {
    {
      plt.jmp(() => appLoadFallback = setTimeout(appDidLoad, 30));
    }
  }
  endBootstrap();
};
var Fragment = (_, children) => children;
var hostRefs = /* @__PURE__ */ new WeakMap();
var getHostRef = (ref) => hostRefs.get(ref);
var registerInstance = (lazyInstance, hostRef) => hostRefs.set(hostRef.$lazyInstance$ = lazyInstance, hostRef);
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
  if (!hmrVersionId || !BUILD.hotModuleReplacement) {
    const processMod = (importedModule) => {
      cmpModules.set(bundleId, importedModule);
      return importedModule[exportName];
    };
    switch (bundleId) {
      case "app-logo":
        return import(
          /* webpackMode: "lazy" */
          "./app-logo.entry-BYSN2CKP.js"
        ).then(processMod, consoleError);
      case "scale-accordion":
        return import(
          /* webpackMode: "lazy" */
          "./scale-accordion.entry-UGW4YVEO.js"
        ).then(processMod, consoleError);
      case "scale-alert":
        return import(
          /* webpackMode: "lazy" */
          "./scale-alert.entry-HWZWQKKO.js"
        ).then(processMod, consoleError);
      case "scale-app-footer":
        return import(
          /* webpackMode: "lazy" */
          "./scale-app-footer.entry-ONEREEZG.js"
        ).then(processMod, consoleError);
      case "scale-app-shell":
        return import(
          /* webpackMode: "lazy" */
          "./scale-app-shell.entry-UGNA3ZNB.js"
        ).then(processMod, consoleError);
      case "scale-breadcrumb":
        return import(
          /* webpackMode: "lazy" */
          "./scale-breadcrumb.entry-R7JVK7DW.js"
        ).then(processMod, consoleError);
      case "scale-callout":
        return import(
          /* webpackMode: "lazy" */
          "./scale-callout.entry-226LPG3V.js"
        ).then(processMod, consoleError);
      case "scale-carousel":
        return import(
          /* webpackMode: "lazy" */
          "./scale-carousel.entry-UJMZ53MG.js"
        ).then(processMod, consoleError);
      case "scale-chart-stack-card":
        return import(
          /* webpackMode: "lazy" */
          "./scale-chart-stack-card.entry-QQA7VKHN.js"
        ).then(processMod, consoleError);
      case "scale-checkbox-group":
        return import(
          /* webpackMode: "lazy" */
          "./scale-checkbox-group.entry-XS6P6PAF.js"
        ).then(processMod, consoleError);
      case "scale-chip":
        return import(
          /* webpackMode: "lazy" */
          "./scale-chip.entry-IJZWEQRI.js"
        ).then(processMod, consoleError);
      case "scale-collapsible":
        return import(
          /* webpackMode: "lazy" */
          "./scale-collapsible.entry-IRHR3SN4.js"
        ).then(processMod, consoleError);
      case "scale-data-grid":
        return import(
          /* webpackMode: "lazy" */
          "./scale-data-grid.entry-XEN7SP22.js"
        ).then(processMod, consoleError);
      case "scale-date-picker":
        return import(
          /* webpackMode: "lazy" */
          "./scale-date-picker.entry-7CTONDTF.js"
        ).then(processMod, consoleError);
      case "scale-divider":
        return import(
          /* webpackMode: "lazy" */
          "./scale-divider.entry-T3KXDNI5.js"
        ).then(processMod, consoleError);
      case "scale-dropdown":
        return import(
          /* webpackMode: "lazy" */
          "./scale-dropdown.entry-EMKYR3WX.js"
        ).then(processMod, consoleError);
      case "scale-grid":
        return import(
          /* webpackMode: "lazy" */
          "./scale-grid.entry-NQF5LWOH.js"
        ).then(processMod, consoleError);
      case "scale-grid-item":
        return import(
          /* webpackMode: "lazy" */
          "./scale-grid-item.entry-ZHZWVZIK.js"
        ).then(processMod, consoleError);
      case "scale-icon-action-add":
        return import(
          /* webpackMode: "lazy" */
          "./scale-icon-action-add.entry-LS3I23HR.js"
        ).then(processMod, consoleError);
      case "scale-icon-action-add-card":
        return import(
          /* webpackMode: "lazy" */
          "./scale-icon-action-add-card.entry-RFFUW5AW.js"
        ).then(processMod, consoleError);
      case "scale-icon-action-arrange":
        return import(
          /* webpackMode: "lazy" */
          "./scale-icon-action-arrange.entry-SJJYETYE.js"
        ).then(processMod, consoleError);
      case "scale-icon-action-arrow-down":
        return import(
          /* webpackMode: "lazy" */
          "./scale-icon-action-arrow-down.entry-TIRTKYQ6.js"
        ).then(processMod, consoleError);
      case "scale-icon-action-arrow-left":
        return import(
          /* webpackMode: "lazy" */
          "./scale-icon-action-arrow-left.entry-CRFTG53M.js"
        ).then(processMod, consoleError);
      case "scale-icon-action-arrow-right":
        return import(
          /* webpackMode: "lazy" */
          "./scale-icon-action-arrow-right.entry-HGLJAW2S.js"
        ).then(processMod, consoleError);
      case "scale-icon-action-arrow-up":
        return import(
          /* webpackMode: "lazy" */
          "./scale-icon-action-arrow-up.entry-BNUTVAV7.js"
        ).then(processMod, consoleError);
      case "scale-icon-action-auto-login":
        return import(
          /* webpackMode: "lazy" */
          "./scale-icon-action-auto-login.entry-PKXHPNUP.js"
        ).then(processMod, consoleError);
      case "scale-icon-action-backspace":
        return import(
          /* webpackMode: "lazy" */
          "./scale-icon-action-backspace.entry-RVNUZT4F.js"
        ).then(processMod, consoleError);
      case "scale-icon-action-backward":
        return import(
          /* webpackMode: "lazy" */
          "./scale-icon-action-backward.entry-AIE77VZY.js"
        ).then(processMod, consoleError);
      case "scale-icon-action-changelog":
        return import(
          /* webpackMode: "lazy" */
          "./scale-icon-action-changelog.entry-55TJYGTV.js"
        ).then(processMod, consoleError);
      case "scale-icon-action-circle-add":
        return import(
          /* webpackMode: "lazy" */
          "./scale-icon-action-circle-add.entry-DIZWVNE6.js"
        ).then(processMod, consoleError);
      case "scale-icon-action-compare":
        return import(
          /* webpackMode: "lazy" */
          "./scale-icon-action-compare.entry-JOLVLY6D.js"
        ).then(processMod, consoleError);
      case "scale-icon-action-copy-paste":
        return import(
          /* webpackMode: "lazy" */
          "./scale-icon-action-copy-paste.entry-P3FLAMIX.js"
        ).then(processMod, consoleError);
      case "scale-icon-action-cut-paste":
        return import(
          /* webpackMode: "lazy" */
          "./scale-icon-action-cut-paste.entry-DDHFOGR5.js"
        ).then(processMod, consoleError);
      case "scale-icon-action-disabled-microphone":
        return import(
          /* webpackMode: "lazy" */
          "./scale-icon-action-disabled-microphone.entry-6BENIVZJ.js"
        ).then(processMod, consoleError);
      case "scale-icon-action-download":
        return import(
          /* webpackMode: "lazy" */
          "./scale-icon-action-download.entry-N43KX6IM.js"
        ).then(processMod, consoleError);
      case "scale-icon-action-download-from-cloud":
        return import(
          /* webpackMode: "lazy" */
          "./scale-icon-action-download-from-cloud.entry-TPVBSIGK.js"
        ).then(processMod, consoleError);
      case "scale-icon-action-drag-and-drop":
        return import(
          /* webpackMode: "lazy" */
          "./scale-icon-action-drag-and-drop.entry-SVI4FBNO.js"
        ).then(processMod, consoleError);
      case "scale-icon-action-edit":
        return import(
          /* webpackMode: "lazy" */
          "./scale-icon-action-edit.entry-SYE6SSLY.js"
        ).then(processMod, consoleError);
      case "scale-icon-action-export":
        return import(
          /* webpackMode: "lazy" */
          "./scale-icon-action-export.entry-4VUSWVP6.js"
        ).then(processMod, consoleError);
      case "scale-icon-action-fast-forward":
        return import(
          /* webpackMode: "lazy" */
          "./scale-icon-action-fast-forward.entry-AGV6O2BL.js"
        ).then(processMod, consoleError);
      case "scale-icon-action-fast-forward-nb":
        return import(
          /* webpackMode: "lazy" */
          "./scale-icon-action-fast-forward-nb.entry-OQKN54QE.js"
        ).then(processMod, consoleError);
      case "scale-icon-action-filter":
        return import(
          /* webpackMode: "lazy" */
          "./scale-icon-action-filter.entry-J4E3MOUP.js"
        ).then(processMod, consoleError);
      case "scale-icon-action-filter-2":
        return import(
          /* webpackMode: "lazy" */
          "./scale-icon-action-filter-2.entry-6UPPPI77.js"
        ).then(processMod, consoleError);
      case "scale-icon-action-forward":
        return import(
          /* webpackMode: "lazy" */
          "./scale-icon-action-forward.entry-XKZ22MSL.js"
        ).then(processMod, consoleError);
      case "scale-icon-action-full-screen":
        return import(
          /* webpackMode: "lazy" */
          "./scale-icon-action-full-screen.entry-CDHKO4XQ.js"
        ).then(processMod, consoleError);
      case "scale-icon-action-import":
        return import(
          /* webpackMode: "lazy" */
          "./scale-icon-action-import.entry-GMVDZ7V2.js"
        ).then(processMod, consoleError);
      case "scale-icon-action-install":
        return import(
          /* webpackMode: "lazy" */
          "./scale-icon-action-install.entry-CMKZZS7W.js"
        ).then(processMod, consoleError);
      case "scale-icon-action-launch":
        return import(
          /* webpackMode: "lazy" */
          "./scale-icon-action-launch.entry-3PJK63JJ.js"
        ).then(processMod, consoleError);
      case "scale-icon-action-light-dark-mode":
        return import(
          /* webpackMode: "lazy" */
          "./scale-icon-action-light-dark-mode.entry-5J4D6SRY.js"
        ).then(processMod, consoleError);
      case "scale-icon-action-link":
        return import(
          /* webpackMode: "lazy" */
          "./scale-icon-action-link.entry-OUFVTPYQ.js"
        ).then(processMod, consoleError);
      case "scale-icon-action-logout":
        return import(
          /* webpackMode: "lazy" */
          "./scale-icon-action-logout.entry-JN2I6Y5W.js"
        ).then(processMod, consoleError);
      case "scale-icon-action-loop":
        return import(
          /* webpackMode: "lazy" */
          "./scale-icon-action-loop.entry-HS7KBHHU.js"
        ).then(processMod, consoleError);
      case "scale-icon-action-microphone":
        return import(
          /* webpackMode: "lazy" */
          "./scale-icon-action-microphone.entry-KN62X3P7.js"
        ).then(processMod, consoleError);
      case "scale-icon-action-minimize-screen":
        return import(
          /* webpackMode: "lazy" */
          "./scale-icon-action-minimize-screen.entry-UL7WLALO.js"
        ).then(processMod, consoleError);
      case "scale-icon-action-minus-circle":
        return import(
          /* webpackMode: "lazy" */
          "./scale-icon-action-minus-circle.entry-HIFMLMYV.js"
        ).then(processMod, consoleError);
      case "scale-icon-action-more":
        return import(
          /* webpackMode: "lazy" */
          "./scale-icon-action-more.entry-S6IBJMIV.js"
        ).then(processMod, consoleError);
      case "scale-icon-action-move":
        return import(
          /* webpackMode: "lazy" */
          "./scale-icon-action-move.entry-7KCSNYPL.js"
        ).then(processMod, consoleError);
      case "scale-icon-action-mute":
        return import(
          /* webpackMode: "lazy" */
          "./scale-icon-action-mute.entry-IPE6VP3N.js"
        ).then(processMod, consoleError);
      case "scale-icon-action-notification":
        return import(
          /* webpackMode: "lazy" */
          "./scale-icon-action-notification.entry-JSYZIDOQ.js"
        ).then(processMod, consoleError);
      case "scale-icon-action-pause":
        return import(
          /* webpackMode: "lazy" */
          "./scale-icon-action-pause.entry-5KGKPMKW.js"
        ).then(processMod, consoleError);
      case "scale-icon-action-pause-nb":
        return import(
          /* webpackMode: "lazy" */
          "./scale-icon-action-pause-nb.entry-YWBCMEAD.js"
        ).then(processMod, consoleError);
      case "scale-icon-action-pin":
        return import(
          /* webpackMode: "lazy" */
          "./scale-icon-action-pin.entry-2TPWXXTY.js"
        ).then(processMod, consoleError);
      case "scale-icon-action-play":
        return import(
          /* webpackMode: "lazy" */
          "./scale-icon-action-play.entry-I2YPUWKM.js"
        ).then(processMod, consoleError);
      case "scale-icon-action-play-nb":
        return import(
          /* webpackMode: "lazy" */
          "./scale-icon-action-play-nb.entry-ROEIVDUN.js"
        ).then(processMod, consoleError);
      case "scale-icon-action-pop-up-window":
        return import(
          /* webpackMode: "lazy" */
          "./scale-icon-action-pop-up-window.entry-24S2CXMO.js"
        ).then(processMod, consoleError);
      case "scale-icon-action-power":
        return import(
          /* webpackMode: "lazy" */
          "./scale-icon-action-power.entry-R7M2RMOP.js"
        ).then(processMod, consoleError);
      case "scale-icon-action-previous-nb":
        return import(
          /* webpackMode: "lazy" */
          "./scale-icon-action-previous-nb.entry-S43J6X4Y.js"
        ).then(processMod, consoleError);
      case "scale-icon-action-print":
        return import(
          /* webpackMode: "lazy" */
          "./scale-icon-action-print.entry-ENS62I47.js"
        ).then(processMod, consoleError);
      case "scale-icon-action-publish":
        return import(
          /* webpackMode: "lazy" */
          "./scale-icon-action-publish.entry-7UDQKYP6.js"
        ).then(processMod, consoleError);
      case "scale-icon-action-random":
        return import(
          /* webpackMode: "lazy" */
          "./scale-icon-action-random.entry-FSCN3CMO.js"
        ).then(processMod, consoleError);
      case "scale-icon-action-record-nb":
        return import(
          /* webpackMode: "lazy" */
          "./scale-icon-action-record-nb.entry-OF22PPYB.js"
        ).then(processMod, consoleError);
      case "scale-icon-action-refresh":
        return import(
          /* webpackMode: "lazy" */
          "./scale-icon-action-refresh.entry-MUZ5H62A.js"
        ).then(processMod, consoleError);
      case "scale-icon-action-remove":
        return import(
          /* webpackMode: "lazy" */
          "./scale-icon-action-remove.entry-MIUCAFFT.js"
        ).then(processMod, consoleError);
      case "scale-icon-action-reply":
        return import(
          /* webpackMode: "lazy" */
          "./scale-icon-action-reply.entry-FTL6CAPH.js"
        ).then(processMod, consoleError);
      case "scale-icon-action-reply-all":
        return import(
          /* webpackMode: "lazy" */
          "./scale-icon-action-reply-all.entry-NZ3XLUDG.js"
        ).then(processMod, consoleError);
      case "scale-icon-action-reply-forward":
        return import(
          /* webpackMode: "lazy" */
          "./scale-icon-action-reply-forward.entry-KSF6QWY2.js"
        ).then(processMod, consoleError);
      case "scale-icon-action-restart":
        return import(
          /* webpackMode: "lazy" */
          "./scale-icon-action-restart.entry-2RBIXSRI.js"
        ).then(processMod, consoleError);
      case "scale-icon-action-search":
        return import(
          /* webpackMode: "lazy" */
          "./scale-icon-action-search.entry-ALEAXRKZ.js"
        ).then(processMod, consoleError);
      case "scale-icon-action-send":
        return import(
          /* webpackMode: "lazy" */
          "./scale-icon-action-send.entry-VTL4CSPR.js"
        ).then(processMod, consoleError);
      case "scale-icon-action-share":
        return import(
          /* webpackMode: "lazy" */
          "./scale-icon-action-share.entry-ONMA2FXE.js"
        ).then(processMod, consoleError);
      case "scale-icon-action-shopping-cart":
        return import(
          /* webpackMode: "lazy" */
          "./scale-icon-action-shopping-cart.entry-HICZGB34.js"
        ).then(processMod, consoleError);
      case "scale-icon-action-show-password":
        return import(
          /* webpackMode: "lazy" */
          "./scale-icon-action-show-password.entry-2NNM3626.js"
        ).then(processMod, consoleError);
      case "scale-icon-action-sound-on":
        return import(
          /* webpackMode: "lazy" */
          "./scale-icon-action-sound-on.entry-WTCJOWKQ.js"
        ).then(processMod, consoleError);
      case "scale-icon-action-star":
        return import(
          /* webpackMode: "lazy" */
          "./scale-icon-action-star.entry-CPO7KSQZ.js"
        ).then(processMod, consoleError);
      case "scale-icon-action-stream-on":
        return import(
          /* webpackMode: "lazy" */
          "./scale-icon-action-stream-on.entry-ZGEJU3B4.js"
        ).then(processMod, consoleError);
      case "scale-icon-action-thumbs-down":
        return import(
          /* webpackMode: "lazy" */
          "./scale-icon-action-thumbs-down.entry-KMQGPKLE.js"
        ).then(processMod, consoleError);
      case "scale-icon-action-thumbs-up":
        return import(
          /* webpackMode: "lazy" */
          "./scale-icon-action-thumbs-up.entry-LQDIIP2G.js"
        ).then(processMod, consoleError);
      case "scale-icon-action-tiles-add":
        return import(
          /* webpackMode: "lazy" */
          "./scale-icon-action-tiles-add.entry-J36IJSC3.js"
        ).then(processMod, consoleError);
      case "scale-icon-action-upload":
        return import(
          /* webpackMode: "lazy" */
          "./scale-icon-action-upload.entry-3WPZF3O5.js"
        ).then(processMod, consoleError);
      case "scale-icon-action-upload-to-cloud":
        return import(
          /* webpackMode: "lazy" */
          "./scale-icon-action-upload-to-cloud.entry-CHH4NKQX.js"
        ).then(processMod, consoleError);
      case "scale-icon-action-volume-down":
        return import(
          /* webpackMode: "lazy" */
          "./scale-icon-action-volume-down.entry-XSKALILY.js"
        ).then(processMod, consoleError);
      case "scale-icon-action-volume-up":
        return import(
          /* webpackMode: "lazy" */
          "./scale-icon-action-volume-up.entry-Y3CSJ3TN.js"
        ).then(processMod, consoleError);
      case "scale-icon-action-zoom-in":
        return import(
          /* webpackMode: "lazy" */
          "./scale-icon-action-zoom-in.entry-SPDKJF5V.js"
        ).then(processMod, consoleError);
      case "scale-icon-action-zoom-out":
        return import(
          /* webpackMode: "lazy" */
          "./scale-icon-action-zoom-out.entry-WDQJYKX3.js"
        ).then(processMod, consoleError);
      case "scale-icon-alert-antivirus-protection":
        return import(
          /* webpackMode: "lazy" */
          "./scale-icon-alert-antivirus-protection.entry-LAX2D7Z3.js"
        ).then(processMod, consoleError);
      case "scale-icon-alert-compliance":
        return import(
          /* webpackMode: "lazy" */
          "./scale-icon-alert-compliance.entry-NNDGD4CE.js"
        ).then(processMod, consoleError);
      case "scale-icon-alert-cyber-security":
        return import(
          /* webpackMode: "lazy" */
          "./scale-icon-alert-cyber-security.entry-GAB4JT75.js"
        ).then(processMod, consoleError);
      case "scale-icon-alert-help":
        return import(
          /* webpackMode: "lazy" */
          "./scale-icon-alert-help.entry-CX6L7Q7J.js"
        ).then(processMod, consoleError);
      case "scale-icon-alert-high-priority-email":
        return import(
          /* webpackMode: "lazy" */
          "./scale-icon-alert-high-priority-email.entry-TG3I33U5.js"
        ).then(processMod, consoleError);
      case "scale-icon-alert-imprint-dataprivacy":
        return import(
          /* webpackMode: "lazy" */
          "./scale-icon-alert-imprint-dataprivacy.entry-OPI6DAVB.js"
        ).then(processMod, consoleError);
      case "scale-icon-alert-legal":
        return import(
          /* webpackMode: "lazy" */
          "./scale-icon-alert-legal.entry-SOQEV5NV.js"
        ).then(processMod, consoleError);
      case "scale-icon-alert-network-disrupted":
        return import(
          /* webpackMode: "lazy" */
          "./scale-icon-alert-network-disrupted.entry-FQKA3U7Q.js"
        ).then(processMod, consoleError);
      case "scale-icon-alert-password-breaking":
        return import(
          /* webpackMode: "lazy" */
          "./scale-icon-alert-password-breaking.entry-SAP2QRIH.js"
        ).then(processMod, consoleError);
      case "scale-icon-alert-security":
        return import(
          /* webpackMode: "lazy" */
          "./scale-icon-alert-security.entry-4FLZUGWS.js"
        ).then(processMod, consoleError);
      case "scale-icon-alert-traffic-disruption":
        return import(
          /* webpackMode: "lazy" */
          "./scale-icon-alert-traffic-disruption.entry-NWTGEH7B.js"
        ).then(processMod, consoleError);
      case "scale-icon-alert-unknown":
        return import(
          /* webpackMode: "lazy" */
          "./scale-icon-alert-unknown.entry-GXUGIYHF.js"
        ).then(processMod, consoleError);
      case "scale-icon-communication-available":
        return import(
          /* webpackMode: "lazy" */
          "./scale-icon-communication-available.entry-IPDBYFVV.js"
        ).then(processMod, consoleError);
      case "scale-icon-communication-blog":
        return import(
          /* webpackMode: "lazy" */
          "./scale-icon-communication-blog.entry-HFICVHWK.js"
        ).then(processMod, consoleError);
      case "scale-icon-communication-call-incoming":
        return import(
          /* webpackMode: "lazy" */
          "./scale-icon-communication-call-incoming.entry-T3522TE7.js"
        ).then(processMod, consoleError);
      case "scale-icon-communication-call-outgoing":
        return import(
          /* webpackMode: "lazy" */
          "./scale-icon-communication-call-outgoing.entry-M2FZVT57.js"
        ).then(processMod, consoleError);
      case "scale-icon-communication-chat":
        return import(
          /* webpackMode: "lazy" */
          "./scale-icon-communication-chat.entry-I7UZ4QKQ.js"
        ).then(processMod, consoleError);
      case "scale-icon-communication-chat-badge":
        return import(
          /* webpackMode: "lazy" */
          "./scale-icon-communication-chat-badge.entry-HNUTM7FA.js"
        ).then(processMod, consoleError);
      case "scale-icon-communication-email":
        return import(
          /* webpackMode: "lazy" */
          "./scale-icon-communication-email.entry-GOQUMKPB.js"
        ).then(processMod, consoleError);
      case "scale-icon-communication-end-call":
        return import(
          /* webpackMode: "lazy" */
          "./scale-icon-communication-end-call.entry-ALXWZRPZ.js"
        ).then(processMod, consoleError);
      case "scale-icon-communication-feedback":
        return import(
          /* webpackMode: "lazy" */
          "./scale-icon-communication-feedback.entry-7JTFQC5K.js"
        ).then(processMod, consoleError);
      case "scale-icon-communication-flight-mode":
        return import(
          /* webpackMode: "lazy" */
          "./scale-icon-communication-flight-mode.entry-4XY33IMP.js"
        ).then(processMod, consoleError);
      case "scale-icon-communication-happy-person":
        return import(
          /* webpackMode: "lazy" */
          "./scale-icon-communication-happy-person.entry-BXAG6FMR.js"
        ).then(processMod, consoleError);
      case "scale-icon-communication-inbox":
        return import(
          /* webpackMode: "lazy" */
          "./scale-icon-communication-inbox.entry-CM3DK2BU.js"
        ).then(processMod, consoleError);
      case "scale-icon-communication-landing-mobile-contact-client":
        return import(
          /* webpackMode: "lazy" */
          "./scale-icon-communication-landing-mobile-contact-client.entry-PZI6NBYT.js"
        ).then(processMod, consoleError);
      case "scale-icon-communication-loyalty-earned":
        return import(
          /* webpackMode: "lazy" */
          "./scale-icon-communication-loyalty-earned.entry-S6VEM7EA.js"
        ).then(processMod, consoleError);
      case "scale-icon-communication-loyalty-lost":
        return import(
          /* webpackMode: "lazy" */
          "./scale-icon-communication-loyalty-lost.entry-LJEICB3L.js"
        ).then(processMod, consoleError);
      case "scale-icon-communication-mail-opened":
        return import(
          /* webpackMode: "lazy" */
          "./scale-icon-communication-mail-opened.entry-WAHNDQ5N.js"
        ).then(processMod, consoleError);
      case "scale-icon-communication-message":
        return import(
          /* webpackMode: "lazy" */
          "./scale-icon-communication-message.entry-XKG2WPEH.js"
        ).then(processMod, consoleError);
      case "scale-icon-communication-message-incoming":
        return import(
          /* webpackMode: "lazy" */
          "./scale-icon-communication-message-incoming.entry-NDKIOW3Y.js"
        ).then(processMod, consoleError);
      case "scale-icon-communication-message-outgoing":
        return import(
          /* webpackMode: "lazy" */
          "./scale-icon-communication-message-outgoing.entry-YCPFHMQD.js"
        ).then(processMod, consoleError);
      case "scale-icon-communication-mms-incoming":
        return import(
          /* webpackMode: "lazy" */
          "./scale-icon-communication-mms-incoming.entry-BVR5EQGV.js"
        ).then(processMod, consoleError);
      case "scale-icon-communication-mms-outgoing":
        return import(
          /* webpackMode: "lazy" */
          "./scale-icon-communication-mms-outgoing.entry-C7ZO5GPK.js"
        ).then(processMod, consoleError);
      case "scale-icon-communication-mobile-phone-number":
        return import(
          /* webpackMode: "lazy" */
          "./scale-icon-communication-mobile-phone-number.entry-YWZJD4NB.js"
        ).then(processMod, consoleError);
      case "scale-icon-communication-network-signal":
        return import(
          /* webpackMode: "lazy" */
          "./scale-icon-communication-network-signal.entry-DG5GVI7S.js"
        ).then(processMod, consoleError);
      case "scale-icon-communication-new-email":
        return import(
          /* webpackMode: "lazy" */
          "./scale-icon-communication-new-email.entry-LUKMAJFH.js"
        ).then(processMod, consoleError);
      case "scale-icon-communication-outbox":
        return import(
          /* webpackMode: "lazy" */
          "./scale-icon-communication-outbox.entry-JXTGIK34.js"
        ).then(processMod, consoleError);
      case "scale-icon-communication-phone-number":
        return import(
          /* webpackMode: "lazy" */
          "./scale-icon-communication-phone-number.entry-ELPM54IK.js"
        ).then(processMod, consoleError);
      case "scale-icon-communication-recipient":
        return import(
          /* webpackMode: "lazy" */
          "./scale-icon-communication-recipient.entry-WZJGVJJH.js"
        ).then(processMod, consoleError);
      case "scale-icon-communication-save-emails-to-drafts":
        return import(
          /* webpackMode: "lazy" */
          "./scale-icon-communication-save-emails-to-drafts.entry-ULQ5DZLI.js"
        ).then(processMod, consoleError);
      case "scale-icon-communication-sms":
        return import(
          /* webpackMode: "lazy" */
          "./scale-icon-communication-sms.entry-TLPVS6QK.js"
        ).then(processMod, consoleError);
      case "scale-icon-communication-spam":
        return import(
          /* webpackMode: "lazy" */
          "./scale-icon-communication-spam.entry-Q54AODLO.js"
        ).then(processMod, consoleError);
      case "scale-icon-communication-voice-message":
        return import(
          /* webpackMode: "lazy" */
          "./scale-icon-communication-voice-message.entry-BRZKQC5W.js"
        ).then(processMod, consoleError);
      case "scale-icon-content-2fa-google-auth":
        return import(
          /* webpackMode: "lazy" */
          "./scale-icon-content-2fa-google-auth.entry-G3XIQ66R.js"
        ).then(processMod, consoleError);
      case "scale-icon-content-achievement":
        return import(
          /* webpackMode: "lazy" */
          "./scale-icon-content-achievement.entry-HBNYL4SM.js"
        ).then(processMod, consoleError);
      case "scale-icon-content-android":
        return import(
          /* webpackMode: "lazy" */
          "./scale-icon-content-android.entry-KCGWYNJM.js"
        ).then(processMod, consoleError);
      case "scale-icon-content-apple":
        return import(
          /* webpackMode: "lazy" */
          "./scale-icon-content-apple.entry-UYZD6AE7.js"
        ).then(processMod, consoleError);
      case "scale-icon-content-applications":
        return import(
          /* webpackMode: "lazy" */
          "./scale-icon-content-applications.entry-YDIDJIKQ.js"
        ).then(processMod, consoleError);
      case "scale-icon-content-available-keychain":
        return import(
          /* webpackMode: "lazy" */
          "./scale-icon-content-available-keychain.entry-RRRALS7O.js"
        ).then(processMod, consoleError);
      case "scale-icon-content-bank":
        return import(
          /* webpackMode: "lazy" */
          "./scale-icon-content-bank.entry-KHR3PHEB.js"
        ).then(processMod, consoleError);
      case "scale-icon-content-biometric":
        return import(
          /* webpackMode: "lazy" */
          "./scale-icon-content-biometric.entry-U6DQAHWZ.js"
        ).then(processMod, consoleError);
      case "scale-icon-content-birthday":
        return import(
          /* webpackMode: "lazy" */
          "./scale-icon-content-birthday.entry-VA3OEZVU.js"
        ).then(processMod, consoleError);
      case "scale-icon-content-bookmark":
        return import(
          /* webpackMode: "lazy" */
          "./scale-icon-content-bookmark.entry-QX3NIXR7.js"
        ).then(processMod, consoleError);
      case "scale-icon-content-clipboard":
        return import(
          /* webpackMode: "lazy" */
          "./scale-icon-content-clipboard.entry-NCNSXCTQ.js"
        ).then(processMod, consoleError);
      case "scale-icon-content-clock":
        return import(
          /* webpackMode: "lazy" */
          "./scale-icon-content-clock.entry-REAM6BJH.js"
        ).then(processMod, consoleError);
      case "scale-icon-content-cloud-security":
        return import(
          /* webpackMode: "lazy" */
          "./scale-icon-content-cloud-security.entry-D6QUPUDJ.js"
        ).then(processMod, consoleError);
      case "scale-icon-content-code-scanner":
        return import(
          /* webpackMode: "lazy" */
          "./scale-icon-content-code-scanner.entry-MVQFY7QU.js"
        ).then(processMod, consoleError);
      case "scale-icon-content-color-selection":
        return import(
          /* webpackMode: "lazy" */
          "./scale-icon-content-color-selection.entry-WDC7WWNB.js"
        ).then(processMod, consoleError);
      case "scale-icon-content-country":
        return import(
          /* webpackMode: "lazy" */
          "./scale-icon-content-country.entry-6MU4I3XF.js"
        ).then(processMod, consoleError);
      case "scale-icon-content-credit-card":
        return import(
          /* webpackMode: "lazy" */
          "./scale-icon-content-credit-card.entry-FUWYNCEG.js"
        ).then(processMod, consoleError);
      case "scale-icon-content-data-visualisation":
        return import(
          /* webpackMode: "lazy" */
          "./scale-icon-content-data-visualisation.entry-5E73HR4V.js"
        ).then(processMod, consoleError);
      case "scale-icon-content-delivery":
        return import(
          /* webpackMode: "lazy" */
          "./scale-icon-content-delivery.entry-5R324A3X.js"
        ).then(processMod, consoleError);
      case "scale-icon-content-digital-banking":
        return import(
          /* webpackMode: "lazy" */
          "./scale-icon-content-digital-banking.entry-JDXC7GNA.js"
        ).then(processMod, consoleError);
      case "scale-icon-content-digital-media":
        return import(
          /* webpackMode: "lazy" */
          "./scale-icon-content-digital-media.entry-BELF6HOX.js"
        ).then(processMod, consoleError);
      case "scale-icon-content-discount":
        return import(
          /* webpackMode: "lazy" */
          "./scale-icon-content-discount.entry-OQLY3X4J.js"
        ).then(processMod, consoleError);
      case "scale-icon-content-e-sim":
        return import(
          /* webpackMode: "lazy" */
          "./scale-icon-content-e-sim.entry-QS5KBQZ6.js"
        ).then(processMod, consoleError);
      case "scale-icon-content-eu":
        return import(
          /* webpackMode: "lazy" */
          "./scale-icon-content-eu.entry-JBXUERUQ.js"
        ).then(processMod, consoleError);
      case "scale-icon-content-face-mask":
        return import(
          /* webpackMode: "lazy" */
          "./scale-icon-content-face-mask.entry-RCR4F5XG.js"
        ).then(processMod, consoleError);
      case "scale-icon-content-features":
        return import(
          /* webpackMode: "lazy" */
          "./scale-icon-content-features.entry-RDZ6ILAY.js"
        ).then(processMod, consoleError);
      case "scale-icon-content-flexible-tariffs":
        return import(
          /* webpackMode: "lazy" */
          "./scale-icon-content-flexible-tariffs.entry-LNSUSXKH.js"
        ).then(processMod, consoleError);
      case "scale-icon-content-folder":
        return import(
          /* webpackMode: "lazy" */
          "./scale-icon-content-folder.entry-P6KAIL2W.js"
        ).then(processMod, consoleError);
      case "scale-icon-content-food":
        return import(
          /* webpackMode: "lazy" */
          "./scale-icon-content-food.entry-AGPZUCJA.js"
        ).then(processMod, consoleError);
      case "scale-icon-content-gender-diverse":
        return import(
          /* webpackMode: "lazy" */
          "./scale-icon-content-gender-diverse.entry-QMQA5IET.js"
        ).then(processMod, consoleError);
      case "scale-icon-content-gender-female":
        return import(
          /* webpackMode: "lazy" */
          "./scale-icon-content-gender-female.entry-X3AHI3KF.js"
        ).then(processMod, consoleError);
      case "scale-icon-content-gender-male":
        return import(
          /* webpackMode: "lazy" */
          "./scale-icon-content-gender-male.entry-VIJEHNKI.js"
        ).then(processMod, consoleError);
      case "scale-icon-content-half-rating":
        return import(
          /* webpackMode: "lazy" */
          "./scale-icon-content-half-rating.entry-OO2DBJZJ.js"
        ).then(processMod, consoleError);
      case "scale-icon-content-heart":
        return import(
          /* webpackMode: "lazy" */
          "./scale-icon-content-heart.entry-3HTOCBB5.js"
        ).then(processMod, consoleError);
      case "scale-icon-content-height":
        return import(
          /* webpackMode: "lazy" */
          "./scale-icon-content-height.entry-D2KKCEEY.js"
        ).then(processMod, consoleError);
      case "scale-icon-content-history":
        return import(
          /* webpackMode: "lazy" */
          "./scale-icon-content-history.entry-4ZMD5IK5.js"
        ).then(processMod, consoleError);
      case "scale-icon-content-hour-glass":
        return import(
          /* webpackMode: "lazy" */
          "./scale-icon-content-hour-glass.entry-RVGK2OCT.js"
        ).then(processMod, consoleError);
      case "scale-icon-content-iban":
        return import(
          /* webpackMode: "lazy" */
          "./scale-icon-content-iban.entry-43WOUB55.js"
        ).then(processMod, consoleError);
      case "scale-icon-content-id":
        return import(
          /* webpackMode: "lazy" */
          "./scale-icon-content-id.entry-AESPLDFC.js"
        ).then(processMod, consoleError);
      case "scale-icon-content-in-stock":
        return import(
          /* webpackMode: "lazy" */
          "./scale-icon-content-in-stock.entry-DRQIJ5TM.js"
        ).then(processMod, consoleError);
      case "scale-icon-content-international":
        return import(
          /* webpackMode: "lazy" */
          "./scale-icon-content-international.entry-5IUE6COG.js"
        ).then(processMod, consoleError);
      case "scale-icon-content-international-sms":
        return import(
          /* webpackMode: "lazy" */
          "./scale-icon-content-international-sms.entry-AZBMLIVH.js"
        ).then(processMod, consoleError);
      case "scale-icon-content-interview":
        return import(
          /* webpackMode: "lazy" */
          "./scale-icon-content-interview.entry-GAJ3OOU5.js"
        ).then(processMod, consoleError);
      case "scale-icon-content-key":
        return import(
          /* webpackMode: "lazy" */
          "./scale-icon-content-key.entry-UYHWV7HI.js"
        ).then(processMod, consoleError);
      case "scale-icon-content-language":
        return import(
          /* webpackMode: "lazy" */
          "./scale-icon-content-language.entry-FDSCE2PL.js"
        ).then(processMod, consoleError);
      case "scale-icon-content-lock":
        return import(
          /* webpackMode: "lazy" */
          "./scale-icon-content-lock.entry-YPXIWYEE.js"
        ).then(processMod, consoleError);
      case "scale-icon-content-loyalty":
        return import(
          /* webpackMode: "lazy" */
          "./scale-icon-content-loyalty.entry-27KFZ766.js"
        ).then(processMod, consoleError);
      case "scale-icon-content-media-folder":
        return import(
          /* webpackMode: "lazy" */
          "./scale-icon-content-media-folder.entry-PJ6OKG7R.js"
        ).then(processMod, consoleError);
      case "scale-icon-content-money-at":
        return import(
          /* webpackMode: "lazy" */
          "./scale-icon-content-money-at.entry-W7NVTCDD.js"
        ).then(processMod, consoleError);
      case "scale-icon-content-music":
        return import(
          /* webpackMode: "lazy" */
          "./scale-icon-content-music.entry-LLASJS2Y.js"
        ).then(processMod, consoleError);
      case "scale-icon-content-news":
        return import(
          /* webpackMode: "lazy" */
          "./scale-icon-content-news.entry-NU3SR5FK.js"
        ).then(processMod, consoleError);
      case "scale-icon-content-out-of-stock":
        return import(
          /* webpackMode: "lazy" */
          "./scale-icon-content-out-of-stock.entry-ZWJOPRSV.js"
        ).then(processMod, consoleError);
      case "scale-icon-content-person-walking":
        return import(
          /* webpackMode: "lazy" */
          "./scale-icon-content-person-walking.entry-XPPVHCKP.js"
        ).then(processMod, consoleError);
      case "scale-icon-content-prepaid-activate":
        return import(
          /* webpackMode: "lazy" */
          "./scale-icon-content-prepaid-activate.entry-LHV3XJTG.js"
        ).then(processMod, consoleError);
      case "scale-icon-content-price-tag":
        return import(
          /* webpackMode: "lazy" */
          "./scale-icon-content-price-tag.entry-AZJ7FZCV.js"
        ).then(processMod, consoleError);
      case "scale-icon-content-ratings":
        return import(
          /* webpackMode: "lazy" */
          "./scale-icon-content-ratings.entry-YCYNYQDO.js"
        ).then(processMod, consoleError);
      case "scale-icon-content-route":
        return import(
          /* webpackMode: "lazy" */
          "./scale-icon-content-route.entry-6JKMMT53.js"
        ).then(processMod, consoleError);
      case "scale-icon-content-rss":
        return import(
          /* webpackMode: "lazy" */
          "./scale-icon-content-rss.entry-6RHTUWG4.js"
        ).then(processMod, consoleError);
      case "scale-icon-content-shop":
        return import(
          /* webpackMode: "lazy" */
          "./scale-icon-content-shop.entry-P4LPJOW3.js"
        ).then(processMod, consoleError);
      case "scale-icon-content-signal":
        return import(
          /* webpackMode: "lazy" */
          "./scale-icon-content-signal.entry-FLHIJSBC.js"
        ).then(processMod, consoleError);
      case "scale-icon-content-sim-card":
        return import(
          /* webpackMode: "lazy" */
          "./scale-icon-content-sim-card.entry-2DFKM4AZ.js"
        ).then(processMod, consoleError);
      case "scale-icon-content-smile":
        return import(
          /* webpackMode: "lazy" */
          "./scale-icon-content-smile.entry-MDFMY6RQ.js"
        ).then(processMod, consoleError);
      case "scale-icon-content-sort-indicator-mini-down":
        return import(
          /* webpackMode: "lazy" */
          "./scale-icon-content-sort-indicator-mini-down.entry-YV66KOJQ.js"
        ).then(processMod, consoleError);
      case "scale-icon-content-sort-indicator-up-mini":
        return import(
          /* webpackMode: "lazy" */
          "./scale-icon-content-sort-indicator-up-mini.entry-JJDLTPP7.js"
        ).then(processMod, consoleError);
      case "scale-icon-content-status-inactive":
        return import(
          /* webpackMode: "lazy" */
          "./scale-icon-content-status-inactive.entry-D5QLMTYS.js"
        ).then(processMod, consoleError);
      case "scale-icon-content-status-recurring":
        return import(
          /* webpackMode: "lazy" */
          "./scale-icon-content-status-recurring.entry-EPPX6OYK.js"
        ).then(processMod, consoleError);
      case "scale-icon-content-stopwatch":
        return import(
          /* webpackMode: "lazy" */
          "./scale-icon-content-stopwatch.entry-CU7SHRHD.js"
        ).then(processMod, consoleError);
      case "scale-icon-content-support-chat":
        return import(
          /* webpackMode: "lazy" */
          "./scale-icon-content-support-chat.entry-KSK2GUXC.js"
        ).then(processMod, consoleError);
      case "scale-icon-content-sustainable":
        return import(
          /* webpackMode: "lazy" */
          "./scale-icon-content-sustainable.entry-6SPVVBLA.js"
        ).then(processMod, consoleError);
      case "scale-icon-content-tariffs":
        return import(
          /* webpackMode: "lazy" */
          "./scale-icon-content-tariffs.entry-46VN7MWD.js"
        ).then(processMod, consoleError);
      case "scale-icon-content-threats":
        return import(
          /* webpackMode: "lazy" */
          "./scale-icon-content-threats.entry-BBMFCISK.js"
        ).then(processMod, consoleError);
      case "scale-icon-content-todo-list":
        return import(
          /* webpackMode: "lazy" */
          "./scale-icon-content-todo-list.entry-HM7UOPG6.js"
        ).then(processMod, consoleError);
      case "scale-icon-content-transport":
        return import(
          /* webpackMode: "lazy" */
          "./scale-icon-content-transport.entry-QUVIONIL.js"
        ).then(processMod, consoleError);
      case "scale-icon-content-unlock":
        return import(
          /* webpackMode: "lazy" */
          "./scale-icon-content-unlock.entry-L5KKSIIG.js"
        ).then(processMod, consoleError);
      case "scale-icon-content-voucher":
        return import(
          /* webpackMode: "lazy" */
          "./scale-icon-content-voucher.entry-QILXPIPI.js"
        ).then(processMod, consoleError);
      case "scale-icon-content-waiting":
        return import(
          /* webpackMode: "lazy" */
          "./scale-icon-content-waiting.entry-3XG4RCRI.js"
        ).then(processMod, consoleError);
      case "scale-icon-content-wallet":
        return import(
          /* webpackMode: "lazy" */
          "./scale-icon-content-wallet.entry-PQQOC72C.js"
        ).then(processMod, consoleError);
      case "scale-icon-device-add-device":
        return import(
          /* webpackMode: "lazy" */
          "./scale-icon-device-add-device.entry-X7MCXMLM.js"
        ).then(processMod, consoleError);
      case "scale-icon-device-camera":
        return import(
          /* webpackMode: "lazy" */
          "./scale-icon-device-camera.entry-PKSL5UQY.js"
        ).then(processMod, consoleError);
      case "scale-icon-device-change-camera":
        return import(
          /* webpackMode: "lazy" */
          "./scale-icon-device-change-camera.entry-FZTW76GR.js"
        ).then(processMod, consoleError);
      case "scale-icon-device-computer":
        return import(
          /* webpackMode: "lazy" */
          "./scale-icon-device-computer.entry-2JXNZKIM.js"
        ).then(processMod, consoleError);
      case "scale-icon-device-device-controller":
        return import(
          /* webpackMode: "lazy" */
          "./scale-icon-device-device-controller.entry-X5ZMJGBM.js"
        ).then(processMod, consoleError);
      case "scale-icon-device-device-ethernet":
        return import(
          /* webpackMode: "lazy" */
          "./scale-icon-device-device-ethernet.entry-N6ZU3QBJ.js"
        ).then(processMod, consoleError);
      case "scale-icon-device-device-mesh":
        return import(
          /* webpackMode: "lazy" */
          "./scale-icon-device-device-mesh.entry-2XEXT5FY.js"
        ).then(processMod, consoleError);
      case "scale-icon-device-device-phone":
        return import(
          /* webpackMode: "lazy" */
          "./scale-icon-device-device-phone.entry-NYHDMI2Z.js"
        ).then(processMod, consoleError);
      case "scale-icon-device-device-router":
        return import(
          /* webpackMode: "lazy" */
          "./scale-icon-device-device-router.entry-WNA4M5V6.js"
        ).then(processMod, consoleError);
      case "scale-icon-device-device-tv":
        return import(
          /* webpackMode: "lazy" */
          "./scale-icon-device-device-tv.entry-BUJR7RQW.js"
        ).then(processMod, consoleError);
      case "scale-icon-device-device-watch":
        return import(
          /* webpackMode: "lazy" */
          "./scale-icon-device-device-watch.entry-LCANAP3N.js"
        ).then(processMod, consoleError);
      case "scale-icon-device-dongle":
        return import(
          /* webpackMode: "lazy" */
          "./scale-icon-device-dongle.entry-TQVHJ5IJ.js"
        ).then(processMod, consoleError);
      case "scale-icon-device-fax":
        return import(
          /* webpackMode: "lazy" */
          "./scale-icon-device-fax.entry-TGEX4QK5.js"
        ).then(processMod, consoleError);
      case "scale-icon-device-fixed-line-services":
        return import(
          /* webpackMode: "lazy" */
          "./scale-icon-device-fixed-line-services.entry-MHG7SZ65.js"
        ).then(processMod, consoleError);
      case "scale-icon-device-game-controller":
        return import(
          /* webpackMode: "lazy" */
          "./scale-icon-device-game-controller.entry-U5MXITVO.js"
        ).then(processMod, consoleError);
      case "scale-icon-device-media-receiver":
        return import(
          /* webpackMode: "lazy" */
          "./scale-icon-device-media-receiver.entry-ZW3OSGKW.js"
        ).then(processMod, consoleError);
      case "scale-icon-device-mobile-data":
        return import(
          /* webpackMode: "lazy" */
          "./scale-icon-device-mobile-data.entry-XSKAA7HV.js"
        ).then(processMod, consoleError);
      case "scale-icon-device-mobile-devices-combination":
        return import(
          /* webpackMode: "lazy" */
          "./scale-icon-device-mobile-devices-combination.entry-TJGBB6XY.js"
        ).then(processMod, consoleError);
      case "scale-icon-device-mobile-equipment":
        return import(
          /* webpackMode: "lazy" */
          "./scale-icon-device-mobile-equipment.entry-CAXYCHZ7.js"
        ).then(processMod, consoleError);
      case "scale-icon-device-mobile-phone-insurance":
        return import(
          /* webpackMode: "lazy" */
          "./scale-icon-device-mobile-phone-insurance.entry-H4VGZTAM.js"
        ).then(processMod, consoleError);
      case "scale-icon-device-mobile-services":
        return import(
          /* webpackMode: "lazy" */
          "./scale-icon-device-mobile-services.entry-X326LKSF.js"
        ).then(processMod, consoleError);
      case "scale-icon-device-no-camera":
        return import(
          /* webpackMode: "lazy" */
          "./scale-icon-device-no-camera.entry-VA5WIBPW.js"
        ).then(processMod, consoleError);
      case "scale-icon-device-phone-with-mobile-plan":
        return import(
          /* webpackMode: "lazy" */
          "./scale-icon-device-phone-with-mobile-plan.entry-C3JFDRRV.js"
        ).then(processMod, consoleError);
      case "scale-icon-device-phone-without-mobile-plan":
        return import(
          /* webpackMode: "lazy" */
          "./scale-icon-device-phone-without-mobile-plan.entry-QGU3XHG4.js"
        ).then(processMod, consoleError);
      case "scale-icon-device-photo-camera":
        return import(
          /* webpackMode: "lazy" */
          "./scale-icon-device-photo-camera.entry-LUBUD3YV.js"
        ).then(processMod, consoleError);
      case "scale-icon-device-remote-controller":
        return import(
          /* webpackMode: "lazy" */
          "./scale-icon-device-remote-controller.entry-B34ZIFEK.js"
        ).then(processMod, consoleError);
      case "scale-icon-device-replacement-mobilephone":
        return import(
          /* webpackMode: "lazy" */
          "./scale-icon-device-replacement-mobilephone.entry-B7OPKOX7.js"
        ).then(processMod, consoleError);
      case "scale-icon-device-screen-rotate":
        return import(
          /* webpackMode: "lazy" */
          "./scale-icon-device-screen-rotate.entry-HECYD4SF.js"
        ).then(processMod, consoleError);
      case "scale-icon-device-server":
        return import(
          /* webpackMode: "lazy" */
          "./scale-icon-device-server.entry-RE3SNDYT.js"
        ).then(processMod, consoleError);
      case "scale-icon-device-smart-speaker":
        return import(
          /* webpackMode: "lazy" */
          "./scale-icon-device-smart-speaker.entry-TJCE5ZAL.js"
        ).then(processMod, consoleError);
      case "scale-icon-device-tablet":
        return import(
          /* webpackMode: "lazy" */
          "./scale-icon-device-tablet.entry-SNB5VRG2.js"
        ).then(processMod, consoleError);
      case "scale-icon-device-tv-and-mobile":
        return import(
          /* webpackMode: "lazy" */
          "./scale-icon-device-tv-and-mobile.entry-2TGQ4IX4.js"
        ).then(processMod, consoleError);
      case "scale-icon-device-twitching-closed-state":
        return import(
          /* webpackMode: "lazy" */
          "./scale-icon-device-twitching-closed-state.entry-7HOGFPB6.js"
        ).then(processMod, consoleError);
      case "scale-icon-device-twitching-open-state":
        return import(
          /* webpackMode: "lazy" */
          "./scale-icon-device-twitching-open-state.entry-RP5Z2XNX.js"
        ).then(processMod, consoleError);
      case "scale-icon-home-home":
        return import(
          /* webpackMode: "lazy" */
          "./scale-icon-home-home.entry-F5PPGPMC.js"
        ).then(processMod, consoleError);
      case "scale-icon-home-internet-at-home":
        return import(
          /* webpackMode: "lazy" */
          "./scale-icon-home-internet-at-home.entry-RBTMPWQA.js"
        ).then(processMod, consoleError);
      case "scale-icon-home-iot":
        return import(
          /* webpackMode: "lazy" */
          "./scale-icon-home-iot.entry-JDT26KBS.js"
        ).then(processMod, consoleError);
      case "scale-icon-home-light-bulb":
        return import(
          /* webpackMode: "lazy" */
          "./scale-icon-home-light-bulb.entry-ZXVJFKHH.js"
        ).then(processMod, consoleError);
      case "scale-icon-home-network-secure":
        return import(
          /* webpackMode: "lazy" */
          "./scale-icon-home-network-secure.entry-2R6SYGDY.js"
        ).then(processMod, consoleError);
      case "scale-icon-home-no-wifi":
        return import(
          /* webpackMode: "lazy" */
          "./scale-icon-home-no-wifi.entry-OGJTOSY2.js"
        ).then(processMod, consoleError);
      case "scale-icon-home-power-socket":
        return import(
          /* webpackMode: "lazy" */
          "./scale-icon-home-power-socket.entry-PWHP4X63.js"
        ).then(processMod, consoleError);
      case "scale-icon-home-preferred-wifi":
        return import(
          /* webpackMode: "lazy" */
          "./scale-icon-home-preferred-wifi.entry-X255MMFQ.js"
        ).then(processMod, consoleError);
      case "scale-icon-home-reduced-wifi":
        return import(
          /* webpackMode: "lazy" */
          "./scale-icon-home-reduced-wifi.entry-7VNOASS4.js"
        ).then(processMod, consoleError);
      case "scale-icon-home-slow-wifi":
        return import(
          /* webpackMode: "lazy" */
          "./scale-icon-home-slow-wifi.entry-2KICZ5KL.js"
        ).then(processMod, consoleError);
      case "scale-icon-home-smarthome":
        return import(
          /* webpackMode: "lazy" */
          "./scale-icon-home-smarthome.entry-LOYEZVAZ.js"
        ).then(processMod, consoleError);
      case "scale-icon-home-unable-to-connect-to-router":
        return import(
          /* webpackMode: "lazy" */
          "./scale-icon-home-unable-to-connect-to-router.entry-5XNA4W3D.js"
        ).then(processMod, consoleError);
      case "scale-icon-home-wifi":
        return import(
          /* webpackMode: "lazy" */
          "./scale-icon-home-wifi.entry-FXJYITYZ.js"
        ).then(processMod, consoleError);
      case "scale-icon-home-wifi-connected":
        return import(
          /* webpackMode: "lazy" */
          "./scale-icon-home-wifi-connected.entry-XLTX2JD3.js"
        ).then(processMod, consoleError);
      case "scale-icon-home-wifi-connection-error":
        return import(
          /* webpackMode: "lazy" */
          "./scale-icon-home-wifi-connection-error.entry-H5JAWQHS.js"
        ).then(processMod, consoleError);
      case "scale-icon-home-wifi-manual-login":
        return import(
          /* webpackMode: "lazy" */
          "./scale-icon-home-wifi-manual-login.entry-7CYHMT4V.js"
        ).then(processMod, consoleError);
      case "scale-icon-home-wifi-no-wired-internet":
        return import(
          /* webpackMode: "lazy" */
          "./scale-icon-home-wifi-no-wired-internet.entry-U6GL6J5Z.js"
        ).then(processMod, consoleError);
      case "scale-icon-navigation-circle-top-up":
        return import(
          /* webpackMode: "lazy" */
          "./scale-icon-navigation-circle-top-up.entry-677BEIU2.js"
        ).then(processMod, consoleError);
      case "scale-icon-navigation-external-link":
        return import(
          /* webpackMode: "lazy" */
          "./scale-icon-navigation-external-link.entry-V33P4M2P.js"
        ).then(processMod, consoleError);
      case "scale-icon-navigation-internal-link":
        return import(
          /* webpackMode: "lazy" */
          "./scale-icon-navigation-internal-link.entry-WS7K5WYI.js"
        ).then(processMod, consoleError);
      case "scale-icon-navigation-left-condensed":
        return import(
          /* webpackMode: "lazy" */
          "./scale-icon-navigation-left-condensed.entry-UML6CKVS.js"
        ).then(processMod, consoleError);
      case "scale-icon-navigation-location":
        return import(
          /* webpackMode: "lazy" */
          "./scale-icon-navigation-location.entry-4AERAHUZ.js"
        ).then(processMod, consoleError);
      case "scale-icon-navigation-map":
        return import(
          /* webpackMode: "lazy" */
          "./scale-icon-navigation-map.entry-ZQUAT32Z.js"
        ).then(processMod, consoleError);
      case "scale-icon-navigation-my-location":
        return import(
          /* webpackMode: "lazy" */
          "./scale-icon-navigation-my-location.entry-NXD5SVT6.js"
        ).then(processMod, consoleError);
      case "scale-icon-navigation-right-condensed":
        return import(
          /* webpackMode: "lazy" */
          "./scale-icon-navigation-right-condensed.entry-GXDF37YX.js"
        ).then(processMod, consoleError);
      case "scale-icon-navigation-start":
        return import(
          /* webpackMode: "lazy" */
          "./scale-icon-navigation-start.entry-646VCOPS.js"
        ).then(processMod, consoleError);
      case "scale-icon-navigation-top-up":
        return import(
          /* webpackMode: "lazy" */
          "./scale-icon-navigation-top-up.entry-WFYQU3JN.js"
        ).then(processMod, consoleError);
      case "scale-icon-process-order-status":
        return import(
          /* webpackMode: "lazy" */
          "./scale-icon-process-order-status.entry-NEVNZHL5.js"
        ).then(processMod, consoleError);
      case "scale-icon-process-processing":
        return import(
          /* webpackMode: "lazy" */
          "./scale-icon-process-processing.entry-JIKOORGV.js"
        ).then(processMod, consoleError);
      case "scale-icon-process-sepa-transaction":
        return import(
          /* webpackMode: "lazy" */
          "./scale-icon-process-sepa-transaction.entry-FMIKE6AB.js"
        ).then(processMod, consoleError);
      case "scale-icon-service-devices-service":
        return import(
          /* webpackMode: "lazy" */
          "./scale-icon-service-devices-service.entry-TPUV7XCZ.js"
        ).then(processMod, consoleError);
      case "scale-icon-service-maintanance":
        return import(
          /* webpackMode: "lazy" */
          "./scale-icon-service-maintanance.entry-RVX2EDL3.js"
        ).then(processMod, consoleError);
      case "scale-icon-service-manual":
        return import(
          /* webpackMode: "lazy" */
          "./scale-icon-service-manual.entry-Y2Y2CHMM.js"
        ).then(processMod, consoleError);
      case "scale-icon-service-one-time-password":
        return import(
          /* webpackMode: "lazy" */
          "./scale-icon-service-one-time-password.entry-7AALUDHH.js"
        ).then(processMod, consoleError);
      case "scale-icon-service-services":
        return import(
          /* webpackMode: "lazy" */
          "./scale-icon-service-services.entry-SDOF44KF.js"
        ).then(processMod, consoleError);
      case "scale-icon-service-support":
        return import(
          /* webpackMode: "lazy" */
          "./scale-icon-service-support.entry-FBZOOJVN.js"
        ).then(processMod, consoleError);
      case "scale-icon-service-vpn":
        return import(
          /* webpackMode: "lazy" */
          "./scale-icon-service-vpn.entry-R4M72QW7.js"
        ).then(processMod, consoleError);
      case "scale-icon-t-product-2fa-telekom-app":
        return import(
          /* webpackMode: "lazy" */
          "./scale-icon-t-product-2fa-telekom-app.entry-M5KEJUFE.js"
        ).then(processMod, consoleError);
      case "scale-icon-t-product-magenta-cloud":
        return import(
          /* webpackMode: "lazy" */
          "./scale-icon-t-product-magenta-cloud.entry-ZZLLOCAV.js"
        ).then(processMod, consoleError);
      case "scale-icon-t-product-magenta-tv":
        return import(
          /* webpackMode: "lazy" */
          "./scale-icon-t-product-magenta-tv.entry-YJC36W72.js"
        ).then(processMod, consoleError);
      case "scale-icon-t-product-magentaone":
        return import(
          /* webpackMode: "lazy" */
          "./scale-icon-t-product-magentaone.entry-CZ7HL4Y2.js"
        ).then(processMod, consoleError);
      case "scale-icon-t-product-measure-internet-speed":
        return import(
          /* webpackMode: "lazy" */
          "./scale-icon-t-product-measure-internet-speed.entry-QGXO6BUB.js"
        ).then(processMod, consoleError);
      case "scale-icon-t-product-seamless-connectivity":
        return import(
          /* webpackMode: "lazy" */
          "./scale-icon-t-product-seamless-connectivity.entry-EXG3T6X5.js"
        ).then(processMod, consoleError);
      case "scale-icon-t-product-telekom-1t1":
        return import(
          /* webpackMode: "lazy" */
          "./scale-icon-t-product-telekom-1t1.entry-EHGGWW56.js"
        ).then(processMod, consoleError);
      case "scale-icon-t-product-telekom-plan":
        return import(
          /* webpackMode: "lazy" */
          "./scale-icon-t-product-telekom-plan.entry-YNE3OWEH.js"
        ).then(processMod, consoleError);
      case "scale-icon-t-product-telekom-shop-b":
        return import(
          /* webpackMode: "lazy" */
          "./scale-icon-t-product-telekom-shop-b.entry-7S557ZO7.js"
        ).then(processMod, consoleError);
      case "scale-icon-t-product-usage":
        return import(
          /* webpackMode: "lazy" */
          "./scale-icon-t-product-usage.entry-RD7UGF7V.js"
        ).then(processMod, consoleError);
      case "scale-icon-t-product-voice":
        return import(
          /* webpackMode: "lazy" */
          "./scale-icon-t-product-voice.entry-6Z7GAICG.js"
        ).then(processMod, consoleError);
      case "scale-icon-user-file-admin":
        return import(
          /* webpackMode: "lazy" */
          "./scale-icon-user-file-admin.entry-QL33WLA6.js"
        ).then(processMod, consoleError);
      case "scale-icon-user-file-analytics":
        return import(
          /* webpackMode: "lazy" */
          "./scale-icon-user-file-analytics.entry-ZQBK2WSN.js"
        ).then(processMod, consoleError);
      case "scale-icon-user-file-attachment":
        return import(
          /* webpackMode: "lazy" */
          "./scale-icon-user-file-attachment.entry-CY7C26K2.js"
        ).then(processMod, consoleError);
      case "scale-icon-user-file-audio-file":
        return import(
          /* webpackMode: "lazy" */
          "./scale-icon-user-file-audio-file.entry-QLSQGCZ2.js"
        ).then(processMod, consoleError);
      case "scale-icon-user-file-billing":
        return import(
          /* webpackMode: "lazy" */
          "./scale-icon-user-file-billing.entry-TVRCTSSG.js"
        ).then(processMod, consoleError);
      case "scale-icon-user-file-boy":
        return import(
          /* webpackMode: "lazy" */
          "./scale-icon-user-file-boy.entry-P73OTTRS.js"
        ).then(processMod, consoleError);
      case "scale-icon-user-file-bussines-users":
        return import(
          /* webpackMode: "lazy" */
          "./scale-icon-user-file-bussines-users.entry-YGSB74UW.js"
        ).then(processMod, consoleError);
      case "scale-icon-user-file-communities":
        return import(
          /* webpackMode: "lazy" */
          "./scale-icon-user-file-communities.entry-RYFARRNS.js"
        ).then(processMod, consoleError);
      case "scale-icon-user-file-contacts":
        return import(
          /* webpackMode: "lazy" */
          "./scale-icon-user-file-contacts.entry-HI76YPA7.js"
        ).then(processMod, consoleError);
      case "scale-icon-user-file-contacts-from-cloud":
        return import(
          /* webpackMode: "lazy" */
          "./scale-icon-user-file-contacts-from-cloud.entry-W7XDPCAY.js"
        ).then(processMod, consoleError);
      case "scale-icon-user-file-contracts":
        return import(
          /* webpackMode: "lazy" */
          "./scale-icon-user-file-contracts.entry-GDV3KNV2.js"
        ).then(processMod, consoleError);
      case "scale-icon-user-file-draft-file":
        return import(
          /* webpackMode: "lazy" */
          "./scale-icon-user-file-draft-file.entry-SFCQ2WWV.js"
        ).then(processMod, consoleError);
      case "scale-icon-user-file-families":
        return import(
          /* webpackMode: "lazy" */
          "./scale-icon-user-file-families.entry-DSQW6Z4U.js"
        ).then(processMod, consoleError);
      case "scale-icon-user-file-family":
        return import(
          /* webpackMode: "lazy" */
          "./scale-icon-user-file-family.entry-D534BVF2.js"
        ).then(processMod, consoleError);
      case "scale-icon-user-file-file":
        return import(
          /* webpackMode: "lazy" */
          "./scale-icon-user-file-file.entry-7XGWL75R.js"
        ).then(processMod, consoleError);
      case "scale-icon-user-file-file-collection":
        return import(
          /* webpackMode: "lazy" */
          "./scale-icon-user-file-file-collection.entry-UXKSX2CW.js"
        ).then(processMod, consoleError);
      case "scale-icon-user-file-girl":
        return import(
          /* webpackMode: "lazy" */
          "./scale-icon-user-file-girl.entry-QE66QEHR.js"
        ).then(processMod, consoleError);
      case "scale-icon-user-file-handshake":
        return import(
          /* webpackMode: "lazy" */
          "./scale-icon-user-file-handshake.entry-MNGOBTYA.js"
        ).then(processMod, consoleError);
      case "scale-icon-user-file-html-file":
        return import(
          /* webpackMode: "lazy" */
          "./scale-icon-user-file-html-file.entry-63NNAM6A.js"
        ).then(processMod, consoleError);
      case "scale-icon-user-file-id-card":
        return import(
          /* webpackMode: "lazy" */
          "./scale-icon-user-file-id-card.entry-LUUOTL46.js"
        ).then(processMod, consoleError);
      case "scale-icon-user-file-image-file":
        return import(
          /* webpackMode: "lazy" */
          "./scale-icon-user-file-image-file.entry-J26N6LWU.js"
        ).then(processMod, consoleError);
      case "scale-icon-user-file-logout":
        return import(
          /* webpackMode: "lazy" */
          "./scale-icon-user-file-logout.entry-UNCQBZOM.js"
        ).then(processMod, consoleError);
      case "scale-icon-user-file-man":
        return import(
          /* webpackMode: "lazy" */
          "./scale-icon-user-file-man.entry-CMFYW2AJ.js"
        ).then(processMod, consoleError);
      case "scale-icon-user-file-pdf-file":
        return import(
          /* webpackMode: "lazy" */
          "./scale-icon-user-file-pdf-file.entry-TRIFFTND.js"
        ).then(processMod, consoleError);
      case "scale-icon-user-file-switch-users":
        return import(
          /* webpackMode: "lazy" */
          "./scale-icon-user-file-switch-users.entry-GZTTEP6Q.js"
        ).then(processMod, consoleError);
      case "scale-icon-user-file-videos":
        return import(
          /* webpackMode: "lazy" */
          "./scale-icon-user-file-videos.entry-ROZ6SC63.js"
        ).then(processMod, consoleError);
      case "scale-icon-user-file-woman":
        return import(
          /* webpackMode: "lazy" */
          "./scale-icon-user-file-woman.entry-FESAEBPT.js"
        ).then(processMod, consoleError);
      case "scale-icon-weather-cloudy":
        return import(
          /* webpackMode: "lazy" */
          "./scale-icon-weather-cloudy.entry-WIOUW7PA.js"
        ).then(processMod, consoleError);
      case "scale-icon-weather-cloudy-rain":
        return import(
          /* webpackMode: "lazy" */
          "./scale-icon-weather-cloudy-rain.entry-5U5WAJM5.js"
        ).then(processMod, consoleError);
      case "scale-icon-weather-cloudy-sleet":
        return import(
          /* webpackMode: "lazy" */
          "./scale-icon-weather-cloudy-sleet.entry-Q4PG32MN.js"
        ).then(processMod, consoleError);
      case "scale-icon-weather-cloudy-snow":
        return import(
          /* webpackMode: "lazy" */
          "./scale-icon-weather-cloudy-snow.entry-G5XU6G3A.js"
        ).then(processMod, consoleError);
      case "scale-icon-weather-cloudy-thunder-rain":
        return import(
          /* webpackMode: "lazy" */
          "./scale-icon-weather-cloudy-thunder-rain.entry-G3KOT5HQ.js"
        ).then(processMod, consoleError);
      case "scale-icon-weather-cloudy-thunder-snow":
        return import(
          /* webpackMode: "lazy" */
          "./scale-icon-weather-cloudy-thunder-snow.entry-T7BFME26.js"
        ).then(processMod, consoleError);
      case "scale-icon-weather-heavy-sleet":
        return import(
          /* webpackMode: "lazy" */
          "./scale-icon-weather-heavy-sleet.entry-KY3LGONR.js"
        ).then(processMod, consoleError);
      case "scale-icon-weather-heavy-snow":
        return import(
          /* webpackMode: "lazy" */
          "./scale-icon-weather-heavy-snow.entry-TWOTUWXD.js"
        ).then(processMod, consoleError);
      case "scale-icon-weather-moon-clear":
        return import(
          /* webpackMode: "lazy" */
          "./scale-icon-weather-moon-clear.entry-YI7ZOKEP.js"
        ).then(processMod, consoleError);
      case "scale-icon-weather-moon-cloudy-a":
        return import(
          /* webpackMode: "lazy" */
          "./scale-icon-weather-moon-cloudy-a.entry-REKAYQS4.js"
        ).then(processMod, consoleError);
      case "scale-icon-weather-moon-cloudy-b":
        return import(
          /* webpackMode: "lazy" */
          "./scale-icon-weather-moon-cloudy-b.entry-BJD7ZN22.js"
        ).then(processMod, consoleError);
      case "scale-icon-weather-moon-rain":
        return import(
          /* webpackMode: "lazy" */
          "./scale-icon-weather-moon-rain.entry-SZAXBIRX.js"
        ).then(processMod, consoleError);
      case "scale-icon-weather-moon-sleet":
        return import(
          /* webpackMode: "lazy" */
          "./scale-icon-weather-moon-sleet.entry-M3QLPT5B.js"
        ).then(processMod, consoleError);
      case "scale-icon-weather-moon-snow":
        return import(
          /* webpackMode: "lazy" */
          "./scale-icon-weather-moon-snow.entry-IZN3W4LS.js"
        ).then(processMod, consoleError);
      case "scale-icon-weather-moon-thunder-rain":
        return import(
          /* webpackMode: "lazy" */
          "./scale-icon-weather-moon-thunder-rain.entry-4KJIHFSC.js"
        ).then(processMod, consoleError);
      case "scale-icon-weather-moon-thunder-snow":
        return import(
          /* webpackMode: "lazy" */
          "./scale-icon-weather-moon-thunder-snow.entry-YGTPFLQ5.js"
        ).then(processMod, consoleError);
      case "scale-icon-weather-overcast":
        return import(
          /* webpackMode: "lazy" */
          "./scale-icon-weather-overcast.entry-BZZOS4AQ.js"
        ).then(processMod, consoleError);
      case "scale-icon-weather-rain":
        return import(
          /* webpackMode: "lazy" */
          "./scale-icon-weather-rain.entry-TUW5DITQ.js"
        ).then(processMod, consoleError);
      case "scale-icon-weather-sunny":
        return import(
          /* webpackMode: "lazy" */
          "./scale-icon-weather-sunny.entry-LR35UIR7.js"
        ).then(processMod, consoleError);
      case "scale-icon-weather-thunder-rain":
        return import(
          /* webpackMode: "lazy" */
          "./scale-icon-weather-thunder-rain.entry-ZKTATAQS.js"
        ).then(processMod, consoleError);
      case "scale-icon-weather-thunder-snow":
        return import(
          /* webpackMode: "lazy" */
          "./scale-icon-weather-thunder-snow.entry-O5JVMCBM.js"
        ).then(processMod, consoleError);
      case "scale-input":
        return import(
          /* webpackMode: "lazy" */
          "./scale-input.entry-MV43IZGK.js"
        ).then(processMod, consoleError);
      case "scale-list":
        return import(
          /* webpackMode: "lazy" */
          "./scale-list.entry-7MWFL5ZM.js"
        ).then(processMod, consoleError);
      case "scale-list-item":
        return import(
          /* webpackMode: "lazy" */
          "./scale-list-item.entry-MULRIKGT.js"
        ).then(processMod, consoleError);
      case "scale-loading-spinner":
        return import(
          /* webpackMode: "lazy" */
          "./scale-loading-spinner.entry-TGPTZU7V.js"
        ).then(processMod, consoleError);
      case "scale-menu-flyout-divider":
        return import(
          /* webpackMode: "lazy" */
          "./scale-menu-flyout-divider.entry-V7OMS7DK.js"
        ).then(processMod, consoleError);
      case "scale-modal":
        return import(
          /* webpackMode: "lazy" */
          "./scale-modal.entry-XXFN7M6D.js"
        ).then(processMod, consoleError);
      case "scale-notification":
        return import(
          /* webpackMode: "lazy" */
          "./scale-notification.entry-CPTLUDKL.js"
        ).then(processMod, consoleError);
      case "scale-notification-banner":
        return import(
          /* webpackMode: "lazy" */
          "./scale-notification-banner.entry-OMLHYAMC.js"
        ).then(processMod, consoleError);
      case "scale-notification-message":
        return import(
          /* webpackMode: "lazy" */
          "./scale-notification-message.entry-DQL4A232.js"
        ).then(processMod, consoleError);
      case "scale-notification-toast":
        return import(
          /* webpackMode: "lazy" */
          "./scale-notification-toast.entry-NUKZDSLB.js"
        ).then(processMod, consoleError);
      case "scale-radio-button":
        return import(
          /* webpackMode: "lazy" */
          "./scale-radio-button.entry-J3N7OPZH.js"
        ).then(processMod, consoleError);
      case "scale-radio-button-group":
        return import(
          /* webpackMode: "lazy" */
          "./scale-radio-button-group.entry-3EWM4WHZ.js"
        ).then(processMod, consoleError);
      case "scale-rating-stars":
        return import(
          /* webpackMode: "lazy" */
          "./scale-rating-stars.entry-MVHQXBAT.js"
        ).then(processMod, consoleError);
      case "scale-segment":
        return import(
          /* webpackMode: "lazy" */
          "./scale-segment.entry-KHF3GCLC.js"
        ).then(processMod, consoleError);
      case "scale-segmented-button":
        return import(
          /* webpackMode: "lazy" */
          "./scale-segmented-button.entry-JWTXGSCC.js"
        ).then(processMod, consoleError);
      case "scale-sidebar-nav":
        return import(
          /* webpackMode: "lazy" */
          "./scale-sidebar-nav.entry-IC2RGVM3.js"
        ).then(processMod, consoleError);
      case "scale-sidebar-nav-collapsible":
        return import(
          /* webpackMode: "lazy" */
          "./scale-sidebar-nav-collapsible.entry-NKXREVNI.js"
        ).then(processMod, consoleError);
      case "scale-sidebar-nav-item":
        return import(
          /* webpackMode: "lazy" */
          "./scale-sidebar-nav-item.entry-OZRIGEWU.js"
        ).then(processMod, consoleError);
      case "scale-slider":
        return import(
          /* webpackMode: "lazy" */
          "./scale-slider.entry-LH4OEU6F.js"
        ).then(processMod, consoleError);
      case "scale-ssr-slot-fix":
        return import(
          /* webpackMode: "lazy" */
          "./scale-ssr-slot-fix.entry-PNPAPWIL.js"
        ).then(processMod, consoleError);
      case "scale-tab-header":
        return import(
          /* webpackMode: "lazy" */
          "./scale-tab-header.entry-NH4GNH3F.js"
        ).then(processMod, consoleError);
      case "scale-tab-nav":
        return import(
          /* webpackMode: "lazy" */
          "./scale-tab-nav.entry-PB36M5RV.js"
        ).then(processMod, consoleError);
      case "scale-tab-panel":
        return import(
          /* webpackMode: "lazy" */
          "./scale-tab-panel.entry-WEYGSB6G.js"
        ).then(processMod, consoleError);
      case "scale-table":
        return import(
          /* webpackMode: "lazy" */
          "./scale-table.entry-LTNCSR64.js"
        ).then(processMod, consoleError);
      case "scale-telekom-app-shell":
        return import(
          /* webpackMode: "lazy" */
          "./scale-telekom-app-shell.entry-LCFIHNX2.js"
        ).then(processMod, consoleError);
      case "scale-telekom-footer-data-back-compat":
        return import(
          /* webpackMode: "lazy" */
          "./scale-telekom-footer-data-back-compat.entry-5KXVMMTT.js"
        ).then(processMod, consoleError);
      case "scale-telekom-footer-extended-navigation":
        return import(
          /* webpackMode: "lazy" */
          "./scale-telekom-footer-extended-navigation.entry-HF4ONVJD.js"
        ).then(processMod, consoleError);
      case "scale-telekom-footer-extended-navigation-column":
        return import(
          /* webpackMode: "lazy" */
          "./scale-telekom-footer-extended-navigation-column.entry-BZTUGVAM.js"
        ).then(processMod, consoleError);
      case "scale-telekom-header-data-back-compat":
        return import(
          /* webpackMode: "lazy" */
          "./scale-telekom-header-data-back-compat.entry-FQ6V5MCF.js"
        ).then(processMod, consoleError);
      case "scale-textarea":
        return import(
          /* webpackMode: "lazy" */
          "./scale-textarea.entry-AIIALXOW.js"
        ).then(processMod, consoleError);
      case "scale-toast":
        return import(
          /* webpackMode: "lazy" */
          "./scale-toast.entry-AX7MZBC4.js"
        ).then(processMod, consoleError);
      case "scale-toggle-button":
        return import(
          /* webpackMode: "lazy" */
          "./scale-toggle-button.entry-2RJ7KN2E.js"
        ).then(processMod, consoleError);
      case "scale-toggle-group":
        return import(
          /* webpackMode: "lazy" */
          "./scale-toggle-group.entry-O25JJWLF.js"
        ).then(processMod, consoleError);
      case "scale-tooltip":
        return import(
          /* webpackMode: "lazy" */
          "./scale-tooltip.entry-XECZMSHH.js"
        ).then(processMod, consoleError);
      case "duet-date-picker_2":
        return import(
          /* webpackMode: "lazy" */
          "./duet-date-picker_2.entry-L7GJJAWV.js"
        ).then(processMod, consoleError);
      case "scale-app-header":
        return import(
          /* webpackMode: "lazy" */
          "./scale-app-header.entry-W4HELTRP.js"
        ).then(processMod, consoleError);
      case "scale-badge_12":
        return import(
          /* webpackMode: "lazy" */
          "./scale-badge_12.entry-DJS6UMRN.js"
        ).then(processMod, consoleError);
      case "scale-card":
        return import(
          /* webpackMode: "lazy" */
          "./scale-card.entry-CXACTOXR.js"
        ).then(processMod, consoleError);
      case "scale-dropdown-select_13":
        return import(
          /* webpackMode: "lazy" */
          "./scale-dropdown-select_13.entry-WFXDJ4H5.js"
        ).then(processMod, consoleError);
      case "scale-icon-action-favorite":
        return import(
          /* webpackMode: "lazy" */
          "./scale-icon-action-favorite.entry-677FT3PJ.js"
        ).then(processMod, consoleError);
      case "scale-telekom-footer_2":
        return import(
          /* webpackMode: "lazy" */
          "./scale-telekom-footer_2.entry-CI3D4WH7.js"
        ).then(processMod, consoleError);
      case "app-mega-menu_8":
        return import(
          /* webpackMode: "lazy" */
          "./app-mega-menu_8.entry-KOVFEKYL.js"
        ).then(processMod, consoleError);
      case "scale-checkbox_2":
        return import(
          /* webpackMode: "lazy" */
          "./scale-checkbox_2.entry-WD2VGTRH.js"
        ).then(processMod, consoleError);
      case "scale-icon-navigation-collapse-up":
        return import(
          /* webpackMode: "lazy" */
          "./scale-icon-navigation-collapse-up.entry-K47FK44X.js"
        ).then(processMod, consoleError);
      case "scale-icon-navigation-double-left_2":
        return import(
          /* webpackMode: "lazy" */
          "./scale-icon-navigation-double-left_2.entry-BYSTU7N6.js"
        ).then(processMod, consoleError);
      case "scale-icon-action-circle-close_2":
        return import(
          /* webpackMode: "lazy" */
          "./scale-icon-action-circle-close_2.entry-WWNZZCN7.js"
        ).then(processMod, consoleError);
      case "scale-link":
        return import(
          /* webpackMode: "lazy" */
          "./scale-link.entry-ZABAIAOI.js"
        ).then(processMod, consoleError);
      case "scale-button_3":
        return import(
          /* webpackMode: "lazy" */
          "./scale-button_3.entry-ZMIXRCGV.js"
        ).then(processMod, consoleError);
      case "scale-icon-action-close":
        return import(
          /* webpackMode: "lazy" */
          "./scale-icon-action-close.entry-YTWA7LPL.js"
        ).then(processMod, consoleError);
      case "scale-helper-text":
        return import(
          /* webpackMode: "lazy" */
          "./scale-helper-text.entry-DVLW7HNJ.js"
        ).then(processMod, consoleError);
      case "scale-icon-navigation-collapse-down":
        return import(
          /* webpackMode: "lazy" */
          "./scale-icon-navigation-collapse-down.entry-V7U44SZ4.js"
        ).then(processMod, consoleError);
      case "scale-logo_2":
        return import(
          /* webpackMode: "lazy" */
          "./scale-logo_2.entry-KIQDSB5E.js"
        ).then(processMod, consoleError);
      case "scale-icon":
        return import(
          /* webpackMode: "lazy" */
          "./scale-icon.entry-GIC6HW6V.js"
        ).then(processMod, consoleError);
      case "scale-icon-action-checkmark":
        return import(
          /* webpackMode: "lazy" */
          "./scale-icon-action-checkmark.entry-Q6GVDW6W.js"
        ).then(processMod, consoleError);
      case "scale-icon-navigation-left":
        return import(
          /* webpackMode: "lazy" */
          "./scale-icon-navigation-left.entry-T2MZNH6X.js"
        ).then(processMod, consoleError);
      case "scale-icon-navigation-right":
        return import(
          /* webpackMode: "lazy" */
          "./scale-icon-navigation-right.entry-74XYBL4T.js"
        ).then(processMod, consoleError);
      case "scale-icon-action-success_3":
        return import(
          /* webpackMode: "lazy" */
          "./scale-icon-action-success_3.entry-66O4QVMQ.js"
        ).then(processMod, consoleError);
    }
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

export {
  NAMESPACE,
  promiseResolve,
  h,
  Host,
  getElement,
  createEvent,
  bootstrapLazy,
  Fragment,
  registerInstance
};
//# sourceMappingURL=chunk-3SL7DDGR.js.map
