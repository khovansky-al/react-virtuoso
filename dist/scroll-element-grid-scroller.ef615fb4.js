// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"scroll-element-grid-scroller.tsx":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = App;

var React = _interopRequireWildcard(require("react"));

var _src = require("../src");

var _styled = _interopRequireDefault(require("@emotion/styled"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-wrap: wrap;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    flex: 1;\n    text-align: center;\n    font-size: 80%;\n    padding: 20px;\n    box-shadow: 0 5px 6px -6px #777;\n    background: white;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  box-sizing: border-box;\n  padding: 5px;\n  width: 25%;\n  background: #f5f5f5;\n  display: flex;\n  flex: none;\n  align-content: stretch;\n  @media (max-width: 1024px) {\n    width: 33%;\n  }\n\n  @media (max-width: 768px) {\n    width: 50%;\n  }\n\n  @media (max-width: 480px) {\n    width: 100%;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var ItemContainer = _styled.default.div(_templateObject());

var ItemWrapper = _styled.default.div(_templateObject2());

var ListContainer = _styled.default.div(_templateObject3());

function App() {
  var _React$useState = React.useState(null),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      customScrollParent = _React$useState2[0],
      setCustomScrollParent = _React$useState2[1];

  var _React$useState3 = React.useState('25vh'),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      height = _React$useState4[0],
      setHeight = _React$useState4[1];

  var toggleHeight = function toggleHeight() {
    return height === '50vh' ? setHeight('25vh') : setHeight('50vh');
  };

  return React.createElement("div", {
    style: {
      overflow: 'auto',
      background: 'lightgreen',
      height: '80vh',
      marginTop: '0vh'
    }
  }, React.createElement("button", {
    onClick: toggleHeight
  }, "Change Height"), React.createElement("div", {
    ref: setCustomScrollParent,
    style: {
      overflow: 'auto',
      marginTop: 300,
      background: 'lightgrey',
      height: height
    }
  }, React.createElement("ol", null, React.createElement("li", null, "Click the change height button in the upper left corner to toggle the height. Items should appear when the height changes."), React.createElement("li", null, "Scroll down manually, new items should appear."), React.createElement("li", null, "Scroll halfway down manually, then scroll the outer green container down, new items should appear."), React.createElement("li", null, "Scroll outer red container all the way down, then scroll items down, then scroll outer green container up and down, new items should appear.")), React.createElement("div", null, React.createElement(_src.VirtuosoGrid, {
    customScrollParent: customScrollParent,
    components: {
      Item: ItemContainer,
      List: ListContainer,
      ScrollSeekPlaceholder: function ScrollSeekPlaceholder() {
        return React.createElement(ItemContainer, null, React.createElement(ItemWrapper, null, "--"));
      }
    },
    totalCount: 1000,
    itemContent: function itemContent(index) {
      return React.createElement(ItemWrapper, null, "Item ", index);
    }
  }), React.createElement("div", null, React.createElement("p", null, "Yes there is a bottom!"), React.createElement("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris rhoncus magna nec interdum consectetur. Suspendisse consectetur quis tortor at scelerisque. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Curabitur ultrices imperdiet quam vitae gravida. Aenean aliquam porttitor arcu. Ut volutpat velit at risus ultrices vulputate. Nulla semper tortor ac purus rhoncus, ut fermentum orci feugiat. Quisque venenatis suscipit consectetur. Cras sed risus enim. Sed non ex ultricies, malesuada neque quis, volutpat massa. Sed sit amet orci non ex feugiat porttitor vel quis magna. Nullam accumsan justo nec ipsum maximus placerat. Integer et dui ut metus mattis vestibulum. Aliquam pretium mollis magna, nec rhoncus mi tristique non. Sed vitae ligula augue. Donec rutrum, mi efficitur maximus volutpat, diam neque condimentum risus, vel fringilla tortor lorem vel risus. Cras venenatis ipsum ac suscipit faucibus. Donec at arcu nec leo sagittis vulputate vitae sed massa. Nam ullamcorper hendrerit nunc eu vestibulum. Sed et feugiat sem. Sed iaculis, augue non porta cursus, tortor ante venenatis ipsum, nec sodales leo lectus et nunc. Nunc pharetra ipsum sit amet felis viverra, et egestas felis suscipit. Etiam bibendum lacinia nisi semper finibus. Aliquam feugiat ultrices est eu viverra. Quisque luctus aliquet lacus. In hac habitasse platea dictumst. Fusce volutpat tincidunt finibus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Ut ac mattis nunc. Integer lorem dui, facilisis eget lacus id, tempus euismod tortor. Duis facilisis eu quam ac bibendum. Morbi pulvinar feugiat tortor id imperdiet. Fusce nec odio ut lorem accumsan dignissim. Fusce vestibulum condimentum eros, in ornare augue sodales nec. Pellentesque ut lorem nibh. Nunc suscipit interdum purus quis mattis. Nulla mollis ac diam id sagittis. Maecenas non nibh non arcu aliquet ultrices eget et diam. Quisque interdum nulla sed arcu eleifend posuere. Donec hendrerit tincidunt placerat. Maecenas pulvinar ligula eu scelerisque maximus. Nullam a magna ex. Aliquam elementum augue id malesuada scelerisque. Curabitur quis lectus augue. Morbi id blandit nunc. Donec tellus justo, volutpat ac enim non, tincidunt porttitor dui. Nam ac sodales purus. Sed rhoncus auctor urna, non consectetur lorem condimentum sed. Suspendisse vel posuere erat. Maecenas viverra iaculis commodo. Maecenas et tellus quis sem congue consequat. Sed eget feugiat eros. Suspendisse viverra augue et risus aliquam feugiat. Quisque consectetur vel dolor quis auctor. Pellentesque commodo et nunc eu elementum. Nullam vitae vulputate augue."), React.createElement("p", {
    id: "foo"
  }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris rhoncus magna nec interdum consectetur. Suspendisse consectetur quis tortor at scelerisque. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Curabitur ultrices imperdiet quam vitae gravida. Aenean aliquam porttitor arcu. Ut volutpat velit at risus ultrices vulputate. Nulla semper tortor ac purus rhoncus, ut fermentum orci feugiat. Quisque venenatis suscipit consectetur. Cras sed risus enim. Sed non ex ultricies, malesuada neque quis, volutpat massa. Sed sit amet orci non ex feugiat porttitor vel quis magna. Nullam accumsan justo nec ipsum maximus placerat. Integer et dui ut metus mattis vestibulum. Aliquam pretium mollis magna, nec rhoncus mi tristique non. Sed vitae ligula augue. Donec rutrum, mi efficitur maximus volutpat, diam neque condimentum risus, vel fringilla tortor lorem vel risus. Cras venenatis ipsum ac suscipit faucibus. Donec at arcu nec leo sagittis vulputate vitae sed massa. Nam ullamcorper hendrerit nunc eu vestibulum. Sed et feugiat sem. Sed iaculis, augue non porta cursus, tortor ante venenatis ipsum, nec sodales leo lectus et nunc. Nunc pharetra ipsum sit amet felis viverra, et egestas felis suscipit. Etiam bibendum lacinia nisi semper finibus. Aliquam feugiat ultrices est eu viverra. Quisque luctus aliquet lacus. In hac habitasse platea dictumst. Fusce volutpat tincidunt finibus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Ut ac mattis nunc. Integer lorem dui, facilisis eget lacus id, tempus euismod tortor. Duis facilisis eu quam ac bibendum. Morbi pulvinar feugiat tortor id imperdiet. Fusce nec odio ut lorem accumsan dignissim. Fusce vestibulum condimentum eros, in ornare augue sodales nec. Pellentesque ut lorem nibh. Nunc suscipit interdum purus quis mattis. Nulla mollis ac diam id sagittis. Maecenas non nibh non arcu aliquet ultrices eget et diam. Quisque interdum nulla sed arcu eleifend posuere. Donec hendrerit tincidunt placerat. Maecenas pulvinar ligula eu scelerisque maximus. Nullam a magna ex. Aliquam elementum augue id malesuada scelerisque. Curabitur quis lectus augue. Morbi id blandit nunc. Donec tellus justo, volutpat ac enim non, tincidunt porttitor dui. Nam ac sodales purus. Sed rhoncus auctor urna, non consectetur lorem condimentum sed. Suspendisse vel posuere erat. Maecenas viverra iaculis commodo. Maecenas et tellus quis sem congue consequat. Sed eget feugiat eros. Suspendisse viverra augue et risus aliquam feugiat. Quisque consectetur vel dolor quis auctor. Pellentesque commodo et nunc eu elementum. Nullam vitae vulputate augue."), React.createElement("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris rhoncus magna nec interdum consectetur. Suspendisse consectetur quis tortor at scelerisque. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Curabitur ultrices imperdiet quam vitae gravida. Aenean aliquam porttitor arcu. Ut volutpat velit at risus ultrices vulputate. Nulla semper tortor ac purus rhoncus, ut fermentum orci feugiat. Quisque venenatis suscipit consectetur. Cras sed risus enim. Sed non ex ultricies, malesuada neque quis, volutpat massa. Sed sit amet orci non ex feugiat porttitor vel quis magna. Nullam accumsan justo nec ipsum maximus placerat. Integer et dui ut metus mattis vestibulum. Aliquam pretium mollis magna, nec rhoncus mi tristique non. Sed vitae ligula augue. Donec rutrum, mi efficitur maximus volutpat, diam neque condimentum risus, vel fringilla tortor lorem vel risus. Cras venenatis ipsum ac suscipit faucibus. Donec at arcu nec leo sagittis vulputate vitae sed massa. Nam ullamcorper hendrerit nunc eu vestibulum. Sed et feugiat sem. Sed iaculis, augue non porta cursus, tortor ante venenatis ipsum, nec sodales leo lectus et nunc. Nunc pharetra ipsum sit amet felis viverra, et egestas felis suscipit. Etiam bibendum lacinia nisi semper finibus. Aliquam feugiat ultrices est eu viverra. Quisque luctus aliquet lacus. In hac habitasse platea dictumst. Fusce volutpat tincidunt finibus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Ut ac mattis nunc. Integer lorem dui, facilisis eget lacus id, tempus euismod tortor. Duis facilisis eu quam ac bibendum. Morbi pulvinar feugiat tortor id imperdiet. Fusce nec odio ut lorem accumsan dignissim. Fusce vestibulum condimentum eros, in ornare augue sodales nec. Pellentesque ut lorem nibh. Nunc suscipit interdum purus quis mattis. Nulla mollis ac diam id sagittis. Maecenas non nibh non arcu aliquet ultrices eget et diam. Quisque interdum nulla sed arcu eleifend posuere. Donec hendrerit tincidunt placerat. Maecenas pulvinar ligula eu scelerisque maximus. Nullam a magna ex. Aliquam elementum augue id malesuada scelerisque. Curabitur quis lectus augue. Morbi id blandit nunc. Donec tellus justo, volutpat ac enim non, tincidunt porttitor dui. Nam ac sodales purus. Sed rhoncus auctor urna, non consectetur lorem condimentum sed. Suspendisse vel posuere erat. Maecenas viverra iaculis commodo. Maecenas et tellus quis sem congue consequat. Sed eget feugiat eros. Suspendisse viverra augue et risus aliquam feugiat. Quisque consectetur vel dolor quis auctor. Pellentesque commodo et nunc eu elementum. Nullam vitae vulputate augue.")))));
}
},{"react":"../node_modules/react/index.js","../src":"../src/index.tsx","@emotion/styled":"../node_modules/@emotion/styled/dist/styled.browser.esm.js"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "61052" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js"], null)
//# sourceMappingURL=/scroll-element-grid-scroller.ef615fb4.js.map