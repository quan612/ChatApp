/*! jsframe v1.5.16 Copyright (c) 2019-2020 Tom Misawa */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/JSFrame.css":
/*!***************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/JSFrame.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".jsframe-titlebar-default {\n    background: -webkit-gradient(linear, left top, left bottom, color-stop(0.0, #f5f5f5, color-stop(1.0, #f8f7f2)));\n    background: -webkit-linear-gradient(top, #f5f5f5, #f8f7f2);\n    background: -moz-linear-gradient(top, #f5f5f5, #f8f7f2);\n    background: linear-gradient(top, #f5f5f5, #f8f7f2);\n    border-top-left-radius: 6px;\n    border-top-right-radius: 6px;\n}\n\n.jsframe-titlebar-focused {\n    /* (c)2015 Johannes Jakob\n       Made with <3 in Germany */\n    background: -webkit-gradient(linear, left top, left bottom, color-stop(0.0, #ebebeb, color-stop(1.0, #d5d5d5)));\n    background: -webkit-linear-gradient(top, #ebebeb, #d5d5d5);\n    background: -moz-linear-gradient(top, #ebebeb, #d5d5d5);\n    background: linear-gradient(top, #ebebeb, #d5d5d5);\n    border-top-left-radius: 6px;\n    border-top-right-radius: 6px;\n}\n\n.jsframe-modal-window-background {\n    background: rgba(0, 0, 0, 0.6);\n    height: 100%;\n    widdth: 100%\n}", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/PresetStyleMaterial.css":
/*!***************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/PresetStyleMaterial.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".jsframe-preset-style-material-default {\n    background: black;\n    border-top-left-radius: 6px;\n    border-top-right-radius: 6px;\n}\n\n.jsframe-preset-style-material-focused {\n    background: black;\n    border-top-left-radius: 36px;\n    border-top-right-radius: 36px;\n}\n", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/PresetStylePopup.css":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/PresetStylePopup.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".jsframe-preset-style-popup-default {\n    background: white;\n    border-top-left-radius: 0px;\n    border-top-right-radius: 0px;\n}\n\n.jsframe-preset-style-popup-focused {\n    background: white;\n    border-top-left-radius: 0px;\n    border-top-right-radius: 0px;\n}\n", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/PresetStyleRedstone.css":
/*!***************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/PresetStyleRedstone.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".jsframe-preset-style-redstone-default {\n    background: white;\n    border-top-left-radius: 0px;\n    border-top-right-radius: 0px;\n}\n\n.jsframe-preset-style-redstone-focused {\n    background: white;\n    border-top-left-radius: 0px;\n    border-top-right-radius: 0px;\n}\n", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/PresetStyleYosemite.css":
/*!***************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/PresetStyleYosemite.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "/**\n * JSFrame Examples\n *\n * Copyright 2007-2017 Tom Misawa, riversun.org@gmail.com\n * Copyright 2007-2017 web2driver.com*/\n\n.jsframe-preset-style-yosemite-default {\n    background: -webkit-gradient(linear, left top, left bottom, color-stop(0.0, #f5f5f5, color-stop(1.0, #f8f7f2)));\n    background: -webkit-linear-gradient(top, #f5f5f5, #f8f7f2);\n    background: -moz-linear-gradient(top, #f5f5f5, #f8f7f2);\n    background: linear-gradient(top, #f5f5f5, #f8f7f2);\n    border-top-left-radius: 6px;\n    border-top-right-radius: 6px;\n}\n\n.jsframe-preset-style-yosemite-focused {\n    /* (c)2015 Johannes Jakob\n       Made with <3 in Germany */\n    background: -webkit-gradient(linear, left top, left bottom, color-stop(0.0, #ebebeb, color-stop(1.0, #d5d5d5)));\n    background: -webkit-linear-gradient(top, #ebebeb, #d5d5d5);\n    background: -moz-linear-gradient(top, #ebebeb, #d5d5d5);\n    background: linear-gradient(top, #ebebeb, #d5d5d5);\n    border-top-left-radius: 6px;\n    border-top-right-radius: 6px;\n}\n", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return '@media ' + item[2] + '{' + content + '}';
      } else {
        return content;
      }
    }).join('');
  }; // import a list of modules into the list


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (i = 0; i < modules.length; i++) {
      var item = modules[i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = '(' + item[2] + ') and (' + mediaQuery + ')';
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || '';
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;
  return '/*# ' + data + ' */';
}

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./src/CCommon.js":
/*!************************!*\
  !*** ./src/CCommon.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

CALIGN = {};

CALIGN.LEFT_TOP = 'LEFT_TOP';
CALIGN.HCENTER_TOP = 'CENTER_TOP';
CALIGN.RIGHT_TOP = 'RIGHT_TOP';
CALIGN.LEFT_VCENTER = 'LEFT_CENTER';
CALIGN.HCENTER_VCENTER = 'CENTER_CENTER';
CALIGN.CENTER = CALIGN.HCENTER_VCENTER;
CALIGN.RIGHT_VCENTER = 'RIGHT_CENTER';
CALIGN.LEFT_BOTTOM = 'LEFT_BOTTOM';
CALIGN.HCENTER_BOTTOM = 'CENTER_BOTTOM';
CALIGN.RIGHT_BOTTOM = 'RIGHT_BOTTOM';




module.exports = CALIGN;

/***/ }),

/***/ "./src/CSimpleLayoutAnimator.js":
/*!**************************************!*\
  !*** ./src/CSimpleLayoutAnimator.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var CTimer = __webpack_require__(/*! ./CTimer.js */ "./src/CTimer.js");

/**
 * CSimpleLayoutAnimator class
 * Class for moving animation · scaling animation of frame.
 * <p>
 * @constructor
 */
function CSimpleLayoutAnimator() {

    this.fps = 30;
    this.durationMillis = 200;
    this.targetFrame = null;

    this._crrAlpha = 1.0;
    this._toAlpha = 1.0;

    //current width/height
    this._crrWidth = 0;
    this._crrHeight = 0;
    this._toWidth = 0;
    this._toHeight = 0;

    //current position(x,y)
    //this._crrX = 0;
    //this._crrY = 0;
    this._toX = 0;
    this._toY = 0;


    this.pinnedAnimationEnabled = false;
    this._pinX = 0;
    this._pinY = 0;
    this._pinAnchor = null;

}

/**
 * Set CIFrame object to be resized
 * @param ciframe
 * @returns {*}
 */
CSimpleLayoutAnimator.prototype.set = function (ciframe) {
    var me = this;
    me.targetFrame = ciframe;


    me.fromWidth(ciframe.getWidth());
    me.fromHeight(ciframe.getHeight());

    me.toWidth(ciframe.getWidth());
    me.toHeight(ciframe.getHeight());

    var crrPos = ciframe.getPosition();

    me.fromPosition(crrPos.x, crrPos.y, crrPos.anchor);


    return me;

};

/**
 * Get CIFrame object
 * @returns {*}
 */
CSimpleLayoutAnimator.prototype.get = function () {
    var me = this;
    return me.targetFrame;
};
/**
 * Set animation duration time millis
 * @param durationMillis
 * @returns {*}
 */
CSimpleLayoutAnimator.prototype.setDuration = function (durationMillis) {
    var me = this;
    
    me.durationMillis = durationMillis;
    return me;
};

/**
 * Set expected FPS
 * @param fps
 * @returns {*}
 */
CSimpleLayoutAnimator.prototype.setFPS = function (fps) {
    var me = this;
    me.fps = fps;
    return me;
};

/**
 * Set PIN position
 * @param x
 * @param y
 * @param anchor Position where animation starts from.Expected parameters as follows.
 'LEFT_TOP':Default.Specify the position starting from the upper left.
 'CENTER_TOP'
 'RIGHT_TOP'
 'LEFT_CENTER'
 'CENTER_CENTER'
 'RIGHT_CENTER'
 'LEFT_BOTTOM'
 'CENTER_BOTTOM'
 'RIGHT_BOTTOM'
 * @returns {*}
 */
CSimpleLayoutAnimator.prototype.fromPosition = function (x, y, anchor) {
    var me = this;
    me.pinnedAnimationEnabled = true;

    me._pinX = x;
    me._pinY = y;

    me.toPosition(x, y);

    if (anchor) {
        me._pinAnchor = anchor;
    }
    return me;
};
/**
 * Set resizeFrom width
 * @param fromWidth
 * @returns {*}
 */
CSimpleLayoutAnimator.prototype.fromWidth = function (fromWidth) {
    var me = this;
    me._crrWidth = fromWidth;

    return me;
};

/**
 * Set resizeFrom height
 * @param fromHeight
 * @returns {*}
 */
CSimpleLayoutAnimator.prototype.fromHeight = function (fromHeight) {
    var me = this;
    me._crrHeight = fromHeight;

    return me;
};

/**
 * Set resizeTo width
 * @param toWidth
 * @returns {*}
 */
CSimpleLayoutAnimator.prototype.toWidth = function (toWidth) {
    var me = this;
    me._toWidth = toWidth;

    return me;
};

/**
 * Set resizeTo height
 * @param toHeight
 * @returns {*}
 */
CSimpleLayoutAnimator.prototype.toHeight = function (toHeight) {
    var me = this;
    me._toHeight = toHeight;
    return me;
};

/**
 * Set from alpha
 * @param fromAlpha
 * @returns {*}
 */
CSimpleLayoutAnimator.prototype.fromAlpha = function (fromAlpha) {
    var me = this;
    me._crrAlpha = fromAlpha;

    return me;
};

/**
 * Set to alpha
 * @param toAlpha
 * @returns {*}
 */
CSimpleLayoutAnimator.prototype.toAlpha = function (toAlpha) {
    var me = this;
    me._toAlpha = toAlpha;

    return me;
};

/**
 * Set move to position
 * @param x
 * @param y
 * @returns {*}
 */
CSimpleLayoutAnimator.prototype.toPosition = function (x, y) {
    var me = this;
    me._toX = x;
    me._toY = y;
    return me;
};

/**
 * Set move to x
 * @param x
 * @returns {*}
 */
CSimpleLayoutAnimator.prototype.toX = function (x) {
    var me = this;
    me._toX = x;
    return me;
};

/**
 * Set move to y
 * @param t
 * @returns {*}
 */
CSimpleLayoutAnimator.prototype.toY = function (t) {
    var me = this;
    me._toY = t;
    return me;
};


CSimpleLayoutAnimator.prototype.start = function (waitMillis, requestFocusEnabled) {


    var me = this;

    var fromWidth = me._crrWidth;
    var fromHeight = me._crrHeight;

    var fromX = me._pinX;
    var fromY = me._pinY;

    var fromAlpha = me._crrAlpha;


    return new Promise(function (resolve, reject) {


        var numOfSteps = parseInt(me.fps * (me.durationMillis / 1000));
        if(numOfSteps==0){numOfSteps=1;}

        var deltaWidth = (me._toWidth - fromWidth) / numOfSteps;
        var deltaHeight = (me._toHeight - fromHeight) / numOfSteps;

        var deltaX = (me._toX - fromX) / numOfSteps;
        var deltaY = (me._toY - fromY) / numOfSteps;

        var deltaAlpha = (me._toAlpha - fromAlpha) / numOfSteps;

        var unitMillis = me.durationMillis / numOfSteps;

        var idx = 0;


        function loop() {
            var timer = new CTimer();

            timer.setIntervalMillis(unitMillis);

            timer.setCallback(function (timer) {

                if (idx == numOfSteps) {

                    var _width = me._toWidth;
                    var _height = me._toHeight;

                    var _x = fromX + deltaX * idx;
                    var _y = fromY + deltaY * idx;

                    var _alpha = me._toAlpha;

                    if (me.pinnedAnimationEnabled) {
                        //me.targetFrame._setPositionInternally(me._pinX, me._pinY, me._pinAnchor, _width, _height);

                        me.targetFrame._setPositionInternally(_x, _y, me._pinAnchor, _width, _height);
                    }


                    if (me.targetFrame.htmlElement.style) {
                        me.targetFrame.htmlElement.style.opacity = _alpha;
                    }

                    //me.targetFrame.resizeDirect(_width, _height,false);
                    me.targetFrame.setSize(_width, _height, true);

                    me._crrWidth = _width;
                    me._crrHeight = _height;

                    me._pinX = _x;
                    me._pinY = _y;
                }

                if (idx == (numOfSteps + 1)) {
                    //Stop timer after last draw update.
                    timer.stopTimer();
                    resolve(me);
                    return;
                }


                var _width = fromWidth + deltaWidth * idx;
                var _height = fromHeight + deltaHeight * idx;

                var _x = fromX + deltaX * idx;
                var _y = fromY + deltaY * idx;

                var _alpha = fromAlpha + deltaAlpha * idx;

                if (me.pinnedAnimationEnabled) {
                    //me.targetFrame._setPositionInternally(me._pinX, me._pinY, me._pinAnchor, _width, _height);
                    me.targetFrame._setPositionInternally(_x, _y, me._pinAnchor, _width, _height);
                }

                if (me.targetFrame.htmlElement.style) {
                    me.targetFrame.htmlElement.style.opacity = _alpha;
                }

                //me.targetFrame.resizeDirect(_width, _height,false);
                me.targetFrame.setSize(_width, _height, true);

                if (idx == 0) {

                    //check window existence
                    var wmgr = me.targetFrame.parentCanvas;
                    var _targetFrame = wmgr.getWindow(me.targetFrame.id);
                    if (_targetFrame) {
                        me.targetFrame.show({requestFocus: requestFocusEnabled});
                    } else {
                        //the target window must be deleted.
                    }
                }

                idx++;
            });


            timer.startTimer();
        }

        if (waitMillis) {

            var waiter = new CTimer();
            waiter.setIntervalMillis(waitMillis);
            waiter.setCallback(function (_timer) {
                _timer.stopTimer();

                loop();
            });
            waiter.startTimer();
        } else {
            loop();
        }


    });

};//start

/**
 * end of CSimpleLayoutAnimator class
 */
//+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-


module.exports = CSimpleLayoutAnimator;

/***/ }),

/***/ "./src/CTimer.js":
/*!***********************!*\
  !*** ./src/CTimer.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * CTimer class<br>
 * Copyright 2007- Tom Misawa, riversun.org@gmail.com
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of
 * this software and associated documentation files (the "Software"), to deal in the
 * Software without restriction, including without limitation the rights to use,
 * copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the
 * Software, and to permit persons to whom the Software is furnished to do so,
 * subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED,
 *  INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A
 * PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
 * COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR
 * IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 *
 * How to use:
 *  var timer = new CTimer();
 *    var value = 0;
 *
 *    timer.setCallback(function (timerObj) {
 *        value++;
 *   
 *        if (value == 100) {
 *            timerObj.stopTimer();
 *        }
 *    });
 *    timer.setIntervalMillis(100);
 *    timer.startTimer();
 *
 * @author Tom Misawa (riversun.org@gmail.com)
 */

var CTimer =
    (function () {
        function CTimer() {
            var me = this;

            me._timerId = null;
            me._isRunning = false;
            me._timerInterval = 0;

            me._internalCallback = _internalCallback;
            me._timerMethod = null;


            function _internalCallback() {
                if (me._timerMethod) {
                    me._timerMethod(me);
                }
                if (me._isRunning) {
                    clearTimeout(me._timerId);
                    me._timerId = setTimeout(me._internalCallback, me._timerInterval);
                }
            }
        }

        CTimer.prototype.setCallback = function (callback_func) {
            var me = this;
            me._timerMethod = callback_func;
            return me;
        };

        CTimer.prototype.setIntervalMillis = function (interval) {
            var me = this;
            me._timerInterval = interval;
            return me;
        };

        CTimer.prototype.stopTimer = function () {
            var me = this;
            me._isRunning = false;
            return me;
        };

        CTimer.prototype.startTimer = function () {
            var me = this;
            if (me._timerInterval > 0) {
                me._timerId = setTimeout(me._internalCallback, me._timerInterval);
                me._isRunning = true;

            }
            return me;
        };


        return CTimer;
    })();
/**
 * end of CTimer class
 */
//+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-
module.exports = CTimer;

/***/ }),

/***/ "./src/JSFrame.css":
/*!*************************!*\
  !*** ./src/JSFrame.css ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!./JSFrame.css */ "./node_modules/css-loader/dist/cjs.js!./src/JSFrame.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/JSFrame.js":
/*!************************!*\
  !*** ./src/JSFrame.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return JSFrame; });
/**
 * JSFrame ver.1.3.3 - A javascript floating window library
 *
 * Copyright 2007-2019 Tom Misawa, riversun.org@gmail.com
 * Copyright 2007-2019 web2driver.com
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of
 * this software and associated documentation files (the "Software"), to deal in the
 * Software without restriction, including without limitation the rights to use,
 * copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the
 * Software, and to permit persons to whom the Software is furnished to do so,
 * subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED,
 *  INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A
 * PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
 * COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR
 * IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 *
 */



__webpack_require__(/*! ./JSFrame.css */ "./src/JSFrame.css");

var WindowEventHelper = __webpack_require__(/*! ./WindowEventHelper.js */ "./src/WindowEventHelper.js");
var CALIGN = __webpack_require__(/*! ./CCommon.js */ "./src/CCommon.js");

var CSimpleLayoutAnimator = __webpack_require__(/*! ./CSimpleLayoutAnimator.js */ "./src/CSimpleLayoutAnimator.js");

//If you don't want to bundle preset styles in JsFrame.js ,comment out below.
// var presetStyleToast = require('./PresetStyleToast.js');
// var presetStyleMaterial = require('./PresetStyleMaterial.js');

var presetStyles = {
  yosemite: __webpack_require__(/*! ./PresetStyleYosemite.js */ "./src/PresetStyleYosemite.js"),
  redstone: __webpack_require__(/*! ./PresetStyleRedstone.js */ "./src/PresetStyleRedstone.js"),
  popup: __webpack_require__(/*! ./PresetStylePopup.js */ "./src/PresetStylePopup.js"),
  toast: __webpack_require__(/*! ./PresetStyleToast.js */ "./src/PresetStyleToast.js"),
  material: __webpack_require__(/*! ./PresetStyleMaterial.js */ "./src/PresetStyleMaterial.js")
};

var DEF = {};

/**
 * CFrameAppearance class<br>
 * Appearance Model Class for Frame
 *
 */
function CFrameAppearance() {
  var me = this;

  this.showTitleBar = true;
  this.showCloseButton = true;
  this.titleBarCaption = "";
  this.titleBarCaptionFontSize = "12px";
  this.titleBarCaptionFontWeight = "bold";
  this.titleBarHeight = "24px";

  this.useIframe = false;
  this.useFrame = true;

  this.setUseIFrame = function(value) {
    me.useIframe = value;
    me.useFrame = !value;
    return me;
  };

  /**
   * The position from the left side of the caption. If this value is null, caption will be centered.
   */
  this.titleBarCaptionLeftMargin = "5px";

  this.titleBarColorDefault = "lightgray";
  this.titleBarColorFocused = "#d3e1ee";
  this.titleBarCaptionColorDefault = "";
  this.titleBarCaptionColorFocused = "";
  this.titleBarCaptionTextShadow = "0 1px 0 rgba(255,255,255,.7)";
  this.titleBarCaptionTextAlign = "center";

  this.titleBarBorderBottomDefault = "1px solid rgba(0,0,0,0.2)";
  this.titleBarBorderBottomFocused = null;

  this.frameBorderRadius = "6px";

  this.frameBorderWidthDefault = "1px";
  this.frameBorderWidthFocused = this.frameBorderWidthDefault;

  this.frameBorderColorDefault = "rgba(1, 1, 1, 0.2)";
  this.frameBorderColorFocused = this.frameBorderColorDefault;

  this.frameBorderStyle = "solid";
  this.frameBoxShadow = "2px 3px 16px rgba(0,0,0,.6)";
  this.frameBackgroundColor = "transparent";

  this._partsBuilder = null;

  this.frameComponents = [];

  this.frameHeightAdjust = 1;

  this.getFrameInnerBorderRadius = function(ref, hasFocus) {
    if (!ref) {
      return;
    }
    if (hasFocus) {
      return (
        parseInt(ref.frameBorderRadius, 10) -
        parseInt(ref.frameBorderWidthFocused, 10) +
        "px"
      );
    }
    return (
      parseInt(ref.frameBorderRadius, 10) -
      parseInt(ref.frameBorderWidthDefault, 10) +
      "px"
    );
  };

  this.onInitialize = function() {
    //Add close button if needed
    if (me.showCloseButton) {
      var partsBuilder = me.getPartsBuilder(),
        crossMark0 = "\u274c",
        crossMark1 = "\u2716",
        crossMark2 = "\u274e";

      var btnAppearance = partsBuilder.buildTextButtonAppearance();

      btnAppearance.size = 14;
      btnAppearance.captionShiftYpx = 0;
      btnAppearance.captionFontRatio = 1.0;
      btnAppearance.borderRadius = 2;
      btnAppearance.backgroundColorPressed = "transparent";
      btnAppearance.backgroundColorDefault = "transparent";
      btnAppearance.caption = crossMark1;

      btnAppearance.captionColorDefault = "gray";
      btnAppearance.captionColorFocused = "gray";
      btnAppearance.captionColorHovered = "silver";
      btnAppearance.captionColorPressed = "black";

      btnAppearance.borderWidth = 0;
      btnAppearance.borderColorDefault = "#aaaaaa";
      btnAppearance.borderStyle = "solid";

      var closeBtnEle = partsBuilder.buildTextButton(btnAppearance);
      var eleLeft = -10;
      var eleTop = -18;
      var eleAlign = "RIGHT_TOP";

      //closeButton is a special name
      var frameComponent = me.addFrameComponent(
        "closeButton",
        closeBtnEle,
        eleLeft,
        eleTop,
        eleAlign
      );
    }
  };

  this.onTitleBarStyleInitialize = function() {};
}

CFrameAppearance.prototype.getPartsBuilder = function() {
  var me = this;
  if (me._partsBuilder === null) {
    me._partsBuilder = new CDomPartsBuilder();
  }
  return me._partsBuilder;
};
CFrameAppearance.prototype.initialize = function() {
  var me = this;
  me.onInitialize();
};

/**
 *  Add FrameComponent into frame
 *  FrameComponent is attached to Frame and it moves with Frame.
 *
 * @param id
 * @param myDomElement DOM element.
 * @param x  Relative x coodinate from the snap position specified by alignment
 * @param y  Relative y coodinate from the snap position specified by alignment
 * @param align 'LEFT_TOP' 'CENTER_TOP' 'RIGHT_TOP' 'LEFT_CENTER' 'CENTER_CENTER' 'RIGHT_CENTER' 'LEFT_BOTTOM' 'CENTER_BOTTOM' 'RIGHT_BOTTOM'
 * @returns {CFrameComponent}
 *
 */
CFrameAppearance.prototype.addFrameComponent = function(
  id,
  myDomElement,
  x,
  y,
  align,
  extra
) {
  //(id, frame, htmlElement, x, y, align)
  var frameComponent = new CFrameComponent(
    id,
    myDomElement,
    x,
    y,
    align,
    extra
  );

  if (myDomElement._onTakeFocus && myDomElement._onReleaseFocus) {
    //if this DOM element has special method for focus
    //set focus callback
    frameComponent.setFocusCallback(
      myDomElement._onTakeFocus,
      myDomElement._onReleaseFocus
    );
  }

  this.frameComponents.push(frameComponent);

  return frameComponent;
};

//+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-

/**
 *  End of CFrameAppearance class
 */

/**
 * Inheritance function
 *
 * @param subClass
 * @param baseClass
 */
function inherit(subClass, baseClass) {
  function clazz() {}

  clazz.prototype = baseClass.prototype;
  subClass.prototype = new clazz();

  subClass.prototype.constructor = subClass;
  subClass.superConstructor = baseClass;
  subClass.superClass = baseClass.prototype;
}

/**
 * End of inheritance function
 */

//+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-

/**
 * DEFINITIONS
 */
DEF.CBEAN = {};
DEF.CBEAN.HTML_ELEMENT = "span";
DEF.CBEAN.HTML_ELEMENT_ID_PREFIX = "htmlElement_";
DEF.CBEAN.TYPE_NAME = "bean";

//+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-

/**
 * CBeanFrame Class<p>
 * The smallest window. It is responsible for basic processing only.
 *
 * @param beanId id of this small window
 * @param left
 * @param top
 * @param width
 * @param height
 * @param zindex
 * @constructor
 */
function CBeanFrame(
  beanId,
  left,
  top,
  width,
  height,
  zindex,
  w_border_width,
  appearance
) {
  var me = this;

  me.movable = true;

  //fields
  me.id = beanId;
  me.property = {};

  me.extra = {};

  me.parentCanvas = null;
  me.htmlElement = null;

  me.pullUpDisabled = false;
  if (appearance) {
    me.pullUpDisabled = appearance.pullUpDisabled;
  }

  //initialize
  me.htmlElement = document.createElement(DEF.CBEAN.HTML_ELEMENT);
  me.htmlElement.id = DEF.CBEAN.HTML_ELEMENT_ID_PREFIX + beanId;
  me.htmlElement.style.position = "absolute";
  me.htmlElement.style.left = parseInt(left, 10) + "px";
  me.htmlElement.style.top = parseInt(top, 10) + "px";
  me.htmlElement.style.width = parseInt(width, 10) + "px";
  me.htmlElement.style.height = parseInt(height, 10) + "px";

  //Zindex may become 'undefined' in some cases.
  if (zindex !== null) {
    me.htmlElement.style.zIndex = zindex;
  }
  me.htmlElement.style.borderColor = "#000000";

  //If I set a larger font size, width and height of window will be affected....
  me.htmlElement.style.fontSize = "1px";

  //Refer parents to each other.(sougo-sansho)
  me.htmlElement.parent = me;

  //Note that 'mouseDown' is mapped to 'onmousedown' of htmlElement,
  //so when 'onmouseDown' fires ,the 'this' will indicate 'htmlElement'
  me.htmlElement.onmousedown = me.onmouseDown;

  //Type name of this class
  me.htmlElement.typeName = DEF.CBEAN.TYPE_NAME;

  //Special field indicating usage of this class
  me.htmlElement.usage = "nothing";

  //Whether it can move outside the frame(waku).
  me.htmlElement.isRangeLimited = false;

  //Movement magnification in the X direction
  //(If it is 0, it can not move in the X direction.)
  me.htmlElement.argX = 1;

  //Movement magnification in Y direction
  // (If it is 0, it can not move in Y direction)
  me.htmlElement.argY = 1;
  me.externalAreaClickedListener = null;
}

/**
 * Set whether the frame can be moved while dragging with the mouse
 * @param enabled
 */
CBeanFrame.prototype.setMovable = function(enabled) {
  var me = this;

  if (enabled) {
    me.htmlElement.argX = 1;
    me.htmlElement.argY = 1;
  } else {
    me.htmlElement.argX = 0;
    me.htmlElement.argY = 0;
  }

  me.movable = enabled;

  return me;
};

CBeanFrame.prototype.setParentCanvas = function(parentCanvas) {
  var me = this;
  me.parentCanvas = parentCanvas;
  me.htmlElement.parentCanvas = me.parentCanvas;
};
CBeanFrame.prototype.setOnExternalAreaClickedListener = function(listener) {
  var me = this;
  me.externalAreaClickedListener = listener;
};
CBeanFrame.prototype.onBodyClicked = function(e) {
  var me = this;
  var clickX = e.pageX;
  var clickY = e.pageY;

  var left = parseInt(me.htmlElement.style.left);
  var top = parseInt(me.htmlElement.style.top);
  var width = parseInt(me.htmlElement.style.width);
  var height = parseInt(me.htmlElement.style.height);

  if (
    left < clickX &&
    clickX < left + width &&
    top < clickY &&
    clickY < top + height
  ) {
    //- clicked internal area of this frame
  } else {
    //- clicked external area of this frame
    if (me.externalAreaClickedListener) {
      me.externalAreaClickedListener();
    }
  }
};
CBeanFrame.prototype.onmouseDown = function(e) {
  //This 'this' means a htmlElement
  var refHtmlElement = this;

  //Retrieve CBeanFrame
  var refCBeanFrame = refHtmlElement.parent;

  if (e.button == 0) {
    // for modal background window
    if (refCBeanFrame.pullUpDisabled) {
      return false;
    } else {
      refHtmlElement.parentCanvas.currentObject = refHtmlElement;
      //Bring the current bean to the top
      refHtmlElement.parentCanvas.pullUp(refCBeanFrame.id);
    }
  } else if (e.button == 2) {
    return false;
  }

  if (refHtmlElement.parentCanvas.currentObject) {
    refHtmlElement.parentCanvas.offsetX =
      e.pageX -
      parseInt(refHtmlElement.parentCanvas.currentObject.style.left, 10);
    refHtmlElement.parentCanvas.offsetY =
      e.pageY -
      parseInt(refHtmlElement.parentCanvas.currentObject.style.top, 10);
  }

  return false;
};
/**
 * End of CBeanFrame Class <p>
 */

//+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-

DEF.CANVAS = {};
DEF.CANVAS.HTML_ELEMENT = "div";
DEF.CANVAS.WIDTH_ADJUST_20180722 = 2;
DEF.CANVAS.HEIGHT_ADJUST_20180722 = 3;

/**
 * CCanvas class
 * A canvas is a place where windows are arranged, where you can drag and move freely.
 *
 * @param parentElement
 * @param canvasId
 * @param left
 * @param top
 * @param width
 * @param height
 * @constructor
 */
function CCanvas(parentElement, canvasId, left, top, width, height) {
  //Event data to be transmitted
  function EventData() {
    this.x = 0;
    this.y = 0;
    this.screenX = 0;
    this.screenY = 0;
    this.deltaX = 0;
    this.deltaY = 0;
    this.isMoved = false;
    this.targetTypeName = null;
    this.targetUsage = null;
    this.targetObject = null;
  }

  var me = this;

  me.currentObject = null;
  me.onTopObject = null;
  me.offsetX = 0;
  me.offsetY = 0;

  //Object which generated 'mouseDown' event at the very beginning(ichiban-saisho)
  me.mouseDownSource = null;

  me.id = canvasId;
  me.canvasElement = null;
  me.parentElement = parentElement;
  me.beanList = new Array();

  me.beanIdName = {}; //key:beanId value:beanName
  me.beanNameId = {}; //key:beanName value:beanId

  me.eventData = new EventData();

  me.baseZIndex = 0;
  me.setBaseZIndex = function(baseZIndex) {
    me.baseZIndex = baseZIndex;
  };
  me.getBaseZIndex = function() {
    return me.baseZIndex;
  };

  me.canvasElement = document.createElement(DEF.CANVAS.HTML_ELEMENT);

  me.canvasElement.style.zIndex = 2000;
  me.canvasElement.id = me.id;
  me.canvasElement.style.boxSizing = "border-box";
  me.canvasElement.style.position = "absolute";
  me.canvasElement.style.left = parseInt(left) + "px";
  me.canvasElement.style.top = parseInt(top) + "px";
  //Added an adjustment value.Because transparent part appears at the bottom of the screen,
  me.canvasElement.style.width =
    parseInt(width) + DEF.CANVAS.WIDTH_ADJUST_20180722 + "px";
  me.canvasElement.style.height =
    parseInt(height) + DEF.CANVAS.HEIGHT_ADJUST_20180722 + "px";
  me.canvasElement.style.backgroundColor = "transparent";
  me.canvasElement.style.borderStyle = "none";
  me.canvasElement.style.margin = "0px";
  me.canvasElement.style.borderWidth = "0px";
  me.canvasElement.style.borderColor = "transparent";

  //Add the Canvas's html element into the canvas's parent html element
  me.parentElement.appendChild(me.canvasElement);
}

CCanvas.prototype.mouseMove = function(e) {
  var me = this;

  if (me.currentObject) {
    //eventData.isMoved=true;The presence of event data means that it has moved.
    me.eventData.targetTypeName = me.currentObject.typeName;
    me.eventData.targetUsage = me.currentObject.usage;
    me.eventData.targetObject = me.currentObject;

    //Even when obj is not being dragged, mouse coordinates are used here because they are needed.
    var newObjLeftPx = e.pageX - me.offsetX;
    var newObjTopPx = e.pageY - me.offsetY;

    var absoluteMouseX = e.pageX;
    var absoluteMouseY = e.pageY;

    //Take the snapshot before updating the location.
    var oldObjLeftPx = me.currentObject.style.left;
    var oldObjTopPx = me.currentObject.style.top;

    //When the mouse cursor goes out of range,
    //the addition in the X direction and Y direction (delta X, delta Y) is set to zero.
    //this.left=Cavas's left side edge, this.top=Canvas's top side edge.
    var tmpLeft = parseInt(newObjLeftPx, 10);
    var tmpTop = parseInt(newObjTopPx, 10);

    var tmpRight = tmpLeft + parseInt(me.currentObject.style.width, 10);
    var tmpBottom = tmpTop + parseInt(me.currentObject.style.height, 10);

    var styleWidth = parseInt(me.canvasElement.style.width, 10);
    var styleHeight = parseInt(me.canvasElement.style.height, 10);

    var deltaX = 0;
    var deltaY = 0;

    if (
      me.currentObject.isRangeLimited == true &&
      (tmpLeft <= 0 ||
        tmpRight > styleWidth ||
        tmpTop <= 0 ||
        tmpBottom > styleHeight)
    ) {
      deltaX = 0;
      deltaY = 0;
    } else {
      deltaX = parseInt(newObjLeftPx, 10) - parseInt(oldObjLeftPx, 10);
      deltaY = parseInt(newObjTopPx, 10) - parseInt(oldObjTopPx, 10);
      me.currentObject.style.left =
        parseInt(me.currentObject.style.left) +
        deltaX * me.currentObject.argX +
        "px";
      me.currentObject.style.top =
        parseInt(me.currentObject.style.top) +
        deltaY * me.currentObject.argY +
        "px";
    }

    me.eventData.deltaX = deltaX;
    me.eventData.deltaY = deltaY;

    return me.eventData;
  }
  //Returns null if none of the objects are clicked and the only mouse just moves.
  return null;
};

CCanvas.prototype.mouseUp = function(e) {
  var me = this;

  me.currentObject = null;
  me.mouseDownSource = null;
};

//Bring the object in front
CCanvas.prototype.pullUp = function(targetBeanId) {
  var me = this;

  var tmpBeanArray = [];

  var beanList = me.beanList;

  for (var i in beanList) {
    tmpBeanArray.push(beanList[i]);
  }

  //Bring the target object in front and set zindex to 1.
  var targetBean = beanList[targetBeanId];

  me.pullUpSort(targetBean, tmpBeanArray, me.baseZIndex);

  //Remember the top object
  me.onTopObject = targetBean;
};

//Calculate the front / back information of the window accurately.
CCanvas.prototype.pullUpSort = function(pullupObject, objectArray, baseIndex) {
  var me = this;

  //Increase the index number of the target object
  pullupObject.htmlElement.style.zIndex = objectArray.length + baseIndex;

  //sort by index
  objectArray.sort(function(b, a) {
    return (
      -parseInt(b.htmlElement.style.zIndex, 10) +
      parseInt(a.htmlElement.style.zIndex, 10)
    );
  });

  //Redefine number of the index
  for (var i in objectArray) {
    objectArray[i].htmlElement.style.zIndex =
      objectArray.length - 1 - i + baseIndex;
  }
};

/**
 * remove the bean object
 * @param beanId
 */
CCanvas.prototype.removeBean = function(beanId) {
  var me = this;

  //Retrieve the target beanFrame
  var beanList = me.beanList;
  var targetBean = beanList[beanId];

  //Remove bean's htmlElement from canvasElement
  me.canvasElement.removeChild(targetBean.htmlElement);

  //Delete the bean object in the associative array.
  delete beanList[beanId];
};

/**
 * Add bean into this canvas
 * @param bean
 */
CCanvas.prototype.addBean = function(bean) {
  var me = this;

  var beanList = me.beanList;

  var beanIdName = me.beanIdName; //key:beanId value:beanName
  var beanNameId = me.beanNameId; //key:beanName value:beanId

  beanList[bean.id] = bean;

  if (bean.property.name) {
    beanNameId[bean.property.name] = bean.id;
    beanIdName[bean.id] = bean.property.name;
  }

  //In this usage case the 'length' property is invalid ..
  var num = 0;

  for (var j in beanList) {
    num++;
  }

  //Set zIndex so that what you add later will come up.
  bean.htmlElement.style.zIndex = num + me.baseZIndex;

  //On the bean side, specify the parent of the bean to me.
  bean.setParentCanvas(me);

  this.canvasElement.appendChild(bean.htmlElement);
};
/**
 * End of canvas class
 */

//+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-

DEF.CFRAME = {};
DEF.CFRAME.CANVAS_ELEMENT_BGCOLOR = "transparent";
DEF.CFRAME.MODAL_BACKGROUND_FRAME_ID_PREFIX =
  "window__modal_window_background_";

inherit(CFrame, CBeanFrame);

/**
 * CFrame class
 * <p>
 * This class represents a window whose size can be changed ,
 * can move freely on the screen,
 * can have a title bar,
 *
 * @param windowId
 * @param w_left
 * @param w_top
 * @param w_width
 * @param w_height
 * @param zindex
 * @param w_border_width
 * @param appearance
 * @constructor
 */
function CFrame(
  windowId,
  w_left,
  w_top,
  w_width,
  w_height,
  zindex,
  w_border_width,
  appearance
) {
  var me = this;

  //call constructor of superclass
  CFrame.superConstructor.call(
    this,
    windowId,
    w_left,
    w_top,
    w_width,
    w_height,
    zindex,
    w_border_width,
    appearance
  );

  me.anchor = CALIGN.LEFT_TOP;

  me.showTitleBar = appearance.showTitleBar;

  me.canvasNetHeight = null;
  me.canvasNetWidth = null;
  me.frameHeightAdjust = appearance.frameHeightAdjust;

  me.frameComponentMap = {};

  //initialize the field
  me.canvas = null;

  //canvas id
  me.myCanvasId = null;

  //Buttons to be placed on the screen (positioning same as the close button)
  me.floatingButton = null;

  me.titleBarClassNameDefault = "jsframe-titlebar-default"; // DEF.CFRAME.TITLE_BAR_CLASS_DEFAULT;
  me.titleBarClassNameFocused = "jsframe-titlebar-focused"; //DEF.CFRAME.TITLE_BAR_CLASS_FOCUSED;

  //height of titlebar
  me.titleBarHeight = appearance.titleBarHeight;

  me.titleBarCaption = appearance.titleBarCaption;
  me.titleBarCaptionLeftMargin = appearance.titleBarCaptionLeftMargin;
  me.titleBarCaptionFontSize = appearance.titleBarCaptionFontSize;
  me.titleBarCaptionFontWeight = appearance.titleBarCaptionFontWeight;
  me.titleBarBorderBottomDefault = appearance.titleBarBorderBottomDefault;
  me.titleBarBorderBottomFocused = appearance.titleBarBorderBottomFocused;
  me.titleBarCaptionTextShadow = appearance.titleBarCaptionTextShadow;
  me.titleBarCaptionTextAlign = appearance.titleBarCaptionTextAlign;

  //Title bar width adjustment value
  me.titleAdjustWidth = 2;

  me.windowId = windowId;

  me.exBorderWidth = 0;

  me.myCanvasId = windowId + "_canvas";

  //img element for icon placed on the left-top
  var appIcon = document.createElement("img");
  //		appIcon.src='img/ico_app_file16.gif';

  //url of icon image
  appIcon.src = "";
  appIcon.style.position = "absolute";
  appIcon.style.left = "2px";
  appIcon.style.top = "2px";
  appIcon.style.width = "16px";
  appIcon.style.height = "16px";
  appIcon.style.visibility = "hidden";

  //The title bar must be on the front of the canvas.
  me.titleBar = document.createElement("div");

  me.titleBar.className = "jsframetitlebar";

  if (me.showTitleBar) {
    me.titleBar.id = windowId + "_title";
    me.titleBar.style.position = "absolute";
    me.titleBar.style.boxSizing = "border-box";
    me.titleBar.style.top = "0px";
    me.titleBar.style.left = "0px";
    me.titleBar.style.width =
      w_width - me.titleAdjustWidth + DEF.CANVAS.WIDTH_ADJUST_20180722 + "px";
    me.titleBar.style.userSelect = "none";

    if (me.titleBarHeight) {
      var titleBarAdjust = 0;

      if (me.titleBarBorderBottomDefault) {
        titleBarAdjust = 0;
      }

      me.titleBar.style.height = parseInt(me.titleBarHeight, 10) + 0 + "px";
    }

    me.titleBar.style.backgroundColor = me.titleBarColorDefault;
    me.titleBar.style.zIndex = 0;

    me.titleBar.style.color = me.titleBarCaptionColorDefault;
    me.titleBar.style.fontSize = me.titleBarCaptionFontSize;
    me.titleBar.style.fontWeight = me.titleBarCaptionFontWeight;
    me.titleBar.style.textShadow = me.titleBarCaptionTextShadow;
    me.titleBar.style.textAlign = me.titleBarCaptionTextAlign;
    // me.titleBar.style.textShadow = "0 1px 0 rgba(255,255,255,.7)";
    // me.titleBar.style.textAlign = 'center';

    me.titleBar.style.lineHeight = me.titleBar.style.height;

    me.titleBar.style.borderBottom = me.titleBarBorderBottomDefault;
    //me.titleBar.style.boxShadow = '0 1px 0 rgba(255,255,255,0.5)';

    //Set not to display overflow character string
    me.titleBar.style.overflow = "hidden";

    var titleBarText = document.createTextNode("");

    //'span' to store text
    var titleBarTextSpan = document.createElement("span");

    titleBarTextSpan.id = me.id + "_titleBarText";
    if (me.titleBarCaptionLeftMargin != null) {
      titleBarTextSpan.style.position = "absolute";
      titleBarTextSpan.style.left =
        parseInt(me.titleBarCaptionLeftMargin, 10) + "px";
    } else {
      titleBarTextSpan.style.position = "absolute";
      titleBarTextSpan.style.left = "0px";
      titleBarTextSpan.style.right = "0px";
    }
    titleBarTextSpan.style.top = "0px";
    titleBarTextSpan.appendChild(titleBarText);
    me.titleBar.appendChild(titleBarTextSpan);

    //Discontinue appicon(20061011)
    //me.titleBar.appendChild(appIcon);
  }

  me.htmlElement.appendChild(me.titleBar);

  //Set Canvas throughout the window

  //parseInt(me.titleBar.style.height);//me.titleBarHeight);
  var canvasMoreHeight = parseInt(me.titleBarHeight, 10) - titleBarAdjust;
  var canvasMoreSpacing = parseInt(me.titleAdjustWidth, 10);

  if (me.showTitleBar) {
  } else {
    canvasMoreHeight = 0;
    canvasMoreSpacing = 0;
    titleBarAdjust = 0;
  }

  me.canvasNetWidth = w_width - canvasMoreSpacing;
  me.canvasNetHeight =
    w_height -
    canvasMoreHeight -
    canvasMoreSpacing -
    1 -
    titleBarAdjust +
    me.frameHeightAdjust;

  //Change the style of htmlElement of CFrame (CBean).
  me.htmlElement.style.cursor = "move";

  //Create a canvas
  me.canvas = new CCanvas(
    me.htmlElement,
    me.myCanvasId,
    0,
    canvasMoreHeight,
    w_width - canvasMoreSpacing,
    w_height - canvasMoreHeight - canvasMoreSpacing
  );

  me.canvas.canvasElement.style.backgroundColor =
    DEF.CFRAME.CANVAS_ELEMENT_BGCOLOR;
  me.canvas.canvasElement.style.cursor = "default";

  //Handling the omousedown event that occurred in Canvas which is a child element of CFrame
  me.canvas.canvasElement.onmousedown = me.canvasMouseDown;

  //Set the canvas as a reference to the parent of the canvas html element canvasElement.
  me.canvas.canvasElement.parentCFrame = me;

  var tmpCanvasWidth = parseInt(me.canvas.canvasElement.style.width, 10);
  var tmpCanvasHeight = parseInt(me.canvas.canvasElement.style.height, 10);

  var markerWidth = 16;
  var markerHeight = 16;

  //Offset from marker edge
  var edgeMargin = 16;

  //Lower right(R-D)
  var markerRD = new CMarkerWindow(
    me.myCanvasId + "_RD",
    tmpCanvasWidth - markerWidth + edgeMargin,
    tmpCanvasHeight - markerHeight + edgeMargin,
    markerWidth,
    markerHeight,
    0,
    "RD"
  );

  markerRD.htmlElement.style.cursor = "se-resize"; //nw-resize';

  //Since only the deltaX and deltaY are acquired and the movement of the marker itself is
  // performed by CFrame_resize, the movement coefficient of the marker itself is set to 0.
  markerRD.htmlElement.argX = 0;
  markerRD.htmlElement.argY = 0;

  //Bottom(D-D)
  var markerDD = new CMarkerWindow(
    me.myCanvasId + "_DD",
    0,
    tmpCanvasHeight - markerHeight + edgeMargin,
    tmpCanvasWidth - markerWidth + edgeMargin,
    markerHeight,
    0,
    "DD"
  );

  markerDD.htmlElement.style.cursor = "n-resize";

  //Since only the deltaX and deltaY are acquired and the movement of the marker itself is
  // performed by CFrame_resize, the movement coefficient of the marker itself is set to 0.
  markerDD.htmlElement.argX = 0;
  markerDD.htmlElement.argY = 0;

  //Right(R-R)
  var markerRR = new CMarkerWindow(
    me.myCanvasId + "_RR",
    tmpCanvasWidth - markerWidth + edgeMargin,
    0,
    markerWidth,
    tmpCanvasHeight - markerHeight + edgeMargin,
    0,
    "RR"
  );

  markerRR.htmlElement.style.cursor = "w-resize";

  //Since only the deltaX and deltaY are acquired and the movement of the marker itself is
  // performed by CFrame_resize, the movement coefficient of the marker itself is set to 0.
  markerRR.htmlElement.argY = 0;
  markerRR.htmlElement.argX = 0;

  //Add size change marker to canvas.
  me.canvas.addBean(markerRD);
  me.canvas.addBean(markerDD);
  me.canvas.addBean(markerRR);

  //Method to remove size change marker (can not resize)
  me.removeMarkers = function() {
    me.canvas.removeBean(markerRD.id);
    me.canvas.removeBean(markerDD.id);
    me.canvas.removeBean(markerRR.id);
    me.htmlElement.style.cursor = "default";
  };

  me.removeMarkers2 = function() {
    me.canvas.removeBean(markerRD.id);
    me.canvas.removeBean(markerDD.id);
    me.canvas.removeBean(markerRR.id);
  };
  me.enableMarkers = function(enabled) {
    if (enabled) {
      markerRD.htmlElement.style.display = "flex";
      markerDD.htmlElement.style.display = "flex";
      markerRR.htmlElement.style.display = "flex";
      markerRD.htmlElement.style.cursor = "se-resize";
      markerDD.htmlElement.style.cursor = "n-resize";
      markerRR.htmlElement.style.cursor = "w-resize";
    } else {
      markerRD.htmlElement.style.display = "none";
      markerDD.htmlElement.style.display = "none";
      markerRR.htmlElement.style.display = "none";
    }
    // me.canvas.removeBean(markerRD.id);
    // me.canvas.removeBean(markerDD.id);
    // me.canvas.removeBean(markerRR.id);
  };

  //add frameComponents[begin]
  for (var idx in appearance.frameComponents) {
    var frameComponent = appearance.frameComponents[idx];

    frameComponent.setFrame(me);

    //if frameComponent has special name 'closeButton', it will act as a close button.
    if ("closeButton" == frameComponent.id) {
      frameComponent.htmlElement.onclick = me.close;
    }

    me.addFrameComponent(frameComponent);
  }
  //add frameComponents[end]

  //override the field
  me.htmlElement.style.backgroundColor = "transparent";

  me.htmlElement.oncontextmenu = this.contextMenu;

  //The policy of Border drawing seems to be different between IE and FF.
  var caribVal = 0;

  me.caribValue = caribVal;

  me.htmlElement.style.borderWidth = me.exBorderWidth + "px";

  me.htmlElement.style.width =
    parseInt(me.htmlElement.style.width, 10) - caribVal + "px";
  me.htmlElement.style.height =
    parseInt(me.htmlElement.style.height, 10) - caribVal + 1 + "px";
  me.htmlElement.typeName = "cwindow";
  me.htmlElement.overflow = "auto";
  me.htmlElement.style.boxSizing = "content-box";

  if (appearance.frameBorderStyle) {
    me.htmlElement.style.borderStyle = appearance.frameBorderStyle;
  }

  if (appearance.frameBoxShadow) {
    me.htmlElement.style.boxShadow = appearance.frameBoxShadow;
  }

  //TODO deprecation(because CIfFrame is extended this operation)
  if (parseInt(appearance.frameBorderWidthDefault, 10) > 0) {
    me.htmlElement.style.borderWidth = appearance.frameBorderWidthDefault;
    me.htmlElement.style.borderColor = appearance.frameBorderColorDefault;
  }
  if (parseInt(appearance.frameBorderRadius, 10) > 0) {
    me.htmlElement.style.borderRadius = appearance.frameBorderRadius;
  }

  me.onCloseFrameListener = null;
}

CFrame.prototype.setTitleBarClassName = function(
  classNameForDefault,
  classNameForFocused
) {
  var me = this;
  if (classNameForDefault) {
    me.titleBarClassNameDefault = classNameForDefault;
    me.titleBarClassNameFocused = classNameForDefault;
  }
  if (classNameForFocused) {
    me.titleBarClassNameFocused = classNameForFocused;
  }
  return me;
};
/**
 * Add frameComponent(Wrapped DOM element like 'div' to display above the frame) to frame
 * @param frameComponent
 */
CFrame.prototype.addFrameComponent = function(frameComponent) {
  var me = this;

  me.frameComponentMap[frameComponent.id] = frameComponent;
  me.canvas.canvasElement.appendChild(frameComponent.htmlElement);
  return me;
};

/**
 * Get stored frame component by id
 * @param frameComponent
 */
CFrame.prototype.getFrameComponentElement = function(id) {
  var me = this;
  if (me.frameComponentMap[id]) {
    return me.frameComponentMap[id].htmlElement;
  } else {
    return null;
  }
};

CFrame.prototype.removeFrameComponentById = function(frameComponentId) {
  var me = this;

  var frameComponent = me.frameComponentMap[frameComponentId];

  me.canvas.canvasElement.removeChild(frameComponent.htmlElement);
  delete me.frameComponentMap[frameComponentId];
};

CFrame.prototype.showFrameComponent = function(frameComponentId, display) {
  var me = this;
  var comp = me.getFrameComponentElement(frameComponentId);
  if (comp) {
    if (display) {
      comp.style.display = display;
    } else {
      comp.style.display = "flex";
    }
  }
  return me;
};

CFrame.prototype.hideFrameComponent = function(frameComponentId) {
  var me = this;
  var comp = me.getFrameComponentElement(frameComponentId);
  if (comp) {
    comp.style.display = "none";
  }
  return me;
};

CFrame.prototype.hideAllVisibleFrameComponents = function() {
  var me = this;

  var compMap = me.frameComponentMap;
  for (var key in compMap) {
    if (compMap.hasOwnProperty(key)) {
      var comp = compMap[key].htmlElement;
      if (comp.style.display === "none") {
        comp._alreadyNone = true;
      }
      comp.style.display = "none";
    }
  }
};
CFrame.prototype.showAllVisibleFrameComponents = function() {
  var me = this;
  var compMap = me.frameComponentMap;
  for (var key in compMap) {
    if (compMap.hasOwnProperty(key)) {
      var comp = compMap[key].htmlElement;
      if (comp._alreadyNone) {
        comp._alreadyNone = null;
      } else {
        comp.style.display = "flex";
      }
    }
  }
};

CFrame.prototype.hideFrameComponentChildMenus = function() {
  var me = this;

  var compMap = me.frameComponentMap;
  for (var key in compMap) {
    if (compMap.hasOwnProperty(key)) {
      var comp = compMap[key];
      if (comp.childMenu) {
        comp.childMenu.style.display = "none";
      }
    }
  }
};

CFrame.prototype.setTitle = function(str) {
  var me = this;
  me.title = str;
  if (me.showTitleBar) {
    var textNode = document.createTextNode(str);
    //firstChildのfirstChildがspan
    me.titleBar.firstChild.replaceChild(
      textNode,
      me.titleBar.firstChild.firstChild
    );
  }
  return me;
};

CFrame.prototype.resize = function(
  deltaLeft,
  deltaTop,
  deltaWidth,
  deltaHeight
) {
  var me = this;

  var tmpLeft = parseInt(me.htmlElement.style.left, 10);
  var tmpTop = parseInt(me.htmlElement.style.top, 10);
  var tmpWidth = parseInt(me.htmlElement.style.width, 10);
  var tmpHeight = parseInt(me.htmlElement.style.height, 10);

  me.htmlElement.style.left = parseInt(tmpLeft + deltaLeft, 10) + "px";
  me.htmlElement.style.top = parseInt(tmpTop + deltaTop, 10) + "px";

  me.htmlElement.style.width = parseInt(tmpWidth + deltaWidth, 10) + "px";
  me.htmlElement.style.height = parseInt(tmpHeight + deltaHeight, 10) + "px";

  var tmpCanvasWidth = parseInt(me.canvas.canvasElement.style.width, 10);
  var tmpCanvasHeight = parseInt(me.canvas.canvasElement.style.height, 10);

  //Since canvasElement is a (0, 0) relative coordinate with respect to the parent element,
  // so it is not necessary to change left and top.
  me.canvas.canvasElement.style.width = tmpCanvasWidth + deltaWidth + "px";
  me.canvas.canvasElement.style.height = tmpCanvasHeight + deltaHeight + "px";

  if (me.showTitleBar) {
    //Change the size of the title bar. TitleAdjustWidth etc.
    //The reason why you do not have to use titleAdjustWidth is because
    // these scaling are done with differences (deltaX, deltaY).
    //Therefore, if you adjust with the titleAdjustWidth as
    // the initial value, the other will stretch relative.
    //You do not think you can use ifDelta
    me.titleBar.style.width = tmpCanvasWidth + deltaWidth + "px";
  } else {
  }

  for (var beanName in me.canvas.beanList) {
    var tmpBean = me.canvas.beanList[beanName];

    if (tmpBean.htmlElement.typeName == "cmarkerwindow") {
      if (tmpBean.htmlElement.usage == "RD") {
        //Move the size change lower right(RD) marker according to the amount of movement.
        tmpBean.htmlElement.style.left =
          parseInt(tmpBean.htmlElement.style.left, 10) + deltaWidth + "px";
        tmpBean.htmlElement.style.top =
          parseInt(tmpBean.htmlElement.style.top, 10) + deltaHeight + "px";
      } else if (tmpBean.htmlElement.usage == "DD") {
        //Move the size change lower marker according to the movement amount.
        // Do not move left.Only the width wil increase or decrease.
        tmpBean.htmlElement.style.width =
          parseInt(tmpBean.htmlElement.style.width, 10) + deltaWidth + "px";
        tmpBean.htmlElement.style.top =
          parseInt(tmpBean.htmlElement.style.top, 10) + deltaHeight + "px";
      } else if (tmpBean.htmlElement.usage == "RR") {
        //Move the size change right marker according to the movement amount
        //Do not move top,Only the height will increase or decrease.
        tmpBean.htmlElement.style.left =
          parseInt(tmpBean.htmlElement.style.left, 10) + deltaWidth + "px";
        tmpBean.htmlElement.style.height =
          parseInt(tmpBean.htmlElement.style.height, 10) + deltaHeight + "px";
      }
    }
  }
};

CFrame.prototype.canvasMouseDown = function(e) {
  var me = this;

  //Mousedown processing of CFrame.canvas

  //'This' in this method indicates 'Cwindow.canvas.canvasElement'.
  if (this.parentCFrame.parentCanvas.mouseDownSource == null) {
    this.parentCFrame.parentCanvas.mouseDownSource = "childcanvas";
  }
};
CFrame.prototype.mouseUp = function(e) {
  this.canvas.mouseUp(e);
};

CFrame.prototype.close = function(e) {
  var me = this;
  //Close processing of CFrame from CloseButton

  var parentCanvas = this.parentObject.parentCanvas;
  var cframeObj = this.parentObject;

  

  var windowId = cframeObj.id;
  cframeObj.closeInternally(e, parentCanvas, windowId);
};

CFrame.prototype.closeFrame = function(e) {
  //Close processing of CFrame
  var me = this;

  //   console.log(
  //     'CFrame#closeFrame "' +
  //       me.title +
  //       "(" +
  //       me.getName() +
  //       ")" +
  //       '" @' +
  //       me.windowId
  //   );

  var parentCanvas = this.parentCanvas;
  me.closeInternally(e, parentCanvas, me.windowId);
};

CFrame.prototype.closeInternally = function(e, parentCanvas, windowId) {
  var me = this;

  parentCanvas.removeBean(windowId);

  //added for modal window
  if (me.modalBackgroundWindowId) {
    parentCanvas.removeBean(me.modalBackgroundWindowId);
    me.modalBackgroundWindowId = null;
  }

  if (me.onCloseFrameListener) {
    me.onCloseFrameListener(me);
  }
};

CFrame.prototype.setOnCloseFrameListener = function(listener) {
  var me = this;
  me.onCloseFrameListener = listener;
};

CFrame.prototype.contextMenu = function() {
  //If you issue the right-click menu in the window, set the source to CFrame.
  var contextMenuSource = "CFrame";
  return false;
};

CFrame.prototype.setTitleBarTextColor = function(str) {
  var me = this;
  me.titleBar.style.color = str;
};

CFrame.prototype.setPosition = function(x, y, anchor) {
  var me = this;

  var frameWidth = me.getWidth();
  var frameHeight = me.getHeight();

  me._setPositionInternally(x, y, anchor, frameWidth, frameHeight);

  return me;
};
CFrame.prototype._setPositionInternally = function(
  x,
  y,
  anchor,
  frameWidth,
  frameHeight
) {
  var me = this;

  if (anchor) {
    me.anchor = anchor;
  }

  if (!anchor || CALIGN.LEFT_TOP == anchor) {
    me.htmlElement.style.left = x + "px";
    me.htmlElement.style.top = y + "px";
  } else if (CALIGN.HCENTER_TOP == anchor) {
    me.htmlElement.style.left = -frameWidth / 2 + x + "px";
    me.htmlElement.style.top = y + "px";
  } else if (CALIGN.RIGHT_TOP == anchor) {
    me.htmlElement.style.left = -frameWidth + x + "px";
    me.htmlElement.style.top = y + "px";
  } else if (CALIGN.LEFT_VCENTER == anchor) {
    me.htmlElement.style.left = x + "px";
    me.htmlElement.style.top = -frameHeight / 2 + y + "px";
  } else if (CALIGN.HCENTER_VCENTER == anchor) {
    me.htmlElement.style.left = -frameWidth / 2 + x + "px";
    me.htmlElement.style.top = -frameHeight / 2 + y + "px";
  } else if (CALIGN.RIGHT_VCENTER == anchor) {
    me.htmlElement.style.left = -frameWidth + x + "px";
    me.htmlElement.style.top = -frameHeight / 2 + y + "px";
  } else if (CALIGN.LEFT_BOTTOM == anchor) {
    me.htmlElement.style.left = x + "px";
    me.htmlElement.style.top = -frameHeight + y + "px";
  } else if (CALIGN.HCENTER_BOTTOM == anchor) {
    me.htmlElement.style.left = -frameWidth / 2 + x + "px";
    me.htmlElement.style.top = -frameHeight + y + "px";
  } else if (CALIGN.RIGHT_BOTTOM == anchor) {
    me.htmlElement.style.left = -frameWidth + x + "px";
    me.htmlElement.style.top = -frameHeight + y + "px";
  }
};

/**
 * Returns relative position with anchor
 * @returns {{x: *, y: *, anchor: *}}
 */
CFrame.prototype.getPosition = function() {
  var me = this;
  var frameWidth = me.getWidth();
  var frameHeight = me.getHeight();
  var x;
  var y;
  var anchor = me.anchor;
  if (!anchor || CALIGN.LEFT_TOP == anchor) {
    x = parseInt(me.htmlElement.style.left, 10);
    y = parseInt(me.htmlElement.style.top, 10);
  } else if (CALIGN.HCENTER_TOP == anchor) {
    x = parseInt(me.htmlElement.style.left, 10) + frameWidth / 2;
    y = parseInt(me.htmlElement.style.top, 10);
  } else if (CALIGN.RIGHT_TOP == anchor) {
    x = parseInt(me.htmlElement.style.left, 10) + frameWidth;
    y = parseInt(me.htmlElement.style.top, 10);
  } else if (CALIGN.LEFT_VCENTER == anchor) {
    x = parseInt(me.htmlElement.style.left, 10);
    y = parseInt(me.htmlElement.style.top, 10) + frameHeight / 2;
  } else if (CALIGN.HCENTER_VCENTER == anchor) {
    x = parseInt(me.htmlElement.style.left, 10) + frameWidth / 2;
    y = parseInt(me.htmlElement.style.top, 10) + frameHeight / 2;
  } else if (CALIGN.RIGHT_VCENTER == anchor) {
    x = parseInt(me.htmlElement.style.left, 10) + frameWidth;
    y = parseInt(me.htmlElement.style.top, 10) + frameHeight / 2;
  } else if (CALIGN.LEFT_BOTTOM == anchor) {
    x = parseInt(me.htmlElement.style.left, 10);
    y = parseInt(me.htmlElement.style.top, 10) + frameHeight;
  } else if (CALIGN.HCENTER_BOTTOM == anchor) {
    x = parseInt(me.htmlElement.style.left, 10) + frameWidth / 2;
    y = parseInt(me.htmlElement.style.top, 10) + frameHeight;
  } else if (CALIGN.RIGHT_BOTTOM == anchor) {
    x = parseInt(me.htmlElement.style.left, 10) + frameWidth;
    y = parseInt(me.htmlElement.style.top, 10) + frameHeight;
  }
  return { x: x, y: y, anchor: anchor };
};

CFrame.prototype.getLeft = function() {
  var me = this;
  return parseInt(me.htmlElement.style.left, 10);
};

CFrame.prototype.getTop = function() {
  var me = this;
  return parseInt(me.htmlElement.style.top, 10);
};
CFrame.prototype.getWidth = function() {
  var me = this;
  return parseInt(me.htmlElement.style.width, 10);
};
CFrame.prototype.getHeight = function() {
  var me = this;
  return parseInt(me.htmlElement.style.height, 10);
};

CFrame.prototype.getSize = function() {
  var me = this;
  return { width: me.getWidth(), height: me.getHeight() };
};

CFrame.prototype.setSize = function(width, height, force) {
  var me = this;

  var byUser = true;

  if (force) {
    byUser = false;
  }

  //call CIFrame#resize instead of CFrame#resize
  me.resize(0, 0, width - me.getWidth(), height - me.getHeight(), byUser);
  return me;
};

CFrame.prototype.getWindowId = function() {
  var me = this;
  return me.windowId;
};

CFrame.prototype.getName = function() {
  var me = this;
  return me.property.name;
};

CFrame.prototype.setName = function(name) {
  var me = this;
  me.property.name = name;
};
/**
 * end of CFrame class
 */

//+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-

inherit(CIfFrame, CFrame);

/**
 * CIfFrame class
 * Extension class with contents frame of CFrame as iframe
 * @param windowId
 * @param appearance
 * @constructor
 */
function CIfFrame(windowId, left, top, width, height, appearance) {
  var wleft = left;
  var wtop = top;
  var wwidth = width;
  var wheight = height;
  var zindex = appearance.zindex;
  var wborderwidth = null;

  var me = this;

  this.jsFrame = null;
  this.control = null;

  this.minFrameWidth = 128;
  this.minWindowHeight = 32;

  /**
   * If this value is true, the focus will move when tapping the iframe area,
   * but if the window do not have the focus, you can not click on the element in the iframe.
   */
  this.overrayTransparentScreenEnabled = false;

  /**
   *  Only in the case of resizing a transparent screen can be displayed on the iframe
   *  and the size can be adjusted smoothly.
   *  true is recommended.
   */
  //Change history
  //20181226
  //Changed to false.
  // So it becomes necessary to click twice to react when you call the #setSize,I changed the value to false.
  //20181231
  //I found the way that iframe will be changed the size smoothly.so the final answer is true.
  this.overrayTransparentScreenOnResize = true;

  this.titleBarColorFocused = appearance.titleBarColorFocused;
  this.titleBarColorDefault = appearance.titleBarColorDefault;

  this.titleBarCaptionColorDefault = appearance.titleBarCaptionColorDefault;
  this.titleBarCaptionColorFocused = appearance.titleBarCaptionColorFocused;

  //call super constructor
  CIfFrame.superConstructor.call(
    me,
    windowId,
    wleft,
    wtop,
    wwidth,
    wheight,
    zindex,
    wborderwidth,
    appearance
  );

  //border color
  me.frameBorderColorDefault = appearance.frameBorderColorDefault;
  me.frameBorderColorFocused = appearance.frameBorderColorFocused;

  //border width
  me.frameBorderWidthDefault = appearance.frameBorderWidthDefault;
  me.frameBorderWidthFocused = appearance.frameBorderWidthFocused;

  me.iframe = null;

  //Offset value for width adjustment of iframe
  me.ifDelta = 0;

  me.resizable = true;

  me.onMouseMoveOnIframe = null;
  me.onMouseUpOnIframe = null;

  me._hasFocus = false;

  me._hasFocusTime = 0;

  me.htmlElement.typeName = "cifwindow";

  //name of iframe
  var exIframeName = "riversun_" + windowId;

  me.dframe = document.createElement("div");

  me.iframe = document.createElement("iframe");

  me.iframe.name = exIframeName;

  me.iframe.id = exIframeName;

  me.iframe.frameBorder = "0";
  //me.iframe.scrolling = 'no';

  me.iframe.zIndex = -1;

  //Allow transparent of iframe background.
  me.iframe.allowTransparency = "true";
  me.iframe.width = me.canvasNetWidth - me.ifDelta + 0;
  me.iframe.height = me.canvasNetHeight - me.ifDelta + 0;

  me.showTitleBar = appearance.showTitleBar;

  me.getFrameInnerBorderRadius = appearance.getFrameInnerBorderRadius;

  me.frameBorderRadius = appearance.frameBorderRadius;

  me.adjustFrameBorderRadius();

  me.useIframe = false;

  me.canvas.canvasElement.appendChild(me.iframe);

  me.canvas.canvasElement.appendChild(me.dframe);

  this.setUseIframe = function(useIframe) {
    me.useIframe = useIframe;
    me.iframe.style.visibility = "hidden";
    me.iframe.style.position = "absolute";
    me.iframe.style.left = "0px";
    me.iframe.style.top = "0px";
    me.iframe.style.width = "100%";
    me.iframe.style.height = "100%";

    //DEBUGG
    //me.iframe.style.overflow = 'hidden';
    //me.iframe.scrolling = 'auto';

    me.dframe.style.visibility = "hidden";
    me.dframe.style.position = "absolute";
    me.dframe.style.left = "0px";
    me.dframe.style.boxSizing = "content-box";

    me.dframe.style.top = "0px";
    me.dframe.style.width = "100%";
    me.dframe.style.height = "100%";
    //me.dframe.style.borderStyle="solid";
    me.dframe.style.backgroundColor = "white";

    if (useIframe) {
      me.iframe.style.visibility = "visible";
      me.dframe.style.visibility = "hidden";
    } else {
      me.iframe.style.visibility = "hidden";
      me.dframe.style.visibility = "visible";
    }
  };

  me.setUseIframe(appearance.useIframe);

  //If it is IE, set the canvasElement of the canvas which is the parent of the iframe to transparent.

  if (
    me.overrayTransparentScreenEnabled ||
    me.overrayTransparentScreenOnResize
  ) {
    //Create a transparent screen.
    me.transparence = document.createElement("span");
    //me.transparence.style.backgroundImage = 'url(img/img_baron_tp.gif)';

    me.transparence.style.position = "absolute";
    me.transparence.style.left = "0px";
    me.transparence.style.top = "0px";

    //Transparent screen is 0px when creating window
    me.transparence.style.width = "0px";
    me.transparence.style.height = "0px";

    me.transparence.style.zIndex = 4;
    me.transparence.style.borderWidth = "0px";
    me.transparence.style.borderColor = "#ff00ee";
    me.transparence.style.borderStyle = "none";
    me.transparence.style.cursor = "default";

    me.transparence.style.pointerEvents = "none";
    me.canvas.canvasElement.style.backgroundColor =
      appearance.frameBackgroundColor;

    me.canvas.canvasElement.appendChild(me.transparence);
  }
}

CIfFrame.prototype.getFrameView = function() {
  var me = this;
  return me.dframe;
};

CIfFrame.prototype.setHTML = function(html) {
  var me = this;
  me.dframe.innerHTML = html;
};

/**
 * find DOM Element in the frame by querySelector<br>
 *  Examples<br>
 *      frame.$("#my_id_name");
 *      frame.$(".my_class_name");
 *      frame.$("div>img");
 *      frame.$("input[type='submit]");
 * @param q
 * @returns {Node}
 */
CIfFrame.prototype.$ = function(q) {
  var me = this;

  if (me.useIframe) {
    var docInIframe = me.iframe.contentWindow.document;
    return docInIframe.querySelector(q);
  } else {
    return me.dframe.querySelector(q);
  }
};

CIfFrame.prototype.on = function(id, eventType, callbackFunc) {
  var me = this;
  var component = me.getFrameComponentElement(id);
  if (component) {
    //Since we want to specify only one handler for frame components at the same time,
    // use an event handler instead of an event listener
    component["on" + eventType] = function(e) {
      var childMenuEle = document.getElementById(id + "_child_menu");
      if (childMenuEle && eventType === "click") {
        if (childMenuEle.style.display == "flex") {
          childMenuEle.style.display = "none";
        } else {
          childMenuEle.style.display = "flex";
        }
      }

      callbackFunc(me, e, {
        type: "frameComponent",
        id: id,
        eventType: eventType,
        child: childMenuEle
      });
    };
  }

  var domElement = me.$(id);
  if (domElement) {
    domElement.addEventListener(eventType, function(e) {
      callbackFunc(me, e, {
        type: "dom",
        id: id,
        eventType: eventType
      });
    });
  }
};

CIfFrame.prototype.adjustFrameBorderRadius = function() {
  var me = this;

  if (parseInt(me.frameBorderRadius, 10) > 0) {
    var innerBorderRadius = me.getFrameInnerBorderRadius(me, me._hasFocus);

    if (me.showTitleBar) {
      //title bar exists
      me.canvas.canvasElement.style.borderBottomRightRadius = innerBorderRadius;
      me.canvas.canvasElement.style.borderBottomLeftRadius = innerBorderRadius;
      me.iframe.style.borderBottomRightRadius = innerBorderRadius;
      me.iframe.style.borderBottomLeftRadius = innerBorderRadius;

      me.titleBar.style.borderTopLeftRadius = innerBorderRadius;
      me.titleBar.style.borderTopRightRadius = innerBorderRadius;
    } else {
      //title bar not exits
      me.canvas.canvasElement.style.borderRadius = innerBorderRadius;
      me.iframe.style.borderRadius = innerBorderRadius;
    }

    if (me.dframe) {
      me.dframe.style.borderBottomRightRadius = innerBorderRadius;
      me.dframe.style.borderBottomLeftRadius = innerBorderRadius;
    }
  }
};

CIfFrame.prototype.handleReleasingFocus = function(e) {
  var me = this;
  me._hasFocus = false;

  me.titleBar.style.backgroundColor = me.titleBarColorDefault;
  me.titleBar.style.color = me.titleBarCaptionColorDefault;

  //border color
  if (me.frameBorderColorDefault) {
    me.htmlElement.style.borderColor = me.frameBorderColorDefault;
  }

  //border width
  if (me.frameBorderWidthDefault) {
    me.htmlElement.style.borderWidth = me.frameBorderWidthDefault;
    me.adjustFrameBorderRadius();
  }

  if (me.htmlElement.typeName == "cifwindow") {
    if (me.overrayTransparentScreenEnabled) {
      me.transparence.style.width = parseInt(me.iframe.width, 10) + "px";
      me.transparence.style.height = parseInt(me.iframe.height, 10) + "px";
    }
  }

  //handling for child frameComponents
  for (var frameComponentId in me.frameComponentMap) {
    var frameComponent = me.frameComponentMap[frameComponentId];
    frameComponent.handleReleasingFocus();
  }

  //border bottom
  if (me.titleBarBorderBottomDefault) {
    me.titleBar.style.borderBottom = me.titleBarBorderBottomDefault;
  }

  //update style class
  me.titleBar.className = me.titleBarClassNameDefault;

  return me;
};

CIfFrame.prototype.handleTakingFocus = function(e) {
  var me = this;
  me._hasFocus = true;
  me._hasFocus = Date.now();

  if (me.overrayTransparentScreenEnabled) {
    //close transparence screen
    me.transparence.style.width = "0px";
    me.transparence.style.height = "0px";
  }

  me.titleBar.style.backgroundColor = me.titleBarColorFocused;
  me.titleBar.style.color = me.titleBarCaptionColorFocused;

  //border color
  if (me.frameBorderColorFocused) {
    me.htmlElement.style.borderColor = me.frameBorderColorFocused;
  }

  //border width
  if (me.frameBorderWidthFocused) {
    me.htmlElement.style.borderWidth = me.frameBorderWidthFocused;
    me.adjustFrameBorderRadius();
  }

  //border bottom
  if (me.titleBarBorderBottomFocused) {
    me.titleBar.style.borderBottom = me.titleBarBorderBottomFocused;
  }

  //handling for child frameComponents
  for (var frameComponentId in me.frameComponentMap) {
    var frameComponent = me.frameComponentMap[frameComponentId];
    frameComponent.handleTakingFocus();
  }

  //update style class
  me.titleBar.className = me.titleBarClassNameFocused;
  return me;
};

CFrame.prototype.show = function(model) {
  var me = this;
  //me.htmlElement.style.visibility = 'visible';
  me.htmlElement.style.display = "flex"; //hidden';

  if (model && model.requestFocus == false) {
  } else {
    me.requestFocus();
  }
  return me;
};

CFrame.prototype.showModal = function(onCloseListener) {
  var me = this;

  var appearance = new CFrameAppearance();
  appearance.showTitleBar = true;
  appearance.showCloseButton = false;
  appearance.frameBorderRadius = "0px";
  appearance.frameBorderStyle = "none";
  appearance.frameBorderWidthDefault = "0px";
  appearance.frameBorderWidthFocused = "0px";
  appearance.frameBoxShadow = null;
  appearance.frameBackgroundColor = "transparent";
  appearance.frameComponents = [];
  appearance.frameHeightAdjust = 0;
  appearance.titleBarHeight = "0px";
  appearance.titleBarBorderBottomFocused = null;
  appearance.titleBarCaptionLeftMargin = "0px";

  appearance.onInitialize = function() {};

  //added for modal window
  appearance.pullUpDisabled = true;

  var windowManager = me.parentCanvas;

  var modalBackgroundWindowId =
    DEF.CFRAME.MODAL_BACKGROUND_FRAME_ID_PREFIX + me.id;

  //create background window for preventing click background
  var modalBackgroundFrame = new CIfFrame(
    modalBackgroundWindowId,
    0,
    0,
    1,
    1,
    appearance
  );
  modalBackgroundFrame.setSize(window.innerWidth, window.innerHeight, true);
  modalBackgroundFrame.setResizable(false);

  window.addEventListener("resize", function() {
    modalBackgroundFrame.setSize(window.innerWidth, window.innerHeight, true);
  });

  //remember id of modal background frame
  me.modalBackgroundWindowId = modalBackgroundWindowId;

  // if (properties && properties.windowName) {
  //     frame.setName(properties.windowName);
  // }

  modalBackgroundFrame.hide();
  windowManager.addWindow(modalBackgroundFrame);

  modalBackgroundFrame.setTitle("").getFrameView().innerHTML =
    '<div class="jsframe-modal-window-background"></div>';
  modalBackgroundFrame.getFrameView().style.backgroundColor = "rgba(0,0,0,0.0)";
  modalBackgroundFrame.show();

  me.show();

  if (onCloseListener) {
    me.setOnCloseFrameListener(onCloseListener);
  }
};

CIfFrame.prototype.hide = function() {
  var me = this;
  //  me.htmlElement.style.visibility = 'hidden';
  me.htmlElement.style.display = "none"; //hidden';
  return me;
};

//Overriding CBeanFrame.prototype.onmouseDown
CIfFrame.prototype.onmouseDown = function(e) {
  var refHtmlElement = this;

  //Do not select it when dragging by the mouse.
  document.body.ondrag = function() {
    return false;
  };
  // document.body.onselectstart = function () {
  //     return false;
  // };

  //Override decorator with onmouseDown of parent class
  refHtmlElement.decorator = CFrame.prototype.onmouseDown;
  refHtmlElement.decorator(e);

  //Deploy a transparent screen.
  // Since mouseDown is pointed to this.htmlElement.onmousedown in the CBean class,
  // this 'this' will indicate this.htmlElement.
  //In other words,
  //if you want to refer 'CIfFrame',you need to specify 'this.parent.'
  //See CBeanFrame class, you can find 'this.htmlElement.parent = this'
  var refCIfFrame = refHtmlElement.parent;

  var refCWindowManager = refHtmlElement.parentCanvas;

  //When somewhere window(CFrame,CIfFrame) fires 'mouseDown',
  // Close all transparency screens so that the mouse cursor can pass over any iFrame
  for (var windowId in refCWindowManager.beanList) {
    var objCIfFrame = refCWindowManager.beanList[windowId];
    if (windowId == refCIfFrame.getWindowId()) {
      //skip
    } else {
      objCIfFrame.handleReleasingFocus();
    }
  }

  refCIfFrame.handleTakingFocus();
};

CIfFrame.prototype.mouseUp = function(e) {
  var refCIfFrame = this;

  if (
    refCIfFrame.overrayTransparentScreenEnabled ||
    refCIfFrame.overrayTransparentScreenOnResize
  ) {
    if (refCIfFrame.parentCanvas.onTopObject == refCIfFrame) {
      //Minimize the window at the front.
      refCIfFrame.transparence.style.width = "0px";
      refCIfFrame.transparence.style.height = "0px";
    } else {
      //The window which is not the at the front expands the screen so that it can respond to clicks.

      if (refCIfFrame.overrayTransparentScreenEnabled) {
        refCIfFrame.transparence.style.width =
          parseInt(refCIfFrame.iframe.width) + "px";
        refCIfFrame.transparence.style.height =
          parseInt(refCIfFrame.iframe.height) + "px";
      }
    }
  }

  refCIfFrame.decorator = CFrame.prototype.mouseUp;
  refCIfFrame.decorator(e);

  //Cancel selecting "Do not select when dragging mouse while releasing button" is canceled
  document.body.ondrag = null;
  document.body.onselectstart = null;

  //Disable when stopping moving.(Enable transparent window only when moving.)
  //This will work smoothly even with iframe content
  refCIfFrame.transparence.style.pointerEvents = "none";
};

CIfFrame.prototype.setMinFrameSize = function(width, height) {
  var me = this;
  me.minFrameWidth = width;
  me.minWindowHeight = height;
};

CIfFrame.prototype.resize = function(
  deltaLeft,
  deltaTop,
  deltaWidth,
  deltaHeight,
  byUser
) {
  var refCIfFrame = this;

  if (!refCIfFrame.resizable && byUser) {
    return null;
  }

  //Resize processing should be overridden directly rather than adopting a decorator pattern because it has better performance.
  var tmpLeft = parseInt(refCIfFrame.htmlElement.style.left, 10);
  var tmpTop = parseInt(refCIfFrame.htmlElement.style.top, 10);
  var tmpWidth = parseInt(refCIfFrame.htmlElement.style.width, 10);
  var tmpHeight = parseInt(refCIfFrame.htmlElement.style.height, 10);

  //Important logic to handle the minimum of Window well
  if (
    byUser &&
    (tmpWidth + deltaWidth < refCIfFrame.minFrameWidth) & (deltaWidth < 0)
  ) {
    //Minimum adjustment of width
    refCIfFrame.htmlElement.style.width = tmpWidth + "px";
    deltaWidth = 0;
  }

  if (
    byUser &&
    (tmpHeight + deltaHeight < refCIfFrame.minWindowHeight) & (deltaHeight < 0)
  ) {
    //Minimum adjustment of height
    refCIfFrame.htmlElement.style.height = tmpHeight + "px";
    deltaHeight = 0;
  }
  refCIfFrame.htmlElement.style.left = tmpLeft + deltaLeft + "px";
  refCIfFrame.htmlElement.style.top = tmpTop + deltaTop + "px";
  refCIfFrame.htmlElement.style.width = tmpWidth + deltaWidth + "px";
  refCIfFrame.htmlElement.style.height = tmpHeight + deltaHeight + "px";

  var tmpCanvasWidth = parseInt(
    refCIfFrame.canvas.canvasElement.style.width,
    10
  );
  var tmpCanvasHeight = parseInt(
    refCIfFrame.canvas.canvasElement.style.height,
    10
  );

  //Since canvasElement is a (0, 0) relative coordinate with respect
  // to the parent element, it is not necessary to change left and top.
  refCIfFrame.canvas.canvasElement.style.width =
    tmpCanvasWidth + deltaWidth + "px";
  refCIfFrame.canvas.canvasElement.style.height =
    tmpCanvasHeight + deltaHeight + "px";

  //Change the size of the title bar. TitleAdjustWidth etc.
  // The reason why you do not have to use titleAdjustWidth is
  // because these scaling are done with differences (deltaX, deltaY).
  //Therefore, if you adjust with the titleAdjustWidth
  // as the initial value, the other will stretch relative.
  refCIfFrame.titleBar.style.width =
    tmpCanvasWidth - refCIfFrame.ifDelta + deltaWidth + 0 + "px";

  //Image resizing for iframe that is the child element of canvas
  refCIfFrame.iframe.width =
    tmpCanvasWidth - refCIfFrame.ifDelta + deltaWidth + 0 + "px";
  refCIfFrame.iframe.height =
    tmpCanvasHeight -
    refCIfFrame.ifDelta +
    deltaHeight +
    refCIfFrame.frameHeightAdjust +
    "px";

  if (
    refCIfFrame.overrayTransparentScreenEnabled ||
    refCIfFrame.overrayTransparentScreenOnResize
  ) {
    //Deploy a transparent screen.
    refCIfFrame.transparence.style.width =
      parseInt(refCIfFrame.iframe.width) + "px";
    refCIfFrame.transparence.style.height =
      parseInt(refCIfFrame.iframe.height) + "px";
  }

  //move frameComponent(like closeButton) corresponding to moving window edge for resize
  for (var frameComponentId in refCIfFrame.frameComponentMap) {
    var frameComponent = refCIfFrame.frameComponentMap[frameComponentId];
    //update alignment of frameComponent corresponding to moving window edge for resize
    frameComponent.updateAlign();
  }

  for (var beanName in refCIfFrame.canvas.beanList) {
    var tmpBean = refCIfFrame.canvas.beanList[beanName];

    if (tmpBean.htmlElement.typeName == "cmarkerwindow") {
      if (tmpBean.htmlElement.usage == "RD") {
        tmpBean.htmlElement.style.left =
          parseInt(tmpBean.htmlElement.style.left) + deltaWidth + "px";
        tmpBean.htmlElement.style.top =
          parseInt(tmpBean.htmlElement.style.top) + deltaHeight + "px";
      } else if (tmpBean.htmlElement.usage == "DD") {
        tmpBean.htmlElement.style.width =
          parseInt(tmpBean.htmlElement.style.width) + deltaWidth + "px";
        tmpBean.htmlElement.style.top =
          parseInt(tmpBean.htmlElement.style.top) + deltaHeight + "px";
      } else if (tmpBean.htmlElement.usage == "RR") {
        tmpBean.htmlElement.style.left =
          parseInt(tmpBean.htmlElement.style.left) + deltaWidth + "px";
        tmpBean.htmlElement.style.height =
          parseInt(tmpBean.htmlElement.style.height) + deltaHeight + "px";
      }
    }
  }
}; //resize

CIfFrame.prototype.resizeDirect = function(width, height, byUser) {
  var refCIfFrame = this;

  if (!refCIfFrame.resizable && byUser) {
    return null;
  }

  refCIfFrame.htmlElement.style.width = width + "px";
  refCIfFrame.htmlElement.style.height = height + "px";

  var tmpCanvasWidth = parseInt(refCIfFrame.canvas.canvasElement.style.width);
  var tmpCanvasHeight = parseInt(refCIfFrame.canvas.canvasElement.style.height);

  //Since canvasElement is a (0, 0) relative coordinate with respect
  // to the parent element, it is not necessary to change left and top.
  refCIfFrame.canvas.canvasElement.style.width = width + "px";
  refCIfFrame.canvas.canvasElement.style.height =
    height - refCIfFrame.titleBar.style.height + "px";

  //Change the size of the title bar. TitleAdjustWidth etc.
  // The reason why you do not have to use titleAdjustWidth is
  // because these scaling are done with differences (deltaX, deltaY).
  //Therefore, if you adjust with the titleAdjustWidth
  // as the initial value, the other will stretch relative.
  refCIfFrame.titleBar.style.width = width - refCIfFrame.ifDelta + "px";

  //Image resizing for iframe that is the child element of canvas
  refCIfFrame.iframe.width = width - refCIfFrame.ifDelta + "px";
  refCIfFrame.iframe.height =
    height - refCIfFrame.ifDelta + refCIfFrame.frameHeightAdjust + "px";

  if (
    refCIfFrame.overrayTransparentScreenEnabled ||
    refCIfFrame.overrayTransparentScreenOnResize
  ) {
    //Deploy a transparent screen.
    refCIfFrame.transparence.style.width =
      parseInt(refCIfFrame.iframe.width) + "px";
    refCIfFrame.transparence.style.height =
      parseInt(refCIfFrame.iframe.height) + "px";
  }

  //move frameComponent(like closeButton) corresponding to moving window edge for resize
  for (var frameComponentId in refCIfFrame.frameComponentMap) {
    var frameComponent = refCIfFrame.frameComponentMap[frameComponentId];
    //update alignment of frameComponent corresponding to moving window edge for resize
    frameComponent.updateAlign();
  }

  for (var beanName in refCIfFrame.canvas.beanList) {
    var tmpBean = refCIfFrame.canvas.beanList[beanName];

    if (tmpBean.htmlElement.typeName == "cmarkerwindow") {
      if (tmpBean.htmlElement.usage == "RD") {
        tmpBean.htmlElement.style.left = width + "px"; // parseInt(tmpBean.htmlElement.style.left) + deltaWidth + 'px';
        tmpBean.htmlElement.style.top = height + "px"; //parseInt(tmpBean.htmlElement.style.top) + deltaHeight + 'px';
      } else if (tmpBean.htmlElement.usage == "DD") {
        tmpBean.htmlElement.style.width = width + "px";
        tmpBean.htmlElement.style.top = height + "px"; //heightparseInt(tmpBean.htmlElement.style.top) + deltaHeight + 'px';
      } else if (tmpBean.htmlElement.usage == "RR") {
        tmpBean.htmlElement.style.left = width + "px"; //+parseInt(tmpBean.htmlElement.style.left) + deltaWidth + 'px';
        tmpBean.htmlElement.style.height = height + "px";
      }
    }
  }
}; //resize

/**
 * Focus on this frame
 */
CIfFrame.prototype.requestFocus = function() {
  var me = this;

  var beanList = me.parentCanvas.beanList;

  for (var windowId in beanList) {
    var tmpIfWindow = beanList[windowId];

    //If it's my own window, minimize the transparent screen and change the color of the title bar.
    if (windowId == me.getWindowId()) {
      //if this frame is a target frame
      tmpIfWindow.handleTakingFocus();
    } else {
      //if this frame is NOT a target frame
      tmpIfWindow.handleReleasingFocus();
    }
  }

  me.parentCanvas.pullUp(me.id);
};

/**
 * URL for iframe
 * @param url
 */
CIfFrame.prototype.setUrl = function(url) {
  var me = this;

  return new Promise(function(resolve, reject) {
    if (url) {
      me.setUseIframe(true);
    } else {
      me.setUseIframe(false);
      resolve();
    }

    me.iframe.src = url;

    me.iframe.onload = function() {
      //mouse move
      me.iframe.contentWindow.document.onmousemove = function(e) {
        var frameLeft = me.getLeft();
        var frameTop = me.getTop();

        var eventFromIframe = document.createEvent("MouseEvents");
        eventFromIframe.initMouseEvent(
          "mousemove",
          true,
          false,
          window,
          e.detail,
          e.screenX,
          e.screenY,
          e.pageX + frameLeft,
          e.pageY + frameTop,
          e.ctrlKey,
          e.altKey,
          e.shiftKey,
          e.metaKey,
          e.button,
          null
        );

        //smooth dragging during iframe mode
        me.parentCanvas.windowMouseMove(eventFromIframe);

        if (me.onMouseMoveOnIframe) {
          me.onMouseMoveOnIframe(eventFromIframe);
        }
      };

      //mouse up
      me.iframe.contentWindow.document.onmouseup = function(e) {
        var frameLeft = me.getLeft();
        var frameTop = me.getTop();

        var eventFromIframe = document.createEvent("MouseEvents");
        eventFromIframe.initMouseEvent(
          "mouseup",
          true,
          false,
          window,
          e.detail,
          e.screenX,
          e.screenY,
          e.pageX + frameLeft,
          e.pageY + frameTop,
          e.ctrlKey,
          e.altKey,
          e.shiftKey,
          e.metaKey,
          e.button,
          null
        );

        //smooth dragging during iframe mode
        me.parentCanvas.windowMouseUp(eventFromIframe);

        if (me.onMouseUpOnIframe) {
          me.onMouseUpOnIframe(eventFromIframe);
        }
      };

      resolve(me, me.iframe.contentWindow.document);
    };
  });
};

/**
 * Returns DOM-document of iframe
 * @returns {*|HTMLDocument}
 */
CIfFrame.prototype.getIfDocument = function() {
  var me = this;
  return me.iframe.contentWindow.document;
};

CIfFrame.prototype.setScrolling = function(str) {
  var me = this;
  me.iframe.scrolling = str;
};

CIfFrame.prototype.getScrolling = function(str) {
  var me = this;
  return me.iframe.scrolling;
};

CIfFrame.prototype.setResizable = function(enabled) {
  var me = this;
  me.resizable = enabled;
  me.enableMarkers(enabled);
  return me;
};

CIfFrame.prototype.setControl = function(model) {
  var me = this;

  if (model) {
    model.frame = me;
    me.control = me.jsFrame.createWindowEventHelper(model);
    me.control.setupDefaultEvents(model);
  }
};

/**
 * end of CIFrame class
 */

//+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-

inherit(CWindowManager, CCanvas);

/**
 * CWindowManager class
 * <p>
 * A canvas class that displays multiple frames. Handle events on the window to coordinate multiple windows<br>
 *
 * @param parentElement
 * @param canvasId
 * @param left
 * @param top
 * @param width
 * @param height
 * @constructor
 */
function CWindowManager(parentElement, canvasId, left, top, width, height) {
  CWindowManager.superConstructor.call(
    this,
    parentElement,
    canvasId,
    left,
    top,
    width,
    height
  );
  var me = this;

  document.body.addEventListener("click", function(evt) {
    for (var windowId in me.beanList) {
      var beanFrame = me.beanList[windowId];
      beanFrame.onBodyClicked(evt);
    }
  });
}

CWindowManager.prototype.getWindow = function(windowId) {
  var me = this;
  return me.beanList[windowId];
};

//Wrapping the 'addBean' of the parent class
CWindowManager.prototype.addWindow = function(window) {
  var me = this;

  var windowId = window.getWindowId();
  var name = window.getName();
  me.beanIdName[windowId] = name;
  me.beanNameId[name] = windowId;

  me.addBean(window);
};

//if contains window named specified name
CWindowManager.prototype.containsWindowName = function(name) {
  var me = this;

  var windowId = me.beanNameId[name];

  if (windowId) {
    return true;
  }
};

CWindowManager.prototype.getWindowByName = function(name) {
  var me = this;
  var windowId = me.beanNameId[name];

  if (windowId) {
    return me.getWindow(windowId);
  } else {
    return null;
  }
};

//Wrapping the 'mouseMove' method of the parent class
CWindowManager.prototype.windowMouseMove = function(e) {
  var me = this;
  if (me.currentObject == null) {
    return null;
  }

  var childWindowMoved = false;

  //Loop processing of each CWindow held by CWindowManager
  var beanList = me.beanList;

  for (var windowId in beanList) {
    var targetWindow = beanList[windowId];

    //Since this 'mouseMove' is canvas of CWindow's 'mouseMove',so do move CBeanFrames in the canvas.
    var eventData = targetWindow.canvas.mouseMove(e);

    //Whether any one of the beans in the Canvas has moved or not.
    //Yes.(When it moves), eventData is set.
    //NO. If it does not move it is set to null.
    childWindowMoved = childWindowMoved | (eventData != null);
    if (eventData != null) {
      //If it is the marker for resizing
      if (eventData.targetTypeName == "cmarkerwindow") {
        var targetObject = eventData.targetObject;

        //Enable transparent window only when moving.
        //This will work smoothly even with iframe content
        targetWindow.transparence.style.pointerEvents = "auto";

        if (targetObject.usage == "RD") {
          targetWindow.resize(0, 0, eventData.deltaX, eventData.deltaY, true);
        } else if (targetObject.usage == "DD") {
          targetWindow.resize(0, 0, 0, eventData.deltaY, true);
        } else if (targetObject.usage == "RR") {
          targetWindow.resize(0, 0, eventData.deltaX, 0, true);
        }
      }
    }
  }

  //If any one of the beans in the Canvas has moved.Do not do 'Cwindow's mouseMove'
  if (!childWindowMoved && this.mouseDownSource != "childcanvas") {
    //Moving logic for CWindow which is holded by CWindowManager as a child window.
    me.mouseMove(e);
  }
};

//Wrapping the method 'mouseUp' of the parent class
CWindowManager.prototype.windowMouseUp = function(e) {
  var me = this;

  //run 'mouseUp' of parent class
  me.mouseUp(e);

  var beanList = me.beanList;

  for (var windowId in beanList) {
    var objWindow = beanList[windowId];

    //run CWindow's 'mouseUp'(it's child window).
    objWindow.mouseUp(e);
  }
};

/**
 * (override CCanvas.removeBean)
 * @param windowId
 */
CWindowManager.prototype.removeBean = function(windowId) {
  var me = this;

  //Retrieve the target beanFrame
  var beanList = me.beanList;
  var targetBean = beanList[windowId];

  if (targetBean == null) {
    return;
  }

  var removeTargetBeanHasFocus = targetBean._hasFocus;

  //Remove bean's htmlElement from canvasElement
  me.canvasElement.removeChild(targetBean.htmlElement);

  //Delete the bean object in the associative array.
  delete beanList[windowId];

  var beanName = me.beanIdName[windowId];
  if (beanName) {
    //-if bean name exist
    delete me.beanIdName[windowId];
    delete me.beanNameId[beanName];
  }

  //focus on last focused window after removing
  var maxFocusTime = 0;
  var lastFocusedFrame = null;

  if (removeTargetBeanHasFocus) {
    for (var windowId in beanList) {
      var frame = beanList[windowId];

      //pullUpDisabled=true means that the frame is modal background window
      if (maxFocusTime <= frame._hasFocusTime && !frame.pullUpDisabled) {
        maxFocusTime = frame._hasFocusTime;

        lastFocusedFrame = frame;
      }
    }
    if (lastFocusedFrame) {
      lastFocusedFrame.requestFocus();
    }
  }

  targetBean.parentCanvas = null;
};
/**
 * end of CWindowManager class
 */

//+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-

inherit(CMarkerWindow, CBeanFrame);

/**
 * CMarkerWindow class
 * @param windowId
 * @param left
 * @param top
 * @param width
 * @param height
 * @param zindex
 * @param usage
 * @constructor
 */
function CMarkerWindow(windowId, left, top, width, height, zindex, usage) {
  var me = this;

  CMarkerWindow.superConstructor.call(
    this,
    windowId,
    left,
    top,
    width,
    height,
    zindex,
    usage
  );

  me.htmlElement.typeName = "cmarkerwindow";
  me.htmlElement.usage = usage;
  me.htmlElement.isRangeLimited = false;
  me.htmlElement.style.borderStyle = "none";
  me.htmlElement.style.zIndex = 1;
}

/**
 * End of CMarkerWindow class
 * @constructor
 */

//+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-

/**
 * FrameManager class
 * @constructor
 */
function JSFrame(model) {
  var me = this;

  var parentElement = null;

  // Frames will be fixed(Frames keep staying in the same place) even if the user scrolls the browser.
  var isWindowManagerFixed = true; //default is true.

  //Initialization parameter check

  if (model && model.fixed == false) {
    isWindowManagerFixed = false;
  }

  if (model && model.parentElement) {
    parentElement = model.parentElement;
  }

  me.hAlign = "left";
  me.vAlign = "top";

  if (model && model.horizontalAlign) {
    me.hAlign = model.horizontalAlign;
  }

  if (model && model.verticalAlign) {
    me.vAlign = model.verticalAlign;
  }

  if (!parentElement && isWindowManagerFixed) {
    var topParentDiv = document.createElement("div");
    topParentDiv.id = "jsFrame_fixed_" + me.generateUUID();
    topParentDiv.setAttribute(
      "style",
      "position:fixed;" +
        me.hAlign +
        ":0px;" +
        me.vAlign +
        ":0px;margin:0px;padding:0px;"
    );

    document.body.appendChild(topParentDiv);
    parentElement = topParentDiv;
  } else {
    parentElement = document.body;
  }

  document.onmouseup = mouseUp;
  document.onmousemove = mouseMove;

  me.windowManager = new CWindowManager(
    parentElement,
    "windowManager_" + me.generateUUID(),
    0,
    0,
    0,
    0
  );
  //me.windowManager = new CWindowManager(document.body, 'windowManager_' + me.generateUUID(), 0, 0, 0, 0);
  me.domPartsBuilder = null;

  function mouseUp(e) {
    me.windowManager.windowMouseUp(e);
  }

  function mouseMove(e) {
    me.windowManager.windowMouseMove(e);
    var globalMouseX = e.pageX;
    var globalMouseY = e.pageY;
  }
}

JSFrame.prototype.getDomPartsBuilder = function() {
  var me = this;

  if (!me.domPartsBuilder) {
    me.domPartsBuilder = new CDomPartsBuilder();
  }
  return me.domPartsBuilder;
};

JSFrame.prototype.create = function(model) {
  var me = this;

  var properties = {};
  properties.name = model.name;
  var title = model.title;
  var left = model.left;
  var top = model.top;
  var width = model.width;
  var height = model.height;
  var appearance = model.appearance;
  var appearanceName = model.appearanceName;
  var appearanceParam = model.appearanceParam;
  var style = model.style;

  var minWidth = model.minWidth;
  var minHeight = model.minHeight;

  var html = model.html;
  var resizable = model.resizable;
  var movable = model.movable;
  var url = model.url;
  var urlLoaded = model.urlLoaded;

  if (appearanceName) {
    appearance = this.createPresetStyle(appearanceName, {
      appearanceParam: appearanceParam
    });
  }

  var frame = this.createFrame(
    left,
    top,
    width,
    height,
    appearance,
    properties
  );

  if (title) {
    frame.setTitle(title);
  }

  if (html) {
    frame.setHTML(html);
  }
  if (url) {
    var urlPromise = frame.setUrl(url);
    if (urlLoaded) {
      urlPromise.then(urlLoaded);
    }
  }
  if (resizable == false) {
    frame.setResizable(false);
  }
  if (movable == false) {
    frame.setMovable(false);
  }

  if (minWidth && minHeight) {
    frame.minFrameWidth = minWidth;
  }
  if (minHeight) {
    frame.minWindowHeight = minHeight;
  }

  if (style) {
    var frameView = frame.getFrameView();
    for (var name in style) {
      if (style.hasOwnProperty(name)) {
        frameView.style[name] = style[name];
      }
    }
  }

  return frame;
};

/**
 * Create a new window
 *
 * @returns {CIfFrame}
 */
JSFrame.prototype.createFrame = function(
  left,
  top,
  width,
  height,
  appearance,
  properties
) {
  var me = this;

  if (!appearance) {
    appearance = me.createFrameAppearance();
  }

  appearance.initialize();

  var windowId = "window_" + me.generateUUID();

  if (!left) {
    left = 0;
  }
  if (!top) {
    top = 0;
  }
  if (!width) {
    width = 128;
  }
  if (!height) {
    height = 128;
  }

  var frame = new CIfFrame(windowId, left, top, width, height, appearance);

  //experimental
  frame.jsFrame = me;

  if (properties && properties.name) {
    frame.setName(properties.name);
  }
  frame.hide();

  me.windowManager.addWindow(frame);

  if (appearance.getTitleBarStyle) {
    var titleBarStyle = appearance.getTitleBarStyle();
    if (titleBarStyle) {
      frame.setTitleBarClassName(
        titleBarStyle.titleBarClassNameDefault,
        titleBarStyle.titleBarClassNameFocused
      );
    }
  }

  return frame;
};

JSFrame.prototype.containsWindowName = function(windowName) {
  var me = this;
  return me.windowManager.containsWindowName(windowName);
};

JSFrame.prototype.getWindowByName = function(windowName) {
  var me = this;
  return me.windowManager.getWindowByName(windowName);
};

JSFrame.prototype.generateUUID = function() {
  var unixTime = Date.now();

  var uuid = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(
    c
  ) {
    var r = (unixTime + Math.random() * 16) % 16 | 0;
    unixTime = Math.floor(unixTime / 16);
    return (c == "x" ? r : (r & 0x3) | 0x8).toString(16);
  });
  return uuid;
};

JSFrame.prototype.createFrameAppearance = function() {
  return new CFrameAppearance();
};

JSFrame.prototype.createAnimator = function() {
  return new CSimpleLayoutAnimator();
};

/**
 * Helper class for maximizing and minimizing windows(frames) and handling animations accordingly
 */
JSFrame.prototype.createWindowEventHelper = function(model) {
  var me = this;

  if (!model) {
    model = {};
  }

  model.verticalAlign = me.vAlign;
  model.horizontalAlign = me.hAlign;

  var wndEventHelper = new WindowEventHelper(model);
  return wndEventHelper;
};

JSFrame.prototype.createPresetStyle = function(presetName, param) {
  var me = this;
  var apr = me.createFrameAppearance();
  if (param && param.focusedFrameOnly) {
    apr.focusedFrameOnly = param.focusedFrameOnly;
  }

  if (presetStyles[presetName]) {
    var styleObj = presetStyles[presetName];
    var appearanceParam = null;

    if (param && param.appearanceParam) {
      appearanceParam = param.appearanceParam;
    }

    return styleObj.getStyle(apr, appearanceParam);
  }

  console.error('Preset appearance "' + presetName + '" not found.');
  return apr;
};

JSFrame.prototype.showToast = function(model) {
  if (!model) {
    return;
  }

  var me = this;
  var toastHeight = 60;
  var toastWidth = 260;
  var openCloseDurationMs = 300;
  var stayDurationMs = 1000;
  // var startY = window.innerHeight - 10 - toastHeight / 2;
  // var endY = window.innerHeight - 20 - toastHeight / 2;
  var startY = model.top;
  var endY = model.top + 10;
  var myHtml = "";
  var showButton = false;
  var style = {
    borderRadius: "10px",
    background: "rgba(0,0,0,0.8)"
  };

  if (model.style) {
    style = model.style;
  }
  if (model.height) {
    toastHeight = model.height;
  }
  if (model.width) {
    toastWidth = model.width;
  }
  if (model.duration) {
    stayDurationMs = model.duration;
  }
  // if (model.align) {

  //     if (model.align == 'top') {
  //         startY = 10 + toastHeight / 2;
  //         endY = 20 + toastHeight / 2;
  //     }
  //     else if (model.align == 'center') {
  //         startY = window.innerHeight / 2;
  //         endY = window.innerHeight / 2;
  //     } else {
  //         //bottom
  //     }
  // }
  if (model.html) {
    myHtml = model.html;
  }
  if (model.text) {
    myHtml = model.text;
  }
  if (model.closeButton == true) {
    showButton = true;
  } else {
    showButton = false;
  }

  var apr = me.createPresetStyle("toast");

  if (style.borderRadius) {
    apr.frameBorderRadius = style.borderRadius;
  }

  if (model.closeButtonColor) {
    apr.captionClor = model.closeButtonColor;
  }

  var frame = me.create({
    name: "toast_" + me.generateUUID(),
    width: toastWidth,
    height: toastHeight,
    movable: false,
    resizable: false,
    appearance: apr,
    style: style,
    html:
      '<div id="my_element" style="box-sizing:border-box;display: flex;justify-content: center;align-items: center;padding:10px;font-size:16px;color:darkgray;height:' +
      toastHeight +
      'px">' +
      myHtml +
      "</div>"
  });

  if (showButton) {
  } else {
    frame.hideFrameComponent("closeButton");
  }

  var requestFocusAfterAnimation = false;

  var startX = model.left;

  //   if (me.hAlign == "right") {
  //     startX = -startX; // -500;
  //   }

  if (me.vAlign == "bottom") {
    startY = startY - window.innerHeight;
    endY = endY - window.innerHeight;
  }

  var animator = me.createAnimator();
  animator
    .set(frame)
    .setDuration(openCloseDurationMs)
    .fromPosition(startX, startY, "CENTER_CENTER")
    .toPosition(startX, endY, "CENTER_CENTER")
    .toAlpha(1.0)
    .fromAlpha(0.0)
    .start(0, requestFocusAfterAnimation)
    .then(function(animatorObj) {
      return animatorObj
        .setDuration(openCloseDurationMs)
        .fromPosition(startX, endY, "CENTER_CENTER")
        .toPosition(startX, startY, "CENTER_CENTER")
        .fromAlpha(1.0)
        .toAlpha(0.5)
        .start(stayDurationMs, requestFocusAfterAnimation);
    })
    .then(function(animatorObj) {
      var _frame = animatorObj.get();
      _frame.closeFrame();
    });
};

/**
 * end of FrameManager class
 */

//+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-

/**
 * CFrameComponent class
 * <p>
 * Wrapped DOM element like 'div' to display above the frame<br>
 *
 * ex.An object such as closeButton
 *
 * @param id
 * @param frame
 * @param htmlElement DOM-element
 * @param x relative x-position in the frame respect to align
 * @param y relative y-position in the frame respect to align
 * @param align relative alignment in the frame
 * @constructor
 */
function CFrameComponent(id, htmlElement, x, y, align, extra) {
  var me = this;

  me.id = id;
  me.x = x;
  me.y = y;
  me.frame = null;

  me._focusTakingCallabck = null;
  me._focusReleasingCallabck = null;

  if (align) {
    me.frameComponentAlign = align;
  } else {
    me.frameComponentAlign = CALIGN.LEFT_TOP;
  }

  me.htmlElement = htmlElement;
  me.htmlElement.style.zIndex = 50;

  if (extra && extra.childMenu) {
    me.childMenu = extra.childMenu;
  }
}

CFrameComponent.prototype.setFocusCallback = function(
  focusTakingCallback,
  focusReleasingCallback
) {
  var me = this;
  me._focusTakingCallabck = focusTakingCallback;
  me._focusReleasingCallabck = focusReleasingCallback;
};

/**
 * Set parent frame of this frameComponent
 * @param frame
 */
CFrameComponent.prototype.setFrame = function(frame) {
  var me = this;

  me.frame = frame;
  me.htmlElement.parentObject = frame;
  me.updateAlign();
};

/**
 * Place the FrameComponent relative to the parent's frame.
 * Relocate relative to parent frame when window resize event occurs
 */
CFrameComponent.prototype.updateAlign = function() {
  var me = this;

  var frameComponentAlign = me.frameComponentAlign;

  var frame = me.frame;
  var eleStyle = me.htmlElement.style;
  eleStyle.userSelect = "none";

  var x = me.x;
  var y = me.y;

  var frameWidth = frame.getWidth();
  var frameHeight = frame.getHeight();
  var eleStyleWidth = eleStyle.width;
  var eleStyleHeight = eleStyle.height;

  if (CALIGN.LEFT_TOP == frameComponentAlign) {
    eleStyle.left = x + "px";
    eleStyle.top = y + "px";
  } else if (CALIGN.HCENTER_TOP == frameComponentAlign) {
    eleStyle.left =
      parseInt(frameWidth) / 2 - parseInt(eleStyleWidth) / 2 + x + "px";
    eleStyle.top = y + "px";
  } else if (CALIGN.RIGHT_TOP == frameComponentAlign) {
    eleStyle.left = parseInt(frameWidth) - parseInt(eleStyleWidth) + x + "px";
    eleStyle.top = y + "px";
  } else if (CALIGN.LEFT_VCENTER == frameComponentAlign) {
    eleStyle.left = x + "px";
    eleStyle.top =
      parseInt(frameHeight) / 2 - parseInt(eleStyleHeight) / 2 + y + "px";
  } else if (CALIGN.HCENTER_VCENTER == frameComponentAlign) {
    eleStyle.left =
      parseInt(frameWidth) / 2 - parseInt(eleStyleWidth) / 2 + x + "px";
    eleStyle.top =
      parseInt(frameHeight) / 2 - parseInt(eleStyleHeight) / 2 + y + "px";
  } else if (CALIGN.RIGHT_VCENTER == frameComponentAlign) {
    eleStyle.left = parseInt(frameWidth) - parseInt(eleStyleWidth) + x + "px";
    eleStyle.top =
      parseInt(frameHeight) / 2 - parseInt(eleStyleHeight) / 2 + y + "px";
  } else if (CALIGN.LEFT_BOTTOM == frameComponentAlign) {
    eleStyle.left = x + "px";
    eleStyle.top = parseInt(frameHeight) - parseInt(eleStyleHeight) + y + "px";
  } else if (CALIGN.HCENTER_BOTTOM == frameComponentAlign) {
    eleStyle.left =
      parseInt(frameWidth) / 2 - parseInt(eleStyleWidth) / 2 + x + "px";
    eleStyle.top = parseInt(frameHeight) - parseInt(eleStyleHeight) + y + "px";
  } else if (CALIGN.RIGHT_BOTTOM == frameComponentAlign) {
    eleStyle.left = parseInt(frameWidth) - parseInt(eleStyleWidth) + x + "px";
    eleStyle.top = parseInt(frameHeight) - parseInt(eleStyleHeight) + y + "px";
  }
};

CFrameComponent.prototype.handleTakingFocus = function() {
  var me = this;
  if (me._focusTakingCallabck) {
    me._focusTakingCallabck();
  }
};

CFrameComponent.prototype.handleReleasingFocus = function() {
  var me = this;
  if (me._focusReleasingCallabck) {
    me._focusReleasingCallabck();
  }
};

/**
 * end of CFrameComponent class
 */

//+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-

/**
 * CDomPartsBuilder class
 * Easy to build a beautiful or typical dom parts(htmlElement)
 * @constructor
 */
function CDomPartsBuilder() {}

CDomPartsBuilder.prototype.buildTextButtonAppearance = function() {
  return new CTextButtonAppearance();
};

CDomPartsBuilder.prototype.buildButton = function(btnAppearance) {
  var me = this;
  return me.buildTextButton(btnAppearance);
};

/**
 *
 * @param size
 * @returns {HTMLElement}
 */
CDomPartsBuilder.prototype.buildTextButton = function(btnAppearance) {
  var size = btnAppearance.size;
  var width = size;
  var height = size;

  if (btnAppearance.width != null) {
    width = btnAppearance.width;
  }

  if (btnAppearance.height != null) {
    height = btnAppearance.height;
  }

  var divElement = document.createElement("div");

  //border
  var borderWidth = btnAppearance.borderWidth;
  var borderRadius = btnAppearance.borderRadius;

  var borderColorDefault = btnAppearance.borderColorDefault;
  var borderColorFocused = btnAppearance.borderColorFocused;
  var borderColorHovered = btnAppearance.borderColorHovered;
  var borderColorPressed = btnAppearance.borderColorPressed;

  var borderStyleDefault = btnAppearance.borderStyleDefault;
  var borderStyleFocused = btnAppearance.borderStyleFocused;
  var borderStyleHovered = btnAppearance.borderStyleHovered;
  var borderStylePressed = btnAppearance.borderStylePressed;

  //background
  var backgroundColorDefault = btnAppearance.backgroundColorDefault;
  var backgroundColorFocused = btnAppearance.backgroundColorFocused;
  var backgroundColorHovered = btnAppearance.backgroundColorHovered;
  var backgroundColorPressed = btnAppearance.backgroundColorPressed;

  var backgroundBoxShadow = btnAppearance.backgroundBoxShadow;

  var fa = btnAppearance.fa;

  //caption
  var caption = btnAppearance.caption;
  var btnImageDefault = btnAppearance.imageDefault;
  var btnImageFocused = btnAppearance.imageFocused;
  var btnImageHovered = btnAppearance.imageHovered;
  var btnImagePressed = btnAppearance.imagePressed;

  //prevent to catch mouse events
  if (btnImageDefault) {
    btnImageDefault.style.pointerEvents = "none";
  }
  if (btnImageFocused) {
    btnImageFocused.style.pointerEvents = "none";
  }
  if (btnImageHovered) {
    btnImageHovered.style.pointerEvents = "none";
  }
  if (btnImagePressed) {
    btnImagePressed.style.pointerEvents = "none";
  }

  var _captionColorDefault = btnAppearance.captionColorDefault;
  var captionColorFocused = btnAppearance.captionColorFocused;
  var captionColorHovered = btnAppearance.captionColorHovered;
  var captionColorPressed = btnAppearance.captionColorPressed;

  var captionShiftYpx = btnAppearance.captionShiftYpx;
  var captionFontRatio = btnAppearance.captionFontRatio;

  //Set whether parent frame has focus or not internally
  divElement._hasFrameFocus = false;

  //Set whether mouse is pressing or not internally.
  divElement._isMouseDown = false;

  divElement.style.position = "absolute";

  divElement.style.top = "0px";
  divElement.style.left = "0px";
  divElement.style.width = width + "px";
  divElement.style.height = height + "px";
  divElement.style.cursor = "pointer";
  divElement.style.margin = "0px";
  divElement.style.padding = "0px";
  //added for preventing bootstrap.css pollution
  divElement.style.boxSizing = "content-box";
  divElement.style.fontFamily = "sans-serif";

  divElement.onmousedown = function(e) {
    divElement._isMouseDown = true;
    divElement._handleFocusDrawing("onmousedown");
  };

  divElement.onmouseout = function(e) {
    divElement._isMouseDown = false;
    divElement._handleFocusDrawing("onmouseout");
  };

  divElement.onmouseover = function(e) {
    divElement._handleHoverDrawing();
  };

  divElement.onmouseup = function(e) {
    divElement._isMouseDown = false;
    divElement._handleFocusDrawing("onmouseup");
  };

  /**
   * The parent notifies that the parent's frame got focus
   */
  divElement._onTakeFocus = function() {
    divElement._hasFrameFocus = true;
    divElement._handleFocusDrawing("_onTakeFocus");
  };

  /**
   * The parent notifies that the parent's frame has lost focus
   */
  divElement._onReleaseFocus = function() {
    divElement._hasFrameFocus = false;
    divElement._handleFocusDrawing("_onReleaseFocus");
  };

  /**
   *  To handle 2x2 matrix.
   *  (_hasFrameFocus true/false x _isMouseDown true/false)
   */
  divElement._handleFocusDrawing = function(evtName) {
    if (divElement._hasFrameFocus) {
      //When this element has focus

      if (divElement._isMouseDown) {
        //border
        divElement.style.borderColor = borderColorPressed;
        divElement.style.borderStyle = borderStylePressed;

        //background
        divElement.style.backgroundColor = backgroundColorPressed;

        //caption
        divElement.style.color = captionColorPressed;

        if (btnImagePressed) {
          divElement.innerHTML = "";
          divElement.appendChild(btnImagePressed);
        }
      } else {
        //border
        divElement.style.borderColor = borderColorFocused;
        divElement.style.borderStyle = borderStyleFocused;

        //background
        divElement.style.backgroundColor = backgroundColorFocused;

        //caption
        divElement.style.color = captionColorFocused;

        if (btnImageFocused) {
          divElement.innerHTML = "";
          divElement.appendChild(btnImageFocused);
        }
      }
    } else {
      //When this element doesn't have focus
      if (divElement._isMouseDown) {
        //border
        divElement.style.borderColor = borderColorPressed;
        divElement.style.borderStyle = borderStylePressed;

        //background
        divElement.style.backgroundColor = backgroundColorPressed;

        //caption
        divElement.style.color = captionColorPressed;

        if (btnImagePressed) {
          divElement.innerHTML = "";
          divElement.appendChild(btnImagePressed);
        }
      } else {
        //border
        divElement.style.borderColor = borderColorDefault;
        divElement.style.borderStyle = borderStyleDefault;

        //background
        divElement.style.backgroundColor = backgroundColorDefault;

        //caption
        divElement.style.color = _captionColorDefault;

        if (btnImageDefault) {
          divElement.innerHTML = "";
          divElement.appendChild(btnImageDefault);
        }
      }
    }
  };

  divElement._handleHoverDrawing = function() {
    if (divElement._hasFrameFocus) {
      //When this element has focus
    } else {
      //When this element doesn't have focus
    }
    //border
    if (borderColorHovered) {
      divElement.style.borderColor = borderColorHovered;
    }
    if (borderStyleHovered) {
      divElement.style.borderStyle = borderStyleHovered;
    }

    //background
    if (backgroundColorHovered) {
      divElement.style.backgroundColor = backgroundColorHovered;
    }

    if (captionColorHovered) {
      //caption
      divElement.style.color = captionColorHovered;
    }
    if (btnImageHovered) {
      divElement.innerHTML = "";
      divElement.appendChild(btnImageHovered);
    }
  };

  divElement.style.textAlign = "center";
  divElement.style.fontSize = height * captionFontRatio + "px";

  divElement.style.lineHeight = height + "px";

  divElement.style.borderWidth = "1px";

  if (borderWidth != null) {
    divElement.style.borderWidth = borderWidth + "px";
  }

  if (backgroundBoxShadow != null) {
    divElement.style.boxShadow = backgroundBoxShadow;
  }

  divElement.style.borderRadius =
    borderRadius + parseInt(divElement.style.borderWidth) + "px";

  var childMode = true;

  if (childMode && btnImageDefault) {
    divElement.innerHTML = "";
    divElement.appendChild(btnImageDefault);
  } else if (childMode && caption) {
    var span = document.createElement("span");
    //span.style.position='absolute';
    span.style.width = "100%";
    span.style.marginTop = captionShiftYpx + "px";
    span.style.display = "inline-block";
    span.style.textAlign = "center";
    span.style.fontFamily = "sans-serif";
    span.appendChild(document.createTextNode(caption));
    divElement.appendChild(span);
  } else if (childMode && fa) {
    var span = document.createElement("span");
    span.style.width = "100%";
    span.style.marginTop = captionShiftYpx + "px";
    span.style.display = "inline-block";
    span.style.textAlign = "center";
    span.style.fontFamily = "sans-serif";
    span.innerHTML = '<i class="' + fa + '"></i>';
    divElement.appendChild(span);
  } else if (!childMode && caption) {
    divElement.style.paddingTop = captionShiftYpx + "px";
    divElement.appendChild(document.createTextNode(caption));
  }

  divElement._handleFocusDrawing();
  return divElement;
};

function CTextButtonAppearance() {
  var crossMark0 = "\u274c";

  this.size = 14;
  this.width = null;
  this.height = null;

  //border
  this.borderRadius = 2;
  this.borderWidth = 0;
  this.borderColorDefault = "#aaaaaa";
  this.borderColorFocused = this.borderColorDefault;
  this.borderColorHovered = null;
  this.borderColorPressed = this.borderColorDefault;

  this.borderStyleDefault = "solid";
  this.borderStyleFocused = this.borderStyleDefault;
  this.borderStyleHovered = null;
  this.borderStylePressed = this.borderStyleDefault;

  this.backgroundBoxShadow = null;

  //background
  this.backgroundColorDefault = "transparent";
  this.backgroundColorFocused = this.backgroundColorDefault;
  this.backgroundColorHovered = null;
  this.backgroundColorPressed = this.backgroundColorDefault;

  //caption
  this.caption = null;
  this.captionColorDefault = "white";
  this.captionColorFocused = this.captionColorDefault;
  this.captionColorHovered = null;
  this.captionColorPressed = this.captionColorDefault;
  this.captionShiftYpx = 0;
  this.captionFontRatio = 1.0;
}

/**
 * end of CDomPartsBuilder class
 */

//+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-

Object.freeze(DEF);


/***/ }),

/***/ "./src/ObjectAssigner.js":
/*!*******************************!*\
  !*** ./src/ObjectAssigner.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {


var _typeof =
    typeof Symbol === "function" && typeof Symbol.iterator === "symbol"
        ? function (obj) {
            return typeof obj;
        }
        : function (obj) {
            return obj &&
            typeof Symbol === "function" &&
            obj.constructor === Symbol &&
            obj !== Symbol.prototype
                ? "symbol"
                : typeof obj;
        };

function _defineProperty(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}

function isObject(item) {
    return (
        item &&
        (typeof item === "undefined" ? "undefined" : _typeof(item)) === "object" &&
        !Array.isArray(item)
    );
}

function objectAssign(target) {
    for (
        var _len = arguments.length,
            sources = Array(_len > 1 ? _len - 1 : 0),
            _key = 1;
        _key < _len;
        _key++
    ) {
        sources[_key - 1] = arguments[_key];
    }

    if (!sources.length) return target;
    var source = sources.shift();

    if (isObject(target) && isObject(source)) {
        for (var key in source) {
            if (isObject(source[key])) {
                if (!target[key]) Object.assign(target, _defineProperty({}, key, {}));
                objectAssign(target[key], source[key]);
            } else {
                Object.assign(target, _defineProperty({}, key, source[key]));
            }
        }
    }
    return objectAssign.apply(undefined, [target].concat(sources));
}



module.exports.objectAssign = objectAssign;

/***/ }),

/***/ "./src/PresetStyleMaterial.css":
/*!*************************************!*\
  !*** ./src/PresetStyleMaterial.css ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!./PresetStyleMaterial.css */ "./node_modules/css-loader/dist/cjs.js!./src/PresetStyleMaterial.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/PresetStyleMaterial.js":
/*!************************************!*\
  !*** ./src/PresetStyleMaterial.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * JSFrame Examples
 *
 * Copyright 2007- Tom Misawa, riversun.org@gmail.com
 * Copyright 2007- web2driver.com
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of
 * this software and associated documentation files (the "Software"), to deal in the
 * Software without restriction, including without limitation the rights to use,
 * copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the
 * Software, and to permit persons to whom the Software is furnished to do so,
 * subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED,
 *  INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A
 * PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
 * COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR
 * IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 *
 */

__webpack_require__(/*! ./PresetStyleMaterial.css */ "./src/PresetStyleMaterial.css");
var ObjectAssigner=__webpack_require__(/*! ./ObjectAssigner.js */ "./src/ObjectAssigner.js");


function getStyle(fApr, userParam) {

    var srcParam = {
        border: {
            color: 'transparent',
            width: 0,
            radius: 6,

        },
        control: {
            maximizeWithoutTitleBar: false,
            restoreKey: 'Escape',
        },
        titleBar: {
            color: 'white',
            background: 'black',
            leftMargin: 20,
            height: 30,
            fontSize: 12,
            buttonWidth: 36,
            buttonHeight: 16,
            buttonColor: 'white',
            buttons: [
                {
                    fa: 'fas fa-times',
                    name: 'closeButton',
                    visible: true
                },
                {
                    fa: 'far fa-window-maximize',
                    name: 'maximizeButton',
                    visible: true
                },
                {
                    fa: 'far fa-window-restore',
                    name: 'restoreButton',
                    visible: false
                },
                {
                    fa: 'far fa-window-minimize',
                    name: 'minimizeButton',
                    visible: true
                },
                {
                    fa: 'fas fa-caret-up',
                    name: 'deminimizeButton',
                    visible: false
                }

            ],
            buttonsOnLeft: [],
        },


    };

    var param = srcParam;

    if (userParam) {
        //param=Object.assign({},srcParam, userParam);
        ObjectAssigner.objectAssign(srcParam, userParam);

    }


    fApr.showTitleBar = true;
    fApr.showCloseButton = true;

    fApr.titleBarCaptionFontSize = param.titleBar.fontSize + 'px';//'12px';
    fApr.titleBarCaptionFontWeight = 'normal';
    fApr.titleBarCaptionLeftMargin = param.titleBar.leftMargin + 'px';
    fApr.titleBarCaptionColorDefault = param.titleBar.color;
    fApr.titleBarCaptionColorFocused = param.titleBar.color;
    fApr.titleBarCaptionTextShadow = null;
    fApr.titleBarCaptionTextAlign = 'left';

    fApr.titleBarHeight = param.titleBar.height + 'px';// '50px';

    fApr.titleBarColorDefault = param.titleBar.background;
    fApr.titleBarColorFocused = param.titleBar.background;

    fApr.titleBarBorderBottomDefault = 'solid 0px #aaaaaa';
    fApr.titleBarBorderBottomFocused = 'solid 0px #1883d7';

    fApr.frameBorderRadius = param.border.radius + 'px';// '6px';

    //border width
    fApr.frameBorderWidthDefault = param.border.width + 'px';
    fApr.frameBorderWidthFocused = param.border.width + 'px';


    //border color
    fApr.frameBorderColorDefault = param.border.color;
    fApr.frameBorderColorFocused = param.border.color;

    fApr.frameBorderStyle = 'solid';

    //window shadow
    fApr.frameBoxShadow = param.border.shadow;//'2px 2px 10px  rgba(0, 0, 0, 0.5)';

    fApr.frameBackgroundColor = 'transparent';

    fApr.frameComponents = new Array();

    fApr.frameHeightAdjust = 0;//default is 1

    fApr.getTitleBarStyle = function () {

        if (fApr.focusedFrameOnly) {
            return {
                titleBarClassNameDefault: ' ',
                titleBarClassNameFocused: ' '
            };
        } else {
            return {
                titleBarClassNameDefault: ' ',
                titleBarClassNameFocused: ' '
            };
        }
    };

    fApr.onInitialize = function () {

        alignButtons(fApr, param, false);
        alignButtons(fApr, param, true);

    };

    //

    return fApr;
}

function alignButtons(fApr, param, fromLeft) {
    var partsBuilder = fApr.getPartsBuilder();
    var rbtX = 0;
    var buttons;

    if (fromLeft) {
        buttons = param.titleBar.buttonsOnLeft;

    } else {
        buttons = param.titleBar.buttons;
    }

    for (var rbtIdx in buttons) {

        var rbtSrc = buttons[rbtIdx];

        var rbt = partsBuilder.buildTextButtonAppearance();

        //caption
        rbt.fa = rbtSrc.fa;

        rbt.width = param.titleBar.buttonWidth;
        rbt.height = param.titleBar.buttonHeight;

        rbt.borderRadius = 0;
        rbt.borderWidth = 0;

        rbt.borderColorDefault = '#c6c6c6';
        rbt.borderColorFocused = '#fc615c';
        rbt.borderColorHovered = rbt.borderColorFocused;
        rbt.borderColorPressed = '#e64842';

        rbt.borderStyleDefault = 'solid';
        rbt.borderStyleFocused = rbt.borderStyleDefault;
        rbt.borderStyleHovered = rbt.borderStyleDefault;
        rbt.borderStylePressed = rbt.borderStyleDefault;

        //background
        rbt.backgroundColorDefault = 'transparent';
        rbt.backgroundColorFocused = 'transparent';
        rbt.backgroundColorHovered = 'transparent';
        rbt.backgroundColorPressed = 'transparent';

        var colors = getSubColor(param.titleBar.buttonColor);
        rbt.captionColorDefault = param.titleBar.buttonColor;
        rbt.captionColorFocused = param.titleBar.buttonColor;
        rbt.captionColorHovered = colors.hovered;
        rbt.captionColorPressed = colors.pressed;

        rbt.captionShiftYpx = 0;
        rbt.captionFontRatio = 1;

        var rbtEle = partsBuilder.buildTextButton(rbt);

        if (rbtSrc.visible) {
            rbtEle.style.display = 'flex';
        } else {
            if (fromLeft) {
                rbtX -= param.titleBar.buttonWidth;
            } else {
                rbtX += param.titleBar.buttonWidth;
            }
            rbtEle.style.display = 'none';
        }

        var titleBarHeight = parseInt(fApr.titleBarHeight);

        var rbtEleLeft = rbtX;

        //compute vertical center

        var rbtEleTop = -titleBarHeight + (titleBarHeight - rbt.height) / 2;

        var rbtEleAlign;
        if (fromLeft) {
            rbtEleAlign = 'LEFT_TOP';
        } else {
            rbtEleAlign = 'RIGHT_TOP';
        }

        var ndiv;
        if (rbtSrc.childMenuHTML) {

            ndiv = document.createElement('div');
            ndiv.id = rbtSrc.name + '_child_menu';

            ndiv.innerHTML = rbtSrc.childMenuHTML;
            ndiv.style.position = 'absolute';
            ndiv.style.width = (rbtSrc.childMenuWidth ? rbtSrc.childMenuWidth : 200) + 'px';
            ndiv.style.top = (parseInt(rbtEle.style.top, 10) + parseInt(rbtEle.style.height, 10) / 2 + titleBarHeight / 2) + 'px';
            ndiv.style.left = rbtEle.style.left;
            ndiv.style.display = 'none';

            rbtEle.appendChild(ndiv);
        }


        fApr.addFrameComponent(rbtSrc.name, rbtEle, rbtEleLeft, rbtEleTop, rbtEleAlign, {childMenu: ndiv});

        if (fromLeft) {
            rbtX += param.titleBar.buttonWidth;
        } else {
            rbtX += -param.titleBar.buttonWidth;
        }

    }


}


function getSubColor(color) {

    var canvas = document.createElement('canvas');
    canvas.height = 1;
    canvas.width = 1;
    var ctx = canvas.getContext('2d');
    ctx.fillStyle = color;
    ctx.fillRect(0, 0, 1, 1);
    var colorData = ctx.getImageData(0, 0, 1, 1).data;

    var r = colorData[0];
    var g = colorData[1];
    var b = colorData[2];
    var alpha = colorData[3] / 255;
    var alpha2 = alpha * 0.85;
    var alpha3 = alpha * 0.75;

    var ret = 'rgb(' + r + ',' + g + ',' + b + ',' + alpha2 + ')';
    var ret2 = 'rgb(' + r + ',' + g + ',' + b + ',' + alpha2 + ')';
    var ret3 = 'rgb(' + r + ',' + g + ',' + b + ',' + alpha3 + ')';
    return {src: ret, hovered: ret2, pressed: ret3};
}

//
// function isObject(item) {
//     return (item && typeof item === 'object' && !Array.isArray(item));
// }
//
// function objectAssign(target, ...sources) {
//     if (!sources.length) return target;
//     const source = sources.shift();
//
//     if (isObject(target) && isObject(source)) {
//         for (const key in source) {
//             if (isObject(source[key])) {
//                 if (!target[key]) Object.assign(target, {[key]: {}});
//                 objectAssign(target[key], source[key]);
//             } else {
//                 Object.assign(target, {[key]: source[key]});
//             }
//         }
//     }
//     return objectAssign(target, ...sources);
// }

//
// var _typeof =
//     typeof Symbol === "function" && typeof Symbol.iterator === "symbol"
//         ? function (obj) {
//             return typeof obj;
//         }
//         : function (obj) {
//             return obj &&
//             typeof Symbol === "function" &&
//             obj.constructor === Symbol &&
//             obj !== Symbol.prototype
//                 ? "symbol"
//                 : typeof obj;
//         };
//
// function _defineProperty(obj, key, value) {
//     if (key in obj) {
//         Object.defineProperty(obj, key, {
//             value: value,
//             enumerable: true,
//             configurable: true,
//             writable: true
//         });
//     } else {
//         obj[key] = value;
//     }
//     return obj;
// }
//
// function isObject(item) {
//     return (
//         item &&
//         (typeof item === "undefined" ? "undefined" : _typeof(item)) === "object" &&
//         !Array.isArray(item)
//     );
// }
//
// function objectAssign(target) {
//     for (
//         var _len = arguments.length,
//             sources = Array(_len > 1 ? _len - 1 : 0),
//             _key = 1;
//         _key < _len;
//         _key++
//     ) {
//         sources[_key - 1] = arguments[_key];
//     }
//
//     if (!sources.length) return target;
//     var source = sources.shift();
//
//     if (isObject(target) && isObject(source)) {
//         for (var key in source) {
//             if (isObject(source[key])) {
//                 if (!target[key]) Object.assign(target, _defineProperty({}, key, {}));
//                 objectAssign(target[key], source[key]);
//             } else {
//                 Object.assign(target, _defineProperty({}, key, source[key]));
//             }
//         }
//     }
//     return objectAssign.apply(undefined, [target].concat(sources));
// }
//

module.exports.getStyle = getStyle;

/***/ }),

/***/ "./src/PresetStylePopup.css":
/*!**********************************!*\
  !*** ./src/PresetStylePopup.css ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!./PresetStylePopup.css */ "./node_modules/css-loader/dist/cjs.js!./src/PresetStylePopup.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/PresetStylePopup.js":
/*!*********************************!*\
  !*** ./src/PresetStylePopup.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * JSFrame Examples
 *
 * Copyright 2007- Tom Misawa, riversun.org@gmail.com
 * Copyright 2007- web2driver.com
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of
 * this software and associated documentation files (the "Software"), to deal in the
 * Software without restriction, including without limitation the rights to use,
 * copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the
 * Software, and to permit persons to whom the Software is furnished to do so,
 * subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED,
 *  INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A
 * PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
 * COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR
 * IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 *
 */


__webpack_require__(/*! ./PresetStylePopup.css */ "./src/PresetStylePopup.css");
function getStyle(fApr) {


    fApr.showTitleBar = false;
    fApr.showCloseButton = true;


    fApr.titleBarCaptionFontSize = '12px';
    fApr.titleBarCaptionFontWeight = 'normal';
    fApr.titleBarCaptionLeftMargin = '10px';
    fApr.titleBarCaptionColorDefault = '#4d494d';
    fApr.titleBarCaptionColorFocused = '#4d494d';

    fApr.titleBarHeight = '5px';

    fApr.titleBarColorDefault = 'white';
    fApr.titleBarColorFocused = 'white';

    fApr.titleBarBorderBottomDefault = null;
    fApr.titleBarBorderBottomFocused = null;

    fApr.frameBorderRadius = '6px';

    //border width
    fApr.frameBorderWidthDefault = '1px';
    fApr.frameBorderWidthFocused = '1px';


    //border color
    fApr.frameBorderColorDefault = '#aaaaaa';
    fApr.frameBorderColorFocused = '#aaaaaa';

    fApr.frameBorderStyle = 'solid';

    //window shadow
    fApr.frameBoxShadow = '2px 2px 5px  rgba(0, 0, 0, 0.5)';

    fApr.frameBackgroundColor = 'white';


    fApr.frameComponents = new Array();

    //adjustment value
    fApr.frameHeightAdjust = 2;//default is 1
    fApr.getTitleBarStyle = function () {

        if (fApr.focusedFrameOnly) {
            return {
                titleBarClassNameDefault: 'jsframe-preset-style-popup-focused',
                titleBarClassNameFocused: 'jsframe-preset-style-popup-focused'
            };
        } else {
            return {
                titleBarClassNameDefault: 'jsframe-preset-style-popup-default',
                titleBarClassNameFocused: 'jsframe-preset-style-popup-focused'
            };
        }
    };
    fApr.onInitialize = function () {


        var partsBuilder = fApr.getPartsBuilder();


        //configure close button appearance[begin]//////////////

        var crossMark0 = '\u274c';
        var crossMark1 = '\u2716';
        var crossMark2 = '\u274e';
        var CROSS_MARK = crossMark1;


        var cbApr = partsBuilder.buildTextButtonAppearance();

        cbApr.width = 20;
        cbApr.height = 20;


        cbApr.borderRadius = 10;
        cbApr.borderWidth = 1;

        cbApr.borderColorDefault = '#cccccc';
        cbApr.borderColorFocused = '#cccccc';
        cbApr.borderColorHovered = '#dddddd';
        cbApr.borderColorPressed = '#eeeeee';

        cbApr.borderStyleDefault = 'solid';
        cbApr.borderStyleFocused = cbApr.borderStyleDefault;
        cbApr.borderStyleHovered = cbApr.borderStyleDefault;
        cbApr.borderStylePressed = cbApr.borderStyleDefault;

        //background
        cbApr.backgroundColorDefault = 'white';
        cbApr.backgroundColorFocused = 'white';
        cbApr.backgroundColorHovered = '#eeeeee';
        cbApr.backgroundColorPressed = '#dddddd';

        cbApr.backgroundBoxShadow = '2px 2px 5px  rgba(0, 0, 0, 0.5)';

        //caption
        cbApr.caption = CROSS_MARK;

        cbApr.captionColorDefault = 'black';
        cbApr.captionColorFocused = 'black';
        cbApr.captionColorHovered = 'white';
        cbApr.captionColorPressed = 'white';

        cbApr.captionShiftYpx = 1;
        cbApr.captionFontRatio = 0.6;

        var closeBtnEle = partsBuilder.buildTextButton(cbApr);
        var eleLeft = 10;
        var eleTop = -6 - parseInt(fApr.titleBarHeight);
        var eleAlign = 'RIGHT_TOP';

        // 'closeButton' is a special name
        fApr.addFrameComponent('closeButton', closeBtnEle, eleLeft, eleTop, eleAlign);

        //configure close button appearance[end]//////////////


    };
    //

    return fApr;

    return fApr;
}


module.exports.getStyle = getStyle;

/***/ }),

/***/ "./src/PresetStyleRedstone.css":
/*!*************************************!*\
  !*** ./src/PresetStyleRedstone.css ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!./PresetStyleRedstone.css */ "./node_modules/css-loader/dist/cjs.js!./src/PresetStyleRedstone.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/PresetStyleRedstone.js":
/*!************************************!*\
  !*** ./src/PresetStyleRedstone.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * JSFrame Examples
 *
 * Copyright 2007- Tom Misawa, riversun.org@gmail.com
 * Copyright 2007- web2driver.com
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of
 * this software and associated documentation files (the "Software"), to deal in the
 * Software without restriction, including without limitation the rights to use,
 * copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the
 * Software, and to permit persons to whom the Software is furnished to do so,
 * subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED,
 *  INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A
 * PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
 * COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR
 * IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 *
 */

__webpack_require__(/*! ./PresetStyleRedstone.css */ "./src/PresetStyleRedstone.css");

function getStyle(fApr) {

    fApr.showTitleBar = true;
    fApr.showCloseButton = true;

    fApr.titleBarCaptionFontSize = '12px';
    fApr.titleBarCaptionFontWeight = 'normal';
    fApr.titleBarCaptionLeftMargin = '10px';
    fApr.titleBarCaptionColorDefault = '#9b9a9b';
    fApr.titleBarCaptionColorFocused = '#4d494d';

    fApr.titleBarHeight = '30px';

    fApr.titleBarColorDefault = 'white';
    fApr.titleBarColorFocused = 'white';

    fApr.titleBarBorderBottomDefault = 'solid 1px #aaaaaa';
    fApr.titleBarBorderBottomFocused = 'solid 1px #1883d7';

    fApr.frameBorderRadius = '0px';

    //border width
    fApr.frameBorderWidthDefault = '1px';
    fApr.frameBorderWidthFocused = '1px';


    //border color
    fApr.frameBorderColorDefault = '#aaaaaa';
    fApr.frameBorderColorFocused = '#1883d7';

    fApr.frameBorderStyle = 'solid';

    //window shadow
    fApr.frameBoxShadow = null;

    fApr.frameBackgroundColor = 'transparent';


    fApr.frameComponents = new Array();

    //adjustment value
    fApr.frameHeightAdjust = 0;//default is 1

    fApr.getTitleBarStyle = function () {

        if (fApr.focusedFrameOnly) {
            return {
                titleBarClassNameDefault: 'jsframe-preset-style-redstone-focused',
                titleBarClassNameFocused: 'jsframe-preset-style-redstone-focused'
            };
        } else {
            return {
                titleBarClassNameDefault: 'jsframe-preset-style-redstone-default',
                titleBarClassNameFocused: 'jsframe-preset-style-redstone-focused'
            };
        }
    };

    fApr.onInitialize = function () {


        var partsBuilder = fApr.getPartsBuilder();


        {
            //configure close button appearance[begin]//////////////

            var CROSS_MARK = '\u2573';

            var cbApr = partsBuilder.buildTextButtonAppearance();

            cbApr.width = 45;
            cbApr.height = 28;


            cbApr.borderRadius = 0;
            cbApr.borderWidth = 0;

            cbApr.borderColorDefault = '#c6c6c6';
            cbApr.borderColorFocused = '#fc615c';
            cbApr.borderColorHovered = cbApr.borderColorFocused;
            cbApr.borderColorPressed = '#e64842';

            cbApr.borderStyleDefault = 'solid';
            cbApr.borderStyleFocused = cbApr.borderStyleDefault;
            cbApr.borderStyleHovered = cbApr.borderStyleDefault;
            cbApr.borderStylePressed = cbApr.borderStyleDefault;

            //background
            cbApr.backgroundColorDefault = 'white';
            cbApr.backgroundColorFocused = 'white';
            cbApr.backgroundColorHovered = '#e81123';
            cbApr.backgroundColorPressed = '#f1707a';

            //caption
            cbApr.caption = CROSS_MARK;

            cbApr.captionColorDefault = '#9b9a9b';
            cbApr.captionColorFocused = 'black';
            cbApr.captionColorHovered = 'white';
            cbApr.captionColorPressed = 'white';

            cbApr.captionShiftYpx = 1;
            cbApr.captionFontRatio = 0.6;

            var closeBtnEle = partsBuilder.buildTextButton(cbApr);
            var eleLeft = 0;
            var eleTop = -parseInt(fApr.titleBarHeight);
            var eleAlign = 'RIGHT_TOP';

            // 'closeButton' is a special name
            fApr.addFrameComponent('closeButton', closeBtnEle, eleLeft, eleTop, eleAlign);

            //configure close button appearance[end]//////////////
        }

        {
            //configure close button appearance[begin]//////////////

            var MAXIMIZE_MARK = '\u2610';

            var maxApr = partsBuilder.buildTextButtonAppearance();

            maxApr.width = 45;
            maxApr.height = 28;


            maxApr.borderRadius = 0;
            maxApr.borderWidth = 0;

            maxApr.borderColorDefault = '#c6c6c6';
            maxApr.borderColorFocused = '#fc615c';
            maxApr.borderColorHovered = maxApr.borderColorFocused;
            maxApr.borderColorPressed = '#e64842';

            maxApr.borderStyleDefault = 'solid';
            maxApr.borderStyleFocused = maxApr.borderStyleDefault;
            maxApr.borderStyleHovered = maxApr.borderStyleDefault;
            maxApr.borderStylePressed = maxApr.borderStyleDefault;

            //background
            maxApr.backgroundColorDefault = 'white';
            maxApr.backgroundColorFocused = 'white';
            maxApr.backgroundColorHovered = '#e5e5e5';
            maxApr.backgroundColorPressed = '#cccccc';

            //caption
            maxApr.caption = MAXIMIZE_MARK;

            maxApr.captionColorDefault = '#9b9a9b';
            maxApr.captionColorFocused = 'black';
            maxApr.captionColorHovered = 'black';
            maxApr.captionColorPressed = 'black';

            maxApr.captionShiftYpx = 1;
            maxApr.captionFontRatio = 0.55;

            var maxBtnEle = partsBuilder.buildTextButton(maxApr);
            var eleLeft = -46;
            var eleTop = -parseInt(fApr.titleBarHeight);
            var eleAlign = 'RIGHT_TOP';

            // 'closeButton' is a special name
            fApr.addFrameComponent('maximizeButton', maxBtnEle, eleLeft, eleTop, eleAlign);

            //configure close button appearance[end]//////////////
        }

        {
            //configure close button appearance[begin]//////////////

            var MINIMIZE_MARK = '\uff3f';

            var minApr = partsBuilder.buildTextButtonAppearance();

            minApr.width = 45;
            minApr.height = 28;


            minApr.borderRadius = 0;
            minApr.borderWidth = 0;

            minApr.borderColorDefault = '#c6c6c6';
            minApr.borderColorFocused = '#fc615c';
            minApr.borderColorHovered = minApr.borderColorFocused;
            minApr.borderColorPressed = '#e64842';

            minApr.borderStyleDefault = 'solid';
            minApr.borderStyleFocused = minApr.borderStyleDefault;
            minApr.borderStyleHovered = minApr.borderStyleDefault;
            minApr.borderStylePressed = minApr.borderStyleDefault;

            //background
            minApr.backgroundColorDefault = 'white';
            minApr.backgroundColorFocused = 'white';
            minApr.backgroundColorHovered = '#e5e5e5';
            minApr.backgroundColorPressed = '#cccccc';

            //caption
            minApr.caption = MINIMIZE_MARK;

            minApr.captionColorDefault = '#9b9a9b';
            minApr.captionColorFocused = 'black';
            minApr.captionColorHovered = 'black';
            minApr.captionColorPressed = 'black';

            minApr.captionShiftYpx = -2;
            minApr.captionFontRatio = 0.3;

            var minBtnEle = partsBuilder.buildTextButton(minApr);
            var eleLeft = -92;
            var eleTop = -parseInt(fApr.titleBarHeight);
            var eleAlign = 'RIGHT_TOP';

            // 'closeButton' is a special name
            fApr.addFrameComponent('minimizeButton', minBtnEle, eleLeft, eleTop, eleAlign);

            //configure close button appearance[end]//////////////
        }
        {
            //configure close button appearance[begin]//////////////


            var deminApr = partsBuilder.buildTextButtonAppearance();

            deminApr.width = 45;
            deminApr.height = 28;


            deminApr.borderRadius = 0;
            deminApr.borderWidth = 0;

            deminApr.borderColorDefault = '#c6c6c6';
            deminApr.borderColorFocused = '#fc615c';
            deminApr.borderColorHovered = deminApr.borderColorFocused;
            deminApr.borderColorPressed = '#e64842';

            deminApr.borderStyleDefault = 'solid';
            deminApr.borderStyleFocused = deminApr.borderStyleDefault;
            deminApr.borderStyleHovered = deminApr.borderStyleDefault;
            deminApr.borderStylePressed = deminApr.borderStyleDefault;

            //background
            deminApr.backgroundColorDefault = 'white';
            deminApr.backgroundColorFocused = 'white';
            deminApr.backgroundColorHovered = '#e5e5e5';
            deminApr.backgroundColorPressed = '#cccccc';

            //caption
            deminApr.caption ='\u25A3';

            deminApr.captionColorDefault = '#9b9a9b';
            deminApr.captionColorFocused = 'black';
            deminApr.captionColorHovered = 'black';
            deminApr.captionColorPressed = 'black';

            deminApr.captionShiftYpx = 1;
            deminApr.captionFontRatio = 0.6;

            var deminBtnEle = partsBuilder.buildTextButton(deminApr);
            var eleLeft = -92;
            var eleTop = -parseInt(fApr.titleBarHeight);
            var eleAlign = 'RIGHT_TOP';

            deminBtnEle.style.display = 'none';

            // 'closeButton' is a special name
            fApr.addFrameComponent('deminimizeButton', deminBtnEle, eleLeft, eleTop, eleAlign);

            //configure close button appearance[end]//////////////
        }
        {
            //configure close button appearance[begin]//////////////

            var RESTORE_MARK = '\u274F';

            var rbApr = partsBuilder.buildTextButtonAppearance();

            rbApr.width = 45;
            rbApr.height = 28;


            rbApr.borderRadius = 0;
            rbApr.borderWidth = 0;

            rbApr.borderColorDefault = '#c6c6c6';
            rbApr.borderColorFocused = '#fc615c';
            rbApr.borderColorHovered = rbApr.borderColorFocused;
            rbApr.borderColorPressed = '#e64842';

            rbApr.borderStyleDefault = 'solid';
            rbApr.borderStyleFocused = rbApr.borderStyleDefault;
            rbApr.borderStyleHovered = rbApr.borderStyleDefault;
            rbApr.borderStylePressed = rbApr.borderStyleDefault;

            //background
            rbApr.backgroundColorDefault = 'white';
            rbApr.backgroundColorFocused = 'white';
            rbApr.backgroundColorHovered = '#e5e5e5';
            rbApr.backgroundColorPressed = '#cccccc';

            //caption
            rbApr.caption = RESTORE_MARK;

            rbApr.captionColorDefault = '#9b9a9b';
            rbApr.captionColorFocused = 'black';
            rbApr.captionColorHovered = 'black';
            rbApr.captionColorPressed = 'black';

            rbApr.captionShiftYpx = 1;
            rbApr.captionFontRatio = 0.55;

            var restoreBtnEle = partsBuilder.buildTextButton(rbApr);
            var eleLeft = -46;
            var eleTop = -parseInt(fApr.titleBarHeight);
            var eleAlign = 'RIGHT_TOP';

            restoreBtnEle.style.display = 'none';

            // 'closeButton' is a special name
            fApr.addFrameComponent('restoreButton', restoreBtnEle, eleLeft, eleTop, eleAlign);

            //configure close button appearance[end]//////////////
        }


    };
    //

    return fApr;
}


module.exports.getStyle = getStyle;

/***/ }),

/***/ "./src/PresetStyleToast.js":
/*!*********************************!*\
  !*** ./src/PresetStyleToast.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * JSFrame Examples
 *
 * Copyright 2007- Tom Misawa, riversun.org@gmail.com
 * Copyright 2007- web2driver.com
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of
 * this software and associated documentation files (the "Software"), to deal in the
 * Software without restriction, including without limitation the rights to use,
 * copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the
 * Software, and to permit persons to whom the Software is furnished to do so,
 * subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED,
 *  INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A
 * PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
 * COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR
 * IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 *
 */



function getStyle(fApr) {


    fApr.showTitleBar = false;
    fApr.showCloseButton = true;


    fApr.titleBarCaptionFontSize = '0px';
    fApr.titleBarCaptionFontWeight = 'normal';
    fApr.titleBarCaptionLeftMargin = '0px';
    fApr.titleBarCaptionColorDefault = 'transparent';
    fApr.titleBarCaptionColorFocused = 'transparent';

    fApr.titleBarHeight = '0px';

    fApr.titleBarColorDefault = 'transparent';
    fApr.titleBarColorFocused = 'transparent';

    fApr.titleBarBorderBottomDefault = null;
    fApr.titleBarBorderBottomFocused = null;

    fApr.frameBorderRadius = '10px';

    //border width
    fApr.frameBorderWidthDefault = '0px';
    fApr.frameBorderWidthFocused = '0px';


    //border color
    fApr.frameBorderColorDefault = 'transparent';
    fApr.frameBorderColorFocused = 'transparent';
    fApr.frameBorderStyle = 'solid';
    fApr.frameBoxShadow = '2px 2px 15px  rgba(0, 0, 0, 0.5)';
    fApr.frameBackgroundColor = 'transparent';


    fApr.frameComponents = [];
    fApr.frameHeightAdjust = 2;//default is 1

    fApr.captionClor='darkgray';

    fApr.pullUpDisabled = false;

    fApr.getTitleBarStyle = function () {

        if (fApr.focusedFrameOnly) {
            return {
                titleBarClassNameDefault: ' ',
                titleBarClassNameFocused: ' '
            };
        } else {
            return {
                titleBarClassNameDefault: ' ',
                titleBarClassNameFocused: ' '
            };
        }
    };


    fApr.onInitialize = function () {


        var partsBuilder = fApr.getPartsBuilder();


        //configure close button appearance[begin]//////////////

        var crossMark0 = '\u274c';
        var crossMark1 = '\u2716';
        var crossMark2 = '\u274e';
        var CROSS_MARK = crossMark1;


        var cbApr = partsBuilder.buildTextButtonAppearance();

        cbApr.width = 20;
        cbApr.height = 20;


        cbApr.borderRadius = 10;
        cbApr.borderWidth = 0;

        cbApr.borderColorDefault = '#cccccc';
        cbApr.borderColorFocused = '#cccccc';
        cbApr.borderColorHovered = '#dddddd';
        cbApr.borderColorPressed = '#eeeeee';

        cbApr.borderStyleDefault = 'solid';
        cbApr.borderStyleFocused = cbApr.borderStyleDefault;
        cbApr.borderStyleHovered = cbApr.borderStyleDefault;
        cbApr.borderStylePressed = cbApr.borderStyleDefault;

        //background
        cbApr.backgroundColorDefault = 'transparent';
        cbApr.backgroundColorFocused = 'transparent';
        cbApr.backgroundColorHovered = 'transparent';
        cbApr.backgroundColorPressed = 'transparent';

        cbApr.backgroundBoxShadow = null;// '2px 2px 5px  rgba(0, 0, 0, 0.5)';

        //caption
        cbApr.caption = CROSS_MARK;

        cbApr.captionColorDefault =  fApr.captionClor;
        cbApr.captionColorFocused = fApr.captionClor;
        cbApr.captionColorHovered =  fApr.captionClor;
        cbApr.captionColorPressed =  fApr.captionClor;

        cbApr.captionShiftYpx = 1;
        cbApr.captionFontRatio = 0.6;

        var closeBtnEle = partsBuilder.buildTextButton(cbApr);
        var eleLeft = -6;
        var eleTop = 3;
        var eleAlign = 'RIGHT_TOP';

        // 'closeButton' is a special name
        fApr.addFrameComponent('closeButton', closeBtnEle, eleLeft, eleTop, eleAlign);

        //configure close button appearance[end]//////////////


    };
    //


    return fApr;
}


module.exports.getStyle = getStyle;

/***/ }),

/***/ "./src/PresetStyleYosemite.css":
/*!*************************************!*\
  !*** ./src/PresetStyleYosemite.css ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!./PresetStyleYosemite.css */ "./node_modules/css-loader/dist/cjs.js!./src/PresetStyleYosemite.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/PresetStyleYosemite.js":
/*!************************************!*\
  !*** ./src/PresetStyleYosemite.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * JSFrame Examples
 *
 * Copyright 2007- Tom Misawa, riversun.org@gmail.com
 * Copyright 2007- web2driver.com
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of
 * this software and associated documentation files (the "Software"), to deal in the
 * Software without restriction, including without limitation the rights to use,
 * copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the
 * Software, and to permit persons to whom the Software is furnished to do so,
 * subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED,
 *  INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A
 * PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
 * COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR
 * IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 *
 */

__webpack_require__(/*! ./PresetStyleYosemite.css */ "./src/PresetStyleYosemite.css");

function getStyle(fApr) {

    fApr.showTitleBar = true;
    fApr.showCloseButton = true;

    fApr.titleBarCaptionFontSize = '11px';
    fApr.titleBarCaptionFontWeight = 'normal';
    fApr.titleBarCaptionLeftMargin = null;
    fApr.titleBarCaptionColorDefault = '#4d494d';
    fApr.titleBarCaptionColorFocused = '#4d494d';

    fApr.titleBarHeight = '26px';

    fApr.titleBarColorDefault = '#f4f4f4';
    fApr.titleBarColorFocused = '#f4f4f4';

    fApr.titleBarBorderBottomDefault = '1px solid #b1aeb1';
    fApr.titleBarBorderBottomFocused = fApr.titleBarBorderBottomDefault;

    fApr.frameBorderRadius = '6px';

    //border width
    fApr.frameBorderWidthDefault = '1px';
    fApr.frameBorderWidthFocused = '1px';


    //border color
    fApr.frameBorderColorDefault = '#acacac';
    fApr.frameBorderColorFocused = '#acacac';

    fApr.frameBorderStyle = 'solid';

    //window shadow
    fApr.frameBoxShadow = '0px 0px 20px rgba(0, 0, 0, 0.3)';

    fApr.frameBackgroundColor = 'transparent';


    fApr.frameComponents = new Array();

    fApr.getTitleBarStyle = function () {

        if (fApr.focusedFrameOnly) {
            return {
                titleBarClassNameDefault: 'jsframe-preset-style-yosemite-focused',
                titleBarClassNameFocused: 'jsframe-preset-style-yosemite-focused'
            };
        } else {
            return {
                titleBarClassNameDefault: 'jsframe-preset-style-yosemite-default',
                titleBarClassNameFocused: 'jsframe-preset-style-yosemite-focused'
            };
        }
    };

    fApr.onInitialize = function () {

        var partsBuilder = fApr.getPartsBuilder();

        var img_data_close_hovered = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAFdJREFUeNpi/P//PwNeAFKgLCF6AIjnwMRAbJAYSI4FKnYHiJOBgjA1yUA8F24Ckq7/UDwHJsfEQACwwHSjGIuwLgXmBhWQ5N0Xr1OgGmBiDIyEvAkQYAB60iRIRtfWzQAAAABJRU5ErkJggg==';
        var img_data_maximize_hovered = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAADxJREFUeNpiYEACyhKiU0AYWYyJARX4QDFOBRiAEWokTJc0lH4KpbcQNIEBzZEPQJgkN7Cg8begKwAIMAC1EQhm4CX95QAAAABJRU5ErkJggg==';
        var img_data_minimize_hovered = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAChJREFUeNpi/P//PwM+wMRAABBUwKIiKTYFSPvgkN9C0ARG2jsSIMAAWWAH8lrycVkAAAAASUVORK5CYII=';
        var img_data_1dot_transparent = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAABBJREFUeNpi+P//PwNAgAEACPwC/tuiTRYAAAAASUVORK5CYII=';
        var img_style = 'margin:0px;padding:0px;width:6px;height:6px';

        var imageMaximize = document.createElement('img');
        imageMaximize.src = img_data_maximize_hovered;
        imageMaximize.setAttribute('style', img_style);

        var imageMaximize2 = document.createElement('img');
        imageMaximize2.src = img_data_maximize_hovered;
        imageMaximize2.setAttribute('style', img_style);

        var imageMinimize = document.createElement('img');
        imageMinimize.src = img_data_minimize_hovered;
        imageMinimize.setAttribute('style', img_style);

        var imageClose = document.createElement('img');
        imageClose.src = img_data_close_hovered;
        imageClose.setAttribute('style', img_style);


        var imgTransparent = document.createElement('img');
        imgTransparent.src = img_data_1dot_transparent;
        imgTransparent.setAttribute('style', 'margin:0px;padding:0px;width:6px;height:6px');

        {
            //configure close button appearance[begin]//////////////


            var cbApr = partsBuilder.buildTextButtonAppearance();

            cbApr.size = 8;

            cbApr.borderRadius = 4;
            cbApr.borderWidth = 1;

            cbApr.borderColorDefault = '#c6c6c6';
            cbApr.borderColorFocused = '#fc615c';
            cbApr.borderColorHovered = cbApr.borderColorFocused;
            cbApr.borderColorPressed = '#e64842';

            cbApr.borderStyleDefault = 'solid';
            cbApr.borderStyleFocused = cbApr.borderStyleDefault;
            cbApr.borderStyleHovered = cbApr.borderStyleDefault;
            cbApr.borderStylePressed = cbApr.borderStyleDefault;

            //background
            cbApr.backgroundColorDefault = '#d0d0d0';
            cbApr.backgroundColorFocused = '#fc615c';
            cbApr.backgroundColorHovered = cbApr.backgroundColorFocused;
            cbApr.backgroundColorPressed = cbApr.backgroundColorDefault;

            cbApr.imageDefault = imgTransparent;
            cbApr.imageHovered = imageClose;
            cbApr.imagePressed = imageClose;
            cbApr.imageFocused = imgTransparent;

            var closeBtnEle = partsBuilder.buildButton(cbApr);
            var eleLeft = 8;
            var eleTop = -18;
            var eleAlign = 'LEFT_TOP';

            // 'closeButton' is a special name
            fApr.addFrameComponent('closeButton', closeBtnEle, eleLeft, eleTop, eleAlign);

            //configure close button appearance[end]//////////////
        }

        {
            //configure minimize button appearance[begin]//////////////
            //const HYPHEN = '\u2013';

            var mbApr = partsBuilder.buildTextButtonAppearance();


            mbApr.size = 8;

            mbApr.borderRadius = 4;
            mbApr.borderWidth = 1;

            mbApr.borderColorDefault = '#c6c6c6';
            mbApr.borderColorFocused = '#fdbe40';
            mbApr.borderColorHovered = mbApr.borderColorFocused;
            mbApr.borderColorPressed = '#e1a12d';

            mbApr.borderStyleDefault = 'solid';
            mbApr.borderStyleFocused = mbApr.borderStyleDefault;
            mbApr.borderStyleHovered = mbApr.borderStyleDefault;
            mbApr.borderStylePressed = mbApr.borderStyleDefault;

            //background
            mbApr.backgroundColorDefault = '#d0d0d0';
            mbApr.backgroundColorFocused = '#fdbe40';
            mbApr.backgroundColorHovered = mbApr.backgroundColorFocused;
            mbApr.backgroundColorPressed = mbApr.backgroundColorDefault;

            mbApr.imageDefault = imgTransparent;
            mbApr.imageHovered = imageMinimize;
            mbApr.imagePressed = imageMinimize;
            mbApr.imageFocused = imgTransparent;

            var minimizeBtnEle = partsBuilder.buildButton(mbApr);
            var deminimizeBtnEle = partsBuilder.buildButton(mbApr);
            deminimizeBtnEle.style.display='none';
            var eleLeft = 24;
            var eleTop = -18;
            var eleAlign = 'LEFT_TOP';


            fApr.addFrameComponent('minimizeButton', minimizeBtnEle, eleLeft, eleTop, eleAlign);
            fApr.addFrameComponent('deminimizeButton', deminimizeBtnEle, eleLeft, eleTop, eleAlign);

            //configure minimize button appearance[end]//////////////
        }

        {
            //configure zoom button appearance[begin]//////////////
            var zbApr = partsBuilder.buildTextButtonAppearance();

            zbApr.size = 8;

            zbApr.borderRadius = 4;
            zbApr.borderWidth = 1;

            zbApr.borderColorDefault = '#c6c6c6';
            zbApr.borderColorFocused = '#34ca49';
            zbApr.borderColorHovered = zbApr.borderColorFocused;
            zbApr.borderColorPressed = '#00af38';

            zbApr.borderStyleDefault = 'solid';
            zbApr.borderStyleFocused = zbApr.borderStyleDefault;
            zbApr.borderStyleHovered = zbApr.borderStyleDefault;
            zbApr.borderStylePressed = zbApr.borderStyleDefault;

            //background
            zbApr.backgroundColorDefault = '#d0d0d0';
            zbApr.backgroundColorFocused = '#34ca49';
            zbApr.backgroundColorHovered = zbApr.backgroundColorFocused;
            zbApr.backgroundColorPressed = zbApr.backgroundColorDefault;

            //caption
            zbApr.caption = null;

            zbApr.imageDefault = imgTransparent;
            zbApr.imageHovered = imageMaximize;
            zbApr.imagePressed = imageMaximize;
            zbApr.imageFocused = imgTransparent;

            var zoomBtnEle = partsBuilder.buildButton(zbApr);
            var dezoomBtnEle = partsBuilder.buildButton(zbApr);
            dezoomBtnEle.style.display='none';


            var eleLeft = 40;
            var eleTop = -18;
            var eleAlign = 'LEFT_TOP';


            fApr.addFrameComponent('zoomButton', zoomBtnEle, eleLeft, eleTop, eleAlign);
            fApr.addFrameComponent('dezoomButton', dezoomBtnEle, eleLeft, eleTop, eleAlign);


            //configure zoom button appearance[end]//////////////
        }
        //

    };
    //

    return fApr;
}

module.exports.getStyle = getStyle;

/***/ }),

/***/ "./src/WindowEventHelper.js":
/*!**********************************!*\
  !*** ./src/WindowEventHelper.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var CSimpleLayoutAnimator = __webpack_require__(/*! ./CSimpleLayoutAnimator.js */ "./src/CSimpleLayoutAnimator.js");
var CALIGN = __webpack_require__(/*! ./CCommon.js */ "./src/CCommon.js");

function WindowEventHelper(model) {

    this.windowMode = 'default';
    this.styleDisplay = 'flex';
    this.horizontalAlign = 'left';
    this.verticalAlign = 'top';

    this.keyListener = null;

    this.minimizeButton = null;
    this.maximizeButton = null;
    this.demaximizeButton = null;
    this.deminimizeButton = null;

    if (model.styleDisplay) {
        this.styleDisplay = model.styleDisplay;
    }
    if (model.minimizeButton) {
        this.minimizeButton = model.minimizeButton;
    }
    if (model.deminimizeButton) {
        this.deminimizeButton = model.deminimizeButton;
    }
    if (model.maximizeButton) {
        this.maximizeButton = model.maximizeButton;
    }
    if (model.demaximizeButton) {
        this.demaximizeButton = model.demaximizeButton;
    }

    if (model.hideButton) {
        this.hideButton = model.hideButton;
    }

    if (model.horizontalAlign) {
        this.horizontalAlign = model.horizontalAlign;
    }
    if (model.verticalAlign) {
        this.verticalAlign = model.verticalAlign;
    }


    this.animationEnabled = false;
    this.animationDuration = 100;
    this.frame = model.frame;
    this.hideFrameBorder = true;
    this.hideTitleBar = true;

    this.restoreKey = null;
    this.restoreDuration = null;
    this.restoreCallback = null;

    this.statsStore = {};

    if (model.animation) {
        this.animationEnabled = model.animation;
    }
    if (model.animationDuration) {
        this.animationDuration = model.animationDuration;
    }


    //If the user changes the window size when the window is maximized state,
    // adjust the size so that window looks maximized.
    this.resizeListener = this.handleOnResize.bind(this);

    this.eventListeners = {};
}

WindowEventHelper.prototype.on = function (eventType, callback) {
    var me = this;
    me.eventListeners[eventType] = callback;
};

//---------------------------------------------------------------------------------------------------------------------
WindowEventHelper.prototype.doMaximize = function (model) {
    var me = this;
    var frame = me.frame;

    //set onresize listener
    window.addEventListener('resize', me.resizeListener);

    //Remember the status of the window before maximizing the window size
    me.saveCurrentWindowStats('maximize_mode');

    me.hideTitleBar = model ? model.hideTitleBar : false;

    if (me.hideTitleBar) {

        //Hide only the currently visible FrameComponent
        //ウィンドウのモードを変更する前の今の状態で可視状態にあるフレームコンポーネント（閉じるボタン類）を不可視にする
        //(タイトルバー非表示の場合には最大化するときのアニメーションでフレームコンポーネントを見せないようにする)
        frame.hideAllVisibleFrameComponents();

        //またhideAllVisibleFrameComponentを実施するときに、個別のhideFrameComponentやshowFrameComponentを実行すると
        //管理ステートが破綻するため、タイトルバー非表示の場合はどうせ操作できないということもあり
        //hideFrameComponent や showFrameComponentは実行しない

    } else {

        //Process required for maximization
        if (me.maximizeButton) {
            frame.hideFrameComponent(me.maximizeButton);
        }
        if (me.demaximizeButton) {
            frame.showFrameComponent(me.demaximizeButton, me.styleDisplay);
        }
    }


    frame.setMovable(false);
    frame.setResizable(false);


    if (model && model.restoreKey) {
        me.restoreKey = model.restoreKey;
    }
    if (model && model.restoreDuration) {
        me.restoreDuration = model.restoreDuration;
    }
    if (model && model.restoreCallback) {
        me.restoreCallback = model.restoreCallback;
    }
    //Render maximization itself
    me.renderMaximizedMode({
        animation: me.animationEnabled,
        callback: (model && model.callback) ? model.callback : null, //set maximized finished callback
        duration: (model && model.duration) ? model.duration : null,
    });
};

/**
 * Render window as a maximized mode( full screen )
 */
WindowEventHelper.prototype.renderMaximizedMode = function (model) {
    var me = this;
    var frame = me.frame;
    var from = me.loadWindowStats('maximize_mode');

    var _toX = 0;
    var _toY = 0;
    var _toWidth = 0;
    var _toHeight = 0;

    //compute position and size[begin]
    if (me.hideTitleBar) {
        _toX = 0;
        _toY = -from.titleBarHeight;
    }

    if (me.hideFrameBorder) {
        _toWidth = window.innerWidth;
        _toHeight = window.innerHeight + (me.hideTitleBar ? from.titleBarHeight : 0);
    } else {
        _toWidth = window.innerWidth - from.frameBorderWidthDefault * 2;
        _toHeight = window.innerHeight - from.frameBorderWidthDefault * 2 + (me.hideTitleBar ? from.titleBarHeight : 0);
    }
    //compute position and size[end]

    if (me.horizontalAlign == 'right') {
        _toX = -_toWidth;
    }
    if (me.verticalAlign == 'bottom') {
        _toY = -_toHeight;
    }


    //render position and size[begin]
    var funcDoRender = function () {

        frame.setPosition(_toX, _toY);

        if (me.hideFrameBorder) {
            frame.frameBorderWidthDefault = 0;
            frame.frameBorderWidthFocused = 0;
            frame.htmlElement.style.borderWidth = '0px';
        }
        frame.setSize(_toWidth, _toHeight, true);

        if (me.hideTitleBar) {

            if (me.restoreKey) {
                me.keyListener = function (event) {
                    if (event.key === me.restoreKey) {
                        me.doDemaximize({
                            duration: me.restoreDuration ? me.restoreDuration : null,
                            callback: me.restoreCallback ? me.restoreCallback : null
                        });
                    }
                };
            }

            window.addEventListener('keydown', me.keyListener);
            //add keylistener for inside the iframe
            if (frame.iframe) {
                frame.iframe.contentWindow.addEventListener('keydown', me.keyListener);
            }
        }

        me.windowMode = 'maximized';

        if (model && model.callback) {
            model.callback(me.frame, {eventType: 'maximized'});
        }
        if (me.eventListeners['maximized']) {
            me.eventListeners['maximized'](me.frame, {eventType: 'maximized'});
        }
    };


    if (model && model.animation) {


        me.animateFrame({
            frame: frame,
            from: from,
            to: {
                left: _toX,
                top: _toY,
                width: _toWidth,
                height: _toHeight
            },
            duration: model.duration ? model.duration : me.animationDuration,
            callback: funcDoRender
        });
    } else {
        funcDoRender();
    }
    //render position and size[end]
};


/**
 * Restore window from maximized mode
 */
WindowEventHelper.prototype.doDemaximize = function (model) {
    var me = this;
    var frame = me.frame;

    if (!me.hasWindowStats('maximize_mode')) {
        return;
    }

    if (me.hideTitleBar) {

    } else {
        if (me.maximizeButton) {
            frame.showFrameComponent(me.maximizeButton, me.styleDisplay);
        }
        if (me.demaximizeButton) {
            frame.hideFrameComponent(me.demaximizeButton);
        }
    }

    me.restoreWindow({
        restorePosition: true,
        restoreMode: 'maximize_mode',
        animation: me.animationEnabled,
        callback: (model && model.callback) ? model.callback : null,
        forceShowFrameComponents: (me.animationEnabled && me.hideTitleBar),
        duration: (model && model.duration) ? model.duration : null,
        eventType: 'demaximized'
    });
};


/**
 * Called when changing the window size by user operation in maximized mode
 */
WindowEventHelper.prototype.handleOnResize = function () {
    var me = this;
    me.renderMaximizedMode();
};

//---------------------------------------------------------------------------------------------------------------------

/**
 * Make window minimized mode
 */
WindowEventHelper.prototype.doMinimize = function (model) {

    var me = this;
    var frame = me.frame;

    //Remember the stats of the window before maximizing the window
    me.saveCurrentWindowStats('minimize_mode');


    frame.setResizable(false);

    me.renderMinimizedMode({
        animation: me.animationEnabled,
        callback: (model && model.callback) ? model.callback : null,
        duration: (model && model.duration) ? model.duration : null
    });
};


/**
 * Render window as minimized mode
 */
WindowEventHelper.prototype.renderMinimizedMode = function (model) {
    var me = this;
    var frame = me.frame;
    var ri = me.loadWindowStats('minimize_mode');

    var from = me.getCurrentWindowStats();
    var to = me.getCurrentWindowStats();

    to.height = ri.titleBarHeight;

    var funcDoRender = function () {
        var forceSetSize = true;
        frame.setSize(to.width, to.height, forceSetSize);

        me.windowMode = 'minimized';

        if (me.minimizeButton) {
            frame.hideFrameComponent(me.minimizeButton);
        }

        if (me.deminimizeButton) {
            frame.showFrameComponent(me.deminimizeButton, me.styleDisplay);
        }

        if (model.callback) {
            model.callback(me.frame, {eventType: 'minimized'});
        }
        if (me.eventListeners['minimized']) {
            me.eventListeners['minimized'](me.frame, {eventType: 'minimized'});
        }
    };

    if (model && model.animation) {
        me.animateFrame({
            toAlpha: 1.0,
            duration: model.duration ? model.duration : me.animationDuration,
            frame: frame,
            from: from,
            to: to,
            callback: funcDoRender
        });
    } else {
        funcDoRender();
    }


};


/**
 * Restore window from minimized mode
 */
WindowEventHelper.prototype.doDeminimize = function (model) {
    var me = this;
    var frame = me.frame;

    if (!me.hasWindowStats('minimize_mode')) {
        return;
    }

    if (me.minimizeButton) {
        frame.showFrameComponent(me.minimizeButton, me.styleDisplay);
    }
    if (me.deminimizeButton) {
        frame.hideFrameComponent(me.deminimizeButton);
    }

    me.restoreWindow(
        {
            restorePosition: false,
            restoreMode: 'minimize_mode',
            animation: me.animationEnabled,
            duration: (model && model.duration) ? model.duration : null,
            callback: (model && model.callback) ? model.callback : null,
            eventType: 'deminimized'
        });
};

//---------------------------------------------------------------------------------------------------------------------
/**
 * Make window hidden mode
 */
WindowEventHelper.prototype.doHide = function (model) {

    var me = this;
    var frame = me.frame;

    //Remember the stats of the window before maximizing the window
    me.saveCurrentWindowStats('hide_mode');


    frame.setResizable(false);

    me.renderHideMode({
        silent: model.silent,
        animation: me.animationEnabled,
        duration: (model && model.duration) ? model.duration : null,
        callback: (model && model.callback) ? model.callback : null,
        align: (model && model.align) ? model.align : null,
        offset: model.offset
    });
};


/**
 * Render window as hidden mode
 */
WindowEventHelper.prototype.renderHideMode = function (model) {
    var me = this;
    var frame = me.frame;
    var ri = me.loadWindowStats('hide_mode');

    var from = me.getCurrentWindowStats();

    var offset = {x: 0, y: 0};
    if (model.offset) {
        offset = model.offset;
    }

    var left = 0;
    var top = 0;
    {
        var align = (model && model.align) ? model.align : 'LEFT_TOP';


        if (!align || CALIGN.LEFT_TOP == align) {
            left = from.left;
            top = from.top;
        }
        else if (CALIGN.HCENTER_TOP == align) {
            left = from.left + from.width / 2;
            top = from.top;
        }
        else if (CALIGN.RIGHT_TOP == align) {
            left = from.left + from.width;
            top = from.top;
        }
        else if (CALIGN.LEFT_VCENTER == align) {
            left = from.left;
            top = from.top + from.height / 2;
        }
        else if (CALIGN.HCENTER_VCENTER == align) {
            left = from.left + from.width / 2;
            top = from.top + from.height / 2;
        }
        else if (CALIGN.RIGHT_VCENTER == align) {
            left = from.left + from.width;
            top = from.top + from.height / 2;
        }
        else if (CALIGN.LEFT_BOTTOM == align) {
            left = from.left;
            top = from.top + from.height;
        }
        else if (CALIGN.HCENTER_BOTTOM == align) {
            left = from.left + from.width / 2;
            top = from.top + from.height;
        }
        else if (CALIGN.RIGHT_BOTTOM == align) {
            left = from.left + from.width;
            top = from.top + from.height;

        }
        else if ('ABSOLUTE' == align) {
            left = offset.x;
            top = offset.y;
        }

    }

    var to = {
        left: left,
        top: top,
        width: 0,
        //minimum height must be titleBarHeight
        height: ri.titleBarHeight
    };

    var funcDoRender = function () {
        var forceSetSize = true;
        frame.setSize(to.width, to.height, forceSetSize);
        //frame.hide();

        me.windowMode = 'hid';

        if (model && model.callback) {
            model.callback(me.frame, {eventType: 'hid'});
        }
        if (me.eventListeners['hid']) {
            me.eventListeners['hid'](me.frame, {eventType: 'hid'});
        }
    };

    //Hide only the currently visible FrameComponent
    frame.hideAllVisibleFrameComponents();

    if (model && model.animation) {
        me.animateFrame({
            fromAlpha: model.silent ? 0 : 1.0,
            toAlpha: 0,
            duration: model.duration ? model.duration : me.animationDuration,
            frame: frame,
            from: from,
            to: to,
            callback: funcDoRender
        });
    } else {
        funcDoRender();
    }


};


/**
 * Restore window from hided mode
 */
WindowEventHelper.prototype.doDehide = function (model) {
    var me = this;
    var frame = me.frame;

    if (!me.hasWindowStats('hide_mode')) {
        return;
    }

    me.restoreWindow(
        {
            duration: (model && model.duration) ? model.duration : null,
            restorePosition: true,
            restoreMode: 'hide_mode',
            animation: me.animationEnabled,
            forceShowFrameComponents: true,
            callback: (model && model.callback) ? model.callback : null,
            eventType: 'dehided'
        });
};
//---------------------------------------------------------------------------------------------------------------------
WindowEventHelper.prototype.loadWindowStats = function (storeKeyName) {
    var me = this;
    return me.statsStore[storeKeyName];
};

/**
 * Remember the status of the window before maximizing or minimizing the window size
 */
WindowEventHelper.prototype.saveCurrentWindowStats = function (storeKeyName) {
    var me = this;
    me.statsStore[storeKeyName] = me.getCurrentWindowStats();
};

WindowEventHelper.prototype.clearWindowStats = function (storeKeyName) {
    var me = this;
    me.statsStore[storeKeyName] = null;
};

WindowEventHelper.prototype.hasWindowStats = function (storeKeyName) {
    var me = this;
    return me.statsStore[storeKeyName];
};

WindowEventHelper.prototype.getCurrentWindowStats = function () {
    var me = this;
    var frame = me.frame;

    //Acquire window's stats
    var __titleBarHeight = parseInt(frame.titleBar.style.height, 10);
    var __frameBorderWidthDefault = frame.frameBorderWidthDefault;// parseInt(frame.htmlElement.style.borderWidth, 10);
    var __frameBorderWidthFocused = frame.frameBorderWidthFocused;
    var __left = frame.getLeft();
    var __top = frame.getTop();
    var __width = frame.getWidth();
    var __height = frame.getHeight();
    var __resizable = frame.resizable;
    var __movable = frame.movable;


    return {
        left: __left,
        top: __top,
        width: __width,
        height: __height,
        titleBarHeight: __titleBarHeight,
        frameBorderWidthDefault: __frameBorderWidthDefault,
        frameBorderWidthFocused: __frameBorderWidthFocused,
        resizable: __resizable,
        movable: __movable,
    };
};


/**
 * Restore the state of the window
 * @param model
 */
WindowEventHelper.prototype.restoreWindow = function (model) {
    var me = this;
    var frame = me.frame;
    var to = me.loadWindowStats(model.restoreMode);
    //現在の状態を一時保存する
    //me.saveCurrentWindowStats('temp');
    var crr = me.getCurrentWindowStats();//loadWindowStats('temp');


    //以下の3つは、ボーダーを太さを変更するためのものだが
    // funcDoRender内で処理してしまうとアニメーション中にはボーダーが描かれなくなる
    //アニメーション中にはボーダーは復活していたほうが自然なのでfuncDoRender外で実行する
    frame.frameBorderWidthDefault = to.frameBorderWidthDefault;
    frame.frameBorderWidthFocused = to.frameBorderWidthFocused;
    frame.htmlElement.style.borderWidth = frame.frameBorderWidthFocused;

    var funcDoRender = function () {


        if (model && model.restorePosition == false) {
            //位置の移動を伴わない場合（最小化から戻すときなど)
            to.left = crr.left;
            to.top = crr.top;
        }

        frame.setPosition(to.left, to.top);

        var force = true;
        frame.setSize(to.width, to.height, force);

        frame.setResizable(to.resizable);
        frame.setMovable(to.movable);

        //リストアしたらデータはクリアする
        me.clearWindowStats(model.restoreMode);

        if (me.keyListener) {
            //タイトルバー無し最大化状態から戻すためのキーリスナーは削除する

            window.removeEventListener('keydown', me.keyListener);
            if (frame.iframe) {
                frame.iframe.contentWindow.removeEventListener('keydown', me.keyListener);
            }
            me.keyListener = null;
        }

        me.windowMode = 'default';

        if (model && model.forceShowFrameComponents) {
            //ウィンドウのモード変更前に可視状態にあったフレームコンポーネント（閉じるボタン類）を可視状態にする
            frame.showAllVisibleFrameComponents();
        }

        frame.show();

        var eventType = 'restored';
        if (model && model.eventType) {
            eventType = model.eventType;
        }

        if (model && model.callback) {
            model.callback(
                me.frame, {eventType: eventType});
        }
        if (me.eventListeners[eventType]) {
            me.eventListeners[eventType](me.frame, {eventType: eventType});
        }
    };


    if (model && model.animation) {
        me.animateFrame({
            duration: model.duration ? model.duration : me.animationDuration,
            frame: frame,
            from: crr,
            to: to,
            callback: funcDoRender
        });
    } else {

        funcDoRender();
    }


    window.removeEventListener('resize', me.resizeListener);
};


WindowEventHelper.prototype.animateFrame = function (model) {
    var me = this;
    var needRequestFocusAfterAnimation = false;


    var fromAlpha = !isNaN(model.fromAlpha) ? model.fromAlpha : 1.0;

    var from = model.from;
    var to = model.to;

    var animator = new CSimpleLayoutAnimator();

    animator.set(model.frame)
        .setDuration(model.duration ? model.duration : me.animationDuration)
        .fromPosition(from.left, from.top, 'LEFT_TOP')
        .toPosition(to.left, to.top, 'LEFT_TOP')
        .fromWidth(from.width)
        .fromHeight(from.height)
        .toWidth(to.width)
        .toHeight(to.height)
        .fromAlpha(fromAlpha)
        .toAlpha((model.toAlpha == 0) ? 0 : 1.0)
        .start(0, needRequestFocusAfterAnimation)
        .then(function (animatorObj) {
            model['callback']();
        });
};
//----------------------------------------------------------------------------------------------------------------------
WindowEventHelper.prototype.setupDefaultEvents = function (model) {
    var me = this;


    if (me.maximizeButton) {

        //イベントはオーバーライドされる
        me.frame.on(me.maximizeButton, 'click', function (_frame, evt) {

            //ウィンドウを最大化する
            _frame.control.doMaximize({
                //true:最大化したときにタイトルバーを隠す
                hideTitleBar: (model.maximizeWithoutTitleBar === true) ? true : false,
                //最大化するときのアニメーション時間
                duration: 100,
                //タイトルバーを隠すときはボタンで復帰できないので変わりにキー入力を使いたい場合はキーを指定できる
                restoreKey: model.restoreKey ? model.restoreKey : 'Escape',
                //最大化から復帰するまでのアニメーション時間（タイトルバーを隠すときはここで指定可能)
                restoreDuration: 100,
                //ウィンドウを最大化終了を受け取るコールバック関数
                callback: function (frame, info) {
                },
                //最大化から戻ったときに呼び出されるコールバック(タイトルバーが無い場合)
                restoreCallback: function (frame, info) {
                    jsFrame.showToast({
                        text: frame.getName() + ' ' + info.eventType
                    });
                },
            });
        });
    }


    if (me.demaximizeButton) {
        me.frame.on(me.demaximizeButton, 'click', function (_frame, evt) {
            //ウィンドウを最大化状態から復帰する
            _frame.control.doDemaximize(
                {
                    // duration: 100,
                    // callback: (frame, info) => {}
                });
        });
    }

    if (me.minimizeButton) {
        me.frame.on(me.minimizeButton, 'click', function (_frame, evt) {

            //'minimizeButton'が押されたときに、最小化したい場合
            _frame.control.doMinimize({
                // duration: 100,
                // callback: (frame, info) => {}
            });

        });
    }

    if (me.deminimizeButton) {
        me.frame.on(me.deminimizeButton, 'click', function (_frame, evt) {
            _frame.control.doDeminimize({
                // duration: 100,
                // callback: (frame, info) => {}
            });
        });
    }
    if (me.hideButton) {
        me.frame.on(me.hideButton, 'click', function (_frame, evt) {
            _frame.control.doHide({
                align: 'CENTER_BOTTOM'
            });
        });
    }

};

module.exports = WindowEventHelper;

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: JSFrame */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _JSFrame_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./JSFrame.js */ "./src/JSFrame.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "JSFrame", function() { return _JSFrame_js__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vLi9zcmMvSlNGcmFtZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL1ByZXNldFN0eWxlTWF0ZXJpYWwuY3NzIiwid2VicGFjazovLy8uL3NyYy9QcmVzZXRTdHlsZVBvcHVwLmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvUHJlc2V0U3R5bGVSZWRzdG9uZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL1ByZXNldFN0eWxlWW9zZW1pdGUuY3NzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL3VybHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NDb21tb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NTaW1wbGVMYXlvdXRBbmltYXRvci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQ1RpbWVyLmpzIiwid2VicGFjazovLy8uL3NyYy9KU0ZyYW1lLmNzcz81N2Q5Iiwid2VicGFjazovLy8uL3NyYy9KU0ZyYW1lLmpzIiwid2VicGFjazovLy8uL3NyYy9PYmplY3RBc3NpZ25lci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvUHJlc2V0U3R5bGVNYXRlcmlhbC5jc3M/NzFiYiIsIndlYnBhY2s6Ly8vLi9zcmMvUHJlc2V0U3R5bGVNYXRlcmlhbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvUHJlc2V0U3R5bGVQb3B1cC5jc3M/Mzg5YyIsIndlYnBhY2s6Ly8vLi9zcmMvUHJlc2V0U3R5bGVQb3B1cC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvUHJlc2V0U3R5bGVSZWRzdG9uZS5jc3M/MDZhNyIsIndlYnBhY2s6Ly8vLi9zcmMvUHJlc2V0U3R5bGVSZWRzdG9uZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvUHJlc2V0U3R5bGVUb2FzdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvUHJlc2V0U3R5bGVZb3NlbWl0ZS5jc3M/OWJlNiIsIndlYnBhY2s6Ly8vLi9zcmMvUHJlc2V0U3R5bGVZb3NlbWl0ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvV2luZG93RXZlbnRIZWxwZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztRQ1ZBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7O0FDbEZBLDJCQUEyQixtQkFBTyxDQUFDLHFHQUFnRDtBQUNuRjtBQUNBLGNBQWMsUUFBUyw4QkFBOEIsc0hBQXNILGlFQUFpRSw4REFBOEQseURBQXlELGtDQUFrQyxtQ0FBbUMsR0FBRywrQkFBK0Isd0xBQXdMLGlFQUFpRSw4REFBOEQseURBQXlELGtDQUFrQyxtQ0FBbUMsR0FBRyxzQ0FBc0MscUNBQXFDLG1CQUFtQixxQkFBcUI7Ozs7Ozs7Ozs7Ozs7QUNGci9CLDJCQUEyQixtQkFBTyxDQUFDLHFHQUFnRDtBQUNuRjtBQUNBLGNBQWMsUUFBUywyQ0FBMkMsd0JBQXdCLGtDQUFrQyxtQ0FBbUMsR0FBRyw0Q0FBNEMsd0JBQXdCLG1DQUFtQyxvQ0FBb0MsR0FBRzs7Ozs7Ozs7Ozs7OztBQ0ZoVCwyQkFBMkIsbUJBQU8sQ0FBQyxxR0FBZ0Q7QUFDbkY7QUFDQSxjQUFjLFFBQVMsd0NBQXdDLHdCQUF3QixrQ0FBa0MsbUNBQW1DLEdBQUcseUNBQXlDLHdCQUF3QixrQ0FBa0MsbUNBQW1DLEdBQUc7Ozs7Ozs7Ozs7Ozs7QUNGeFMsMkJBQTJCLG1CQUFPLENBQUMscUdBQWdEO0FBQ25GO0FBQ0EsY0FBYyxRQUFTLDJDQUEyQyx3QkFBd0Isa0NBQWtDLG1DQUFtQyxHQUFHLDRDQUE0Qyx3QkFBd0Isa0NBQWtDLG1DQUFtQyxHQUFHOzs7Ozs7Ozs7Ozs7O0FDRjlTLDJCQUEyQixtQkFBTyxDQUFDLHFHQUFnRDtBQUNuRjtBQUNBLGNBQWMsUUFBUywrS0FBK0ssc0hBQXNILGlFQUFpRSw4REFBOEQseURBQXlELGtDQUFrQyxtQ0FBbUMsR0FBRyw0Q0FBNEMsd0xBQXdMLGlFQUFpRSw4REFBOEQseURBQXlELGtDQUFrQyxtQ0FBbUMsR0FBRzs7Ozs7Ozs7Ozs7Ozs7QUNGbmhDOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjs7QUFFaEI7QUFDQTtBQUNBOztBQUVBO0FBQ0EsdUNBQXVDLGdCQUFnQjtBQUN2RCxPQUFPO0FBQ1A7QUFDQTtBQUNBLEtBQUs7QUFDTCxJQUFJOzs7QUFHSjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxtQkFBbUIsaUJBQWlCO0FBQ3BDOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGVBQWUsb0JBQW9CO0FBQ25DLDRCQUE0QjtBQUM1QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQSxDQUFDOzs7QUFHRDtBQUNBO0FBQ0E7QUFDQSxxREFBcUQsY0FBYztBQUNuRTtBQUNBLEM7Ozs7Ozs7Ozs7O0FDcEZBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEM7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7O0FBRUEsY0FBYyxtQkFBTyxDQUFDLHVEQUFROztBQUU5QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUEsaUJBQWlCLG1CQUFtQjtBQUNwQztBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpQkFBaUIsc0JBQXNCO0FBQ3ZDOztBQUVBO0FBQ0EsbUJBQW1CLDJCQUEyQjs7QUFFOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGdCQUFnQixtQkFBbUI7QUFDbkM7QUFDQTs7QUFFQTtBQUNBOztBQUVBLGlCQUFpQiwyQkFBMkI7QUFDNUM7QUFDQTs7QUFFQSxRQUFRLHVCQUF1QjtBQUMvQjtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBLGlCQUFpQix1QkFBdUI7QUFDeEM7QUFDQTs7QUFFQSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxnQkFBZ0IsaUJBQWlCO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjOztBQUVkLGtEQUFrRCxzQkFBc0I7QUFDeEU7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7O0FBRUE7QUFDQSxLQUFLLEtBQXdDLEVBQUUsRUFFN0M7O0FBRUYsUUFBUSxzQkFBaUI7QUFDekI7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdURBQXVEO0FBQ3ZEOztBQUVBLDZCQUE2QixtQkFBbUI7O0FBRWhEOztBQUVBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUM5WUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDLFdBQVcsRUFBRTtBQUNyRCx3Q0FBd0MsV0FBVyxFQUFFOztBQUVyRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLHNDQUFzQztBQUN0QyxHQUFHO0FBQ0g7QUFDQSw4REFBOEQ7QUFDOUQ7O0FBRUE7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUN4RkE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FBS0Esd0I7Ozs7Ozs7Ozs7O0FDaEJBLGFBQWEsbUJBQU8sQ0FBQyxvQ0FBYTs7QUFFbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7O0FBR0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTs7O0FBR0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOzs7QUFHQTs7O0FBR0E7QUFDQSwwQkFBMEI7O0FBRTFCO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7O0FBR0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZDQUE2QyxrQ0FBa0M7QUFDL0UscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGFBQWE7OztBQUdiO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7O0FBR0EsS0FBSzs7QUFFTCxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQSx1Qzs7Ozs7Ozs7Ozs7O0FDcFhBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCOzs7Ozs7Ozs7Ozs7QUNqR0EsY0FBYyxtQkFBTyxDQUFDLHNIQUF3RDs7QUFFOUUsNENBQTRDLFFBQVM7O0FBRXJEO0FBQ0E7Ozs7QUFJQSxlQUFlOztBQUVmO0FBQ0E7O0FBRUEsYUFBYSxtQkFBTyxDQUFDLG1HQUFnRDs7QUFFckU7O0FBRUEsR0FBRyxLQUFVLEVBQUUsRTs7Ozs7Ozs7Ozs7O0FDbkJmO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWE7O0FBRWIsbUJBQU8sQ0FBQyx3Q0FBZTs7QUFFdkIsd0JBQXdCLG1CQUFPLENBQUMsMERBQXdCO0FBQ3hELGFBQWEsbUJBQU8sQ0FBQyxzQ0FBYzs7QUFFbkMsNEJBQTRCLG1CQUFPLENBQUMsa0VBQTRCOztBQUVoRTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxZQUFZLG1CQUFPLENBQUMsOERBQTBCO0FBQzlDLFlBQVksbUJBQU8sQ0FBQyw4REFBMEI7QUFDOUMsU0FBUyxtQkFBTyxDQUFDLHdEQUF1QjtBQUN4QyxTQUFTLG1CQUFPLENBQUMsd0RBQXVCO0FBQ3hDLFlBQVksbUJBQU8sQ0FBQyw4REFBMEI7QUFDOUM7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEscUJBQXFCO0FBQ3JCLHFCQUFxQjs7QUFFckI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSw2QkFBNkI7QUFDN0I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLGlDQUFpQztBQUNqQyxpQ0FBaUM7O0FBRWpDOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsMkRBQTJEO0FBQzNELDJEQUEyRDs7QUFFM0Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBLHVDQUF1QztBQUN2QztBQUNBOztBQUVBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxrREFBa0Q7O0FBRWxEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHdDQUF3Qzs7QUFFeEM7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDO0FBQ3hDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxzREFBc0Q7QUFDdEQsc0RBQXNEO0FBQ3RELE9BQU87QUFDUDtBQUNBLHNEQUFzRDtBQUN0RCxPQUFPO0FBQ1Asc0RBQXNEO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDZTtBQUNmOztBQUVBOztBQUVBO0FBQ0Esa0NBQWtDOztBQUVsQzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCO0FBQ3RCO0FBQ0EsY0FBYztBQUNkO0FBQ0EsY0FBYyxXQUFXLFlBQVk7QUFDckM7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlEQUF5RCxjQUFjLHdCQUF3QixvQkFBb0IsYUFBYSxlQUFlLGVBQWU7QUFDOUo7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQSwwQkFBMEI7QUFDMUI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7Ozs7Ozs7Ozs7OztBQzM3R0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsMEVBQTBFLFNBQVM7QUFDbkY7QUFDQSxhQUFhO0FBQ2Isd0RBQXdEO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQSwyQzs7Ozs7Ozs7Ozs7O0FDakVBLGNBQWMsbUJBQU8sQ0FBQyw4SUFBb0U7O0FBRTFGLDRDQUE0QyxRQUFTOztBQUVyRDtBQUNBOzs7O0FBSUEsZUFBZTs7QUFFZjtBQUNBOztBQUVBLGFBQWEsbUJBQU8sQ0FBQyxtR0FBZ0Q7O0FBRXJFOztBQUVBLEdBQUcsS0FBVSxFQUFFLEU7Ozs7Ozs7Ozs7O0FDbkJmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxtQkFBTyxDQUFDLGdFQUEyQjtBQUNuQyxtQkFBbUIsbUJBQU8sQ0FBQyxvREFBcUI7OztBQUdoRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxTQUFTOzs7QUFHVDs7QUFFQTs7QUFFQTtBQUNBLGdDQUFnQztBQUNoQzs7QUFFQTs7O0FBR0E7QUFDQTs7QUFFQSxrRUFBa0U7QUFDbEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHVEQUF1RDs7QUFFdkQ7QUFDQTs7QUFFQTtBQUNBOztBQUVBLHdEQUF3RDs7QUFFeEQ7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSw4Q0FBOEM7O0FBRTlDOztBQUVBOztBQUVBLCtCQUErQjs7QUFFL0I7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsS0FBSztBQUNMO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0EseUZBQXlGLGdCQUFnQjs7QUFFekc7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBOzs7QUFHQTs7O0FBR0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0REFBNEQsVUFBVTtBQUN0RTtBQUNBLGdCQUFnQjtBQUNoQiwwQ0FBMEMsbUJBQW1CO0FBQzdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1osUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZFQUE2RSxTQUFTO0FBQ3RGO0FBQ0EsZ0JBQWdCO0FBQ2hCLDJEQUEyRDtBQUMzRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsbUM7Ozs7Ozs7Ozs7OztBQzlYQSxjQUFjLG1CQUFPLENBQUMsd0lBQWlFOztBQUV2Riw0Q0FBNEMsUUFBUzs7QUFFckQ7QUFDQTs7OztBQUlBLGVBQWU7O0FBRWY7QUFDQTs7QUFFQSxhQUFhLG1CQUFPLENBQUMsbUdBQWdEOztBQUVyRTs7QUFFQSxHQUFHLEtBQVUsRUFBRSxFOzs7Ozs7Ozs7OztBQ25CZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBLG1CQUFPLENBQUMsMERBQXdCO0FBQ2hDOzs7QUFHQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOzs7QUFHQTs7QUFFQTtBQUNBLCtCQUErQjtBQUMvQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTs7O0FBR0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUdBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7O0FBR0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOzs7QUFHQSxtQzs7Ozs7Ozs7Ozs7O0FDNUpBLGNBQWMsbUJBQU8sQ0FBQyw4SUFBb0U7O0FBRTFGLDRDQUE0QyxRQUFTOztBQUVyRDtBQUNBOzs7O0FBSUEsZUFBZTs7QUFFZjtBQUNBOztBQUVBLGFBQWEsbUJBQU8sQ0FBQyxtR0FBZ0Q7O0FBRXJFOztBQUVBLEdBQUcsS0FBVSxFQUFFLEU7Ozs7Ozs7Ozs7O0FDbkJmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxtQkFBTyxDQUFDLGdFQUEyQjs7QUFFbkM7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOzs7QUFHQTs7QUFFQTtBQUNBLCtCQUErQjs7QUFFL0I7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7OztBQUdBOzs7QUFHQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUdBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQSxtQzs7Ozs7Ozs7Ozs7QUN4V0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7OztBQUdBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBLCtCQUErQjs7QUFFL0I7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBOzs7QUFHQTs7O0FBR0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUdBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx5Q0FBeUM7O0FBRXpDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOzs7QUFHQTtBQUNBOzs7QUFHQTtBQUNBOzs7QUFHQSxtQzs7Ozs7Ozs7Ozs7O0FDNUpBLGNBQWMsbUJBQU8sQ0FBQyw4SUFBb0U7O0FBRTFGLDRDQUE0QyxRQUFTOztBQUVyRDtBQUNBOzs7O0FBSUEsZUFBZTs7QUFFZjtBQUNBOztBQUVBLGFBQWEsbUJBQU8sQ0FBQyxtR0FBZ0Q7O0FBRXJFOztBQUVBLEdBQUcsS0FBVSxFQUFFLEU7Ozs7Ozs7Ozs7O0FDbkJmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxtQkFBTyxDQUFDLGdFQUEyQjs7QUFFbkM7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOzs7QUFHQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQSxxREFBcUQ7QUFDckQsd0RBQXdEO0FBQ3hELHdEQUF3RDtBQUN4RCx3REFBd0Q7QUFDeEQsb0NBQW9DLFlBQVksVUFBVTs7QUFFMUQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0EseURBQXlELFlBQVksVUFBVTs7QUFFL0U7QUFDQTs7O0FBR0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7OztBQUdBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsbUM7Ozs7Ozs7Ozs7OztBQ3BRYTs7QUFFYiw0QkFBNEIsbUJBQU8sQ0FBQyxrRUFBNEI7QUFDaEUsYUFBYSxtQkFBTyxDQUFDLHNDQUFjOztBQUVuQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0Esc0NBQXNDLHVCQUF1QjtBQUM3RDtBQUNBO0FBQ0Esc0RBQXNELHVCQUF1QjtBQUM3RTtBQUNBOzs7QUFHQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsU0FBUztBQUNULEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHNDQUFzQyx1QkFBdUI7QUFDN0Q7QUFDQTtBQUNBLHNEQUFzRCx1QkFBdUI7QUFDN0U7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULEtBQUs7QUFDTDtBQUNBOzs7QUFHQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLHNDQUFzQyxpQkFBaUI7QUFDdkQ7QUFDQTtBQUNBLGdEQUFnRCxpQkFBaUI7QUFDakU7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxLQUFLO0FBQ0w7QUFDQTs7O0FBR0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGtFQUFrRTtBQUNsRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlDQUF5Qzs7O0FBR3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsMkJBQTJCLHFCQUFxQjtBQUNoRDtBQUNBO0FBQ0Esb0RBQW9ELHFCQUFxQjtBQUN6RTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxLQUFLOztBQUVMO0FBQ0E7OztBQUdBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7O0FBR0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckIsaUJBQWlCO0FBQ2pCLGFBQWE7QUFDYixTQUFTO0FBQ1Q7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLFNBQVM7QUFDVDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTs7QUFFYixTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1Q7O0FBRUE7O0FBRUEsbUM7Ozs7Ozs7Ozs7OztBQ3J4QkE7QUFBQTtBQUFBO0FBQUEiLCJmaWxlIjoianNmcmFtZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSB7XG5cdFx0dmFyIGEgPSBmYWN0b3J5KCk7XG5cdFx0Zm9yKHZhciBpIGluIGEpICh0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgPyBleHBvcnRzIDogcm9vdClbaV0gPSBhW2ldO1xuXHR9XG59KSh3aW5kb3csIGZ1bmN0aW9uKCkge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIikoZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuanNmcmFtZS10aXRsZWJhci1kZWZhdWx0IHtcXG4gICAgYmFja2dyb3VuZDogLXdlYmtpdC1ncmFkaWVudChsaW5lYXIsIGxlZnQgdG9wLCBsZWZ0IGJvdHRvbSwgY29sb3Itc3RvcCgwLjAsICNmNWY1ZjUsIGNvbG9yLXN0b3AoMS4wLCAjZjhmN2YyKSkpO1xcbiAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0b3AsICNmNWY1ZjUsICNmOGY3ZjIpO1xcbiAgICBiYWNrZ3JvdW5kOiAtbW96LWxpbmVhci1ncmFkaWVudCh0b3AsICNmNWY1ZjUsICNmOGY3ZjIpO1xcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG9wLCAjZjVmNWY1LCAjZjhmN2YyKTtcXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNnB4O1xcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNnB4O1xcbn1cXG5cXG4uanNmcmFtZS10aXRsZWJhci1mb2N1c2VkIHtcXG4gICAgLyogKGMpMjAxNSBKb2hhbm5lcyBKYWtvYlxcbiAgICAgICBNYWRlIHdpdGggPDMgaW4gR2VybWFueSAqL1xcbiAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LWdyYWRpZW50KGxpbmVhciwgbGVmdCB0b3AsIGxlZnQgYm90dG9tLCBjb2xvci1zdG9wKDAuMCwgI2ViZWJlYiwgY29sb3Itc3RvcCgxLjAsICNkNWQ1ZDUpKSk7XFxuICAgIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvcCwgI2ViZWJlYiwgI2Q1ZDVkNSk7XFxuICAgIGJhY2tncm91bmQ6IC1tb3otbGluZWFyLWdyYWRpZW50KHRvcCwgI2ViZWJlYiwgI2Q1ZDVkNSk7XFxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0b3AsICNlYmViZWIsICNkNWQ1ZDUpO1xcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA2cHg7XFxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA2cHg7XFxufVxcblxcbi5qc2ZyYW1lLW1vZGFsLXdpbmRvdy1iYWNrZ3JvdW5kIHtcXG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjYpO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHdpZGR0aDogMTAwJVxcbn1cIiwgXCJcIl0pO1xuXG4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKShmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5qc2ZyYW1lLXByZXNldC1zdHlsZS1tYXRlcmlhbC1kZWZhdWx0IHtcXG4gICAgYmFja2dyb3VuZDogYmxhY2s7XFxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDZweDtcXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDZweDtcXG59XFxuXFxuLmpzZnJhbWUtcHJlc2V0LXN0eWxlLW1hdGVyaWFsLWZvY3VzZWQge1xcbiAgICBiYWNrZ3JvdW5kOiBibGFjaztcXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMzZweDtcXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDM2cHg7XFxufVxcblwiLCBcIlwiXSk7XG5cbiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLmpzZnJhbWUtcHJlc2V0LXN0eWxlLXBvcHVwLWRlZmF1bHQge1xcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMHB4O1xcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMHB4O1xcbn1cXG5cXG4uanNmcmFtZS1wcmVzZXQtc3R5bGUtcG9wdXAtZm9jdXNlZCB7XFxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwcHg7XFxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwcHg7XFxufVxcblwiLCBcIlwiXSk7XG5cbiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLmpzZnJhbWUtcHJlc2V0LXN0eWxlLXJlZHN0b25lLWRlZmF1bHQge1xcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMHB4O1xcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMHB4O1xcbn1cXG5cXG4uanNmcmFtZS1wcmVzZXQtc3R5bGUtcmVkc3RvbmUtZm9jdXNlZCB7XFxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwcHg7XFxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwcHg7XFxufVxcblwiLCBcIlwiXSk7XG5cbiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLyoqXFxuICogSlNGcmFtZSBFeGFtcGxlc1xcbiAqXFxuICogQ29weXJpZ2h0IDIwMDctMjAxNyBUb20gTWlzYXdhLCByaXZlcnN1bi5vcmdAZ21haWwuY29tXFxuICogQ29weXJpZ2h0IDIwMDctMjAxNyB3ZWIyZHJpdmVyLmNvbSovXFxuXFxuLmpzZnJhbWUtcHJlc2V0LXN0eWxlLXlvc2VtaXRlLWRlZmF1bHQge1xcbiAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LWdyYWRpZW50KGxpbmVhciwgbGVmdCB0b3AsIGxlZnQgYm90dG9tLCBjb2xvci1zdG9wKDAuMCwgI2Y1ZjVmNSwgY29sb3Itc3RvcCgxLjAsICNmOGY3ZjIpKSk7XFxuICAgIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvcCwgI2Y1ZjVmNSwgI2Y4ZjdmMik7XFxuICAgIGJhY2tncm91bmQ6IC1tb3otbGluZWFyLWdyYWRpZW50KHRvcCwgI2Y1ZjVmNSwgI2Y4ZjdmMik7XFxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0b3AsICNmNWY1ZjUsICNmOGY3ZjIpO1xcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA2cHg7XFxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA2cHg7XFxufVxcblxcbi5qc2ZyYW1lLXByZXNldC1zdHlsZS15b3NlbWl0ZS1mb2N1c2VkIHtcXG4gICAgLyogKGMpMjAxNSBKb2hhbm5lcyBKYWtvYlxcbiAgICAgICBNYWRlIHdpdGggPDMgaW4gR2VybWFueSAqL1xcbiAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LWdyYWRpZW50KGxpbmVhciwgbGVmdCB0b3AsIGxlZnQgYm90dG9tLCBjb2xvci1zdG9wKDAuMCwgI2ViZWJlYiwgY29sb3Itc3RvcCgxLjAsICNkNWQ1ZDUpKSk7XFxuICAgIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvcCwgI2ViZWJlYiwgI2Q1ZDVkNSk7XFxuICAgIGJhY2tncm91bmQ6IC1tb3otbGluZWFyLWdyYWRpZW50KHRvcCwgI2ViZWJlYiwgI2Q1ZDVkNSk7XFxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0b3AsICNlYmViZWIsICNkNWQ1ZDUpO1xcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA2cHg7XFxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA2cHg7XFxufVxcblwiLCBcIlwiXSk7XG5cbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVzZVNvdXJjZU1hcCkge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiAnQG1lZGlhICcgKyBpdGVtWzJdICsgJ3snICsgY29udGVudCArICd9JztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBjb250ZW50O1xuICAgICAgfVxuICAgIH0pLmpvaW4oJycpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnkpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09ICdzdHJpbmcnKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCAnJ11dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKGkgPSAwOyBpIDwgbW9kdWxlcy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGl0ZW0gPSBtb2R1bGVzW2ldOyAvLyBza2lwIGFscmVhZHkgaW1wb3J0ZWQgbW9kdWxlXG4gICAgICAvLyB0aGlzIGltcGxlbWVudGF0aW9uIGlzIG5vdCAxMDAlIHBlcmZlY3QgZm9yIHdlaXJkIG1lZGlhIHF1ZXJ5IGNvbWJpbmF0aW9uc1xuICAgICAgLy8gd2hlbiBhIG1vZHVsZSBpcyBpbXBvcnRlZCBtdWx0aXBsZSB0aW1lcyB3aXRoIGRpZmZlcmVudCBtZWRpYSBxdWVyaWVzLlxuICAgICAgLy8gSSBob3BlIHRoaXMgd2lsbCBuZXZlciBvY2N1ciAoSGV5IHRoaXMgd2F5IHdlIGhhdmUgc21hbGxlciBidW5kbGVzKVxuXG4gICAgICBpZiAoaXRlbVswXSA9PSBudWxsIHx8ICFhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGlmIChtZWRpYVF1ZXJ5ICYmICFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSAnKCcgKyBpdGVtWzJdICsgJykgYW5kICgnICsgbWVkaWFRdWVyeSArICcpJztcbiAgICAgICAgfVxuXG4gICAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59O1xuXG5mdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV0gfHwgJyc7XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh1c2VTb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgPT09ICdmdW5jdGlvbicpIHtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IHRvQ29tbWVudChjc3NNYXBwaW5nKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuICcvKiMgc291cmNlVVJMPScgKyBjc3NNYXBwaW5nLnNvdXJjZVJvb3QgKyBzb3VyY2UgKyAnICovJztcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKCdcXG4nKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbignXFxuJyk7XG59IC8vIEFkYXB0ZWQgZnJvbSBjb252ZXJ0LXNvdXJjZS1tYXAgKE1JVClcblxuXG5mdW5jdGlvbiB0b0NvbW1lbnQoc291cmNlTWFwKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKTtcbiAgdmFyIGRhdGEgPSAnc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsJyArIGJhc2U2NDtcbiAgcmV0dXJuICcvKiMgJyArIGRhdGEgKyAnICovJztcbn0iLCIvKlxuXHRNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuXHRBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuXG52YXIgc3R5bGVzSW5Eb20gPSB7fTtcblxudmFyXHRtZW1vaXplID0gZnVuY3Rpb24gKGZuKSB7XG5cdHZhciBtZW1vO1xuXG5cdHJldHVybiBmdW5jdGlvbiAoKSB7XG5cdFx0aWYgKHR5cGVvZiBtZW1vID09PSBcInVuZGVmaW5lZFwiKSBtZW1vID0gZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcblx0XHRyZXR1cm4gbWVtbztcblx0fTtcbn07XG5cbnZhciBpc09sZElFID0gbWVtb2l6ZShmdW5jdGlvbiAoKSB7XG5cdC8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG5cdC8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcblx0Ly8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuXHQvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcblx0Ly8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG5cdHJldHVybiB3aW5kb3cgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWxsICYmICF3aW5kb3cuYXRvYjtcbn0pO1xuXG52YXIgZ2V0VGFyZ2V0ID0gZnVuY3Rpb24gKHRhcmdldCwgcGFyZW50KSB7XG4gIGlmIChwYXJlbnQpe1xuICAgIHJldHVybiBwYXJlbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuICB9XG4gIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG59O1xuXG52YXIgZ2V0RWxlbWVudCA9IChmdW5jdGlvbiAoZm4pIHtcblx0dmFyIG1lbW8gPSB7fTtcblxuXHRyZXR1cm4gZnVuY3Rpb24odGFyZ2V0LCBwYXJlbnQpIHtcbiAgICAgICAgICAgICAgICAvLyBJZiBwYXNzaW5nIGZ1bmN0aW9uIGluIG9wdGlvbnMsIHRoZW4gdXNlIGl0IGZvciByZXNvbHZlIFwiaGVhZFwiIGVsZW1lbnQuXG4gICAgICAgICAgICAgICAgLy8gVXNlZnVsIGZvciBTaGFkb3cgUm9vdCBzdHlsZSBpLmVcbiAgICAgICAgICAgICAgICAvLyB7XG4gICAgICAgICAgICAgICAgLy8gICBpbnNlcnRJbnRvOiBmdW5jdGlvbiAoKSB7IHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Zvb1wiKS5zaGFkb3dSb290IH1cbiAgICAgICAgICAgICAgICAvLyB9XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB0YXJnZXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0YXJnZXQoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcblx0XHRcdHZhciBzdHlsZVRhcmdldCA9IGdldFRhcmdldC5jYWxsKHRoaXMsIHRhcmdldCwgcGFyZW50KTtcblx0XHRcdC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cdFx0XHRpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG5cdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0Ly8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcblx0XHRcdFx0XHQvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuXHRcdFx0XHRcdHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG5cdFx0XHRcdH0gY2F0Y2goZSkge1xuXHRcdFx0XHRcdHN0eWxlVGFyZ2V0ID0gbnVsbDtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0bWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG5cdFx0fVxuXHRcdHJldHVybiBtZW1vW3RhcmdldF1cblx0fTtcbn0pKCk7XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyXHRzaW5nbGV0b25Db3VudGVyID0gMDtcbnZhclx0c3R5bGVzSW5zZXJ0ZWRBdFRvcCA9IFtdO1xuXG52YXJcdGZpeFVybHMgPSByZXF1aXJlKFwiLi91cmxzXCIpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGxpc3QsIG9wdGlvbnMpIHtcblx0aWYgKHR5cGVvZiBERUJVRyAhPT0gXCJ1bmRlZmluZWRcIiAmJiBERUJVRykge1xuXHRcdGlmICh0eXBlb2YgZG9jdW1lbnQgIT09IFwib2JqZWN0XCIpIHRocm93IG5ldyBFcnJvcihcIlRoZSBzdHlsZS1sb2FkZXIgY2Fubm90IGJlIHVzZWQgaW4gYSBub24tYnJvd3NlciBlbnZpcm9ubWVudFwiKTtcblx0fVxuXG5cdG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXG5cdG9wdGlvbnMuYXR0cnMgPSB0eXBlb2Ygb3B0aW9ucy5hdHRycyA9PT0gXCJvYmplY3RcIiA/IG9wdGlvbnMuYXR0cnMgOiB7fTtcblxuXHQvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cblx0Ly8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXHRpZiAoIW9wdGlvbnMuc2luZ2xldG9uICYmIHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiAhPT0gXCJib29sZWFuXCIpIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuXG5cdC8vIEJ5IGRlZmF1bHQsIGFkZCA8c3R5bGU+IHRhZ3MgdG8gdGhlIDxoZWFkPiBlbGVtZW50XG4gICAgICAgIGlmICghb3B0aW9ucy5pbnNlcnRJbnRvKSBvcHRpb25zLmluc2VydEludG8gPSBcImhlYWRcIjtcblxuXHQvLyBCeSBkZWZhdWx0LCBhZGQgPHN0eWxlPiB0YWdzIHRvIHRoZSBib3R0b20gb2YgdGhlIHRhcmdldFxuXHRpZiAoIW9wdGlvbnMuaW5zZXJ0QXQpIG9wdGlvbnMuaW5zZXJ0QXQgPSBcImJvdHRvbVwiO1xuXG5cdHZhciBzdHlsZXMgPSBsaXN0VG9TdHlsZXMobGlzdCwgb3B0aW9ucyk7XG5cblx0YWRkU3R5bGVzVG9Eb20oc3R5bGVzLCBvcHRpb25zKTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gdXBkYXRlIChuZXdMaXN0KSB7XG5cdFx0dmFyIG1heVJlbW92ZSA9IFtdO1xuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBpdGVtID0gc3R5bGVzW2ldO1xuXHRcdFx0dmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF07XG5cblx0XHRcdGRvbVN0eWxlLnJlZnMtLTtcblx0XHRcdG1heVJlbW92ZS5wdXNoKGRvbVN0eWxlKTtcblx0XHR9XG5cblx0XHRpZihuZXdMaXN0KSB7XG5cdFx0XHR2YXIgbmV3U3R5bGVzID0gbGlzdFRvU3R5bGVzKG5ld0xpc3QsIG9wdGlvbnMpO1xuXHRcdFx0YWRkU3R5bGVzVG9Eb20obmV3U3R5bGVzLCBvcHRpb25zKTtcblx0XHR9XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IG1heVJlbW92ZS5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGRvbVN0eWxlID0gbWF5UmVtb3ZlW2ldO1xuXG5cdFx0XHRpZihkb21TdHlsZS5yZWZzID09PSAwKSB7XG5cdFx0XHRcdGZvciAodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIGRvbVN0eWxlLnBhcnRzW2pdKCk7XG5cblx0XHRcdFx0ZGVsZXRlIHN0eWxlc0luRG9tW2RvbVN0eWxlLmlkXTtcblx0XHRcdH1cblx0XHR9XG5cdH07XG59O1xuXG5mdW5jdGlvbiBhZGRTdHlsZXNUb0RvbSAoc3R5bGVzLCBvcHRpb25zKSB7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIGl0ZW0gPSBzdHlsZXNbaV07XG5cdFx0dmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF07XG5cblx0XHRpZihkb21TdHlsZSkge1xuXHRcdFx0ZG9tU3R5bGUucmVmcysrO1xuXG5cdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0ZG9tU3R5bGUucGFydHNbal0oaXRlbS5wYXJ0c1tqXSk7XG5cdFx0XHR9XG5cblx0XHRcdGZvcig7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdGRvbVN0eWxlLnBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHR2YXIgcGFydHMgPSBbXTtcblxuXHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0cGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdLCBvcHRpb25zKSk7XG5cdFx0XHR9XG5cblx0XHRcdHN0eWxlc0luRG9tW2l0ZW0uaWRdID0ge2lkOiBpdGVtLmlkLCByZWZzOiAxLCBwYXJ0czogcGFydHN9O1xuXHRcdH1cblx0fVxufVxuXG5mdW5jdGlvbiBsaXN0VG9TdHlsZXMgKGxpc3QsIG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlcyA9IFtdO1xuXHR2YXIgbmV3U3R5bGVzID0ge307XG5cblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIGl0ZW0gPSBsaXN0W2ldO1xuXHRcdHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuXHRcdHZhciBjc3MgPSBpdGVtWzFdO1xuXHRcdHZhciBtZWRpYSA9IGl0ZW1bMl07XG5cdFx0dmFyIHNvdXJjZU1hcCA9IGl0ZW1bM107XG5cdFx0dmFyIHBhcnQgPSB7Y3NzOiBjc3MsIG1lZGlhOiBtZWRpYSwgc291cmNlTWFwOiBzb3VyY2VNYXB9O1xuXG5cdFx0aWYoIW5ld1N0eWxlc1tpZF0pIHN0eWxlcy5wdXNoKG5ld1N0eWxlc1tpZF0gPSB7aWQ6IGlkLCBwYXJ0czogW3BhcnRdfSk7XG5cdFx0ZWxzZSBuZXdTdHlsZXNbaWRdLnBhcnRzLnB1c2gocGFydCk7XG5cdH1cblxuXHRyZXR1cm4gc3R5bGVzO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQgKG9wdGlvbnMsIHN0eWxlKSB7XG5cdHZhciB0YXJnZXQgPSBnZXRFbGVtZW50KG9wdGlvbnMuaW5zZXJ0SW50bylcblxuXHRpZiAoIXRhcmdldCkge1xuXHRcdHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0SW50bycgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuXHR9XG5cblx0dmFyIGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wID0gc3R5bGVzSW5zZXJ0ZWRBdFRvcFtzdHlsZXNJbnNlcnRlZEF0VG9wLmxlbmd0aCAtIDFdO1xuXG5cdGlmIChvcHRpb25zLmluc2VydEF0ID09PSBcInRvcFwiKSB7XG5cdFx0aWYgKCFsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcCkge1xuXHRcdFx0dGFyZ2V0Lmluc2VydEJlZm9yZShzdHlsZSwgdGFyZ2V0LmZpcnN0Q2hpbGQpO1xuXHRcdH0gZWxzZSBpZiAobGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AubmV4dFNpYmxpbmcpIHtcblx0XHRcdHRhcmdldC5pbnNlcnRCZWZvcmUoc3R5bGUsIGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wLm5leHRTaWJsaW5nKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcblx0XHR9XG5cdFx0c3R5bGVzSW5zZXJ0ZWRBdFRvcC5wdXNoKHN0eWxlKTtcblx0fSBlbHNlIGlmIChvcHRpb25zLmluc2VydEF0ID09PSBcImJvdHRvbVwiKSB7XG5cdFx0dGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcblx0fSBlbHNlIGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJvYmplY3RcIiAmJiBvcHRpb25zLmluc2VydEF0LmJlZm9yZSkge1xuXHRcdHZhciBuZXh0U2libGluZyA9IGdldEVsZW1lbnQob3B0aW9ucy5pbnNlcnRBdC5iZWZvcmUsIHRhcmdldCk7XG5cdFx0dGFyZ2V0Lmluc2VydEJlZm9yZShzdHlsZSwgbmV4dFNpYmxpbmcpO1xuXHR9IGVsc2Uge1xuXHRcdHRocm93IG5ldyBFcnJvcihcIltTdHlsZSBMb2FkZXJdXFxuXFxuIEludmFsaWQgdmFsdWUgZm9yIHBhcmFtZXRlciAnaW5zZXJ0QXQnICgnb3B0aW9ucy5pbnNlcnRBdCcpIGZvdW5kLlxcbiBNdXN0IGJlICd0b3AnLCAnYm90dG9tJywgb3IgT2JqZWN0LlxcbiAoaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIjaW5zZXJ0YXQpXFxuXCIpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudCAoc3R5bGUpIHtcblx0aWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHJldHVybiBmYWxzZTtcblx0c3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG5cblx0dmFyIGlkeCA9IHN0eWxlc0luc2VydGVkQXRUb3AuaW5kZXhPZihzdHlsZSk7XG5cdGlmKGlkeCA+PSAwKSB7XG5cdFx0c3R5bGVzSW5zZXJ0ZWRBdFRvcC5zcGxpY2UoaWR4LCAxKTtcblx0fVxufVxuXG5mdW5jdGlvbiBjcmVhdGVTdHlsZUVsZW1lbnQgKG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuXG5cdGlmKG9wdGlvbnMuYXR0cnMudHlwZSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0b3B0aW9ucy5hdHRycy50eXBlID0gXCJ0ZXh0L2Nzc1wiO1xuXHR9XG5cblx0aWYob3B0aW9ucy5hdHRycy5ub25jZSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0dmFyIG5vbmNlID0gZ2V0Tm9uY2UoKTtcblx0XHRpZiAobm9uY2UpIHtcblx0XHRcdG9wdGlvbnMuYXR0cnMubm9uY2UgPSBub25jZTtcblx0XHR9XG5cdH1cblxuXHRhZGRBdHRycyhzdHlsZSwgb3B0aW9ucy5hdHRycyk7XG5cdGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zLCBzdHlsZSk7XG5cblx0cmV0dXJuIHN0eWxlO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVMaW5rRWxlbWVudCAob3B0aW9ucykge1xuXHR2YXIgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaW5rXCIpO1xuXG5cdGlmKG9wdGlvbnMuYXR0cnMudHlwZSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0b3B0aW9ucy5hdHRycy50eXBlID0gXCJ0ZXh0L2Nzc1wiO1xuXHR9XG5cdG9wdGlvbnMuYXR0cnMucmVsID0gXCJzdHlsZXNoZWV0XCI7XG5cblx0YWRkQXR0cnMobGluaywgb3B0aW9ucy5hdHRycyk7XG5cdGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zLCBsaW5rKTtcblxuXHRyZXR1cm4gbGluaztcbn1cblxuZnVuY3Rpb24gYWRkQXR0cnMgKGVsLCBhdHRycykge1xuXHRPYmplY3Qua2V5cyhhdHRycykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG5cdFx0ZWwuc2V0QXR0cmlidXRlKGtleSwgYXR0cnNba2V5XSk7XG5cdH0pO1xufVxuXG5mdW5jdGlvbiBnZXROb25jZSgpIHtcblx0aWYgKHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyA9PT0gJ3VuZGVmaW5lZCcpIHtcblx0XHRyZXR1cm4gbnVsbDtcblx0fVxuXG5cdHJldHVybiBfX3dlYnBhY2tfbm9uY2VfXztcbn1cblxuZnVuY3Rpb24gYWRkU3R5bGUgKG9iaiwgb3B0aW9ucykge1xuXHR2YXIgc3R5bGUsIHVwZGF0ZSwgcmVtb3ZlLCByZXN1bHQ7XG5cblx0Ly8gSWYgYSB0cmFuc2Zvcm0gZnVuY3Rpb24gd2FzIGRlZmluZWQsIHJ1biBpdCBvbiB0aGUgY3NzXG5cdGlmIChvcHRpb25zLnRyYW5zZm9ybSAmJiBvYmouY3NzKSB7XG5cdCAgICByZXN1bHQgPSB0eXBlb2Ygb3B0aW9ucy50cmFuc2Zvcm0gPT09ICdmdW5jdGlvbidcblx0XHQgPyBvcHRpb25zLnRyYW5zZm9ybShvYmouY3NzKSBcblx0XHQgOiBvcHRpb25zLnRyYW5zZm9ybS5kZWZhdWx0KG9iai5jc3MpO1xuXG5cdCAgICBpZiAocmVzdWx0KSB7XG5cdCAgICBcdC8vIElmIHRyYW5zZm9ybSByZXR1cm5zIGEgdmFsdWUsIHVzZSB0aGF0IGluc3RlYWQgb2YgdGhlIG9yaWdpbmFsIGNzcy5cblx0ICAgIFx0Ly8gVGhpcyBhbGxvd3MgcnVubmluZyBydW50aW1lIHRyYW5zZm9ybWF0aW9ucyBvbiB0aGUgY3NzLlxuXHQgICAgXHRvYmouY3NzID0gcmVzdWx0O1xuXHQgICAgfSBlbHNlIHtcblx0ICAgIFx0Ly8gSWYgdGhlIHRyYW5zZm9ybSBmdW5jdGlvbiByZXR1cm5zIGEgZmFsc3kgdmFsdWUsIGRvbid0IGFkZCB0aGlzIGNzcy5cblx0ICAgIFx0Ly8gVGhpcyBhbGxvd3MgY29uZGl0aW9uYWwgbG9hZGluZyBvZiBjc3Ncblx0ICAgIFx0cmV0dXJuIGZ1bmN0aW9uKCkge1xuXHQgICAgXHRcdC8vIG5vb3Bcblx0ICAgIFx0fTtcblx0ICAgIH1cblx0fVxuXG5cdGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuXHRcdHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuXG5cdFx0c3R5bGUgPSBzaW5nbGV0b24gfHwgKHNpbmdsZXRvbiA9IGNyZWF0ZVN0eWxlRWxlbWVudChvcHRpb25zKSk7XG5cblx0XHR1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIGZhbHNlKTtcblx0XHRyZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIHRydWUpO1xuXG5cdH0gZWxzZSBpZiAoXG5cdFx0b2JqLnNvdXJjZU1hcCAmJlxuXHRcdHR5cGVvZiBVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBVUkwuY3JlYXRlT2JqZWN0VVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgVVJMLnJldm9rZU9iamVjdFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIEJsb2IgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCJcblx0KSB7XG5cdFx0c3R5bGUgPSBjcmVhdGVMaW5rRWxlbWVudChvcHRpb25zKTtcblx0XHR1cGRhdGUgPSB1cGRhdGVMaW5rLmJpbmQobnVsbCwgc3R5bGUsIG9wdGlvbnMpO1xuXHRcdHJlbW92ZSA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG5cblx0XHRcdGlmKHN0eWxlLmhyZWYpIFVSTC5yZXZva2VPYmplY3RVUkwoc3R5bGUuaHJlZik7XG5cdFx0fTtcblx0fSBlbHNlIHtcblx0XHRzdHlsZSA9IGNyZWF0ZVN0eWxlRWxlbWVudChvcHRpb25zKTtcblx0XHR1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGUpO1xuXHRcdHJlbW92ZSA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG5cdFx0fTtcblx0fVxuXG5cdHVwZGF0ZShvYmopO1xuXG5cdHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZSAobmV3T2JqKSB7XG5cdFx0aWYgKG5ld09iaikge1xuXHRcdFx0aWYgKFxuXHRcdFx0XHRuZXdPYmouY3NzID09PSBvYmouY3NzICYmXG5cdFx0XHRcdG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmXG5cdFx0XHRcdG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXBcblx0XHRcdCkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdHVwZGF0ZShvYmogPSBuZXdPYmopO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZW1vdmUoKTtcblx0XHR9XG5cdH07XG59XG5cbnZhciByZXBsYWNlVGV4dCA9IChmdW5jdGlvbiAoKSB7XG5cdHZhciB0ZXh0U3RvcmUgPSBbXTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gKGluZGV4LCByZXBsYWNlbWVudCkge1xuXHRcdHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcblxuXHRcdHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuXHR9O1xufSkoKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyAoc3R5bGUsIGluZGV4LCByZW1vdmUsIG9iaikge1xuXHR2YXIgY3NzID0gcmVtb3ZlID8gXCJcIiA6IG9iai5jc3M7XG5cblx0aWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcblx0XHRzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcblx0fSBlbHNlIHtcblx0XHR2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG5cdFx0dmFyIGNoaWxkTm9kZXMgPSBzdHlsZS5jaGlsZE5vZGVzO1xuXG5cdFx0aWYgKGNoaWxkTm9kZXNbaW5kZXhdKSBzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG5cblx0XHRpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcblx0XHRcdHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuXHRcdH1cblx0fVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnIChzdHlsZSwgb2JqKSB7XG5cdHZhciBjc3MgPSBvYmouY3NzO1xuXHR2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG5cblx0aWYobWVkaWEpIHtcblx0XHRzdHlsZS5zZXRBdHRyaWJ1dGUoXCJtZWRpYVwiLCBtZWRpYSlcblx0fVxuXG5cdGlmKHN0eWxlLnN0eWxlU2hlZXQpIHtcblx0XHRzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG5cdH0gZWxzZSB7XG5cdFx0d2hpbGUoc3R5bGUuZmlyc3RDaGlsZCkge1xuXHRcdFx0c3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG5cdFx0fVxuXG5cdFx0c3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG5cdH1cbn1cblxuZnVuY3Rpb24gdXBkYXRlTGluayAobGluaywgb3B0aW9ucywgb2JqKSB7XG5cdHZhciBjc3MgPSBvYmouY3NzO1xuXHR2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuXHQvKlxuXHRcdElmIGNvbnZlcnRUb0Fic29sdXRlVXJscyBpc24ndCBkZWZpbmVkLCBidXQgc291cmNlbWFwcyBhcmUgZW5hYmxlZFxuXHRcdGFuZCB0aGVyZSBpcyBubyBwdWJsaWNQYXRoIGRlZmluZWQgdGhlbiBsZXRzIHR1cm4gY29udmVydFRvQWJzb2x1dGVVcmxzXG5cdFx0b24gYnkgZGVmYXVsdC4gIE90aGVyd2lzZSBkZWZhdWx0IHRvIHRoZSBjb252ZXJ0VG9BYnNvbHV0ZVVybHMgb3B0aW9uXG5cdFx0ZGlyZWN0bHlcblx0Ki9cblx0dmFyIGF1dG9GaXhVcmxzID0gb3B0aW9ucy5jb252ZXJ0VG9BYnNvbHV0ZVVybHMgPT09IHVuZGVmaW5lZCAmJiBzb3VyY2VNYXA7XG5cblx0aWYgKG9wdGlvbnMuY29udmVydFRvQWJzb2x1dGVVcmxzIHx8IGF1dG9GaXhVcmxzKSB7XG5cdFx0Y3NzID0gZml4VXJscyhjc3MpO1xuXHR9XG5cblx0aWYgKHNvdXJjZU1hcCkge1xuXHRcdC8vIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzI2NjAzODc1XG5cdFx0Y3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIiArIGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSkgKyBcIiAqL1wiO1xuXHR9XG5cblx0dmFyIGJsb2IgPSBuZXcgQmxvYihbY3NzXSwgeyB0eXBlOiBcInRleHQvY3NzXCIgfSk7XG5cblx0dmFyIG9sZFNyYyA9IGxpbmsuaHJlZjtcblxuXHRsaW5rLmhyZWYgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpO1xuXG5cdGlmKG9sZFNyYykgVVJMLnJldm9rZU9iamVjdFVSTChvbGRTcmMpO1xufVxuIiwiXG4vKipcbiAqIFdoZW4gc291cmNlIG1hcHMgYXJlIGVuYWJsZWQsIGBzdHlsZS1sb2FkZXJgIHVzZXMgYSBsaW5rIGVsZW1lbnQgd2l0aCBhIGRhdGEtdXJpIHRvXG4gKiBlbWJlZCB0aGUgY3NzIG9uIHRoZSBwYWdlLiBUaGlzIGJyZWFrcyBhbGwgcmVsYXRpdmUgdXJscyBiZWNhdXNlIG5vdyB0aGV5IGFyZSByZWxhdGl2ZSB0byBhXG4gKiBidW5kbGUgaW5zdGVhZCBvZiB0aGUgY3VycmVudCBwYWdlLlxuICpcbiAqIE9uZSBzb2x1dGlvbiBpcyB0byBvbmx5IHVzZSBmdWxsIHVybHMsIGJ1dCB0aGF0IG1heSBiZSBpbXBvc3NpYmxlLlxuICpcbiAqIEluc3RlYWQsIHRoaXMgZnVuY3Rpb24gXCJmaXhlc1wiIHRoZSByZWxhdGl2ZSB1cmxzIHRvIGJlIGFic29sdXRlIGFjY29yZGluZyB0byB0aGUgY3VycmVudCBwYWdlIGxvY2F0aW9uLlxuICpcbiAqIEEgcnVkaW1lbnRhcnkgdGVzdCBzdWl0ZSBpcyBsb2NhdGVkIGF0IGB0ZXN0L2ZpeFVybHMuanNgIGFuZCBjYW4gYmUgcnVuIHZpYSB0aGUgYG5wbSB0ZXN0YCBjb21tYW5kLlxuICpcbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3MpIHtcbiAgLy8gZ2V0IGN1cnJlbnQgbG9jYXRpb25cbiAgdmFyIGxvY2F0aW9uID0gdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiAmJiB3aW5kb3cubG9jYXRpb247XG5cbiAgaWYgKCFsb2NhdGlvbikge1xuICAgIHRocm93IG5ldyBFcnJvcihcImZpeFVybHMgcmVxdWlyZXMgd2luZG93LmxvY2F0aW9uXCIpO1xuICB9XG5cblx0Ly8gYmxhbmsgb3IgbnVsbD9cblx0aWYgKCFjc3MgfHwgdHlwZW9mIGNzcyAhPT0gXCJzdHJpbmdcIikge1xuXHQgIHJldHVybiBjc3M7XG4gIH1cblxuICB2YXIgYmFzZVVybCA9IGxvY2F0aW9uLnByb3RvY29sICsgXCIvL1wiICsgbG9jYXRpb24uaG9zdDtcbiAgdmFyIGN1cnJlbnREaXIgPSBiYXNlVXJsICsgbG9jYXRpb24ucGF0aG5hbWUucmVwbGFjZSgvXFwvW15cXC9dKiQvLCBcIi9cIik7XG5cblx0Ly8gY29udmVydCBlYWNoIHVybCguLi4pXG5cdC8qXG5cdFRoaXMgcmVndWxhciBleHByZXNzaW9uIGlzIGp1c3QgYSB3YXkgdG8gcmVjdXJzaXZlbHkgbWF0Y2ggYnJhY2tldHMgd2l0aGluXG5cdGEgc3RyaW5nLlxuXG5cdCAvdXJsXFxzKlxcKCAgPSBNYXRjaCBvbiB0aGUgd29yZCBcInVybFwiIHdpdGggYW55IHdoaXRlc3BhY2UgYWZ0ZXIgaXQgYW5kIHRoZW4gYSBwYXJlbnNcblx0ICAgKCAgPSBTdGFydCBhIGNhcHR1cmluZyBncm91cFxuXHQgICAgICg/OiAgPSBTdGFydCBhIG5vbi1jYXB0dXJpbmcgZ3JvdXBcblx0ICAgICAgICAgW14pKF0gID0gTWF0Y2ggYW55dGhpbmcgdGhhdCBpc24ndCBhIHBhcmVudGhlc2VzXG5cdCAgICAgICAgIHwgID0gT1Jcblx0ICAgICAgICAgXFwoICA9IE1hdGNoIGEgc3RhcnQgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICg/OiAgPSBTdGFydCBhbm90aGVyIG5vbi1jYXB0dXJpbmcgZ3JvdXBzXG5cdCAgICAgICAgICAgICAgICAgW14pKF0rICA9IE1hdGNoIGFueXRoaW5nIHRoYXQgaXNuJ3QgYSBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgICAgIHwgID0gT1Jcblx0ICAgICAgICAgICAgICAgICBcXCggID0gTWF0Y2ggYSBzdGFydCBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgICAgICAgICBbXikoXSogID0gTWF0Y2ggYW55dGhpbmcgdGhhdCBpc24ndCBhIHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAgICAgXFwpICA9IE1hdGNoIGEgZW5kIHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICApICA9IEVuZCBHcm91cFxuICAgICAgICAgICAgICAqXFwpID0gTWF0Y2ggYW55dGhpbmcgYW5kIHRoZW4gYSBjbG9zZSBwYXJlbnNcbiAgICAgICAgICApICA9IENsb3NlIG5vbi1jYXB0dXJpbmcgZ3JvdXBcbiAgICAgICAgICAqICA9IE1hdGNoIGFueXRoaW5nXG4gICAgICAgKSAgPSBDbG9zZSBjYXB0dXJpbmcgZ3JvdXBcblx0IFxcKSAgPSBNYXRjaCBhIGNsb3NlIHBhcmVuc1xuXG5cdCAvZ2kgID0gR2V0IGFsbCBtYXRjaGVzLCBub3QgdGhlIGZpcnN0LiAgQmUgY2FzZSBpbnNlbnNpdGl2ZS5cblx0ICovXG5cdHZhciBmaXhlZENzcyA9IGNzcy5yZXBsYWNlKC91cmxcXHMqXFwoKCg/OlteKShdfFxcKCg/OlteKShdK3xcXChbXikoXSpcXCkpKlxcKSkqKVxcKS9naSwgZnVuY3Rpb24oZnVsbE1hdGNoLCBvcmlnVXJsKSB7XG5cdFx0Ly8gc3RyaXAgcXVvdGVzIChpZiB0aGV5IGV4aXN0KVxuXHRcdHZhciB1bnF1b3RlZE9yaWdVcmwgPSBvcmlnVXJsXG5cdFx0XHQudHJpbSgpXG5cdFx0XHQucmVwbGFjZSgvXlwiKC4qKVwiJC8sIGZ1bmN0aW9uKG8sICQxKXsgcmV0dXJuICQxOyB9KVxuXHRcdFx0LnJlcGxhY2UoL14nKC4qKSckLywgZnVuY3Rpb24obywgJDEpeyByZXR1cm4gJDE7IH0pO1xuXG5cdFx0Ly8gYWxyZWFkeSBhIGZ1bGwgdXJsPyBubyBjaGFuZ2Vcblx0XHRpZiAoL14oI3xkYXRhOnxodHRwOlxcL1xcL3xodHRwczpcXC9cXC98ZmlsZTpcXC9cXC9cXC98XFxzKiQpL2kudGVzdCh1bnF1b3RlZE9yaWdVcmwpKSB7XG5cdFx0ICByZXR1cm4gZnVsbE1hdGNoO1xuXHRcdH1cblxuXHRcdC8vIGNvbnZlcnQgdGhlIHVybCB0byBhIGZ1bGwgdXJsXG5cdFx0dmFyIG5ld1VybDtcblxuXHRcdGlmICh1bnF1b3RlZE9yaWdVcmwuaW5kZXhPZihcIi8vXCIpID09PSAwKSB7XG5cdFx0ICBcdC8vVE9ETzogc2hvdWxkIHdlIGFkZCBwcm90b2NvbD9cblx0XHRcdG5ld1VybCA9IHVucXVvdGVkT3JpZ1VybDtcblx0XHR9IGVsc2UgaWYgKHVucXVvdGVkT3JpZ1VybC5pbmRleE9mKFwiL1wiKSA9PT0gMCkge1xuXHRcdFx0Ly8gcGF0aCBzaG91bGQgYmUgcmVsYXRpdmUgdG8gdGhlIGJhc2UgdXJsXG5cdFx0XHRuZXdVcmwgPSBiYXNlVXJsICsgdW5xdW90ZWRPcmlnVXJsOyAvLyBhbHJlYWR5IHN0YXJ0cyB3aXRoICcvJ1xuXHRcdH0gZWxzZSB7XG5cdFx0XHQvLyBwYXRoIHNob3VsZCBiZSByZWxhdGl2ZSB0byBjdXJyZW50IGRpcmVjdG9yeVxuXHRcdFx0bmV3VXJsID0gY3VycmVudERpciArIHVucXVvdGVkT3JpZ1VybC5yZXBsYWNlKC9eXFwuXFwvLywgXCJcIik7IC8vIFN0cmlwIGxlYWRpbmcgJy4vJ1xuXHRcdH1cblxuXHRcdC8vIHNlbmQgYmFjayB0aGUgZml4ZWQgdXJsKC4uLilcblx0XHRyZXR1cm4gXCJ1cmwoXCIgKyBKU09OLnN0cmluZ2lmeShuZXdVcmwpICsgXCIpXCI7XG5cdH0pO1xuXG5cdC8vIHNlbmQgYmFjayB0aGUgZml4ZWQgY3NzXG5cdHJldHVybiBmaXhlZENzcztcbn07XG4iLCJDQUxJR04gPSB7fTtcblxuQ0FMSUdOLkxFRlRfVE9QID0gJ0xFRlRfVE9QJztcbkNBTElHTi5IQ0VOVEVSX1RPUCA9ICdDRU5URVJfVE9QJztcbkNBTElHTi5SSUdIVF9UT1AgPSAnUklHSFRfVE9QJztcbkNBTElHTi5MRUZUX1ZDRU5URVIgPSAnTEVGVF9DRU5URVInO1xuQ0FMSUdOLkhDRU5URVJfVkNFTlRFUiA9ICdDRU5URVJfQ0VOVEVSJztcbkNBTElHTi5DRU5URVIgPSBDQUxJR04uSENFTlRFUl9WQ0VOVEVSO1xuQ0FMSUdOLlJJR0hUX1ZDRU5URVIgPSAnUklHSFRfQ0VOVEVSJztcbkNBTElHTi5MRUZUX0JPVFRPTSA9ICdMRUZUX0JPVFRPTSc7XG5DQUxJR04uSENFTlRFUl9CT1RUT00gPSAnQ0VOVEVSX0JPVFRPTSc7XG5DQUxJR04uUklHSFRfQk9UVE9NID0gJ1JJR0hUX0JPVFRPTSc7XG5cblxuXG5cbm1vZHVsZS5leHBvcnRzID0gQ0FMSUdOOyIsInZhciBDVGltZXIgPSByZXF1aXJlKCcuL0NUaW1lci5qcycpO1xuXG4vKipcbiAqIENTaW1wbGVMYXlvdXRBbmltYXRvciBjbGFzc1xuICogQ2xhc3MgZm9yIG1vdmluZyBhbmltYXRpb24gwrcgc2NhbGluZyBhbmltYXRpb24gb2YgZnJhbWUuXG4gKiA8cD5cbiAqIEBjb25zdHJ1Y3RvclxuICovXG5mdW5jdGlvbiBDU2ltcGxlTGF5b3V0QW5pbWF0b3IoKSB7XG5cbiAgICB0aGlzLmZwcyA9IDMwO1xuICAgIHRoaXMuZHVyYXRpb25NaWxsaXMgPSAyMDA7XG4gICAgdGhpcy50YXJnZXRGcmFtZSA9IG51bGw7XG5cbiAgICB0aGlzLl9jcnJBbHBoYSA9IDEuMDtcbiAgICB0aGlzLl90b0FscGhhID0gMS4wO1xuXG4gICAgLy9jdXJyZW50IHdpZHRoL2hlaWdodFxuICAgIHRoaXMuX2NycldpZHRoID0gMDtcbiAgICB0aGlzLl9jcnJIZWlnaHQgPSAwO1xuICAgIHRoaXMuX3RvV2lkdGggPSAwO1xuICAgIHRoaXMuX3RvSGVpZ2h0ID0gMDtcblxuICAgIC8vY3VycmVudCBwb3NpdGlvbih4LHkpXG4gICAgLy90aGlzLl9jcnJYID0gMDtcbiAgICAvL3RoaXMuX2NyclkgPSAwO1xuICAgIHRoaXMuX3RvWCA9IDA7XG4gICAgdGhpcy5fdG9ZID0gMDtcblxuXG4gICAgdGhpcy5waW5uZWRBbmltYXRpb25FbmFibGVkID0gZmFsc2U7XG4gICAgdGhpcy5fcGluWCA9IDA7XG4gICAgdGhpcy5fcGluWSA9IDA7XG4gICAgdGhpcy5fcGluQW5jaG9yID0gbnVsbDtcblxufVxuXG4vKipcbiAqIFNldCBDSUZyYW1lIG9iamVjdCB0byBiZSByZXNpemVkXG4gKiBAcGFyYW0gY2lmcmFtZVxuICogQHJldHVybnMgeyp9XG4gKi9cbkNTaW1wbGVMYXlvdXRBbmltYXRvci5wcm90b3R5cGUuc2V0ID0gZnVuY3Rpb24gKGNpZnJhbWUpIHtcbiAgICB2YXIgbWUgPSB0aGlzO1xuICAgIG1lLnRhcmdldEZyYW1lID0gY2lmcmFtZTtcblxuXG4gICAgbWUuZnJvbVdpZHRoKGNpZnJhbWUuZ2V0V2lkdGgoKSk7XG4gICAgbWUuZnJvbUhlaWdodChjaWZyYW1lLmdldEhlaWdodCgpKTtcblxuICAgIG1lLnRvV2lkdGgoY2lmcmFtZS5nZXRXaWR0aCgpKTtcbiAgICBtZS50b0hlaWdodChjaWZyYW1lLmdldEhlaWdodCgpKTtcblxuICAgIHZhciBjcnJQb3MgPSBjaWZyYW1lLmdldFBvc2l0aW9uKCk7XG5cbiAgICBtZS5mcm9tUG9zaXRpb24oY3JyUG9zLngsIGNyclBvcy55LCBjcnJQb3MuYW5jaG9yKTtcblxuXG4gICAgcmV0dXJuIG1lO1xuXG59O1xuXG4vKipcbiAqIEdldCBDSUZyYW1lIG9iamVjdFxuICogQHJldHVybnMgeyp9XG4gKi9cbkNTaW1wbGVMYXlvdXRBbmltYXRvci5wcm90b3R5cGUuZ2V0ID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBtZSA9IHRoaXM7XG4gICAgcmV0dXJuIG1lLnRhcmdldEZyYW1lO1xufTtcbi8qKlxuICogU2V0IGFuaW1hdGlvbiBkdXJhdGlvbiB0aW1lIG1pbGxpc1xuICogQHBhcmFtIGR1cmF0aW9uTWlsbGlzXG4gKiBAcmV0dXJucyB7Kn1cbiAqL1xuQ1NpbXBsZUxheW91dEFuaW1hdG9yLnByb3RvdHlwZS5zZXREdXJhdGlvbiA9IGZ1bmN0aW9uIChkdXJhdGlvbk1pbGxpcykge1xuICAgIHZhciBtZSA9IHRoaXM7XG4gICAgXG4gICAgbWUuZHVyYXRpb25NaWxsaXMgPSBkdXJhdGlvbk1pbGxpcztcbiAgICByZXR1cm4gbWU7XG59O1xuXG4vKipcbiAqIFNldCBleHBlY3RlZCBGUFNcbiAqIEBwYXJhbSBmcHNcbiAqIEByZXR1cm5zIHsqfVxuICovXG5DU2ltcGxlTGF5b3V0QW5pbWF0b3IucHJvdG90eXBlLnNldEZQUyA9IGZ1bmN0aW9uIChmcHMpIHtcbiAgICB2YXIgbWUgPSB0aGlzO1xuICAgIG1lLmZwcyA9IGZwcztcbiAgICByZXR1cm4gbWU7XG59O1xuXG4vKipcbiAqIFNldCBQSU4gcG9zaXRpb25cbiAqIEBwYXJhbSB4XG4gKiBAcGFyYW0geVxuICogQHBhcmFtIGFuY2hvciBQb3NpdGlvbiB3aGVyZSBhbmltYXRpb24gc3RhcnRzIGZyb20uRXhwZWN0ZWQgcGFyYW1ldGVycyBhcyBmb2xsb3dzLlxuICdMRUZUX1RPUCc6RGVmYXVsdC5TcGVjaWZ5IHRoZSBwb3NpdGlvbiBzdGFydGluZyBmcm9tIHRoZSB1cHBlciBsZWZ0LlxuICdDRU5URVJfVE9QJ1xuICdSSUdIVF9UT1AnXG4gJ0xFRlRfQ0VOVEVSJ1xuICdDRU5URVJfQ0VOVEVSJ1xuICdSSUdIVF9DRU5URVInXG4gJ0xFRlRfQk9UVE9NJ1xuICdDRU5URVJfQk9UVE9NJ1xuICdSSUdIVF9CT1RUT00nXG4gKiBAcmV0dXJucyB7Kn1cbiAqL1xuQ1NpbXBsZUxheW91dEFuaW1hdG9yLnByb3RvdHlwZS5mcm9tUG9zaXRpb24gPSBmdW5jdGlvbiAoeCwgeSwgYW5jaG9yKSB7XG4gICAgdmFyIG1lID0gdGhpcztcbiAgICBtZS5waW5uZWRBbmltYXRpb25FbmFibGVkID0gdHJ1ZTtcblxuICAgIG1lLl9waW5YID0geDtcbiAgICBtZS5fcGluWSA9IHk7XG5cbiAgICBtZS50b1Bvc2l0aW9uKHgsIHkpO1xuXG4gICAgaWYgKGFuY2hvcikge1xuICAgICAgICBtZS5fcGluQW5jaG9yID0gYW5jaG9yO1xuICAgIH1cbiAgICByZXR1cm4gbWU7XG59O1xuLyoqXG4gKiBTZXQgcmVzaXplRnJvbSB3aWR0aFxuICogQHBhcmFtIGZyb21XaWR0aFxuICogQHJldHVybnMgeyp9XG4gKi9cbkNTaW1wbGVMYXlvdXRBbmltYXRvci5wcm90b3R5cGUuZnJvbVdpZHRoID0gZnVuY3Rpb24gKGZyb21XaWR0aCkge1xuICAgIHZhciBtZSA9IHRoaXM7XG4gICAgbWUuX2NycldpZHRoID0gZnJvbVdpZHRoO1xuXG4gICAgcmV0dXJuIG1lO1xufTtcblxuLyoqXG4gKiBTZXQgcmVzaXplRnJvbSBoZWlnaHRcbiAqIEBwYXJhbSBmcm9tSGVpZ2h0XG4gKiBAcmV0dXJucyB7Kn1cbiAqL1xuQ1NpbXBsZUxheW91dEFuaW1hdG9yLnByb3RvdHlwZS5mcm9tSGVpZ2h0ID0gZnVuY3Rpb24gKGZyb21IZWlnaHQpIHtcbiAgICB2YXIgbWUgPSB0aGlzO1xuICAgIG1lLl9jcnJIZWlnaHQgPSBmcm9tSGVpZ2h0O1xuXG4gICAgcmV0dXJuIG1lO1xufTtcblxuLyoqXG4gKiBTZXQgcmVzaXplVG8gd2lkdGhcbiAqIEBwYXJhbSB0b1dpZHRoXG4gKiBAcmV0dXJucyB7Kn1cbiAqL1xuQ1NpbXBsZUxheW91dEFuaW1hdG9yLnByb3RvdHlwZS50b1dpZHRoID0gZnVuY3Rpb24gKHRvV2lkdGgpIHtcbiAgICB2YXIgbWUgPSB0aGlzO1xuICAgIG1lLl90b1dpZHRoID0gdG9XaWR0aDtcblxuICAgIHJldHVybiBtZTtcbn07XG5cbi8qKlxuICogU2V0IHJlc2l6ZVRvIGhlaWdodFxuICogQHBhcmFtIHRvSGVpZ2h0XG4gKiBAcmV0dXJucyB7Kn1cbiAqL1xuQ1NpbXBsZUxheW91dEFuaW1hdG9yLnByb3RvdHlwZS50b0hlaWdodCA9IGZ1bmN0aW9uICh0b0hlaWdodCkge1xuICAgIHZhciBtZSA9IHRoaXM7XG4gICAgbWUuX3RvSGVpZ2h0ID0gdG9IZWlnaHQ7XG4gICAgcmV0dXJuIG1lO1xufTtcblxuLyoqXG4gKiBTZXQgZnJvbSBhbHBoYVxuICogQHBhcmFtIGZyb21BbHBoYVxuICogQHJldHVybnMgeyp9XG4gKi9cbkNTaW1wbGVMYXlvdXRBbmltYXRvci5wcm90b3R5cGUuZnJvbUFscGhhID0gZnVuY3Rpb24gKGZyb21BbHBoYSkge1xuICAgIHZhciBtZSA9IHRoaXM7XG4gICAgbWUuX2NyckFscGhhID0gZnJvbUFscGhhO1xuXG4gICAgcmV0dXJuIG1lO1xufTtcblxuLyoqXG4gKiBTZXQgdG8gYWxwaGFcbiAqIEBwYXJhbSB0b0FscGhhXG4gKiBAcmV0dXJucyB7Kn1cbiAqL1xuQ1NpbXBsZUxheW91dEFuaW1hdG9yLnByb3RvdHlwZS50b0FscGhhID0gZnVuY3Rpb24gKHRvQWxwaGEpIHtcbiAgICB2YXIgbWUgPSB0aGlzO1xuICAgIG1lLl90b0FscGhhID0gdG9BbHBoYTtcblxuICAgIHJldHVybiBtZTtcbn07XG5cbi8qKlxuICogU2V0IG1vdmUgdG8gcG9zaXRpb25cbiAqIEBwYXJhbSB4XG4gKiBAcGFyYW0geVxuICogQHJldHVybnMgeyp9XG4gKi9cbkNTaW1wbGVMYXlvdXRBbmltYXRvci5wcm90b3R5cGUudG9Qb3NpdGlvbiA9IGZ1bmN0aW9uICh4LCB5KSB7XG4gICAgdmFyIG1lID0gdGhpcztcbiAgICBtZS5fdG9YID0geDtcbiAgICBtZS5fdG9ZID0geTtcbiAgICByZXR1cm4gbWU7XG59O1xuXG4vKipcbiAqIFNldCBtb3ZlIHRvIHhcbiAqIEBwYXJhbSB4XG4gKiBAcmV0dXJucyB7Kn1cbiAqL1xuQ1NpbXBsZUxheW91dEFuaW1hdG9yLnByb3RvdHlwZS50b1ggPSBmdW5jdGlvbiAoeCkge1xuICAgIHZhciBtZSA9IHRoaXM7XG4gICAgbWUuX3RvWCA9IHg7XG4gICAgcmV0dXJuIG1lO1xufTtcblxuLyoqXG4gKiBTZXQgbW92ZSB0byB5XG4gKiBAcGFyYW0gdFxuICogQHJldHVybnMgeyp9XG4gKi9cbkNTaW1wbGVMYXlvdXRBbmltYXRvci5wcm90b3R5cGUudG9ZID0gZnVuY3Rpb24gKHQpIHtcbiAgICB2YXIgbWUgPSB0aGlzO1xuICAgIG1lLl90b1kgPSB0O1xuICAgIHJldHVybiBtZTtcbn07XG5cblxuQ1NpbXBsZUxheW91dEFuaW1hdG9yLnByb3RvdHlwZS5zdGFydCA9IGZ1bmN0aW9uICh3YWl0TWlsbGlzLCByZXF1ZXN0Rm9jdXNFbmFibGVkKSB7XG5cblxuICAgIHZhciBtZSA9IHRoaXM7XG5cbiAgICB2YXIgZnJvbVdpZHRoID0gbWUuX2NycldpZHRoO1xuICAgIHZhciBmcm9tSGVpZ2h0ID0gbWUuX2NyckhlaWdodDtcblxuICAgIHZhciBmcm9tWCA9IG1lLl9waW5YO1xuICAgIHZhciBmcm9tWSA9IG1lLl9waW5ZO1xuXG4gICAgdmFyIGZyb21BbHBoYSA9IG1lLl9jcnJBbHBoYTtcblxuXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcblxuXG4gICAgICAgIHZhciBudW1PZlN0ZXBzID0gcGFyc2VJbnQobWUuZnBzICogKG1lLmR1cmF0aW9uTWlsbGlzIC8gMTAwMCkpO1xuICAgICAgICBpZihudW1PZlN0ZXBzPT0wKXtudW1PZlN0ZXBzPTE7fVxuXG4gICAgICAgIHZhciBkZWx0YVdpZHRoID0gKG1lLl90b1dpZHRoIC0gZnJvbVdpZHRoKSAvIG51bU9mU3RlcHM7XG4gICAgICAgIHZhciBkZWx0YUhlaWdodCA9IChtZS5fdG9IZWlnaHQgLSBmcm9tSGVpZ2h0KSAvIG51bU9mU3RlcHM7XG5cbiAgICAgICAgdmFyIGRlbHRhWCA9IChtZS5fdG9YIC0gZnJvbVgpIC8gbnVtT2ZTdGVwcztcbiAgICAgICAgdmFyIGRlbHRhWSA9IChtZS5fdG9ZIC0gZnJvbVkpIC8gbnVtT2ZTdGVwcztcblxuICAgICAgICB2YXIgZGVsdGFBbHBoYSA9IChtZS5fdG9BbHBoYSAtIGZyb21BbHBoYSkgLyBudW1PZlN0ZXBzO1xuXG4gICAgICAgIHZhciB1bml0TWlsbGlzID0gbWUuZHVyYXRpb25NaWxsaXMgLyBudW1PZlN0ZXBzO1xuXG4gICAgICAgIHZhciBpZHggPSAwO1xuXG5cbiAgICAgICAgZnVuY3Rpb24gbG9vcCgpIHtcbiAgICAgICAgICAgIHZhciB0aW1lciA9IG5ldyBDVGltZXIoKTtcblxuICAgICAgICAgICAgdGltZXIuc2V0SW50ZXJ2YWxNaWxsaXModW5pdE1pbGxpcyk7XG5cbiAgICAgICAgICAgIHRpbWVyLnNldENhbGxiYWNrKGZ1bmN0aW9uICh0aW1lcikge1xuXG4gICAgICAgICAgICAgICAgaWYgKGlkeCA9PSBudW1PZlN0ZXBzKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgdmFyIF93aWR0aCA9IG1lLl90b1dpZHRoO1xuICAgICAgICAgICAgICAgICAgICB2YXIgX2hlaWdodCA9IG1lLl90b0hlaWdodDtcblxuICAgICAgICAgICAgICAgICAgICB2YXIgX3ggPSBmcm9tWCArIGRlbHRhWCAqIGlkeDtcbiAgICAgICAgICAgICAgICAgICAgdmFyIF95ID0gZnJvbVkgKyBkZWx0YVkgKiBpZHg7XG5cbiAgICAgICAgICAgICAgICAgICAgdmFyIF9hbHBoYSA9IG1lLl90b0FscGhhO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChtZS5waW5uZWRBbmltYXRpb25FbmFibGVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvL21lLnRhcmdldEZyYW1lLl9zZXRQb3NpdGlvbkludGVybmFsbHkobWUuX3BpblgsIG1lLl9waW5ZLCBtZS5fcGluQW5jaG9yLCBfd2lkdGgsIF9oZWlnaHQpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBtZS50YXJnZXRGcmFtZS5fc2V0UG9zaXRpb25JbnRlcm5hbGx5KF94LCBfeSwgbWUuX3BpbkFuY2hvciwgX3dpZHRoLCBfaGVpZ2h0KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKG1lLnRhcmdldEZyYW1lLmh0bWxFbGVtZW50LnN0eWxlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtZS50YXJnZXRGcmFtZS5odG1sRWxlbWVudC5zdHlsZS5vcGFjaXR5ID0gX2FscGhhO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLy9tZS50YXJnZXRGcmFtZS5yZXNpemVEaXJlY3QoX3dpZHRoLCBfaGVpZ2h0LGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgbWUudGFyZ2V0RnJhbWUuc2V0U2l6ZShfd2lkdGgsIF9oZWlnaHQsIHRydWUpO1xuXG4gICAgICAgICAgICAgICAgICAgIG1lLl9jcnJXaWR0aCA9IF93aWR0aDtcbiAgICAgICAgICAgICAgICAgICAgbWUuX2NyckhlaWdodCA9IF9oZWlnaHQ7XG5cbiAgICAgICAgICAgICAgICAgICAgbWUuX3BpblggPSBfeDtcbiAgICAgICAgICAgICAgICAgICAgbWUuX3BpblkgPSBfeTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoaWR4ID09IChudW1PZlN0ZXBzICsgMSkpIHtcbiAgICAgICAgICAgICAgICAgICAgLy9TdG9wIHRpbWVyIGFmdGVyIGxhc3QgZHJhdyB1cGRhdGUuXG4gICAgICAgICAgICAgICAgICAgIHRpbWVyLnN0b3BUaW1lcigpO1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKG1lKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cblxuXG4gICAgICAgICAgICAgICAgdmFyIF93aWR0aCA9IGZyb21XaWR0aCArIGRlbHRhV2lkdGggKiBpZHg7XG4gICAgICAgICAgICAgICAgdmFyIF9oZWlnaHQgPSBmcm9tSGVpZ2h0ICsgZGVsdGFIZWlnaHQgKiBpZHg7XG5cbiAgICAgICAgICAgICAgICB2YXIgX3ggPSBmcm9tWCArIGRlbHRhWCAqIGlkeDtcbiAgICAgICAgICAgICAgICB2YXIgX3kgPSBmcm9tWSArIGRlbHRhWSAqIGlkeDtcblxuICAgICAgICAgICAgICAgIHZhciBfYWxwaGEgPSBmcm9tQWxwaGEgKyBkZWx0YUFscGhhICogaWR4O1xuXG4gICAgICAgICAgICAgICAgaWYgKG1lLnBpbm5lZEFuaW1hdGlvbkVuYWJsZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgLy9tZS50YXJnZXRGcmFtZS5fc2V0UG9zaXRpb25JbnRlcm5hbGx5KG1lLl9waW5YLCBtZS5fcGluWSwgbWUuX3BpbkFuY2hvciwgX3dpZHRoLCBfaGVpZ2h0KTtcbiAgICAgICAgICAgICAgICAgICAgbWUudGFyZ2V0RnJhbWUuX3NldFBvc2l0aW9uSW50ZXJuYWxseShfeCwgX3ksIG1lLl9waW5BbmNob3IsIF93aWR0aCwgX2hlaWdodCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKG1lLnRhcmdldEZyYW1lLmh0bWxFbGVtZW50LnN0eWxlKSB7XG4gICAgICAgICAgICAgICAgICAgIG1lLnRhcmdldEZyYW1lLmh0bWxFbGVtZW50LnN0eWxlLm9wYWNpdHkgPSBfYWxwaGE7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy9tZS50YXJnZXRGcmFtZS5yZXNpemVEaXJlY3QoX3dpZHRoLCBfaGVpZ2h0LGZhbHNlKTtcbiAgICAgICAgICAgICAgICBtZS50YXJnZXRGcmFtZS5zZXRTaXplKF93aWR0aCwgX2hlaWdodCwgdHJ1ZSk7XG5cbiAgICAgICAgICAgICAgICBpZiAoaWR4ID09IDApIHtcblxuICAgICAgICAgICAgICAgICAgICAvL2NoZWNrIHdpbmRvdyBleGlzdGVuY2VcbiAgICAgICAgICAgICAgICAgICAgdmFyIHdtZ3IgPSBtZS50YXJnZXRGcmFtZS5wYXJlbnRDYW52YXM7XG4gICAgICAgICAgICAgICAgICAgIHZhciBfdGFyZ2V0RnJhbWUgPSB3bWdyLmdldFdpbmRvdyhtZS50YXJnZXRGcmFtZS5pZCk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChfdGFyZ2V0RnJhbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lLnRhcmdldEZyYW1lLnNob3coe3JlcXVlc3RGb2N1czogcmVxdWVzdEZvY3VzRW5hYmxlZH0pO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy90aGUgdGFyZ2V0IHdpbmRvdyBtdXN0IGJlIGRlbGV0ZWQuXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZHgrKztcbiAgICAgICAgICAgIH0pO1xuXG5cbiAgICAgICAgICAgIHRpbWVyLnN0YXJ0VGltZXIoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh3YWl0TWlsbGlzKSB7XG5cbiAgICAgICAgICAgIHZhciB3YWl0ZXIgPSBuZXcgQ1RpbWVyKCk7XG4gICAgICAgICAgICB3YWl0ZXIuc2V0SW50ZXJ2YWxNaWxsaXMod2FpdE1pbGxpcyk7XG4gICAgICAgICAgICB3YWl0ZXIuc2V0Q2FsbGJhY2soZnVuY3Rpb24gKF90aW1lcikge1xuICAgICAgICAgICAgICAgIF90aW1lci5zdG9wVGltZXIoKTtcblxuICAgICAgICAgICAgICAgIGxvb3AoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgd2FpdGVyLnN0YXJ0VGltZXIoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxvb3AoKTtcbiAgICAgICAgfVxuXG5cbiAgICB9KTtcblxufTsvL3N0YXJ0XG5cbi8qKlxuICogZW5kIG9mIENTaW1wbGVMYXlvdXRBbmltYXRvciBjbGFzc1xuICovXG4vLystKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy1cblxuXG5tb2R1bGUuZXhwb3J0cyA9IENTaW1wbGVMYXlvdXRBbmltYXRvcjsiLCJcbi8qKlxuICogQ1RpbWVyIGNsYXNzPGJyPlxuICogQ29weXJpZ2h0IDIwMDctIFRvbSBNaXNhd2EsIHJpdmVyc3VuLm9yZ0BnbWFpbC5jb21cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5IG9mXG4gKiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZVxuICogU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSxcbiAqIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGVcbiAqIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLFxuICogc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsXG4gKiBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1IgSU1QTElFRCxcbiAqICBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQVxuICogUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SXG4gKiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksXG4gKiBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SXG4gKiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuICpcbiAqIEhvdyB0byB1c2U6XG4gKiAgdmFyIHRpbWVyID0gbmV3IENUaW1lcigpO1xuICogICAgdmFyIHZhbHVlID0gMDtcbiAqXG4gKiAgICB0aW1lci5zZXRDYWxsYmFjayhmdW5jdGlvbiAodGltZXJPYmopIHtcbiAqICAgICAgICB2YWx1ZSsrO1xuICogICAgICAgIGNvbnNvbGUubG9nKHZhbHVlKTtcbiAqICAgICAgICBpZiAodmFsdWUgPT0gMTAwKSB7XG4gKiAgICAgICAgICAgIHRpbWVyT2JqLnN0b3BUaW1lcigpO1xuICogICAgICAgIH1cbiAqICAgIH0pO1xuICogICAgdGltZXIuc2V0SW50ZXJ2YWxNaWxsaXMoMTAwKTtcbiAqICAgIHRpbWVyLnN0YXJ0VGltZXIoKTtcbiAqXG4gKiBAYXV0aG9yIFRvbSBNaXNhd2EgKHJpdmVyc3VuLm9yZ0BnbWFpbC5jb20pXG4gKi9cblxudmFyIENUaW1lciA9XG4gICAgKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZnVuY3Rpb24gQ1RpbWVyKCkge1xuICAgICAgICAgICAgdmFyIG1lID0gdGhpcztcblxuICAgICAgICAgICAgbWUuX3RpbWVySWQgPSBudWxsO1xuICAgICAgICAgICAgbWUuX2lzUnVubmluZyA9IGZhbHNlO1xuICAgICAgICAgICAgbWUuX3RpbWVySW50ZXJ2YWwgPSAwO1xuXG4gICAgICAgICAgICBtZS5faW50ZXJuYWxDYWxsYmFjayA9IF9pbnRlcm5hbENhbGxiYWNrO1xuICAgICAgICAgICAgbWUuX3RpbWVyTWV0aG9kID0gbnVsbDtcblxuXG4gICAgICAgICAgICBmdW5jdGlvbiBfaW50ZXJuYWxDYWxsYmFjaygpIHtcbiAgICAgICAgICAgICAgICBpZiAobWUuX3RpbWVyTWV0aG9kKSB7XG4gICAgICAgICAgICAgICAgICAgIG1lLl90aW1lck1ldGhvZChtZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChtZS5faXNSdW5uaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dChtZS5fdGltZXJJZCk7XG4gICAgICAgICAgICAgICAgICAgIG1lLl90aW1lcklkID0gc2V0VGltZW91dChtZS5faW50ZXJuYWxDYWxsYmFjaywgbWUuX3RpbWVySW50ZXJ2YWwpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIENUaW1lci5wcm90b3R5cGUuc2V0Q2FsbGJhY2sgPSBmdW5jdGlvbiAoY2FsbGJhY2tfZnVuYykge1xuICAgICAgICAgICAgdmFyIG1lID0gdGhpcztcbiAgICAgICAgICAgIG1lLl90aW1lck1ldGhvZCA9IGNhbGxiYWNrX2Z1bmM7XG4gICAgICAgICAgICByZXR1cm4gbWU7XG4gICAgICAgIH07XG5cbiAgICAgICAgQ1RpbWVyLnByb3RvdHlwZS5zZXRJbnRlcnZhbE1pbGxpcyA9IGZ1bmN0aW9uIChpbnRlcnZhbCkge1xuICAgICAgICAgICAgdmFyIG1lID0gdGhpcztcbiAgICAgICAgICAgIG1lLl90aW1lckludGVydmFsID0gaW50ZXJ2YWw7XG4gICAgICAgICAgICByZXR1cm4gbWU7XG4gICAgICAgIH07XG5cbiAgICAgICAgQ1RpbWVyLnByb3RvdHlwZS5zdG9wVGltZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgbWUgPSB0aGlzO1xuICAgICAgICAgICAgbWUuX2lzUnVubmluZyA9IGZhbHNlO1xuICAgICAgICAgICAgcmV0dXJuIG1lO1xuICAgICAgICB9O1xuXG4gICAgICAgIENUaW1lci5wcm90b3R5cGUuc3RhcnRUaW1lciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBtZSA9IHRoaXM7XG4gICAgICAgICAgICBpZiAobWUuX3RpbWVySW50ZXJ2YWwgPiAwKSB7XG4gICAgICAgICAgICAgICAgbWUuX3RpbWVySWQgPSBzZXRUaW1lb3V0KG1lLl9pbnRlcm5hbENhbGxiYWNrLCBtZS5fdGltZXJJbnRlcnZhbCk7XG4gICAgICAgICAgICAgICAgbWUuX2lzUnVubmluZyA9IHRydWU7XG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBtZTtcbiAgICAgICAgfTtcblxuXG4gICAgICAgIHJldHVybiBDVGltZXI7XG4gICAgfSkoKTtcbi8qKlxuICogZW5kIG9mIENUaW1lciBjbGFzc1xuICovXG4vLystKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy1cbm1vZHVsZS5leHBvcnRzID0gQ1RpbWVyOyIsIlxudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL0pTRnJhbWUuY3NzXCIpO1xuXG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcblxudmFyIHRyYW5zZm9ybTtcbnZhciBpbnNlcnRJbnRvO1xuXG5cblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxuXG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxub3B0aW9ucy5pbnNlcnRJbnRvID0gdW5kZWZpbmVkO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL0pTRnJhbWUuY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9KU0ZyYW1lLmNzc1wiKTtcblxuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXG5cdFx0dmFyIGxvY2FscyA9IChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHR2YXIga2V5LCBpZHggPSAwO1xuXG5cdFx0XHRmb3Ioa2V5IGluIGEpIHtcblx0XHRcdFx0aWYoIWIgfHwgYVtrZXldICE9PSBiW2tleV0pIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWR4Kys7XG5cdFx0XHR9XG5cblx0XHRcdGZvcihrZXkgaW4gYikgaWR4LS07XG5cblx0XHRcdHJldHVybiBpZHggPT09IDA7XG5cdFx0fShjb250ZW50LmxvY2FscywgbmV3Q29udGVudC5sb2NhbHMpKTtcblxuXHRcdGlmKCFsb2NhbHMpIHRocm93IG5ldyBFcnJvcignQWJvcnRpbmcgQ1NTIEhNUiBkdWUgdG8gY2hhbmdlZCBjc3MtbW9kdWxlcyBsb2NhbHMuJyk7XG5cblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsIi8qKlxuICogSlNGcmFtZSB2ZXIuMS4zLjMgLSBBIGphdmFzY3JpcHQgZmxvYXRpbmcgd2luZG93IGxpYnJhcnlcbiAqXG4gKiBDb3B5cmlnaHQgMjAwNy0yMDE5IFRvbSBNaXNhd2EsIHJpdmVyc3VuLm9yZ0BnbWFpbC5jb21cbiAqIENvcHlyaWdodCAyMDA3LTIwMTkgd2ViMmRyaXZlci5jb21cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5IG9mXG4gKiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZVxuICogU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSxcbiAqIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGVcbiAqIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLFxuICogc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsXG4gKiBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1IgSU1QTElFRCxcbiAqICBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQVxuICogUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SXG4gKiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksXG4gKiBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SXG4gKiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuICpcbiAqL1xuXG5cInVzZSBzdHJpY3RcIjtcblxucmVxdWlyZShcIi4vSlNGcmFtZS5jc3NcIik7XG5cbnZhciBXaW5kb3dFdmVudEhlbHBlciA9IHJlcXVpcmUoXCIuL1dpbmRvd0V2ZW50SGVscGVyLmpzXCIpO1xudmFyIENBTElHTiA9IHJlcXVpcmUoXCIuL0NDb21tb24uanNcIik7XG5cbnZhciBDU2ltcGxlTGF5b3V0QW5pbWF0b3IgPSByZXF1aXJlKFwiLi9DU2ltcGxlTGF5b3V0QW5pbWF0b3IuanNcIik7XG5cbi8vSWYgeW91IGRvbid0IHdhbnQgdG8gYnVuZGxlIHByZXNldCBzdHlsZXMgaW4gSnNGcmFtZS5qcyAsY29tbWVudCBvdXQgYmVsb3cuXG4vLyB2YXIgcHJlc2V0U3R5bGVUb2FzdCA9IHJlcXVpcmUoJy4vUHJlc2V0U3R5bGVUb2FzdC5qcycpO1xuLy8gdmFyIHByZXNldFN0eWxlTWF0ZXJpYWwgPSByZXF1aXJlKCcuL1ByZXNldFN0eWxlTWF0ZXJpYWwuanMnKTtcblxudmFyIHByZXNldFN0eWxlcyA9IHtcbiAgeW9zZW1pdGU6IHJlcXVpcmUoXCIuL1ByZXNldFN0eWxlWW9zZW1pdGUuanNcIiksXG4gIHJlZHN0b25lOiByZXF1aXJlKFwiLi9QcmVzZXRTdHlsZVJlZHN0b25lLmpzXCIpLFxuICBwb3B1cDogcmVxdWlyZShcIi4vUHJlc2V0U3R5bGVQb3B1cC5qc1wiKSxcbiAgdG9hc3Q6IHJlcXVpcmUoXCIuL1ByZXNldFN0eWxlVG9hc3QuanNcIiksXG4gIG1hdGVyaWFsOiByZXF1aXJlKFwiLi9QcmVzZXRTdHlsZU1hdGVyaWFsLmpzXCIpXG59O1xuXG52YXIgREVGID0ge307XG5cbi8qKlxuICogQ0ZyYW1lQXBwZWFyYW5jZSBjbGFzczxicj5cbiAqIEFwcGVhcmFuY2UgTW9kZWwgQ2xhc3MgZm9yIEZyYW1lXG4gKlxuICovXG5mdW5jdGlvbiBDRnJhbWVBcHBlYXJhbmNlKCkge1xuICB2YXIgbWUgPSB0aGlzO1xuXG4gIHRoaXMuc2hvd1RpdGxlQmFyID0gdHJ1ZTtcbiAgdGhpcy5zaG93Q2xvc2VCdXR0b24gPSB0cnVlO1xuICB0aGlzLnRpdGxlQmFyQ2FwdGlvbiA9IFwiXCI7XG4gIHRoaXMudGl0bGVCYXJDYXB0aW9uRm9udFNpemUgPSBcIjEycHhcIjtcbiAgdGhpcy50aXRsZUJhckNhcHRpb25Gb250V2VpZ2h0ID0gXCJib2xkXCI7XG4gIHRoaXMudGl0bGVCYXJIZWlnaHQgPSBcIjI0cHhcIjtcblxuICB0aGlzLnVzZUlmcmFtZSA9IGZhbHNlO1xuICB0aGlzLnVzZUZyYW1lID0gdHJ1ZTtcblxuICB0aGlzLnNldFVzZUlGcmFtZSA9IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgbWUudXNlSWZyYW1lID0gdmFsdWU7XG4gICAgbWUudXNlRnJhbWUgPSAhdmFsdWU7XG4gICAgcmV0dXJuIG1lO1xuICB9O1xuXG4gIC8qKlxuICAgKiBUaGUgcG9zaXRpb24gZnJvbSB0aGUgbGVmdCBzaWRlIG9mIHRoZSBjYXB0aW9uLiBJZiB0aGlzIHZhbHVlIGlzIG51bGwsIGNhcHRpb24gd2lsbCBiZSBjZW50ZXJlZC5cbiAgICovXG4gIHRoaXMudGl0bGVCYXJDYXB0aW9uTGVmdE1hcmdpbiA9IFwiNXB4XCI7XG5cbiAgdGhpcy50aXRsZUJhckNvbG9yRGVmYXVsdCA9IFwibGlnaHRncmF5XCI7XG4gIHRoaXMudGl0bGVCYXJDb2xvckZvY3VzZWQgPSBcIiNkM2UxZWVcIjtcbiAgdGhpcy50aXRsZUJhckNhcHRpb25Db2xvckRlZmF1bHQgPSBcIlwiO1xuICB0aGlzLnRpdGxlQmFyQ2FwdGlvbkNvbG9yRm9jdXNlZCA9IFwiXCI7XG4gIHRoaXMudGl0bGVCYXJDYXB0aW9uVGV4dFNoYWRvdyA9IFwiMCAxcHggMCByZ2JhKDI1NSwyNTUsMjU1LC43KVwiO1xuICB0aGlzLnRpdGxlQmFyQ2FwdGlvblRleHRBbGlnbiA9IFwiY2VudGVyXCI7XG5cbiAgdGhpcy50aXRsZUJhckJvcmRlckJvdHRvbURlZmF1bHQgPSBcIjFweCBzb2xpZCByZ2JhKDAsMCwwLDAuMilcIjtcbiAgdGhpcy50aXRsZUJhckJvcmRlckJvdHRvbUZvY3VzZWQgPSBudWxsO1xuXG4gIHRoaXMuZnJhbWVCb3JkZXJSYWRpdXMgPSBcIjZweFwiO1xuXG4gIHRoaXMuZnJhbWVCb3JkZXJXaWR0aERlZmF1bHQgPSBcIjFweFwiO1xuICB0aGlzLmZyYW1lQm9yZGVyV2lkdGhGb2N1c2VkID0gdGhpcy5mcmFtZUJvcmRlcldpZHRoRGVmYXVsdDtcblxuICB0aGlzLmZyYW1lQm9yZGVyQ29sb3JEZWZhdWx0ID0gXCJyZ2JhKDEsIDEsIDEsIDAuMilcIjtcbiAgdGhpcy5mcmFtZUJvcmRlckNvbG9yRm9jdXNlZCA9IHRoaXMuZnJhbWVCb3JkZXJDb2xvckRlZmF1bHQ7XG5cbiAgdGhpcy5mcmFtZUJvcmRlclN0eWxlID0gXCJzb2xpZFwiO1xuICB0aGlzLmZyYW1lQm94U2hhZG93ID0gXCIycHggM3B4IDE2cHggcmdiYSgwLDAsMCwuNilcIjtcbiAgdGhpcy5mcmFtZUJhY2tncm91bmRDb2xvciA9IFwidHJhbnNwYXJlbnRcIjtcblxuICB0aGlzLl9wYXJ0c0J1aWxkZXIgPSBudWxsO1xuXG4gIHRoaXMuZnJhbWVDb21wb25lbnRzID0gW107XG5cbiAgdGhpcy5mcmFtZUhlaWdodEFkanVzdCA9IDE7XG5cbiAgdGhpcy5nZXRGcmFtZUlubmVyQm9yZGVyUmFkaXVzID0gZnVuY3Rpb24ocmVmLCBoYXNGb2N1cykge1xuICAgIGlmICghcmVmKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChoYXNGb2N1cykge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgcGFyc2VJbnQocmVmLmZyYW1lQm9yZGVyUmFkaXVzLCAxMCkgLVxuICAgICAgICBwYXJzZUludChyZWYuZnJhbWVCb3JkZXJXaWR0aEZvY3VzZWQsIDEwKSArXG4gICAgICAgIFwicHhcIlxuICAgICAgKTtcbiAgICB9XG4gICAgcmV0dXJuIChcbiAgICAgIHBhcnNlSW50KHJlZi5mcmFtZUJvcmRlclJhZGl1cywgMTApIC1cbiAgICAgIHBhcnNlSW50KHJlZi5mcmFtZUJvcmRlcldpZHRoRGVmYXVsdCwgMTApICtcbiAgICAgIFwicHhcIlxuICAgICk7XG4gIH07XG5cbiAgdGhpcy5vbkluaXRpYWxpemUgPSBmdW5jdGlvbigpIHtcbiAgICAvL0FkZCBjbG9zZSBidXR0b24gaWYgbmVlZGVkXG4gICAgaWYgKG1lLnNob3dDbG9zZUJ1dHRvbikge1xuICAgICAgdmFyIHBhcnRzQnVpbGRlciA9IG1lLmdldFBhcnRzQnVpbGRlcigpLFxuICAgICAgICBjcm9zc01hcmswID0gXCJcXHUyNzRjXCIsXG4gICAgICAgIGNyb3NzTWFyazEgPSBcIlxcdTI3MTZcIixcbiAgICAgICAgY3Jvc3NNYXJrMiA9IFwiXFx1Mjc0ZVwiO1xuXG4gICAgICB2YXIgYnRuQXBwZWFyYW5jZSA9IHBhcnRzQnVpbGRlci5idWlsZFRleHRCdXR0b25BcHBlYXJhbmNlKCk7XG5cbiAgICAgIGJ0bkFwcGVhcmFuY2Uuc2l6ZSA9IDE0O1xuICAgICAgYnRuQXBwZWFyYW5jZS5jYXB0aW9uU2hpZnRZcHggPSAwO1xuICAgICAgYnRuQXBwZWFyYW5jZS5jYXB0aW9uRm9udFJhdGlvID0gMS4wO1xuICAgICAgYnRuQXBwZWFyYW5jZS5ib3JkZXJSYWRpdXMgPSAyO1xuICAgICAgYnRuQXBwZWFyYW5jZS5iYWNrZ3JvdW5kQ29sb3JQcmVzc2VkID0gXCJ0cmFuc3BhcmVudFwiO1xuICAgICAgYnRuQXBwZWFyYW5jZS5iYWNrZ3JvdW5kQ29sb3JEZWZhdWx0ID0gXCJ0cmFuc3BhcmVudFwiO1xuICAgICAgYnRuQXBwZWFyYW5jZS5jYXB0aW9uID0gY3Jvc3NNYXJrMTtcblxuICAgICAgYnRuQXBwZWFyYW5jZS5jYXB0aW9uQ29sb3JEZWZhdWx0ID0gXCJncmF5XCI7XG4gICAgICBidG5BcHBlYXJhbmNlLmNhcHRpb25Db2xvckZvY3VzZWQgPSBcImdyYXlcIjtcbiAgICAgIGJ0bkFwcGVhcmFuY2UuY2FwdGlvbkNvbG9ySG92ZXJlZCA9IFwic2lsdmVyXCI7XG4gICAgICBidG5BcHBlYXJhbmNlLmNhcHRpb25Db2xvclByZXNzZWQgPSBcImJsYWNrXCI7XG5cbiAgICAgIGJ0bkFwcGVhcmFuY2UuYm9yZGVyV2lkdGggPSAwO1xuICAgICAgYnRuQXBwZWFyYW5jZS5ib3JkZXJDb2xvckRlZmF1bHQgPSBcIiNhYWFhYWFcIjtcbiAgICAgIGJ0bkFwcGVhcmFuY2UuYm9yZGVyU3R5bGUgPSBcInNvbGlkXCI7XG5cbiAgICAgIHZhciBjbG9zZUJ0bkVsZSA9IHBhcnRzQnVpbGRlci5idWlsZFRleHRCdXR0b24oYnRuQXBwZWFyYW5jZSk7XG4gICAgICB2YXIgZWxlTGVmdCA9IC0xMDtcbiAgICAgIHZhciBlbGVUb3AgPSAtMTg7XG4gICAgICB2YXIgZWxlQWxpZ24gPSBcIlJJR0hUX1RPUFwiO1xuXG4gICAgICAvL2Nsb3NlQnV0dG9uIGlzIGEgc3BlY2lhbCBuYW1lXG4gICAgICB2YXIgZnJhbWVDb21wb25lbnQgPSBtZS5hZGRGcmFtZUNvbXBvbmVudChcbiAgICAgICAgXCJjbG9zZUJ1dHRvblwiLFxuICAgICAgICBjbG9zZUJ0bkVsZSxcbiAgICAgICAgZWxlTGVmdCxcbiAgICAgICAgZWxlVG9wLFxuICAgICAgICBlbGVBbGlnblxuICAgICAgKTtcbiAgICB9XG4gIH07XG5cbiAgdGhpcy5vblRpdGxlQmFyU3R5bGVJbml0aWFsaXplID0gZnVuY3Rpb24oKSB7fTtcbn1cblxuQ0ZyYW1lQXBwZWFyYW5jZS5wcm90b3R5cGUuZ2V0UGFydHNCdWlsZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBtZSA9IHRoaXM7XG4gIGlmIChtZS5fcGFydHNCdWlsZGVyID09PSBudWxsKSB7XG4gICAgbWUuX3BhcnRzQnVpbGRlciA9IG5ldyBDRG9tUGFydHNCdWlsZGVyKCk7XG4gIH1cbiAgcmV0dXJuIG1lLl9wYXJ0c0J1aWxkZXI7XG59O1xuQ0ZyYW1lQXBwZWFyYW5jZS5wcm90b3R5cGUuaW5pdGlhbGl6ZSA9IGZ1bmN0aW9uKCkge1xuICB2YXIgbWUgPSB0aGlzO1xuICBtZS5vbkluaXRpYWxpemUoKTtcbn07XG5cbi8qKlxuICogIEFkZCBGcmFtZUNvbXBvbmVudCBpbnRvIGZyYW1lXG4gKiAgRnJhbWVDb21wb25lbnQgaXMgYXR0YWNoZWQgdG8gRnJhbWUgYW5kIGl0IG1vdmVzIHdpdGggRnJhbWUuXG4gKlxuICogQHBhcmFtIGlkXG4gKiBAcGFyYW0gbXlEb21FbGVtZW50IERPTSBlbGVtZW50LlxuICogQHBhcmFtIHggIFJlbGF0aXZlIHggY29vZGluYXRlIGZyb20gdGhlIHNuYXAgcG9zaXRpb24gc3BlY2lmaWVkIGJ5IGFsaWdubWVudFxuICogQHBhcmFtIHkgIFJlbGF0aXZlIHkgY29vZGluYXRlIGZyb20gdGhlIHNuYXAgcG9zaXRpb24gc3BlY2lmaWVkIGJ5IGFsaWdubWVudFxuICogQHBhcmFtIGFsaWduICdMRUZUX1RPUCcgJ0NFTlRFUl9UT1AnICdSSUdIVF9UT1AnICdMRUZUX0NFTlRFUicgJ0NFTlRFUl9DRU5URVInICdSSUdIVF9DRU5URVInICdMRUZUX0JPVFRPTScgJ0NFTlRFUl9CT1RUT00nICdSSUdIVF9CT1RUT00nXG4gKiBAcmV0dXJucyB7Q0ZyYW1lQ29tcG9uZW50fVxuICpcbiAqL1xuQ0ZyYW1lQXBwZWFyYW5jZS5wcm90b3R5cGUuYWRkRnJhbWVDb21wb25lbnQgPSBmdW5jdGlvbihcbiAgaWQsXG4gIG15RG9tRWxlbWVudCxcbiAgeCxcbiAgeSxcbiAgYWxpZ24sXG4gIGV4dHJhXG4pIHtcbiAgLy8oaWQsIGZyYW1lLCBodG1sRWxlbWVudCwgeCwgeSwgYWxpZ24pXG4gIHZhciBmcmFtZUNvbXBvbmVudCA9IG5ldyBDRnJhbWVDb21wb25lbnQoXG4gICAgaWQsXG4gICAgbXlEb21FbGVtZW50LFxuICAgIHgsXG4gICAgeSxcbiAgICBhbGlnbixcbiAgICBleHRyYVxuICApO1xuXG4gIGlmIChteURvbUVsZW1lbnQuX29uVGFrZUZvY3VzICYmIG15RG9tRWxlbWVudC5fb25SZWxlYXNlRm9jdXMpIHtcbiAgICAvL2lmIHRoaXMgRE9NIGVsZW1lbnQgaGFzIHNwZWNpYWwgbWV0aG9kIGZvciBmb2N1c1xuICAgIC8vc2V0IGZvY3VzIGNhbGxiYWNrXG4gICAgZnJhbWVDb21wb25lbnQuc2V0Rm9jdXNDYWxsYmFjayhcbiAgICAgIG15RG9tRWxlbWVudC5fb25UYWtlRm9jdXMsXG4gICAgICBteURvbUVsZW1lbnQuX29uUmVsZWFzZUZvY3VzXG4gICAgKTtcbiAgfVxuXG4gIHRoaXMuZnJhbWVDb21wb25lbnRzLnB1c2goZnJhbWVDb21wb25lbnQpO1xuXG4gIHJldHVybiBmcmFtZUNvbXBvbmVudDtcbn07XG5cbi8vKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLVxuXG4vKipcbiAqICBFbmQgb2YgQ0ZyYW1lQXBwZWFyYW5jZSBjbGFzc1xuICovXG5cbi8qKlxuICogSW5oZXJpdGFuY2UgZnVuY3Rpb25cbiAqXG4gKiBAcGFyYW0gc3ViQ2xhc3NcbiAqIEBwYXJhbSBiYXNlQ2xhc3NcbiAqL1xuZnVuY3Rpb24gaW5oZXJpdChzdWJDbGFzcywgYmFzZUNsYXNzKSB7XG4gIGZ1bmN0aW9uIGNsYXp6KCkge31cblxuICBjbGF6ei5wcm90b3R5cGUgPSBiYXNlQ2xhc3MucHJvdG90eXBlO1xuICBzdWJDbGFzcy5wcm90b3R5cGUgPSBuZXcgY2xhenooKTtcblxuICBzdWJDbGFzcy5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBzdWJDbGFzcztcbiAgc3ViQ2xhc3Muc3VwZXJDb25zdHJ1Y3RvciA9IGJhc2VDbGFzcztcbiAgc3ViQ2xhc3Muc3VwZXJDbGFzcyA9IGJhc2VDbGFzcy5wcm90b3R5cGU7XG59XG5cbi8qKlxuICogRW5kIG9mIGluaGVyaXRhbmNlIGZ1bmN0aW9uXG4gKi9cblxuLy8rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstXG5cbi8qKlxuICogREVGSU5JVElPTlNcbiAqL1xuREVGLkNCRUFOID0ge307XG5ERUYuQ0JFQU4uSFRNTF9FTEVNRU5UID0gXCJzcGFuXCI7XG5ERUYuQ0JFQU4uSFRNTF9FTEVNRU5UX0lEX1BSRUZJWCA9IFwiaHRtbEVsZW1lbnRfXCI7XG5ERUYuQ0JFQU4uVFlQRV9OQU1FID0gXCJiZWFuXCI7XG5cbi8vKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLVxuXG4vKipcbiAqIENCZWFuRnJhbWUgQ2xhc3M8cD5cbiAqIFRoZSBzbWFsbGVzdCB3aW5kb3cuIEl0IGlzIHJlc3BvbnNpYmxlIGZvciBiYXNpYyBwcm9jZXNzaW5nIG9ubHkuXG4gKlxuICogQHBhcmFtIGJlYW5JZCBpZCBvZiB0aGlzIHNtYWxsIHdpbmRvd1xuICogQHBhcmFtIGxlZnRcbiAqIEBwYXJhbSB0b3BcbiAqIEBwYXJhbSB3aWR0aFxuICogQHBhcmFtIGhlaWdodFxuICogQHBhcmFtIHppbmRleFxuICogQGNvbnN0cnVjdG9yXG4gKi9cbmZ1bmN0aW9uIENCZWFuRnJhbWUoXG4gIGJlYW5JZCxcbiAgbGVmdCxcbiAgdG9wLFxuICB3aWR0aCxcbiAgaGVpZ2h0LFxuICB6aW5kZXgsXG4gIHdfYm9yZGVyX3dpZHRoLFxuICBhcHBlYXJhbmNlXG4pIHtcbiAgdmFyIG1lID0gdGhpcztcblxuICBtZS5tb3ZhYmxlID0gdHJ1ZTtcblxuICAvL2ZpZWxkc1xuICBtZS5pZCA9IGJlYW5JZDtcbiAgbWUucHJvcGVydHkgPSB7fTtcblxuICBtZS5leHRyYSA9IHt9O1xuXG4gIG1lLnBhcmVudENhbnZhcyA9IG51bGw7XG4gIG1lLmh0bWxFbGVtZW50ID0gbnVsbDtcblxuICBtZS5wdWxsVXBEaXNhYmxlZCA9IGZhbHNlO1xuICBpZiAoYXBwZWFyYW5jZSkge1xuICAgIG1lLnB1bGxVcERpc2FibGVkID0gYXBwZWFyYW5jZS5wdWxsVXBEaXNhYmxlZDtcbiAgfVxuXG4gIC8vaW5pdGlhbGl6ZVxuICBtZS5odG1sRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoREVGLkNCRUFOLkhUTUxfRUxFTUVOVCk7XG4gIG1lLmh0bWxFbGVtZW50LmlkID0gREVGLkNCRUFOLkhUTUxfRUxFTUVOVF9JRF9QUkVGSVggKyBiZWFuSWQ7XG4gIG1lLmh0bWxFbGVtZW50LnN0eWxlLnBvc2l0aW9uID0gXCJhYnNvbHV0ZVwiO1xuICBtZS5odG1sRWxlbWVudC5zdHlsZS5sZWZ0ID0gcGFyc2VJbnQobGVmdCwgMTApICsgXCJweFwiO1xuICBtZS5odG1sRWxlbWVudC5zdHlsZS50b3AgPSBwYXJzZUludCh0b3AsIDEwKSArIFwicHhcIjtcbiAgbWUuaHRtbEVsZW1lbnQuc3R5bGUud2lkdGggPSBwYXJzZUludCh3aWR0aCwgMTApICsgXCJweFwiO1xuICBtZS5odG1sRWxlbWVudC5zdHlsZS5oZWlnaHQgPSBwYXJzZUludChoZWlnaHQsIDEwKSArIFwicHhcIjtcblxuICAvL1ppbmRleCBtYXkgYmVjb21lICd1bmRlZmluZWQnIGluIHNvbWUgY2FzZXMuXG4gIGlmICh6aW5kZXggIT09IG51bGwpIHtcbiAgICBtZS5odG1sRWxlbWVudC5zdHlsZS56SW5kZXggPSB6aW5kZXg7XG4gIH1cbiAgbWUuaHRtbEVsZW1lbnQuc3R5bGUuYm9yZGVyQ29sb3IgPSBcIiMwMDAwMDBcIjtcblxuICAvL0lmIEkgc2V0IGEgbGFyZ2VyIGZvbnQgc2l6ZSwgd2lkdGggYW5kIGhlaWdodCBvZiB3aW5kb3cgd2lsbCBiZSBhZmZlY3RlZC4uLi5cbiAgbWUuaHRtbEVsZW1lbnQuc3R5bGUuZm9udFNpemUgPSBcIjFweFwiO1xuXG4gIC8vUmVmZXIgcGFyZW50cyB0byBlYWNoIG90aGVyLihzb3Vnby1zYW5zaG8pXG4gIG1lLmh0bWxFbGVtZW50LnBhcmVudCA9IG1lO1xuXG4gIC8vTm90ZSB0aGF0ICdtb3VzZURvd24nIGlzIG1hcHBlZCB0byAnb25tb3VzZWRvd24nIG9mIGh0bWxFbGVtZW50LFxuICAvL3NvIHdoZW4gJ29ubW91c2VEb3duJyBmaXJlcyAsdGhlICd0aGlzJyB3aWxsIGluZGljYXRlICdodG1sRWxlbWVudCdcbiAgbWUuaHRtbEVsZW1lbnQub25tb3VzZWRvd24gPSBtZS5vbm1vdXNlRG93bjtcblxuICAvL1R5cGUgbmFtZSBvZiB0aGlzIGNsYXNzXG4gIG1lLmh0bWxFbGVtZW50LnR5cGVOYW1lID0gREVGLkNCRUFOLlRZUEVfTkFNRTtcblxuICAvL1NwZWNpYWwgZmllbGQgaW5kaWNhdGluZyB1c2FnZSBvZiB0aGlzIGNsYXNzXG4gIG1lLmh0bWxFbGVtZW50LnVzYWdlID0gXCJub3RoaW5nXCI7XG5cbiAgLy9XaGV0aGVyIGl0IGNhbiBtb3ZlIG91dHNpZGUgdGhlIGZyYW1lKHdha3UpLlxuICBtZS5odG1sRWxlbWVudC5pc1JhbmdlTGltaXRlZCA9IGZhbHNlO1xuXG4gIC8vTW92ZW1lbnQgbWFnbmlmaWNhdGlvbiBpbiB0aGUgWCBkaXJlY3Rpb25cbiAgLy8oSWYgaXQgaXMgMCwgaXQgY2FuIG5vdCBtb3ZlIGluIHRoZSBYIGRpcmVjdGlvbi4pXG4gIG1lLmh0bWxFbGVtZW50LmFyZ1ggPSAxO1xuXG4gIC8vTW92ZW1lbnQgbWFnbmlmaWNhdGlvbiBpbiBZIGRpcmVjdGlvblxuICAvLyAoSWYgaXQgaXMgMCwgaXQgY2FuIG5vdCBtb3ZlIGluIFkgZGlyZWN0aW9uKVxuICBtZS5odG1sRWxlbWVudC5hcmdZID0gMTtcbiAgbWUuZXh0ZXJuYWxBcmVhQ2xpY2tlZExpc3RlbmVyID0gbnVsbDtcbn1cblxuLyoqXG4gKiBTZXQgd2hldGhlciB0aGUgZnJhbWUgY2FuIGJlIG1vdmVkIHdoaWxlIGRyYWdnaW5nIHdpdGggdGhlIG1vdXNlXG4gKiBAcGFyYW0gZW5hYmxlZFxuICovXG5DQmVhbkZyYW1lLnByb3RvdHlwZS5zZXRNb3ZhYmxlID0gZnVuY3Rpb24oZW5hYmxlZCkge1xuICB2YXIgbWUgPSB0aGlzO1xuXG4gIGlmIChlbmFibGVkKSB7XG4gICAgbWUuaHRtbEVsZW1lbnQuYXJnWCA9IDE7XG4gICAgbWUuaHRtbEVsZW1lbnQuYXJnWSA9IDE7XG4gIH0gZWxzZSB7XG4gICAgbWUuaHRtbEVsZW1lbnQuYXJnWCA9IDA7XG4gICAgbWUuaHRtbEVsZW1lbnQuYXJnWSA9IDA7XG4gIH1cblxuICBtZS5tb3ZhYmxlID0gZW5hYmxlZDtcblxuICByZXR1cm4gbWU7XG59O1xuXG5DQmVhbkZyYW1lLnByb3RvdHlwZS5zZXRQYXJlbnRDYW52YXMgPSBmdW5jdGlvbihwYXJlbnRDYW52YXMpIHtcbiAgdmFyIG1lID0gdGhpcztcbiAgbWUucGFyZW50Q2FudmFzID0gcGFyZW50Q2FudmFzO1xuICBtZS5odG1sRWxlbWVudC5wYXJlbnRDYW52YXMgPSBtZS5wYXJlbnRDYW52YXM7XG59O1xuQ0JlYW5GcmFtZS5wcm90b3R5cGUuc2V0T25FeHRlcm5hbEFyZWFDbGlja2VkTGlzdGVuZXIgPSBmdW5jdGlvbihsaXN0ZW5lcikge1xuICB2YXIgbWUgPSB0aGlzO1xuICBtZS5leHRlcm5hbEFyZWFDbGlja2VkTGlzdGVuZXIgPSBsaXN0ZW5lcjtcbn07XG5DQmVhbkZyYW1lLnByb3RvdHlwZS5vbkJvZHlDbGlja2VkID0gZnVuY3Rpb24oZSkge1xuICB2YXIgbWUgPSB0aGlzO1xuICB2YXIgY2xpY2tYID0gZS5wYWdlWDtcbiAgdmFyIGNsaWNrWSA9IGUucGFnZVk7XG5cbiAgdmFyIGxlZnQgPSBwYXJzZUludChtZS5odG1sRWxlbWVudC5zdHlsZS5sZWZ0KTtcbiAgdmFyIHRvcCA9IHBhcnNlSW50KG1lLmh0bWxFbGVtZW50LnN0eWxlLnRvcCk7XG4gIHZhciB3aWR0aCA9IHBhcnNlSW50KG1lLmh0bWxFbGVtZW50LnN0eWxlLndpZHRoKTtcbiAgdmFyIGhlaWdodCA9IHBhcnNlSW50KG1lLmh0bWxFbGVtZW50LnN0eWxlLmhlaWdodCk7XG5cbiAgaWYgKFxuICAgIGxlZnQgPCBjbGlja1ggJiZcbiAgICBjbGlja1ggPCBsZWZ0ICsgd2lkdGggJiZcbiAgICB0b3AgPCBjbGlja1kgJiZcbiAgICBjbGlja1kgPCB0b3AgKyBoZWlnaHRcbiAgKSB7XG4gICAgLy8tIGNsaWNrZWQgaW50ZXJuYWwgYXJlYSBvZiB0aGlzIGZyYW1lXG4gIH0gZWxzZSB7XG4gICAgLy8tIGNsaWNrZWQgZXh0ZXJuYWwgYXJlYSBvZiB0aGlzIGZyYW1lXG4gICAgaWYgKG1lLmV4dGVybmFsQXJlYUNsaWNrZWRMaXN0ZW5lcikge1xuICAgICAgbWUuZXh0ZXJuYWxBcmVhQ2xpY2tlZExpc3RlbmVyKCk7XG4gICAgfVxuICB9XG59O1xuQ0JlYW5GcmFtZS5wcm90b3R5cGUub25tb3VzZURvd24gPSBmdW5jdGlvbihlKSB7XG4gIC8vVGhpcyAndGhpcycgbWVhbnMgYSBodG1sRWxlbWVudFxuICB2YXIgcmVmSHRtbEVsZW1lbnQgPSB0aGlzO1xuXG4gIC8vUmV0cmlldmUgQ0JlYW5GcmFtZVxuICB2YXIgcmVmQ0JlYW5GcmFtZSA9IHJlZkh0bWxFbGVtZW50LnBhcmVudDtcblxuICBpZiAoZS5idXR0b24gPT0gMCkge1xuICAgIC8vIGZvciBtb2RhbCBiYWNrZ3JvdW5kIHdpbmRvd1xuICAgIGlmIChyZWZDQmVhbkZyYW1lLnB1bGxVcERpc2FibGVkKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlZkh0bWxFbGVtZW50LnBhcmVudENhbnZhcy5jdXJyZW50T2JqZWN0ID0gcmVmSHRtbEVsZW1lbnQ7XG4gICAgICAvL0JyaW5nIHRoZSBjdXJyZW50IGJlYW4gdG8gdGhlIHRvcFxuICAgICAgcmVmSHRtbEVsZW1lbnQucGFyZW50Q2FudmFzLnB1bGxVcChyZWZDQmVhbkZyYW1lLmlkKTtcbiAgICB9XG4gIH0gZWxzZSBpZiAoZS5idXR0b24gPT0gMikge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGlmIChyZWZIdG1sRWxlbWVudC5wYXJlbnRDYW52YXMuY3VycmVudE9iamVjdCkge1xuICAgIHJlZkh0bWxFbGVtZW50LnBhcmVudENhbnZhcy5vZmZzZXRYID1cbiAgICAgIGUucGFnZVggLVxuICAgICAgcGFyc2VJbnQocmVmSHRtbEVsZW1lbnQucGFyZW50Q2FudmFzLmN1cnJlbnRPYmplY3Quc3R5bGUubGVmdCwgMTApO1xuICAgIHJlZkh0bWxFbGVtZW50LnBhcmVudENhbnZhcy5vZmZzZXRZID1cbiAgICAgIGUucGFnZVkgLVxuICAgICAgcGFyc2VJbnQocmVmSHRtbEVsZW1lbnQucGFyZW50Q2FudmFzLmN1cnJlbnRPYmplY3Quc3R5bGUudG9wLCAxMCk7XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59O1xuLyoqXG4gKiBFbmQgb2YgQ0JlYW5GcmFtZSBDbGFzcyA8cD5cbiAqL1xuXG4vLystKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy1cblxuREVGLkNBTlZBUyA9IHt9O1xuREVGLkNBTlZBUy5IVE1MX0VMRU1FTlQgPSBcImRpdlwiO1xuREVGLkNBTlZBUy5XSURUSF9BREpVU1RfMjAxODA3MjIgPSAyO1xuREVGLkNBTlZBUy5IRUlHSFRfQURKVVNUXzIwMTgwNzIyID0gMztcblxuLyoqXG4gKiBDQ2FudmFzIGNsYXNzXG4gKiBBIGNhbnZhcyBpcyBhIHBsYWNlIHdoZXJlIHdpbmRvd3MgYXJlIGFycmFuZ2VkLCB3aGVyZSB5b3UgY2FuIGRyYWcgYW5kIG1vdmUgZnJlZWx5LlxuICpcbiAqIEBwYXJhbSBwYXJlbnRFbGVtZW50XG4gKiBAcGFyYW0gY2FudmFzSWRcbiAqIEBwYXJhbSBsZWZ0XG4gKiBAcGFyYW0gdG9wXG4gKiBAcGFyYW0gd2lkdGhcbiAqIEBwYXJhbSBoZWlnaHRcbiAqIEBjb25zdHJ1Y3RvclxuICovXG5mdW5jdGlvbiBDQ2FudmFzKHBhcmVudEVsZW1lbnQsIGNhbnZhc0lkLCBsZWZ0LCB0b3AsIHdpZHRoLCBoZWlnaHQpIHtcbiAgLy9FdmVudCBkYXRhIHRvIGJlIHRyYW5zbWl0dGVkXG4gIGZ1bmN0aW9uIEV2ZW50RGF0YSgpIHtcbiAgICB0aGlzLnggPSAwO1xuICAgIHRoaXMueSA9IDA7XG4gICAgdGhpcy5zY3JlZW5YID0gMDtcbiAgICB0aGlzLnNjcmVlblkgPSAwO1xuICAgIHRoaXMuZGVsdGFYID0gMDtcbiAgICB0aGlzLmRlbHRhWSA9IDA7XG4gICAgdGhpcy5pc01vdmVkID0gZmFsc2U7XG4gICAgdGhpcy50YXJnZXRUeXBlTmFtZSA9IG51bGw7XG4gICAgdGhpcy50YXJnZXRVc2FnZSA9IG51bGw7XG4gICAgdGhpcy50YXJnZXRPYmplY3QgPSBudWxsO1xuICB9XG5cbiAgdmFyIG1lID0gdGhpcztcblxuICBtZS5jdXJyZW50T2JqZWN0ID0gbnVsbDtcbiAgbWUub25Ub3BPYmplY3QgPSBudWxsO1xuICBtZS5vZmZzZXRYID0gMDtcbiAgbWUub2Zmc2V0WSA9IDA7XG5cbiAgLy9PYmplY3Qgd2hpY2ggZ2VuZXJhdGVkICdtb3VzZURvd24nIGV2ZW50IGF0IHRoZSB2ZXJ5IGJlZ2lubmluZyhpY2hpYmFuLXNhaXNobylcbiAgbWUubW91c2VEb3duU291cmNlID0gbnVsbDtcblxuICBtZS5pZCA9IGNhbnZhc0lkO1xuICBtZS5jYW52YXNFbGVtZW50ID0gbnVsbDtcbiAgbWUucGFyZW50RWxlbWVudCA9IHBhcmVudEVsZW1lbnQ7XG4gIG1lLmJlYW5MaXN0ID0gbmV3IEFycmF5KCk7XG5cbiAgbWUuYmVhbklkTmFtZSA9IHt9OyAvL2tleTpiZWFuSWQgdmFsdWU6YmVhbk5hbWVcbiAgbWUuYmVhbk5hbWVJZCA9IHt9OyAvL2tleTpiZWFuTmFtZSB2YWx1ZTpiZWFuSWRcblxuICBtZS5ldmVudERhdGEgPSBuZXcgRXZlbnREYXRhKCk7XG5cbiAgbWUuYmFzZVpJbmRleCA9IDA7XG4gIG1lLnNldEJhc2VaSW5kZXggPSBmdW5jdGlvbihiYXNlWkluZGV4KSB7XG4gICAgbWUuYmFzZVpJbmRleCA9IGJhc2VaSW5kZXg7XG4gIH07XG4gIG1lLmdldEJhc2VaSW5kZXggPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gbWUuYmFzZVpJbmRleDtcbiAgfTtcblxuICBtZS5jYW52YXNFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChERUYuQ0FOVkFTLkhUTUxfRUxFTUVOVCk7XG5cbiAgbWUuY2FudmFzRWxlbWVudC5zdHlsZS56SW5kZXggPSAyMDAwO1xuICBtZS5jYW52YXNFbGVtZW50LmlkID0gbWUuaWQ7XG4gIG1lLmNhbnZhc0VsZW1lbnQuc3R5bGUuYm94U2l6aW5nID0gXCJib3JkZXItYm94XCI7XG4gIG1lLmNhbnZhc0VsZW1lbnQuc3R5bGUucG9zaXRpb24gPSBcImFic29sdXRlXCI7XG4gIG1lLmNhbnZhc0VsZW1lbnQuc3R5bGUubGVmdCA9IHBhcnNlSW50KGxlZnQpICsgXCJweFwiO1xuICBtZS5jYW52YXNFbGVtZW50LnN0eWxlLnRvcCA9IHBhcnNlSW50KHRvcCkgKyBcInB4XCI7XG4gIC8vQWRkZWQgYW4gYWRqdXN0bWVudCB2YWx1ZS5CZWNhdXNlIHRyYW5zcGFyZW50IHBhcnQgYXBwZWFycyBhdCB0aGUgYm90dG9tIG9mIHRoZSBzY3JlZW4sXG4gIG1lLmNhbnZhc0VsZW1lbnQuc3R5bGUud2lkdGggPVxuICAgIHBhcnNlSW50KHdpZHRoKSArIERFRi5DQU5WQVMuV0lEVEhfQURKVVNUXzIwMTgwNzIyICsgXCJweFwiO1xuICBtZS5jYW52YXNFbGVtZW50LnN0eWxlLmhlaWdodCA9XG4gICAgcGFyc2VJbnQoaGVpZ2h0KSArIERFRi5DQU5WQVMuSEVJR0hUX0FESlVTVF8yMDE4MDcyMiArIFwicHhcIjtcbiAgbWUuY2FudmFzRWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInRyYW5zcGFyZW50XCI7XG4gIG1lLmNhbnZhc0VsZW1lbnQuc3R5bGUuYm9yZGVyU3R5bGUgPSBcIm5vbmVcIjtcbiAgbWUuY2FudmFzRWxlbWVudC5zdHlsZS5tYXJnaW4gPSBcIjBweFwiO1xuICBtZS5jYW52YXNFbGVtZW50LnN0eWxlLmJvcmRlcldpZHRoID0gXCIwcHhcIjtcbiAgbWUuY2FudmFzRWxlbWVudC5zdHlsZS5ib3JkZXJDb2xvciA9IFwidHJhbnNwYXJlbnRcIjtcblxuICAvL0FkZCB0aGUgQ2FudmFzJ3MgaHRtbCBlbGVtZW50IGludG8gdGhlIGNhbnZhcydzIHBhcmVudCBodG1sIGVsZW1lbnRcbiAgbWUucGFyZW50RWxlbWVudC5hcHBlbmRDaGlsZChtZS5jYW52YXNFbGVtZW50KTtcbn1cblxuQ0NhbnZhcy5wcm90b3R5cGUubW91c2VNb3ZlID0gZnVuY3Rpb24oZSkge1xuICB2YXIgbWUgPSB0aGlzO1xuXG4gIGlmIChtZS5jdXJyZW50T2JqZWN0KSB7XG4gICAgLy9ldmVudERhdGEuaXNNb3ZlZD10cnVlO1RoZSBwcmVzZW5jZSBvZiBldmVudCBkYXRhIG1lYW5zIHRoYXQgaXQgaGFzIG1vdmVkLlxuICAgIG1lLmV2ZW50RGF0YS50YXJnZXRUeXBlTmFtZSA9IG1lLmN1cnJlbnRPYmplY3QudHlwZU5hbWU7XG4gICAgbWUuZXZlbnREYXRhLnRhcmdldFVzYWdlID0gbWUuY3VycmVudE9iamVjdC51c2FnZTtcbiAgICBtZS5ldmVudERhdGEudGFyZ2V0T2JqZWN0ID0gbWUuY3VycmVudE9iamVjdDtcblxuICAgIC8vRXZlbiB3aGVuIG9iaiBpcyBub3QgYmVpbmcgZHJhZ2dlZCwgbW91c2UgY29vcmRpbmF0ZXMgYXJlIHVzZWQgaGVyZSBiZWNhdXNlIHRoZXkgYXJlIG5lZWRlZC5cbiAgICB2YXIgbmV3T2JqTGVmdFB4ID0gZS5wYWdlWCAtIG1lLm9mZnNldFg7XG4gICAgdmFyIG5ld09ialRvcFB4ID0gZS5wYWdlWSAtIG1lLm9mZnNldFk7XG5cbiAgICB2YXIgYWJzb2x1dGVNb3VzZVggPSBlLnBhZ2VYO1xuICAgIHZhciBhYnNvbHV0ZU1vdXNlWSA9IGUucGFnZVk7XG5cbiAgICAvL1Rha2UgdGhlIHNuYXBzaG90IGJlZm9yZSB1cGRhdGluZyB0aGUgbG9jYXRpb24uXG4gICAgdmFyIG9sZE9iakxlZnRQeCA9IG1lLmN1cnJlbnRPYmplY3Quc3R5bGUubGVmdDtcbiAgICB2YXIgb2xkT2JqVG9wUHggPSBtZS5jdXJyZW50T2JqZWN0LnN0eWxlLnRvcDtcblxuICAgIC8vV2hlbiB0aGUgbW91c2UgY3Vyc29yIGdvZXMgb3V0IG9mIHJhbmdlLFxuICAgIC8vdGhlIGFkZGl0aW9uIGluIHRoZSBYIGRpcmVjdGlvbiBhbmQgWSBkaXJlY3Rpb24gKGRlbHRhIFgsIGRlbHRhIFkpIGlzIHNldCB0byB6ZXJvLlxuICAgIC8vdGhpcy5sZWZ0PUNhdmFzJ3MgbGVmdCBzaWRlIGVkZ2UsIHRoaXMudG9wPUNhbnZhcydzIHRvcCBzaWRlIGVkZ2UuXG4gICAgdmFyIHRtcExlZnQgPSBwYXJzZUludChuZXdPYmpMZWZ0UHgsIDEwKTtcbiAgICB2YXIgdG1wVG9wID0gcGFyc2VJbnQobmV3T2JqVG9wUHgsIDEwKTtcblxuICAgIHZhciB0bXBSaWdodCA9IHRtcExlZnQgKyBwYXJzZUludChtZS5jdXJyZW50T2JqZWN0LnN0eWxlLndpZHRoLCAxMCk7XG4gICAgdmFyIHRtcEJvdHRvbSA9IHRtcFRvcCArIHBhcnNlSW50KG1lLmN1cnJlbnRPYmplY3Quc3R5bGUuaGVpZ2h0LCAxMCk7XG5cbiAgICB2YXIgc3R5bGVXaWR0aCA9IHBhcnNlSW50KG1lLmNhbnZhc0VsZW1lbnQuc3R5bGUud2lkdGgsIDEwKTtcbiAgICB2YXIgc3R5bGVIZWlnaHQgPSBwYXJzZUludChtZS5jYW52YXNFbGVtZW50LnN0eWxlLmhlaWdodCwgMTApO1xuXG4gICAgdmFyIGRlbHRhWCA9IDA7XG4gICAgdmFyIGRlbHRhWSA9IDA7XG5cbiAgICBpZiAoXG4gICAgICBtZS5jdXJyZW50T2JqZWN0LmlzUmFuZ2VMaW1pdGVkID09IHRydWUgJiZcbiAgICAgICh0bXBMZWZ0IDw9IDAgfHxcbiAgICAgICAgdG1wUmlnaHQgPiBzdHlsZVdpZHRoIHx8XG4gICAgICAgIHRtcFRvcCA8PSAwIHx8XG4gICAgICAgIHRtcEJvdHRvbSA+IHN0eWxlSGVpZ2h0KVxuICAgICkge1xuICAgICAgZGVsdGFYID0gMDtcbiAgICAgIGRlbHRhWSA9IDA7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRlbHRhWCA9IHBhcnNlSW50KG5ld09iakxlZnRQeCwgMTApIC0gcGFyc2VJbnQob2xkT2JqTGVmdFB4LCAxMCk7XG4gICAgICBkZWx0YVkgPSBwYXJzZUludChuZXdPYmpUb3BQeCwgMTApIC0gcGFyc2VJbnQob2xkT2JqVG9wUHgsIDEwKTtcbiAgICAgIG1lLmN1cnJlbnRPYmplY3Quc3R5bGUubGVmdCA9XG4gICAgICAgIHBhcnNlSW50KG1lLmN1cnJlbnRPYmplY3Quc3R5bGUubGVmdCkgK1xuICAgICAgICBkZWx0YVggKiBtZS5jdXJyZW50T2JqZWN0LmFyZ1ggK1xuICAgICAgICBcInB4XCI7XG4gICAgICBtZS5jdXJyZW50T2JqZWN0LnN0eWxlLnRvcCA9XG4gICAgICAgIHBhcnNlSW50KG1lLmN1cnJlbnRPYmplY3Quc3R5bGUudG9wKSArXG4gICAgICAgIGRlbHRhWSAqIG1lLmN1cnJlbnRPYmplY3QuYXJnWSArXG4gICAgICAgIFwicHhcIjtcbiAgICB9XG5cbiAgICBtZS5ldmVudERhdGEuZGVsdGFYID0gZGVsdGFYO1xuICAgIG1lLmV2ZW50RGF0YS5kZWx0YVkgPSBkZWx0YVk7XG5cbiAgICByZXR1cm4gbWUuZXZlbnREYXRhO1xuICB9XG4gIC8vUmV0dXJucyBudWxsIGlmIG5vbmUgb2YgdGhlIG9iamVjdHMgYXJlIGNsaWNrZWQgYW5kIHRoZSBvbmx5IG1vdXNlIGp1c3QgbW92ZXMuXG4gIHJldHVybiBudWxsO1xufTtcblxuQ0NhbnZhcy5wcm90b3R5cGUubW91c2VVcCA9IGZ1bmN0aW9uKGUpIHtcbiAgdmFyIG1lID0gdGhpcztcblxuICBtZS5jdXJyZW50T2JqZWN0ID0gbnVsbDtcbiAgbWUubW91c2VEb3duU291cmNlID0gbnVsbDtcbn07XG5cbi8vQnJpbmcgdGhlIG9iamVjdCBpbiBmcm9udFxuQ0NhbnZhcy5wcm90b3R5cGUucHVsbFVwID0gZnVuY3Rpb24odGFyZ2V0QmVhbklkKSB7XG4gIHZhciBtZSA9IHRoaXM7XG5cbiAgdmFyIHRtcEJlYW5BcnJheSA9IFtdO1xuXG4gIHZhciBiZWFuTGlzdCA9IG1lLmJlYW5MaXN0O1xuXG4gIGZvciAodmFyIGkgaW4gYmVhbkxpc3QpIHtcbiAgICB0bXBCZWFuQXJyYXkucHVzaChiZWFuTGlzdFtpXSk7XG4gIH1cblxuICAvL0JyaW5nIHRoZSB0YXJnZXQgb2JqZWN0IGluIGZyb250IGFuZCBzZXQgemluZGV4IHRvIDEuXG4gIHZhciB0YXJnZXRCZWFuID0gYmVhbkxpc3RbdGFyZ2V0QmVhbklkXTtcblxuICBtZS5wdWxsVXBTb3J0KHRhcmdldEJlYW4sIHRtcEJlYW5BcnJheSwgbWUuYmFzZVpJbmRleCk7XG5cbiAgLy9SZW1lbWJlciB0aGUgdG9wIG9iamVjdFxuICBtZS5vblRvcE9iamVjdCA9IHRhcmdldEJlYW47XG59O1xuXG4vL0NhbGN1bGF0ZSB0aGUgZnJvbnQgLyBiYWNrIGluZm9ybWF0aW9uIG9mIHRoZSB3aW5kb3cgYWNjdXJhdGVseS5cbkNDYW52YXMucHJvdG90eXBlLnB1bGxVcFNvcnQgPSBmdW5jdGlvbihwdWxsdXBPYmplY3QsIG9iamVjdEFycmF5LCBiYXNlSW5kZXgpIHtcbiAgdmFyIG1lID0gdGhpcztcblxuICAvL0luY3JlYXNlIHRoZSBpbmRleCBudW1iZXIgb2YgdGhlIHRhcmdldCBvYmplY3RcbiAgcHVsbHVwT2JqZWN0Lmh0bWxFbGVtZW50LnN0eWxlLnpJbmRleCA9IG9iamVjdEFycmF5Lmxlbmd0aCArIGJhc2VJbmRleDtcblxuICAvL3NvcnQgYnkgaW5kZXhcbiAgb2JqZWN0QXJyYXkuc29ydChmdW5jdGlvbihiLCBhKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIC1wYXJzZUludChiLmh0bWxFbGVtZW50LnN0eWxlLnpJbmRleCwgMTApICtcbiAgICAgIHBhcnNlSW50KGEuaHRtbEVsZW1lbnQuc3R5bGUuekluZGV4LCAxMClcbiAgICApO1xuICB9KTtcblxuICAvL1JlZGVmaW5lIG51bWJlciBvZiB0aGUgaW5kZXhcbiAgZm9yICh2YXIgaSBpbiBvYmplY3RBcnJheSkge1xuICAgIG9iamVjdEFycmF5W2ldLmh0bWxFbGVtZW50LnN0eWxlLnpJbmRleCA9XG4gICAgICBvYmplY3RBcnJheS5sZW5ndGggLSAxIC0gaSArIGJhc2VJbmRleDtcbiAgfVxufTtcblxuLyoqXG4gKiByZW1vdmUgdGhlIGJlYW4gb2JqZWN0XG4gKiBAcGFyYW0gYmVhbklkXG4gKi9cbkNDYW52YXMucHJvdG90eXBlLnJlbW92ZUJlYW4gPSBmdW5jdGlvbihiZWFuSWQpIHtcbiAgdmFyIG1lID0gdGhpcztcblxuICAvL1JldHJpZXZlIHRoZSB0YXJnZXQgYmVhbkZyYW1lXG4gIHZhciBiZWFuTGlzdCA9IG1lLmJlYW5MaXN0O1xuICB2YXIgdGFyZ2V0QmVhbiA9IGJlYW5MaXN0W2JlYW5JZF07XG5cbiAgLy9SZW1vdmUgYmVhbidzIGh0bWxFbGVtZW50IGZyb20gY2FudmFzRWxlbWVudFxuICBtZS5jYW52YXNFbGVtZW50LnJlbW92ZUNoaWxkKHRhcmdldEJlYW4uaHRtbEVsZW1lbnQpO1xuXG4gIC8vRGVsZXRlIHRoZSBiZWFuIG9iamVjdCBpbiB0aGUgYXNzb2NpYXRpdmUgYXJyYXkuXG4gIGRlbGV0ZSBiZWFuTGlzdFtiZWFuSWRdO1xufTtcblxuLyoqXG4gKiBBZGQgYmVhbiBpbnRvIHRoaXMgY2FudmFzXG4gKiBAcGFyYW0gYmVhblxuICovXG5DQ2FudmFzLnByb3RvdHlwZS5hZGRCZWFuID0gZnVuY3Rpb24oYmVhbikge1xuICB2YXIgbWUgPSB0aGlzO1xuXG4gIHZhciBiZWFuTGlzdCA9IG1lLmJlYW5MaXN0O1xuXG4gIHZhciBiZWFuSWROYW1lID0gbWUuYmVhbklkTmFtZTsgLy9rZXk6YmVhbklkIHZhbHVlOmJlYW5OYW1lXG4gIHZhciBiZWFuTmFtZUlkID0gbWUuYmVhbk5hbWVJZDsgLy9rZXk6YmVhbk5hbWUgdmFsdWU6YmVhbklkXG5cbiAgYmVhbkxpc3RbYmVhbi5pZF0gPSBiZWFuO1xuXG4gIGlmIChiZWFuLnByb3BlcnR5Lm5hbWUpIHtcbiAgICBiZWFuTmFtZUlkW2JlYW4ucHJvcGVydHkubmFtZV0gPSBiZWFuLmlkO1xuICAgIGJlYW5JZE5hbWVbYmVhbi5pZF0gPSBiZWFuLnByb3BlcnR5Lm5hbWU7XG4gIH1cblxuICAvL0luIHRoaXMgdXNhZ2UgY2FzZSB0aGUgJ2xlbmd0aCcgcHJvcGVydHkgaXMgaW52YWxpZCAuLlxuICB2YXIgbnVtID0gMDtcblxuICBmb3IgKHZhciBqIGluIGJlYW5MaXN0KSB7XG4gICAgbnVtKys7XG4gIH1cblxuICAvL1NldCB6SW5kZXggc28gdGhhdCB3aGF0IHlvdSBhZGQgbGF0ZXIgd2lsbCBjb21lIHVwLlxuICBiZWFuLmh0bWxFbGVtZW50LnN0eWxlLnpJbmRleCA9IG51bSArIG1lLmJhc2VaSW5kZXg7XG5cbiAgLy9PbiB0aGUgYmVhbiBzaWRlLCBzcGVjaWZ5IHRoZSBwYXJlbnQgb2YgdGhlIGJlYW4gdG8gbWUuXG4gIGJlYW4uc2V0UGFyZW50Q2FudmFzKG1lKTtcblxuICB0aGlzLmNhbnZhc0VsZW1lbnQuYXBwZW5kQ2hpbGQoYmVhbi5odG1sRWxlbWVudCk7XG59O1xuLyoqXG4gKiBFbmQgb2YgY2FudmFzIGNsYXNzXG4gKi9cblxuLy8rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstXG5cbkRFRi5DRlJBTUUgPSB7fTtcbkRFRi5DRlJBTUUuQ0FOVkFTX0VMRU1FTlRfQkdDT0xPUiA9IFwidHJhbnNwYXJlbnRcIjtcbkRFRi5DRlJBTUUuTU9EQUxfQkFDS0dST1VORF9GUkFNRV9JRF9QUkVGSVggPVxuICBcIndpbmRvd19fbW9kYWxfd2luZG93X2JhY2tncm91bmRfXCI7XG5cbmluaGVyaXQoQ0ZyYW1lLCBDQmVhbkZyYW1lKTtcblxuLyoqXG4gKiBDRnJhbWUgY2xhc3NcbiAqIDxwPlxuICogVGhpcyBjbGFzcyByZXByZXNlbnRzIGEgd2luZG93IHdob3NlIHNpemUgY2FuIGJlIGNoYW5nZWQgLFxuICogY2FuIG1vdmUgZnJlZWx5IG9uIHRoZSBzY3JlZW4sXG4gKiBjYW4gaGF2ZSBhIHRpdGxlIGJhcixcbiAqXG4gKiBAcGFyYW0gd2luZG93SWRcbiAqIEBwYXJhbSB3X2xlZnRcbiAqIEBwYXJhbSB3X3RvcFxuICogQHBhcmFtIHdfd2lkdGhcbiAqIEBwYXJhbSB3X2hlaWdodFxuICogQHBhcmFtIHppbmRleFxuICogQHBhcmFtIHdfYm9yZGVyX3dpZHRoXG4gKiBAcGFyYW0gYXBwZWFyYW5jZVxuICogQGNvbnN0cnVjdG9yXG4gKi9cbmZ1bmN0aW9uIENGcmFtZShcbiAgd2luZG93SWQsXG4gIHdfbGVmdCxcbiAgd190b3AsXG4gIHdfd2lkdGgsXG4gIHdfaGVpZ2h0LFxuICB6aW5kZXgsXG4gIHdfYm9yZGVyX3dpZHRoLFxuICBhcHBlYXJhbmNlXG4pIHtcbiAgdmFyIG1lID0gdGhpcztcblxuICAvL2NhbGwgY29uc3RydWN0b3Igb2Ygc3VwZXJjbGFzc1xuICBDRnJhbWUuc3VwZXJDb25zdHJ1Y3Rvci5jYWxsKFxuICAgIHRoaXMsXG4gICAgd2luZG93SWQsXG4gICAgd19sZWZ0LFxuICAgIHdfdG9wLFxuICAgIHdfd2lkdGgsXG4gICAgd19oZWlnaHQsXG4gICAgemluZGV4LFxuICAgIHdfYm9yZGVyX3dpZHRoLFxuICAgIGFwcGVhcmFuY2VcbiAgKTtcblxuICBtZS5hbmNob3IgPSBDQUxJR04uTEVGVF9UT1A7XG5cbiAgbWUuc2hvd1RpdGxlQmFyID0gYXBwZWFyYW5jZS5zaG93VGl0bGVCYXI7XG5cbiAgbWUuY2FudmFzTmV0SGVpZ2h0ID0gbnVsbDtcbiAgbWUuY2FudmFzTmV0V2lkdGggPSBudWxsO1xuICBtZS5mcmFtZUhlaWdodEFkanVzdCA9IGFwcGVhcmFuY2UuZnJhbWVIZWlnaHRBZGp1c3Q7XG5cbiAgbWUuZnJhbWVDb21wb25lbnRNYXAgPSB7fTtcblxuICAvL2luaXRpYWxpemUgdGhlIGZpZWxkXG4gIG1lLmNhbnZhcyA9IG51bGw7XG5cbiAgLy9jYW52YXMgaWRcbiAgbWUubXlDYW52YXNJZCA9IG51bGw7XG5cbiAgLy9CdXR0b25zIHRvIGJlIHBsYWNlZCBvbiB0aGUgc2NyZWVuIChwb3NpdGlvbmluZyBzYW1lIGFzIHRoZSBjbG9zZSBidXR0b24pXG4gIG1lLmZsb2F0aW5nQnV0dG9uID0gbnVsbDtcblxuICBtZS50aXRsZUJhckNsYXNzTmFtZURlZmF1bHQgPSBcImpzZnJhbWUtdGl0bGViYXItZGVmYXVsdFwiOyAvLyBERUYuQ0ZSQU1FLlRJVExFX0JBUl9DTEFTU19ERUZBVUxUO1xuICBtZS50aXRsZUJhckNsYXNzTmFtZUZvY3VzZWQgPSBcImpzZnJhbWUtdGl0bGViYXItZm9jdXNlZFwiOyAvL0RFRi5DRlJBTUUuVElUTEVfQkFSX0NMQVNTX0ZPQ1VTRUQ7XG5cbiAgLy9oZWlnaHQgb2YgdGl0bGViYXJcbiAgbWUudGl0bGVCYXJIZWlnaHQgPSBhcHBlYXJhbmNlLnRpdGxlQmFySGVpZ2h0O1xuXG4gIG1lLnRpdGxlQmFyQ2FwdGlvbiA9IGFwcGVhcmFuY2UudGl0bGVCYXJDYXB0aW9uO1xuICBtZS50aXRsZUJhckNhcHRpb25MZWZ0TWFyZ2luID0gYXBwZWFyYW5jZS50aXRsZUJhckNhcHRpb25MZWZ0TWFyZ2luO1xuICBtZS50aXRsZUJhckNhcHRpb25Gb250U2l6ZSA9IGFwcGVhcmFuY2UudGl0bGVCYXJDYXB0aW9uRm9udFNpemU7XG4gIG1lLnRpdGxlQmFyQ2FwdGlvbkZvbnRXZWlnaHQgPSBhcHBlYXJhbmNlLnRpdGxlQmFyQ2FwdGlvbkZvbnRXZWlnaHQ7XG4gIG1lLnRpdGxlQmFyQm9yZGVyQm90dG9tRGVmYXVsdCA9IGFwcGVhcmFuY2UudGl0bGVCYXJCb3JkZXJCb3R0b21EZWZhdWx0O1xuICBtZS50aXRsZUJhckJvcmRlckJvdHRvbUZvY3VzZWQgPSBhcHBlYXJhbmNlLnRpdGxlQmFyQm9yZGVyQm90dG9tRm9jdXNlZDtcbiAgbWUudGl0bGVCYXJDYXB0aW9uVGV4dFNoYWRvdyA9IGFwcGVhcmFuY2UudGl0bGVCYXJDYXB0aW9uVGV4dFNoYWRvdztcbiAgbWUudGl0bGVCYXJDYXB0aW9uVGV4dEFsaWduID0gYXBwZWFyYW5jZS50aXRsZUJhckNhcHRpb25UZXh0QWxpZ247XG5cbiAgLy9UaXRsZSBiYXIgd2lkdGggYWRqdXN0bWVudCB2YWx1ZVxuICBtZS50aXRsZUFkanVzdFdpZHRoID0gMjtcblxuICBtZS53aW5kb3dJZCA9IHdpbmRvd0lkO1xuXG4gIG1lLmV4Qm9yZGVyV2lkdGggPSAwO1xuXG4gIG1lLm15Q2FudmFzSWQgPSB3aW5kb3dJZCArIFwiX2NhbnZhc1wiO1xuXG4gIC8vaW1nIGVsZW1lbnQgZm9yIGljb24gcGxhY2VkIG9uIHRoZSBsZWZ0LXRvcFxuICB2YXIgYXBwSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gIC8vXHRcdGFwcEljb24uc3JjPSdpbWcvaWNvX2FwcF9maWxlMTYuZ2lmJztcblxuICAvL3VybCBvZiBpY29uIGltYWdlXG4gIGFwcEljb24uc3JjID0gXCJcIjtcbiAgYXBwSWNvbi5zdHlsZS5wb3NpdGlvbiA9IFwiYWJzb2x1dGVcIjtcbiAgYXBwSWNvbi5zdHlsZS5sZWZ0ID0gXCIycHhcIjtcbiAgYXBwSWNvbi5zdHlsZS50b3AgPSBcIjJweFwiO1xuICBhcHBJY29uLnN0eWxlLndpZHRoID0gXCIxNnB4XCI7XG4gIGFwcEljb24uc3R5bGUuaGVpZ2h0ID0gXCIxNnB4XCI7XG4gIGFwcEljb24uc3R5bGUudmlzaWJpbGl0eSA9IFwiaGlkZGVuXCI7XG5cbiAgLy9UaGUgdGl0bGUgYmFyIG11c3QgYmUgb24gdGhlIGZyb250IG9mIHRoZSBjYW52YXMuXG4gIG1lLnRpdGxlQmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuICBtZS50aXRsZUJhci5jbGFzc05hbWUgPSBcImpzZnJhbWV0aXRsZWJhclwiO1xuXG4gIGlmIChtZS5zaG93VGl0bGVCYXIpIHtcbiAgICBtZS50aXRsZUJhci5pZCA9IHdpbmRvd0lkICsgXCJfdGl0bGVcIjtcbiAgICBtZS50aXRsZUJhci5zdHlsZS5wb3NpdGlvbiA9IFwiYWJzb2x1dGVcIjtcbiAgICBtZS50aXRsZUJhci5zdHlsZS5ib3hTaXppbmcgPSBcImJvcmRlci1ib3hcIjtcbiAgICBtZS50aXRsZUJhci5zdHlsZS50b3AgPSBcIjBweFwiO1xuICAgIG1lLnRpdGxlQmFyLnN0eWxlLmxlZnQgPSBcIjBweFwiO1xuICAgIG1lLnRpdGxlQmFyLnN0eWxlLndpZHRoID1cbiAgICAgIHdfd2lkdGggLSBtZS50aXRsZUFkanVzdFdpZHRoICsgREVGLkNBTlZBUy5XSURUSF9BREpVU1RfMjAxODA3MjIgKyBcInB4XCI7XG4gICAgbWUudGl0bGVCYXIuc3R5bGUudXNlclNlbGVjdCA9IFwibm9uZVwiO1xuXG4gICAgaWYgKG1lLnRpdGxlQmFySGVpZ2h0KSB7XG4gICAgICB2YXIgdGl0bGVCYXJBZGp1c3QgPSAwO1xuXG4gICAgICBpZiAobWUudGl0bGVCYXJCb3JkZXJCb3R0b21EZWZhdWx0KSB7XG4gICAgICAgIHRpdGxlQmFyQWRqdXN0ID0gMDtcbiAgICAgIH1cblxuICAgICAgbWUudGl0bGVCYXIuc3R5bGUuaGVpZ2h0ID0gcGFyc2VJbnQobWUudGl0bGVCYXJIZWlnaHQsIDEwKSArIDAgKyBcInB4XCI7XG4gICAgfVxuXG4gICAgbWUudGl0bGVCYXIuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gbWUudGl0bGVCYXJDb2xvckRlZmF1bHQ7XG4gICAgbWUudGl0bGVCYXIuc3R5bGUuekluZGV4ID0gMDtcblxuICAgIG1lLnRpdGxlQmFyLnN0eWxlLmNvbG9yID0gbWUudGl0bGVCYXJDYXB0aW9uQ29sb3JEZWZhdWx0O1xuICAgIG1lLnRpdGxlQmFyLnN0eWxlLmZvbnRTaXplID0gbWUudGl0bGVCYXJDYXB0aW9uRm9udFNpemU7XG4gICAgbWUudGl0bGVCYXIuc3R5bGUuZm9udFdlaWdodCA9IG1lLnRpdGxlQmFyQ2FwdGlvbkZvbnRXZWlnaHQ7XG4gICAgbWUudGl0bGVCYXIuc3R5bGUudGV4dFNoYWRvdyA9IG1lLnRpdGxlQmFyQ2FwdGlvblRleHRTaGFkb3c7XG4gICAgbWUudGl0bGVCYXIuc3R5bGUudGV4dEFsaWduID0gbWUudGl0bGVCYXJDYXB0aW9uVGV4dEFsaWduO1xuICAgIC8vIG1lLnRpdGxlQmFyLnN0eWxlLnRleHRTaGFkb3cgPSBcIjAgMXB4IDAgcmdiYSgyNTUsMjU1LDI1NSwuNylcIjtcbiAgICAvLyBtZS50aXRsZUJhci5zdHlsZS50ZXh0QWxpZ24gPSAnY2VudGVyJztcblxuICAgIG1lLnRpdGxlQmFyLnN0eWxlLmxpbmVIZWlnaHQgPSBtZS50aXRsZUJhci5zdHlsZS5oZWlnaHQ7XG5cbiAgICBtZS50aXRsZUJhci5zdHlsZS5ib3JkZXJCb3R0b20gPSBtZS50aXRsZUJhckJvcmRlckJvdHRvbURlZmF1bHQ7XG4gICAgLy9tZS50aXRsZUJhci5zdHlsZS5ib3hTaGFkb3cgPSAnMCAxcHggMCByZ2JhKDI1NSwyNTUsMjU1LDAuNSknO1xuXG4gICAgLy9TZXQgbm90IHRvIGRpc3BsYXkgb3ZlcmZsb3cgY2hhcmFjdGVyIHN0cmluZ1xuICAgIG1lLnRpdGxlQmFyLnN0eWxlLm92ZXJmbG93ID0gXCJoaWRkZW5cIjtcblxuICAgIHZhciB0aXRsZUJhclRleHQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIlwiKTtcblxuICAgIC8vJ3NwYW4nIHRvIHN0b3JlIHRleHRcbiAgICB2YXIgdGl0bGVCYXJUZXh0U3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuXG4gICAgdGl0bGVCYXJUZXh0U3Bhbi5pZCA9IG1lLmlkICsgXCJfdGl0bGVCYXJUZXh0XCI7XG4gICAgaWYgKG1lLnRpdGxlQmFyQ2FwdGlvbkxlZnRNYXJnaW4gIT0gbnVsbCkge1xuICAgICAgdGl0bGVCYXJUZXh0U3Bhbi5zdHlsZS5wb3NpdGlvbiA9IFwiYWJzb2x1dGVcIjtcbiAgICAgIHRpdGxlQmFyVGV4dFNwYW4uc3R5bGUubGVmdCA9XG4gICAgICAgIHBhcnNlSW50KG1lLnRpdGxlQmFyQ2FwdGlvbkxlZnRNYXJnaW4sIDEwKSArIFwicHhcIjtcbiAgICB9IGVsc2Uge1xuICAgICAgdGl0bGVCYXJUZXh0U3Bhbi5zdHlsZS5wb3NpdGlvbiA9IFwiYWJzb2x1dGVcIjtcbiAgICAgIHRpdGxlQmFyVGV4dFNwYW4uc3R5bGUubGVmdCA9IFwiMHB4XCI7XG4gICAgICB0aXRsZUJhclRleHRTcGFuLnN0eWxlLnJpZ2h0ID0gXCIwcHhcIjtcbiAgICB9XG4gICAgdGl0bGVCYXJUZXh0U3Bhbi5zdHlsZS50b3AgPSBcIjBweFwiO1xuICAgIHRpdGxlQmFyVGV4dFNwYW4uYXBwZW5kQ2hpbGQodGl0bGVCYXJUZXh0KTtcbiAgICBtZS50aXRsZUJhci5hcHBlbmRDaGlsZCh0aXRsZUJhclRleHRTcGFuKTtcblxuICAgIC8vRGlzY29udGludWUgYXBwaWNvbigyMDA2MTAxMSlcbiAgICAvL21lLnRpdGxlQmFyLmFwcGVuZENoaWxkKGFwcEljb24pO1xuICB9XG5cbiAgbWUuaHRtbEVsZW1lbnQuYXBwZW5kQ2hpbGQobWUudGl0bGVCYXIpO1xuXG4gIC8vU2V0IENhbnZhcyB0aHJvdWdob3V0IHRoZSB3aW5kb3dcblxuICAvL3BhcnNlSW50KG1lLnRpdGxlQmFyLnN0eWxlLmhlaWdodCk7Ly9tZS50aXRsZUJhckhlaWdodCk7XG4gIHZhciBjYW52YXNNb3JlSGVpZ2h0ID0gcGFyc2VJbnQobWUudGl0bGVCYXJIZWlnaHQsIDEwKSAtIHRpdGxlQmFyQWRqdXN0O1xuICB2YXIgY2FudmFzTW9yZVNwYWNpbmcgPSBwYXJzZUludChtZS50aXRsZUFkanVzdFdpZHRoLCAxMCk7XG5cbiAgaWYgKG1lLnNob3dUaXRsZUJhcikge1xuICB9IGVsc2Uge1xuICAgIGNhbnZhc01vcmVIZWlnaHQgPSAwO1xuICAgIGNhbnZhc01vcmVTcGFjaW5nID0gMDtcbiAgICB0aXRsZUJhckFkanVzdCA9IDA7XG4gIH1cblxuICBtZS5jYW52YXNOZXRXaWR0aCA9IHdfd2lkdGggLSBjYW52YXNNb3JlU3BhY2luZztcbiAgbWUuY2FudmFzTmV0SGVpZ2h0ID1cbiAgICB3X2hlaWdodCAtXG4gICAgY2FudmFzTW9yZUhlaWdodCAtXG4gICAgY2FudmFzTW9yZVNwYWNpbmcgLVxuICAgIDEgLVxuICAgIHRpdGxlQmFyQWRqdXN0ICtcbiAgICBtZS5mcmFtZUhlaWdodEFkanVzdDtcblxuICAvL0NoYW5nZSB0aGUgc3R5bGUgb2YgaHRtbEVsZW1lbnQgb2YgQ0ZyYW1lIChDQmVhbikuXG4gIG1lLmh0bWxFbGVtZW50LnN0eWxlLmN1cnNvciA9IFwibW92ZVwiO1xuXG4gIC8vQ3JlYXRlIGEgY2FudmFzXG4gIG1lLmNhbnZhcyA9IG5ldyBDQ2FudmFzKFxuICAgIG1lLmh0bWxFbGVtZW50LFxuICAgIG1lLm15Q2FudmFzSWQsXG4gICAgMCxcbiAgICBjYW52YXNNb3JlSGVpZ2h0LFxuICAgIHdfd2lkdGggLSBjYW52YXNNb3JlU3BhY2luZyxcbiAgICB3X2hlaWdodCAtIGNhbnZhc01vcmVIZWlnaHQgLSBjYW52YXNNb3JlU3BhY2luZ1xuICApO1xuXG4gIG1lLmNhbnZhcy5jYW52YXNFbGVtZW50LnN0eWxlLmJhY2tncm91bmRDb2xvciA9XG4gICAgREVGLkNGUkFNRS5DQU5WQVNfRUxFTUVOVF9CR0NPTE9SO1xuICBtZS5jYW52YXMuY2FudmFzRWxlbWVudC5zdHlsZS5jdXJzb3IgPSBcImRlZmF1bHRcIjtcblxuICAvL0hhbmRsaW5nIHRoZSBvbW91c2Vkb3duIGV2ZW50IHRoYXQgb2NjdXJyZWQgaW4gQ2FudmFzIHdoaWNoIGlzIGEgY2hpbGQgZWxlbWVudCBvZiBDRnJhbWVcbiAgbWUuY2FudmFzLmNhbnZhc0VsZW1lbnQub25tb3VzZWRvd24gPSBtZS5jYW52YXNNb3VzZURvd247XG5cbiAgLy9TZXQgdGhlIGNhbnZhcyBhcyBhIHJlZmVyZW5jZSB0byB0aGUgcGFyZW50IG9mIHRoZSBjYW52YXMgaHRtbCBlbGVtZW50IGNhbnZhc0VsZW1lbnQuXG4gIG1lLmNhbnZhcy5jYW52YXNFbGVtZW50LnBhcmVudENGcmFtZSA9IG1lO1xuXG4gIHZhciB0bXBDYW52YXNXaWR0aCA9IHBhcnNlSW50KG1lLmNhbnZhcy5jYW52YXNFbGVtZW50LnN0eWxlLndpZHRoLCAxMCk7XG4gIHZhciB0bXBDYW52YXNIZWlnaHQgPSBwYXJzZUludChtZS5jYW52YXMuY2FudmFzRWxlbWVudC5zdHlsZS5oZWlnaHQsIDEwKTtcblxuICB2YXIgbWFya2VyV2lkdGggPSAxNjtcbiAgdmFyIG1hcmtlckhlaWdodCA9IDE2O1xuXG4gIC8vT2Zmc2V0IGZyb20gbWFya2VyIGVkZ2VcbiAgdmFyIGVkZ2VNYXJnaW4gPSAxNjtcblxuICAvL0xvd2VyIHJpZ2h0KFItRClcbiAgdmFyIG1hcmtlclJEID0gbmV3IENNYXJrZXJXaW5kb3coXG4gICAgbWUubXlDYW52YXNJZCArIFwiX1JEXCIsXG4gICAgdG1wQ2FudmFzV2lkdGggLSBtYXJrZXJXaWR0aCArIGVkZ2VNYXJnaW4sXG4gICAgdG1wQ2FudmFzSGVpZ2h0IC0gbWFya2VySGVpZ2h0ICsgZWRnZU1hcmdpbixcbiAgICBtYXJrZXJXaWR0aCxcbiAgICBtYXJrZXJIZWlnaHQsXG4gICAgMCxcbiAgICBcIlJEXCJcbiAgKTtcblxuICBtYXJrZXJSRC5odG1sRWxlbWVudC5zdHlsZS5jdXJzb3IgPSBcInNlLXJlc2l6ZVwiOyAvL253LXJlc2l6ZSc7XG5cbiAgLy9TaW5jZSBvbmx5IHRoZSBkZWx0YVggYW5kIGRlbHRhWSBhcmUgYWNxdWlyZWQgYW5kIHRoZSBtb3ZlbWVudCBvZiB0aGUgbWFya2VyIGl0c2VsZiBpc1xuICAvLyBwZXJmb3JtZWQgYnkgQ0ZyYW1lX3Jlc2l6ZSwgdGhlIG1vdmVtZW50IGNvZWZmaWNpZW50IG9mIHRoZSBtYXJrZXIgaXRzZWxmIGlzIHNldCB0byAwLlxuICBtYXJrZXJSRC5odG1sRWxlbWVudC5hcmdYID0gMDtcbiAgbWFya2VyUkQuaHRtbEVsZW1lbnQuYXJnWSA9IDA7XG5cbiAgLy9Cb3R0b20oRC1EKVxuICB2YXIgbWFya2VyREQgPSBuZXcgQ01hcmtlcldpbmRvdyhcbiAgICBtZS5teUNhbnZhc0lkICsgXCJfRERcIixcbiAgICAwLFxuICAgIHRtcENhbnZhc0hlaWdodCAtIG1hcmtlckhlaWdodCArIGVkZ2VNYXJnaW4sXG4gICAgdG1wQ2FudmFzV2lkdGggLSBtYXJrZXJXaWR0aCArIGVkZ2VNYXJnaW4sXG4gICAgbWFya2VySGVpZ2h0LFxuICAgIDAsXG4gICAgXCJERFwiXG4gICk7XG5cbiAgbWFya2VyREQuaHRtbEVsZW1lbnQuc3R5bGUuY3Vyc29yID0gXCJuLXJlc2l6ZVwiO1xuXG4gIC8vU2luY2Ugb25seSB0aGUgZGVsdGFYIGFuZCBkZWx0YVkgYXJlIGFjcXVpcmVkIGFuZCB0aGUgbW92ZW1lbnQgb2YgdGhlIG1hcmtlciBpdHNlbGYgaXNcbiAgLy8gcGVyZm9ybWVkIGJ5IENGcmFtZV9yZXNpemUsIHRoZSBtb3ZlbWVudCBjb2VmZmljaWVudCBvZiB0aGUgbWFya2VyIGl0c2VsZiBpcyBzZXQgdG8gMC5cbiAgbWFya2VyREQuaHRtbEVsZW1lbnQuYXJnWCA9IDA7XG4gIG1hcmtlckRELmh0bWxFbGVtZW50LmFyZ1kgPSAwO1xuXG4gIC8vUmlnaHQoUi1SKVxuICB2YXIgbWFya2VyUlIgPSBuZXcgQ01hcmtlcldpbmRvdyhcbiAgICBtZS5teUNhbnZhc0lkICsgXCJfUlJcIixcbiAgICB0bXBDYW52YXNXaWR0aCAtIG1hcmtlcldpZHRoICsgZWRnZU1hcmdpbixcbiAgICAwLFxuICAgIG1hcmtlcldpZHRoLFxuICAgIHRtcENhbnZhc0hlaWdodCAtIG1hcmtlckhlaWdodCArIGVkZ2VNYXJnaW4sXG4gICAgMCxcbiAgICBcIlJSXCJcbiAgKTtcblxuICBtYXJrZXJSUi5odG1sRWxlbWVudC5zdHlsZS5jdXJzb3IgPSBcInctcmVzaXplXCI7XG5cbiAgLy9TaW5jZSBvbmx5IHRoZSBkZWx0YVggYW5kIGRlbHRhWSBhcmUgYWNxdWlyZWQgYW5kIHRoZSBtb3ZlbWVudCBvZiB0aGUgbWFya2VyIGl0c2VsZiBpc1xuICAvLyBwZXJmb3JtZWQgYnkgQ0ZyYW1lX3Jlc2l6ZSwgdGhlIG1vdmVtZW50IGNvZWZmaWNpZW50IG9mIHRoZSBtYXJrZXIgaXRzZWxmIGlzIHNldCB0byAwLlxuICBtYXJrZXJSUi5odG1sRWxlbWVudC5hcmdZID0gMDtcbiAgbWFya2VyUlIuaHRtbEVsZW1lbnQuYXJnWCA9IDA7XG5cbiAgLy9BZGQgc2l6ZSBjaGFuZ2UgbWFya2VyIHRvIGNhbnZhcy5cbiAgbWUuY2FudmFzLmFkZEJlYW4obWFya2VyUkQpO1xuICBtZS5jYW52YXMuYWRkQmVhbihtYXJrZXJERCk7XG4gIG1lLmNhbnZhcy5hZGRCZWFuKG1hcmtlclJSKTtcblxuICAvL01ldGhvZCB0byByZW1vdmUgc2l6ZSBjaGFuZ2UgbWFya2VyIChjYW4gbm90IHJlc2l6ZSlcbiAgbWUucmVtb3ZlTWFya2VycyA9IGZ1bmN0aW9uKCkge1xuICAgIG1lLmNhbnZhcy5yZW1vdmVCZWFuKG1hcmtlclJELmlkKTtcbiAgICBtZS5jYW52YXMucmVtb3ZlQmVhbihtYXJrZXJERC5pZCk7XG4gICAgbWUuY2FudmFzLnJlbW92ZUJlYW4obWFya2VyUlIuaWQpO1xuICAgIG1lLmh0bWxFbGVtZW50LnN0eWxlLmN1cnNvciA9IFwiZGVmYXVsdFwiO1xuICB9O1xuXG4gIG1lLnJlbW92ZU1hcmtlcnMyID0gZnVuY3Rpb24oKSB7XG4gICAgbWUuY2FudmFzLnJlbW92ZUJlYW4obWFya2VyUkQuaWQpO1xuICAgIG1lLmNhbnZhcy5yZW1vdmVCZWFuKG1hcmtlckRELmlkKTtcbiAgICBtZS5jYW52YXMucmVtb3ZlQmVhbihtYXJrZXJSUi5pZCk7XG4gIH07XG4gIG1lLmVuYWJsZU1hcmtlcnMgPSBmdW5jdGlvbihlbmFibGVkKSB7XG4gICAgaWYgKGVuYWJsZWQpIHtcbiAgICAgIG1hcmtlclJELmh0bWxFbGVtZW50LnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcbiAgICAgIG1hcmtlckRELmh0bWxFbGVtZW50LnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcbiAgICAgIG1hcmtlclJSLmh0bWxFbGVtZW50LnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcbiAgICAgIG1hcmtlclJELmh0bWxFbGVtZW50LnN0eWxlLmN1cnNvciA9IFwic2UtcmVzaXplXCI7XG4gICAgICBtYXJrZXJERC5odG1sRWxlbWVudC5zdHlsZS5jdXJzb3IgPSBcIm4tcmVzaXplXCI7XG4gICAgICBtYXJrZXJSUi5odG1sRWxlbWVudC5zdHlsZS5jdXJzb3IgPSBcInctcmVzaXplXCI7XG4gICAgfSBlbHNlIHtcbiAgICAgIG1hcmtlclJELmh0bWxFbGVtZW50LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgIG1hcmtlckRELmh0bWxFbGVtZW50LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgIG1hcmtlclJSLmh0bWxFbGVtZW50LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICB9XG4gICAgLy8gbWUuY2FudmFzLnJlbW92ZUJlYW4obWFya2VyUkQuaWQpO1xuICAgIC8vIG1lLmNhbnZhcy5yZW1vdmVCZWFuKG1hcmtlckRELmlkKTtcbiAgICAvLyBtZS5jYW52YXMucmVtb3ZlQmVhbihtYXJrZXJSUi5pZCk7XG4gIH07XG5cbiAgLy9hZGQgZnJhbWVDb21wb25lbnRzW2JlZ2luXVxuICBmb3IgKHZhciBpZHggaW4gYXBwZWFyYW5jZS5mcmFtZUNvbXBvbmVudHMpIHtcbiAgICB2YXIgZnJhbWVDb21wb25lbnQgPSBhcHBlYXJhbmNlLmZyYW1lQ29tcG9uZW50c1tpZHhdO1xuXG4gICAgZnJhbWVDb21wb25lbnQuc2V0RnJhbWUobWUpO1xuXG4gICAgLy9pZiBmcmFtZUNvbXBvbmVudCBoYXMgc3BlY2lhbCBuYW1lICdjbG9zZUJ1dHRvbicsIGl0IHdpbGwgYWN0IGFzIGEgY2xvc2UgYnV0dG9uLlxuICAgIGlmIChcImNsb3NlQnV0dG9uXCIgPT0gZnJhbWVDb21wb25lbnQuaWQpIHtcbiAgICAgIGZyYW1lQ29tcG9uZW50Lmh0bWxFbGVtZW50Lm9uY2xpY2sgPSBtZS5jbG9zZTtcbiAgICB9XG5cbiAgICBtZS5hZGRGcmFtZUNvbXBvbmVudChmcmFtZUNvbXBvbmVudCk7XG4gIH1cbiAgLy9hZGQgZnJhbWVDb21wb25lbnRzW2VuZF1cblxuICAvL292ZXJyaWRlIHRoZSBmaWVsZFxuICBtZS5odG1sRWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInRyYW5zcGFyZW50XCI7XG5cbiAgbWUuaHRtbEVsZW1lbnQub25jb250ZXh0bWVudSA9IHRoaXMuY29udGV4dE1lbnU7XG5cbiAgLy9UaGUgcG9saWN5IG9mIEJvcmRlciBkcmF3aW5nIHNlZW1zIHRvIGJlIGRpZmZlcmVudCBiZXR3ZWVuIElFIGFuZCBGRi5cbiAgdmFyIGNhcmliVmFsID0gMDtcblxuICBtZS5jYXJpYlZhbHVlID0gY2FyaWJWYWw7XG5cbiAgbWUuaHRtbEVsZW1lbnQuc3R5bGUuYm9yZGVyV2lkdGggPSBtZS5leEJvcmRlcldpZHRoICsgXCJweFwiO1xuXG4gIG1lLmh0bWxFbGVtZW50LnN0eWxlLndpZHRoID1cbiAgICBwYXJzZUludChtZS5odG1sRWxlbWVudC5zdHlsZS53aWR0aCwgMTApIC0gY2FyaWJWYWwgKyBcInB4XCI7XG4gIG1lLmh0bWxFbGVtZW50LnN0eWxlLmhlaWdodCA9XG4gICAgcGFyc2VJbnQobWUuaHRtbEVsZW1lbnQuc3R5bGUuaGVpZ2h0LCAxMCkgLSBjYXJpYlZhbCArIDEgKyBcInB4XCI7XG4gIG1lLmh0bWxFbGVtZW50LnR5cGVOYW1lID0gXCJjd2luZG93XCI7XG4gIG1lLmh0bWxFbGVtZW50Lm92ZXJmbG93ID0gXCJhdXRvXCI7XG4gIG1lLmh0bWxFbGVtZW50LnN0eWxlLmJveFNpemluZyA9IFwiY29udGVudC1ib3hcIjtcblxuICBpZiAoYXBwZWFyYW5jZS5mcmFtZUJvcmRlclN0eWxlKSB7XG4gICAgbWUuaHRtbEVsZW1lbnQuc3R5bGUuYm9yZGVyU3R5bGUgPSBhcHBlYXJhbmNlLmZyYW1lQm9yZGVyU3R5bGU7XG4gIH1cblxuICBpZiAoYXBwZWFyYW5jZS5mcmFtZUJveFNoYWRvdykge1xuICAgIG1lLmh0bWxFbGVtZW50LnN0eWxlLmJveFNoYWRvdyA9IGFwcGVhcmFuY2UuZnJhbWVCb3hTaGFkb3c7XG4gIH1cblxuICAvL1RPRE8gZGVwcmVjYXRpb24oYmVjYXVzZSBDSWZGcmFtZSBpcyBleHRlbmRlZCB0aGlzIG9wZXJhdGlvbilcbiAgaWYgKHBhcnNlSW50KGFwcGVhcmFuY2UuZnJhbWVCb3JkZXJXaWR0aERlZmF1bHQsIDEwKSA+IDApIHtcbiAgICBtZS5odG1sRWxlbWVudC5zdHlsZS5ib3JkZXJXaWR0aCA9IGFwcGVhcmFuY2UuZnJhbWVCb3JkZXJXaWR0aERlZmF1bHQ7XG4gICAgbWUuaHRtbEVsZW1lbnQuc3R5bGUuYm9yZGVyQ29sb3IgPSBhcHBlYXJhbmNlLmZyYW1lQm9yZGVyQ29sb3JEZWZhdWx0O1xuICB9XG4gIGlmIChwYXJzZUludChhcHBlYXJhbmNlLmZyYW1lQm9yZGVyUmFkaXVzLCAxMCkgPiAwKSB7XG4gICAgbWUuaHRtbEVsZW1lbnQuc3R5bGUuYm9yZGVyUmFkaXVzID0gYXBwZWFyYW5jZS5mcmFtZUJvcmRlclJhZGl1cztcbiAgfVxuXG4gIG1lLm9uQ2xvc2VGcmFtZUxpc3RlbmVyID0gbnVsbDtcbn1cblxuQ0ZyYW1lLnByb3RvdHlwZS5zZXRUaXRsZUJhckNsYXNzTmFtZSA9IGZ1bmN0aW9uKFxuICBjbGFzc05hbWVGb3JEZWZhdWx0LFxuICBjbGFzc05hbWVGb3JGb2N1c2VkXG4pIHtcbiAgdmFyIG1lID0gdGhpcztcbiAgaWYgKGNsYXNzTmFtZUZvckRlZmF1bHQpIHtcbiAgICBtZS50aXRsZUJhckNsYXNzTmFtZURlZmF1bHQgPSBjbGFzc05hbWVGb3JEZWZhdWx0O1xuICAgIG1lLnRpdGxlQmFyQ2xhc3NOYW1lRm9jdXNlZCA9IGNsYXNzTmFtZUZvckRlZmF1bHQ7XG4gIH1cbiAgaWYgKGNsYXNzTmFtZUZvckZvY3VzZWQpIHtcbiAgICBtZS50aXRsZUJhckNsYXNzTmFtZUZvY3VzZWQgPSBjbGFzc05hbWVGb3JGb2N1c2VkO1xuICB9XG4gIHJldHVybiBtZTtcbn07XG4vKipcbiAqIEFkZCBmcmFtZUNvbXBvbmVudChXcmFwcGVkIERPTSBlbGVtZW50IGxpa2UgJ2RpdicgdG8gZGlzcGxheSBhYm92ZSB0aGUgZnJhbWUpIHRvIGZyYW1lXG4gKiBAcGFyYW0gZnJhbWVDb21wb25lbnRcbiAqL1xuQ0ZyYW1lLnByb3RvdHlwZS5hZGRGcmFtZUNvbXBvbmVudCA9IGZ1bmN0aW9uKGZyYW1lQ29tcG9uZW50KSB7XG4gIHZhciBtZSA9IHRoaXM7XG5cbiAgbWUuZnJhbWVDb21wb25lbnRNYXBbZnJhbWVDb21wb25lbnQuaWRdID0gZnJhbWVDb21wb25lbnQ7XG4gIG1lLmNhbnZhcy5jYW52YXNFbGVtZW50LmFwcGVuZENoaWxkKGZyYW1lQ29tcG9uZW50Lmh0bWxFbGVtZW50KTtcbiAgcmV0dXJuIG1lO1xufTtcblxuLyoqXG4gKiBHZXQgc3RvcmVkIGZyYW1lIGNvbXBvbmVudCBieSBpZFxuICogQHBhcmFtIGZyYW1lQ29tcG9uZW50XG4gKi9cbkNGcmFtZS5wcm90b3R5cGUuZ2V0RnJhbWVDb21wb25lbnRFbGVtZW50ID0gZnVuY3Rpb24oaWQpIHtcbiAgdmFyIG1lID0gdGhpcztcbiAgaWYgKG1lLmZyYW1lQ29tcG9uZW50TWFwW2lkXSkge1xuICAgIHJldHVybiBtZS5mcmFtZUNvbXBvbmVudE1hcFtpZF0uaHRtbEVsZW1lbnQ7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbn07XG5cbkNGcmFtZS5wcm90b3R5cGUucmVtb3ZlRnJhbWVDb21wb25lbnRCeUlkID0gZnVuY3Rpb24oZnJhbWVDb21wb25lbnRJZCkge1xuICB2YXIgbWUgPSB0aGlzO1xuXG4gIHZhciBmcmFtZUNvbXBvbmVudCA9IG1lLmZyYW1lQ29tcG9uZW50TWFwW2ZyYW1lQ29tcG9uZW50SWRdO1xuXG4gIG1lLmNhbnZhcy5jYW52YXNFbGVtZW50LnJlbW92ZUNoaWxkKGZyYW1lQ29tcG9uZW50Lmh0bWxFbGVtZW50KTtcbiAgZGVsZXRlIG1lLmZyYW1lQ29tcG9uZW50TWFwW2ZyYW1lQ29tcG9uZW50SWRdO1xufTtcblxuQ0ZyYW1lLnByb3RvdHlwZS5zaG93RnJhbWVDb21wb25lbnQgPSBmdW5jdGlvbihmcmFtZUNvbXBvbmVudElkLCBkaXNwbGF5KSB7XG4gIHZhciBtZSA9IHRoaXM7XG4gIHZhciBjb21wID0gbWUuZ2V0RnJhbWVDb21wb25lbnRFbGVtZW50KGZyYW1lQ29tcG9uZW50SWQpO1xuICBpZiAoY29tcCkge1xuICAgIGlmIChkaXNwbGF5KSB7XG4gICAgICBjb21wLnN0eWxlLmRpc3BsYXkgPSBkaXNwbGF5O1xuICAgIH0gZWxzZSB7XG4gICAgICBjb21wLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIG1lO1xufTtcblxuQ0ZyYW1lLnByb3RvdHlwZS5oaWRlRnJhbWVDb21wb25lbnQgPSBmdW5jdGlvbihmcmFtZUNvbXBvbmVudElkKSB7XG4gIHZhciBtZSA9IHRoaXM7XG4gIHZhciBjb21wID0gbWUuZ2V0RnJhbWVDb21wb25lbnRFbGVtZW50KGZyYW1lQ29tcG9uZW50SWQpO1xuICBpZiAoY29tcCkge1xuICAgIGNvbXAuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICB9XG4gIHJldHVybiBtZTtcbn07XG5cbkNGcmFtZS5wcm90b3R5cGUuaGlkZUFsbFZpc2libGVGcmFtZUNvbXBvbmVudHMgPSBmdW5jdGlvbigpIHtcbiAgdmFyIG1lID0gdGhpcztcblxuICB2YXIgY29tcE1hcCA9IG1lLmZyYW1lQ29tcG9uZW50TWFwO1xuICBmb3IgKHZhciBrZXkgaW4gY29tcE1hcCkge1xuICAgIGlmIChjb21wTWFwLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgIHZhciBjb21wID0gY29tcE1hcFtrZXldLmh0bWxFbGVtZW50O1xuICAgICAgaWYgKGNvbXAuc3R5bGUuZGlzcGxheSA9PT0gXCJub25lXCIpIHtcbiAgICAgICAgY29tcC5fYWxyZWFkeU5vbmUgPSB0cnVlO1xuICAgICAgfVxuICAgICAgY29tcC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgfVxuICB9XG59O1xuQ0ZyYW1lLnByb3RvdHlwZS5zaG93QWxsVmlzaWJsZUZyYW1lQ29tcG9uZW50cyA9IGZ1bmN0aW9uKCkge1xuICB2YXIgbWUgPSB0aGlzO1xuICB2YXIgY29tcE1hcCA9IG1lLmZyYW1lQ29tcG9uZW50TWFwO1xuICBmb3IgKHZhciBrZXkgaW4gY29tcE1hcCkge1xuICAgIGlmIChjb21wTWFwLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgIHZhciBjb21wID0gY29tcE1hcFtrZXldLmh0bWxFbGVtZW50O1xuICAgICAgaWYgKGNvbXAuX2FscmVhZHlOb25lKSB7XG4gICAgICAgIGNvbXAuX2FscmVhZHlOb25lID0gbnVsbDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbXAuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xuICAgICAgfVxuICAgIH1cbiAgfVxufTtcblxuQ0ZyYW1lLnByb3RvdHlwZS5oaWRlRnJhbWVDb21wb25lbnRDaGlsZE1lbnVzID0gZnVuY3Rpb24oKSB7XG4gIHZhciBtZSA9IHRoaXM7XG5cbiAgdmFyIGNvbXBNYXAgPSBtZS5mcmFtZUNvbXBvbmVudE1hcDtcbiAgZm9yICh2YXIga2V5IGluIGNvbXBNYXApIHtcbiAgICBpZiAoY29tcE1hcC5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICB2YXIgY29tcCA9IGNvbXBNYXBba2V5XTtcbiAgICAgIGlmIChjb21wLmNoaWxkTWVudSkge1xuICAgICAgICBjb21wLmNoaWxkTWVudS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICB9XG4gICAgfVxuICB9XG59O1xuXG5DRnJhbWUucHJvdG90eXBlLnNldFRpdGxlID0gZnVuY3Rpb24oc3RyKSB7XG4gIHZhciBtZSA9IHRoaXM7XG4gIG1lLnRpdGxlID0gc3RyO1xuICBpZiAobWUuc2hvd1RpdGxlQmFyKSB7XG4gICAgdmFyIHRleHROb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoc3RyKTtcbiAgICAvL2ZpcnN0Q2hpbGTjga5maXJzdENoaWxk44GMc3BhblxuICAgIG1lLnRpdGxlQmFyLmZpcnN0Q2hpbGQucmVwbGFjZUNoaWxkKFxuICAgICAgdGV4dE5vZGUsXG4gICAgICBtZS50aXRsZUJhci5maXJzdENoaWxkLmZpcnN0Q2hpbGRcbiAgICApO1xuICB9XG4gIHJldHVybiBtZTtcbn07XG5cbkNGcmFtZS5wcm90b3R5cGUucmVzaXplID0gZnVuY3Rpb24oXG4gIGRlbHRhTGVmdCxcbiAgZGVsdGFUb3AsXG4gIGRlbHRhV2lkdGgsXG4gIGRlbHRhSGVpZ2h0XG4pIHtcbiAgdmFyIG1lID0gdGhpcztcblxuICB2YXIgdG1wTGVmdCA9IHBhcnNlSW50KG1lLmh0bWxFbGVtZW50LnN0eWxlLmxlZnQsIDEwKTtcbiAgdmFyIHRtcFRvcCA9IHBhcnNlSW50KG1lLmh0bWxFbGVtZW50LnN0eWxlLnRvcCwgMTApO1xuICB2YXIgdG1wV2lkdGggPSBwYXJzZUludChtZS5odG1sRWxlbWVudC5zdHlsZS53aWR0aCwgMTApO1xuICB2YXIgdG1wSGVpZ2h0ID0gcGFyc2VJbnQobWUuaHRtbEVsZW1lbnQuc3R5bGUuaGVpZ2h0LCAxMCk7XG5cbiAgbWUuaHRtbEVsZW1lbnQuc3R5bGUubGVmdCA9IHBhcnNlSW50KHRtcExlZnQgKyBkZWx0YUxlZnQsIDEwKSArIFwicHhcIjtcbiAgbWUuaHRtbEVsZW1lbnQuc3R5bGUudG9wID0gcGFyc2VJbnQodG1wVG9wICsgZGVsdGFUb3AsIDEwKSArIFwicHhcIjtcblxuICBtZS5odG1sRWxlbWVudC5zdHlsZS53aWR0aCA9IHBhcnNlSW50KHRtcFdpZHRoICsgZGVsdGFXaWR0aCwgMTApICsgXCJweFwiO1xuICBtZS5odG1sRWxlbWVudC5zdHlsZS5oZWlnaHQgPSBwYXJzZUludCh0bXBIZWlnaHQgKyBkZWx0YUhlaWdodCwgMTApICsgXCJweFwiO1xuXG4gIHZhciB0bXBDYW52YXNXaWR0aCA9IHBhcnNlSW50KG1lLmNhbnZhcy5jYW52YXNFbGVtZW50LnN0eWxlLndpZHRoLCAxMCk7XG4gIHZhciB0bXBDYW52YXNIZWlnaHQgPSBwYXJzZUludChtZS5jYW52YXMuY2FudmFzRWxlbWVudC5zdHlsZS5oZWlnaHQsIDEwKTtcblxuICAvL1NpbmNlIGNhbnZhc0VsZW1lbnQgaXMgYSAoMCwgMCkgcmVsYXRpdmUgY29vcmRpbmF0ZSB3aXRoIHJlc3BlY3QgdG8gdGhlIHBhcmVudCBlbGVtZW50LFxuICAvLyBzbyBpdCBpcyBub3QgbmVjZXNzYXJ5IHRvIGNoYW5nZSBsZWZ0IGFuZCB0b3AuXG4gIG1lLmNhbnZhcy5jYW52YXNFbGVtZW50LnN0eWxlLndpZHRoID0gdG1wQ2FudmFzV2lkdGggKyBkZWx0YVdpZHRoICsgXCJweFwiO1xuICBtZS5jYW52YXMuY2FudmFzRWxlbWVudC5zdHlsZS5oZWlnaHQgPSB0bXBDYW52YXNIZWlnaHQgKyBkZWx0YUhlaWdodCArIFwicHhcIjtcblxuICBpZiAobWUuc2hvd1RpdGxlQmFyKSB7XG4gICAgLy9DaGFuZ2UgdGhlIHNpemUgb2YgdGhlIHRpdGxlIGJhci4gVGl0bGVBZGp1c3RXaWR0aCBldGMuXG4gICAgLy9UaGUgcmVhc29uIHdoeSB5b3UgZG8gbm90IGhhdmUgdG8gdXNlIHRpdGxlQWRqdXN0V2lkdGggaXMgYmVjYXVzZVxuICAgIC8vIHRoZXNlIHNjYWxpbmcgYXJlIGRvbmUgd2l0aCBkaWZmZXJlbmNlcyAoZGVsdGFYLCBkZWx0YVkpLlxuICAgIC8vVGhlcmVmb3JlLCBpZiB5b3UgYWRqdXN0IHdpdGggdGhlIHRpdGxlQWRqdXN0V2lkdGggYXNcbiAgICAvLyB0aGUgaW5pdGlhbCB2YWx1ZSwgdGhlIG90aGVyIHdpbGwgc3RyZXRjaCByZWxhdGl2ZS5cbiAgICAvL1lvdSBkbyBub3QgdGhpbmsgeW91IGNhbiB1c2UgaWZEZWx0YVxuICAgIG1lLnRpdGxlQmFyLnN0eWxlLndpZHRoID0gdG1wQ2FudmFzV2lkdGggKyBkZWx0YVdpZHRoICsgXCJweFwiO1xuICB9IGVsc2Uge1xuICB9XG5cbiAgZm9yICh2YXIgYmVhbk5hbWUgaW4gbWUuY2FudmFzLmJlYW5MaXN0KSB7XG4gICAgdmFyIHRtcEJlYW4gPSBtZS5jYW52YXMuYmVhbkxpc3RbYmVhbk5hbWVdO1xuXG4gICAgaWYgKHRtcEJlYW4uaHRtbEVsZW1lbnQudHlwZU5hbWUgPT0gXCJjbWFya2Vyd2luZG93XCIpIHtcbiAgICAgIGlmICh0bXBCZWFuLmh0bWxFbGVtZW50LnVzYWdlID09IFwiUkRcIikge1xuICAgICAgICAvL01vdmUgdGhlIHNpemUgY2hhbmdlIGxvd2VyIHJpZ2h0KFJEKSBtYXJrZXIgYWNjb3JkaW5nIHRvIHRoZSBhbW91bnQgb2YgbW92ZW1lbnQuXG4gICAgICAgIHRtcEJlYW4uaHRtbEVsZW1lbnQuc3R5bGUubGVmdCA9XG4gICAgICAgICAgcGFyc2VJbnQodG1wQmVhbi5odG1sRWxlbWVudC5zdHlsZS5sZWZ0LCAxMCkgKyBkZWx0YVdpZHRoICsgXCJweFwiO1xuICAgICAgICB0bXBCZWFuLmh0bWxFbGVtZW50LnN0eWxlLnRvcCA9XG4gICAgICAgICAgcGFyc2VJbnQodG1wQmVhbi5odG1sRWxlbWVudC5zdHlsZS50b3AsIDEwKSArIGRlbHRhSGVpZ2h0ICsgXCJweFwiO1xuICAgICAgfSBlbHNlIGlmICh0bXBCZWFuLmh0bWxFbGVtZW50LnVzYWdlID09IFwiRERcIikge1xuICAgICAgICAvL01vdmUgdGhlIHNpemUgY2hhbmdlIGxvd2VyIG1hcmtlciBhY2NvcmRpbmcgdG8gdGhlIG1vdmVtZW50IGFtb3VudC5cbiAgICAgICAgLy8gRG8gbm90IG1vdmUgbGVmdC5Pbmx5IHRoZSB3aWR0aCB3aWwgaW5jcmVhc2Ugb3IgZGVjcmVhc2UuXG4gICAgICAgIHRtcEJlYW4uaHRtbEVsZW1lbnQuc3R5bGUud2lkdGggPVxuICAgICAgICAgIHBhcnNlSW50KHRtcEJlYW4uaHRtbEVsZW1lbnQuc3R5bGUud2lkdGgsIDEwKSArIGRlbHRhV2lkdGggKyBcInB4XCI7XG4gICAgICAgIHRtcEJlYW4uaHRtbEVsZW1lbnQuc3R5bGUudG9wID1cbiAgICAgICAgICBwYXJzZUludCh0bXBCZWFuLmh0bWxFbGVtZW50LnN0eWxlLnRvcCwgMTApICsgZGVsdGFIZWlnaHQgKyBcInB4XCI7XG4gICAgICB9IGVsc2UgaWYgKHRtcEJlYW4uaHRtbEVsZW1lbnQudXNhZ2UgPT0gXCJSUlwiKSB7XG4gICAgICAgIC8vTW92ZSB0aGUgc2l6ZSBjaGFuZ2UgcmlnaHQgbWFya2VyIGFjY29yZGluZyB0byB0aGUgbW92ZW1lbnQgYW1vdW50XG4gICAgICAgIC8vRG8gbm90IG1vdmUgdG9wLE9ubHkgdGhlIGhlaWdodCB3aWxsIGluY3JlYXNlIG9yIGRlY3JlYXNlLlxuICAgICAgICB0bXBCZWFuLmh0bWxFbGVtZW50LnN0eWxlLmxlZnQgPVxuICAgICAgICAgIHBhcnNlSW50KHRtcEJlYW4uaHRtbEVsZW1lbnQuc3R5bGUubGVmdCwgMTApICsgZGVsdGFXaWR0aCArIFwicHhcIjtcbiAgICAgICAgdG1wQmVhbi5odG1sRWxlbWVudC5zdHlsZS5oZWlnaHQgPVxuICAgICAgICAgIHBhcnNlSW50KHRtcEJlYW4uaHRtbEVsZW1lbnQuc3R5bGUuaGVpZ2h0LCAxMCkgKyBkZWx0YUhlaWdodCArIFwicHhcIjtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn07XG5cbkNGcmFtZS5wcm90b3R5cGUuY2FudmFzTW91c2VEb3duID0gZnVuY3Rpb24oZSkge1xuICB2YXIgbWUgPSB0aGlzO1xuXG4gIC8vTW91c2Vkb3duIHByb2Nlc3Npbmcgb2YgQ0ZyYW1lLmNhbnZhc1xuXG4gIC8vJ1RoaXMnIGluIHRoaXMgbWV0aG9kIGluZGljYXRlcyAnQ3dpbmRvdy5jYW52YXMuY2FudmFzRWxlbWVudCcuXG4gIGlmICh0aGlzLnBhcmVudENGcmFtZS5wYXJlbnRDYW52YXMubW91c2VEb3duU291cmNlID09IG51bGwpIHtcbiAgICB0aGlzLnBhcmVudENGcmFtZS5wYXJlbnRDYW52YXMubW91c2VEb3duU291cmNlID0gXCJjaGlsZGNhbnZhc1wiO1xuICB9XG59O1xuQ0ZyYW1lLnByb3RvdHlwZS5tb3VzZVVwID0gZnVuY3Rpb24oZSkge1xuICB0aGlzLmNhbnZhcy5tb3VzZVVwKGUpO1xufTtcblxuQ0ZyYW1lLnByb3RvdHlwZS5jbG9zZSA9IGZ1bmN0aW9uKGUpIHtcbiAgdmFyIG1lID0gdGhpcztcbiAgLy9DbG9zZSBwcm9jZXNzaW5nIG9mIENGcmFtZSBmcm9tIENsb3NlQnV0dG9uXG5cbiAgdmFyIHBhcmVudENhbnZhcyA9IHRoaXMucGFyZW50T2JqZWN0LnBhcmVudENhbnZhcztcbiAgdmFyIGNmcmFtZU9iaiA9IHRoaXMucGFyZW50T2JqZWN0O1xuXG4gIGNvbnNvbGUubG9nKFxuICAgICdDRnJhbWUjY2xvc2UgXCInICtcbiAgICAgIGNmcmFtZU9iai50aXRsZSArXG4gICAgICBcIihAXCIgK1xuICAgICAgY2ZyYW1lT2JqLmdldE5hbWUoKSArXG4gICAgICBcIilcIiArXG4gICAgICAnXCIgQCcgK1xuICAgICAgY2ZyYW1lT2JqLndpbmRvd0lkXG4gICk7XG5cbiAgdmFyIHdpbmRvd0lkID0gY2ZyYW1lT2JqLmlkO1xuICBjZnJhbWVPYmouY2xvc2VJbnRlcm5hbGx5KGUsIHBhcmVudENhbnZhcywgd2luZG93SWQpO1xufTtcblxuQ0ZyYW1lLnByb3RvdHlwZS5jbG9zZUZyYW1lID0gZnVuY3Rpb24oZSkge1xuICAvL0Nsb3NlIHByb2Nlc3Npbmcgb2YgQ0ZyYW1lXG4gIHZhciBtZSA9IHRoaXM7XG5cbiAgLy8gICBjb25zb2xlLmxvZyhcbiAgLy8gICAgICdDRnJhbWUjY2xvc2VGcmFtZSBcIicgK1xuICAvLyAgICAgICBtZS50aXRsZSArXG4gIC8vICAgICAgIFwiKFwiICtcbiAgLy8gICAgICAgbWUuZ2V0TmFtZSgpICtcbiAgLy8gICAgICAgXCIpXCIgK1xuICAvLyAgICAgICAnXCIgQCcgK1xuICAvLyAgICAgICBtZS53aW5kb3dJZFxuICAvLyAgICk7XG5cbiAgdmFyIHBhcmVudENhbnZhcyA9IHRoaXMucGFyZW50Q2FudmFzO1xuICBtZS5jbG9zZUludGVybmFsbHkoZSwgcGFyZW50Q2FudmFzLCBtZS53aW5kb3dJZCk7XG59O1xuXG5DRnJhbWUucHJvdG90eXBlLmNsb3NlSW50ZXJuYWxseSA9IGZ1bmN0aW9uKGUsIHBhcmVudENhbnZhcywgd2luZG93SWQpIHtcbiAgdmFyIG1lID0gdGhpcztcblxuICBwYXJlbnRDYW52YXMucmVtb3ZlQmVhbih3aW5kb3dJZCk7XG5cbiAgLy9hZGRlZCBmb3IgbW9kYWwgd2luZG93XG4gIGlmIChtZS5tb2RhbEJhY2tncm91bmRXaW5kb3dJZCkge1xuICAgIHBhcmVudENhbnZhcy5yZW1vdmVCZWFuKG1lLm1vZGFsQmFja2dyb3VuZFdpbmRvd0lkKTtcbiAgICBtZS5tb2RhbEJhY2tncm91bmRXaW5kb3dJZCA9IG51bGw7XG4gIH1cblxuICBpZiAobWUub25DbG9zZUZyYW1lTGlzdGVuZXIpIHtcbiAgICBtZS5vbkNsb3NlRnJhbWVMaXN0ZW5lcihtZSk7XG4gIH1cbn07XG5cbkNGcmFtZS5wcm90b3R5cGUuc2V0T25DbG9zZUZyYW1lTGlzdGVuZXIgPSBmdW5jdGlvbihsaXN0ZW5lcikge1xuICB2YXIgbWUgPSB0aGlzO1xuICBtZS5vbkNsb3NlRnJhbWVMaXN0ZW5lciA9IGxpc3RlbmVyO1xufTtcblxuQ0ZyYW1lLnByb3RvdHlwZS5jb250ZXh0TWVudSA9IGZ1bmN0aW9uKCkge1xuICAvL0lmIHlvdSBpc3N1ZSB0aGUgcmlnaHQtY2xpY2sgbWVudSBpbiB0aGUgd2luZG93LCBzZXQgdGhlIHNvdXJjZSB0byBDRnJhbWUuXG4gIHZhciBjb250ZXh0TWVudVNvdXJjZSA9IFwiQ0ZyYW1lXCI7XG4gIHJldHVybiBmYWxzZTtcbn07XG5cbkNGcmFtZS5wcm90b3R5cGUuc2V0VGl0bGVCYXJUZXh0Q29sb3IgPSBmdW5jdGlvbihzdHIpIHtcbiAgdmFyIG1lID0gdGhpcztcbiAgbWUudGl0bGVCYXIuc3R5bGUuY29sb3IgPSBzdHI7XG59O1xuXG5DRnJhbWUucHJvdG90eXBlLnNldFBvc2l0aW9uID0gZnVuY3Rpb24oeCwgeSwgYW5jaG9yKSB7XG4gIHZhciBtZSA9IHRoaXM7XG5cbiAgdmFyIGZyYW1lV2lkdGggPSBtZS5nZXRXaWR0aCgpO1xuICB2YXIgZnJhbWVIZWlnaHQgPSBtZS5nZXRIZWlnaHQoKTtcblxuICBtZS5fc2V0UG9zaXRpb25JbnRlcm5hbGx5KHgsIHksIGFuY2hvciwgZnJhbWVXaWR0aCwgZnJhbWVIZWlnaHQpO1xuXG4gIHJldHVybiBtZTtcbn07XG5DRnJhbWUucHJvdG90eXBlLl9zZXRQb3NpdGlvbkludGVybmFsbHkgPSBmdW5jdGlvbihcbiAgeCxcbiAgeSxcbiAgYW5jaG9yLFxuICBmcmFtZVdpZHRoLFxuICBmcmFtZUhlaWdodFxuKSB7XG4gIHZhciBtZSA9IHRoaXM7XG5cbiAgaWYgKGFuY2hvcikge1xuICAgIG1lLmFuY2hvciA9IGFuY2hvcjtcbiAgfVxuXG4gIGlmICghYW5jaG9yIHx8IENBTElHTi5MRUZUX1RPUCA9PSBhbmNob3IpIHtcbiAgICBtZS5odG1sRWxlbWVudC5zdHlsZS5sZWZ0ID0geCArIFwicHhcIjtcbiAgICBtZS5odG1sRWxlbWVudC5zdHlsZS50b3AgPSB5ICsgXCJweFwiO1xuICB9IGVsc2UgaWYgKENBTElHTi5IQ0VOVEVSX1RPUCA9PSBhbmNob3IpIHtcbiAgICBtZS5odG1sRWxlbWVudC5zdHlsZS5sZWZ0ID0gLWZyYW1lV2lkdGggLyAyICsgeCArIFwicHhcIjtcbiAgICBtZS5odG1sRWxlbWVudC5zdHlsZS50b3AgPSB5ICsgXCJweFwiO1xuICB9IGVsc2UgaWYgKENBTElHTi5SSUdIVF9UT1AgPT0gYW5jaG9yKSB7XG4gICAgbWUuaHRtbEVsZW1lbnQuc3R5bGUubGVmdCA9IC1mcmFtZVdpZHRoICsgeCArIFwicHhcIjtcbiAgICBtZS5odG1sRWxlbWVudC5zdHlsZS50b3AgPSB5ICsgXCJweFwiO1xuICB9IGVsc2UgaWYgKENBTElHTi5MRUZUX1ZDRU5URVIgPT0gYW5jaG9yKSB7XG4gICAgbWUuaHRtbEVsZW1lbnQuc3R5bGUubGVmdCA9IHggKyBcInB4XCI7XG4gICAgbWUuaHRtbEVsZW1lbnQuc3R5bGUudG9wID0gLWZyYW1lSGVpZ2h0IC8gMiArIHkgKyBcInB4XCI7XG4gIH0gZWxzZSBpZiAoQ0FMSUdOLkhDRU5URVJfVkNFTlRFUiA9PSBhbmNob3IpIHtcbiAgICBtZS5odG1sRWxlbWVudC5zdHlsZS5sZWZ0ID0gLWZyYW1lV2lkdGggLyAyICsgeCArIFwicHhcIjtcbiAgICBtZS5odG1sRWxlbWVudC5zdHlsZS50b3AgPSAtZnJhbWVIZWlnaHQgLyAyICsgeSArIFwicHhcIjtcbiAgfSBlbHNlIGlmIChDQUxJR04uUklHSFRfVkNFTlRFUiA9PSBhbmNob3IpIHtcbiAgICBtZS5odG1sRWxlbWVudC5zdHlsZS5sZWZ0ID0gLWZyYW1lV2lkdGggKyB4ICsgXCJweFwiO1xuICAgIG1lLmh0bWxFbGVtZW50LnN0eWxlLnRvcCA9IC1mcmFtZUhlaWdodCAvIDIgKyB5ICsgXCJweFwiO1xuICB9IGVsc2UgaWYgKENBTElHTi5MRUZUX0JPVFRPTSA9PSBhbmNob3IpIHtcbiAgICBtZS5odG1sRWxlbWVudC5zdHlsZS5sZWZ0ID0geCArIFwicHhcIjtcbiAgICBtZS5odG1sRWxlbWVudC5zdHlsZS50b3AgPSAtZnJhbWVIZWlnaHQgKyB5ICsgXCJweFwiO1xuICB9IGVsc2UgaWYgKENBTElHTi5IQ0VOVEVSX0JPVFRPTSA9PSBhbmNob3IpIHtcbiAgICBtZS5odG1sRWxlbWVudC5zdHlsZS5sZWZ0ID0gLWZyYW1lV2lkdGggLyAyICsgeCArIFwicHhcIjtcbiAgICBtZS5odG1sRWxlbWVudC5zdHlsZS50b3AgPSAtZnJhbWVIZWlnaHQgKyB5ICsgXCJweFwiO1xuICB9IGVsc2UgaWYgKENBTElHTi5SSUdIVF9CT1RUT00gPT0gYW5jaG9yKSB7XG4gICAgbWUuaHRtbEVsZW1lbnQuc3R5bGUubGVmdCA9IC1mcmFtZVdpZHRoICsgeCArIFwicHhcIjtcbiAgICBtZS5odG1sRWxlbWVudC5zdHlsZS50b3AgPSAtZnJhbWVIZWlnaHQgKyB5ICsgXCJweFwiO1xuICB9XG59O1xuXG4vKipcbiAqIFJldHVybnMgcmVsYXRpdmUgcG9zaXRpb24gd2l0aCBhbmNob3JcbiAqIEByZXR1cm5zIHt7eDogKiwgeTogKiwgYW5jaG9yOiAqfX1cbiAqL1xuQ0ZyYW1lLnByb3RvdHlwZS5nZXRQb3NpdGlvbiA9IGZ1bmN0aW9uKCkge1xuICB2YXIgbWUgPSB0aGlzO1xuICB2YXIgZnJhbWVXaWR0aCA9IG1lLmdldFdpZHRoKCk7XG4gIHZhciBmcmFtZUhlaWdodCA9IG1lLmdldEhlaWdodCgpO1xuICB2YXIgeDtcbiAgdmFyIHk7XG4gIHZhciBhbmNob3IgPSBtZS5hbmNob3I7XG4gIGlmICghYW5jaG9yIHx8IENBTElHTi5MRUZUX1RPUCA9PSBhbmNob3IpIHtcbiAgICB4ID0gcGFyc2VJbnQobWUuaHRtbEVsZW1lbnQuc3R5bGUubGVmdCwgMTApO1xuICAgIHkgPSBwYXJzZUludChtZS5odG1sRWxlbWVudC5zdHlsZS50b3AsIDEwKTtcbiAgfSBlbHNlIGlmIChDQUxJR04uSENFTlRFUl9UT1AgPT0gYW5jaG9yKSB7XG4gICAgeCA9IHBhcnNlSW50KG1lLmh0bWxFbGVtZW50LnN0eWxlLmxlZnQsIDEwKSArIGZyYW1lV2lkdGggLyAyO1xuICAgIHkgPSBwYXJzZUludChtZS5odG1sRWxlbWVudC5zdHlsZS50b3AsIDEwKTtcbiAgfSBlbHNlIGlmIChDQUxJR04uUklHSFRfVE9QID09IGFuY2hvcikge1xuICAgIHggPSBwYXJzZUludChtZS5odG1sRWxlbWVudC5zdHlsZS5sZWZ0LCAxMCkgKyBmcmFtZVdpZHRoO1xuICAgIHkgPSBwYXJzZUludChtZS5odG1sRWxlbWVudC5zdHlsZS50b3AsIDEwKTtcbiAgfSBlbHNlIGlmIChDQUxJR04uTEVGVF9WQ0VOVEVSID09IGFuY2hvcikge1xuICAgIHggPSBwYXJzZUludChtZS5odG1sRWxlbWVudC5zdHlsZS5sZWZ0LCAxMCk7XG4gICAgeSA9IHBhcnNlSW50KG1lLmh0bWxFbGVtZW50LnN0eWxlLnRvcCwgMTApICsgZnJhbWVIZWlnaHQgLyAyO1xuICB9IGVsc2UgaWYgKENBTElHTi5IQ0VOVEVSX1ZDRU5URVIgPT0gYW5jaG9yKSB7XG4gICAgeCA9IHBhcnNlSW50KG1lLmh0bWxFbGVtZW50LnN0eWxlLmxlZnQsIDEwKSArIGZyYW1lV2lkdGggLyAyO1xuICAgIHkgPSBwYXJzZUludChtZS5odG1sRWxlbWVudC5zdHlsZS50b3AsIDEwKSArIGZyYW1lSGVpZ2h0IC8gMjtcbiAgfSBlbHNlIGlmIChDQUxJR04uUklHSFRfVkNFTlRFUiA9PSBhbmNob3IpIHtcbiAgICB4ID0gcGFyc2VJbnQobWUuaHRtbEVsZW1lbnQuc3R5bGUubGVmdCwgMTApICsgZnJhbWVXaWR0aDtcbiAgICB5ID0gcGFyc2VJbnQobWUuaHRtbEVsZW1lbnQuc3R5bGUudG9wLCAxMCkgKyBmcmFtZUhlaWdodCAvIDI7XG4gIH0gZWxzZSBpZiAoQ0FMSUdOLkxFRlRfQk9UVE9NID09IGFuY2hvcikge1xuICAgIHggPSBwYXJzZUludChtZS5odG1sRWxlbWVudC5zdHlsZS5sZWZ0LCAxMCk7XG4gICAgeSA9IHBhcnNlSW50KG1lLmh0bWxFbGVtZW50LnN0eWxlLnRvcCwgMTApICsgZnJhbWVIZWlnaHQ7XG4gIH0gZWxzZSBpZiAoQ0FMSUdOLkhDRU5URVJfQk9UVE9NID09IGFuY2hvcikge1xuICAgIHggPSBwYXJzZUludChtZS5odG1sRWxlbWVudC5zdHlsZS5sZWZ0LCAxMCkgKyBmcmFtZVdpZHRoIC8gMjtcbiAgICB5ID0gcGFyc2VJbnQobWUuaHRtbEVsZW1lbnQuc3R5bGUudG9wLCAxMCkgKyBmcmFtZUhlaWdodDtcbiAgfSBlbHNlIGlmIChDQUxJR04uUklHSFRfQk9UVE9NID09IGFuY2hvcikge1xuICAgIHggPSBwYXJzZUludChtZS5odG1sRWxlbWVudC5zdHlsZS5sZWZ0LCAxMCkgKyBmcmFtZVdpZHRoO1xuICAgIHkgPSBwYXJzZUludChtZS5odG1sRWxlbWVudC5zdHlsZS50b3AsIDEwKSArIGZyYW1lSGVpZ2h0O1xuICB9XG4gIHJldHVybiB7IHg6IHgsIHk6IHksIGFuY2hvcjogYW5jaG9yIH07XG59O1xuXG5DRnJhbWUucHJvdG90eXBlLmdldExlZnQgPSBmdW5jdGlvbigpIHtcbiAgdmFyIG1lID0gdGhpcztcbiAgcmV0dXJuIHBhcnNlSW50KG1lLmh0bWxFbGVtZW50LnN0eWxlLmxlZnQsIDEwKTtcbn07XG5cbkNGcmFtZS5wcm90b3R5cGUuZ2V0VG9wID0gZnVuY3Rpb24oKSB7XG4gIHZhciBtZSA9IHRoaXM7XG4gIHJldHVybiBwYXJzZUludChtZS5odG1sRWxlbWVudC5zdHlsZS50b3AsIDEwKTtcbn07XG5DRnJhbWUucHJvdG90eXBlLmdldFdpZHRoID0gZnVuY3Rpb24oKSB7XG4gIHZhciBtZSA9IHRoaXM7XG4gIHJldHVybiBwYXJzZUludChtZS5odG1sRWxlbWVudC5zdHlsZS53aWR0aCwgMTApO1xufTtcbkNGcmFtZS5wcm90b3R5cGUuZ2V0SGVpZ2h0ID0gZnVuY3Rpb24oKSB7XG4gIHZhciBtZSA9IHRoaXM7XG4gIHJldHVybiBwYXJzZUludChtZS5odG1sRWxlbWVudC5zdHlsZS5oZWlnaHQsIDEwKTtcbn07XG5cbkNGcmFtZS5wcm90b3R5cGUuZ2V0U2l6ZSA9IGZ1bmN0aW9uKCkge1xuICB2YXIgbWUgPSB0aGlzO1xuICByZXR1cm4geyB3aWR0aDogbWUuZ2V0V2lkdGgoKSwgaGVpZ2h0OiBtZS5nZXRIZWlnaHQoKSB9O1xufTtcblxuQ0ZyYW1lLnByb3RvdHlwZS5zZXRTaXplID0gZnVuY3Rpb24od2lkdGgsIGhlaWdodCwgZm9yY2UpIHtcbiAgdmFyIG1lID0gdGhpcztcblxuICB2YXIgYnlVc2VyID0gdHJ1ZTtcblxuICBpZiAoZm9yY2UpIHtcbiAgICBieVVzZXIgPSBmYWxzZTtcbiAgfVxuXG4gIC8vY2FsbCBDSUZyYW1lI3Jlc2l6ZSBpbnN0ZWFkIG9mIENGcmFtZSNyZXNpemVcbiAgbWUucmVzaXplKDAsIDAsIHdpZHRoIC0gbWUuZ2V0V2lkdGgoKSwgaGVpZ2h0IC0gbWUuZ2V0SGVpZ2h0KCksIGJ5VXNlcik7XG4gIHJldHVybiBtZTtcbn07XG5cbkNGcmFtZS5wcm90b3R5cGUuZ2V0V2luZG93SWQgPSBmdW5jdGlvbigpIHtcbiAgdmFyIG1lID0gdGhpcztcbiAgcmV0dXJuIG1lLndpbmRvd0lkO1xufTtcblxuQ0ZyYW1lLnByb3RvdHlwZS5nZXROYW1lID0gZnVuY3Rpb24oKSB7XG4gIHZhciBtZSA9IHRoaXM7XG4gIHJldHVybiBtZS5wcm9wZXJ0eS5uYW1lO1xufTtcblxuQ0ZyYW1lLnByb3RvdHlwZS5zZXROYW1lID0gZnVuY3Rpb24obmFtZSkge1xuICB2YXIgbWUgPSB0aGlzO1xuICBtZS5wcm9wZXJ0eS5uYW1lID0gbmFtZTtcbn07XG4vKipcbiAqIGVuZCBvZiBDRnJhbWUgY2xhc3NcbiAqL1xuXG4vLystKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy1cblxuaW5oZXJpdChDSWZGcmFtZSwgQ0ZyYW1lKTtcblxuLyoqXG4gKiBDSWZGcmFtZSBjbGFzc1xuICogRXh0ZW5zaW9uIGNsYXNzIHdpdGggY29udGVudHMgZnJhbWUgb2YgQ0ZyYW1lIGFzIGlmcmFtZVxuICogQHBhcmFtIHdpbmRvd0lkXG4gKiBAcGFyYW0gYXBwZWFyYW5jZVxuICogQGNvbnN0cnVjdG9yXG4gKi9cbmZ1bmN0aW9uIENJZkZyYW1lKHdpbmRvd0lkLCBsZWZ0LCB0b3AsIHdpZHRoLCBoZWlnaHQsIGFwcGVhcmFuY2UpIHtcbiAgdmFyIHdsZWZ0ID0gbGVmdDtcbiAgdmFyIHd0b3AgPSB0b3A7XG4gIHZhciB3d2lkdGggPSB3aWR0aDtcbiAgdmFyIHdoZWlnaHQgPSBoZWlnaHQ7XG4gIHZhciB6aW5kZXggPSBhcHBlYXJhbmNlLnppbmRleDtcbiAgdmFyIHdib3JkZXJ3aWR0aCA9IG51bGw7XG5cbiAgdmFyIG1lID0gdGhpcztcblxuICB0aGlzLmpzRnJhbWUgPSBudWxsO1xuICB0aGlzLmNvbnRyb2wgPSBudWxsO1xuXG4gIHRoaXMubWluRnJhbWVXaWR0aCA9IDEyODtcbiAgdGhpcy5taW5XaW5kb3dIZWlnaHQgPSAzMjtcblxuICAvKipcbiAgICogSWYgdGhpcyB2YWx1ZSBpcyB0cnVlLCB0aGUgZm9jdXMgd2lsbCBtb3ZlIHdoZW4gdGFwcGluZyB0aGUgaWZyYW1lIGFyZWEsXG4gICAqIGJ1dCBpZiB0aGUgd2luZG93IGRvIG5vdCBoYXZlIHRoZSBmb2N1cywgeW91IGNhbiBub3QgY2xpY2sgb24gdGhlIGVsZW1lbnQgaW4gdGhlIGlmcmFtZS5cbiAgICovXG4gIHRoaXMub3ZlcnJheVRyYW5zcGFyZW50U2NyZWVuRW5hYmxlZCA9IGZhbHNlO1xuXG4gIC8qKlxuICAgKiAgT25seSBpbiB0aGUgY2FzZSBvZiByZXNpemluZyBhIHRyYW5zcGFyZW50IHNjcmVlbiBjYW4gYmUgZGlzcGxheWVkIG9uIHRoZSBpZnJhbWVcbiAgICogIGFuZCB0aGUgc2l6ZSBjYW4gYmUgYWRqdXN0ZWQgc21vb3RobHkuXG4gICAqICB0cnVlIGlzIHJlY29tbWVuZGVkLlxuICAgKi9cbiAgLy9DaGFuZ2UgaGlzdG9yeVxuICAvLzIwMTgxMjI2XG4gIC8vQ2hhbmdlZCB0byBmYWxzZS5cbiAgLy8gU28gaXQgYmVjb21lcyBuZWNlc3NhcnkgdG8gY2xpY2sgdHdpY2UgdG8gcmVhY3Qgd2hlbiB5b3UgY2FsbCB0aGUgI3NldFNpemUsSSBjaGFuZ2VkIHRoZSB2YWx1ZSB0byBmYWxzZS5cbiAgLy8yMDE4MTIzMVxuICAvL0kgZm91bmQgdGhlIHdheSB0aGF0IGlmcmFtZSB3aWxsIGJlIGNoYW5nZWQgdGhlIHNpemUgc21vb3RobHkuc28gdGhlIGZpbmFsIGFuc3dlciBpcyB0cnVlLlxuICB0aGlzLm92ZXJyYXlUcmFuc3BhcmVudFNjcmVlbk9uUmVzaXplID0gdHJ1ZTtcblxuICB0aGlzLnRpdGxlQmFyQ29sb3JGb2N1c2VkID0gYXBwZWFyYW5jZS50aXRsZUJhckNvbG9yRm9jdXNlZDtcbiAgdGhpcy50aXRsZUJhckNvbG9yRGVmYXVsdCA9IGFwcGVhcmFuY2UudGl0bGVCYXJDb2xvckRlZmF1bHQ7XG5cbiAgdGhpcy50aXRsZUJhckNhcHRpb25Db2xvckRlZmF1bHQgPSBhcHBlYXJhbmNlLnRpdGxlQmFyQ2FwdGlvbkNvbG9yRGVmYXVsdDtcbiAgdGhpcy50aXRsZUJhckNhcHRpb25Db2xvckZvY3VzZWQgPSBhcHBlYXJhbmNlLnRpdGxlQmFyQ2FwdGlvbkNvbG9yRm9jdXNlZDtcblxuICAvL2NhbGwgc3VwZXIgY29uc3RydWN0b3JcbiAgQ0lmRnJhbWUuc3VwZXJDb25zdHJ1Y3Rvci5jYWxsKFxuICAgIG1lLFxuICAgIHdpbmRvd0lkLFxuICAgIHdsZWZ0LFxuICAgIHd0b3AsXG4gICAgd3dpZHRoLFxuICAgIHdoZWlnaHQsXG4gICAgemluZGV4LFxuICAgIHdib3JkZXJ3aWR0aCxcbiAgICBhcHBlYXJhbmNlXG4gICk7XG5cbiAgLy9ib3JkZXIgY29sb3JcbiAgbWUuZnJhbWVCb3JkZXJDb2xvckRlZmF1bHQgPSBhcHBlYXJhbmNlLmZyYW1lQm9yZGVyQ29sb3JEZWZhdWx0O1xuICBtZS5mcmFtZUJvcmRlckNvbG9yRm9jdXNlZCA9IGFwcGVhcmFuY2UuZnJhbWVCb3JkZXJDb2xvckZvY3VzZWQ7XG5cbiAgLy9ib3JkZXIgd2lkdGhcbiAgbWUuZnJhbWVCb3JkZXJXaWR0aERlZmF1bHQgPSBhcHBlYXJhbmNlLmZyYW1lQm9yZGVyV2lkdGhEZWZhdWx0O1xuICBtZS5mcmFtZUJvcmRlcldpZHRoRm9jdXNlZCA9IGFwcGVhcmFuY2UuZnJhbWVCb3JkZXJXaWR0aEZvY3VzZWQ7XG5cbiAgbWUuaWZyYW1lID0gbnVsbDtcblxuICAvL09mZnNldCB2YWx1ZSBmb3Igd2lkdGggYWRqdXN0bWVudCBvZiBpZnJhbWVcbiAgbWUuaWZEZWx0YSA9IDA7XG5cbiAgbWUucmVzaXphYmxlID0gdHJ1ZTtcblxuICBtZS5vbk1vdXNlTW92ZU9uSWZyYW1lID0gbnVsbDtcbiAgbWUub25Nb3VzZVVwT25JZnJhbWUgPSBudWxsO1xuXG4gIG1lLl9oYXNGb2N1cyA9IGZhbHNlO1xuXG4gIG1lLl9oYXNGb2N1c1RpbWUgPSAwO1xuXG4gIG1lLmh0bWxFbGVtZW50LnR5cGVOYW1lID0gXCJjaWZ3aW5kb3dcIjtcblxuICAvL25hbWUgb2YgaWZyYW1lXG4gIHZhciBleElmcmFtZU5hbWUgPSBcInJpdmVyc3VuX1wiICsgd2luZG93SWQ7XG5cbiAgbWUuZGZyYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuICBtZS5pZnJhbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaWZyYW1lXCIpO1xuXG4gIG1lLmlmcmFtZS5uYW1lID0gZXhJZnJhbWVOYW1lO1xuXG4gIG1lLmlmcmFtZS5pZCA9IGV4SWZyYW1lTmFtZTtcblxuICBtZS5pZnJhbWUuZnJhbWVCb3JkZXIgPSBcIjBcIjtcbiAgLy9tZS5pZnJhbWUuc2Nyb2xsaW5nID0gJ25vJztcblxuICBtZS5pZnJhbWUuekluZGV4ID0gLTE7XG5cbiAgLy9BbGxvdyB0cmFuc3BhcmVudCBvZiBpZnJhbWUgYmFja2dyb3VuZC5cbiAgbWUuaWZyYW1lLmFsbG93VHJhbnNwYXJlbmN5ID0gXCJ0cnVlXCI7XG4gIG1lLmlmcmFtZS53aWR0aCA9IG1lLmNhbnZhc05ldFdpZHRoIC0gbWUuaWZEZWx0YSArIDA7XG4gIG1lLmlmcmFtZS5oZWlnaHQgPSBtZS5jYW52YXNOZXRIZWlnaHQgLSBtZS5pZkRlbHRhICsgMDtcblxuICBtZS5zaG93VGl0bGVCYXIgPSBhcHBlYXJhbmNlLnNob3dUaXRsZUJhcjtcblxuICBtZS5nZXRGcmFtZUlubmVyQm9yZGVyUmFkaXVzID0gYXBwZWFyYW5jZS5nZXRGcmFtZUlubmVyQm9yZGVyUmFkaXVzO1xuXG4gIG1lLmZyYW1lQm9yZGVyUmFkaXVzID0gYXBwZWFyYW5jZS5mcmFtZUJvcmRlclJhZGl1cztcblxuICBtZS5hZGp1c3RGcmFtZUJvcmRlclJhZGl1cygpO1xuXG4gIG1lLnVzZUlmcmFtZSA9IGZhbHNlO1xuXG4gIG1lLmNhbnZhcy5jYW52YXNFbGVtZW50LmFwcGVuZENoaWxkKG1lLmlmcmFtZSk7XG5cbiAgbWUuY2FudmFzLmNhbnZhc0VsZW1lbnQuYXBwZW5kQ2hpbGQobWUuZGZyYW1lKTtcblxuICB0aGlzLnNldFVzZUlmcmFtZSA9IGZ1bmN0aW9uKHVzZUlmcmFtZSkge1xuICAgIG1lLnVzZUlmcmFtZSA9IHVzZUlmcmFtZTtcbiAgICBtZS5pZnJhbWUuc3R5bGUudmlzaWJpbGl0eSA9IFwiaGlkZGVuXCI7XG4gICAgbWUuaWZyYW1lLnN0eWxlLnBvc2l0aW9uID0gXCJhYnNvbHV0ZVwiO1xuICAgIG1lLmlmcmFtZS5zdHlsZS5sZWZ0ID0gXCIwcHhcIjtcbiAgICBtZS5pZnJhbWUuc3R5bGUudG9wID0gXCIwcHhcIjtcbiAgICBtZS5pZnJhbWUuc3R5bGUud2lkdGggPSBcIjEwMCVcIjtcbiAgICBtZS5pZnJhbWUuc3R5bGUuaGVpZ2h0ID0gXCIxMDAlXCI7XG5cbiAgICAvL0RFQlVHR1xuICAgIC8vbWUuaWZyYW1lLnN0eWxlLm92ZXJmbG93ID0gJ2hpZGRlbic7XG4gICAgLy9tZS5pZnJhbWUuc2Nyb2xsaW5nID0gJ2F1dG8nO1xuXG4gICAgbWUuZGZyYW1lLnN0eWxlLnZpc2liaWxpdHkgPSBcImhpZGRlblwiO1xuICAgIG1lLmRmcmFtZS5zdHlsZS5wb3NpdGlvbiA9IFwiYWJzb2x1dGVcIjtcbiAgICBtZS5kZnJhbWUuc3R5bGUubGVmdCA9IFwiMHB4XCI7XG4gICAgbWUuZGZyYW1lLnN0eWxlLmJveFNpemluZyA9IFwiY29udGVudC1ib3hcIjtcblxuICAgIG1lLmRmcmFtZS5zdHlsZS50b3AgPSBcIjBweFwiO1xuICAgIG1lLmRmcmFtZS5zdHlsZS53aWR0aCA9IFwiMTAwJVwiO1xuICAgIG1lLmRmcmFtZS5zdHlsZS5oZWlnaHQgPSBcIjEwMCVcIjtcbiAgICAvL21lLmRmcmFtZS5zdHlsZS5ib3JkZXJTdHlsZT1cInNvbGlkXCI7XG4gICAgbWUuZGZyYW1lLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwid2hpdGVcIjtcblxuICAgIGlmICh1c2VJZnJhbWUpIHtcbiAgICAgIG1lLmlmcmFtZS5zdHlsZS52aXNpYmlsaXR5ID0gXCJ2aXNpYmxlXCI7XG4gICAgICBtZS5kZnJhbWUuc3R5bGUudmlzaWJpbGl0eSA9IFwiaGlkZGVuXCI7XG4gICAgfSBlbHNlIHtcbiAgICAgIG1lLmlmcmFtZS5zdHlsZS52aXNpYmlsaXR5ID0gXCJoaWRkZW5cIjtcbiAgICAgIG1lLmRmcmFtZS5zdHlsZS52aXNpYmlsaXR5ID0gXCJ2aXNpYmxlXCI7XG4gICAgfVxuICB9O1xuXG4gIG1lLnNldFVzZUlmcmFtZShhcHBlYXJhbmNlLnVzZUlmcmFtZSk7XG5cbiAgLy9JZiBpdCBpcyBJRSwgc2V0IHRoZSBjYW52YXNFbGVtZW50IG9mIHRoZSBjYW52YXMgd2hpY2ggaXMgdGhlIHBhcmVudCBvZiB0aGUgaWZyYW1lIHRvIHRyYW5zcGFyZW50LlxuXG4gIGlmIChcbiAgICBtZS5vdmVycmF5VHJhbnNwYXJlbnRTY3JlZW5FbmFibGVkIHx8XG4gICAgbWUub3ZlcnJheVRyYW5zcGFyZW50U2NyZWVuT25SZXNpemVcbiAgKSB7XG4gICAgLy9DcmVhdGUgYSB0cmFuc3BhcmVudCBzY3JlZW4uXG4gICAgbWUudHJhbnNwYXJlbmNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgLy9tZS50cmFuc3BhcmVuY2Uuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gJ3VybChpbWcvaW1nX2Jhcm9uX3RwLmdpZiknO1xuXG4gICAgbWUudHJhbnNwYXJlbmNlLnN0eWxlLnBvc2l0aW9uID0gXCJhYnNvbHV0ZVwiO1xuICAgIG1lLnRyYW5zcGFyZW5jZS5zdHlsZS5sZWZ0ID0gXCIwcHhcIjtcbiAgICBtZS50cmFuc3BhcmVuY2Uuc3R5bGUudG9wID0gXCIwcHhcIjtcblxuICAgIC8vVHJhbnNwYXJlbnQgc2NyZWVuIGlzIDBweCB3aGVuIGNyZWF0aW5nIHdpbmRvd1xuICAgIG1lLnRyYW5zcGFyZW5jZS5zdHlsZS53aWR0aCA9IFwiMHB4XCI7XG4gICAgbWUudHJhbnNwYXJlbmNlLnN0eWxlLmhlaWdodCA9IFwiMHB4XCI7XG5cbiAgICBtZS50cmFuc3BhcmVuY2Uuc3R5bGUuekluZGV4ID0gNDtcbiAgICBtZS50cmFuc3BhcmVuY2Uuc3R5bGUuYm9yZGVyV2lkdGggPSBcIjBweFwiO1xuICAgIG1lLnRyYW5zcGFyZW5jZS5zdHlsZS5ib3JkZXJDb2xvciA9IFwiI2ZmMDBlZVwiO1xuICAgIG1lLnRyYW5zcGFyZW5jZS5zdHlsZS5ib3JkZXJTdHlsZSA9IFwibm9uZVwiO1xuICAgIG1lLnRyYW5zcGFyZW5jZS5zdHlsZS5jdXJzb3IgPSBcImRlZmF1bHRcIjtcblxuICAgIG1lLnRyYW5zcGFyZW5jZS5zdHlsZS5wb2ludGVyRXZlbnRzID0gXCJub25lXCI7XG4gICAgbWUuY2FudmFzLmNhbnZhc0VsZW1lbnQuc3R5bGUuYmFja2dyb3VuZENvbG9yID1cbiAgICAgIGFwcGVhcmFuY2UuZnJhbWVCYWNrZ3JvdW5kQ29sb3I7XG5cbiAgICBtZS5jYW52YXMuY2FudmFzRWxlbWVudC5hcHBlbmRDaGlsZChtZS50cmFuc3BhcmVuY2UpO1xuICB9XG59XG5cbkNJZkZyYW1lLnByb3RvdHlwZS5nZXRGcmFtZVZpZXcgPSBmdW5jdGlvbigpIHtcbiAgdmFyIG1lID0gdGhpcztcbiAgcmV0dXJuIG1lLmRmcmFtZTtcbn07XG5cbkNJZkZyYW1lLnByb3RvdHlwZS5zZXRIVE1MID0gZnVuY3Rpb24oaHRtbCkge1xuICB2YXIgbWUgPSB0aGlzO1xuICBtZS5kZnJhbWUuaW5uZXJIVE1MID0gaHRtbDtcbn07XG5cbi8qKlxuICogZmluZCBET00gRWxlbWVudCBpbiB0aGUgZnJhbWUgYnkgcXVlcnlTZWxlY3Rvcjxicj5cbiAqICBFeGFtcGxlczxicj5cbiAqICAgICAgZnJhbWUuJChcIiNteV9pZF9uYW1lXCIpO1xuICogICAgICBmcmFtZS4kKFwiLm15X2NsYXNzX25hbWVcIik7XG4gKiAgICAgIGZyYW1lLiQoXCJkaXY+aW1nXCIpO1xuICogICAgICBmcmFtZS4kKFwiaW5wdXRbdHlwZT0nc3VibWl0XVwiKTtcbiAqIEBwYXJhbSBxXG4gKiBAcmV0dXJucyB7Tm9kZX1cbiAqL1xuQ0lmRnJhbWUucHJvdG90eXBlLiQgPSBmdW5jdGlvbihxKSB7XG4gIHZhciBtZSA9IHRoaXM7XG5cbiAgaWYgKG1lLnVzZUlmcmFtZSkge1xuICAgIHZhciBkb2NJbklmcmFtZSA9IG1lLmlmcmFtZS5jb250ZW50V2luZG93LmRvY3VtZW50O1xuICAgIHJldHVybiBkb2NJbklmcmFtZS5xdWVyeVNlbGVjdG9yKHEpO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBtZS5kZnJhbWUucXVlcnlTZWxlY3RvcihxKTtcbiAgfVxufTtcblxuQ0lmRnJhbWUucHJvdG90eXBlLm9uID0gZnVuY3Rpb24oaWQsIGV2ZW50VHlwZSwgY2FsbGJhY2tGdW5jKSB7XG4gIHZhciBtZSA9IHRoaXM7XG4gIHZhciBjb21wb25lbnQgPSBtZS5nZXRGcmFtZUNvbXBvbmVudEVsZW1lbnQoaWQpO1xuICBpZiAoY29tcG9uZW50KSB7XG4gICAgLy9TaW5jZSB3ZSB3YW50IHRvIHNwZWNpZnkgb25seSBvbmUgaGFuZGxlciBmb3IgZnJhbWUgY29tcG9uZW50cyBhdCB0aGUgc2FtZSB0aW1lLFxuICAgIC8vIHVzZSBhbiBldmVudCBoYW5kbGVyIGluc3RlYWQgb2YgYW4gZXZlbnQgbGlzdGVuZXJcbiAgICBjb21wb25lbnRbXCJvblwiICsgZXZlbnRUeXBlXSA9IGZ1bmN0aW9uKGUpIHtcbiAgICAgIHZhciBjaGlsZE1lbnVFbGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCArIFwiX2NoaWxkX21lbnVcIik7XG4gICAgICBpZiAoY2hpbGRNZW51RWxlICYmIGV2ZW50VHlwZSA9PT0gXCJjbGlja1wiKSB7XG4gICAgICAgIGlmIChjaGlsZE1lbnVFbGUuc3R5bGUuZGlzcGxheSA9PSBcImZsZXhcIikge1xuICAgICAgICAgIGNoaWxkTWVudUVsZS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY2hpbGRNZW51RWxlLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBjYWxsYmFja0Z1bmMobWUsIGUsIHtcbiAgICAgICAgdHlwZTogXCJmcmFtZUNvbXBvbmVudFwiLFxuICAgICAgICBpZDogaWQsXG4gICAgICAgIGV2ZW50VHlwZTogZXZlbnRUeXBlLFxuICAgICAgICBjaGlsZDogY2hpbGRNZW51RWxlXG4gICAgICB9KTtcbiAgICB9O1xuICB9XG5cbiAgdmFyIGRvbUVsZW1lbnQgPSBtZS4kKGlkKTtcbiAgaWYgKGRvbUVsZW1lbnQpIHtcbiAgICBkb21FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnRUeXBlLCBmdW5jdGlvbihlKSB7XG4gICAgICBjYWxsYmFja0Z1bmMobWUsIGUsIHtcbiAgICAgICAgdHlwZTogXCJkb21cIixcbiAgICAgICAgaWQ6IGlkLFxuICAgICAgICBldmVudFR5cGU6IGV2ZW50VHlwZVxuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cbn07XG5cbkNJZkZyYW1lLnByb3RvdHlwZS5hZGp1c3RGcmFtZUJvcmRlclJhZGl1cyA9IGZ1bmN0aW9uKCkge1xuICB2YXIgbWUgPSB0aGlzO1xuXG4gIGlmIChwYXJzZUludChtZS5mcmFtZUJvcmRlclJhZGl1cywgMTApID4gMCkge1xuICAgIHZhciBpbm5lckJvcmRlclJhZGl1cyA9IG1lLmdldEZyYW1lSW5uZXJCb3JkZXJSYWRpdXMobWUsIG1lLl9oYXNGb2N1cyk7XG5cbiAgICBpZiAobWUuc2hvd1RpdGxlQmFyKSB7XG4gICAgICAvL3RpdGxlIGJhciBleGlzdHNcbiAgICAgIG1lLmNhbnZhcy5jYW52YXNFbGVtZW50LnN0eWxlLmJvcmRlckJvdHRvbVJpZ2h0UmFkaXVzID0gaW5uZXJCb3JkZXJSYWRpdXM7XG4gICAgICBtZS5jYW52YXMuY2FudmFzRWxlbWVudC5zdHlsZS5ib3JkZXJCb3R0b21MZWZ0UmFkaXVzID0gaW5uZXJCb3JkZXJSYWRpdXM7XG4gICAgICBtZS5pZnJhbWUuc3R5bGUuYm9yZGVyQm90dG9tUmlnaHRSYWRpdXMgPSBpbm5lckJvcmRlclJhZGl1cztcbiAgICAgIG1lLmlmcmFtZS5zdHlsZS5ib3JkZXJCb3R0b21MZWZ0UmFkaXVzID0gaW5uZXJCb3JkZXJSYWRpdXM7XG5cbiAgICAgIG1lLnRpdGxlQmFyLnN0eWxlLmJvcmRlclRvcExlZnRSYWRpdXMgPSBpbm5lckJvcmRlclJhZGl1cztcbiAgICAgIG1lLnRpdGxlQmFyLnN0eWxlLmJvcmRlclRvcFJpZ2h0UmFkaXVzID0gaW5uZXJCb3JkZXJSYWRpdXM7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vdGl0bGUgYmFyIG5vdCBleGl0c1xuICAgICAgbWUuY2FudmFzLmNhbnZhc0VsZW1lbnQuc3R5bGUuYm9yZGVyUmFkaXVzID0gaW5uZXJCb3JkZXJSYWRpdXM7XG4gICAgICBtZS5pZnJhbWUuc3R5bGUuYm9yZGVyUmFkaXVzID0gaW5uZXJCb3JkZXJSYWRpdXM7XG4gICAgfVxuXG4gICAgaWYgKG1lLmRmcmFtZSkge1xuICAgICAgbWUuZGZyYW1lLnN0eWxlLmJvcmRlckJvdHRvbVJpZ2h0UmFkaXVzID0gaW5uZXJCb3JkZXJSYWRpdXM7XG4gICAgICBtZS5kZnJhbWUuc3R5bGUuYm9yZGVyQm90dG9tTGVmdFJhZGl1cyA9IGlubmVyQm9yZGVyUmFkaXVzO1xuICAgIH1cbiAgfVxufTtcblxuQ0lmRnJhbWUucHJvdG90eXBlLmhhbmRsZVJlbGVhc2luZ0ZvY3VzID0gZnVuY3Rpb24oZSkge1xuICB2YXIgbWUgPSB0aGlzO1xuICBtZS5faGFzRm9jdXMgPSBmYWxzZTtcblxuICBtZS50aXRsZUJhci5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBtZS50aXRsZUJhckNvbG9yRGVmYXVsdDtcbiAgbWUudGl0bGVCYXIuc3R5bGUuY29sb3IgPSBtZS50aXRsZUJhckNhcHRpb25Db2xvckRlZmF1bHQ7XG5cbiAgLy9ib3JkZXIgY29sb3JcbiAgaWYgKG1lLmZyYW1lQm9yZGVyQ29sb3JEZWZhdWx0KSB7XG4gICAgbWUuaHRtbEVsZW1lbnQuc3R5bGUuYm9yZGVyQ29sb3IgPSBtZS5mcmFtZUJvcmRlckNvbG9yRGVmYXVsdDtcbiAgfVxuXG4gIC8vYm9yZGVyIHdpZHRoXG4gIGlmIChtZS5mcmFtZUJvcmRlcldpZHRoRGVmYXVsdCkge1xuICAgIG1lLmh0bWxFbGVtZW50LnN0eWxlLmJvcmRlcldpZHRoID0gbWUuZnJhbWVCb3JkZXJXaWR0aERlZmF1bHQ7XG4gICAgbWUuYWRqdXN0RnJhbWVCb3JkZXJSYWRpdXMoKTtcbiAgfVxuXG4gIGlmIChtZS5odG1sRWxlbWVudC50eXBlTmFtZSA9PSBcImNpZndpbmRvd1wiKSB7XG4gICAgaWYgKG1lLm92ZXJyYXlUcmFuc3BhcmVudFNjcmVlbkVuYWJsZWQpIHtcbiAgICAgIG1lLnRyYW5zcGFyZW5jZS5zdHlsZS53aWR0aCA9IHBhcnNlSW50KG1lLmlmcmFtZS53aWR0aCwgMTApICsgXCJweFwiO1xuICAgICAgbWUudHJhbnNwYXJlbmNlLnN0eWxlLmhlaWdodCA9IHBhcnNlSW50KG1lLmlmcmFtZS5oZWlnaHQsIDEwKSArIFwicHhcIjtcbiAgICB9XG4gIH1cblxuICAvL2hhbmRsaW5nIGZvciBjaGlsZCBmcmFtZUNvbXBvbmVudHNcbiAgZm9yICh2YXIgZnJhbWVDb21wb25lbnRJZCBpbiBtZS5mcmFtZUNvbXBvbmVudE1hcCkge1xuICAgIHZhciBmcmFtZUNvbXBvbmVudCA9IG1lLmZyYW1lQ29tcG9uZW50TWFwW2ZyYW1lQ29tcG9uZW50SWRdO1xuICAgIGZyYW1lQ29tcG9uZW50LmhhbmRsZVJlbGVhc2luZ0ZvY3VzKCk7XG4gIH1cblxuICAvL2JvcmRlciBib3R0b21cbiAgaWYgKG1lLnRpdGxlQmFyQm9yZGVyQm90dG9tRGVmYXVsdCkge1xuICAgIG1lLnRpdGxlQmFyLnN0eWxlLmJvcmRlckJvdHRvbSA9IG1lLnRpdGxlQmFyQm9yZGVyQm90dG9tRGVmYXVsdDtcbiAgfVxuXG4gIC8vdXBkYXRlIHN0eWxlIGNsYXNzXG4gIG1lLnRpdGxlQmFyLmNsYXNzTmFtZSA9IG1lLnRpdGxlQmFyQ2xhc3NOYW1lRGVmYXVsdDtcblxuICByZXR1cm4gbWU7XG59O1xuXG5DSWZGcmFtZS5wcm90b3R5cGUuaGFuZGxlVGFraW5nRm9jdXMgPSBmdW5jdGlvbihlKSB7XG4gIHZhciBtZSA9IHRoaXM7XG4gIG1lLl9oYXNGb2N1cyA9IHRydWU7XG4gIG1lLl9oYXNGb2N1cyA9IERhdGUubm93KCk7XG5cbiAgaWYgKG1lLm92ZXJyYXlUcmFuc3BhcmVudFNjcmVlbkVuYWJsZWQpIHtcbiAgICAvL2Nsb3NlIHRyYW5zcGFyZW5jZSBzY3JlZW5cbiAgICBtZS50cmFuc3BhcmVuY2Uuc3R5bGUud2lkdGggPSBcIjBweFwiO1xuICAgIG1lLnRyYW5zcGFyZW5jZS5zdHlsZS5oZWlnaHQgPSBcIjBweFwiO1xuICB9XG5cbiAgbWUudGl0bGVCYXIuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gbWUudGl0bGVCYXJDb2xvckZvY3VzZWQ7XG4gIG1lLnRpdGxlQmFyLnN0eWxlLmNvbG9yID0gbWUudGl0bGVCYXJDYXB0aW9uQ29sb3JGb2N1c2VkO1xuXG4gIC8vYm9yZGVyIGNvbG9yXG4gIGlmIChtZS5mcmFtZUJvcmRlckNvbG9yRm9jdXNlZCkge1xuICAgIG1lLmh0bWxFbGVtZW50LnN0eWxlLmJvcmRlckNvbG9yID0gbWUuZnJhbWVCb3JkZXJDb2xvckZvY3VzZWQ7XG4gIH1cblxuICAvL2JvcmRlciB3aWR0aFxuICBpZiAobWUuZnJhbWVCb3JkZXJXaWR0aEZvY3VzZWQpIHtcbiAgICBtZS5odG1sRWxlbWVudC5zdHlsZS5ib3JkZXJXaWR0aCA9IG1lLmZyYW1lQm9yZGVyV2lkdGhGb2N1c2VkO1xuICAgIG1lLmFkanVzdEZyYW1lQm9yZGVyUmFkaXVzKCk7XG4gIH1cblxuICAvL2JvcmRlciBib3R0b21cbiAgaWYgKG1lLnRpdGxlQmFyQm9yZGVyQm90dG9tRm9jdXNlZCkge1xuICAgIG1lLnRpdGxlQmFyLnN0eWxlLmJvcmRlckJvdHRvbSA9IG1lLnRpdGxlQmFyQm9yZGVyQm90dG9tRm9jdXNlZDtcbiAgfVxuXG4gIC8vaGFuZGxpbmcgZm9yIGNoaWxkIGZyYW1lQ29tcG9uZW50c1xuICBmb3IgKHZhciBmcmFtZUNvbXBvbmVudElkIGluIG1lLmZyYW1lQ29tcG9uZW50TWFwKSB7XG4gICAgdmFyIGZyYW1lQ29tcG9uZW50ID0gbWUuZnJhbWVDb21wb25lbnRNYXBbZnJhbWVDb21wb25lbnRJZF07XG4gICAgZnJhbWVDb21wb25lbnQuaGFuZGxlVGFraW5nRm9jdXMoKTtcbiAgfVxuXG4gIC8vdXBkYXRlIHN0eWxlIGNsYXNzXG4gIG1lLnRpdGxlQmFyLmNsYXNzTmFtZSA9IG1lLnRpdGxlQmFyQ2xhc3NOYW1lRm9jdXNlZDtcbiAgcmV0dXJuIG1lO1xufTtcblxuQ0ZyYW1lLnByb3RvdHlwZS5zaG93ID0gZnVuY3Rpb24obW9kZWwpIHtcbiAgdmFyIG1lID0gdGhpcztcbiAgLy9tZS5odG1sRWxlbWVudC5zdHlsZS52aXNpYmlsaXR5ID0gJ3Zpc2libGUnO1xuICBtZS5odG1sRWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7IC8vaGlkZGVuJztcblxuICBpZiAobW9kZWwgJiYgbW9kZWwucmVxdWVzdEZvY3VzID09IGZhbHNlKSB7XG4gIH0gZWxzZSB7XG4gICAgbWUucmVxdWVzdEZvY3VzKCk7XG4gIH1cbiAgcmV0dXJuIG1lO1xufTtcblxuQ0ZyYW1lLnByb3RvdHlwZS5zaG93TW9kYWwgPSBmdW5jdGlvbihvbkNsb3NlTGlzdGVuZXIpIHtcbiAgdmFyIG1lID0gdGhpcztcblxuICB2YXIgYXBwZWFyYW5jZSA9IG5ldyBDRnJhbWVBcHBlYXJhbmNlKCk7XG4gIGFwcGVhcmFuY2Uuc2hvd1RpdGxlQmFyID0gdHJ1ZTtcbiAgYXBwZWFyYW5jZS5zaG93Q2xvc2VCdXR0b24gPSBmYWxzZTtcbiAgYXBwZWFyYW5jZS5mcmFtZUJvcmRlclJhZGl1cyA9IFwiMHB4XCI7XG4gIGFwcGVhcmFuY2UuZnJhbWVCb3JkZXJTdHlsZSA9IFwibm9uZVwiO1xuICBhcHBlYXJhbmNlLmZyYW1lQm9yZGVyV2lkdGhEZWZhdWx0ID0gXCIwcHhcIjtcbiAgYXBwZWFyYW5jZS5mcmFtZUJvcmRlcldpZHRoRm9jdXNlZCA9IFwiMHB4XCI7XG4gIGFwcGVhcmFuY2UuZnJhbWVCb3hTaGFkb3cgPSBudWxsO1xuICBhcHBlYXJhbmNlLmZyYW1lQmFja2dyb3VuZENvbG9yID0gXCJ0cmFuc3BhcmVudFwiO1xuICBhcHBlYXJhbmNlLmZyYW1lQ29tcG9uZW50cyA9IFtdO1xuICBhcHBlYXJhbmNlLmZyYW1lSGVpZ2h0QWRqdXN0ID0gMDtcbiAgYXBwZWFyYW5jZS50aXRsZUJhckhlaWdodCA9IFwiMHB4XCI7XG4gIGFwcGVhcmFuY2UudGl0bGVCYXJCb3JkZXJCb3R0b21Gb2N1c2VkID0gbnVsbDtcbiAgYXBwZWFyYW5jZS50aXRsZUJhckNhcHRpb25MZWZ0TWFyZ2luID0gXCIwcHhcIjtcblxuICBhcHBlYXJhbmNlLm9uSW5pdGlhbGl6ZSA9IGZ1bmN0aW9uKCkge307XG5cbiAgLy9hZGRlZCBmb3IgbW9kYWwgd2luZG93XG4gIGFwcGVhcmFuY2UucHVsbFVwRGlzYWJsZWQgPSB0cnVlO1xuXG4gIHZhciB3aW5kb3dNYW5hZ2VyID0gbWUucGFyZW50Q2FudmFzO1xuXG4gIHZhciBtb2RhbEJhY2tncm91bmRXaW5kb3dJZCA9XG4gICAgREVGLkNGUkFNRS5NT0RBTF9CQUNLR1JPVU5EX0ZSQU1FX0lEX1BSRUZJWCArIG1lLmlkO1xuXG4gIC8vY3JlYXRlIGJhY2tncm91bmQgd2luZG93IGZvciBwcmV2ZW50aW5nIGNsaWNrIGJhY2tncm91bmRcbiAgdmFyIG1vZGFsQmFja2dyb3VuZEZyYW1lID0gbmV3IENJZkZyYW1lKFxuICAgIG1vZGFsQmFja2dyb3VuZFdpbmRvd0lkLFxuICAgIDAsXG4gICAgMCxcbiAgICAxLFxuICAgIDEsXG4gICAgYXBwZWFyYW5jZVxuICApO1xuICBtb2RhbEJhY2tncm91bmRGcmFtZS5zZXRTaXplKHdpbmRvdy5pbm5lcldpZHRoLCB3aW5kb3cuaW5uZXJIZWlnaHQsIHRydWUpO1xuICBtb2RhbEJhY2tncm91bmRGcmFtZS5zZXRSZXNpemFibGUoZmFsc2UpO1xuXG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIGZ1bmN0aW9uKCkge1xuICAgIG1vZGFsQmFja2dyb3VuZEZyYW1lLnNldFNpemUod2luZG93LmlubmVyV2lkdGgsIHdpbmRvdy5pbm5lckhlaWdodCwgdHJ1ZSk7XG4gIH0pO1xuXG4gIC8vcmVtZW1iZXIgaWQgb2YgbW9kYWwgYmFja2dyb3VuZCBmcmFtZVxuICBtZS5tb2RhbEJhY2tncm91bmRXaW5kb3dJZCA9IG1vZGFsQmFja2dyb3VuZFdpbmRvd0lkO1xuXG4gIC8vIGlmIChwcm9wZXJ0aWVzICYmIHByb3BlcnRpZXMud2luZG93TmFtZSkge1xuICAvLyAgICAgZnJhbWUuc2V0TmFtZShwcm9wZXJ0aWVzLndpbmRvd05hbWUpO1xuICAvLyB9XG5cbiAgbW9kYWxCYWNrZ3JvdW5kRnJhbWUuaGlkZSgpO1xuICB3aW5kb3dNYW5hZ2VyLmFkZFdpbmRvdyhtb2RhbEJhY2tncm91bmRGcmFtZSk7XG5cbiAgbW9kYWxCYWNrZ3JvdW5kRnJhbWUuc2V0VGl0bGUoXCJcIikuZ2V0RnJhbWVWaWV3KCkuaW5uZXJIVE1MID1cbiAgICAnPGRpdiBjbGFzcz1cImpzZnJhbWUtbW9kYWwtd2luZG93LWJhY2tncm91bmRcIj48L2Rpdj4nO1xuICBtb2RhbEJhY2tncm91bmRGcmFtZS5nZXRGcmFtZVZpZXcoKS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInJnYmEoMCwwLDAsMC4wKVwiO1xuICBtb2RhbEJhY2tncm91bmRGcmFtZS5zaG93KCk7XG5cbiAgbWUuc2hvdygpO1xuXG4gIGlmIChvbkNsb3NlTGlzdGVuZXIpIHtcbiAgICBtZS5zZXRPbkNsb3NlRnJhbWVMaXN0ZW5lcihvbkNsb3NlTGlzdGVuZXIpO1xuICB9XG59O1xuXG5DSWZGcmFtZS5wcm90b3R5cGUuaGlkZSA9IGZ1bmN0aW9uKCkge1xuICB2YXIgbWUgPSB0aGlzO1xuICAvLyAgbWUuaHRtbEVsZW1lbnQuc3R5bGUudmlzaWJpbGl0eSA9ICdoaWRkZW4nO1xuICBtZS5odG1sRWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7IC8vaGlkZGVuJztcbiAgcmV0dXJuIG1lO1xufTtcblxuLy9PdmVycmlkaW5nIENCZWFuRnJhbWUucHJvdG90eXBlLm9ubW91c2VEb3duXG5DSWZGcmFtZS5wcm90b3R5cGUub25tb3VzZURvd24gPSBmdW5jdGlvbihlKSB7XG4gIHZhciByZWZIdG1sRWxlbWVudCA9IHRoaXM7XG5cbiAgLy9EbyBub3Qgc2VsZWN0IGl0IHdoZW4gZHJhZ2dpbmcgYnkgdGhlIG1vdXNlLlxuICBkb2N1bWVudC5ib2R5Lm9uZHJhZyA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfTtcbiAgLy8gZG9jdW1lbnQuYm9keS5vbnNlbGVjdHN0YXJ0ID0gZnVuY3Rpb24gKCkge1xuICAvLyAgICAgcmV0dXJuIGZhbHNlO1xuICAvLyB9O1xuXG4gIC8vT3ZlcnJpZGUgZGVjb3JhdG9yIHdpdGggb25tb3VzZURvd24gb2YgcGFyZW50IGNsYXNzXG4gIHJlZkh0bWxFbGVtZW50LmRlY29yYXRvciA9IENGcmFtZS5wcm90b3R5cGUub25tb3VzZURvd247XG4gIHJlZkh0bWxFbGVtZW50LmRlY29yYXRvcihlKTtcblxuICAvL0RlcGxveSBhIHRyYW5zcGFyZW50IHNjcmVlbi5cbiAgLy8gU2luY2UgbW91c2VEb3duIGlzIHBvaW50ZWQgdG8gdGhpcy5odG1sRWxlbWVudC5vbm1vdXNlZG93biBpbiB0aGUgQ0JlYW4gY2xhc3MsXG4gIC8vIHRoaXMgJ3RoaXMnIHdpbGwgaW5kaWNhdGUgdGhpcy5odG1sRWxlbWVudC5cbiAgLy9JbiBvdGhlciB3b3JkcyxcbiAgLy9pZiB5b3Ugd2FudCB0byByZWZlciAnQ0lmRnJhbWUnLHlvdSBuZWVkIHRvIHNwZWNpZnkgJ3RoaXMucGFyZW50LidcbiAgLy9TZWUgQ0JlYW5GcmFtZSBjbGFzcywgeW91IGNhbiBmaW5kICd0aGlzLmh0bWxFbGVtZW50LnBhcmVudCA9IHRoaXMnXG4gIHZhciByZWZDSWZGcmFtZSA9IHJlZkh0bWxFbGVtZW50LnBhcmVudDtcblxuICB2YXIgcmVmQ1dpbmRvd01hbmFnZXIgPSByZWZIdG1sRWxlbWVudC5wYXJlbnRDYW52YXM7XG5cbiAgLy9XaGVuIHNvbWV3aGVyZSB3aW5kb3coQ0ZyYW1lLENJZkZyYW1lKSBmaXJlcyAnbW91c2VEb3duJyxcbiAgLy8gQ2xvc2UgYWxsIHRyYW5zcGFyZW5jeSBzY3JlZW5zIHNvIHRoYXQgdGhlIG1vdXNlIGN1cnNvciBjYW4gcGFzcyBvdmVyIGFueSBpRnJhbWVcbiAgZm9yICh2YXIgd2luZG93SWQgaW4gcmVmQ1dpbmRvd01hbmFnZXIuYmVhbkxpc3QpIHtcbiAgICB2YXIgb2JqQ0lmRnJhbWUgPSByZWZDV2luZG93TWFuYWdlci5iZWFuTGlzdFt3aW5kb3dJZF07XG4gICAgaWYgKHdpbmRvd0lkID09IHJlZkNJZkZyYW1lLmdldFdpbmRvd0lkKCkpIHtcbiAgICAgIC8vc2tpcFxuICAgIH0gZWxzZSB7XG4gICAgICBvYmpDSWZGcmFtZS5oYW5kbGVSZWxlYXNpbmdGb2N1cygpO1xuICAgIH1cbiAgfVxuXG4gIHJlZkNJZkZyYW1lLmhhbmRsZVRha2luZ0ZvY3VzKCk7XG59O1xuXG5DSWZGcmFtZS5wcm90b3R5cGUubW91c2VVcCA9IGZ1bmN0aW9uKGUpIHtcbiAgdmFyIHJlZkNJZkZyYW1lID0gdGhpcztcblxuICBpZiAoXG4gICAgcmVmQ0lmRnJhbWUub3ZlcnJheVRyYW5zcGFyZW50U2NyZWVuRW5hYmxlZCB8fFxuICAgIHJlZkNJZkZyYW1lLm92ZXJyYXlUcmFuc3BhcmVudFNjcmVlbk9uUmVzaXplXG4gICkge1xuICAgIGlmIChyZWZDSWZGcmFtZS5wYXJlbnRDYW52YXMub25Ub3BPYmplY3QgPT0gcmVmQ0lmRnJhbWUpIHtcbiAgICAgIC8vTWluaW1pemUgdGhlIHdpbmRvdyBhdCB0aGUgZnJvbnQuXG4gICAgICByZWZDSWZGcmFtZS50cmFuc3BhcmVuY2Uuc3R5bGUud2lkdGggPSBcIjBweFwiO1xuICAgICAgcmVmQ0lmRnJhbWUudHJhbnNwYXJlbmNlLnN0eWxlLmhlaWdodCA9IFwiMHB4XCI7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vVGhlIHdpbmRvdyB3aGljaCBpcyBub3QgdGhlIGF0IHRoZSBmcm9udCBleHBhbmRzIHRoZSBzY3JlZW4gc28gdGhhdCBpdCBjYW4gcmVzcG9uZCB0byBjbGlja3MuXG5cbiAgICAgIGlmIChyZWZDSWZGcmFtZS5vdmVycmF5VHJhbnNwYXJlbnRTY3JlZW5FbmFibGVkKSB7XG4gICAgICAgIHJlZkNJZkZyYW1lLnRyYW5zcGFyZW5jZS5zdHlsZS53aWR0aCA9XG4gICAgICAgICAgcGFyc2VJbnQocmVmQ0lmRnJhbWUuaWZyYW1lLndpZHRoKSArIFwicHhcIjtcbiAgICAgICAgcmVmQ0lmRnJhbWUudHJhbnNwYXJlbmNlLnN0eWxlLmhlaWdodCA9XG4gICAgICAgICAgcGFyc2VJbnQocmVmQ0lmRnJhbWUuaWZyYW1lLmhlaWdodCkgKyBcInB4XCI7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmVmQ0lmRnJhbWUuZGVjb3JhdG9yID0gQ0ZyYW1lLnByb3RvdHlwZS5tb3VzZVVwO1xuICByZWZDSWZGcmFtZS5kZWNvcmF0b3IoZSk7XG5cbiAgLy9DYW5jZWwgc2VsZWN0aW5nIFwiRG8gbm90IHNlbGVjdCB3aGVuIGRyYWdnaW5nIG1vdXNlIHdoaWxlIHJlbGVhc2luZyBidXR0b25cIiBpcyBjYW5jZWxlZFxuICBkb2N1bWVudC5ib2R5Lm9uZHJhZyA9IG51bGw7XG4gIGRvY3VtZW50LmJvZHkub25zZWxlY3RzdGFydCA9IG51bGw7XG5cbiAgLy9EaXNhYmxlIHdoZW4gc3RvcHBpbmcgbW92aW5nLihFbmFibGUgdHJhbnNwYXJlbnQgd2luZG93IG9ubHkgd2hlbiBtb3ZpbmcuKVxuICAvL1RoaXMgd2lsbCB3b3JrIHNtb290aGx5IGV2ZW4gd2l0aCBpZnJhbWUgY29udGVudFxuICByZWZDSWZGcmFtZS50cmFuc3BhcmVuY2Uuc3R5bGUucG9pbnRlckV2ZW50cyA9IFwibm9uZVwiO1xufTtcblxuQ0lmRnJhbWUucHJvdG90eXBlLnNldE1pbkZyYW1lU2l6ZSA9IGZ1bmN0aW9uKHdpZHRoLCBoZWlnaHQpIHtcbiAgdmFyIG1lID0gdGhpcztcbiAgbWUubWluRnJhbWVXaWR0aCA9IHdpZHRoO1xuICBtZS5taW5XaW5kb3dIZWlnaHQgPSBoZWlnaHQ7XG59O1xuXG5DSWZGcmFtZS5wcm90b3R5cGUucmVzaXplID0gZnVuY3Rpb24oXG4gIGRlbHRhTGVmdCxcbiAgZGVsdGFUb3AsXG4gIGRlbHRhV2lkdGgsXG4gIGRlbHRhSGVpZ2h0LFxuICBieVVzZXJcbikge1xuICB2YXIgcmVmQ0lmRnJhbWUgPSB0aGlzO1xuXG4gIGlmICghcmVmQ0lmRnJhbWUucmVzaXphYmxlICYmIGJ5VXNlcikge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgLy9SZXNpemUgcHJvY2Vzc2luZyBzaG91bGQgYmUgb3ZlcnJpZGRlbiBkaXJlY3RseSByYXRoZXIgdGhhbiBhZG9wdGluZyBhIGRlY29yYXRvciBwYXR0ZXJuIGJlY2F1c2UgaXQgaGFzIGJldHRlciBwZXJmb3JtYW5jZS5cbiAgdmFyIHRtcExlZnQgPSBwYXJzZUludChyZWZDSWZGcmFtZS5odG1sRWxlbWVudC5zdHlsZS5sZWZ0LCAxMCk7XG4gIHZhciB0bXBUb3AgPSBwYXJzZUludChyZWZDSWZGcmFtZS5odG1sRWxlbWVudC5zdHlsZS50b3AsIDEwKTtcbiAgdmFyIHRtcFdpZHRoID0gcGFyc2VJbnQocmVmQ0lmRnJhbWUuaHRtbEVsZW1lbnQuc3R5bGUud2lkdGgsIDEwKTtcbiAgdmFyIHRtcEhlaWdodCA9IHBhcnNlSW50KHJlZkNJZkZyYW1lLmh0bWxFbGVtZW50LnN0eWxlLmhlaWdodCwgMTApO1xuXG4gIC8vSW1wb3J0YW50IGxvZ2ljIHRvIGhhbmRsZSB0aGUgbWluaW11bSBvZiBXaW5kb3cgd2VsbFxuICBpZiAoXG4gICAgYnlVc2VyICYmXG4gICAgKHRtcFdpZHRoICsgZGVsdGFXaWR0aCA8IHJlZkNJZkZyYW1lLm1pbkZyYW1lV2lkdGgpICYgKGRlbHRhV2lkdGggPCAwKVxuICApIHtcbiAgICAvL01pbmltdW0gYWRqdXN0bWVudCBvZiB3aWR0aFxuICAgIHJlZkNJZkZyYW1lLmh0bWxFbGVtZW50LnN0eWxlLndpZHRoID0gdG1wV2lkdGggKyBcInB4XCI7XG4gICAgZGVsdGFXaWR0aCA9IDA7XG4gIH1cblxuICBpZiAoXG4gICAgYnlVc2VyICYmXG4gICAgKHRtcEhlaWdodCArIGRlbHRhSGVpZ2h0IDwgcmVmQ0lmRnJhbWUubWluV2luZG93SGVpZ2h0KSAmIChkZWx0YUhlaWdodCA8IDApXG4gICkge1xuICAgIC8vTWluaW11bSBhZGp1c3RtZW50IG9mIGhlaWdodFxuICAgIHJlZkNJZkZyYW1lLmh0bWxFbGVtZW50LnN0eWxlLmhlaWdodCA9IHRtcEhlaWdodCArIFwicHhcIjtcbiAgICBkZWx0YUhlaWdodCA9IDA7XG4gIH1cbiAgcmVmQ0lmRnJhbWUuaHRtbEVsZW1lbnQuc3R5bGUubGVmdCA9IHRtcExlZnQgKyBkZWx0YUxlZnQgKyBcInB4XCI7XG4gIHJlZkNJZkZyYW1lLmh0bWxFbGVtZW50LnN0eWxlLnRvcCA9IHRtcFRvcCArIGRlbHRhVG9wICsgXCJweFwiO1xuICByZWZDSWZGcmFtZS5odG1sRWxlbWVudC5zdHlsZS53aWR0aCA9IHRtcFdpZHRoICsgZGVsdGFXaWR0aCArIFwicHhcIjtcbiAgcmVmQ0lmRnJhbWUuaHRtbEVsZW1lbnQuc3R5bGUuaGVpZ2h0ID0gdG1wSGVpZ2h0ICsgZGVsdGFIZWlnaHQgKyBcInB4XCI7XG5cbiAgdmFyIHRtcENhbnZhc1dpZHRoID0gcGFyc2VJbnQoXG4gICAgcmVmQ0lmRnJhbWUuY2FudmFzLmNhbnZhc0VsZW1lbnQuc3R5bGUud2lkdGgsXG4gICAgMTBcbiAgKTtcbiAgdmFyIHRtcENhbnZhc0hlaWdodCA9IHBhcnNlSW50KFxuICAgIHJlZkNJZkZyYW1lLmNhbnZhcy5jYW52YXNFbGVtZW50LnN0eWxlLmhlaWdodCxcbiAgICAxMFxuICApO1xuXG4gIC8vU2luY2UgY2FudmFzRWxlbWVudCBpcyBhICgwLCAwKSByZWxhdGl2ZSBjb29yZGluYXRlIHdpdGggcmVzcGVjdFxuICAvLyB0byB0aGUgcGFyZW50IGVsZW1lbnQsIGl0IGlzIG5vdCBuZWNlc3NhcnkgdG8gY2hhbmdlIGxlZnQgYW5kIHRvcC5cbiAgcmVmQ0lmRnJhbWUuY2FudmFzLmNhbnZhc0VsZW1lbnQuc3R5bGUud2lkdGggPVxuICAgIHRtcENhbnZhc1dpZHRoICsgZGVsdGFXaWR0aCArIFwicHhcIjtcbiAgcmVmQ0lmRnJhbWUuY2FudmFzLmNhbnZhc0VsZW1lbnQuc3R5bGUuaGVpZ2h0ID1cbiAgICB0bXBDYW52YXNIZWlnaHQgKyBkZWx0YUhlaWdodCArIFwicHhcIjtcblxuICAvL0NoYW5nZSB0aGUgc2l6ZSBvZiB0aGUgdGl0bGUgYmFyLiBUaXRsZUFkanVzdFdpZHRoIGV0Yy5cbiAgLy8gVGhlIHJlYXNvbiB3aHkgeW91IGRvIG5vdCBoYXZlIHRvIHVzZSB0aXRsZUFkanVzdFdpZHRoIGlzXG4gIC8vIGJlY2F1c2UgdGhlc2Ugc2NhbGluZyBhcmUgZG9uZSB3aXRoIGRpZmZlcmVuY2VzIChkZWx0YVgsIGRlbHRhWSkuXG4gIC8vVGhlcmVmb3JlLCBpZiB5b3UgYWRqdXN0IHdpdGggdGhlIHRpdGxlQWRqdXN0V2lkdGhcbiAgLy8gYXMgdGhlIGluaXRpYWwgdmFsdWUsIHRoZSBvdGhlciB3aWxsIHN0cmV0Y2ggcmVsYXRpdmUuXG4gIHJlZkNJZkZyYW1lLnRpdGxlQmFyLnN0eWxlLndpZHRoID1cbiAgICB0bXBDYW52YXNXaWR0aCAtIHJlZkNJZkZyYW1lLmlmRGVsdGEgKyBkZWx0YVdpZHRoICsgMCArIFwicHhcIjtcblxuICAvL0ltYWdlIHJlc2l6aW5nIGZvciBpZnJhbWUgdGhhdCBpcyB0aGUgY2hpbGQgZWxlbWVudCBvZiBjYW52YXNcbiAgcmVmQ0lmRnJhbWUuaWZyYW1lLndpZHRoID1cbiAgICB0bXBDYW52YXNXaWR0aCAtIHJlZkNJZkZyYW1lLmlmRGVsdGEgKyBkZWx0YVdpZHRoICsgMCArIFwicHhcIjtcbiAgcmVmQ0lmRnJhbWUuaWZyYW1lLmhlaWdodCA9XG4gICAgdG1wQ2FudmFzSGVpZ2h0IC1cbiAgICByZWZDSWZGcmFtZS5pZkRlbHRhICtcbiAgICBkZWx0YUhlaWdodCArXG4gICAgcmVmQ0lmRnJhbWUuZnJhbWVIZWlnaHRBZGp1c3QgK1xuICAgIFwicHhcIjtcblxuICBpZiAoXG4gICAgcmVmQ0lmRnJhbWUub3ZlcnJheVRyYW5zcGFyZW50U2NyZWVuRW5hYmxlZCB8fFxuICAgIHJlZkNJZkZyYW1lLm92ZXJyYXlUcmFuc3BhcmVudFNjcmVlbk9uUmVzaXplXG4gICkge1xuICAgIC8vRGVwbG95IGEgdHJhbnNwYXJlbnQgc2NyZWVuLlxuICAgIHJlZkNJZkZyYW1lLnRyYW5zcGFyZW5jZS5zdHlsZS53aWR0aCA9XG4gICAgICBwYXJzZUludChyZWZDSWZGcmFtZS5pZnJhbWUud2lkdGgpICsgXCJweFwiO1xuICAgIHJlZkNJZkZyYW1lLnRyYW5zcGFyZW5jZS5zdHlsZS5oZWlnaHQgPVxuICAgICAgcGFyc2VJbnQocmVmQ0lmRnJhbWUuaWZyYW1lLmhlaWdodCkgKyBcInB4XCI7XG4gIH1cblxuICAvL21vdmUgZnJhbWVDb21wb25lbnQobGlrZSBjbG9zZUJ1dHRvbikgY29ycmVzcG9uZGluZyB0byBtb3Zpbmcgd2luZG93IGVkZ2UgZm9yIHJlc2l6ZVxuICBmb3IgKHZhciBmcmFtZUNvbXBvbmVudElkIGluIHJlZkNJZkZyYW1lLmZyYW1lQ29tcG9uZW50TWFwKSB7XG4gICAgdmFyIGZyYW1lQ29tcG9uZW50ID0gcmVmQ0lmRnJhbWUuZnJhbWVDb21wb25lbnRNYXBbZnJhbWVDb21wb25lbnRJZF07XG4gICAgLy91cGRhdGUgYWxpZ25tZW50IG9mIGZyYW1lQ29tcG9uZW50IGNvcnJlc3BvbmRpbmcgdG8gbW92aW5nIHdpbmRvdyBlZGdlIGZvciByZXNpemVcbiAgICBmcmFtZUNvbXBvbmVudC51cGRhdGVBbGlnbigpO1xuICB9XG5cbiAgZm9yICh2YXIgYmVhbk5hbWUgaW4gcmVmQ0lmRnJhbWUuY2FudmFzLmJlYW5MaXN0KSB7XG4gICAgdmFyIHRtcEJlYW4gPSByZWZDSWZGcmFtZS5jYW52YXMuYmVhbkxpc3RbYmVhbk5hbWVdO1xuXG4gICAgaWYgKHRtcEJlYW4uaHRtbEVsZW1lbnQudHlwZU5hbWUgPT0gXCJjbWFya2Vyd2luZG93XCIpIHtcbiAgICAgIGlmICh0bXBCZWFuLmh0bWxFbGVtZW50LnVzYWdlID09IFwiUkRcIikge1xuICAgICAgICB0bXBCZWFuLmh0bWxFbGVtZW50LnN0eWxlLmxlZnQgPVxuICAgICAgICAgIHBhcnNlSW50KHRtcEJlYW4uaHRtbEVsZW1lbnQuc3R5bGUubGVmdCkgKyBkZWx0YVdpZHRoICsgXCJweFwiO1xuICAgICAgICB0bXBCZWFuLmh0bWxFbGVtZW50LnN0eWxlLnRvcCA9XG4gICAgICAgICAgcGFyc2VJbnQodG1wQmVhbi5odG1sRWxlbWVudC5zdHlsZS50b3ApICsgZGVsdGFIZWlnaHQgKyBcInB4XCI7XG4gICAgICB9IGVsc2UgaWYgKHRtcEJlYW4uaHRtbEVsZW1lbnQudXNhZ2UgPT0gXCJERFwiKSB7XG4gICAgICAgIHRtcEJlYW4uaHRtbEVsZW1lbnQuc3R5bGUud2lkdGggPVxuICAgICAgICAgIHBhcnNlSW50KHRtcEJlYW4uaHRtbEVsZW1lbnQuc3R5bGUud2lkdGgpICsgZGVsdGFXaWR0aCArIFwicHhcIjtcbiAgICAgICAgdG1wQmVhbi5odG1sRWxlbWVudC5zdHlsZS50b3AgPVxuICAgICAgICAgIHBhcnNlSW50KHRtcEJlYW4uaHRtbEVsZW1lbnQuc3R5bGUudG9wKSArIGRlbHRhSGVpZ2h0ICsgXCJweFwiO1xuICAgICAgfSBlbHNlIGlmICh0bXBCZWFuLmh0bWxFbGVtZW50LnVzYWdlID09IFwiUlJcIikge1xuICAgICAgICB0bXBCZWFuLmh0bWxFbGVtZW50LnN0eWxlLmxlZnQgPVxuICAgICAgICAgIHBhcnNlSW50KHRtcEJlYW4uaHRtbEVsZW1lbnQuc3R5bGUubGVmdCkgKyBkZWx0YVdpZHRoICsgXCJweFwiO1xuICAgICAgICB0bXBCZWFuLmh0bWxFbGVtZW50LnN0eWxlLmhlaWdodCA9XG4gICAgICAgICAgcGFyc2VJbnQodG1wQmVhbi5odG1sRWxlbWVudC5zdHlsZS5oZWlnaHQpICsgZGVsdGFIZWlnaHQgKyBcInB4XCI7XG4gICAgICB9XG4gICAgfVxuICB9XG59OyAvL3Jlc2l6ZVxuXG5DSWZGcmFtZS5wcm90b3R5cGUucmVzaXplRGlyZWN0ID0gZnVuY3Rpb24od2lkdGgsIGhlaWdodCwgYnlVc2VyKSB7XG4gIHZhciByZWZDSWZGcmFtZSA9IHRoaXM7XG5cbiAgaWYgKCFyZWZDSWZGcmFtZS5yZXNpemFibGUgJiYgYnlVc2VyKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICByZWZDSWZGcmFtZS5odG1sRWxlbWVudC5zdHlsZS53aWR0aCA9IHdpZHRoICsgXCJweFwiO1xuICByZWZDSWZGcmFtZS5odG1sRWxlbWVudC5zdHlsZS5oZWlnaHQgPSBoZWlnaHQgKyBcInB4XCI7XG5cbiAgdmFyIHRtcENhbnZhc1dpZHRoID0gcGFyc2VJbnQocmVmQ0lmRnJhbWUuY2FudmFzLmNhbnZhc0VsZW1lbnQuc3R5bGUud2lkdGgpO1xuICB2YXIgdG1wQ2FudmFzSGVpZ2h0ID0gcGFyc2VJbnQocmVmQ0lmRnJhbWUuY2FudmFzLmNhbnZhc0VsZW1lbnQuc3R5bGUuaGVpZ2h0KTtcblxuICAvL1NpbmNlIGNhbnZhc0VsZW1lbnQgaXMgYSAoMCwgMCkgcmVsYXRpdmUgY29vcmRpbmF0ZSB3aXRoIHJlc3BlY3RcbiAgLy8gdG8gdGhlIHBhcmVudCBlbGVtZW50LCBpdCBpcyBub3QgbmVjZXNzYXJ5IHRvIGNoYW5nZSBsZWZ0IGFuZCB0b3AuXG4gIHJlZkNJZkZyYW1lLmNhbnZhcy5jYW52YXNFbGVtZW50LnN0eWxlLndpZHRoID0gd2lkdGggKyBcInB4XCI7XG4gIHJlZkNJZkZyYW1lLmNhbnZhcy5jYW52YXNFbGVtZW50LnN0eWxlLmhlaWdodCA9XG4gICAgaGVpZ2h0IC0gcmVmQ0lmRnJhbWUudGl0bGVCYXIuc3R5bGUuaGVpZ2h0ICsgXCJweFwiO1xuXG4gIC8vQ2hhbmdlIHRoZSBzaXplIG9mIHRoZSB0aXRsZSBiYXIuIFRpdGxlQWRqdXN0V2lkdGggZXRjLlxuICAvLyBUaGUgcmVhc29uIHdoeSB5b3UgZG8gbm90IGhhdmUgdG8gdXNlIHRpdGxlQWRqdXN0V2lkdGggaXNcbiAgLy8gYmVjYXVzZSB0aGVzZSBzY2FsaW5nIGFyZSBkb25lIHdpdGggZGlmZmVyZW5jZXMgKGRlbHRhWCwgZGVsdGFZKS5cbiAgLy9UaGVyZWZvcmUsIGlmIHlvdSBhZGp1c3Qgd2l0aCB0aGUgdGl0bGVBZGp1c3RXaWR0aFxuICAvLyBhcyB0aGUgaW5pdGlhbCB2YWx1ZSwgdGhlIG90aGVyIHdpbGwgc3RyZXRjaCByZWxhdGl2ZS5cbiAgcmVmQ0lmRnJhbWUudGl0bGVCYXIuc3R5bGUud2lkdGggPSB3aWR0aCAtIHJlZkNJZkZyYW1lLmlmRGVsdGEgKyBcInB4XCI7XG5cbiAgLy9JbWFnZSByZXNpemluZyBmb3IgaWZyYW1lIHRoYXQgaXMgdGhlIGNoaWxkIGVsZW1lbnQgb2YgY2FudmFzXG4gIHJlZkNJZkZyYW1lLmlmcmFtZS53aWR0aCA9IHdpZHRoIC0gcmVmQ0lmRnJhbWUuaWZEZWx0YSArIFwicHhcIjtcbiAgcmVmQ0lmRnJhbWUuaWZyYW1lLmhlaWdodCA9XG4gICAgaGVpZ2h0IC0gcmVmQ0lmRnJhbWUuaWZEZWx0YSArIHJlZkNJZkZyYW1lLmZyYW1lSGVpZ2h0QWRqdXN0ICsgXCJweFwiO1xuXG4gIGlmIChcbiAgICByZWZDSWZGcmFtZS5vdmVycmF5VHJhbnNwYXJlbnRTY3JlZW5FbmFibGVkIHx8XG4gICAgcmVmQ0lmRnJhbWUub3ZlcnJheVRyYW5zcGFyZW50U2NyZWVuT25SZXNpemVcbiAgKSB7XG4gICAgLy9EZXBsb3kgYSB0cmFuc3BhcmVudCBzY3JlZW4uXG4gICAgcmVmQ0lmRnJhbWUudHJhbnNwYXJlbmNlLnN0eWxlLndpZHRoID1cbiAgICAgIHBhcnNlSW50KHJlZkNJZkZyYW1lLmlmcmFtZS53aWR0aCkgKyBcInB4XCI7XG4gICAgcmVmQ0lmRnJhbWUudHJhbnNwYXJlbmNlLnN0eWxlLmhlaWdodCA9XG4gICAgICBwYXJzZUludChyZWZDSWZGcmFtZS5pZnJhbWUuaGVpZ2h0KSArIFwicHhcIjtcbiAgfVxuXG4gIC8vbW92ZSBmcmFtZUNvbXBvbmVudChsaWtlIGNsb3NlQnV0dG9uKSBjb3JyZXNwb25kaW5nIHRvIG1vdmluZyB3aW5kb3cgZWRnZSBmb3IgcmVzaXplXG4gIGZvciAodmFyIGZyYW1lQ29tcG9uZW50SWQgaW4gcmVmQ0lmRnJhbWUuZnJhbWVDb21wb25lbnRNYXApIHtcbiAgICB2YXIgZnJhbWVDb21wb25lbnQgPSByZWZDSWZGcmFtZS5mcmFtZUNvbXBvbmVudE1hcFtmcmFtZUNvbXBvbmVudElkXTtcbiAgICAvL3VwZGF0ZSBhbGlnbm1lbnQgb2YgZnJhbWVDb21wb25lbnQgY29ycmVzcG9uZGluZyB0byBtb3Zpbmcgd2luZG93IGVkZ2UgZm9yIHJlc2l6ZVxuICAgIGZyYW1lQ29tcG9uZW50LnVwZGF0ZUFsaWduKCk7XG4gIH1cblxuICBmb3IgKHZhciBiZWFuTmFtZSBpbiByZWZDSWZGcmFtZS5jYW52YXMuYmVhbkxpc3QpIHtcbiAgICB2YXIgdG1wQmVhbiA9IHJlZkNJZkZyYW1lLmNhbnZhcy5iZWFuTGlzdFtiZWFuTmFtZV07XG5cbiAgICBpZiAodG1wQmVhbi5odG1sRWxlbWVudC50eXBlTmFtZSA9PSBcImNtYXJrZXJ3aW5kb3dcIikge1xuICAgICAgaWYgKHRtcEJlYW4uaHRtbEVsZW1lbnQudXNhZ2UgPT0gXCJSRFwiKSB7XG4gICAgICAgIHRtcEJlYW4uaHRtbEVsZW1lbnQuc3R5bGUubGVmdCA9IHdpZHRoICsgXCJweFwiOyAvLyBwYXJzZUludCh0bXBCZWFuLmh0bWxFbGVtZW50LnN0eWxlLmxlZnQpICsgZGVsdGFXaWR0aCArICdweCc7XG4gICAgICAgIHRtcEJlYW4uaHRtbEVsZW1lbnQuc3R5bGUudG9wID0gaGVpZ2h0ICsgXCJweFwiOyAvL3BhcnNlSW50KHRtcEJlYW4uaHRtbEVsZW1lbnQuc3R5bGUudG9wKSArIGRlbHRhSGVpZ2h0ICsgJ3B4JztcbiAgICAgIH0gZWxzZSBpZiAodG1wQmVhbi5odG1sRWxlbWVudC51c2FnZSA9PSBcIkREXCIpIHtcbiAgICAgICAgdG1wQmVhbi5odG1sRWxlbWVudC5zdHlsZS53aWR0aCA9IHdpZHRoICsgXCJweFwiO1xuICAgICAgICB0bXBCZWFuLmh0bWxFbGVtZW50LnN0eWxlLnRvcCA9IGhlaWdodCArIFwicHhcIjsgLy9oZWlnaHRwYXJzZUludCh0bXBCZWFuLmh0bWxFbGVtZW50LnN0eWxlLnRvcCkgKyBkZWx0YUhlaWdodCArICdweCc7XG4gICAgICB9IGVsc2UgaWYgKHRtcEJlYW4uaHRtbEVsZW1lbnQudXNhZ2UgPT0gXCJSUlwiKSB7XG4gICAgICAgIHRtcEJlYW4uaHRtbEVsZW1lbnQuc3R5bGUubGVmdCA9IHdpZHRoICsgXCJweFwiOyAvLytwYXJzZUludCh0bXBCZWFuLmh0bWxFbGVtZW50LnN0eWxlLmxlZnQpICsgZGVsdGFXaWR0aCArICdweCc7XG4gICAgICAgIHRtcEJlYW4uaHRtbEVsZW1lbnQuc3R5bGUuaGVpZ2h0ID0gaGVpZ2h0ICsgXCJweFwiO1xuICAgICAgfVxuICAgIH1cbiAgfVxufTsgLy9yZXNpemVcblxuLyoqXG4gKiBGb2N1cyBvbiB0aGlzIGZyYW1lXG4gKi9cbkNJZkZyYW1lLnByb3RvdHlwZS5yZXF1ZXN0Rm9jdXMgPSBmdW5jdGlvbigpIHtcbiAgdmFyIG1lID0gdGhpcztcblxuICB2YXIgYmVhbkxpc3QgPSBtZS5wYXJlbnRDYW52YXMuYmVhbkxpc3Q7XG5cbiAgZm9yICh2YXIgd2luZG93SWQgaW4gYmVhbkxpc3QpIHtcbiAgICB2YXIgdG1wSWZXaW5kb3cgPSBiZWFuTGlzdFt3aW5kb3dJZF07XG5cbiAgICAvL0lmIGl0J3MgbXkgb3duIHdpbmRvdywgbWluaW1pemUgdGhlIHRyYW5zcGFyZW50IHNjcmVlbiBhbmQgY2hhbmdlIHRoZSBjb2xvciBvZiB0aGUgdGl0bGUgYmFyLlxuICAgIGlmICh3aW5kb3dJZCA9PSBtZS5nZXRXaW5kb3dJZCgpKSB7XG4gICAgICAvL2lmIHRoaXMgZnJhbWUgaXMgYSB0YXJnZXQgZnJhbWVcbiAgICAgIHRtcElmV2luZG93LmhhbmRsZVRha2luZ0ZvY3VzKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vaWYgdGhpcyBmcmFtZSBpcyBOT1QgYSB0YXJnZXQgZnJhbWVcbiAgICAgIHRtcElmV2luZG93LmhhbmRsZVJlbGVhc2luZ0ZvY3VzKCk7XG4gICAgfVxuICB9XG5cbiAgbWUucGFyZW50Q2FudmFzLnB1bGxVcChtZS5pZCk7XG59O1xuXG4vKipcbiAqIFVSTCBmb3IgaWZyYW1lXG4gKiBAcGFyYW0gdXJsXG4gKi9cbkNJZkZyYW1lLnByb3RvdHlwZS5zZXRVcmwgPSBmdW5jdGlvbih1cmwpIHtcbiAgdmFyIG1lID0gdGhpcztcblxuICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgaWYgKHVybCkge1xuICAgICAgbWUuc2V0VXNlSWZyYW1lKHRydWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBtZS5zZXRVc2VJZnJhbWUoZmFsc2UpO1xuICAgICAgcmVzb2x2ZSgpO1xuICAgIH1cblxuICAgIG1lLmlmcmFtZS5zcmMgPSB1cmw7XG5cbiAgICBtZS5pZnJhbWUub25sb2FkID0gZnVuY3Rpb24oKSB7XG4gICAgICAvL21vdXNlIG1vdmVcbiAgICAgIG1lLmlmcmFtZS5jb250ZW50V2luZG93LmRvY3VtZW50Lm9ubW91c2Vtb3ZlID0gZnVuY3Rpb24oZSkge1xuICAgICAgICB2YXIgZnJhbWVMZWZ0ID0gbWUuZ2V0TGVmdCgpO1xuICAgICAgICB2YXIgZnJhbWVUb3AgPSBtZS5nZXRUb3AoKTtcblxuICAgICAgICB2YXIgZXZlbnRGcm9tSWZyYW1lID0gZG9jdW1lbnQuY3JlYXRlRXZlbnQoXCJNb3VzZUV2ZW50c1wiKTtcbiAgICAgICAgZXZlbnRGcm9tSWZyYW1lLmluaXRNb3VzZUV2ZW50KFxuICAgICAgICAgIFwibW91c2Vtb3ZlXCIsXG4gICAgICAgICAgdHJ1ZSxcbiAgICAgICAgICBmYWxzZSxcbiAgICAgICAgICB3aW5kb3csXG4gICAgICAgICAgZS5kZXRhaWwsXG4gICAgICAgICAgZS5zY3JlZW5YLFxuICAgICAgICAgIGUuc2NyZWVuWSxcbiAgICAgICAgICBlLnBhZ2VYICsgZnJhbWVMZWZ0LFxuICAgICAgICAgIGUucGFnZVkgKyBmcmFtZVRvcCxcbiAgICAgICAgICBlLmN0cmxLZXksXG4gICAgICAgICAgZS5hbHRLZXksXG4gICAgICAgICAgZS5zaGlmdEtleSxcbiAgICAgICAgICBlLm1ldGFLZXksXG4gICAgICAgICAgZS5idXR0b24sXG4gICAgICAgICAgbnVsbFxuICAgICAgICApO1xuXG4gICAgICAgIC8vc21vb3RoIGRyYWdnaW5nIGR1cmluZyBpZnJhbWUgbW9kZVxuICAgICAgICBtZS5wYXJlbnRDYW52YXMud2luZG93TW91c2VNb3ZlKGV2ZW50RnJvbUlmcmFtZSk7XG5cbiAgICAgICAgaWYgKG1lLm9uTW91c2VNb3ZlT25JZnJhbWUpIHtcbiAgICAgICAgICBtZS5vbk1vdXNlTW92ZU9uSWZyYW1lKGV2ZW50RnJvbUlmcmFtZSk7XG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgIC8vbW91c2UgdXBcbiAgICAgIG1lLmlmcmFtZS5jb250ZW50V2luZG93LmRvY3VtZW50Lm9ubW91c2V1cCA9IGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgdmFyIGZyYW1lTGVmdCA9IG1lLmdldExlZnQoKTtcbiAgICAgICAgdmFyIGZyYW1lVG9wID0gbWUuZ2V0VG9wKCk7XG5cbiAgICAgICAgdmFyIGV2ZW50RnJvbUlmcmFtZSA9IGRvY3VtZW50LmNyZWF0ZUV2ZW50KFwiTW91c2VFdmVudHNcIik7XG4gICAgICAgIGV2ZW50RnJvbUlmcmFtZS5pbml0TW91c2VFdmVudChcbiAgICAgICAgICBcIm1vdXNldXBcIixcbiAgICAgICAgICB0cnVlLFxuICAgICAgICAgIGZhbHNlLFxuICAgICAgICAgIHdpbmRvdyxcbiAgICAgICAgICBlLmRldGFpbCxcbiAgICAgICAgICBlLnNjcmVlblgsXG4gICAgICAgICAgZS5zY3JlZW5ZLFxuICAgICAgICAgIGUucGFnZVggKyBmcmFtZUxlZnQsXG4gICAgICAgICAgZS5wYWdlWSArIGZyYW1lVG9wLFxuICAgICAgICAgIGUuY3RybEtleSxcbiAgICAgICAgICBlLmFsdEtleSxcbiAgICAgICAgICBlLnNoaWZ0S2V5LFxuICAgICAgICAgIGUubWV0YUtleSxcbiAgICAgICAgICBlLmJ1dHRvbixcbiAgICAgICAgICBudWxsXG4gICAgICAgICk7XG5cbiAgICAgICAgLy9zbW9vdGggZHJhZ2dpbmcgZHVyaW5nIGlmcmFtZSBtb2RlXG4gICAgICAgIG1lLnBhcmVudENhbnZhcy53aW5kb3dNb3VzZVVwKGV2ZW50RnJvbUlmcmFtZSk7XG5cbiAgICAgICAgaWYgKG1lLm9uTW91c2VVcE9uSWZyYW1lKSB7XG4gICAgICAgICAgbWUub25Nb3VzZVVwT25JZnJhbWUoZXZlbnRGcm9tSWZyYW1lKTtcbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgcmVzb2x2ZShtZSwgbWUuaWZyYW1lLmNvbnRlbnRXaW5kb3cuZG9jdW1lbnQpO1xuICAgIH07XG4gIH0pO1xufTtcblxuLyoqXG4gKiBSZXR1cm5zIERPTS1kb2N1bWVudCBvZiBpZnJhbWVcbiAqIEByZXR1cm5zIHsqfEhUTUxEb2N1bWVudH1cbiAqL1xuQ0lmRnJhbWUucHJvdG90eXBlLmdldElmRG9jdW1lbnQgPSBmdW5jdGlvbigpIHtcbiAgdmFyIG1lID0gdGhpcztcbiAgcmV0dXJuIG1lLmlmcmFtZS5jb250ZW50V2luZG93LmRvY3VtZW50O1xufTtcblxuQ0lmRnJhbWUucHJvdG90eXBlLnNldFNjcm9sbGluZyA9IGZ1bmN0aW9uKHN0cikge1xuICB2YXIgbWUgPSB0aGlzO1xuICBtZS5pZnJhbWUuc2Nyb2xsaW5nID0gc3RyO1xufTtcblxuQ0lmRnJhbWUucHJvdG90eXBlLmdldFNjcm9sbGluZyA9IGZ1bmN0aW9uKHN0cikge1xuICB2YXIgbWUgPSB0aGlzO1xuICByZXR1cm4gbWUuaWZyYW1lLnNjcm9sbGluZztcbn07XG5cbkNJZkZyYW1lLnByb3RvdHlwZS5zZXRSZXNpemFibGUgPSBmdW5jdGlvbihlbmFibGVkKSB7XG4gIHZhciBtZSA9IHRoaXM7XG4gIG1lLnJlc2l6YWJsZSA9IGVuYWJsZWQ7XG4gIG1lLmVuYWJsZU1hcmtlcnMoZW5hYmxlZCk7XG4gIHJldHVybiBtZTtcbn07XG5cbkNJZkZyYW1lLnByb3RvdHlwZS5zZXRDb250cm9sID0gZnVuY3Rpb24obW9kZWwpIHtcbiAgdmFyIG1lID0gdGhpcztcblxuICBpZiAobW9kZWwpIHtcbiAgICBtb2RlbC5mcmFtZSA9IG1lO1xuICAgIG1lLmNvbnRyb2wgPSBtZS5qc0ZyYW1lLmNyZWF0ZVdpbmRvd0V2ZW50SGVscGVyKG1vZGVsKTtcbiAgICBtZS5jb250cm9sLnNldHVwRGVmYXVsdEV2ZW50cyhtb2RlbCk7XG4gIH1cbn07XG5cbi8qKlxuICogZW5kIG9mIENJRnJhbWUgY2xhc3NcbiAqL1xuXG4vLystKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy1cblxuaW5oZXJpdChDV2luZG93TWFuYWdlciwgQ0NhbnZhcyk7XG5cbi8qKlxuICogQ1dpbmRvd01hbmFnZXIgY2xhc3NcbiAqIDxwPlxuICogQSBjYW52YXMgY2xhc3MgdGhhdCBkaXNwbGF5cyBtdWx0aXBsZSBmcmFtZXMuIEhhbmRsZSBldmVudHMgb24gdGhlIHdpbmRvdyB0byBjb29yZGluYXRlIG11bHRpcGxlIHdpbmRvd3M8YnI+XG4gKlxuICogQHBhcmFtIHBhcmVudEVsZW1lbnRcbiAqIEBwYXJhbSBjYW52YXNJZFxuICogQHBhcmFtIGxlZnRcbiAqIEBwYXJhbSB0b3BcbiAqIEBwYXJhbSB3aWR0aFxuICogQHBhcmFtIGhlaWdodFxuICogQGNvbnN0cnVjdG9yXG4gKi9cbmZ1bmN0aW9uIENXaW5kb3dNYW5hZ2VyKHBhcmVudEVsZW1lbnQsIGNhbnZhc0lkLCBsZWZ0LCB0b3AsIHdpZHRoLCBoZWlnaHQpIHtcbiAgQ1dpbmRvd01hbmFnZXIuc3VwZXJDb25zdHJ1Y3Rvci5jYWxsKFxuICAgIHRoaXMsXG4gICAgcGFyZW50RWxlbWVudCxcbiAgICBjYW52YXNJZCxcbiAgICBsZWZ0LFxuICAgIHRvcCxcbiAgICB3aWR0aCxcbiAgICBoZWlnaHRcbiAgKTtcbiAgdmFyIG1lID0gdGhpcztcblxuICBkb2N1bWVudC5ib2R5LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbihldnQpIHtcbiAgICBmb3IgKHZhciB3aW5kb3dJZCBpbiBtZS5iZWFuTGlzdCkge1xuICAgICAgdmFyIGJlYW5GcmFtZSA9IG1lLmJlYW5MaXN0W3dpbmRvd0lkXTtcbiAgICAgIGJlYW5GcmFtZS5vbkJvZHlDbGlja2VkKGV2dCk7XG4gICAgfVxuICB9KTtcbn1cblxuQ1dpbmRvd01hbmFnZXIucHJvdG90eXBlLmdldFdpbmRvdyA9IGZ1bmN0aW9uKHdpbmRvd0lkKSB7XG4gIHZhciBtZSA9IHRoaXM7XG4gIHJldHVybiBtZS5iZWFuTGlzdFt3aW5kb3dJZF07XG59O1xuXG4vL1dyYXBwaW5nIHRoZSAnYWRkQmVhbicgb2YgdGhlIHBhcmVudCBjbGFzc1xuQ1dpbmRvd01hbmFnZXIucHJvdG90eXBlLmFkZFdpbmRvdyA9IGZ1bmN0aW9uKHdpbmRvdykge1xuICB2YXIgbWUgPSB0aGlzO1xuXG4gIHZhciB3aW5kb3dJZCA9IHdpbmRvdy5nZXRXaW5kb3dJZCgpO1xuICB2YXIgbmFtZSA9IHdpbmRvdy5nZXROYW1lKCk7XG4gIG1lLmJlYW5JZE5hbWVbd2luZG93SWRdID0gbmFtZTtcbiAgbWUuYmVhbk5hbWVJZFtuYW1lXSA9IHdpbmRvd0lkO1xuXG4gIG1lLmFkZEJlYW4od2luZG93KTtcbn07XG5cbi8vaWYgY29udGFpbnMgd2luZG93IG5hbWVkIHNwZWNpZmllZCBuYW1lXG5DV2luZG93TWFuYWdlci5wcm90b3R5cGUuY29udGFpbnNXaW5kb3dOYW1lID0gZnVuY3Rpb24obmFtZSkge1xuICB2YXIgbWUgPSB0aGlzO1xuXG4gIHZhciB3aW5kb3dJZCA9IG1lLmJlYW5OYW1lSWRbbmFtZV07XG5cbiAgaWYgKHdpbmRvd0lkKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn07XG5cbkNXaW5kb3dNYW5hZ2VyLnByb3RvdHlwZS5nZXRXaW5kb3dCeU5hbWUgPSBmdW5jdGlvbihuYW1lKSB7XG4gIHZhciBtZSA9IHRoaXM7XG4gIHZhciB3aW5kb3dJZCA9IG1lLmJlYW5OYW1lSWRbbmFtZV07XG5cbiAgaWYgKHdpbmRvd0lkKSB7XG4gICAgcmV0dXJuIG1lLmdldFdpbmRvdyh3aW5kb3dJZCk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbn07XG5cbi8vV3JhcHBpbmcgdGhlICdtb3VzZU1vdmUnIG1ldGhvZCBvZiB0aGUgcGFyZW50IGNsYXNzXG5DV2luZG93TWFuYWdlci5wcm90b3R5cGUud2luZG93TW91c2VNb3ZlID0gZnVuY3Rpb24oZSkge1xuICB2YXIgbWUgPSB0aGlzO1xuICBpZiAobWUuY3VycmVudE9iamVjdCA9PSBudWxsKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICB2YXIgY2hpbGRXaW5kb3dNb3ZlZCA9IGZhbHNlO1xuXG4gIC8vTG9vcCBwcm9jZXNzaW5nIG9mIGVhY2ggQ1dpbmRvdyBoZWxkIGJ5IENXaW5kb3dNYW5hZ2VyXG4gIHZhciBiZWFuTGlzdCA9IG1lLmJlYW5MaXN0O1xuXG4gIGZvciAodmFyIHdpbmRvd0lkIGluIGJlYW5MaXN0KSB7XG4gICAgdmFyIHRhcmdldFdpbmRvdyA9IGJlYW5MaXN0W3dpbmRvd0lkXTtcblxuICAgIC8vU2luY2UgdGhpcyAnbW91c2VNb3ZlJyBpcyBjYW52YXMgb2YgQ1dpbmRvdydzICdtb3VzZU1vdmUnLHNvIGRvIG1vdmUgQ0JlYW5GcmFtZXMgaW4gdGhlIGNhbnZhcy5cbiAgICB2YXIgZXZlbnREYXRhID0gdGFyZ2V0V2luZG93LmNhbnZhcy5tb3VzZU1vdmUoZSk7XG5cbiAgICAvL1doZXRoZXIgYW55IG9uZSBvZiB0aGUgYmVhbnMgaW4gdGhlIENhbnZhcyBoYXMgbW92ZWQgb3Igbm90LlxuICAgIC8vWWVzLihXaGVuIGl0IG1vdmVzKSwgZXZlbnREYXRhIGlzIHNldC5cbiAgICAvL05PLiBJZiBpdCBkb2VzIG5vdCBtb3ZlIGl0IGlzIHNldCB0byBudWxsLlxuICAgIGNoaWxkV2luZG93TW92ZWQgPSBjaGlsZFdpbmRvd01vdmVkIHwgKGV2ZW50RGF0YSAhPSBudWxsKTtcbiAgICBpZiAoZXZlbnREYXRhICE9IG51bGwpIHtcbiAgICAgIC8vSWYgaXQgaXMgdGhlIG1hcmtlciBmb3IgcmVzaXppbmdcbiAgICAgIGlmIChldmVudERhdGEudGFyZ2V0VHlwZU5hbWUgPT0gXCJjbWFya2Vyd2luZG93XCIpIHtcbiAgICAgICAgdmFyIHRhcmdldE9iamVjdCA9IGV2ZW50RGF0YS50YXJnZXRPYmplY3Q7XG5cbiAgICAgICAgLy9FbmFibGUgdHJhbnNwYXJlbnQgd2luZG93IG9ubHkgd2hlbiBtb3ZpbmcuXG4gICAgICAgIC8vVGhpcyB3aWxsIHdvcmsgc21vb3RobHkgZXZlbiB3aXRoIGlmcmFtZSBjb250ZW50XG4gICAgICAgIHRhcmdldFdpbmRvdy50cmFuc3BhcmVuY2Uuc3R5bGUucG9pbnRlckV2ZW50cyA9IFwiYXV0b1wiO1xuXG4gICAgICAgIGlmICh0YXJnZXRPYmplY3QudXNhZ2UgPT0gXCJSRFwiKSB7XG4gICAgICAgICAgdGFyZ2V0V2luZG93LnJlc2l6ZSgwLCAwLCBldmVudERhdGEuZGVsdGFYLCBldmVudERhdGEuZGVsdGFZLCB0cnVlKTtcbiAgICAgICAgfSBlbHNlIGlmICh0YXJnZXRPYmplY3QudXNhZ2UgPT0gXCJERFwiKSB7XG4gICAgICAgICAgdGFyZ2V0V2luZG93LnJlc2l6ZSgwLCAwLCAwLCBldmVudERhdGEuZGVsdGFZLCB0cnVlKTtcbiAgICAgICAgfSBlbHNlIGlmICh0YXJnZXRPYmplY3QudXNhZ2UgPT0gXCJSUlwiKSB7XG4gICAgICAgICAgdGFyZ2V0V2luZG93LnJlc2l6ZSgwLCAwLCBldmVudERhdGEuZGVsdGFYLCAwLCB0cnVlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vSWYgYW55IG9uZSBvZiB0aGUgYmVhbnMgaW4gdGhlIENhbnZhcyBoYXMgbW92ZWQuRG8gbm90IGRvICdDd2luZG93J3MgbW91c2VNb3ZlJ1xuICBpZiAoIWNoaWxkV2luZG93TW92ZWQgJiYgdGhpcy5tb3VzZURvd25Tb3VyY2UgIT0gXCJjaGlsZGNhbnZhc1wiKSB7XG4gICAgLy9Nb3ZpbmcgbG9naWMgZm9yIENXaW5kb3cgd2hpY2ggaXMgaG9sZGVkIGJ5IENXaW5kb3dNYW5hZ2VyIGFzIGEgY2hpbGQgd2luZG93LlxuICAgIG1lLm1vdXNlTW92ZShlKTtcbiAgfVxufTtcblxuLy9XcmFwcGluZyB0aGUgbWV0aG9kICdtb3VzZVVwJyBvZiB0aGUgcGFyZW50IGNsYXNzXG5DV2luZG93TWFuYWdlci5wcm90b3R5cGUud2luZG93TW91c2VVcCA9IGZ1bmN0aW9uKGUpIHtcbiAgdmFyIG1lID0gdGhpcztcblxuICAvL3J1biAnbW91c2VVcCcgb2YgcGFyZW50IGNsYXNzXG4gIG1lLm1vdXNlVXAoZSk7XG5cbiAgdmFyIGJlYW5MaXN0ID0gbWUuYmVhbkxpc3Q7XG5cbiAgZm9yICh2YXIgd2luZG93SWQgaW4gYmVhbkxpc3QpIHtcbiAgICB2YXIgb2JqV2luZG93ID0gYmVhbkxpc3Rbd2luZG93SWRdO1xuXG4gICAgLy9ydW4gQ1dpbmRvdydzICdtb3VzZVVwJyhpdCdzIGNoaWxkIHdpbmRvdykuXG4gICAgb2JqV2luZG93Lm1vdXNlVXAoZSk7XG4gIH1cbn07XG5cbi8qKlxuICogKG92ZXJyaWRlIENDYW52YXMucmVtb3ZlQmVhbilcbiAqIEBwYXJhbSB3aW5kb3dJZFxuICovXG5DV2luZG93TWFuYWdlci5wcm90b3R5cGUucmVtb3ZlQmVhbiA9IGZ1bmN0aW9uKHdpbmRvd0lkKSB7XG4gIHZhciBtZSA9IHRoaXM7XG5cbiAgLy9SZXRyaWV2ZSB0aGUgdGFyZ2V0IGJlYW5GcmFtZVxuICB2YXIgYmVhbkxpc3QgPSBtZS5iZWFuTGlzdDtcbiAgdmFyIHRhcmdldEJlYW4gPSBiZWFuTGlzdFt3aW5kb3dJZF07XG5cbiAgaWYgKHRhcmdldEJlYW4gPT0gbnVsbCkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHZhciByZW1vdmVUYXJnZXRCZWFuSGFzRm9jdXMgPSB0YXJnZXRCZWFuLl9oYXNGb2N1cztcblxuICAvL1JlbW92ZSBiZWFuJ3MgaHRtbEVsZW1lbnQgZnJvbSBjYW52YXNFbGVtZW50XG4gIG1lLmNhbnZhc0VsZW1lbnQucmVtb3ZlQ2hpbGQodGFyZ2V0QmVhbi5odG1sRWxlbWVudCk7XG5cbiAgLy9EZWxldGUgdGhlIGJlYW4gb2JqZWN0IGluIHRoZSBhc3NvY2lhdGl2ZSBhcnJheS5cbiAgZGVsZXRlIGJlYW5MaXN0W3dpbmRvd0lkXTtcblxuICB2YXIgYmVhbk5hbWUgPSBtZS5iZWFuSWROYW1lW3dpbmRvd0lkXTtcbiAgaWYgKGJlYW5OYW1lKSB7XG4gICAgLy8taWYgYmVhbiBuYW1lIGV4aXN0XG4gICAgZGVsZXRlIG1lLmJlYW5JZE5hbWVbd2luZG93SWRdO1xuICAgIGRlbGV0ZSBtZS5iZWFuTmFtZUlkW2JlYW5OYW1lXTtcbiAgfVxuXG4gIC8vZm9jdXMgb24gbGFzdCBmb2N1c2VkIHdpbmRvdyBhZnRlciByZW1vdmluZ1xuICB2YXIgbWF4Rm9jdXNUaW1lID0gMDtcbiAgdmFyIGxhc3RGb2N1c2VkRnJhbWUgPSBudWxsO1xuXG4gIGlmIChyZW1vdmVUYXJnZXRCZWFuSGFzRm9jdXMpIHtcbiAgICBmb3IgKHZhciB3aW5kb3dJZCBpbiBiZWFuTGlzdCkge1xuICAgICAgdmFyIGZyYW1lID0gYmVhbkxpc3Rbd2luZG93SWRdO1xuXG4gICAgICAvL3B1bGxVcERpc2FibGVkPXRydWUgbWVhbnMgdGhhdCB0aGUgZnJhbWUgaXMgbW9kYWwgYmFja2dyb3VuZCB3aW5kb3dcbiAgICAgIGlmIChtYXhGb2N1c1RpbWUgPD0gZnJhbWUuX2hhc0ZvY3VzVGltZSAmJiAhZnJhbWUucHVsbFVwRGlzYWJsZWQpIHtcbiAgICAgICAgbWF4Rm9jdXNUaW1lID0gZnJhbWUuX2hhc0ZvY3VzVGltZTtcblxuICAgICAgICBsYXN0Rm9jdXNlZEZyYW1lID0gZnJhbWU7XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChsYXN0Rm9jdXNlZEZyYW1lKSB7XG4gICAgICBsYXN0Rm9jdXNlZEZyYW1lLnJlcXVlc3RGb2N1cygpO1xuICAgIH1cbiAgfVxuXG4gIHRhcmdldEJlYW4ucGFyZW50Q2FudmFzID0gbnVsbDtcbn07XG4vKipcbiAqIGVuZCBvZiBDV2luZG93TWFuYWdlciBjbGFzc1xuICovXG5cbi8vKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLVxuXG5pbmhlcml0KENNYXJrZXJXaW5kb3csIENCZWFuRnJhbWUpO1xuXG4vKipcbiAqIENNYXJrZXJXaW5kb3cgY2xhc3NcbiAqIEBwYXJhbSB3aW5kb3dJZFxuICogQHBhcmFtIGxlZnRcbiAqIEBwYXJhbSB0b3BcbiAqIEBwYXJhbSB3aWR0aFxuICogQHBhcmFtIGhlaWdodFxuICogQHBhcmFtIHppbmRleFxuICogQHBhcmFtIHVzYWdlXG4gKiBAY29uc3RydWN0b3JcbiAqL1xuZnVuY3Rpb24gQ01hcmtlcldpbmRvdyh3aW5kb3dJZCwgbGVmdCwgdG9wLCB3aWR0aCwgaGVpZ2h0LCB6aW5kZXgsIHVzYWdlKSB7XG4gIHZhciBtZSA9IHRoaXM7XG5cbiAgQ01hcmtlcldpbmRvdy5zdXBlckNvbnN0cnVjdG9yLmNhbGwoXG4gICAgdGhpcyxcbiAgICB3aW5kb3dJZCxcbiAgICBsZWZ0LFxuICAgIHRvcCxcbiAgICB3aWR0aCxcbiAgICBoZWlnaHQsXG4gICAgemluZGV4LFxuICAgIHVzYWdlXG4gICk7XG5cbiAgbWUuaHRtbEVsZW1lbnQudHlwZU5hbWUgPSBcImNtYXJrZXJ3aW5kb3dcIjtcbiAgbWUuaHRtbEVsZW1lbnQudXNhZ2UgPSB1c2FnZTtcbiAgbWUuaHRtbEVsZW1lbnQuaXNSYW5nZUxpbWl0ZWQgPSBmYWxzZTtcbiAgbWUuaHRtbEVsZW1lbnQuc3R5bGUuYm9yZGVyU3R5bGUgPSBcIm5vbmVcIjtcbiAgbWUuaHRtbEVsZW1lbnQuc3R5bGUuekluZGV4ID0gMTtcbn1cblxuLyoqXG4gKiBFbmQgb2YgQ01hcmtlcldpbmRvdyBjbGFzc1xuICogQGNvbnN0cnVjdG9yXG4gKi9cblxuLy8rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstXG5cbi8qKlxuICogRnJhbWVNYW5hZ2VyIGNsYXNzXG4gKiBAY29uc3RydWN0b3JcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSlNGcmFtZShtb2RlbCkge1xuICB2YXIgbWUgPSB0aGlzO1xuXG4gIHZhciBwYXJlbnRFbGVtZW50ID0gbnVsbDtcblxuICAvLyBGcmFtZXMgd2lsbCBiZSBmaXhlZChGcmFtZXMga2VlcCBzdGF5aW5nIGluIHRoZSBzYW1lIHBsYWNlKSBldmVuIGlmIHRoZSB1c2VyIHNjcm9sbHMgdGhlIGJyb3dzZXIuXG4gIHZhciBpc1dpbmRvd01hbmFnZXJGaXhlZCA9IHRydWU7IC8vZGVmYXVsdCBpcyB0cnVlLlxuXG4gIC8vSW5pdGlhbGl6YXRpb24gcGFyYW1ldGVyIGNoZWNrXG5cbiAgaWYgKG1vZGVsICYmIG1vZGVsLmZpeGVkID09IGZhbHNlKSB7XG4gICAgaXNXaW5kb3dNYW5hZ2VyRml4ZWQgPSBmYWxzZTtcbiAgfVxuXG4gIGlmIChtb2RlbCAmJiBtb2RlbC5wYXJlbnRFbGVtZW50KSB7XG4gICAgcGFyZW50RWxlbWVudCA9IG1vZGVsLnBhcmVudEVsZW1lbnQ7XG4gIH1cblxuICBtZS5oQWxpZ24gPSBcImxlZnRcIjtcbiAgbWUudkFsaWduID0gXCJ0b3BcIjtcblxuICBpZiAobW9kZWwgJiYgbW9kZWwuaG9yaXpvbnRhbEFsaWduKSB7XG4gICAgbWUuaEFsaWduID0gbW9kZWwuaG9yaXpvbnRhbEFsaWduO1xuICB9XG5cbiAgaWYgKG1vZGVsICYmIG1vZGVsLnZlcnRpY2FsQWxpZ24pIHtcbiAgICBtZS52QWxpZ24gPSBtb2RlbC52ZXJ0aWNhbEFsaWduO1xuICB9XG5cbiAgaWYgKCFwYXJlbnRFbGVtZW50ICYmIGlzV2luZG93TWFuYWdlckZpeGVkKSB7XG4gICAgdmFyIHRvcFBhcmVudERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdG9wUGFyZW50RGl2LmlkID0gXCJqc0ZyYW1lX2ZpeGVkX1wiICsgbWUuZ2VuZXJhdGVVVUlEKCk7XG4gICAgdG9wUGFyZW50RGl2LnNldEF0dHJpYnV0ZShcbiAgICAgIFwic3R5bGVcIixcbiAgICAgIFwicG9zaXRpb246Zml4ZWQ7XCIgK1xuICAgICAgICBtZS5oQWxpZ24gK1xuICAgICAgICBcIjowcHg7XCIgK1xuICAgICAgICBtZS52QWxpZ24gK1xuICAgICAgICBcIjowcHg7bWFyZ2luOjBweDtwYWRkaW5nOjBweDtcIlxuICAgICk7XG5cbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRvcFBhcmVudERpdik7XG4gICAgcGFyZW50RWxlbWVudCA9IHRvcFBhcmVudERpdjtcbiAgfSBlbHNlIHtcbiAgICBwYXJlbnRFbGVtZW50ID0gZG9jdW1lbnQuYm9keTtcbiAgfVxuXG4gIGRvY3VtZW50Lm9ubW91c2V1cCA9IG1vdXNlVXA7XG4gIGRvY3VtZW50Lm9ubW91c2Vtb3ZlID0gbW91c2VNb3ZlO1xuXG4gIG1lLndpbmRvd01hbmFnZXIgPSBuZXcgQ1dpbmRvd01hbmFnZXIoXG4gICAgcGFyZW50RWxlbWVudCxcbiAgICBcIndpbmRvd01hbmFnZXJfXCIgKyBtZS5nZW5lcmF0ZVVVSUQoKSxcbiAgICAwLFxuICAgIDAsXG4gICAgMCxcbiAgICAwXG4gICk7XG4gIC8vbWUud2luZG93TWFuYWdlciA9IG5ldyBDV2luZG93TWFuYWdlcihkb2N1bWVudC5ib2R5LCAnd2luZG93TWFuYWdlcl8nICsgbWUuZ2VuZXJhdGVVVUlEKCksIDAsIDAsIDAsIDApO1xuICBtZS5kb21QYXJ0c0J1aWxkZXIgPSBudWxsO1xuXG4gIGZ1bmN0aW9uIG1vdXNlVXAoZSkge1xuICAgIG1lLndpbmRvd01hbmFnZXIud2luZG93TW91c2VVcChlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIG1vdXNlTW92ZShlKSB7XG4gICAgbWUud2luZG93TWFuYWdlci53aW5kb3dNb3VzZU1vdmUoZSk7XG4gICAgdmFyIGdsb2JhbE1vdXNlWCA9IGUucGFnZVg7XG4gICAgdmFyIGdsb2JhbE1vdXNlWSA9IGUucGFnZVk7XG4gIH1cbn1cblxuSlNGcmFtZS5wcm90b3R5cGUuZ2V0RG9tUGFydHNCdWlsZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBtZSA9IHRoaXM7XG5cbiAgaWYgKCFtZS5kb21QYXJ0c0J1aWxkZXIpIHtcbiAgICBtZS5kb21QYXJ0c0J1aWxkZXIgPSBuZXcgQ0RvbVBhcnRzQnVpbGRlcigpO1xuICB9XG4gIHJldHVybiBtZS5kb21QYXJ0c0J1aWxkZXI7XG59O1xuXG5KU0ZyYW1lLnByb3RvdHlwZS5jcmVhdGUgPSBmdW5jdGlvbihtb2RlbCkge1xuICB2YXIgbWUgPSB0aGlzO1xuXG4gIHZhciBwcm9wZXJ0aWVzID0ge307XG4gIHByb3BlcnRpZXMubmFtZSA9IG1vZGVsLm5hbWU7XG4gIHZhciB0aXRsZSA9IG1vZGVsLnRpdGxlO1xuICB2YXIgbGVmdCA9IG1vZGVsLmxlZnQ7XG4gIHZhciB0b3AgPSBtb2RlbC50b3A7XG4gIHZhciB3aWR0aCA9IG1vZGVsLndpZHRoO1xuICB2YXIgaGVpZ2h0ID0gbW9kZWwuaGVpZ2h0O1xuICB2YXIgYXBwZWFyYW5jZSA9IG1vZGVsLmFwcGVhcmFuY2U7XG4gIHZhciBhcHBlYXJhbmNlTmFtZSA9IG1vZGVsLmFwcGVhcmFuY2VOYW1lO1xuICB2YXIgYXBwZWFyYW5jZVBhcmFtID0gbW9kZWwuYXBwZWFyYW5jZVBhcmFtO1xuICB2YXIgc3R5bGUgPSBtb2RlbC5zdHlsZTtcblxuICB2YXIgbWluV2lkdGggPSBtb2RlbC5taW5XaWR0aDtcbiAgdmFyIG1pbkhlaWdodCA9IG1vZGVsLm1pbkhlaWdodDtcblxuICB2YXIgaHRtbCA9IG1vZGVsLmh0bWw7XG4gIHZhciByZXNpemFibGUgPSBtb2RlbC5yZXNpemFibGU7XG4gIHZhciBtb3ZhYmxlID0gbW9kZWwubW92YWJsZTtcbiAgdmFyIHVybCA9IG1vZGVsLnVybDtcbiAgdmFyIHVybExvYWRlZCA9IG1vZGVsLnVybExvYWRlZDtcblxuICBpZiAoYXBwZWFyYW5jZU5hbWUpIHtcbiAgICBhcHBlYXJhbmNlID0gdGhpcy5jcmVhdGVQcmVzZXRTdHlsZShhcHBlYXJhbmNlTmFtZSwge1xuICAgICAgYXBwZWFyYW5jZVBhcmFtOiBhcHBlYXJhbmNlUGFyYW1cbiAgICB9KTtcbiAgfVxuXG4gIHZhciBmcmFtZSA9IHRoaXMuY3JlYXRlRnJhbWUoXG4gICAgbGVmdCxcbiAgICB0b3AsXG4gICAgd2lkdGgsXG4gICAgaGVpZ2h0LFxuICAgIGFwcGVhcmFuY2UsXG4gICAgcHJvcGVydGllc1xuICApO1xuXG4gIGlmICh0aXRsZSkge1xuICAgIGZyYW1lLnNldFRpdGxlKHRpdGxlKTtcbiAgfVxuXG4gIGlmIChodG1sKSB7XG4gICAgZnJhbWUuc2V0SFRNTChodG1sKTtcbiAgfVxuICBpZiAodXJsKSB7XG4gICAgdmFyIHVybFByb21pc2UgPSBmcmFtZS5zZXRVcmwodXJsKTtcbiAgICBpZiAodXJsTG9hZGVkKSB7XG4gICAgICB1cmxQcm9taXNlLnRoZW4odXJsTG9hZGVkKTtcbiAgICB9XG4gIH1cbiAgaWYgKHJlc2l6YWJsZSA9PSBmYWxzZSkge1xuICAgIGZyYW1lLnNldFJlc2l6YWJsZShmYWxzZSk7XG4gIH1cbiAgaWYgKG1vdmFibGUgPT0gZmFsc2UpIHtcbiAgICBmcmFtZS5zZXRNb3ZhYmxlKGZhbHNlKTtcbiAgfVxuXG4gIGlmIChtaW5XaWR0aCAmJiBtaW5IZWlnaHQpIHtcbiAgICBmcmFtZS5taW5GcmFtZVdpZHRoID0gbWluV2lkdGg7XG4gIH1cbiAgaWYgKG1pbkhlaWdodCkge1xuICAgIGZyYW1lLm1pbldpbmRvd0hlaWdodCA9IG1pbkhlaWdodDtcbiAgfVxuXG4gIGlmIChzdHlsZSkge1xuICAgIHZhciBmcmFtZVZpZXcgPSBmcmFtZS5nZXRGcmFtZVZpZXcoKTtcbiAgICBmb3IgKHZhciBuYW1lIGluIHN0eWxlKSB7XG4gICAgICBpZiAoc3R5bGUuaGFzT3duUHJvcGVydHkobmFtZSkpIHtcbiAgICAgICAgZnJhbWVWaWV3LnN0eWxlW25hbWVdID0gc3R5bGVbbmFtZV07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZyYW1lO1xufTtcblxuLyoqXG4gKiBDcmVhdGUgYSBuZXcgd2luZG93XG4gKlxuICogQHJldHVybnMge0NJZkZyYW1lfVxuICovXG5KU0ZyYW1lLnByb3RvdHlwZS5jcmVhdGVGcmFtZSA9IGZ1bmN0aW9uKFxuICBsZWZ0LFxuICB0b3AsXG4gIHdpZHRoLFxuICBoZWlnaHQsXG4gIGFwcGVhcmFuY2UsXG4gIHByb3BlcnRpZXNcbikge1xuICB2YXIgbWUgPSB0aGlzO1xuXG4gIGlmICghYXBwZWFyYW5jZSkge1xuICAgIGFwcGVhcmFuY2UgPSBtZS5jcmVhdGVGcmFtZUFwcGVhcmFuY2UoKTtcbiAgfVxuXG4gIGFwcGVhcmFuY2UuaW5pdGlhbGl6ZSgpO1xuXG4gIHZhciB3aW5kb3dJZCA9IFwid2luZG93X1wiICsgbWUuZ2VuZXJhdGVVVUlEKCk7XG5cbiAgaWYgKCFsZWZ0KSB7XG4gICAgbGVmdCA9IDA7XG4gIH1cbiAgaWYgKCF0b3ApIHtcbiAgICB0b3AgPSAwO1xuICB9XG4gIGlmICghd2lkdGgpIHtcbiAgICB3aWR0aCA9IDEyODtcbiAgfVxuICBpZiAoIWhlaWdodCkge1xuICAgIGhlaWdodCA9IDEyODtcbiAgfVxuXG4gIHZhciBmcmFtZSA9IG5ldyBDSWZGcmFtZSh3aW5kb3dJZCwgbGVmdCwgdG9wLCB3aWR0aCwgaGVpZ2h0LCBhcHBlYXJhbmNlKTtcblxuICAvL2V4cGVyaW1lbnRhbFxuICBmcmFtZS5qc0ZyYW1lID0gbWU7XG5cbiAgaWYgKHByb3BlcnRpZXMgJiYgcHJvcGVydGllcy5uYW1lKSB7XG4gICAgZnJhbWUuc2V0TmFtZShwcm9wZXJ0aWVzLm5hbWUpO1xuICB9XG4gIGZyYW1lLmhpZGUoKTtcblxuICBtZS53aW5kb3dNYW5hZ2VyLmFkZFdpbmRvdyhmcmFtZSk7XG5cbiAgaWYgKGFwcGVhcmFuY2UuZ2V0VGl0bGVCYXJTdHlsZSkge1xuICAgIHZhciB0aXRsZUJhclN0eWxlID0gYXBwZWFyYW5jZS5nZXRUaXRsZUJhclN0eWxlKCk7XG4gICAgaWYgKHRpdGxlQmFyU3R5bGUpIHtcbiAgICAgIGZyYW1lLnNldFRpdGxlQmFyQ2xhc3NOYW1lKFxuICAgICAgICB0aXRsZUJhclN0eWxlLnRpdGxlQmFyQ2xhc3NOYW1lRGVmYXVsdCxcbiAgICAgICAgdGl0bGVCYXJTdHlsZS50aXRsZUJhckNsYXNzTmFtZUZvY3VzZWRcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZyYW1lO1xufTtcblxuSlNGcmFtZS5wcm90b3R5cGUuY29udGFpbnNXaW5kb3dOYW1lID0gZnVuY3Rpb24od2luZG93TmFtZSkge1xuICB2YXIgbWUgPSB0aGlzO1xuICByZXR1cm4gbWUud2luZG93TWFuYWdlci5jb250YWluc1dpbmRvd05hbWUod2luZG93TmFtZSk7XG59O1xuXG5KU0ZyYW1lLnByb3RvdHlwZS5nZXRXaW5kb3dCeU5hbWUgPSBmdW5jdGlvbih3aW5kb3dOYW1lKSB7XG4gIHZhciBtZSA9IHRoaXM7XG4gIHJldHVybiBtZS53aW5kb3dNYW5hZ2VyLmdldFdpbmRvd0J5TmFtZSh3aW5kb3dOYW1lKTtcbn07XG5cbkpTRnJhbWUucHJvdG90eXBlLmdlbmVyYXRlVVVJRCA9IGZ1bmN0aW9uKCkge1xuICB2YXIgdW5peFRpbWUgPSBEYXRlLm5vdygpO1xuXG4gIHZhciB1dWlkID0gXCJ4eHh4eHh4eC14eHh4LTR4eHgteXh4eC14eHh4eHh4eHh4eHhcIi5yZXBsYWNlKC9beHldL2csIGZ1bmN0aW9uKFxuICAgIGNcbiAgKSB7XG4gICAgdmFyIHIgPSAodW5peFRpbWUgKyBNYXRoLnJhbmRvbSgpICogMTYpICUgMTYgfCAwO1xuICAgIHVuaXhUaW1lID0gTWF0aC5mbG9vcih1bml4VGltZSAvIDE2KTtcbiAgICByZXR1cm4gKGMgPT0gXCJ4XCIgPyByIDogKHIgJiAweDMpIHwgMHg4KS50b1N0cmluZygxNik7XG4gIH0pO1xuICByZXR1cm4gdXVpZDtcbn07XG5cbkpTRnJhbWUucHJvdG90eXBlLmNyZWF0ZUZyYW1lQXBwZWFyYW5jZSA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gbmV3IENGcmFtZUFwcGVhcmFuY2UoKTtcbn07XG5cbkpTRnJhbWUucHJvdG90eXBlLmNyZWF0ZUFuaW1hdG9yID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiBuZXcgQ1NpbXBsZUxheW91dEFuaW1hdG9yKCk7XG59O1xuXG4vKipcbiAqIEhlbHBlciBjbGFzcyBmb3IgbWF4aW1pemluZyBhbmQgbWluaW1pemluZyB3aW5kb3dzKGZyYW1lcykgYW5kIGhhbmRsaW5nIGFuaW1hdGlvbnMgYWNjb3JkaW5nbHlcbiAqL1xuSlNGcmFtZS5wcm90b3R5cGUuY3JlYXRlV2luZG93RXZlbnRIZWxwZXIgPSBmdW5jdGlvbihtb2RlbCkge1xuICB2YXIgbWUgPSB0aGlzO1xuXG4gIGlmICghbW9kZWwpIHtcbiAgICBtb2RlbCA9IHt9O1xuICB9XG5cbiAgbW9kZWwudmVydGljYWxBbGlnbiA9IG1lLnZBbGlnbjtcbiAgbW9kZWwuaG9yaXpvbnRhbEFsaWduID0gbWUuaEFsaWduO1xuXG4gIHZhciB3bmRFdmVudEhlbHBlciA9IG5ldyBXaW5kb3dFdmVudEhlbHBlcihtb2RlbCk7XG4gIHJldHVybiB3bmRFdmVudEhlbHBlcjtcbn07XG5cbkpTRnJhbWUucHJvdG90eXBlLmNyZWF0ZVByZXNldFN0eWxlID0gZnVuY3Rpb24ocHJlc2V0TmFtZSwgcGFyYW0pIHtcbiAgdmFyIG1lID0gdGhpcztcbiAgdmFyIGFwciA9IG1lLmNyZWF0ZUZyYW1lQXBwZWFyYW5jZSgpO1xuICBpZiAocGFyYW0gJiYgcGFyYW0uZm9jdXNlZEZyYW1lT25seSkge1xuICAgIGFwci5mb2N1c2VkRnJhbWVPbmx5ID0gcGFyYW0uZm9jdXNlZEZyYW1lT25seTtcbiAgfVxuXG4gIGlmIChwcmVzZXRTdHlsZXNbcHJlc2V0TmFtZV0pIHtcbiAgICB2YXIgc3R5bGVPYmogPSBwcmVzZXRTdHlsZXNbcHJlc2V0TmFtZV07XG4gICAgdmFyIGFwcGVhcmFuY2VQYXJhbSA9IG51bGw7XG5cbiAgICBpZiAocGFyYW0gJiYgcGFyYW0uYXBwZWFyYW5jZVBhcmFtKSB7XG4gICAgICBhcHBlYXJhbmNlUGFyYW0gPSBwYXJhbS5hcHBlYXJhbmNlUGFyYW07XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0eWxlT2JqLmdldFN0eWxlKGFwciwgYXBwZWFyYW5jZVBhcmFtKTtcbiAgfVxuXG4gIGNvbnNvbGUuZXJyb3IoJ1ByZXNldCBhcHBlYXJhbmNlIFwiJyArIHByZXNldE5hbWUgKyAnXCIgbm90IGZvdW5kLicpO1xuICByZXR1cm4gYXByO1xufTtcblxuSlNGcmFtZS5wcm90b3R5cGUuc2hvd1RvYXN0ID0gZnVuY3Rpb24obW9kZWwpIHtcbiAgaWYgKCFtb2RlbCkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHZhciBtZSA9IHRoaXM7XG4gIHZhciB0b2FzdEhlaWdodCA9IDYwO1xuICB2YXIgdG9hc3RXaWR0aCA9IDI2MDtcbiAgdmFyIG9wZW5DbG9zZUR1cmF0aW9uTXMgPSAzMDA7XG4gIHZhciBzdGF5RHVyYXRpb25NcyA9IDEwMDA7XG4gIC8vIHZhciBzdGFydFkgPSB3aW5kb3cuaW5uZXJIZWlnaHQgLSAxMCAtIHRvYXN0SGVpZ2h0IC8gMjtcbiAgLy8gdmFyIGVuZFkgPSB3aW5kb3cuaW5uZXJIZWlnaHQgLSAyMCAtIHRvYXN0SGVpZ2h0IC8gMjtcbiAgdmFyIHN0YXJ0WSA9IG1vZGVsLnRvcDtcbiAgdmFyIGVuZFkgPSBtb2RlbC50b3AgKyAxMDtcbiAgdmFyIG15SHRtbCA9IFwiXCI7XG4gIHZhciBzaG93QnV0dG9uID0gZmFsc2U7XG4gIHZhciBzdHlsZSA9IHtcbiAgICBib3JkZXJSYWRpdXM6IFwiMTBweFwiLFxuICAgIGJhY2tncm91bmQ6IFwicmdiYSgwLDAsMCwwLjgpXCJcbiAgfTtcblxuICBpZiAobW9kZWwuc3R5bGUpIHtcbiAgICBzdHlsZSA9IG1vZGVsLnN0eWxlO1xuICB9XG4gIGlmIChtb2RlbC5oZWlnaHQpIHtcbiAgICB0b2FzdEhlaWdodCA9IG1vZGVsLmhlaWdodDtcbiAgfVxuICBpZiAobW9kZWwud2lkdGgpIHtcbiAgICB0b2FzdFdpZHRoID0gbW9kZWwud2lkdGg7XG4gIH1cbiAgaWYgKG1vZGVsLmR1cmF0aW9uKSB7XG4gICAgc3RheUR1cmF0aW9uTXMgPSBtb2RlbC5kdXJhdGlvbjtcbiAgfVxuICAvLyBpZiAobW9kZWwuYWxpZ24pIHtcblxuICAvLyAgICAgaWYgKG1vZGVsLmFsaWduID09ICd0b3AnKSB7XG4gIC8vICAgICAgICAgc3RhcnRZID0gMTAgKyB0b2FzdEhlaWdodCAvIDI7XG4gIC8vICAgICAgICAgZW5kWSA9IDIwICsgdG9hc3RIZWlnaHQgLyAyO1xuICAvLyAgICAgfVxuICAvLyAgICAgZWxzZSBpZiAobW9kZWwuYWxpZ24gPT0gJ2NlbnRlcicpIHtcbiAgLy8gICAgICAgICBzdGFydFkgPSB3aW5kb3cuaW5uZXJIZWlnaHQgLyAyO1xuICAvLyAgICAgICAgIGVuZFkgPSB3aW5kb3cuaW5uZXJIZWlnaHQgLyAyO1xuICAvLyAgICAgfSBlbHNlIHtcbiAgLy8gICAgICAgICAvL2JvdHRvbVxuICAvLyAgICAgfVxuICAvLyB9XG4gIGlmIChtb2RlbC5odG1sKSB7XG4gICAgbXlIdG1sID0gbW9kZWwuaHRtbDtcbiAgfVxuICBpZiAobW9kZWwudGV4dCkge1xuICAgIG15SHRtbCA9IG1vZGVsLnRleHQ7XG4gIH1cbiAgaWYgKG1vZGVsLmNsb3NlQnV0dG9uID09IHRydWUpIHtcbiAgICBzaG93QnV0dG9uID0gdHJ1ZTtcbiAgfSBlbHNlIHtcbiAgICBzaG93QnV0dG9uID0gZmFsc2U7XG4gIH1cblxuICB2YXIgYXByID0gbWUuY3JlYXRlUHJlc2V0U3R5bGUoXCJ0b2FzdFwiKTtcblxuICBpZiAoc3R5bGUuYm9yZGVyUmFkaXVzKSB7XG4gICAgYXByLmZyYW1lQm9yZGVyUmFkaXVzID0gc3R5bGUuYm9yZGVyUmFkaXVzO1xuICB9XG5cbiAgaWYgKG1vZGVsLmNsb3NlQnV0dG9uQ29sb3IpIHtcbiAgICBhcHIuY2FwdGlvbkNsb3IgPSBtb2RlbC5jbG9zZUJ1dHRvbkNvbG9yO1xuICB9XG5cbiAgdmFyIGZyYW1lID0gbWUuY3JlYXRlKHtcbiAgICBuYW1lOiBcInRvYXN0X1wiICsgbWUuZ2VuZXJhdGVVVUlEKCksXG4gICAgd2lkdGg6IHRvYXN0V2lkdGgsXG4gICAgaGVpZ2h0OiB0b2FzdEhlaWdodCxcbiAgICBtb3ZhYmxlOiBmYWxzZSxcbiAgICByZXNpemFibGU6IGZhbHNlLFxuICAgIGFwcGVhcmFuY2U6IGFwcixcbiAgICBzdHlsZTogc3R5bGUsXG4gICAgaHRtbDpcbiAgICAgICc8ZGl2IGlkPVwibXlfZWxlbWVudFwiIHN0eWxlPVwiYm94LXNpemluZzpib3JkZXItYm94O2Rpc3BsYXk6IGZsZXg7anVzdGlmeS1jb250ZW50OiBjZW50ZXI7YWxpZ24taXRlbXM6IGNlbnRlcjtwYWRkaW5nOjEwcHg7Zm9udC1zaXplOjE2cHg7Y29sb3I6ZGFya2dyYXk7aGVpZ2h0OicgK1xuICAgICAgdG9hc3RIZWlnaHQgK1xuICAgICAgJ3B4XCI+JyArXG4gICAgICBteUh0bWwgK1xuICAgICAgXCI8L2Rpdj5cIlxuICB9KTtcblxuICBpZiAoc2hvd0J1dHRvbikge1xuICB9IGVsc2Uge1xuICAgIGZyYW1lLmhpZGVGcmFtZUNvbXBvbmVudChcImNsb3NlQnV0dG9uXCIpO1xuICB9XG5cbiAgdmFyIHJlcXVlc3RGb2N1c0FmdGVyQW5pbWF0aW9uID0gZmFsc2U7XG5cbiAgdmFyIHN0YXJ0WCA9IG1vZGVsLmxlZnQ7XG5cbiAgLy8gICBpZiAobWUuaEFsaWduID09IFwicmlnaHRcIikge1xuICAvLyAgICAgc3RhcnRYID0gLXN0YXJ0WDsgLy8gLTUwMDtcbiAgLy8gICB9XG5cbiAgaWYgKG1lLnZBbGlnbiA9PSBcImJvdHRvbVwiKSB7XG4gICAgc3RhcnRZID0gc3RhcnRZIC0gd2luZG93LmlubmVySGVpZ2h0O1xuICAgIGVuZFkgPSBlbmRZIC0gd2luZG93LmlubmVySGVpZ2h0O1xuICB9XG5cbiAgdmFyIGFuaW1hdG9yID0gbWUuY3JlYXRlQW5pbWF0b3IoKTtcbiAgYW5pbWF0b3JcbiAgICAuc2V0KGZyYW1lKVxuICAgIC5zZXREdXJhdGlvbihvcGVuQ2xvc2VEdXJhdGlvbk1zKVxuICAgIC5mcm9tUG9zaXRpb24oc3RhcnRYLCBzdGFydFksIFwiQ0VOVEVSX0NFTlRFUlwiKVxuICAgIC50b1Bvc2l0aW9uKHN0YXJ0WCwgZW5kWSwgXCJDRU5URVJfQ0VOVEVSXCIpXG4gICAgLnRvQWxwaGEoMS4wKVxuICAgIC5mcm9tQWxwaGEoMC4wKVxuICAgIC5zdGFydCgwLCByZXF1ZXN0Rm9jdXNBZnRlckFuaW1hdGlvbilcbiAgICAudGhlbihmdW5jdGlvbihhbmltYXRvck9iaikge1xuICAgICAgcmV0dXJuIGFuaW1hdG9yT2JqXG4gICAgICAgIC5zZXREdXJhdGlvbihvcGVuQ2xvc2VEdXJhdGlvbk1zKVxuICAgICAgICAuZnJvbVBvc2l0aW9uKHN0YXJ0WCwgZW5kWSwgXCJDRU5URVJfQ0VOVEVSXCIpXG4gICAgICAgIC50b1Bvc2l0aW9uKHN0YXJ0WCwgc3RhcnRZLCBcIkNFTlRFUl9DRU5URVJcIilcbiAgICAgICAgLmZyb21BbHBoYSgxLjApXG4gICAgICAgIC50b0FscGhhKDAuNSlcbiAgICAgICAgLnN0YXJ0KHN0YXlEdXJhdGlvbk1zLCByZXF1ZXN0Rm9jdXNBZnRlckFuaW1hdGlvbik7XG4gICAgfSlcbiAgICAudGhlbihmdW5jdGlvbihhbmltYXRvck9iaikge1xuICAgICAgdmFyIF9mcmFtZSA9IGFuaW1hdG9yT2JqLmdldCgpO1xuICAgICAgX2ZyYW1lLmNsb3NlRnJhbWUoKTtcbiAgICB9KTtcbn07XG5cbi8qKlxuICogZW5kIG9mIEZyYW1lTWFuYWdlciBjbGFzc1xuICovXG5cbi8vKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLVxuXG4vKipcbiAqIENGcmFtZUNvbXBvbmVudCBjbGFzc1xuICogPHA+XG4gKiBXcmFwcGVkIERPTSBlbGVtZW50IGxpa2UgJ2RpdicgdG8gZGlzcGxheSBhYm92ZSB0aGUgZnJhbWU8YnI+XG4gKlxuICogZXguQW4gb2JqZWN0IHN1Y2ggYXMgY2xvc2VCdXR0b25cbiAqXG4gKiBAcGFyYW0gaWRcbiAqIEBwYXJhbSBmcmFtZVxuICogQHBhcmFtIGh0bWxFbGVtZW50IERPTS1lbGVtZW50XG4gKiBAcGFyYW0geCByZWxhdGl2ZSB4LXBvc2l0aW9uIGluIHRoZSBmcmFtZSByZXNwZWN0IHRvIGFsaWduXG4gKiBAcGFyYW0geSByZWxhdGl2ZSB5LXBvc2l0aW9uIGluIHRoZSBmcmFtZSByZXNwZWN0IHRvIGFsaWduXG4gKiBAcGFyYW0gYWxpZ24gcmVsYXRpdmUgYWxpZ25tZW50IGluIHRoZSBmcmFtZVxuICogQGNvbnN0cnVjdG9yXG4gKi9cbmZ1bmN0aW9uIENGcmFtZUNvbXBvbmVudChpZCwgaHRtbEVsZW1lbnQsIHgsIHksIGFsaWduLCBleHRyYSkge1xuICB2YXIgbWUgPSB0aGlzO1xuXG4gIG1lLmlkID0gaWQ7XG4gIG1lLnggPSB4O1xuICBtZS55ID0geTtcbiAgbWUuZnJhbWUgPSBudWxsO1xuXG4gIG1lLl9mb2N1c1Rha2luZ0NhbGxhYmNrID0gbnVsbDtcbiAgbWUuX2ZvY3VzUmVsZWFzaW5nQ2FsbGFiY2sgPSBudWxsO1xuXG4gIGlmIChhbGlnbikge1xuICAgIG1lLmZyYW1lQ29tcG9uZW50QWxpZ24gPSBhbGlnbjtcbiAgfSBlbHNlIHtcbiAgICBtZS5mcmFtZUNvbXBvbmVudEFsaWduID0gQ0FMSUdOLkxFRlRfVE9QO1xuICB9XG5cbiAgbWUuaHRtbEVsZW1lbnQgPSBodG1sRWxlbWVudDtcbiAgbWUuaHRtbEVsZW1lbnQuc3R5bGUuekluZGV4ID0gNTA7XG5cbiAgaWYgKGV4dHJhICYmIGV4dHJhLmNoaWxkTWVudSkge1xuICAgIG1lLmNoaWxkTWVudSA9IGV4dHJhLmNoaWxkTWVudTtcbiAgfVxufVxuXG5DRnJhbWVDb21wb25lbnQucHJvdG90eXBlLnNldEZvY3VzQ2FsbGJhY2sgPSBmdW5jdGlvbihcbiAgZm9jdXNUYWtpbmdDYWxsYmFjayxcbiAgZm9jdXNSZWxlYXNpbmdDYWxsYmFja1xuKSB7XG4gIHZhciBtZSA9IHRoaXM7XG4gIG1lLl9mb2N1c1Rha2luZ0NhbGxhYmNrID0gZm9jdXNUYWtpbmdDYWxsYmFjaztcbiAgbWUuX2ZvY3VzUmVsZWFzaW5nQ2FsbGFiY2sgPSBmb2N1c1JlbGVhc2luZ0NhbGxiYWNrO1xufTtcblxuLyoqXG4gKiBTZXQgcGFyZW50IGZyYW1lIG9mIHRoaXMgZnJhbWVDb21wb25lbnRcbiAqIEBwYXJhbSBmcmFtZVxuICovXG5DRnJhbWVDb21wb25lbnQucHJvdG90eXBlLnNldEZyYW1lID0gZnVuY3Rpb24oZnJhbWUpIHtcbiAgdmFyIG1lID0gdGhpcztcblxuICBtZS5mcmFtZSA9IGZyYW1lO1xuICBtZS5odG1sRWxlbWVudC5wYXJlbnRPYmplY3QgPSBmcmFtZTtcbiAgbWUudXBkYXRlQWxpZ24oKTtcbn07XG5cbi8qKlxuICogUGxhY2UgdGhlIEZyYW1lQ29tcG9uZW50IHJlbGF0aXZlIHRvIHRoZSBwYXJlbnQncyBmcmFtZS5cbiAqIFJlbG9jYXRlIHJlbGF0aXZlIHRvIHBhcmVudCBmcmFtZSB3aGVuIHdpbmRvdyByZXNpemUgZXZlbnQgb2NjdXJzXG4gKi9cbkNGcmFtZUNvbXBvbmVudC5wcm90b3R5cGUudXBkYXRlQWxpZ24gPSBmdW5jdGlvbigpIHtcbiAgdmFyIG1lID0gdGhpcztcblxuICB2YXIgZnJhbWVDb21wb25lbnRBbGlnbiA9IG1lLmZyYW1lQ29tcG9uZW50QWxpZ247XG5cbiAgdmFyIGZyYW1lID0gbWUuZnJhbWU7XG4gIHZhciBlbGVTdHlsZSA9IG1lLmh0bWxFbGVtZW50LnN0eWxlO1xuICBlbGVTdHlsZS51c2VyU2VsZWN0ID0gXCJub25lXCI7XG5cbiAgdmFyIHggPSBtZS54O1xuICB2YXIgeSA9IG1lLnk7XG5cbiAgdmFyIGZyYW1lV2lkdGggPSBmcmFtZS5nZXRXaWR0aCgpO1xuICB2YXIgZnJhbWVIZWlnaHQgPSBmcmFtZS5nZXRIZWlnaHQoKTtcbiAgdmFyIGVsZVN0eWxlV2lkdGggPSBlbGVTdHlsZS53aWR0aDtcbiAgdmFyIGVsZVN0eWxlSGVpZ2h0ID0gZWxlU3R5bGUuaGVpZ2h0O1xuXG4gIGlmIChDQUxJR04uTEVGVF9UT1AgPT0gZnJhbWVDb21wb25lbnRBbGlnbikge1xuICAgIGVsZVN0eWxlLmxlZnQgPSB4ICsgXCJweFwiO1xuICAgIGVsZVN0eWxlLnRvcCA9IHkgKyBcInB4XCI7XG4gIH0gZWxzZSBpZiAoQ0FMSUdOLkhDRU5URVJfVE9QID09IGZyYW1lQ29tcG9uZW50QWxpZ24pIHtcbiAgICBlbGVTdHlsZS5sZWZ0ID1cbiAgICAgIHBhcnNlSW50KGZyYW1lV2lkdGgpIC8gMiAtIHBhcnNlSW50KGVsZVN0eWxlV2lkdGgpIC8gMiArIHggKyBcInB4XCI7XG4gICAgZWxlU3R5bGUudG9wID0geSArIFwicHhcIjtcbiAgfSBlbHNlIGlmIChDQUxJR04uUklHSFRfVE9QID09IGZyYW1lQ29tcG9uZW50QWxpZ24pIHtcbiAgICBlbGVTdHlsZS5sZWZ0ID0gcGFyc2VJbnQoZnJhbWVXaWR0aCkgLSBwYXJzZUludChlbGVTdHlsZVdpZHRoKSArIHggKyBcInB4XCI7XG4gICAgZWxlU3R5bGUudG9wID0geSArIFwicHhcIjtcbiAgfSBlbHNlIGlmIChDQUxJR04uTEVGVF9WQ0VOVEVSID09IGZyYW1lQ29tcG9uZW50QWxpZ24pIHtcbiAgICBlbGVTdHlsZS5sZWZ0ID0geCArIFwicHhcIjtcbiAgICBlbGVTdHlsZS50b3AgPVxuICAgICAgcGFyc2VJbnQoZnJhbWVIZWlnaHQpIC8gMiAtIHBhcnNlSW50KGVsZVN0eWxlSGVpZ2h0KSAvIDIgKyB5ICsgXCJweFwiO1xuICB9IGVsc2UgaWYgKENBTElHTi5IQ0VOVEVSX1ZDRU5URVIgPT0gZnJhbWVDb21wb25lbnRBbGlnbikge1xuICAgIGVsZVN0eWxlLmxlZnQgPVxuICAgICAgcGFyc2VJbnQoZnJhbWVXaWR0aCkgLyAyIC0gcGFyc2VJbnQoZWxlU3R5bGVXaWR0aCkgLyAyICsgeCArIFwicHhcIjtcbiAgICBlbGVTdHlsZS50b3AgPVxuICAgICAgcGFyc2VJbnQoZnJhbWVIZWlnaHQpIC8gMiAtIHBhcnNlSW50KGVsZVN0eWxlSGVpZ2h0KSAvIDIgKyB5ICsgXCJweFwiO1xuICB9IGVsc2UgaWYgKENBTElHTi5SSUdIVF9WQ0VOVEVSID09IGZyYW1lQ29tcG9uZW50QWxpZ24pIHtcbiAgICBlbGVTdHlsZS5sZWZ0ID0gcGFyc2VJbnQoZnJhbWVXaWR0aCkgLSBwYXJzZUludChlbGVTdHlsZVdpZHRoKSArIHggKyBcInB4XCI7XG4gICAgZWxlU3R5bGUudG9wID1cbiAgICAgIHBhcnNlSW50KGZyYW1lSGVpZ2h0KSAvIDIgLSBwYXJzZUludChlbGVTdHlsZUhlaWdodCkgLyAyICsgeSArIFwicHhcIjtcbiAgfSBlbHNlIGlmIChDQUxJR04uTEVGVF9CT1RUT00gPT0gZnJhbWVDb21wb25lbnRBbGlnbikge1xuICAgIGVsZVN0eWxlLmxlZnQgPSB4ICsgXCJweFwiO1xuICAgIGVsZVN0eWxlLnRvcCA9IHBhcnNlSW50KGZyYW1lSGVpZ2h0KSAtIHBhcnNlSW50KGVsZVN0eWxlSGVpZ2h0KSArIHkgKyBcInB4XCI7XG4gIH0gZWxzZSBpZiAoQ0FMSUdOLkhDRU5URVJfQk9UVE9NID09IGZyYW1lQ29tcG9uZW50QWxpZ24pIHtcbiAgICBlbGVTdHlsZS5sZWZ0ID1cbiAgICAgIHBhcnNlSW50KGZyYW1lV2lkdGgpIC8gMiAtIHBhcnNlSW50KGVsZVN0eWxlV2lkdGgpIC8gMiArIHggKyBcInB4XCI7XG4gICAgZWxlU3R5bGUudG9wID0gcGFyc2VJbnQoZnJhbWVIZWlnaHQpIC0gcGFyc2VJbnQoZWxlU3R5bGVIZWlnaHQpICsgeSArIFwicHhcIjtcbiAgfSBlbHNlIGlmIChDQUxJR04uUklHSFRfQk9UVE9NID09IGZyYW1lQ29tcG9uZW50QWxpZ24pIHtcbiAgICBlbGVTdHlsZS5sZWZ0ID0gcGFyc2VJbnQoZnJhbWVXaWR0aCkgLSBwYXJzZUludChlbGVTdHlsZVdpZHRoKSArIHggKyBcInB4XCI7XG4gICAgZWxlU3R5bGUudG9wID0gcGFyc2VJbnQoZnJhbWVIZWlnaHQpIC0gcGFyc2VJbnQoZWxlU3R5bGVIZWlnaHQpICsgeSArIFwicHhcIjtcbiAgfVxufTtcblxuQ0ZyYW1lQ29tcG9uZW50LnByb3RvdHlwZS5oYW5kbGVUYWtpbmdGb2N1cyA9IGZ1bmN0aW9uKCkge1xuICB2YXIgbWUgPSB0aGlzO1xuICBpZiAobWUuX2ZvY3VzVGFraW5nQ2FsbGFiY2spIHtcbiAgICBtZS5fZm9jdXNUYWtpbmdDYWxsYWJjaygpO1xuICB9XG59O1xuXG5DRnJhbWVDb21wb25lbnQucHJvdG90eXBlLmhhbmRsZVJlbGVhc2luZ0ZvY3VzID0gZnVuY3Rpb24oKSB7XG4gIHZhciBtZSA9IHRoaXM7XG4gIGlmIChtZS5fZm9jdXNSZWxlYXNpbmdDYWxsYWJjaykge1xuICAgIG1lLl9mb2N1c1JlbGVhc2luZ0NhbGxhYmNrKCk7XG4gIH1cbn07XG5cbi8qKlxuICogZW5kIG9mIENGcmFtZUNvbXBvbmVudCBjbGFzc1xuICovXG5cbi8vKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLVxuXG4vKipcbiAqIENEb21QYXJ0c0J1aWxkZXIgY2xhc3NcbiAqIEVhc3kgdG8gYnVpbGQgYSBiZWF1dGlmdWwgb3IgdHlwaWNhbCBkb20gcGFydHMoaHRtbEVsZW1lbnQpXG4gKiBAY29uc3RydWN0b3JcbiAqL1xuZnVuY3Rpb24gQ0RvbVBhcnRzQnVpbGRlcigpIHt9XG5cbkNEb21QYXJ0c0J1aWxkZXIucHJvdG90eXBlLmJ1aWxkVGV4dEJ1dHRvbkFwcGVhcmFuY2UgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIG5ldyBDVGV4dEJ1dHRvbkFwcGVhcmFuY2UoKTtcbn07XG5cbkNEb21QYXJ0c0J1aWxkZXIucHJvdG90eXBlLmJ1aWxkQnV0dG9uID0gZnVuY3Rpb24oYnRuQXBwZWFyYW5jZSkge1xuICB2YXIgbWUgPSB0aGlzO1xuICByZXR1cm4gbWUuYnVpbGRUZXh0QnV0dG9uKGJ0bkFwcGVhcmFuY2UpO1xufTtcblxuLyoqXG4gKlxuICogQHBhcmFtIHNpemVcbiAqIEByZXR1cm5zIHtIVE1MRWxlbWVudH1cbiAqL1xuQ0RvbVBhcnRzQnVpbGRlci5wcm90b3R5cGUuYnVpbGRUZXh0QnV0dG9uID0gZnVuY3Rpb24oYnRuQXBwZWFyYW5jZSkge1xuICB2YXIgc2l6ZSA9IGJ0bkFwcGVhcmFuY2Uuc2l6ZTtcbiAgdmFyIHdpZHRoID0gc2l6ZTtcbiAgdmFyIGhlaWdodCA9IHNpemU7XG5cbiAgaWYgKGJ0bkFwcGVhcmFuY2Uud2lkdGggIT0gbnVsbCkge1xuICAgIHdpZHRoID0gYnRuQXBwZWFyYW5jZS53aWR0aDtcbiAgfVxuXG4gIGlmIChidG5BcHBlYXJhbmNlLmhlaWdodCAhPSBudWxsKSB7XG4gICAgaGVpZ2h0ID0gYnRuQXBwZWFyYW5jZS5oZWlnaHQ7XG4gIH1cblxuICB2YXIgZGl2RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbiAgLy9ib3JkZXJcbiAgdmFyIGJvcmRlcldpZHRoID0gYnRuQXBwZWFyYW5jZS5ib3JkZXJXaWR0aDtcbiAgdmFyIGJvcmRlclJhZGl1cyA9IGJ0bkFwcGVhcmFuY2UuYm9yZGVyUmFkaXVzO1xuXG4gIHZhciBib3JkZXJDb2xvckRlZmF1bHQgPSBidG5BcHBlYXJhbmNlLmJvcmRlckNvbG9yRGVmYXVsdDtcbiAgdmFyIGJvcmRlckNvbG9yRm9jdXNlZCA9IGJ0bkFwcGVhcmFuY2UuYm9yZGVyQ29sb3JGb2N1c2VkO1xuICB2YXIgYm9yZGVyQ29sb3JIb3ZlcmVkID0gYnRuQXBwZWFyYW5jZS5ib3JkZXJDb2xvckhvdmVyZWQ7XG4gIHZhciBib3JkZXJDb2xvclByZXNzZWQgPSBidG5BcHBlYXJhbmNlLmJvcmRlckNvbG9yUHJlc3NlZDtcblxuICB2YXIgYm9yZGVyU3R5bGVEZWZhdWx0ID0gYnRuQXBwZWFyYW5jZS5ib3JkZXJTdHlsZURlZmF1bHQ7XG4gIHZhciBib3JkZXJTdHlsZUZvY3VzZWQgPSBidG5BcHBlYXJhbmNlLmJvcmRlclN0eWxlRm9jdXNlZDtcbiAgdmFyIGJvcmRlclN0eWxlSG92ZXJlZCA9IGJ0bkFwcGVhcmFuY2UuYm9yZGVyU3R5bGVIb3ZlcmVkO1xuICB2YXIgYm9yZGVyU3R5bGVQcmVzc2VkID0gYnRuQXBwZWFyYW5jZS5ib3JkZXJTdHlsZVByZXNzZWQ7XG5cbiAgLy9iYWNrZ3JvdW5kXG4gIHZhciBiYWNrZ3JvdW5kQ29sb3JEZWZhdWx0ID0gYnRuQXBwZWFyYW5jZS5iYWNrZ3JvdW5kQ29sb3JEZWZhdWx0O1xuICB2YXIgYmFja2dyb3VuZENvbG9yRm9jdXNlZCA9IGJ0bkFwcGVhcmFuY2UuYmFja2dyb3VuZENvbG9yRm9jdXNlZDtcbiAgdmFyIGJhY2tncm91bmRDb2xvckhvdmVyZWQgPSBidG5BcHBlYXJhbmNlLmJhY2tncm91bmRDb2xvckhvdmVyZWQ7XG4gIHZhciBiYWNrZ3JvdW5kQ29sb3JQcmVzc2VkID0gYnRuQXBwZWFyYW5jZS5iYWNrZ3JvdW5kQ29sb3JQcmVzc2VkO1xuXG4gIHZhciBiYWNrZ3JvdW5kQm94U2hhZG93ID0gYnRuQXBwZWFyYW5jZS5iYWNrZ3JvdW5kQm94U2hhZG93O1xuXG4gIHZhciBmYSA9IGJ0bkFwcGVhcmFuY2UuZmE7XG5cbiAgLy9jYXB0aW9uXG4gIHZhciBjYXB0aW9uID0gYnRuQXBwZWFyYW5jZS5jYXB0aW9uO1xuICB2YXIgYnRuSW1hZ2VEZWZhdWx0ID0gYnRuQXBwZWFyYW5jZS5pbWFnZURlZmF1bHQ7XG4gIHZhciBidG5JbWFnZUZvY3VzZWQgPSBidG5BcHBlYXJhbmNlLmltYWdlRm9jdXNlZDtcbiAgdmFyIGJ0bkltYWdlSG92ZXJlZCA9IGJ0bkFwcGVhcmFuY2UuaW1hZ2VIb3ZlcmVkO1xuICB2YXIgYnRuSW1hZ2VQcmVzc2VkID0gYnRuQXBwZWFyYW5jZS5pbWFnZVByZXNzZWQ7XG5cbiAgLy9wcmV2ZW50IHRvIGNhdGNoIG1vdXNlIGV2ZW50c1xuICBpZiAoYnRuSW1hZ2VEZWZhdWx0KSB7XG4gICAgYnRuSW1hZ2VEZWZhdWx0LnN0eWxlLnBvaW50ZXJFdmVudHMgPSBcIm5vbmVcIjtcbiAgfVxuICBpZiAoYnRuSW1hZ2VGb2N1c2VkKSB7XG4gICAgYnRuSW1hZ2VGb2N1c2VkLnN0eWxlLnBvaW50ZXJFdmVudHMgPSBcIm5vbmVcIjtcbiAgfVxuICBpZiAoYnRuSW1hZ2VIb3ZlcmVkKSB7XG4gICAgYnRuSW1hZ2VIb3ZlcmVkLnN0eWxlLnBvaW50ZXJFdmVudHMgPSBcIm5vbmVcIjtcbiAgfVxuICBpZiAoYnRuSW1hZ2VQcmVzc2VkKSB7XG4gICAgYnRuSW1hZ2VQcmVzc2VkLnN0eWxlLnBvaW50ZXJFdmVudHMgPSBcIm5vbmVcIjtcbiAgfVxuXG4gIHZhciBfY2FwdGlvbkNvbG9yRGVmYXVsdCA9IGJ0bkFwcGVhcmFuY2UuY2FwdGlvbkNvbG9yRGVmYXVsdDtcbiAgdmFyIGNhcHRpb25Db2xvckZvY3VzZWQgPSBidG5BcHBlYXJhbmNlLmNhcHRpb25Db2xvckZvY3VzZWQ7XG4gIHZhciBjYXB0aW9uQ29sb3JIb3ZlcmVkID0gYnRuQXBwZWFyYW5jZS5jYXB0aW9uQ29sb3JIb3ZlcmVkO1xuICB2YXIgY2FwdGlvbkNvbG9yUHJlc3NlZCA9IGJ0bkFwcGVhcmFuY2UuY2FwdGlvbkNvbG9yUHJlc3NlZDtcblxuICB2YXIgY2FwdGlvblNoaWZ0WXB4ID0gYnRuQXBwZWFyYW5jZS5jYXB0aW9uU2hpZnRZcHg7XG4gIHZhciBjYXB0aW9uRm9udFJhdGlvID0gYnRuQXBwZWFyYW5jZS5jYXB0aW9uRm9udFJhdGlvO1xuXG4gIC8vU2V0IHdoZXRoZXIgcGFyZW50IGZyYW1lIGhhcyBmb2N1cyBvciBub3QgaW50ZXJuYWxseVxuICBkaXZFbGVtZW50Ll9oYXNGcmFtZUZvY3VzID0gZmFsc2U7XG5cbiAgLy9TZXQgd2hldGhlciBtb3VzZSBpcyBwcmVzc2luZyBvciBub3QgaW50ZXJuYWxseS5cbiAgZGl2RWxlbWVudC5faXNNb3VzZURvd24gPSBmYWxzZTtcblxuICBkaXZFbGVtZW50LnN0eWxlLnBvc2l0aW9uID0gXCJhYnNvbHV0ZVwiO1xuXG4gIGRpdkVsZW1lbnQuc3R5bGUudG9wID0gXCIwcHhcIjtcbiAgZGl2RWxlbWVudC5zdHlsZS5sZWZ0ID0gXCIwcHhcIjtcbiAgZGl2RWxlbWVudC5zdHlsZS53aWR0aCA9IHdpZHRoICsgXCJweFwiO1xuICBkaXZFbGVtZW50LnN0eWxlLmhlaWdodCA9IGhlaWdodCArIFwicHhcIjtcbiAgZGl2RWxlbWVudC5zdHlsZS5jdXJzb3IgPSBcInBvaW50ZXJcIjtcbiAgZGl2RWxlbWVudC5zdHlsZS5tYXJnaW4gPSBcIjBweFwiO1xuICBkaXZFbGVtZW50LnN0eWxlLnBhZGRpbmcgPSBcIjBweFwiO1xuICAvL2FkZGVkIGZvciBwcmV2ZW50aW5nIGJvb3RzdHJhcC5jc3MgcG9sbHV0aW9uXG4gIGRpdkVsZW1lbnQuc3R5bGUuYm94U2l6aW5nID0gXCJjb250ZW50LWJveFwiO1xuICBkaXZFbGVtZW50LnN0eWxlLmZvbnRGYW1pbHkgPSBcInNhbnMtc2VyaWZcIjtcblxuICBkaXZFbGVtZW50Lm9ubW91c2Vkb3duID0gZnVuY3Rpb24oZSkge1xuICAgIGRpdkVsZW1lbnQuX2lzTW91c2VEb3duID0gdHJ1ZTtcbiAgICBkaXZFbGVtZW50Ll9oYW5kbGVGb2N1c0RyYXdpbmcoXCJvbm1vdXNlZG93blwiKTtcbiAgfTtcblxuICBkaXZFbGVtZW50Lm9ubW91c2VvdXQgPSBmdW5jdGlvbihlKSB7XG4gICAgZGl2RWxlbWVudC5faXNNb3VzZURvd24gPSBmYWxzZTtcbiAgICBkaXZFbGVtZW50Ll9oYW5kbGVGb2N1c0RyYXdpbmcoXCJvbm1vdXNlb3V0XCIpO1xuICB9O1xuXG4gIGRpdkVsZW1lbnQub25tb3VzZW92ZXIgPSBmdW5jdGlvbihlKSB7XG4gICAgZGl2RWxlbWVudC5faGFuZGxlSG92ZXJEcmF3aW5nKCk7XG4gIH07XG5cbiAgZGl2RWxlbWVudC5vbm1vdXNldXAgPSBmdW5jdGlvbihlKSB7XG4gICAgZGl2RWxlbWVudC5faXNNb3VzZURvd24gPSBmYWxzZTtcbiAgICBkaXZFbGVtZW50Ll9oYW5kbGVGb2N1c0RyYXdpbmcoXCJvbm1vdXNldXBcIik7XG4gIH07XG5cbiAgLyoqXG4gICAqIFRoZSBwYXJlbnQgbm90aWZpZXMgdGhhdCB0aGUgcGFyZW50J3MgZnJhbWUgZ290IGZvY3VzXG4gICAqL1xuICBkaXZFbGVtZW50Ll9vblRha2VGb2N1cyA9IGZ1bmN0aW9uKCkge1xuICAgIGRpdkVsZW1lbnQuX2hhc0ZyYW1lRm9jdXMgPSB0cnVlO1xuICAgIGRpdkVsZW1lbnQuX2hhbmRsZUZvY3VzRHJhd2luZyhcIl9vblRha2VGb2N1c1wiKTtcbiAgfTtcblxuICAvKipcbiAgICogVGhlIHBhcmVudCBub3RpZmllcyB0aGF0IHRoZSBwYXJlbnQncyBmcmFtZSBoYXMgbG9zdCBmb2N1c1xuICAgKi9cbiAgZGl2RWxlbWVudC5fb25SZWxlYXNlRm9jdXMgPSBmdW5jdGlvbigpIHtcbiAgICBkaXZFbGVtZW50Ll9oYXNGcmFtZUZvY3VzID0gZmFsc2U7XG4gICAgZGl2RWxlbWVudC5faGFuZGxlRm9jdXNEcmF3aW5nKFwiX29uUmVsZWFzZUZvY3VzXCIpO1xuICB9O1xuXG4gIC8qKlxuICAgKiAgVG8gaGFuZGxlIDJ4MiBtYXRyaXguXG4gICAqICAoX2hhc0ZyYW1lRm9jdXMgdHJ1ZS9mYWxzZSB4IF9pc01vdXNlRG93biB0cnVlL2ZhbHNlKVxuICAgKi9cbiAgZGl2RWxlbWVudC5faGFuZGxlRm9jdXNEcmF3aW5nID0gZnVuY3Rpb24oZXZ0TmFtZSkge1xuICAgIGlmIChkaXZFbGVtZW50Ll9oYXNGcmFtZUZvY3VzKSB7XG4gICAgICAvL1doZW4gdGhpcyBlbGVtZW50IGhhcyBmb2N1c1xuXG4gICAgICBpZiAoZGl2RWxlbWVudC5faXNNb3VzZURvd24pIHtcbiAgICAgICAgLy9ib3JkZXJcbiAgICAgICAgZGl2RWxlbWVudC5zdHlsZS5ib3JkZXJDb2xvciA9IGJvcmRlckNvbG9yUHJlc3NlZDtcbiAgICAgICAgZGl2RWxlbWVudC5zdHlsZS5ib3JkZXJTdHlsZSA9IGJvcmRlclN0eWxlUHJlc3NlZDtcblxuICAgICAgICAvL2JhY2tncm91bmRcbiAgICAgICAgZGl2RWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBiYWNrZ3JvdW5kQ29sb3JQcmVzc2VkO1xuXG4gICAgICAgIC8vY2FwdGlvblxuICAgICAgICBkaXZFbGVtZW50LnN0eWxlLmNvbG9yID0gY2FwdGlvbkNvbG9yUHJlc3NlZDtcblxuICAgICAgICBpZiAoYnRuSW1hZ2VQcmVzc2VkKSB7XG4gICAgICAgICAgZGl2RWxlbWVudC5pbm5lckhUTUwgPSBcIlwiO1xuICAgICAgICAgIGRpdkVsZW1lbnQuYXBwZW5kQ2hpbGQoYnRuSW1hZ2VQcmVzc2VkKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy9ib3JkZXJcbiAgICAgICAgZGl2RWxlbWVudC5zdHlsZS5ib3JkZXJDb2xvciA9IGJvcmRlckNvbG9yRm9jdXNlZDtcbiAgICAgICAgZGl2RWxlbWVudC5zdHlsZS5ib3JkZXJTdHlsZSA9IGJvcmRlclN0eWxlRm9jdXNlZDtcblxuICAgICAgICAvL2JhY2tncm91bmRcbiAgICAgICAgZGl2RWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBiYWNrZ3JvdW5kQ29sb3JGb2N1c2VkO1xuXG4gICAgICAgIC8vY2FwdGlvblxuICAgICAgICBkaXZFbGVtZW50LnN0eWxlLmNvbG9yID0gY2FwdGlvbkNvbG9yRm9jdXNlZDtcblxuICAgICAgICBpZiAoYnRuSW1hZ2VGb2N1c2VkKSB7XG4gICAgICAgICAgZGl2RWxlbWVudC5pbm5lckhUTUwgPSBcIlwiO1xuICAgICAgICAgIGRpdkVsZW1lbnQuYXBwZW5kQ2hpbGQoYnRuSW1hZ2VGb2N1c2VkKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAvL1doZW4gdGhpcyBlbGVtZW50IGRvZXNuJ3QgaGF2ZSBmb2N1c1xuICAgICAgaWYgKGRpdkVsZW1lbnQuX2lzTW91c2VEb3duKSB7XG4gICAgICAgIC8vYm9yZGVyXG4gICAgICAgIGRpdkVsZW1lbnQuc3R5bGUuYm9yZGVyQ29sb3IgPSBib3JkZXJDb2xvclByZXNzZWQ7XG4gICAgICAgIGRpdkVsZW1lbnQuc3R5bGUuYm9yZGVyU3R5bGUgPSBib3JkZXJTdHlsZVByZXNzZWQ7XG5cbiAgICAgICAgLy9iYWNrZ3JvdW5kXG4gICAgICAgIGRpdkVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gYmFja2dyb3VuZENvbG9yUHJlc3NlZDtcblxuICAgICAgICAvL2NhcHRpb25cbiAgICAgICAgZGl2RWxlbWVudC5zdHlsZS5jb2xvciA9IGNhcHRpb25Db2xvclByZXNzZWQ7XG5cbiAgICAgICAgaWYgKGJ0bkltYWdlUHJlc3NlZCkge1xuICAgICAgICAgIGRpdkVsZW1lbnQuaW5uZXJIVE1MID0gXCJcIjtcbiAgICAgICAgICBkaXZFbGVtZW50LmFwcGVuZENoaWxkKGJ0bkltYWdlUHJlc3NlZCk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vYm9yZGVyXG4gICAgICAgIGRpdkVsZW1lbnQuc3R5bGUuYm9yZGVyQ29sb3IgPSBib3JkZXJDb2xvckRlZmF1bHQ7XG4gICAgICAgIGRpdkVsZW1lbnQuc3R5bGUuYm9yZGVyU3R5bGUgPSBib3JkZXJTdHlsZURlZmF1bHQ7XG5cbiAgICAgICAgLy9iYWNrZ3JvdW5kXG4gICAgICAgIGRpdkVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gYmFja2dyb3VuZENvbG9yRGVmYXVsdDtcblxuICAgICAgICAvL2NhcHRpb25cbiAgICAgICAgZGl2RWxlbWVudC5zdHlsZS5jb2xvciA9IF9jYXB0aW9uQ29sb3JEZWZhdWx0O1xuXG4gICAgICAgIGlmIChidG5JbWFnZURlZmF1bHQpIHtcbiAgICAgICAgICBkaXZFbGVtZW50LmlubmVySFRNTCA9IFwiXCI7XG4gICAgICAgICAgZGl2RWxlbWVudC5hcHBlbmRDaGlsZChidG5JbWFnZURlZmF1bHQpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIGRpdkVsZW1lbnQuX2hhbmRsZUhvdmVyRHJhd2luZyA9IGZ1bmN0aW9uKCkge1xuICAgIGlmIChkaXZFbGVtZW50Ll9oYXNGcmFtZUZvY3VzKSB7XG4gICAgICAvL1doZW4gdGhpcyBlbGVtZW50IGhhcyBmb2N1c1xuICAgIH0gZWxzZSB7XG4gICAgICAvL1doZW4gdGhpcyBlbGVtZW50IGRvZXNuJ3QgaGF2ZSBmb2N1c1xuICAgIH1cbiAgICAvL2JvcmRlclxuICAgIGlmIChib3JkZXJDb2xvckhvdmVyZWQpIHtcbiAgICAgIGRpdkVsZW1lbnQuc3R5bGUuYm9yZGVyQ29sb3IgPSBib3JkZXJDb2xvckhvdmVyZWQ7XG4gICAgfVxuICAgIGlmIChib3JkZXJTdHlsZUhvdmVyZWQpIHtcbiAgICAgIGRpdkVsZW1lbnQuc3R5bGUuYm9yZGVyU3R5bGUgPSBib3JkZXJTdHlsZUhvdmVyZWQ7XG4gICAgfVxuXG4gICAgLy9iYWNrZ3JvdW5kXG4gICAgaWYgKGJhY2tncm91bmRDb2xvckhvdmVyZWQpIHtcbiAgICAgIGRpdkVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gYmFja2dyb3VuZENvbG9ySG92ZXJlZDtcbiAgICB9XG5cbiAgICBpZiAoY2FwdGlvbkNvbG9ySG92ZXJlZCkge1xuICAgICAgLy9jYXB0aW9uXG4gICAgICBkaXZFbGVtZW50LnN0eWxlLmNvbG9yID0gY2FwdGlvbkNvbG9ySG92ZXJlZDtcbiAgICB9XG4gICAgaWYgKGJ0bkltYWdlSG92ZXJlZCkge1xuICAgICAgZGl2RWxlbWVudC5pbm5lckhUTUwgPSBcIlwiO1xuICAgICAgZGl2RWxlbWVudC5hcHBlbmRDaGlsZChidG5JbWFnZUhvdmVyZWQpO1xuICAgIH1cbiAgfTtcblxuICBkaXZFbGVtZW50LnN0eWxlLnRleHRBbGlnbiA9IFwiY2VudGVyXCI7XG4gIGRpdkVsZW1lbnQuc3R5bGUuZm9udFNpemUgPSBoZWlnaHQgKiBjYXB0aW9uRm9udFJhdGlvICsgXCJweFwiO1xuXG4gIGRpdkVsZW1lbnQuc3R5bGUubGluZUhlaWdodCA9IGhlaWdodCArIFwicHhcIjtcblxuICBkaXZFbGVtZW50LnN0eWxlLmJvcmRlcldpZHRoID0gXCIxcHhcIjtcblxuICBpZiAoYm9yZGVyV2lkdGggIT0gbnVsbCkge1xuICAgIGRpdkVsZW1lbnQuc3R5bGUuYm9yZGVyV2lkdGggPSBib3JkZXJXaWR0aCArIFwicHhcIjtcbiAgfVxuXG4gIGlmIChiYWNrZ3JvdW5kQm94U2hhZG93ICE9IG51bGwpIHtcbiAgICBkaXZFbGVtZW50LnN0eWxlLmJveFNoYWRvdyA9IGJhY2tncm91bmRCb3hTaGFkb3c7XG4gIH1cblxuICBkaXZFbGVtZW50LnN0eWxlLmJvcmRlclJhZGl1cyA9XG4gICAgYm9yZGVyUmFkaXVzICsgcGFyc2VJbnQoZGl2RWxlbWVudC5zdHlsZS5ib3JkZXJXaWR0aCkgKyBcInB4XCI7XG5cbiAgdmFyIGNoaWxkTW9kZSA9IHRydWU7XG5cbiAgaWYgKGNoaWxkTW9kZSAmJiBidG5JbWFnZURlZmF1bHQpIHtcbiAgICBkaXZFbGVtZW50LmlubmVySFRNTCA9IFwiXCI7XG4gICAgZGl2RWxlbWVudC5hcHBlbmRDaGlsZChidG5JbWFnZURlZmF1bHQpO1xuICB9IGVsc2UgaWYgKGNoaWxkTW9kZSAmJiBjYXB0aW9uKSB7XG4gICAgdmFyIHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICAvL3NwYW4uc3R5bGUucG9zaXRpb249J2Fic29sdXRlJztcbiAgICBzcGFuLnN0eWxlLndpZHRoID0gXCIxMDAlXCI7XG4gICAgc3Bhbi5zdHlsZS5tYXJnaW5Ub3AgPSBjYXB0aW9uU2hpZnRZcHggKyBcInB4XCI7XG4gICAgc3Bhbi5zdHlsZS5kaXNwbGF5ID0gXCJpbmxpbmUtYmxvY2tcIjtcbiAgICBzcGFuLnN0eWxlLnRleHRBbGlnbiA9IFwiY2VudGVyXCI7XG4gICAgc3Bhbi5zdHlsZS5mb250RmFtaWx5ID0gXCJzYW5zLXNlcmlmXCI7XG4gICAgc3Bhbi5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjYXB0aW9uKSk7XG4gICAgZGl2RWxlbWVudC5hcHBlbmRDaGlsZChzcGFuKTtcbiAgfSBlbHNlIGlmIChjaGlsZE1vZGUgJiYgZmEpIHtcbiAgICB2YXIgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgIHNwYW4uc3R5bGUud2lkdGggPSBcIjEwMCVcIjtcbiAgICBzcGFuLnN0eWxlLm1hcmdpblRvcCA9IGNhcHRpb25TaGlmdFlweCArIFwicHhcIjtcbiAgICBzcGFuLnN0eWxlLmRpc3BsYXkgPSBcImlubGluZS1ibG9ja1wiO1xuICAgIHNwYW4uc3R5bGUudGV4dEFsaWduID0gXCJjZW50ZXJcIjtcbiAgICBzcGFuLnN0eWxlLmZvbnRGYW1pbHkgPSBcInNhbnMtc2VyaWZcIjtcbiAgICBzcGFuLmlubmVySFRNTCA9ICc8aSBjbGFzcz1cIicgKyBmYSArICdcIj48L2k+JztcbiAgICBkaXZFbGVtZW50LmFwcGVuZENoaWxkKHNwYW4pO1xuICB9IGVsc2UgaWYgKCFjaGlsZE1vZGUgJiYgY2FwdGlvbikge1xuICAgIGRpdkVsZW1lbnQuc3R5bGUucGFkZGluZ1RvcCA9IGNhcHRpb25TaGlmdFlweCArIFwicHhcIjtcbiAgICBkaXZFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNhcHRpb24pKTtcbiAgfVxuXG4gIGRpdkVsZW1lbnQuX2hhbmRsZUZvY3VzRHJhd2luZygpO1xuICByZXR1cm4gZGl2RWxlbWVudDtcbn07XG5cbmZ1bmN0aW9uIENUZXh0QnV0dG9uQXBwZWFyYW5jZSgpIHtcbiAgdmFyIGNyb3NzTWFyazAgPSBcIlxcdTI3NGNcIjtcblxuICB0aGlzLnNpemUgPSAxNDtcbiAgdGhpcy53aWR0aCA9IG51bGw7XG4gIHRoaXMuaGVpZ2h0ID0gbnVsbDtcblxuICAvL2JvcmRlclxuICB0aGlzLmJvcmRlclJhZGl1cyA9IDI7XG4gIHRoaXMuYm9yZGVyV2lkdGggPSAwO1xuICB0aGlzLmJvcmRlckNvbG9yRGVmYXVsdCA9IFwiI2FhYWFhYVwiO1xuICB0aGlzLmJvcmRlckNvbG9yRm9jdXNlZCA9IHRoaXMuYm9yZGVyQ29sb3JEZWZhdWx0O1xuICB0aGlzLmJvcmRlckNvbG9ySG92ZXJlZCA9IG51bGw7XG4gIHRoaXMuYm9yZGVyQ29sb3JQcmVzc2VkID0gdGhpcy5ib3JkZXJDb2xvckRlZmF1bHQ7XG5cbiAgdGhpcy5ib3JkZXJTdHlsZURlZmF1bHQgPSBcInNvbGlkXCI7XG4gIHRoaXMuYm9yZGVyU3R5bGVGb2N1c2VkID0gdGhpcy5ib3JkZXJTdHlsZURlZmF1bHQ7XG4gIHRoaXMuYm9yZGVyU3R5bGVIb3ZlcmVkID0gbnVsbDtcbiAgdGhpcy5ib3JkZXJTdHlsZVByZXNzZWQgPSB0aGlzLmJvcmRlclN0eWxlRGVmYXVsdDtcblxuICB0aGlzLmJhY2tncm91bmRCb3hTaGFkb3cgPSBudWxsO1xuXG4gIC8vYmFja2dyb3VuZFxuICB0aGlzLmJhY2tncm91bmRDb2xvckRlZmF1bHQgPSBcInRyYW5zcGFyZW50XCI7XG4gIHRoaXMuYmFja2dyb3VuZENvbG9yRm9jdXNlZCA9IHRoaXMuYmFja2dyb3VuZENvbG9yRGVmYXVsdDtcbiAgdGhpcy5iYWNrZ3JvdW5kQ29sb3JIb3ZlcmVkID0gbnVsbDtcbiAgdGhpcy5iYWNrZ3JvdW5kQ29sb3JQcmVzc2VkID0gdGhpcy5iYWNrZ3JvdW5kQ29sb3JEZWZhdWx0O1xuXG4gIC8vY2FwdGlvblxuICB0aGlzLmNhcHRpb24gPSBudWxsO1xuICB0aGlzLmNhcHRpb25Db2xvckRlZmF1bHQgPSBcIndoaXRlXCI7XG4gIHRoaXMuY2FwdGlvbkNvbG9yRm9jdXNlZCA9IHRoaXMuY2FwdGlvbkNvbG9yRGVmYXVsdDtcbiAgdGhpcy5jYXB0aW9uQ29sb3JIb3ZlcmVkID0gbnVsbDtcbiAgdGhpcy5jYXB0aW9uQ29sb3JQcmVzc2VkID0gdGhpcy5jYXB0aW9uQ29sb3JEZWZhdWx0O1xuICB0aGlzLmNhcHRpb25TaGlmdFlweCA9IDA7XG4gIHRoaXMuY2FwdGlvbkZvbnRSYXRpbyA9IDEuMDtcbn1cblxuLyoqXG4gKiBlbmQgb2YgQ0RvbVBhcnRzQnVpbGRlciBjbGFzc1xuICovXG5cbi8vKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLVxuXG5PYmplY3QuZnJlZXplKERFRik7XG4iLCJcbnZhciBfdHlwZW9mID1cbiAgICB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIlxuICAgICAgICA/IGZ1bmN0aW9uIChvYmopIHtcbiAgICAgICAgICAgIHJldHVybiB0eXBlb2Ygb2JqO1xuICAgICAgICB9XG4gICAgICAgIDogZnVuY3Rpb24gKG9iaikge1xuICAgICAgICAgICAgcmV0dXJuIG9iaiAmJlxuICAgICAgICAgICAgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmXG4gICAgICAgICAgICBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJlxuICAgICAgICAgICAgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlXG4gICAgICAgICAgICAgICAgPyBcInN5bWJvbFwiXG4gICAgICAgICAgICAgICAgOiB0eXBlb2Ygb2JqO1xuICAgICAgICB9O1xuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7XG4gICAgaWYgKGtleSBpbiBvYmopIHtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7XG4gICAgICAgICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgd3JpdGFibGU6IHRydWVcbiAgICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgb2JqW2tleV0gPSB2YWx1ZTtcbiAgICB9XG4gICAgcmV0dXJuIG9iajtcbn1cblxuZnVuY3Rpb24gaXNPYmplY3QoaXRlbSkge1xuICAgIHJldHVybiAoXG4gICAgICAgIGl0ZW0gJiZcbiAgICAgICAgKHR5cGVvZiBpdGVtID09PSBcInVuZGVmaW5lZFwiID8gXCJ1bmRlZmluZWRcIiA6IF90eXBlb2YoaXRlbSkpID09PSBcIm9iamVjdFwiICYmXG4gICAgICAgICFBcnJheS5pc0FycmF5KGl0ZW0pXG4gICAgKTtcbn1cblxuZnVuY3Rpb24gb2JqZWN0QXNzaWduKHRhcmdldCkge1xuICAgIGZvciAoXG4gICAgICAgIHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCxcbiAgICAgICAgICAgIHNvdXJjZXMgPSBBcnJheShfbGVuID4gMSA/IF9sZW4gLSAxIDogMCksXG4gICAgICAgICAgICBfa2V5ID0gMTtcbiAgICAgICAgX2tleSA8IF9sZW47XG4gICAgICAgIF9rZXkrK1xuICAgICkge1xuICAgICAgICBzb3VyY2VzW19rZXkgLSAxXSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICBpZiAoIXNvdXJjZXMubGVuZ3RoKSByZXR1cm4gdGFyZ2V0O1xuICAgIHZhciBzb3VyY2UgPSBzb3VyY2VzLnNoaWZ0KCk7XG5cbiAgICBpZiAoaXNPYmplY3QodGFyZ2V0KSAmJiBpc09iamVjdChzb3VyY2UpKSB7XG4gICAgICAgIGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHtcbiAgICAgICAgICAgIGlmIChpc09iamVjdChzb3VyY2Vba2V5XSkpIHtcbiAgICAgICAgICAgICAgICBpZiAoIXRhcmdldFtrZXldKSBPYmplY3QuYXNzaWduKHRhcmdldCwgX2RlZmluZVByb3BlcnR5KHt9LCBrZXksIHt9KSk7XG4gICAgICAgICAgICAgICAgb2JqZWN0QXNzaWduKHRhcmdldFtrZXldLCBzb3VyY2Vba2V5XSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24odGFyZ2V0LCBfZGVmaW5lUHJvcGVydHkoe30sIGtleSwgc291cmNlW2tleV0pKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gb2JqZWN0QXNzaWduLmFwcGx5KHVuZGVmaW5lZCwgW3RhcmdldF0uY29uY2F0KHNvdXJjZXMpKTtcbn1cblxuXG5cbm1vZHVsZS5leHBvcnRzLm9iamVjdEFzc2lnbiA9IG9iamVjdEFzc2lnbjsiLCJcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9QcmVzZXRTdHlsZU1hdGVyaWFsLmNzc1wiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9QcmVzZXRTdHlsZU1hdGVyaWFsLmNzc1wiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vUHJlc2V0U3R5bGVNYXRlcmlhbC5jc3NcIik7XG5cblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblxuXHRcdHZhciBsb2NhbHMgPSAoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0dmFyIGtleSwgaWR4ID0gMDtcblxuXHRcdFx0Zm9yKGtleSBpbiBhKSB7XG5cdFx0XHRcdGlmKCFiIHx8IGFba2V5XSAhPT0gYltrZXldKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlkeCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3Ioa2V5IGluIGIpIGlkeC0tO1xuXG5cdFx0XHRyZXR1cm4gaWR4ID09PSAwO1xuXHRcdH0oY29udGVudC5sb2NhbHMsIG5ld0NvbnRlbnQubG9jYWxzKSk7XG5cblx0XHRpZighbG9jYWxzKSB0aHJvdyBuZXcgRXJyb3IoJ0Fib3J0aW5nIENTUyBITVIgZHVlIHRvIGNoYW5nZWQgY3NzLW1vZHVsZXMgbG9jYWxzLicpO1xuXG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblxuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCIvKipcbiAqIEpTRnJhbWUgRXhhbXBsZXNcbiAqXG4gKiBDb3B5cmlnaHQgMjAwNy0gVG9tIE1pc2F3YSwgcml2ZXJzdW4ub3JnQGdtYWlsLmNvbVxuICogQ29weXJpZ2h0IDIwMDctIHdlYjJkcml2ZXIuY29tXG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weSBvZlxuICogdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGVcbiAqIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsXG4gKiBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlXG4gKiBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbyxcbiAqIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbFxuICogY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SIElNUExJRUQsXG4gKiAgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEFcbiAqIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUlxuICogQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLFxuICogV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUlxuICogSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cbiAqXG4gKi9cblxucmVxdWlyZSgnLi9QcmVzZXRTdHlsZU1hdGVyaWFsLmNzcycpO1xudmFyIE9iamVjdEFzc2lnbmVyPXJlcXVpcmUoJy4vT2JqZWN0QXNzaWduZXIuanMnKTtcblxuXG5mdW5jdGlvbiBnZXRTdHlsZShmQXByLCB1c2VyUGFyYW0pIHtcblxuICAgIHZhciBzcmNQYXJhbSA9IHtcbiAgICAgICAgYm9yZGVyOiB7XG4gICAgICAgICAgICBjb2xvcjogJ3RyYW5zcGFyZW50JyxcbiAgICAgICAgICAgIHdpZHRoOiAwLFxuICAgICAgICAgICAgcmFkaXVzOiA2LFxuXG4gICAgICAgIH0sXG4gICAgICAgIGNvbnRyb2w6IHtcbiAgICAgICAgICAgIG1heGltaXplV2l0aG91dFRpdGxlQmFyOiBmYWxzZSxcbiAgICAgICAgICAgIHJlc3RvcmVLZXk6ICdFc2NhcGUnLFxuICAgICAgICB9LFxuICAgICAgICB0aXRsZUJhcjoge1xuICAgICAgICAgICAgY29sb3I6ICd3aGl0ZScsXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAnYmxhY2snLFxuICAgICAgICAgICAgbGVmdE1hcmdpbjogMjAsXG4gICAgICAgICAgICBoZWlnaHQ6IDMwLFxuICAgICAgICAgICAgZm9udFNpemU6IDEyLFxuICAgICAgICAgICAgYnV0dG9uV2lkdGg6IDM2LFxuICAgICAgICAgICAgYnV0dG9uSGVpZ2h0OiAxNixcbiAgICAgICAgICAgIGJ1dHRvbkNvbG9yOiAnd2hpdGUnLFxuICAgICAgICAgICAgYnV0dG9uczogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgZmE6ICdmYXMgZmEtdGltZXMnLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnY2xvc2VCdXR0b24nLFxuICAgICAgICAgICAgICAgICAgICB2aXNpYmxlOiB0cnVlXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGZhOiAnZmFyIGZhLXdpbmRvdy1tYXhpbWl6ZScsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdtYXhpbWl6ZUJ1dHRvbicsXG4gICAgICAgICAgICAgICAgICAgIHZpc2libGU6IHRydWVcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgZmE6ICdmYXIgZmEtd2luZG93LXJlc3RvcmUnLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAncmVzdG9yZUJ1dHRvbicsXG4gICAgICAgICAgICAgICAgICAgIHZpc2libGU6IGZhbHNlXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGZhOiAnZmFyIGZhLXdpbmRvdy1taW5pbWl6ZScsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdtaW5pbWl6ZUJ1dHRvbicsXG4gICAgICAgICAgICAgICAgICAgIHZpc2libGU6IHRydWVcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgZmE6ICdmYXMgZmEtY2FyZXQtdXAnLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnZGVtaW5pbWl6ZUJ1dHRvbicsXG4gICAgICAgICAgICAgICAgICAgIHZpc2libGU6IGZhbHNlXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgYnV0dG9uc09uTGVmdDogW10sXG4gICAgICAgIH0sXG5cblxuICAgIH07XG5cbiAgICB2YXIgcGFyYW0gPSBzcmNQYXJhbTtcblxuICAgIGlmICh1c2VyUGFyYW0pIHtcbiAgICAgICAgLy9wYXJhbT1PYmplY3QuYXNzaWduKHt9LHNyY1BhcmFtLCB1c2VyUGFyYW0pO1xuICAgICAgICBPYmplY3RBc3NpZ25lci5vYmplY3RBc3NpZ24oc3JjUGFyYW0sIHVzZXJQYXJhbSk7XG5cbiAgICB9XG5cblxuICAgIGZBcHIuc2hvd1RpdGxlQmFyID0gdHJ1ZTtcbiAgICBmQXByLnNob3dDbG9zZUJ1dHRvbiA9IHRydWU7XG5cbiAgICBmQXByLnRpdGxlQmFyQ2FwdGlvbkZvbnRTaXplID0gcGFyYW0udGl0bGVCYXIuZm9udFNpemUgKyAncHgnOy8vJzEycHgnO1xuICAgIGZBcHIudGl0bGVCYXJDYXB0aW9uRm9udFdlaWdodCA9ICdub3JtYWwnO1xuICAgIGZBcHIudGl0bGVCYXJDYXB0aW9uTGVmdE1hcmdpbiA9IHBhcmFtLnRpdGxlQmFyLmxlZnRNYXJnaW4gKyAncHgnO1xuICAgIGZBcHIudGl0bGVCYXJDYXB0aW9uQ29sb3JEZWZhdWx0ID0gcGFyYW0udGl0bGVCYXIuY29sb3I7XG4gICAgZkFwci50aXRsZUJhckNhcHRpb25Db2xvckZvY3VzZWQgPSBwYXJhbS50aXRsZUJhci5jb2xvcjtcbiAgICBmQXByLnRpdGxlQmFyQ2FwdGlvblRleHRTaGFkb3cgPSBudWxsO1xuICAgIGZBcHIudGl0bGVCYXJDYXB0aW9uVGV4dEFsaWduID0gJ2xlZnQnO1xuXG4gICAgZkFwci50aXRsZUJhckhlaWdodCA9IHBhcmFtLnRpdGxlQmFyLmhlaWdodCArICdweCc7Ly8gJzUwcHgnO1xuXG4gICAgZkFwci50aXRsZUJhckNvbG9yRGVmYXVsdCA9IHBhcmFtLnRpdGxlQmFyLmJhY2tncm91bmQ7XG4gICAgZkFwci50aXRsZUJhckNvbG9yRm9jdXNlZCA9IHBhcmFtLnRpdGxlQmFyLmJhY2tncm91bmQ7XG5cbiAgICBmQXByLnRpdGxlQmFyQm9yZGVyQm90dG9tRGVmYXVsdCA9ICdzb2xpZCAwcHggI2FhYWFhYSc7XG4gICAgZkFwci50aXRsZUJhckJvcmRlckJvdHRvbUZvY3VzZWQgPSAnc29saWQgMHB4ICMxODgzZDcnO1xuXG4gICAgZkFwci5mcmFtZUJvcmRlclJhZGl1cyA9IHBhcmFtLmJvcmRlci5yYWRpdXMgKyAncHgnOy8vICc2cHgnO1xuXG4gICAgLy9ib3JkZXIgd2lkdGhcbiAgICBmQXByLmZyYW1lQm9yZGVyV2lkdGhEZWZhdWx0ID0gcGFyYW0uYm9yZGVyLndpZHRoICsgJ3B4JztcbiAgICBmQXByLmZyYW1lQm9yZGVyV2lkdGhGb2N1c2VkID0gcGFyYW0uYm9yZGVyLndpZHRoICsgJ3B4JztcblxuXG4gICAgLy9ib3JkZXIgY29sb3JcbiAgICBmQXByLmZyYW1lQm9yZGVyQ29sb3JEZWZhdWx0ID0gcGFyYW0uYm9yZGVyLmNvbG9yO1xuICAgIGZBcHIuZnJhbWVCb3JkZXJDb2xvckZvY3VzZWQgPSBwYXJhbS5ib3JkZXIuY29sb3I7XG5cbiAgICBmQXByLmZyYW1lQm9yZGVyU3R5bGUgPSAnc29saWQnO1xuXG4gICAgLy93aW5kb3cgc2hhZG93XG4gICAgZkFwci5mcmFtZUJveFNoYWRvdyA9IHBhcmFtLmJvcmRlci5zaGFkb3c7Ly8nMnB4IDJweCAxMHB4ICByZ2JhKDAsIDAsIDAsIDAuNSknO1xuXG4gICAgZkFwci5mcmFtZUJhY2tncm91bmRDb2xvciA9ICd0cmFuc3BhcmVudCc7XG5cbiAgICBmQXByLmZyYW1lQ29tcG9uZW50cyA9IG5ldyBBcnJheSgpO1xuXG4gICAgZkFwci5mcmFtZUhlaWdodEFkanVzdCA9IDA7Ly9kZWZhdWx0IGlzIDFcblxuICAgIGZBcHIuZ2V0VGl0bGVCYXJTdHlsZSA9IGZ1bmN0aW9uICgpIHtcblxuICAgICAgICBpZiAoZkFwci5mb2N1c2VkRnJhbWVPbmx5KSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHRpdGxlQmFyQ2xhc3NOYW1lRGVmYXVsdDogJyAnLFxuICAgICAgICAgICAgICAgIHRpdGxlQmFyQ2xhc3NOYW1lRm9jdXNlZDogJyAnXG4gICAgICAgICAgICB9O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICB0aXRsZUJhckNsYXNzTmFtZURlZmF1bHQ6ICcgJyxcbiAgICAgICAgICAgICAgICB0aXRsZUJhckNsYXNzTmFtZUZvY3VzZWQ6ICcgJ1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBmQXByLm9uSW5pdGlhbGl6ZSA9IGZ1bmN0aW9uICgpIHtcblxuICAgICAgICBhbGlnbkJ1dHRvbnMoZkFwciwgcGFyYW0sIGZhbHNlKTtcbiAgICAgICAgYWxpZ25CdXR0b25zKGZBcHIsIHBhcmFtLCB0cnVlKTtcblxuICAgIH07XG5cbiAgICAvL1xuXG4gICAgcmV0dXJuIGZBcHI7XG59XG5cbmZ1bmN0aW9uIGFsaWduQnV0dG9ucyhmQXByLCBwYXJhbSwgZnJvbUxlZnQpIHtcbiAgICB2YXIgcGFydHNCdWlsZGVyID0gZkFwci5nZXRQYXJ0c0J1aWxkZXIoKTtcbiAgICB2YXIgcmJ0WCA9IDA7XG4gICAgdmFyIGJ1dHRvbnM7XG5cbiAgICBpZiAoZnJvbUxlZnQpIHtcbiAgICAgICAgYnV0dG9ucyA9IHBhcmFtLnRpdGxlQmFyLmJ1dHRvbnNPbkxlZnQ7XG5cbiAgICB9IGVsc2Uge1xuICAgICAgICBidXR0b25zID0gcGFyYW0udGl0bGVCYXIuYnV0dG9ucztcbiAgICB9XG5cbiAgICBmb3IgKHZhciByYnRJZHggaW4gYnV0dG9ucykge1xuXG4gICAgICAgIHZhciByYnRTcmMgPSBidXR0b25zW3JidElkeF07XG5cbiAgICAgICAgdmFyIHJidCA9IHBhcnRzQnVpbGRlci5idWlsZFRleHRCdXR0b25BcHBlYXJhbmNlKCk7XG5cbiAgICAgICAgLy9jYXB0aW9uXG4gICAgICAgIHJidC5mYSA9IHJidFNyYy5mYTtcblxuICAgICAgICByYnQud2lkdGggPSBwYXJhbS50aXRsZUJhci5idXR0b25XaWR0aDtcbiAgICAgICAgcmJ0LmhlaWdodCA9IHBhcmFtLnRpdGxlQmFyLmJ1dHRvbkhlaWdodDtcblxuICAgICAgICByYnQuYm9yZGVyUmFkaXVzID0gMDtcbiAgICAgICAgcmJ0LmJvcmRlcldpZHRoID0gMDtcblxuICAgICAgICByYnQuYm9yZGVyQ29sb3JEZWZhdWx0ID0gJyNjNmM2YzYnO1xuICAgICAgICByYnQuYm9yZGVyQ29sb3JGb2N1c2VkID0gJyNmYzYxNWMnO1xuICAgICAgICByYnQuYm9yZGVyQ29sb3JIb3ZlcmVkID0gcmJ0LmJvcmRlckNvbG9yRm9jdXNlZDtcbiAgICAgICAgcmJ0LmJvcmRlckNvbG9yUHJlc3NlZCA9ICcjZTY0ODQyJztcblxuICAgICAgICByYnQuYm9yZGVyU3R5bGVEZWZhdWx0ID0gJ3NvbGlkJztcbiAgICAgICAgcmJ0LmJvcmRlclN0eWxlRm9jdXNlZCA9IHJidC5ib3JkZXJTdHlsZURlZmF1bHQ7XG4gICAgICAgIHJidC5ib3JkZXJTdHlsZUhvdmVyZWQgPSByYnQuYm9yZGVyU3R5bGVEZWZhdWx0O1xuICAgICAgICByYnQuYm9yZGVyU3R5bGVQcmVzc2VkID0gcmJ0LmJvcmRlclN0eWxlRGVmYXVsdDtcblxuICAgICAgICAvL2JhY2tncm91bmRcbiAgICAgICAgcmJ0LmJhY2tncm91bmRDb2xvckRlZmF1bHQgPSAndHJhbnNwYXJlbnQnO1xuICAgICAgICByYnQuYmFja2dyb3VuZENvbG9yRm9jdXNlZCA9ICd0cmFuc3BhcmVudCc7XG4gICAgICAgIHJidC5iYWNrZ3JvdW5kQ29sb3JIb3ZlcmVkID0gJ3RyYW5zcGFyZW50JztcbiAgICAgICAgcmJ0LmJhY2tncm91bmRDb2xvclByZXNzZWQgPSAndHJhbnNwYXJlbnQnO1xuXG4gICAgICAgIHZhciBjb2xvcnMgPSBnZXRTdWJDb2xvcihwYXJhbS50aXRsZUJhci5idXR0b25Db2xvcik7XG4gICAgICAgIHJidC5jYXB0aW9uQ29sb3JEZWZhdWx0ID0gcGFyYW0udGl0bGVCYXIuYnV0dG9uQ29sb3I7XG4gICAgICAgIHJidC5jYXB0aW9uQ29sb3JGb2N1c2VkID0gcGFyYW0udGl0bGVCYXIuYnV0dG9uQ29sb3I7XG4gICAgICAgIHJidC5jYXB0aW9uQ29sb3JIb3ZlcmVkID0gY29sb3JzLmhvdmVyZWQ7XG4gICAgICAgIHJidC5jYXB0aW9uQ29sb3JQcmVzc2VkID0gY29sb3JzLnByZXNzZWQ7XG5cbiAgICAgICAgcmJ0LmNhcHRpb25TaGlmdFlweCA9IDA7XG4gICAgICAgIHJidC5jYXB0aW9uRm9udFJhdGlvID0gMTtcblxuICAgICAgICB2YXIgcmJ0RWxlID0gcGFydHNCdWlsZGVyLmJ1aWxkVGV4dEJ1dHRvbihyYnQpO1xuXG4gICAgICAgIGlmIChyYnRTcmMudmlzaWJsZSkge1xuICAgICAgICAgICAgcmJ0RWxlLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAoZnJvbUxlZnQpIHtcbiAgICAgICAgICAgICAgICByYnRYIC09IHBhcmFtLnRpdGxlQmFyLmJ1dHRvbldpZHRoO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByYnRYICs9IHBhcmFtLnRpdGxlQmFyLmJ1dHRvbldpZHRoO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmJ0RWxlLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgdGl0bGVCYXJIZWlnaHQgPSBwYXJzZUludChmQXByLnRpdGxlQmFySGVpZ2h0KTtcblxuICAgICAgICB2YXIgcmJ0RWxlTGVmdCA9IHJidFg7XG5cbiAgICAgICAgLy9jb21wdXRlIHZlcnRpY2FsIGNlbnRlclxuXG4gICAgICAgIHZhciByYnRFbGVUb3AgPSAtdGl0bGVCYXJIZWlnaHQgKyAodGl0bGVCYXJIZWlnaHQgLSByYnQuaGVpZ2h0KSAvIDI7XG5cbiAgICAgICAgdmFyIHJidEVsZUFsaWduO1xuICAgICAgICBpZiAoZnJvbUxlZnQpIHtcbiAgICAgICAgICAgIHJidEVsZUFsaWduID0gJ0xFRlRfVE9QJztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJidEVsZUFsaWduID0gJ1JJR0hUX1RPUCc7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgbmRpdjtcbiAgICAgICAgaWYgKHJidFNyYy5jaGlsZE1lbnVIVE1MKSB7XG5cbiAgICAgICAgICAgIG5kaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIG5kaXYuaWQgPSByYnRTcmMubmFtZSArICdfY2hpbGRfbWVudSc7XG5cbiAgICAgICAgICAgIG5kaXYuaW5uZXJIVE1MID0gcmJ0U3JjLmNoaWxkTWVudUhUTUw7XG4gICAgICAgICAgICBuZGl2LnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcbiAgICAgICAgICAgIG5kaXYuc3R5bGUud2lkdGggPSAocmJ0U3JjLmNoaWxkTWVudVdpZHRoID8gcmJ0U3JjLmNoaWxkTWVudVdpZHRoIDogMjAwKSArICdweCc7XG4gICAgICAgICAgICBuZGl2LnN0eWxlLnRvcCA9IChwYXJzZUludChyYnRFbGUuc3R5bGUudG9wLCAxMCkgKyBwYXJzZUludChyYnRFbGUuc3R5bGUuaGVpZ2h0LCAxMCkgLyAyICsgdGl0bGVCYXJIZWlnaHQgLyAyKSArICdweCc7XG4gICAgICAgICAgICBuZGl2LnN0eWxlLmxlZnQgPSByYnRFbGUuc3R5bGUubGVmdDtcbiAgICAgICAgICAgIG5kaXYuc3R5bGUuZGlzcGxheSA9ICdub25lJztcblxuICAgICAgICAgICAgcmJ0RWxlLmFwcGVuZENoaWxkKG5kaXYpO1xuICAgICAgICB9XG5cblxuICAgICAgICBmQXByLmFkZEZyYW1lQ29tcG9uZW50KHJidFNyYy5uYW1lLCByYnRFbGUsIHJidEVsZUxlZnQsIHJidEVsZVRvcCwgcmJ0RWxlQWxpZ24sIHtjaGlsZE1lbnU6IG5kaXZ9KTtcblxuICAgICAgICBpZiAoZnJvbUxlZnQpIHtcbiAgICAgICAgICAgIHJidFggKz0gcGFyYW0udGl0bGVCYXIuYnV0dG9uV2lkdGg7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByYnRYICs9IC1wYXJhbS50aXRsZUJhci5idXR0b25XaWR0aDtcbiAgICAgICAgfVxuXG4gICAgfVxuXG5cbn1cblxuXG5mdW5jdGlvbiBnZXRTdWJDb2xvcihjb2xvcikge1xuXG4gICAgdmFyIGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuICAgIGNhbnZhcy5oZWlnaHQgPSAxO1xuICAgIGNhbnZhcy53aWR0aCA9IDE7XG4gICAgdmFyIGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgIGN0eC5maWxsU3R5bGUgPSBjb2xvcjtcbiAgICBjdHguZmlsbFJlY3QoMCwgMCwgMSwgMSk7XG4gICAgdmFyIGNvbG9yRGF0YSA9IGN0eC5nZXRJbWFnZURhdGEoMCwgMCwgMSwgMSkuZGF0YTtcblxuICAgIHZhciByID0gY29sb3JEYXRhWzBdO1xuICAgIHZhciBnID0gY29sb3JEYXRhWzFdO1xuICAgIHZhciBiID0gY29sb3JEYXRhWzJdO1xuICAgIHZhciBhbHBoYSA9IGNvbG9yRGF0YVszXSAvIDI1NTtcbiAgICB2YXIgYWxwaGEyID0gYWxwaGEgKiAwLjg1O1xuICAgIHZhciBhbHBoYTMgPSBhbHBoYSAqIDAuNzU7XG5cbiAgICB2YXIgcmV0ID0gJ3JnYignICsgciArICcsJyArIGcgKyAnLCcgKyBiICsgJywnICsgYWxwaGEyICsgJyknO1xuICAgIHZhciByZXQyID0gJ3JnYignICsgciArICcsJyArIGcgKyAnLCcgKyBiICsgJywnICsgYWxwaGEyICsgJyknO1xuICAgIHZhciByZXQzID0gJ3JnYignICsgciArICcsJyArIGcgKyAnLCcgKyBiICsgJywnICsgYWxwaGEzICsgJyknO1xuICAgIHJldHVybiB7c3JjOiByZXQsIGhvdmVyZWQ6IHJldDIsIHByZXNzZWQ6IHJldDN9O1xufVxuXG4vL1xuLy8gZnVuY3Rpb24gaXNPYmplY3QoaXRlbSkge1xuLy8gICAgIHJldHVybiAoaXRlbSAmJiB0eXBlb2YgaXRlbSA9PT0gJ29iamVjdCcgJiYgIUFycmF5LmlzQXJyYXkoaXRlbSkpO1xuLy8gfVxuLy9cbi8vIGZ1bmN0aW9uIG9iamVjdEFzc2lnbih0YXJnZXQsIC4uLnNvdXJjZXMpIHtcbi8vICAgICBpZiAoIXNvdXJjZXMubGVuZ3RoKSByZXR1cm4gdGFyZ2V0O1xuLy8gICAgIGNvbnN0IHNvdXJjZSA9IHNvdXJjZXMuc2hpZnQoKTtcbi8vXG4vLyAgICAgaWYgKGlzT2JqZWN0KHRhcmdldCkgJiYgaXNPYmplY3Qoc291cmNlKSkge1xuLy8gICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiBzb3VyY2UpIHtcbi8vICAgICAgICAgICAgIGlmIChpc09iamVjdChzb3VyY2Vba2V5XSkpIHtcbi8vICAgICAgICAgICAgICAgICBpZiAoIXRhcmdldFtrZXldKSBPYmplY3QuYXNzaWduKHRhcmdldCwge1trZXldOiB7fX0pO1xuLy8gICAgICAgICAgICAgICAgIG9iamVjdEFzc2lnbih0YXJnZXRba2V5XSwgc291cmNlW2tleV0pO1xuLy8gICAgICAgICAgICAgfSBlbHNlIHtcbi8vICAgICAgICAgICAgICAgICBPYmplY3QuYXNzaWduKHRhcmdldCwge1trZXldOiBzb3VyY2Vba2V5XX0pO1xuLy8gICAgICAgICAgICAgfVxuLy8gICAgICAgICB9XG4vLyAgICAgfVxuLy8gICAgIHJldHVybiBvYmplY3RBc3NpZ24odGFyZ2V0LCAuLi5zb3VyY2VzKTtcbi8vIH1cblxuLy9cbi8vIHZhciBfdHlwZW9mID1cbi8vICAgICB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIlxuLy8gICAgICAgICA/IGZ1bmN0aW9uIChvYmopIHtcbi8vICAgICAgICAgICAgIHJldHVybiB0eXBlb2Ygb2JqO1xuLy8gICAgICAgICB9XG4vLyAgICAgICAgIDogZnVuY3Rpb24gKG9iaikge1xuLy8gICAgICAgICAgICAgcmV0dXJuIG9iaiAmJlxuLy8gICAgICAgICAgICAgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmXG4vLyAgICAgICAgICAgICBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJlxuLy8gICAgICAgICAgICAgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlXG4vLyAgICAgICAgICAgICAgICAgPyBcInN5bWJvbFwiXG4vLyAgICAgICAgICAgICAgICAgOiB0eXBlb2Ygb2JqO1xuLy8gICAgICAgICB9O1xuLy9cbi8vIGZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHtcbi8vICAgICBpZiAoa2V5IGluIG9iaikge1xuLy8gICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHtcbi8vICAgICAgICAgICAgIHZhbHVlOiB2YWx1ZSxcbi8vICAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4vLyAgICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4vLyAgICAgICAgICAgICB3cml0YWJsZTogdHJ1ZVxuLy8gICAgICAgICB9KTtcbi8vICAgICB9IGVsc2Uge1xuLy8gICAgICAgICBvYmpba2V5XSA9IHZhbHVlO1xuLy8gICAgIH1cbi8vICAgICByZXR1cm4gb2JqO1xuLy8gfVxuLy9cbi8vIGZ1bmN0aW9uIGlzT2JqZWN0KGl0ZW0pIHtcbi8vICAgICByZXR1cm4gKFxuLy8gICAgICAgICBpdGVtICYmXG4vLyAgICAgICAgICh0eXBlb2YgaXRlbSA9PT0gXCJ1bmRlZmluZWRcIiA/IFwidW5kZWZpbmVkXCIgOiBfdHlwZW9mKGl0ZW0pKSA9PT0gXCJvYmplY3RcIiAmJlxuLy8gICAgICAgICAhQXJyYXkuaXNBcnJheShpdGVtKVxuLy8gICAgICk7XG4vLyB9XG4vL1xuLy8gZnVuY3Rpb24gb2JqZWN0QXNzaWduKHRhcmdldCkge1xuLy8gICAgIGZvciAoXG4vLyAgICAgICAgIHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCxcbi8vICAgICAgICAgICAgIHNvdXJjZXMgPSBBcnJheShfbGVuID4gMSA/IF9sZW4gLSAxIDogMCksXG4vLyAgICAgICAgICAgICBfa2V5ID0gMTtcbi8vICAgICAgICAgX2tleSA8IF9sZW47XG4vLyAgICAgICAgIF9rZXkrK1xuLy8gICAgICkge1xuLy8gICAgICAgICBzb3VyY2VzW19rZXkgLSAxXSA9IGFyZ3VtZW50c1tfa2V5XTtcbi8vICAgICB9XG4vL1xuLy8gICAgIGlmICghc291cmNlcy5sZW5ndGgpIHJldHVybiB0YXJnZXQ7XG4vLyAgICAgdmFyIHNvdXJjZSA9IHNvdXJjZXMuc2hpZnQoKTtcbi8vXG4vLyAgICAgaWYgKGlzT2JqZWN0KHRhcmdldCkgJiYgaXNPYmplY3Qoc291cmNlKSkge1xuLy8gICAgICAgICBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7XG4vLyAgICAgICAgICAgICBpZiAoaXNPYmplY3Qoc291cmNlW2tleV0pKSB7XG4vLyAgICAgICAgICAgICAgICAgaWYgKCF0YXJnZXRba2V5XSkgT2JqZWN0LmFzc2lnbih0YXJnZXQsIF9kZWZpbmVQcm9wZXJ0eSh7fSwga2V5LCB7fSkpO1xuLy8gICAgICAgICAgICAgICAgIG9iamVjdEFzc2lnbih0YXJnZXRba2V5XSwgc291cmNlW2tleV0pO1xuLy8gICAgICAgICAgICAgfSBlbHNlIHtcbi8vICAgICAgICAgICAgICAgICBPYmplY3QuYXNzaWduKHRhcmdldCwgX2RlZmluZVByb3BlcnR5KHt9LCBrZXksIHNvdXJjZVtrZXldKSk7XG4vLyAgICAgICAgICAgICB9XG4vLyAgICAgICAgIH1cbi8vICAgICB9XG4vLyAgICAgcmV0dXJuIG9iamVjdEFzc2lnbi5hcHBseSh1bmRlZmluZWQsIFt0YXJnZXRdLmNvbmNhdChzb3VyY2VzKSk7XG4vLyB9XG4vL1xuXG5tb2R1bGUuZXhwb3J0cy5nZXRTdHlsZSA9IGdldFN0eWxlOyIsIlxudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL1ByZXNldFN0eWxlUG9wdXAuY3NzXCIpO1xuXG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcblxudmFyIHRyYW5zZm9ybTtcbnZhciBpbnNlcnRJbnRvO1xuXG5cblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxuXG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxub3B0aW9ucy5pbnNlcnRJbnRvID0gdW5kZWZpbmVkO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL1ByZXNldFN0eWxlUG9wdXAuY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9QcmVzZXRTdHlsZVBvcHVwLmNzc1wiKTtcblxuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXG5cdFx0dmFyIGxvY2FscyA9IChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHR2YXIga2V5LCBpZHggPSAwO1xuXG5cdFx0XHRmb3Ioa2V5IGluIGEpIHtcblx0XHRcdFx0aWYoIWIgfHwgYVtrZXldICE9PSBiW2tleV0pIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWR4Kys7XG5cdFx0XHR9XG5cblx0XHRcdGZvcihrZXkgaW4gYikgaWR4LS07XG5cblx0XHRcdHJldHVybiBpZHggPT09IDA7XG5cdFx0fShjb250ZW50LmxvY2FscywgbmV3Q29udGVudC5sb2NhbHMpKTtcblxuXHRcdGlmKCFsb2NhbHMpIHRocm93IG5ldyBFcnJvcignQWJvcnRpbmcgQ1NTIEhNUiBkdWUgdG8gY2hhbmdlZCBjc3MtbW9kdWxlcyBsb2NhbHMuJyk7XG5cblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsIi8qKlxuICogSlNGcmFtZSBFeGFtcGxlc1xuICpcbiAqIENvcHlyaWdodCAyMDA3LSBUb20gTWlzYXdhLCByaXZlcnN1bi5vcmdAZ21haWwuY29tXG4gKiBDb3B5cmlnaHQgMjAwNy0gd2ViMmRyaXZlci5jb21cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5IG9mXG4gKiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZVxuICogU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSxcbiAqIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGVcbiAqIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLFxuICogc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsXG4gKiBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1IgSU1QTElFRCxcbiAqICBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQVxuICogUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SXG4gKiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksXG4gKiBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SXG4gKiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuICpcbiAqL1xuXG5cbnJlcXVpcmUoJy4vUHJlc2V0U3R5bGVQb3B1cC5jc3MnKTtcbmZ1bmN0aW9uIGdldFN0eWxlKGZBcHIpIHtcblxuXG4gICAgZkFwci5zaG93VGl0bGVCYXIgPSBmYWxzZTtcbiAgICBmQXByLnNob3dDbG9zZUJ1dHRvbiA9IHRydWU7XG5cblxuICAgIGZBcHIudGl0bGVCYXJDYXB0aW9uRm9udFNpemUgPSAnMTJweCc7XG4gICAgZkFwci50aXRsZUJhckNhcHRpb25Gb250V2VpZ2h0ID0gJ25vcm1hbCc7XG4gICAgZkFwci50aXRsZUJhckNhcHRpb25MZWZ0TWFyZ2luID0gJzEwcHgnO1xuICAgIGZBcHIudGl0bGVCYXJDYXB0aW9uQ29sb3JEZWZhdWx0ID0gJyM0ZDQ5NGQnO1xuICAgIGZBcHIudGl0bGVCYXJDYXB0aW9uQ29sb3JGb2N1c2VkID0gJyM0ZDQ5NGQnO1xuXG4gICAgZkFwci50aXRsZUJhckhlaWdodCA9ICc1cHgnO1xuXG4gICAgZkFwci50aXRsZUJhckNvbG9yRGVmYXVsdCA9ICd3aGl0ZSc7XG4gICAgZkFwci50aXRsZUJhckNvbG9yRm9jdXNlZCA9ICd3aGl0ZSc7XG5cbiAgICBmQXByLnRpdGxlQmFyQm9yZGVyQm90dG9tRGVmYXVsdCA9IG51bGw7XG4gICAgZkFwci50aXRsZUJhckJvcmRlckJvdHRvbUZvY3VzZWQgPSBudWxsO1xuXG4gICAgZkFwci5mcmFtZUJvcmRlclJhZGl1cyA9ICc2cHgnO1xuXG4gICAgLy9ib3JkZXIgd2lkdGhcbiAgICBmQXByLmZyYW1lQm9yZGVyV2lkdGhEZWZhdWx0ID0gJzFweCc7XG4gICAgZkFwci5mcmFtZUJvcmRlcldpZHRoRm9jdXNlZCA9ICcxcHgnO1xuXG5cbiAgICAvL2JvcmRlciBjb2xvclxuICAgIGZBcHIuZnJhbWVCb3JkZXJDb2xvckRlZmF1bHQgPSAnI2FhYWFhYSc7XG4gICAgZkFwci5mcmFtZUJvcmRlckNvbG9yRm9jdXNlZCA9ICcjYWFhYWFhJztcblxuICAgIGZBcHIuZnJhbWVCb3JkZXJTdHlsZSA9ICdzb2xpZCc7XG5cbiAgICAvL3dpbmRvdyBzaGFkb3dcbiAgICBmQXByLmZyYW1lQm94U2hhZG93ID0gJzJweCAycHggNXB4ICByZ2JhKDAsIDAsIDAsIDAuNSknO1xuXG4gICAgZkFwci5mcmFtZUJhY2tncm91bmRDb2xvciA9ICd3aGl0ZSc7XG5cblxuICAgIGZBcHIuZnJhbWVDb21wb25lbnRzID0gbmV3IEFycmF5KCk7XG5cbiAgICAvL2FkanVzdG1lbnQgdmFsdWVcbiAgICBmQXByLmZyYW1lSGVpZ2h0QWRqdXN0ID0gMjsvL2RlZmF1bHQgaXMgMVxuICAgIGZBcHIuZ2V0VGl0bGVCYXJTdHlsZSA9IGZ1bmN0aW9uICgpIHtcblxuICAgICAgICBpZiAoZkFwci5mb2N1c2VkRnJhbWVPbmx5KSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHRpdGxlQmFyQ2xhc3NOYW1lRGVmYXVsdDogJ2pzZnJhbWUtcHJlc2V0LXN0eWxlLXBvcHVwLWZvY3VzZWQnLFxuICAgICAgICAgICAgICAgIHRpdGxlQmFyQ2xhc3NOYW1lRm9jdXNlZDogJ2pzZnJhbWUtcHJlc2V0LXN0eWxlLXBvcHVwLWZvY3VzZWQnXG4gICAgICAgICAgICB9O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICB0aXRsZUJhckNsYXNzTmFtZURlZmF1bHQ6ICdqc2ZyYW1lLXByZXNldC1zdHlsZS1wb3B1cC1kZWZhdWx0JyxcbiAgICAgICAgICAgICAgICB0aXRsZUJhckNsYXNzTmFtZUZvY3VzZWQ6ICdqc2ZyYW1lLXByZXNldC1zdHlsZS1wb3B1cC1mb2N1c2VkJ1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgZkFwci5vbkluaXRpYWxpemUgPSBmdW5jdGlvbiAoKSB7XG5cblxuICAgICAgICB2YXIgcGFydHNCdWlsZGVyID0gZkFwci5nZXRQYXJ0c0J1aWxkZXIoKTtcblxuXG4gICAgICAgIC8vY29uZmlndXJlIGNsb3NlIGJ1dHRvbiBhcHBlYXJhbmNlW2JlZ2luXS8vLy8vLy8vLy8vLy8vXG5cbiAgICAgICAgdmFyIGNyb3NzTWFyazAgPSAnXFx1Mjc0Yyc7XG4gICAgICAgIHZhciBjcm9zc01hcmsxID0gJ1xcdTI3MTYnO1xuICAgICAgICB2YXIgY3Jvc3NNYXJrMiA9ICdcXHUyNzRlJztcbiAgICAgICAgdmFyIENST1NTX01BUksgPSBjcm9zc01hcmsxO1xuXG5cbiAgICAgICAgdmFyIGNiQXByID0gcGFydHNCdWlsZGVyLmJ1aWxkVGV4dEJ1dHRvbkFwcGVhcmFuY2UoKTtcblxuICAgICAgICBjYkFwci53aWR0aCA9IDIwO1xuICAgICAgICBjYkFwci5oZWlnaHQgPSAyMDtcblxuXG4gICAgICAgIGNiQXByLmJvcmRlclJhZGl1cyA9IDEwO1xuICAgICAgICBjYkFwci5ib3JkZXJXaWR0aCA9IDE7XG5cbiAgICAgICAgY2JBcHIuYm9yZGVyQ29sb3JEZWZhdWx0ID0gJyNjY2NjY2MnO1xuICAgICAgICBjYkFwci5ib3JkZXJDb2xvckZvY3VzZWQgPSAnI2NjY2NjYyc7XG4gICAgICAgIGNiQXByLmJvcmRlckNvbG9ySG92ZXJlZCA9ICcjZGRkZGRkJztcbiAgICAgICAgY2JBcHIuYm9yZGVyQ29sb3JQcmVzc2VkID0gJyNlZWVlZWUnO1xuXG4gICAgICAgIGNiQXByLmJvcmRlclN0eWxlRGVmYXVsdCA9ICdzb2xpZCc7XG4gICAgICAgIGNiQXByLmJvcmRlclN0eWxlRm9jdXNlZCA9IGNiQXByLmJvcmRlclN0eWxlRGVmYXVsdDtcbiAgICAgICAgY2JBcHIuYm9yZGVyU3R5bGVIb3ZlcmVkID0gY2JBcHIuYm9yZGVyU3R5bGVEZWZhdWx0O1xuICAgICAgICBjYkFwci5ib3JkZXJTdHlsZVByZXNzZWQgPSBjYkFwci5ib3JkZXJTdHlsZURlZmF1bHQ7XG5cbiAgICAgICAgLy9iYWNrZ3JvdW5kXG4gICAgICAgIGNiQXByLmJhY2tncm91bmRDb2xvckRlZmF1bHQgPSAnd2hpdGUnO1xuICAgICAgICBjYkFwci5iYWNrZ3JvdW5kQ29sb3JGb2N1c2VkID0gJ3doaXRlJztcbiAgICAgICAgY2JBcHIuYmFja2dyb3VuZENvbG9ySG92ZXJlZCA9ICcjZWVlZWVlJztcbiAgICAgICAgY2JBcHIuYmFja2dyb3VuZENvbG9yUHJlc3NlZCA9ICcjZGRkZGRkJztcblxuICAgICAgICBjYkFwci5iYWNrZ3JvdW5kQm94U2hhZG93ID0gJzJweCAycHggNXB4ICByZ2JhKDAsIDAsIDAsIDAuNSknO1xuXG4gICAgICAgIC8vY2FwdGlvblxuICAgICAgICBjYkFwci5jYXB0aW9uID0gQ1JPU1NfTUFSSztcblxuICAgICAgICBjYkFwci5jYXB0aW9uQ29sb3JEZWZhdWx0ID0gJ2JsYWNrJztcbiAgICAgICAgY2JBcHIuY2FwdGlvbkNvbG9yRm9jdXNlZCA9ICdibGFjayc7XG4gICAgICAgIGNiQXByLmNhcHRpb25Db2xvckhvdmVyZWQgPSAnd2hpdGUnO1xuICAgICAgICBjYkFwci5jYXB0aW9uQ29sb3JQcmVzc2VkID0gJ3doaXRlJztcblxuICAgICAgICBjYkFwci5jYXB0aW9uU2hpZnRZcHggPSAxO1xuICAgICAgICBjYkFwci5jYXB0aW9uRm9udFJhdGlvID0gMC42O1xuXG4gICAgICAgIHZhciBjbG9zZUJ0bkVsZSA9IHBhcnRzQnVpbGRlci5idWlsZFRleHRCdXR0b24oY2JBcHIpO1xuICAgICAgICB2YXIgZWxlTGVmdCA9IDEwO1xuICAgICAgICB2YXIgZWxlVG9wID0gLTYgLSBwYXJzZUludChmQXByLnRpdGxlQmFySGVpZ2h0KTtcbiAgICAgICAgdmFyIGVsZUFsaWduID0gJ1JJR0hUX1RPUCc7XG5cbiAgICAgICAgLy8gJ2Nsb3NlQnV0dG9uJyBpcyBhIHNwZWNpYWwgbmFtZVxuICAgICAgICBmQXByLmFkZEZyYW1lQ29tcG9uZW50KCdjbG9zZUJ1dHRvbicsIGNsb3NlQnRuRWxlLCBlbGVMZWZ0LCBlbGVUb3AsIGVsZUFsaWduKTtcblxuICAgICAgICAvL2NvbmZpZ3VyZSBjbG9zZSBidXR0b24gYXBwZWFyYW5jZVtlbmRdLy8vLy8vLy8vLy8vLy9cblxuXG4gICAgfTtcbiAgICAvL1xuXG4gICAgcmV0dXJuIGZBcHI7XG5cbiAgICByZXR1cm4gZkFwcjtcbn1cblxuXG5tb2R1bGUuZXhwb3J0cy5nZXRTdHlsZSA9IGdldFN0eWxlOyIsIlxudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL1ByZXNldFN0eWxlUmVkc3RvbmUuY3NzXCIpO1xuXG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcblxudmFyIHRyYW5zZm9ybTtcbnZhciBpbnNlcnRJbnRvO1xuXG5cblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxuXG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxub3B0aW9ucy5pbnNlcnRJbnRvID0gdW5kZWZpbmVkO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL1ByZXNldFN0eWxlUmVkc3RvbmUuY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9QcmVzZXRTdHlsZVJlZHN0b25lLmNzc1wiKTtcblxuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXG5cdFx0dmFyIGxvY2FscyA9IChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHR2YXIga2V5LCBpZHggPSAwO1xuXG5cdFx0XHRmb3Ioa2V5IGluIGEpIHtcblx0XHRcdFx0aWYoIWIgfHwgYVtrZXldICE9PSBiW2tleV0pIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWR4Kys7XG5cdFx0XHR9XG5cblx0XHRcdGZvcihrZXkgaW4gYikgaWR4LS07XG5cblx0XHRcdHJldHVybiBpZHggPT09IDA7XG5cdFx0fShjb250ZW50LmxvY2FscywgbmV3Q29udGVudC5sb2NhbHMpKTtcblxuXHRcdGlmKCFsb2NhbHMpIHRocm93IG5ldyBFcnJvcignQWJvcnRpbmcgQ1NTIEhNUiBkdWUgdG8gY2hhbmdlZCBjc3MtbW9kdWxlcyBsb2NhbHMuJyk7XG5cblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsIi8qKlxuICogSlNGcmFtZSBFeGFtcGxlc1xuICpcbiAqIENvcHlyaWdodCAyMDA3LSBUb20gTWlzYXdhLCByaXZlcnN1bi5vcmdAZ21haWwuY29tXG4gKiBDb3B5cmlnaHQgMjAwNy0gd2ViMmRyaXZlci5jb21cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5IG9mXG4gKiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZVxuICogU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSxcbiAqIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGVcbiAqIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLFxuICogc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsXG4gKiBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1IgSU1QTElFRCxcbiAqICBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQVxuICogUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SXG4gKiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksXG4gKiBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SXG4gKiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuICpcbiAqL1xuXG5yZXF1aXJlKCcuL1ByZXNldFN0eWxlUmVkc3RvbmUuY3NzJyk7XG5cbmZ1bmN0aW9uIGdldFN0eWxlKGZBcHIpIHtcblxuICAgIGZBcHIuc2hvd1RpdGxlQmFyID0gdHJ1ZTtcbiAgICBmQXByLnNob3dDbG9zZUJ1dHRvbiA9IHRydWU7XG5cbiAgICBmQXByLnRpdGxlQmFyQ2FwdGlvbkZvbnRTaXplID0gJzEycHgnO1xuICAgIGZBcHIudGl0bGVCYXJDYXB0aW9uRm9udFdlaWdodCA9ICdub3JtYWwnO1xuICAgIGZBcHIudGl0bGVCYXJDYXB0aW9uTGVmdE1hcmdpbiA9ICcxMHB4JztcbiAgICBmQXByLnRpdGxlQmFyQ2FwdGlvbkNvbG9yRGVmYXVsdCA9ICcjOWI5YTliJztcbiAgICBmQXByLnRpdGxlQmFyQ2FwdGlvbkNvbG9yRm9jdXNlZCA9ICcjNGQ0OTRkJztcblxuICAgIGZBcHIudGl0bGVCYXJIZWlnaHQgPSAnMzBweCc7XG5cbiAgICBmQXByLnRpdGxlQmFyQ29sb3JEZWZhdWx0ID0gJ3doaXRlJztcbiAgICBmQXByLnRpdGxlQmFyQ29sb3JGb2N1c2VkID0gJ3doaXRlJztcblxuICAgIGZBcHIudGl0bGVCYXJCb3JkZXJCb3R0b21EZWZhdWx0ID0gJ3NvbGlkIDFweCAjYWFhYWFhJztcbiAgICBmQXByLnRpdGxlQmFyQm9yZGVyQm90dG9tRm9jdXNlZCA9ICdzb2xpZCAxcHggIzE4ODNkNyc7XG5cbiAgICBmQXByLmZyYW1lQm9yZGVyUmFkaXVzID0gJzBweCc7XG5cbiAgICAvL2JvcmRlciB3aWR0aFxuICAgIGZBcHIuZnJhbWVCb3JkZXJXaWR0aERlZmF1bHQgPSAnMXB4JztcbiAgICBmQXByLmZyYW1lQm9yZGVyV2lkdGhGb2N1c2VkID0gJzFweCc7XG5cblxuICAgIC8vYm9yZGVyIGNvbG9yXG4gICAgZkFwci5mcmFtZUJvcmRlckNvbG9yRGVmYXVsdCA9ICcjYWFhYWFhJztcbiAgICBmQXByLmZyYW1lQm9yZGVyQ29sb3JGb2N1c2VkID0gJyMxODgzZDcnO1xuXG4gICAgZkFwci5mcmFtZUJvcmRlclN0eWxlID0gJ3NvbGlkJztcblxuICAgIC8vd2luZG93IHNoYWRvd1xuICAgIGZBcHIuZnJhbWVCb3hTaGFkb3cgPSBudWxsO1xuXG4gICAgZkFwci5mcmFtZUJhY2tncm91bmRDb2xvciA9ICd0cmFuc3BhcmVudCc7XG5cblxuICAgIGZBcHIuZnJhbWVDb21wb25lbnRzID0gbmV3IEFycmF5KCk7XG5cbiAgICAvL2FkanVzdG1lbnQgdmFsdWVcbiAgICBmQXByLmZyYW1lSGVpZ2h0QWRqdXN0ID0gMDsvL2RlZmF1bHQgaXMgMVxuXG4gICAgZkFwci5nZXRUaXRsZUJhclN0eWxlID0gZnVuY3Rpb24gKCkge1xuXG4gICAgICAgIGlmIChmQXByLmZvY3VzZWRGcmFtZU9ubHkpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgdGl0bGVCYXJDbGFzc05hbWVEZWZhdWx0OiAnanNmcmFtZS1wcmVzZXQtc3R5bGUtcmVkc3RvbmUtZm9jdXNlZCcsXG4gICAgICAgICAgICAgICAgdGl0bGVCYXJDbGFzc05hbWVGb2N1c2VkOiAnanNmcmFtZS1wcmVzZXQtc3R5bGUtcmVkc3RvbmUtZm9jdXNlZCdcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHRpdGxlQmFyQ2xhc3NOYW1lRGVmYXVsdDogJ2pzZnJhbWUtcHJlc2V0LXN0eWxlLXJlZHN0b25lLWRlZmF1bHQnLFxuICAgICAgICAgICAgICAgIHRpdGxlQmFyQ2xhc3NOYW1lRm9jdXNlZDogJ2pzZnJhbWUtcHJlc2V0LXN0eWxlLXJlZHN0b25lLWZvY3VzZWQnXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIGZBcHIub25Jbml0aWFsaXplID0gZnVuY3Rpb24gKCkge1xuXG5cbiAgICAgICAgdmFyIHBhcnRzQnVpbGRlciA9IGZBcHIuZ2V0UGFydHNCdWlsZGVyKCk7XG5cblxuICAgICAgICB7XG4gICAgICAgICAgICAvL2NvbmZpZ3VyZSBjbG9zZSBidXR0b24gYXBwZWFyYW5jZVtiZWdpbl0vLy8vLy8vLy8vLy8vL1xuXG4gICAgICAgICAgICB2YXIgQ1JPU1NfTUFSSyA9ICdcXHUyNTczJztcblxuICAgICAgICAgICAgdmFyIGNiQXByID0gcGFydHNCdWlsZGVyLmJ1aWxkVGV4dEJ1dHRvbkFwcGVhcmFuY2UoKTtcblxuICAgICAgICAgICAgY2JBcHIud2lkdGggPSA0NTtcbiAgICAgICAgICAgIGNiQXByLmhlaWdodCA9IDI4O1xuXG5cbiAgICAgICAgICAgIGNiQXByLmJvcmRlclJhZGl1cyA9IDA7XG4gICAgICAgICAgICBjYkFwci5ib3JkZXJXaWR0aCA9IDA7XG5cbiAgICAgICAgICAgIGNiQXByLmJvcmRlckNvbG9yRGVmYXVsdCA9ICcjYzZjNmM2JztcbiAgICAgICAgICAgIGNiQXByLmJvcmRlckNvbG9yRm9jdXNlZCA9ICcjZmM2MTVjJztcbiAgICAgICAgICAgIGNiQXByLmJvcmRlckNvbG9ySG92ZXJlZCA9IGNiQXByLmJvcmRlckNvbG9yRm9jdXNlZDtcbiAgICAgICAgICAgIGNiQXByLmJvcmRlckNvbG9yUHJlc3NlZCA9ICcjZTY0ODQyJztcblxuICAgICAgICAgICAgY2JBcHIuYm9yZGVyU3R5bGVEZWZhdWx0ID0gJ3NvbGlkJztcbiAgICAgICAgICAgIGNiQXByLmJvcmRlclN0eWxlRm9jdXNlZCA9IGNiQXByLmJvcmRlclN0eWxlRGVmYXVsdDtcbiAgICAgICAgICAgIGNiQXByLmJvcmRlclN0eWxlSG92ZXJlZCA9IGNiQXByLmJvcmRlclN0eWxlRGVmYXVsdDtcbiAgICAgICAgICAgIGNiQXByLmJvcmRlclN0eWxlUHJlc3NlZCA9IGNiQXByLmJvcmRlclN0eWxlRGVmYXVsdDtcblxuICAgICAgICAgICAgLy9iYWNrZ3JvdW5kXG4gICAgICAgICAgICBjYkFwci5iYWNrZ3JvdW5kQ29sb3JEZWZhdWx0ID0gJ3doaXRlJztcbiAgICAgICAgICAgIGNiQXByLmJhY2tncm91bmRDb2xvckZvY3VzZWQgPSAnd2hpdGUnO1xuICAgICAgICAgICAgY2JBcHIuYmFja2dyb3VuZENvbG9ySG92ZXJlZCA9ICcjZTgxMTIzJztcbiAgICAgICAgICAgIGNiQXByLmJhY2tncm91bmRDb2xvclByZXNzZWQgPSAnI2YxNzA3YSc7XG5cbiAgICAgICAgICAgIC8vY2FwdGlvblxuICAgICAgICAgICAgY2JBcHIuY2FwdGlvbiA9IENST1NTX01BUks7XG5cbiAgICAgICAgICAgIGNiQXByLmNhcHRpb25Db2xvckRlZmF1bHQgPSAnIzliOWE5Yic7XG4gICAgICAgICAgICBjYkFwci5jYXB0aW9uQ29sb3JGb2N1c2VkID0gJ2JsYWNrJztcbiAgICAgICAgICAgIGNiQXByLmNhcHRpb25Db2xvckhvdmVyZWQgPSAnd2hpdGUnO1xuICAgICAgICAgICAgY2JBcHIuY2FwdGlvbkNvbG9yUHJlc3NlZCA9ICd3aGl0ZSc7XG5cbiAgICAgICAgICAgIGNiQXByLmNhcHRpb25TaGlmdFlweCA9IDE7XG4gICAgICAgICAgICBjYkFwci5jYXB0aW9uRm9udFJhdGlvID0gMC42O1xuXG4gICAgICAgICAgICB2YXIgY2xvc2VCdG5FbGUgPSBwYXJ0c0J1aWxkZXIuYnVpbGRUZXh0QnV0dG9uKGNiQXByKTtcbiAgICAgICAgICAgIHZhciBlbGVMZWZ0ID0gMDtcbiAgICAgICAgICAgIHZhciBlbGVUb3AgPSAtcGFyc2VJbnQoZkFwci50aXRsZUJhckhlaWdodCk7XG4gICAgICAgICAgICB2YXIgZWxlQWxpZ24gPSAnUklHSFRfVE9QJztcblxuICAgICAgICAgICAgLy8gJ2Nsb3NlQnV0dG9uJyBpcyBhIHNwZWNpYWwgbmFtZVxuICAgICAgICAgICAgZkFwci5hZGRGcmFtZUNvbXBvbmVudCgnY2xvc2VCdXR0b24nLCBjbG9zZUJ0bkVsZSwgZWxlTGVmdCwgZWxlVG9wLCBlbGVBbGlnbik7XG5cbiAgICAgICAgICAgIC8vY29uZmlndXJlIGNsb3NlIGJ1dHRvbiBhcHBlYXJhbmNlW2VuZF0vLy8vLy8vLy8vLy8vL1xuICAgICAgICB9XG5cbiAgICAgICAge1xuICAgICAgICAgICAgLy9jb25maWd1cmUgY2xvc2UgYnV0dG9uIGFwcGVhcmFuY2VbYmVnaW5dLy8vLy8vLy8vLy8vLy9cblxuICAgICAgICAgICAgdmFyIE1BWElNSVpFX01BUksgPSAnXFx1MjYxMCc7XG5cbiAgICAgICAgICAgIHZhciBtYXhBcHIgPSBwYXJ0c0J1aWxkZXIuYnVpbGRUZXh0QnV0dG9uQXBwZWFyYW5jZSgpO1xuXG4gICAgICAgICAgICBtYXhBcHIud2lkdGggPSA0NTtcbiAgICAgICAgICAgIG1heEFwci5oZWlnaHQgPSAyODtcblxuXG4gICAgICAgICAgICBtYXhBcHIuYm9yZGVyUmFkaXVzID0gMDtcbiAgICAgICAgICAgIG1heEFwci5ib3JkZXJXaWR0aCA9IDA7XG5cbiAgICAgICAgICAgIG1heEFwci5ib3JkZXJDb2xvckRlZmF1bHQgPSAnI2M2YzZjNic7XG4gICAgICAgICAgICBtYXhBcHIuYm9yZGVyQ29sb3JGb2N1c2VkID0gJyNmYzYxNWMnO1xuICAgICAgICAgICAgbWF4QXByLmJvcmRlckNvbG9ySG92ZXJlZCA9IG1heEFwci5ib3JkZXJDb2xvckZvY3VzZWQ7XG4gICAgICAgICAgICBtYXhBcHIuYm9yZGVyQ29sb3JQcmVzc2VkID0gJyNlNjQ4NDInO1xuXG4gICAgICAgICAgICBtYXhBcHIuYm9yZGVyU3R5bGVEZWZhdWx0ID0gJ3NvbGlkJztcbiAgICAgICAgICAgIG1heEFwci5ib3JkZXJTdHlsZUZvY3VzZWQgPSBtYXhBcHIuYm9yZGVyU3R5bGVEZWZhdWx0O1xuICAgICAgICAgICAgbWF4QXByLmJvcmRlclN0eWxlSG92ZXJlZCA9IG1heEFwci5ib3JkZXJTdHlsZURlZmF1bHQ7XG4gICAgICAgICAgICBtYXhBcHIuYm9yZGVyU3R5bGVQcmVzc2VkID0gbWF4QXByLmJvcmRlclN0eWxlRGVmYXVsdDtcblxuICAgICAgICAgICAgLy9iYWNrZ3JvdW5kXG4gICAgICAgICAgICBtYXhBcHIuYmFja2dyb3VuZENvbG9yRGVmYXVsdCA9ICd3aGl0ZSc7XG4gICAgICAgICAgICBtYXhBcHIuYmFja2dyb3VuZENvbG9yRm9jdXNlZCA9ICd3aGl0ZSc7XG4gICAgICAgICAgICBtYXhBcHIuYmFja2dyb3VuZENvbG9ySG92ZXJlZCA9ICcjZTVlNWU1JztcbiAgICAgICAgICAgIG1heEFwci5iYWNrZ3JvdW5kQ29sb3JQcmVzc2VkID0gJyNjY2NjY2MnO1xuXG4gICAgICAgICAgICAvL2NhcHRpb25cbiAgICAgICAgICAgIG1heEFwci5jYXB0aW9uID0gTUFYSU1JWkVfTUFSSztcblxuICAgICAgICAgICAgbWF4QXByLmNhcHRpb25Db2xvckRlZmF1bHQgPSAnIzliOWE5Yic7XG4gICAgICAgICAgICBtYXhBcHIuY2FwdGlvbkNvbG9yRm9jdXNlZCA9ICdibGFjayc7XG4gICAgICAgICAgICBtYXhBcHIuY2FwdGlvbkNvbG9ySG92ZXJlZCA9ICdibGFjayc7XG4gICAgICAgICAgICBtYXhBcHIuY2FwdGlvbkNvbG9yUHJlc3NlZCA9ICdibGFjayc7XG5cbiAgICAgICAgICAgIG1heEFwci5jYXB0aW9uU2hpZnRZcHggPSAxO1xuICAgICAgICAgICAgbWF4QXByLmNhcHRpb25Gb250UmF0aW8gPSAwLjU1O1xuXG4gICAgICAgICAgICB2YXIgbWF4QnRuRWxlID0gcGFydHNCdWlsZGVyLmJ1aWxkVGV4dEJ1dHRvbihtYXhBcHIpO1xuICAgICAgICAgICAgdmFyIGVsZUxlZnQgPSAtNDY7XG4gICAgICAgICAgICB2YXIgZWxlVG9wID0gLXBhcnNlSW50KGZBcHIudGl0bGVCYXJIZWlnaHQpO1xuICAgICAgICAgICAgdmFyIGVsZUFsaWduID0gJ1JJR0hUX1RPUCc7XG5cbiAgICAgICAgICAgIC8vICdjbG9zZUJ1dHRvbicgaXMgYSBzcGVjaWFsIG5hbWVcbiAgICAgICAgICAgIGZBcHIuYWRkRnJhbWVDb21wb25lbnQoJ21heGltaXplQnV0dG9uJywgbWF4QnRuRWxlLCBlbGVMZWZ0LCBlbGVUb3AsIGVsZUFsaWduKTtcblxuICAgICAgICAgICAgLy9jb25maWd1cmUgY2xvc2UgYnV0dG9uIGFwcGVhcmFuY2VbZW5kXS8vLy8vLy8vLy8vLy8vXG4gICAgICAgIH1cblxuICAgICAgICB7XG4gICAgICAgICAgICAvL2NvbmZpZ3VyZSBjbG9zZSBidXR0b24gYXBwZWFyYW5jZVtiZWdpbl0vLy8vLy8vLy8vLy8vL1xuXG4gICAgICAgICAgICB2YXIgTUlOSU1JWkVfTUFSSyA9ICdcXHVmZjNmJztcblxuICAgICAgICAgICAgdmFyIG1pbkFwciA9IHBhcnRzQnVpbGRlci5idWlsZFRleHRCdXR0b25BcHBlYXJhbmNlKCk7XG5cbiAgICAgICAgICAgIG1pbkFwci53aWR0aCA9IDQ1O1xuICAgICAgICAgICAgbWluQXByLmhlaWdodCA9IDI4O1xuXG5cbiAgICAgICAgICAgIG1pbkFwci5ib3JkZXJSYWRpdXMgPSAwO1xuICAgICAgICAgICAgbWluQXByLmJvcmRlcldpZHRoID0gMDtcblxuICAgICAgICAgICAgbWluQXByLmJvcmRlckNvbG9yRGVmYXVsdCA9ICcjYzZjNmM2JztcbiAgICAgICAgICAgIG1pbkFwci5ib3JkZXJDb2xvckZvY3VzZWQgPSAnI2ZjNjE1Yyc7XG4gICAgICAgICAgICBtaW5BcHIuYm9yZGVyQ29sb3JIb3ZlcmVkID0gbWluQXByLmJvcmRlckNvbG9yRm9jdXNlZDtcbiAgICAgICAgICAgIG1pbkFwci5ib3JkZXJDb2xvclByZXNzZWQgPSAnI2U2NDg0Mic7XG5cbiAgICAgICAgICAgIG1pbkFwci5ib3JkZXJTdHlsZURlZmF1bHQgPSAnc29saWQnO1xuICAgICAgICAgICAgbWluQXByLmJvcmRlclN0eWxlRm9jdXNlZCA9IG1pbkFwci5ib3JkZXJTdHlsZURlZmF1bHQ7XG4gICAgICAgICAgICBtaW5BcHIuYm9yZGVyU3R5bGVIb3ZlcmVkID0gbWluQXByLmJvcmRlclN0eWxlRGVmYXVsdDtcbiAgICAgICAgICAgIG1pbkFwci5ib3JkZXJTdHlsZVByZXNzZWQgPSBtaW5BcHIuYm9yZGVyU3R5bGVEZWZhdWx0O1xuXG4gICAgICAgICAgICAvL2JhY2tncm91bmRcbiAgICAgICAgICAgIG1pbkFwci5iYWNrZ3JvdW5kQ29sb3JEZWZhdWx0ID0gJ3doaXRlJztcbiAgICAgICAgICAgIG1pbkFwci5iYWNrZ3JvdW5kQ29sb3JGb2N1c2VkID0gJ3doaXRlJztcbiAgICAgICAgICAgIG1pbkFwci5iYWNrZ3JvdW5kQ29sb3JIb3ZlcmVkID0gJyNlNWU1ZTUnO1xuICAgICAgICAgICAgbWluQXByLmJhY2tncm91bmRDb2xvclByZXNzZWQgPSAnI2NjY2NjYyc7XG5cbiAgICAgICAgICAgIC8vY2FwdGlvblxuICAgICAgICAgICAgbWluQXByLmNhcHRpb24gPSBNSU5JTUlaRV9NQVJLO1xuXG4gICAgICAgICAgICBtaW5BcHIuY2FwdGlvbkNvbG9yRGVmYXVsdCA9ICcjOWI5YTliJztcbiAgICAgICAgICAgIG1pbkFwci5jYXB0aW9uQ29sb3JGb2N1c2VkID0gJ2JsYWNrJztcbiAgICAgICAgICAgIG1pbkFwci5jYXB0aW9uQ29sb3JIb3ZlcmVkID0gJ2JsYWNrJztcbiAgICAgICAgICAgIG1pbkFwci5jYXB0aW9uQ29sb3JQcmVzc2VkID0gJ2JsYWNrJztcblxuICAgICAgICAgICAgbWluQXByLmNhcHRpb25TaGlmdFlweCA9IC0yO1xuICAgICAgICAgICAgbWluQXByLmNhcHRpb25Gb250UmF0aW8gPSAwLjM7XG5cbiAgICAgICAgICAgIHZhciBtaW5CdG5FbGUgPSBwYXJ0c0J1aWxkZXIuYnVpbGRUZXh0QnV0dG9uKG1pbkFwcik7XG4gICAgICAgICAgICB2YXIgZWxlTGVmdCA9IC05MjtcbiAgICAgICAgICAgIHZhciBlbGVUb3AgPSAtcGFyc2VJbnQoZkFwci50aXRsZUJhckhlaWdodCk7XG4gICAgICAgICAgICB2YXIgZWxlQWxpZ24gPSAnUklHSFRfVE9QJztcblxuICAgICAgICAgICAgLy8gJ2Nsb3NlQnV0dG9uJyBpcyBhIHNwZWNpYWwgbmFtZVxuICAgICAgICAgICAgZkFwci5hZGRGcmFtZUNvbXBvbmVudCgnbWluaW1pemVCdXR0b24nLCBtaW5CdG5FbGUsIGVsZUxlZnQsIGVsZVRvcCwgZWxlQWxpZ24pO1xuXG4gICAgICAgICAgICAvL2NvbmZpZ3VyZSBjbG9zZSBidXR0b24gYXBwZWFyYW5jZVtlbmRdLy8vLy8vLy8vLy8vLy9cbiAgICAgICAgfVxuICAgICAgICB7XG4gICAgICAgICAgICAvL2NvbmZpZ3VyZSBjbG9zZSBidXR0b24gYXBwZWFyYW5jZVtiZWdpbl0vLy8vLy8vLy8vLy8vL1xuXG5cbiAgICAgICAgICAgIHZhciBkZW1pbkFwciA9IHBhcnRzQnVpbGRlci5idWlsZFRleHRCdXR0b25BcHBlYXJhbmNlKCk7XG5cbiAgICAgICAgICAgIGRlbWluQXByLndpZHRoID0gNDU7XG4gICAgICAgICAgICBkZW1pbkFwci5oZWlnaHQgPSAyODtcblxuXG4gICAgICAgICAgICBkZW1pbkFwci5ib3JkZXJSYWRpdXMgPSAwO1xuICAgICAgICAgICAgZGVtaW5BcHIuYm9yZGVyV2lkdGggPSAwO1xuXG4gICAgICAgICAgICBkZW1pbkFwci5ib3JkZXJDb2xvckRlZmF1bHQgPSAnI2M2YzZjNic7XG4gICAgICAgICAgICBkZW1pbkFwci5ib3JkZXJDb2xvckZvY3VzZWQgPSAnI2ZjNjE1Yyc7XG4gICAgICAgICAgICBkZW1pbkFwci5ib3JkZXJDb2xvckhvdmVyZWQgPSBkZW1pbkFwci5ib3JkZXJDb2xvckZvY3VzZWQ7XG4gICAgICAgICAgICBkZW1pbkFwci5ib3JkZXJDb2xvclByZXNzZWQgPSAnI2U2NDg0Mic7XG5cbiAgICAgICAgICAgIGRlbWluQXByLmJvcmRlclN0eWxlRGVmYXVsdCA9ICdzb2xpZCc7XG4gICAgICAgICAgICBkZW1pbkFwci5ib3JkZXJTdHlsZUZvY3VzZWQgPSBkZW1pbkFwci5ib3JkZXJTdHlsZURlZmF1bHQ7XG4gICAgICAgICAgICBkZW1pbkFwci5ib3JkZXJTdHlsZUhvdmVyZWQgPSBkZW1pbkFwci5ib3JkZXJTdHlsZURlZmF1bHQ7XG4gICAgICAgICAgICBkZW1pbkFwci5ib3JkZXJTdHlsZVByZXNzZWQgPSBkZW1pbkFwci5ib3JkZXJTdHlsZURlZmF1bHQ7XG5cbiAgICAgICAgICAgIC8vYmFja2dyb3VuZFxuICAgICAgICAgICAgZGVtaW5BcHIuYmFja2dyb3VuZENvbG9yRGVmYXVsdCA9ICd3aGl0ZSc7XG4gICAgICAgICAgICBkZW1pbkFwci5iYWNrZ3JvdW5kQ29sb3JGb2N1c2VkID0gJ3doaXRlJztcbiAgICAgICAgICAgIGRlbWluQXByLmJhY2tncm91bmRDb2xvckhvdmVyZWQgPSAnI2U1ZTVlNSc7XG4gICAgICAgICAgICBkZW1pbkFwci5iYWNrZ3JvdW5kQ29sb3JQcmVzc2VkID0gJyNjY2NjY2MnO1xuXG4gICAgICAgICAgICAvL2NhcHRpb25cbiAgICAgICAgICAgIGRlbWluQXByLmNhcHRpb24gPSdcXHUyNUEzJztcblxuICAgICAgICAgICAgZGVtaW5BcHIuY2FwdGlvbkNvbG9yRGVmYXVsdCA9ICcjOWI5YTliJztcbiAgICAgICAgICAgIGRlbWluQXByLmNhcHRpb25Db2xvckZvY3VzZWQgPSAnYmxhY2snO1xuICAgICAgICAgICAgZGVtaW5BcHIuY2FwdGlvbkNvbG9ySG92ZXJlZCA9ICdibGFjayc7XG4gICAgICAgICAgICBkZW1pbkFwci5jYXB0aW9uQ29sb3JQcmVzc2VkID0gJ2JsYWNrJztcblxuICAgICAgICAgICAgZGVtaW5BcHIuY2FwdGlvblNoaWZ0WXB4ID0gMTtcbiAgICAgICAgICAgIGRlbWluQXByLmNhcHRpb25Gb250UmF0aW8gPSAwLjY7XG5cbiAgICAgICAgICAgIHZhciBkZW1pbkJ0bkVsZSA9IHBhcnRzQnVpbGRlci5idWlsZFRleHRCdXR0b24oZGVtaW5BcHIpO1xuICAgICAgICAgICAgdmFyIGVsZUxlZnQgPSAtOTI7XG4gICAgICAgICAgICB2YXIgZWxlVG9wID0gLXBhcnNlSW50KGZBcHIudGl0bGVCYXJIZWlnaHQpO1xuICAgICAgICAgICAgdmFyIGVsZUFsaWduID0gJ1JJR0hUX1RPUCc7XG5cbiAgICAgICAgICAgIGRlbWluQnRuRWxlLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cbiAgICAgICAgICAgIC8vICdjbG9zZUJ1dHRvbicgaXMgYSBzcGVjaWFsIG5hbWVcbiAgICAgICAgICAgIGZBcHIuYWRkRnJhbWVDb21wb25lbnQoJ2RlbWluaW1pemVCdXR0b24nLCBkZW1pbkJ0bkVsZSwgZWxlTGVmdCwgZWxlVG9wLCBlbGVBbGlnbik7XG5cbiAgICAgICAgICAgIC8vY29uZmlndXJlIGNsb3NlIGJ1dHRvbiBhcHBlYXJhbmNlW2VuZF0vLy8vLy8vLy8vLy8vL1xuICAgICAgICB9XG4gICAgICAgIHtcbiAgICAgICAgICAgIC8vY29uZmlndXJlIGNsb3NlIGJ1dHRvbiBhcHBlYXJhbmNlW2JlZ2luXS8vLy8vLy8vLy8vLy8vXG5cbiAgICAgICAgICAgIHZhciBSRVNUT1JFX01BUksgPSAnXFx1Mjc0Ric7XG5cbiAgICAgICAgICAgIHZhciByYkFwciA9IHBhcnRzQnVpbGRlci5idWlsZFRleHRCdXR0b25BcHBlYXJhbmNlKCk7XG5cbiAgICAgICAgICAgIHJiQXByLndpZHRoID0gNDU7XG4gICAgICAgICAgICByYkFwci5oZWlnaHQgPSAyODtcblxuXG4gICAgICAgICAgICByYkFwci5ib3JkZXJSYWRpdXMgPSAwO1xuICAgICAgICAgICAgcmJBcHIuYm9yZGVyV2lkdGggPSAwO1xuXG4gICAgICAgICAgICByYkFwci5ib3JkZXJDb2xvckRlZmF1bHQgPSAnI2M2YzZjNic7XG4gICAgICAgICAgICByYkFwci5ib3JkZXJDb2xvckZvY3VzZWQgPSAnI2ZjNjE1Yyc7XG4gICAgICAgICAgICByYkFwci5ib3JkZXJDb2xvckhvdmVyZWQgPSByYkFwci5ib3JkZXJDb2xvckZvY3VzZWQ7XG4gICAgICAgICAgICByYkFwci5ib3JkZXJDb2xvclByZXNzZWQgPSAnI2U2NDg0Mic7XG5cbiAgICAgICAgICAgIHJiQXByLmJvcmRlclN0eWxlRGVmYXVsdCA9ICdzb2xpZCc7XG4gICAgICAgICAgICByYkFwci5ib3JkZXJTdHlsZUZvY3VzZWQgPSByYkFwci5ib3JkZXJTdHlsZURlZmF1bHQ7XG4gICAgICAgICAgICByYkFwci5ib3JkZXJTdHlsZUhvdmVyZWQgPSByYkFwci5ib3JkZXJTdHlsZURlZmF1bHQ7XG4gICAgICAgICAgICByYkFwci5ib3JkZXJTdHlsZVByZXNzZWQgPSByYkFwci5ib3JkZXJTdHlsZURlZmF1bHQ7XG5cbiAgICAgICAgICAgIC8vYmFja2dyb3VuZFxuICAgICAgICAgICAgcmJBcHIuYmFja2dyb3VuZENvbG9yRGVmYXVsdCA9ICd3aGl0ZSc7XG4gICAgICAgICAgICByYkFwci5iYWNrZ3JvdW5kQ29sb3JGb2N1c2VkID0gJ3doaXRlJztcbiAgICAgICAgICAgIHJiQXByLmJhY2tncm91bmRDb2xvckhvdmVyZWQgPSAnI2U1ZTVlNSc7XG4gICAgICAgICAgICByYkFwci5iYWNrZ3JvdW5kQ29sb3JQcmVzc2VkID0gJyNjY2NjY2MnO1xuXG4gICAgICAgICAgICAvL2NhcHRpb25cbiAgICAgICAgICAgIHJiQXByLmNhcHRpb24gPSBSRVNUT1JFX01BUks7XG5cbiAgICAgICAgICAgIHJiQXByLmNhcHRpb25Db2xvckRlZmF1bHQgPSAnIzliOWE5Yic7XG4gICAgICAgICAgICByYkFwci5jYXB0aW9uQ29sb3JGb2N1c2VkID0gJ2JsYWNrJztcbiAgICAgICAgICAgIHJiQXByLmNhcHRpb25Db2xvckhvdmVyZWQgPSAnYmxhY2snO1xuICAgICAgICAgICAgcmJBcHIuY2FwdGlvbkNvbG9yUHJlc3NlZCA9ICdibGFjayc7XG5cbiAgICAgICAgICAgIHJiQXByLmNhcHRpb25TaGlmdFlweCA9IDE7XG4gICAgICAgICAgICByYkFwci5jYXB0aW9uRm9udFJhdGlvID0gMC41NTtcblxuICAgICAgICAgICAgdmFyIHJlc3RvcmVCdG5FbGUgPSBwYXJ0c0J1aWxkZXIuYnVpbGRUZXh0QnV0dG9uKHJiQXByKTtcbiAgICAgICAgICAgIHZhciBlbGVMZWZ0ID0gLTQ2O1xuICAgICAgICAgICAgdmFyIGVsZVRvcCA9IC1wYXJzZUludChmQXByLnRpdGxlQmFySGVpZ2h0KTtcbiAgICAgICAgICAgIHZhciBlbGVBbGlnbiA9ICdSSUdIVF9UT1AnO1xuXG4gICAgICAgICAgICByZXN0b3JlQnRuRWxlLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cbiAgICAgICAgICAgIC8vICdjbG9zZUJ1dHRvbicgaXMgYSBzcGVjaWFsIG5hbWVcbiAgICAgICAgICAgIGZBcHIuYWRkRnJhbWVDb21wb25lbnQoJ3Jlc3RvcmVCdXR0b24nLCByZXN0b3JlQnRuRWxlLCBlbGVMZWZ0LCBlbGVUb3AsIGVsZUFsaWduKTtcblxuICAgICAgICAgICAgLy9jb25maWd1cmUgY2xvc2UgYnV0dG9uIGFwcGVhcmFuY2VbZW5kXS8vLy8vLy8vLy8vLy8vXG4gICAgICAgIH1cblxuXG4gICAgfTtcbiAgICAvL1xuXG4gICAgcmV0dXJuIGZBcHI7XG59XG5cblxubW9kdWxlLmV4cG9ydHMuZ2V0U3R5bGUgPSBnZXRTdHlsZTsiLCIvKipcbiAqIEpTRnJhbWUgRXhhbXBsZXNcbiAqXG4gKiBDb3B5cmlnaHQgMjAwNy0gVG9tIE1pc2F3YSwgcml2ZXJzdW4ub3JnQGdtYWlsLmNvbVxuICogQ29weXJpZ2h0IDIwMDctIHdlYjJkcml2ZXIuY29tXG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weSBvZlxuICogdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGVcbiAqIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsXG4gKiBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlXG4gKiBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbyxcbiAqIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbFxuICogY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SIElNUExJRUQsXG4gKiAgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEFcbiAqIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUlxuICogQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLFxuICogV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUlxuICogSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cbiAqXG4gKi9cblxuXG5cbmZ1bmN0aW9uIGdldFN0eWxlKGZBcHIpIHtcblxuXG4gICAgZkFwci5zaG93VGl0bGVCYXIgPSBmYWxzZTtcbiAgICBmQXByLnNob3dDbG9zZUJ1dHRvbiA9IHRydWU7XG5cblxuICAgIGZBcHIudGl0bGVCYXJDYXB0aW9uRm9udFNpemUgPSAnMHB4JztcbiAgICBmQXByLnRpdGxlQmFyQ2FwdGlvbkZvbnRXZWlnaHQgPSAnbm9ybWFsJztcbiAgICBmQXByLnRpdGxlQmFyQ2FwdGlvbkxlZnRNYXJnaW4gPSAnMHB4JztcbiAgICBmQXByLnRpdGxlQmFyQ2FwdGlvbkNvbG9yRGVmYXVsdCA9ICd0cmFuc3BhcmVudCc7XG4gICAgZkFwci50aXRsZUJhckNhcHRpb25Db2xvckZvY3VzZWQgPSAndHJhbnNwYXJlbnQnO1xuXG4gICAgZkFwci50aXRsZUJhckhlaWdodCA9ICcwcHgnO1xuXG4gICAgZkFwci50aXRsZUJhckNvbG9yRGVmYXVsdCA9ICd0cmFuc3BhcmVudCc7XG4gICAgZkFwci50aXRsZUJhckNvbG9yRm9jdXNlZCA9ICd0cmFuc3BhcmVudCc7XG5cbiAgICBmQXByLnRpdGxlQmFyQm9yZGVyQm90dG9tRGVmYXVsdCA9IG51bGw7XG4gICAgZkFwci50aXRsZUJhckJvcmRlckJvdHRvbUZvY3VzZWQgPSBudWxsO1xuXG4gICAgZkFwci5mcmFtZUJvcmRlclJhZGl1cyA9ICcxMHB4JztcblxuICAgIC8vYm9yZGVyIHdpZHRoXG4gICAgZkFwci5mcmFtZUJvcmRlcldpZHRoRGVmYXVsdCA9ICcwcHgnO1xuICAgIGZBcHIuZnJhbWVCb3JkZXJXaWR0aEZvY3VzZWQgPSAnMHB4JztcblxuXG4gICAgLy9ib3JkZXIgY29sb3JcbiAgICBmQXByLmZyYW1lQm9yZGVyQ29sb3JEZWZhdWx0ID0gJ3RyYW5zcGFyZW50JztcbiAgICBmQXByLmZyYW1lQm9yZGVyQ29sb3JGb2N1c2VkID0gJ3RyYW5zcGFyZW50JztcbiAgICBmQXByLmZyYW1lQm9yZGVyU3R5bGUgPSAnc29saWQnO1xuICAgIGZBcHIuZnJhbWVCb3hTaGFkb3cgPSAnMnB4IDJweCAxNXB4ICByZ2JhKDAsIDAsIDAsIDAuNSknO1xuICAgIGZBcHIuZnJhbWVCYWNrZ3JvdW5kQ29sb3IgPSAndHJhbnNwYXJlbnQnO1xuXG5cbiAgICBmQXByLmZyYW1lQ29tcG9uZW50cyA9IFtdO1xuICAgIGZBcHIuZnJhbWVIZWlnaHRBZGp1c3QgPSAyOy8vZGVmYXVsdCBpcyAxXG5cbiAgICBmQXByLmNhcHRpb25DbG9yPSdkYXJrZ3JheSc7XG5cbiAgICBmQXByLnB1bGxVcERpc2FibGVkID0gZmFsc2U7XG5cbiAgICBmQXByLmdldFRpdGxlQmFyU3R5bGUgPSBmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgaWYgKGZBcHIuZm9jdXNlZEZyYW1lT25seSkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICB0aXRsZUJhckNsYXNzTmFtZURlZmF1bHQ6ICcgJyxcbiAgICAgICAgICAgICAgICB0aXRsZUJhckNsYXNzTmFtZUZvY3VzZWQ6ICcgJ1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgdGl0bGVCYXJDbGFzc05hbWVEZWZhdWx0OiAnICcsXG4gICAgICAgICAgICAgICAgdGl0bGVCYXJDbGFzc05hbWVGb2N1c2VkOiAnICdcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICB9O1xuXG5cbiAgICBmQXByLm9uSW5pdGlhbGl6ZSA9IGZ1bmN0aW9uICgpIHtcblxuXG4gICAgICAgIHZhciBwYXJ0c0J1aWxkZXIgPSBmQXByLmdldFBhcnRzQnVpbGRlcigpO1xuXG5cbiAgICAgICAgLy9jb25maWd1cmUgY2xvc2UgYnV0dG9uIGFwcGVhcmFuY2VbYmVnaW5dLy8vLy8vLy8vLy8vLy9cblxuICAgICAgICB2YXIgY3Jvc3NNYXJrMCA9ICdcXHUyNzRjJztcbiAgICAgICAgdmFyIGNyb3NzTWFyazEgPSAnXFx1MjcxNic7XG4gICAgICAgIHZhciBjcm9zc01hcmsyID0gJ1xcdTI3NGUnO1xuICAgICAgICB2YXIgQ1JPU1NfTUFSSyA9IGNyb3NzTWFyazE7XG5cblxuICAgICAgICB2YXIgY2JBcHIgPSBwYXJ0c0J1aWxkZXIuYnVpbGRUZXh0QnV0dG9uQXBwZWFyYW5jZSgpO1xuXG4gICAgICAgIGNiQXByLndpZHRoID0gMjA7XG4gICAgICAgIGNiQXByLmhlaWdodCA9IDIwO1xuXG5cbiAgICAgICAgY2JBcHIuYm9yZGVyUmFkaXVzID0gMTA7XG4gICAgICAgIGNiQXByLmJvcmRlcldpZHRoID0gMDtcblxuICAgICAgICBjYkFwci5ib3JkZXJDb2xvckRlZmF1bHQgPSAnI2NjY2NjYyc7XG4gICAgICAgIGNiQXByLmJvcmRlckNvbG9yRm9jdXNlZCA9ICcjY2NjY2NjJztcbiAgICAgICAgY2JBcHIuYm9yZGVyQ29sb3JIb3ZlcmVkID0gJyNkZGRkZGQnO1xuICAgICAgICBjYkFwci5ib3JkZXJDb2xvclByZXNzZWQgPSAnI2VlZWVlZSc7XG5cbiAgICAgICAgY2JBcHIuYm9yZGVyU3R5bGVEZWZhdWx0ID0gJ3NvbGlkJztcbiAgICAgICAgY2JBcHIuYm9yZGVyU3R5bGVGb2N1c2VkID0gY2JBcHIuYm9yZGVyU3R5bGVEZWZhdWx0O1xuICAgICAgICBjYkFwci5ib3JkZXJTdHlsZUhvdmVyZWQgPSBjYkFwci5ib3JkZXJTdHlsZURlZmF1bHQ7XG4gICAgICAgIGNiQXByLmJvcmRlclN0eWxlUHJlc3NlZCA9IGNiQXByLmJvcmRlclN0eWxlRGVmYXVsdDtcblxuICAgICAgICAvL2JhY2tncm91bmRcbiAgICAgICAgY2JBcHIuYmFja2dyb3VuZENvbG9yRGVmYXVsdCA9ICd0cmFuc3BhcmVudCc7XG4gICAgICAgIGNiQXByLmJhY2tncm91bmRDb2xvckZvY3VzZWQgPSAndHJhbnNwYXJlbnQnO1xuICAgICAgICBjYkFwci5iYWNrZ3JvdW5kQ29sb3JIb3ZlcmVkID0gJ3RyYW5zcGFyZW50JztcbiAgICAgICAgY2JBcHIuYmFja2dyb3VuZENvbG9yUHJlc3NlZCA9ICd0cmFuc3BhcmVudCc7XG5cbiAgICAgICAgY2JBcHIuYmFja2dyb3VuZEJveFNoYWRvdyA9IG51bGw7Ly8gJzJweCAycHggNXB4ICByZ2JhKDAsIDAsIDAsIDAuNSknO1xuXG4gICAgICAgIC8vY2FwdGlvblxuICAgICAgICBjYkFwci5jYXB0aW9uID0gQ1JPU1NfTUFSSztcblxuICAgICAgICBjYkFwci5jYXB0aW9uQ29sb3JEZWZhdWx0ID0gIGZBcHIuY2FwdGlvbkNsb3I7XG4gICAgICAgIGNiQXByLmNhcHRpb25Db2xvckZvY3VzZWQgPSBmQXByLmNhcHRpb25DbG9yO1xuICAgICAgICBjYkFwci5jYXB0aW9uQ29sb3JIb3ZlcmVkID0gIGZBcHIuY2FwdGlvbkNsb3I7XG4gICAgICAgIGNiQXByLmNhcHRpb25Db2xvclByZXNzZWQgPSAgZkFwci5jYXB0aW9uQ2xvcjtcblxuICAgICAgICBjYkFwci5jYXB0aW9uU2hpZnRZcHggPSAxO1xuICAgICAgICBjYkFwci5jYXB0aW9uRm9udFJhdGlvID0gMC42O1xuXG4gICAgICAgIHZhciBjbG9zZUJ0bkVsZSA9IHBhcnRzQnVpbGRlci5idWlsZFRleHRCdXR0b24oY2JBcHIpO1xuICAgICAgICB2YXIgZWxlTGVmdCA9IC02O1xuICAgICAgICB2YXIgZWxlVG9wID0gMztcbiAgICAgICAgdmFyIGVsZUFsaWduID0gJ1JJR0hUX1RPUCc7XG5cbiAgICAgICAgLy8gJ2Nsb3NlQnV0dG9uJyBpcyBhIHNwZWNpYWwgbmFtZVxuICAgICAgICBmQXByLmFkZEZyYW1lQ29tcG9uZW50KCdjbG9zZUJ1dHRvbicsIGNsb3NlQnRuRWxlLCBlbGVMZWZ0LCBlbGVUb3AsIGVsZUFsaWduKTtcblxuICAgICAgICAvL2NvbmZpZ3VyZSBjbG9zZSBidXR0b24gYXBwZWFyYW5jZVtlbmRdLy8vLy8vLy8vLy8vLy9cblxuXG4gICAgfTtcbiAgICAvL1xuXG5cbiAgICByZXR1cm4gZkFwcjtcbn1cblxuXG5tb2R1bGUuZXhwb3J0cy5nZXRTdHlsZSA9IGdldFN0eWxlOyIsIlxudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL1ByZXNldFN0eWxlWW9zZW1pdGUuY3NzXCIpO1xuXG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcblxudmFyIHRyYW5zZm9ybTtcbnZhciBpbnNlcnRJbnRvO1xuXG5cblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxuXG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxub3B0aW9ucy5pbnNlcnRJbnRvID0gdW5kZWZpbmVkO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL1ByZXNldFN0eWxlWW9zZW1pdGUuY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9QcmVzZXRTdHlsZVlvc2VtaXRlLmNzc1wiKTtcblxuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXG5cdFx0dmFyIGxvY2FscyA9IChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHR2YXIga2V5LCBpZHggPSAwO1xuXG5cdFx0XHRmb3Ioa2V5IGluIGEpIHtcblx0XHRcdFx0aWYoIWIgfHwgYVtrZXldICE9PSBiW2tleV0pIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWR4Kys7XG5cdFx0XHR9XG5cblx0XHRcdGZvcihrZXkgaW4gYikgaWR4LS07XG5cblx0XHRcdHJldHVybiBpZHggPT09IDA7XG5cdFx0fShjb250ZW50LmxvY2FscywgbmV3Q29udGVudC5sb2NhbHMpKTtcblxuXHRcdGlmKCFsb2NhbHMpIHRocm93IG5ldyBFcnJvcignQWJvcnRpbmcgQ1NTIEhNUiBkdWUgdG8gY2hhbmdlZCBjc3MtbW9kdWxlcyBsb2NhbHMuJyk7XG5cblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsIi8qKlxuICogSlNGcmFtZSBFeGFtcGxlc1xuICpcbiAqIENvcHlyaWdodCAyMDA3LSBUb20gTWlzYXdhLCByaXZlcnN1bi5vcmdAZ21haWwuY29tXG4gKiBDb3B5cmlnaHQgMjAwNy0gd2ViMmRyaXZlci5jb21cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5IG9mXG4gKiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZVxuICogU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSxcbiAqIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGVcbiAqIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLFxuICogc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsXG4gKiBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1IgSU1QTElFRCxcbiAqICBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQVxuICogUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SXG4gKiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksXG4gKiBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SXG4gKiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuICpcbiAqL1xuXG5yZXF1aXJlKCcuL1ByZXNldFN0eWxlWW9zZW1pdGUuY3NzJyk7XG5cbmZ1bmN0aW9uIGdldFN0eWxlKGZBcHIpIHtcblxuICAgIGZBcHIuc2hvd1RpdGxlQmFyID0gdHJ1ZTtcbiAgICBmQXByLnNob3dDbG9zZUJ1dHRvbiA9IHRydWU7XG5cbiAgICBmQXByLnRpdGxlQmFyQ2FwdGlvbkZvbnRTaXplID0gJzExcHgnO1xuICAgIGZBcHIudGl0bGVCYXJDYXB0aW9uRm9udFdlaWdodCA9ICdub3JtYWwnO1xuICAgIGZBcHIudGl0bGVCYXJDYXB0aW9uTGVmdE1hcmdpbiA9IG51bGw7XG4gICAgZkFwci50aXRsZUJhckNhcHRpb25Db2xvckRlZmF1bHQgPSAnIzRkNDk0ZCc7XG4gICAgZkFwci50aXRsZUJhckNhcHRpb25Db2xvckZvY3VzZWQgPSAnIzRkNDk0ZCc7XG5cbiAgICBmQXByLnRpdGxlQmFySGVpZ2h0ID0gJzI2cHgnO1xuXG4gICAgZkFwci50aXRsZUJhckNvbG9yRGVmYXVsdCA9ICcjZjRmNGY0JztcbiAgICBmQXByLnRpdGxlQmFyQ29sb3JGb2N1c2VkID0gJyNmNGY0ZjQnO1xuXG4gICAgZkFwci50aXRsZUJhckJvcmRlckJvdHRvbURlZmF1bHQgPSAnMXB4IHNvbGlkICNiMWFlYjEnO1xuICAgIGZBcHIudGl0bGVCYXJCb3JkZXJCb3R0b21Gb2N1c2VkID0gZkFwci50aXRsZUJhckJvcmRlckJvdHRvbURlZmF1bHQ7XG5cbiAgICBmQXByLmZyYW1lQm9yZGVyUmFkaXVzID0gJzZweCc7XG5cbiAgICAvL2JvcmRlciB3aWR0aFxuICAgIGZBcHIuZnJhbWVCb3JkZXJXaWR0aERlZmF1bHQgPSAnMXB4JztcbiAgICBmQXByLmZyYW1lQm9yZGVyV2lkdGhGb2N1c2VkID0gJzFweCc7XG5cblxuICAgIC8vYm9yZGVyIGNvbG9yXG4gICAgZkFwci5mcmFtZUJvcmRlckNvbG9yRGVmYXVsdCA9ICcjYWNhY2FjJztcbiAgICBmQXByLmZyYW1lQm9yZGVyQ29sb3JGb2N1c2VkID0gJyNhY2FjYWMnO1xuXG4gICAgZkFwci5mcmFtZUJvcmRlclN0eWxlID0gJ3NvbGlkJztcblxuICAgIC8vd2luZG93IHNoYWRvd1xuICAgIGZBcHIuZnJhbWVCb3hTaGFkb3cgPSAnMHB4IDBweCAyMHB4IHJnYmEoMCwgMCwgMCwgMC4zKSc7XG5cbiAgICBmQXByLmZyYW1lQmFja2dyb3VuZENvbG9yID0gJ3RyYW5zcGFyZW50JztcblxuXG4gICAgZkFwci5mcmFtZUNvbXBvbmVudHMgPSBuZXcgQXJyYXkoKTtcblxuICAgIGZBcHIuZ2V0VGl0bGVCYXJTdHlsZSA9IGZ1bmN0aW9uICgpIHtcblxuICAgICAgICBpZiAoZkFwci5mb2N1c2VkRnJhbWVPbmx5KSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHRpdGxlQmFyQ2xhc3NOYW1lRGVmYXVsdDogJ2pzZnJhbWUtcHJlc2V0LXN0eWxlLXlvc2VtaXRlLWZvY3VzZWQnLFxuICAgICAgICAgICAgICAgIHRpdGxlQmFyQ2xhc3NOYW1lRm9jdXNlZDogJ2pzZnJhbWUtcHJlc2V0LXN0eWxlLXlvc2VtaXRlLWZvY3VzZWQnXG4gICAgICAgICAgICB9O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICB0aXRsZUJhckNsYXNzTmFtZURlZmF1bHQ6ICdqc2ZyYW1lLXByZXNldC1zdHlsZS15b3NlbWl0ZS1kZWZhdWx0JyxcbiAgICAgICAgICAgICAgICB0aXRsZUJhckNsYXNzTmFtZUZvY3VzZWQ6ICdqc2ZyYW1lLXByZXNldC1zdHlsZS15b3NlbWl0ZS1mb2N1c2VkJ1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBmQXByLm9uSW5pdGlhbGl6ZSA9IGZ1bmN0aW9uICgpIHtcblxuICAgICAgICB2YXIgcGFydHNCdWlsZGVyID0gZkFwci5nZXRQYXJ0c0J1aWxkZXIoKTtcblxuICAgICAgICB2YXIgaW1nX2RhdGFfY2xvc2VfaG92ZXJlZCA9ICdkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUFnQUFBQUlDQVlBQUFERUQ3NkxBQUFBR1hSRldIUlRiMlowZDJGeVpRQkJaRzlpWlNCSmJXRm5aVkpsWVdSNWNjbGxQQUFBQUZkSlJFRlVlTnBpL1AvL1B3TmVBRktnTENGNkFJam53TVJBYkpBWVNJNEZLbllIaUpPQmdqQTF5VUE4RjI0Q2txNy9VRHdISnNmRVFBQ3d3SFNqR0l1d0xnWG1CaFdRNU4wWHIxT2dHbUJpREl5RXZBa1FZQUI2MGlSSVJ0Zld6UUFBQUFCSlJVNUVya0pnZ2c9PSc7XG4gICAgICAgIHZhciBpbWdfZGF0YV9tYXhpbWl6ZV9ob3ZlcmVkID0gJ2RhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQWdBQUFBSUNBWUFBQURFRDc2TEFBQUFHWFJGV0hSVGIyWjBkMkZ5WlFCQlpHOWlaU0JKYldGblpWSmxZV1I1Y2NsbFBBQUFBRHhKUkVGVWVOcGlZRUFDeWhLaVUwQVlXWXlKQVJYNFFERk9CUmlBRVdva1RKYzBsSDRLcGJjUU5JRUJ6WkVQUUpna043Q2c4YmVnS3dBSU1BQzFFUWhtNENYOTVRQUFBQUJKUlU1RXJrSmdnZz09JztcbiAgICAgICAgdmFyIGltZ19kYXRhX21pbmltaXplX2hvdmVyZWQgPSAnZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFBZ0FBQUFJQ0FZQUFBREVENzZMQUFBQUdYUkZXSFJUYjJaMGQyRnlaUUJCWkc5aVpTQkpiV0ZuWlZKbFlXUjVjY2xsUEFBQUFDaEpSRUZVZU5waS9QLy9Qd00rd01SQUFCQlV3S0lpS1RZRlNQdmdrTjlDMEFSRzJqc1NJTUFBV1dBSDhscnljVmtBQUFBQVNVVk9SSzVDWUlJPSc7XG4gICAgICAgIHZhciBpbWdfZGF0YV8xZG90X3RyYW5zcGFyZW50ID0gJ2RhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQUVBQUFBQkNBWUFBQUFmRmNTSkFBQUFHWFJGV0hSVGIyWjBkMkZ5WlFCQlpHOWlaU0JKYldGblpWSmxZV1I1Y2NsbFBBQUFBQkJKUkVGVWVOcGkrUC8vUHdOQWdBRUFDUHdDL3R1aVRSWUFBQUFBU1VWT1JLNUNZSUk9JztcbiAgICAgICAgdmFyIGltZ19zdHlsZSA9ICdtYXJnaW46MHB4O3BhZGRpbmc6MHB4O3dpZHRoOjZweDtoZWlnaHQ6NnB4JztcblxuICAgICAgICB2YXIgaW1hZ2VNYXhpbWl6ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgICBpbWFnZU1heGltaXplLnNyYyA9IGltZ19kYXRhX21heGltaXplX2hvdmVyZWQ7XG4gICAgICAgIGltYWdlTWF4aW1pemUuc2V0QXR0cmlidXRlKCdzdHlsZScsIGltZ19zdHlsZSk7XG5cbiAgICAgICAgdmFyIGltYWdlTWF4aW1pemUyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgICAgIGltYWdlTWF4aW1pemUyLnNyYyA9IGltZ19kYXRhX21heGltaXplX2hvdmVyZWQ7XG4gICAgICAgIGltYWdlTWF4aW1pemUyLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCBpbWdfc3R5bGUpO1xuXG4gICAgICAgIHZhciBpbWFnZU1pbmltaXplID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgICAgIGltYWdlTWluaW1pemUuc3JjID0gaW1nX2RhdGFfbWluaW1pemVfaG92ZXJlZDtcbiAgICAgICAgaW1hZ2VNaW5pbWl6ZS5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgaW1nX3N0eWxlKTtcblxuICAgICAgICB2YXIgaW1hZ2VDbG9zZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgICBpbWFnZUNsb3NlLnNyYyA9IGltZ19kYXRhX2Nsb3NlX2hvdmVyZWQ7XG4gICAgICAgIGltYWdlQ2xvc2Uuc2V0QXR0cmlidXRlKCdzdHlsZScsIGltZ19zdHlsZSk7XG5cblxuICAgICAgICB2YXIgaW1nVHJhbnNwYXJlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAgICAgaW1nVHJhbnNwYXJlbnQuc3JjID0gaW1nX2RhdGFfMWRvdF90cmFuc3BhcmVudDtcbiAgICAgICAgaW1nVHJhbnNwYXJlbnQuc2V0QXR0cmlidXRlKCdzdHlsZScsICdtYXJnaW46MHB4O3BhZGRpbmc6MHB4O3dpZHRoOjZweDtoZWlnaHQ6NnB4Jyk7XG5cbiAgICAgICAge1xuICAgICAgICAgICAgLy9jb25maWd1cmUgY2xvc2UgYnV0dG9uIGFwcGVhcmFuY2VbYmVnaW5dLy8vLy8vLy8vLy8vLy9cblxuXG4gICAgICAgICAgICB2YXIgY2JBcHIgPSBwYXJ0c0J1aWxkZXIuYnVpbGRUZXh0QnV0dG9uQXBwZWFyYW5jZSgpO1xuXG4gICAgICAgICAgICBjYkFwci5zaXplID0gODtcblxuICAgICAgICAgICAgY2JBcHIuYm9yZGVyUmFkaXVzID0gNDtcbiAgICAgICAgICAgIGNiQXByLmJvcmRlcldpZHRoID0gMTtcblxuICAgICAgICAgICAgY2JBcHIuYm9yZGVyQ29sb3JEZWZhdWx0ID0gJyNjNmM2YzYnO1xuICAgICAgICAgICAgY2JBcHIuYm9yZGVyQ29sb3JGb2N1c2VkID0gJyNmYzYxNWMnO1xuICAgICAgICAgICAgY2JBcHIuYm9yZGVyQ29sb3JIb3ZlcmVkID0gY2JBcHIuYm9yZGVyQ29sb3JGb2N1c2VkO1xuICAgICAgICAgICAgY2JBcHIuYm9yZGVyQ29sb3JQcmVzc2VkID0gJyNlNjQ4NDInO1xuXG4gICAgICAgICAgICBjYkFwci5ib3JkZXJTdHlsZURlZmF1bHQgPSAnc29saWQnO1xuICAgICAgICAgICAgY2JBcHIuYm9yZGVyU3R5bGVGb2N1c2VkID0gY2JBcHIuYm9yZGVyU3R5bGVEZWZhdWx0O1xuICAgICAgICAgICAgY2JBcHIuYm9yZGVyU3R5bGVIb3ZlcmVkID0gY2JBcHIuYm9yZGVyU3R5bGVEZWZhdWx0O1xuICAgICAgICAgICAgY2JBcHIuYm9yZGVyU3R5bGVQcmVzc2VkID0gY2JBcHIuYm9yZGVyU3R5bGVEZWZhdWx0O1xuXG4gICAgICAgICAgICAvL2JhY2tncm91bmRcbiAgICAgICAgICAgIGNiQXByLmJhY2tncm91bmRDb2xvckRlZmF1bHQgPSAnI2QwZDBkMCc7XG4gICAgICAgICAgICBjYkFwci5iYWNrZ3JvdW5kQ29sb3JGb2N1c2VkID0gJyNmYzYxNWMnO1xuICAgICAgICAgICAgY2JBcHIuYmFja2dyb3VuZENvbG9ySG92ZXJlZCA9IGNiQXByLmJhY2tncm91bmRDb2xvckZvY3VzZWQ7XG4gICAgICAgICAgICBjYkFwci5iYWNrZ3JvdW5kQ29sb3JQcmVzc2VkID0gY2JBcHIuYmFja2dyb3VuZENvbG9yRGVmYXVsdDtcblxuICAgICAgICAgICAgY2JBcHIuaW1hZ2VEZWZhdWx0ID0gaW1nVHJhbnNwYXJlbnQ7XG4gICAgICAgICAgICBjYkFwci5pbWFnZUhvdmVyZWQgPSBpbWFnZUNsb3NlO1xuICAgICAgICAgICAgY2JBcHIuaW1hZ2VQcmVzc2VkID0gaW1hZ2VDbG9zZTtcbiAgICAgICAgICAgIGNiQXByLmltYWdlRm9jdXNlZCA9IGltZ1RyYW5zcGFyZW50O1xuXG4gICAgICAgICAgICB2YXIgY2xvc2VCdG5FbGUgPSBwYXJ0c0J1aWxkZXIuYnVpbGRCdXR0b24oY2JBcHIpO1xuICAgICAgICAgICAgdmFyIGVsZUxlZnQgPSA4O1xuICAgICAgICAgICAgdmFyIGVsZVRvcCA9IC0xODtcbiAgICAgICAgICAgIHZhciBlbGVBbGlnbiA9ICdMRUZUX1RPUCc7XG5cbiAgICAgICAgICAgIC8vICdjbG9zZUJ1dHRvbicgaXMgYSBzcGVjaWFsIG5hbWVcbiAgICAgICAgICAgIGZBcHIuYWRkRnJhbWVDb21wb25lbnQoJ2Nsb3NlQnV0dG9uJywgY2xvc2VCdG5FbGUsIGVsZUxlZnQsIGVsZVRvcCwgZWxlQWxpZ24pO1xuXG4gICAgICAgICAgICAvL2NvbmZpZ3VyZSBjbG9zZSBidXR0b24gYXBwZWFyYW5jZVtlbmRdLy8vLy8vLy8vLy8vLy9cbiAgICAgICAgfVxuXG4gICAgICAgIHtcbiAgICAgICAgICAgIC8vY29uZmlndXJlIG1pbmltaXplIGJ1dHRvbiBhcHBlYXJhbmNlW2JlZ2luXS8vLy8vLy8vLy8vLy8vXG4gICAgICAgICAgICAvL2NvbnN0IEhZUEhFTiA9ICdcXHUyMDEzJztcblxuICAgICAgICAgICAgdmFyIG1iQXByID0gcGFydHNCdWlsZGVyLmJ1aWxkVGV4dEJ1dHRvbkFwcGVhcmFuY2UoKTtcblxuXG4gICAgICAgICAgICBtYkFwci5zaXplID0gODtcblxuICAgICAgICAgICAgbWJBcHIuYm9yZGVyUmFkaXVzID0gNDtcbiAgICAgICAgICAgIG1iQXByLmJvcmRlcldpZHRoID0gMTtcblxuICAgICAgICAgICAgbWJBcHIuYm9yZGVyQ29sb3JEZWZhdWx0ID0gJyNjNmM2YzYnO1xuICAgICAgICAgICAgbWJBcHIuYm9yZGVyQ29sb3JGb2N1c2VkID0gJyNmZGJlNDAnO1xuICAgICAgICAgICAgbWJBcHIuYm9yZGVyQ29sb3JIb3ZlcmVkID0gbWJBcHIuYm9yZGVyQ29sb3JGb2N1c2VkO1xuICAgICAgICAgICAgbWJBcHIuYm9yZGVyQ29sb3JQcmVzc2VkID0gJyNlMWExMmQnO1xuXG4gICAgICAgICAgICBtYkFwci5ib3JkZXJTdHlsZURlZmF1bHQgPSAnc29saWQnO1xuICAgICAgICAgICAgbWJBcHIuYm9yZGVyU3R5bGVGb2N1c2VkID0gbWJBcHIuYm9yZGVyU3R5bGVEZWZhdWx0O1xuICAgICAgICAgICAgbWJBcHIuYm9yZGVyU3R5bGVIb3ZlcmVkID0gbWJBcHIuYm9yZGVyU3R5bGVEZWZhdWx0O1xuICAgICAgICAgICAgbWJBcHIuYm9yZGVyU3R5bGVQcmVzc2VkID0gbWJBcHIuYm9yZGVyU3R5bGVEZWZhdWx0O1xuXG4gICAgICAgICAgICAvL2JhY2tncm91bmRcbiAgICAgICAgICAgIG1iQXByLmJhY2tncm91bmRDb2xvckRlZmF1bHQgPSAnI2QwZDBkMCc7XG4gICAgICAgICAgICBtYkFwci5iYWNrZ3JvdW5kQ29sb3JGb2N1c2VkID0gJyNmZGJlNDAnO1xuICAgICAgICAgICAgbWJBcHIuYmFja2dyb3VuZENvbG9ySG92ZXJlZCA9IG1iQXByLmJhY2tncm91bmRDb2xvckZvY3VzZWQ7XG4gICAgICAgICAgICBtYkFwci5iYWNrZ3JvdW5kQ29sb3JQcmVzc2VkID0gbWJBcHIuYmFja2dyb3VuZENvbG9yRGVmYXVsdDtcblxuICAgICAgICAgICAgbWJBcHIuaW1hZ2VEZWZhdWx0ID0gaW1nVHJhbnNwYXJlbnQ7XG4gICAgICAgICAgICBtYkFwci5pbWFnZUhvdmVyZWQgPSBpbWFnZU1pbmltaXplO1xuICAgICAgICAgICAgbWJBcHIuaW1hZ2VQcmVzc2VkID0gaW1hZ2VNaW5pbWl6ZTtcbiAgICAgICAgICAgIG1iQXByLmltYWdlRm9jdXNlZCA9IGltZ1RyYW5zcGFyZW50O1xuXG4gICAgICAgICAgICB2YXIgbWluaW1pemVCdG5FbGUgPSBwYXJ0c0J1aWxkZXIuYnVpbGRCdXR0b24obWJBcHIpO1xuICAgICAgICAgICAgdmFyIGRlbWluaW1pemVCdG5FbGUgPSBwYXJ0c0J1aWxkZXIuYnVpbGRCdXR0b24obWJBcHIpO1xuICAgICAgICAgICAgZGVtaW5pbWl6ZUJ0bkVsZS5zdHlsZS5kaXNwbGF5PSdub25lJztcbiAgICAgICAgICAgIHZhciBlbGVMZWZ0ID0gMjQ7XG4gICAgICAgICAgICB2YXIgZWxlVG9wID0gLTE4O1xuICAgICAgICAgICAgdmFyIGVsZUFsaWduID0gJ0xFRlRfVE9QJztcblxuXG4gICAgICAgICAgICBmQXByLmFkZEZyYW1lQ29tcG9uZW50KCdtaW5pbWl6ZUJ1dHRvbicsIG1pbmltaXplQnRuRWxlLCBlbGVMZWZ0LCBlbGVUb3AsIGVsZUFsaWduKTtcbiAgICAgICAgICAgIGZBcHIuYWRkRnJhbWVDb21wb25lbnQoJ2RlbWluaW1pemVCdXR0b24nLCBkZW1pbmltaXplQnRuRWxlLCBlbGVMZWZ0LCBlbGVUb3AsIGVsZUFsaWduKTtcblxuICAgICAgICAgICAgLy9jb25maWd1cmUgbWluaW1pemUgYnV0dG9uIGFwcGVhcmFuY2VbZW5kXS8vLy8vLy8vLy8vLy8vXG4gICAgICAgIH1cblxuICAgICAgICB7XG4gICAgICAgICAgICAvL2NvbmZpZ3VyZSB6b29tIGJ1dHRvbiBhcHBlYXJhbmNlW2JlZ2luXS8vLy8vLy8vLy8vLy8vXG4gICAgICAgICAgICB2YXIgemJBcHIgPSBwYXJ0c0J1aWxkZXIuYnVpbGRUZXh0QnV0dG9uQXBwZWFyYW5jZSgpO1xuXG4gICAgICAgICAgICB6YkFwci5zaXplID0gODtcblxuICAgICAgICAgICAgemJBcHIuYm9yZGVyUmFkaXVzID0gNDtcbiAgICAgICAgICAgIHpiQXByLmJvcmRlcldpZHRoID0gMTtcblxuICAgICAgICAgICAgemJBcHIuYm9yZGVyQ29sb3JEZWZhdWx0ID0gJyNjNmM2YzYnO1xuICAgICAgICAgICAgemJBcHIuYm9yZGVyQ29sb3JGb2N1c2VkID0gJyMzNGNhNDknO1xuICAgICAgICAgICAgemJBcHIuYm9yZGVyQ29sb3JIb3ZlcmVkID0gemJBcHIuYm9yZGVyQ29sb3JGb2N1c2VkO1xuICAgICAgICAgICAgemJBcHIuYm9yZGVyQ29sb3JQcmVzc2VkID0gJyMwMGFmMzgnO1xuXG4gICAgICAgICAgICB6YkFwci5ib3JkZXJTdHlsZURlZmF1bHQgPSAnc29saWQnO1xuICAgICAgICAgICAgemJBcHIuYm9yZGVyU3R5bGVGb2N1c2VkID0gemJBcHIuYm9yZGVyU3R5bGVEZWZhdWx0O1xuICAgICAgICAgICAgemJBcHIuYm9yZGVyU3R5bGVIb3ZlcmVkID0gemJBcHIuYm9yZGVyU3R5bGVEZWZhdWx0O1xuICAgICAgICAgICAgemJBcHIuYm9yZGVyU3R5bGVQcmVzc2VkID0gemJBcHIuYm9yZGVyU3R5bGVEZWZhdWx0O1xuXG4gICAgICAgICAgICAvL2JhY2tncm91bmRcbiAgICAgICAgICAgIHpiQXByLmJhY2tncm91bmRDb2xvckRlZmF1bHQgPSAnI2QwZDBkMCc7XG4gICAgICAgICAgICB6YkFwci5iYWNrZ3JvdW5kQ29sb3JGb2N1c2VkID0gJyMzNGNhNDknO1xuICAgICAgICAgICAgemJBcHIuYmFja2dyb3VuZENvbG9ySG92ZXJlZCA9IHpiQXByLmJhY2tncm91bmRDb2xvckZvY3VzZWQ7XG4gICAgICAgICAgICB6YkFwci5iYWNrZ3JvdW5kQ29sb3JQcmVzc2VkID0gemJBcHIuYmFja2dyb3VuZENvbG9yRGVmYXVsdDtcblxuICAgICAgICAgICAgLy9jYXB0aW9uXG4gICAgICAgICAgICB6YkFwci5jYXB0aW9uID0gbnVsbDtcblxuICAgICAgICAgICAgemJBcHIuaW1hZ2VEZWZhdWx0ID0gaW1nVHJhbnNwYXJlbnQ7XG4gICAgICAgICAgICB6YkFwci5pbWFnZUhvdmVyZWQgPSBpbWFnZU1heGltaXplO1xuICAgICAgICAgICAgemJBcHIuaW1hZ2VQcmVzc2VkID0gaW1hZ2VNYXhpbWl6ZTtcbiAgICAgICAgICAgIHpiQXByLmltYWdlRm9jdXNlZCA9IGltZ1RyYW5zcGFyZW50O1xuXG4gICAgICAgICAgICB2YXIgem9vbUJ0bkVsZSA9IHBhcnRzQnVpbGRlci5idWlsZEJ1dHRvbih6YkFwcik7XG4gICAgICAgICAgICB2YXIgZGV6b29tQnRuRWxlID0gcGFydHNCdWlsZGVyLmJ1aWxkQnV0dG9uKHpiQXByKTtcbiAgICAgICAgICAgIGRlem9vbUJ0bkVsZS5zdHlsZS5kaXNwbGF5PSdub25lJztcblxuXG4gICAgICAgICAgICB2YXIgZWxlTGVmdCA9IDQwO1xuICAgICAgICAgICAgdmFyIGVsZVRvcCA9IC0xODtcbiAgICAgICAgICAgIHZhciBlbGVBbGlnbiA9ICdMRUZUX1RPUCc7XG5cblxuICAgICAgICAgICAgZkFwci5hZGRGcmFtZUNvbXBvbmVudCgnem9vbUJ1dHRvbicsIHpvb21CdG5FbGUsIGVsZUxlZnQsIGVsZVRvcCwgZWxlQWxpZ24pO1xuICAgICAgICAgICAgZkFwci5hZGRGcmFtZUNvbXBvbmVudCgnZGV6b29tQnV0dG9uJywgZGV6b29tQnRuRWxlLCBlbGVMZWZ0LCBlbGVUb3AsIGVsZUFsaWduKTtcblxuXG4gICAgICAgICAgICAvL2NvbmZpZ3VyZSB6b29tIGJ1dHRvbiBhcHBlYXJhbmNlW2VuZF0vLy8vLy8vLy8vLy8vL1xuICAgICAgICB9XG4gICAgICAgIC8vXG5cbiAgICB9O1xuICAgIC8vXG5cbiAgICByZXR1cm4gZkFwcjtcbn1cblxubW9kdWxlLmV4cG9ydHMuZ2V0U3R5bGUgPSBnZXRTdHlsZTsiLCIndXNlIHN0cmljdCc7XG5cbnZhciBDU2ltcGxlTGF5b3V0QW5pbWF0b3IgPSByZXF1aXJlKCcuL0NTaW1wbGVMYXlvdXRBbmltYXRvci5qcycpO1xudmFyIENBTElHTiA9IHJlcXVpcmUoJy4vQ0NvbW1vbi5qcycpO1xuXG5mdW5jdGlvbiBXaW5kb3dFdmVudEhlbHBlcihtb2RlbCkge1xuXG4gICAgdGhpcy53aW5kb3dNb2RlID0gJ2RlZmF1bHQnO1xuICAgIHRoaXMuc3R5bGVEaXNwbGF5ID0gJ2ZsZXgnO1xuICAgIHRoaXMuaG9yaXpvbnRhbEFsaWduID0gJ2xlZnQnO1xuICAgIHRoaXMudmVydGljYWxBbGlnbiA9ICd0b3AnO1xuXG4gICAgdGhpcy5rZXlMaXN0ZW5lciA9IG51bGw7XG5cbiAgICB0aGlzLm1pbmltaXplQnV0dG9uID0gbnVsbDtcbiAgICB0aGlzLm1heGltaXplQnV0dG9uID0gbnVsbDtcbiAgICB0aGlzLmRlbWF4aW1pemVCdXR0b24gPSBudWxsO1xuICAgIHRoaXMuZGVtaW5pbWl6ZUJ1dHRvbiA9IG51bGw7XG5cbiAgICBpZiAobW9kZWwuc3R5bGVEaXNwbGF5KSB7XG4gICAgICAgIHRoaXMuc3R5bGVEaXNwbGF5ID0gbW9kZWwuc3R5bGVEaXNwbGF5O1xuICAgIH1cbiAgICBpZiAobW9kZWwubWluaW1pemVCdXR0b24pIHtcbiAgICAgICAgdGhpcy5taW5pbWl6ZUJ1dHRvbiA9IG1vZGVsLm1pbmltaXplQnV0dG9uO1xuICAgIH1cbiAgICBpZiAobW9kZWwuZGVtaW5pbWl6ZUJ1dHRvbikge1xuICAgICAgICB0aGlzLmRlbWluaW1pemVCdXR0b24gPSBtb2RlbC5kZW1pbmltaXplQnV0dG9uO1xuICAgIH1cbiAgICBpZiAobW9kZWwubWF4aW1pemVCdXR0b24pIHtcbiAgICAgICAgdGhpcy5tYXhpbWl6ZUJ1dHRvbiA9IG1vZGVsLm1heGltaXplQnV0dG9uO1xuICAgIH1cbiAgICBpZiAobW9kZWwuZGVtYXhpbWl6ZUJ1dHRvbikge1xuICAgICAgICB0aGlzLmRlbWF4aW1pemVCdXR0b24gPSBtb2RlbC5kZW1heGltaXplQnV0dG9uO1xuICAgIH1cblxuICAgIGlmIChtb2RlbC5oaWRlQnV0dG9uKSB7XG4gICAgICAgIHRoaXMuaGlkZUJ1dHRvbiA9IG1vZGVsLmhpZGVCdXR0b247XG4gICAgfVxuXG4gICAgaWYgKG1vZGVsLmhvcml6b250YWxBbGlnbikge1xuICAgICAgICB0aGlzLmhvcml6b250YWxBbGlnbiA9IG1vZGVsLmhvcml6b250YWxBbGlnbjtcbiAgICB9XG4gICAgaWYgKG1vZGVsLnZlcnRpY2FsQWxpZ24pIHtcbiAgICAgICAgdGhpcy52ZXJ0aWNhbEFsaWduID0gbW9kZWwudmVydGljYWxBbGlnbjtcbiAgICB9XG5cblxuICAgIHRoaXMuYW5pbWF0aW9uRW5hYmxlZCA9IGZhbHNlO1xuICAgIHRoaXMuYW5pbWF0aW9uRHVyYXRpb24gPSAxMDA7XG4gICAgdGhpcy5mcmFtZSA9IG1vZGVsLmZyYW1lO1xuICAgIHRoaXMuaGlkZUZyYW1lQm9yZGVyID0gdHJ1ZTtcbiAgICB0aGlzLmhpZGVUaXRsZUJhciA9IHRydWU7XG5cbiAgICB0aGlzLnJlc3RvcmVLZXkgPSBudWxsO1xuICAgIHRoaXMucmVzdG9yZUR1cmF0aW9uID0gbnVsbDtcbiAgICB0aGlzLnJlc3RvcmVDYWxsYmFjayA9IG51bGw7XG5cbiAgICB0aGlzLnN0YXRzU3RvcmUgPSB7fTtcblxuICAgIGlmIChtb2RlbC5hbmltYXRpb24pIHtcbiAgICAgICAgdGhpcy5hbmltYXRpb25FbmFibGVkID0gbW9kZWwuYW5pbWF0aW9uO1xuICAgIH1cbiAgICBpZiAobW9kZWwuYW5pbWF0aW9uRHVyYXRpb24pIHtcbiAgICAgICAgdGhpcy5hbmltYXRpb25EdXJhdGlvbiA9IG1vZGVsLmFuaW1hdGlvbkR1cmF0aW9uO1xuICAgIH1cblxuXG4gICAgLy9JZiB0aGUgdXNlciBjaGFuZ2VzIHRoZSB3aW5kb3cgc2l6ZSB3aGVuIHRoZSB3aW5kb3cgaXMgbWF4aW1pemVkIHN0YXRlLFxuICAgIC8vIGFkanVzdCB0aGUgc2l6ZSBzbyB0aGF0IHdpbmRvdyBsb29rcyBtYXhpbWl6ZWQuXG4gICAgdGhpcy5yZXNpemVMaXN0ZW5lciA9IHRoaXMuaGFuZGxlT25SZXNpemUuYmluZCh0aGlzKTtcblxuICAgIHRoaXMuZXZlbnRMaXN0ZW5lcnMgPSB7fTtcbn1cblxuV2luZG93RXZlbnRIZWxwZXIucHJvdG90eXBlLm9uID0gZnVuY3Rpb24gKGV2ZW50VHlwZSwgY2FsbGJhY2spIHtcbiAgICB2YXIgbWUgPSB0aGlzO1xuICAgIG1lLmV2ZW50TGlzdGVuZXJzW2V2ZW50VHlwZV0gPSBjYWxsYmFjaztcbn07XG5cbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5XaW5kb3dFdmVudEhlbHBlci5wcm90b3R5cGUuZG9NYXhpbWl6ZSA9IGZ1bmN0aW9uIChtb2RlbCkge1xuICAgIHZhciBtZSA9IHRoaXM7XG4gICAgdmFyIGZyYW1lID0gbWUuZnJhbWU7XG5cbiAgICAvL3NldCBvbnJlc2l6ZSBsaXN0ZW5lclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBtZS5yZXNpemVMaXN0ZW5lcik7XG5cbiAgICAvL1JlbWVtYmVyIHRoZSBzdGF0dXMgb2YgdGhlIHdpbmRvdyBiZWZvcmUgbWF4aW1pemluZyB0aGUgd2luZG93IHNpemVcbiAgICBtZS5zYXZlQ3VycmVudFdpbmRvd1N0YXRzKCdtYXhpbWl6ZV9tb2RlJyk7XG5cbiAgICBtZS5oaWRlVGl0bGVCYXIgPSBtb2RlbCA/IG1vZGVsLmhpZGVUaXRsZUJhciA6IGZhbHNlO1xuXG4gICAgaWYgKG1lLmhpZGVUaXRsZUJhcikge1xuXG4gICAgICAgIC8vSGlkZSBvbmx5IHRoZSBjdXJyZW50bHkgdmlzaWJsZSBGcmFtZUNvbXBvbmVudFxuICAgICAgICAvL+OCpuOCo+ODs+ODieOCpuOBruODouODvOODieOCkuWkieabtOOBmeOCi+WJjeOBruS7iuOBrueKtuaFi+OBp+WPr+imlueKtuaFi+OBq+OBguOCi+ODleODrOODvOODoOOCs+ODs+ODneODvOODjeODs+ODiO+8iOmWieOBmOOCi+ODnOOCv+ODs+mhnu+8ieOCkuS4jeWPr+imluOBq+OBmeOCi1xuICAgICAgICAvLyjjgr/jgqTjg4jjg6vjg5Djg7zpnZ7ooajnpLrjga7loLTlkIjjgavjga/mnIDlpKfljJbjgZnjgovjgajjgY3jga7jgqLjg4vjg6Hjg7zjgrfjg6fjg7Pjgafjg5Xjg6zjg7zjg6DjgrPjg7Pjg53jg7zjg43jg7Pjg4jjgpLopovjgZvjgarjgYTjgojjgYbjgavjgZnjgospXG4gICAgICAgIGZyYW1lLmhpZGVBbGxWaXNpYmxlRnJhbWVDb21wb25lbnRzKCk7XG5cbiAgICAgICAgLy/jgb7jgZ9oaWRlQWxsVmlzaWJsZUZyYW1lQ29tcG9uZW5044KS5a6f5pa944GZ44KL44Go44GN44Gr44CB5YCL5Yil44GuaGlkZUZyYW1lQ29tcG9uZW5044KEc2hvd0ZyYW1lQ29tcG9uZW5044KS5a6f6KGM44GZ44KL44GoXG4gICAgICAgIC8v566h55CG44K544OG44O844OI44GM56C057a744GZ44KL44Gf44KB44CB44K/44Kk44OI44Or44OQ44O86Z2e6KGo56S644Gu5aC05ZCI44Gv44Gp44GG44Gb5pON5L2c44Gn44GN44Gq44GE44Go44GE44GG44GT44Go44KC44GC44KKXG4gICAgICAgIC8vaGlkZUZyYW1lQ29tcG9uZW50IOOChCBzaG93RnJhbWVDb21wb25lbnTjga/lrp/ooYzjgZfjgarjgYRcblxuICAgIH0gZWxzZSB7XG5cbiAgICAgICAgLy9Qcm9jZXNzIHJlcXVpcmVkIGZvciBtYXhpbWl6YXRpb25cbiAgICAgICAgaWYgKG1lLm1heGltaXplQnV0dG9uKSB7XG4gICAgICAgICAgICBmcmFtZS5oaWRlRnJhbWVDb21wb25lbnQobWUubWF4aW1pemVCdXR0b24pO1xuICAgICAgICB9XG4gICAgICAgIGlmIChtZS5kZW1heGltaXplQnV0dG9uKSB7XG4gICAgICAgICAgICBmcmFtZS5zaG93RnJhbWVDb21wb25lbnQobWUuZGVtYXhpbWl6ZUJ1dHRvbiwgbWUuc3R5bGVEaXNwbGF5KTtcbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgZnJhbWUuc2V0TW92YWJsZShmYWxzZSk7XG4gICAgZnJhbWUuc2V0UmVzaXphYmxlKGZhbHNlKTtcblxuXG4gICAgaWYgKG1vZGVsICYmIG1vZGVsLnJlc3RvcmVLZXkpIHtcbiAgICAgICAgbWUucmVzdG9yZUtleSA9IG1vZGVsLnJlc3RvcmVLZXk7XG4gICAgfVxuICAgIGlmIChtb2RlbCAmJiBtb2RlbC5yZXN0b3JlRHVyYXRpb24pIHtcbiAgICAgICAgbWUucmVzdG9yZUR1cmF0aW9uID0gbW9kZWwucmVzdG9yZUR1cmF0aW9uO1xuICAgIH1cbiAgICBpZiAobW9kZWwgJiYgbW9kZWwucmVzdG9yZUNhbGxiYWNrKSB7XG4gICAgICAgIG1lLnJlc3RvcmVDYWxsYmFjayA9IG1vZGVsLnJlc3RvcmVDYWxsYmFjaztcbiAgICB9XG4gICAgLy9SZW5kZXIgbWF4aW1pemF0aW9uIGl0c2VsZlxuICAgIG1lLnJlbmRlck1heGltaXplZE1vZGUoe1xuICAgICAgICBhbmltYXRpb246IG1lLmFuaW1hdGlvbkVuYWJsZWQsXG4gICAgICAgIGNhbGxiYWNrOiAobW9kZWwgJiYgbW9kZWwuY2FsbGJhY2spID8gbW9kZWwuY2FsbGJhY2sgOiBudWxsLCAvL3NldCBtYXhpbWl6ZWQgZmluaXNoZWQgY2FsbGJhY2tcbiAgICAgICAgZHVyYXRpb246IChtb2RlbCAmJiBtb2RlbC5kdXJhdGlvbikgPyBtb2RlbC5kdXJhdGlvbiA6IG51bGwsXG4gICAgfSk7XG59O1xuXG4vKipcbiAqIFJlbmRlciB3aW5kb3cgYXMgYSBtYXhpbWl6ZWQgbW9kZSggZnVsbCBzY3JlZW4gKVxuICovXG5XaW5kb3dFdmVudEhlbHBlci5wcm90b3R5cGUucmVuZGVyTWF4aW1pemVkTW9kZSA9IGZ1bmN0aW9uIChtb2RlbCkge1xuICAgIHZhciBtZSA9IHRoaXM7XG4gICAgdmFyIGZyYW1lID0gbWUuZnJhbWU7XG4gICAgdmFyIGZyb20gPSBtZS5sb2FkV2luZG93U3RhdHMoJ21heGltaXplX21vZGUnKTtcblxuICAgIHZhciBfdG9YID0gMDtcbiAgICB2YXIgX3RvWSA9IDA7XG4gICAgdmFyIF90b1dpZHRoID0gMDtcbiAgICB2YXIgX3RvSGVpZ2h0ID0gMDtcblxuICAgIC8vY29tcHV0ZSBwb3NpdGlvbiBhbmQgc2l6ZVtiZWdpbl1cbiAgICBpZiAobWUuaGlkZVRpdGxlQmFyKSB7XG4gICAgICAgIF90b1ggPSAwO1xuICAgICAgICBfdG9ZID0gLWZyb20udGl0bGVCYXJIZWlnaHQ7XG4gICAgfVxuXG4gICAgaWYgKG1lLmhpZGVGcmFtZUJvcmRlcikge1xuICAgICAgICBfdG9XaWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xuICAgICAgICBfdG9IZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQgKyAobWUuaGlkZVRpdGxlQmFyID8gZnJvbS50aXRsZUJhckhlaWdodCA6IDApO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIF90b1dpZHRoID0gd2luZG93LmlubmVyV2lkdGggLSBmcm9tLmZyYW1lQm9yZGVyV2lkdGhEZWZhdWx0ICogMjtcbiAgICAgICAgX3RvSGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0IC0gZnJvbS5mcmFtZUJvcmRlcldpZHRoRGVmYXVsdCAqIDIgKyAobWUuaGlkZVRpdGxlQmFyID8gZnJvbS50aXRsZUJhckhlaWdodCA6IDApO1xuICAgIH1cbiAgICAvL2NvbXB1dGUgcG9zaXRpb24gYW5kIHNpemVbZW5kXVxuXG4gICAgaWYgKG1lLmhvcml6b250YWxBbGlnbiA9PSAncmlnaHQnKSB7XG4gICAgICAgIF90b1ggPSAtX3RvV2lkdGg7XG4gICAgfVxuICAgIGlmIChtZS52ZXJ0aWNhbEFsaWduID09ICdib3R0b20nKSB7XG4gICAgICAgIF90b1kgPSAtX3RvSGVpZ2h0O1xuICAgIH1cblxuXG4gICAgLy9yZW5kZXIgcG9zaXRpb24gYW5kIHNpemVbYmVnaW5dXG4gICAgdmFyIGZ1bmNEb1JlbmRlciA9IGZ1bmN0aW9uICgpIHtcblxuICAgICAgICBmcmFtZS5zZXRQb3NpdGlvbihfdG9YLCBfdG9ZKTtcblxuICAgICAgICBpZiAobWUuaGlkZUZyYW1lQm9yZGVyKSB7XG4gICAgICAgICAgICBmcmFtZS5mcmFtZUJvcmRlcldpZHRoRGVmYXVsdCA9IDA7XG4gICAgICAgICAgICBmcmFtZS5mcmFtZUJvcmRlcldpZHRoRm9jdXNlZCA9IDA7XG4gICAgICAgICAgICBmcmFtZS5odG1sRWxlbWVudC5zdHlsZS5ib3JkZXJXaWR0aCA9ICcwcHgnO1xuICAgICAgICB9XG4gICAgICAgIGZyYW1lLnNldFNpemUoX3RvV2lkdGgsIF90b0hlaWdodCwgdHJ1ZSk7XG5cbiAgICAgICAgaWYgKG1lLmhpZGVUaXRsZUJhcikge1xuXG4gICAgICAgICAgICBpZiAobWUucmVzdG9yZUtleSkge1xuICAgICAgICAgICAgICAgIG1lLmtleUxpc3RlbmVyID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChldmVudC5rZXkgPT09IG1lLnJlc3RvcmVLZXkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lLmRvRGVtYXhpbWl6ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246IG1lLnJlc3RvcmVEdXJhdGlvbiA/IG1lLnJlc3RvcmVEdXJhdGlvbiA6IG51bGwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IG1lLnJlc3RvcmVDYWxsYmFjayA/IG1lLnJlc3RvcmVDYWxsYmFjayA6IG51bGxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBtZS5rZXlMaXN0ZW5lcik7XG4gICAgICAgICAgICAvL2FkZCBrZXlsaXN0ZW5lciBmb3IgaW5zaWRlIHRoZSBpZnJhbWVcbiAgICAgICAgICAgIGlmIChmcmFtZS5pZnJhbWUpIHtcbiAgICAgICAgICAgICAgICBmcmFtZS5pZnJhbWUuY29udGVudFdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgbWUua2V5TGlzdGVuZXIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgbWUud2luZG93TW9kZSA9ICdtYXhpbWl6ZWQnO1xuXG4gICAgICAgIGlmIChtb2RlbCAmJiBtb2RlbC5jYWxsYmFjaykge1xuICAgICAgICAgICAgbW9kZWwuY2FsbGJhY2sobWUuZnJhbWUsIHtldmVudFR5cGU6ICdtYXhpbWl6ZWQnfSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG1lLmV2ZW50TGlzdGVuZXJzWydtYXhpbWl6ZWQnXSkge1xuICAgICAgICAgICAgbWUuZXZlbnRMaXN0ZW5lcnNbJ21heGltaXplZCddKG1lLmZyYW1lLCB7ZXZlbnRUeXBlOiAnbWF4aW1pemVkJ30pO1xuICAgICAgICB9XG4gICAgfTtcblxuXG4gICAgaWYgKG1vZGVsICYmIG1vZGVsLmFuaW1hdGlvbikge1xuXG5cbiAgICAgICAgbWUuYW5pbWF0ZUZyYW1lKHtcbiAgICAgICAgICAgIGZyYW1lOiBmcmFtZSxcbiAgICAgICAgICAgIGZyb206IGZyb20sXG4gICAgICAgICAgICB0bzoge1xuICAgICAgICAgICAgICAgIGxlZnQ6IF90b1gsXG4gICAgICAgICAgICAgICAgdG9wOiBfdG9ZLFxuICAgICAgICAgICAgICAgIHdpZHRoOiBfdG9XaWR0aCxcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IF90b0hlaWdodFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGR1cmF0aW9uOiBtb2RlbC5kdXJhdGlvbiA/IG1vZGVsLmR1cmF0aW9uIDogbWUuYW5pbWF0aW9uRHVyYXRpb24sXG4gICAgICAgICAgICBjYWxsYmFjazogZnVuY0RvUmVuZGVyXG4gICAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGZ1bmNEb1JlbmRlcigpO1xuICAgIH1cbiAgICAvL3JlbmRlciBwb3NpdGlvbiBhbmQgc2l6ZVtlbmRdXG59O1xuXG5cbi8qKlxuICogUmVzdG9yZSB3aW5kb3cgZnJvbSBtYXhpbWl6ZWQgbW9kZVxuICovXG5XaW5kb3dFdmVudEhlbHBlci5wcm90b3R5cGUuZG9EZW1heGltaXplID0gZnVuY3Rpb24gKG1vZGVsKSB7XG4gICAgdmFyIG1lID0gdGhpcztcbiAgICB2YXIgZnJhbWUgPSBtZS5mcmFtZTtcblxuICAgIGlmICghbWUuaGFzV2luZG93U3RhdHMoJ21heGltaXplX21vZGUnKSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKG1lLmhpZGVUaXRsZUJhcikge1xuXG4gICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKG1lLm1heGltaXplQnV0dG9uKSB7XG4gICAgICAgICAgICBmcmFtZS5zaG93RnJhbWVDb21wb25lbnQobWUubWF4aW1pemVCdXR0b24sIG1lLnN0eWxlRGlzcGxheSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG1lLmRlbWF4aW1pemVCdXR0b24pIHtcbiAgICAgICAgICAgIGZyYW1lLmhpZGVGcmFtZUNvbXBvbmVudChtZS5kZW1heGltaXplQnV0dG9uKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG1lLnJlc3RvcmVXaW5kb3coe1xuICAgICAgICByZXN0b3JlUG9zaXRpb246IHRydWUsXG4gICAgICAgIHJlc3RvcmVNb2RlOiAnbWF4aW1pemVfbW9kZScsXG4gICAgICAgIGFuaW1hdGlvbjogbWUuYW5pbWF0aW9uRW5hYmxlZCxcbiAgICAgICAgY2FsbGJhY2s6IChtb2RlbCAmJiBtb2RlbC5jYWxsYmFjaykgPyBtb2RlbC5jYWxsYmFjayA6IG51bGwsXG4gICAgICAgIGZvcmNlU2hvd0ZyYW1lQ29tcG9uZW50czogKG1lLmFuaW1hdGlvbkVuYWJsZWQgJiYgbWUuaGlkZVRpdGxlQmFyKSxcbiAgICAgICAgZHVyYXRpb246IChtb2RlbCAmJiBtb2RlbC5kdXJhdGlvbikgPyBtb2RlbC5kdXJhdGlvbiA6IG51bGwsXG4gICAgICAgIGV2ZW50VHlwZTogJ2RlbWF4aW1pemVkJ1xuICAgIH0pO1xufTtcblxuXG4vKipcbiAqIENhbGxlZCB3aGVuIGNoYW5naW5nIHRoZSB3aW5kb3cgc2l6ZSBieSB1c2VyIG9wZXJhdGlvbiBpbiBtYXhpbWl6ZWQgbW9kZVxuICovXG5XaW5kb3dFdmVudEhlbHBlci5wcm90b3R5cGUuaGFuZGxlT25SZXNpemUgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIG1lID0gdGhpcztcbiAgICBtZS5yZW5kZXJNYXhpbWl6ZWRNb2RlKCk7XG59O1xuXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4vKipcbiAqIE1ha2Ugd2luZG93IG1pbmltaXplZCBtb2RlXG4gKi9cbldpbmRvd0V2ZW50SGVscGVyLnByb3RvdHlwZS5kb01pbmltaXplID0gZnVuY3Rpb24gKG1vZGVsKSB7XG5cbiAgICB2YXIgbWUgPSB0aGlzO1xuICAgIHZhciBmcmFtZSA9IG1lLmZyYW1lO1xuXG4gICAgLy9SZW1lbWJlciB0aGUgc3RhdHMgb2YgdGhlIHdpbmRvdyBiZWZvcmUgbWF4aW1pemluZyB0aGUgd2luZG93XG4gICAgbWUuc2F2ZUN1cnJlbnRXaW5kb3dTdGF0cygnbWluaW1pemVfbW9kZScpO1xuXG5cbiAgICBmcmFtZS5zZXRSZXNpemFibGUoZmFsc2UpO1xuXG4gICAgbWUucmVuZGVyTWluaW1pemVkTW9kZSh7XG4gICAgICAgIGFuaW1hdGlvbjogbWUuYW5pbWF0aW9uRW5hYmxlZCxcbiAgICAgICAgY2FsbGJhY2s6IChtb2RlbCAmJiBtb2RlbC5jYWxsYmFjaykgPyBtb2RlbC5jYWxsYmFjayA6IG51bGwsXG4gICAgICAgIGR1cmF0aW9uOiAobW9kZWwgJiYgbW9kZWwuZHVyYXRpb24pID8gbW9kZWwuZHVyYXRpb24gOiBudWxsXG4gICAgfSk7XG59O1xuXG5cbi8qKlxuICogUmVuZGVyIHdpbmRvdyBhcyBtaW5pbWl6ZWQgbW9kZVxuICovXG5XaW5kb3dFdmVudEhlbHBlci5wcm90b3R5cGUucmVuZGVyTWluaW1pemVkTW9kZSA9IGZ1bmN0aW9uIChtb2RlbCkge1xuICAgIHZhciBtZSA9IHRoaXM7XG4gICAgdmFyIGZyYW1lID0gbWUuZnJhbWU7XG4gICAgdmFyIHJpID0gbWUubG9hZFdpbmRvd1N0YXRzKCdtaW5pbWl6ZV9tb2RlJyk7XG5cbiAgICB2YXIgZnJvbSA9IG1lLmdldEN1cnJlbnRXaW5kb3dTdGF0cygpO1xuICAgIHZhciB0byA9IG1lLmdldEN1cnJlbnRXaW5kb3dTdGF0cygpO1xuXG4gICAgdG8uaGVpZ2h0ID0gcmkudGl0bGVCYXJIZWlnaHQ7XG5cbiAgICB2YXIgZnVuY0RvUmVuZGVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgZm9yY2VTZXRTaXplID0gdHJ1ZTtcbiAgICAgICAgZnJhbWUuc2V0U2l6ZSh0by53aWR0aCwgdG8uaGVpZ2h0LCBmb3JjZVNldFNpemUpO1xuXG4gICAgICAgIG1lLndpbmRvd01vZGUgPSAnbWluaW1pemVkJztcblxuICAgICAgICBpZiAobWUubWluaW1pemVCdXR0b24pIHtcbiAgICAgICAgICAgIGZyYW1lLmhpZGVGcmFtZUNvbXBvbmVudChtZS5taW5pbWl6ZUJ1dHRvbik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAobWUuZGVtaW5pbWl6ZUJ1dHRvbikge1xuICAgICAgICAgICAgZnJhbWUuc2hvd0ZyYW1lQ29tcG9uZW50KG1lLmRlbWluaW1pemVCdXR0b24sIG1lLnN0eWxlRGlzcGxheSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAobW9kZWwuY2FsbGJhY2spIHtcbiAgICAgICAgICAgIG1vZGVsLmNhbGxiYWNrKG1lLmZyYW1lLCB7ZXZlbnRUeXBlOiAnbWluaW1pemVkJ30pO1xuICAgICAgICB9XG4gICAgICAgIGlmIChtZS5ldmVudExpc3RlbmVyc1snbWluaW1pemVkJ10pIHtcbiAgICAgICAgICAgIG1lLmV2ZW50TGlzdGVuZXJzWydtaW5pbWl6ZWQnXShtZS5mcmFtZSwge2V2ZW50VHlwZTogJ21pbmltaXplZCd9KTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBpZiAobW9kZWwgJiYgbW9kZWwuYW5pbWF0aW9uKSB7XG4gICAgICAgIG1lLmFuaW1hdGVGcmFtZSh7XG4gICAgICAgICAgICB0b0FscGhhOiAxLjAsXG4gICAgICAgICAgICBkdXJhdGlvbjogbW9kZWwuZHVyYXRpb24gPyBtb2RlbC5kdXJhdGlvbiA6IG1lLmFuaW1hdGlvbkR1cmF0aW9uLFxuICAgICAgICAgICAgZnJhbWU6IGZyYW1lLFxuICAgICAgICAgICAgZnJvbTogZnJvbSxcbiAgICAgICAgICAgIHRvOiB0byxcbiAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jRG9SZW5kZXJcbiAgICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgZnVuY0RvUmVuZGVyKCk7XG4gICAgfVxuXG5cbn07XG5cblxuLyoqXG4gKiBSZXN0b3JlIHdpbmRvdyBmcm9tIG1pbmltaXplZCBtb2RlXG4gKi9cbldpbmRvd0V2ZW50SGVscGVyLnByb3RvdHlwZS5kb0RlbWluaW1pemUgPSBmdW5jdGlvbiAobW9kZWwpIHtcbiAgICB2YXIgbWUgPSB0aGlzO1xuICAgIHZhciBmcmFtZSA9IG1lLmZyYW1lO1xuXG4gICAgaWYgKCFtZS5oYXNXaW5kb3dTdGF0cygnbWluaW1pemVfbW9kZScpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAobWUubWluaW1pemVCdXR0b24pIHtcbiAgICAgICAgZnJhbWUuc2hvd0ZyYW1lQ29tcG9uZW50KG1lLm1pbmltaXplQnV0dG9uLCBtZS5zdHlsZURpc3BsYXkpO1xuICAgIH1cbiAgICBpZiAobWUuZGVtaW5pbWl6ZUJ1dHRvbikge1xuICAgICAgICBmcmFtZS5oaWRlRnJhbWVDb21wb25lbnQobWUuZGVtaW5pbWl6ZUJ1dHRvbik7XG4gICAgfVxuXG4gICAgbWUucmVzdG9yZVdpbmRvdyhcbiAgICAgICAge1xuICAgICAgICAgICAgcmVzdG9yZVBvc2l0aW9uOiBmYWxzZSxcbiAgICAgICAgICAgIHJlc3RvcmVNb2RlOiAnbWluaW1pemVfbW9kZScsXG4gICAgICAgICAgICBhbmltYXRpb246IG1lLmFuaW1hdGlvbkVuYWJsZWQsXG4gICAgICAgICAgICBkdXJhdGlvbjogKG1vZGVsICYmIG1vZGVsLmR1cmF0aW9uKSA/IG1vZGVsLmR1cmF0aW9uIDogbnVsbCxcbiAgICAgICAgICAgIGNhbGxiYWNrOiAobW9kZWwgJiYgbW9kZWwuY2FsbGJhY2spID8gbW9kZWwuY2FsbGJhY2sgOiBudWxsLFxuICAgICAgICAgICAgZXZlbnRUeXBlOiAnZGVtaW5pbWl6ZWQnXG4gICAgICAgIH0pO1xufTtcblxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8qKlxuICogTWFrZSB3aW5kb3cgaGlkZGVuIG1vZGVcbiAqL1xuV2luZG93RXZlbnRIZWxwZXIucHJvdG90eXBlLmRvSGlkZSA9IGZ1bmN0aW9uIChtb2RlbCkge1xuXG4gICAgdmFyIG1lID0gdGhpcztcbiAgICB2YXIgZnJhbWUgPSBtZS5mcmFtZTtcblxuICAgIC8vUmVtZW1iZXIgdGhlIHN0YXRzIG9mIHRoZSB3aW5kb3cgYmVmb3JlIG1heGltaXppbmcgdGhlIHdpbmRvd1xuICAgIG1lLnNhdmVDdXJyZW50V2luZG93U3RhdHMoJ2hpZGVfbW9kZScpO1xuXG5cbiAgICBmcmFtZS5zZXRSZXNpemFibGUoZmFsc2UpO1xuXG4gICAgbWUucmVuZGVySGlkZU1vZGUoe1xuICAgICAgICBzaWxlbnQ6IG1vZGVsLnNpbGVudCxcbiAgICAgICAgYW5pbWF0aW9uOiBtZS5hbmltYXRpb25FbmFibGVkLFxuICAgICAgICBkdXJhdGlvbjogKG1vZGVsICYmIG1vZGVsLmR1cmF0aW9uKSA/IG1vZGVsLmR1cmF0aW9uIDogbnVsbCxcbiAgICAgICAgY2FsbGJhY2s6IChtb2RlbCAmJiBtb2RlbC5jYWxsYmFjaykgPyBtb2RlbC5jYWxsYmFjayA6IG51bGwsXG4gICAgICAgIGFsaWduOiAobW9kZWwgJiYgbW9kZWwuYWxpZ24pID8gbW9kZWwuYWxpZ24gOiBudWxsLFxuICAgICAgICBvZmZzZXQ6IG1vZGVsLm9mZnNldFxuICAgIH0pO1xufTtcblxuXG4vKipcbiAqIFJlbmRlciB3aW5kb3cgYXMgaGlkZGVuIG1vZGVcbiAqL1xuV2luZG93RXZlbnRIZWxwZXIucHJvdG90eXBlLnJlbmRlckhpZGVNb2RlID0gZnVuY3Rpb24gKG1vZGVsKSB7XG4gICAgdmFyIG1lID0gdGhpcztcbiAgICB2YXIgZnJhbWUgPSBtZS5mcmFtZTtcbiAgICB2YXIgcmkgPSBtZS5sb2FkV2luZG93U3RhdHMoJ2hpZGVfbW9kZScpO1xuXG4gICAgdmFyIGZyb20gPSBtZS5nZXRDdXJyZW50V2luZG93U3RhdHMoKTtcblxuICAgIHZhciBvZmZzZXQgPSB7eDogMCwgeTogMH07XG4gICAgaWYgKG1vZGVsLm9mZnNldCkge1xuICAgICAgICBvZmZzZXQgPSBtb2RlbC5vZmZzZXQ7XG4gICAgfVxuXG4gICAgdmFyIGxlZnQgPSAwO1xuICAgIHZhciB0b3AgPSAwO1xuICAgIHtcbiAgICAgICAgdmFyIGFsaWduID0gKG1vZGVsICYmIG1vZGVsLmFsaWduKSA/IG1vZGVsLmFsaWduIDogJ0xFRlRfVE9QJztcblxuXG4gICAgICAgIGlmICghYWxpZ24gfHwgQ0FMSUdOLkxFRlRfVE9QID09IGFsaWduKSB7XG4gICAgICAgICAgICBsZWZ0ID0gZnJvbS5sZWZ0O1xuICAgICAgICAgICAgdG9wID0gZnJvbS50b3A7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoQ0FMSUdOLkhDRU5URVJfVE9QID09IGFsaWduKSB7XG4gICAgICAgICAgICBsZWZ0ID0gZnJvbS5sZWZ0ICsgZnJvbS53aWR0aCAvIDI7XG4gICAgICAgICAgICB0b3AgPSBmcm9tLnRvcDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChDQUxJR04uUklHSFRfVE9QID09IGFsaWduKSB7XG4gICAgICAgICAgICBsZWZ0ID0gZnJvbS5sZWZ0ICsgZnJvbS53aWR0aDtcbiAgICAgICAgICAgIHRvcCA9IGZyb20udG9wO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKENBTElHTi5MRUZUX1ZDRU5URVIgPT0gYWxpZ24pIHtcbiAgICAgICAgICAgIGxlZnQgPSBmcm9tLmxlZnQ7XG4gICAgICAgICAgICB0b3AgPSBmcm9tLnRvcCArIGZyb20uaGVpZ2h0IC8gMjtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChDQUxJR04uSENFTlRFUl9WQ0VOVEVSID09IGFsaWduKSB7XG4gICAgICAgICAgICBsZWZ0ID0gZnJvbS5sZWZ0ICsgZnJvbS53aWR0aCAvIDI7XG4gICAgICAgICAgICB0b3AgPSBmcm9tLnRvcCArIGZyb20uaGVpZ2h0IC8gMjtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChDQUxJR04uUklHSFRfVkNFTlRFUiA9PSBhbGlnbikge1xuICAgICAgICAgICAgbGVmdCA9IGZyb20ubGVmdCArIGZyb20ud2lkdGg7XG4gICAgICAgICAgICB0b3AgPSBmcm9tLnRvcCArIGZyb20uaGVpZ2h0IC8gMjtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChDQUxJR04uTEVGVF9CT1RUT00gPT0gYWxpZ24pIHtcbiAgICAgICAgICAgIGxlZnQgPSBmcm9tLmxlZnQ7XG4gICAgICAgICAgICB0b3AgPSBmcm9tLnRvcCArIGZyb20uaGVpZ2h0O1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKENBTElHTi5IQ0VOVEVSX0JPVFRPTSA9PSBhbGlnbikge1xuICAgICAgICAgICAgbGVmdCA9IGZyb20ubGVmdCArIGZyb20ud2lkdGggLyAyO1xuICAgICAgICAgICAgdG9wID0gZnJvbS50b3AgKyBmcm9tLmhlaWdodDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChDQUxJR04uUklHSFRfQk9UVE9NID09IGFsaWduKSB7XG4gICAgICAgICAgICBsZWZ0ID0gZnJvbS5sZWZ0ICsgZnJvbS53aWR0aDtcbiAgICAgICAgICAgIHRvcCA9IGZyb20udG9wICsgZnJvbS5oZWlnaHQ7XG5cbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICgnQUJTT0xVVEUnID09IGFsaWduKSB7XG4gICAgICAgICAgICBsZWZ0ID0gb2Zmc2V0Lng7XG4gICAgICAgICAgICB0b3AgPSBvZmZzZXQueTtcbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgdmFyIHRvID0ge1xuICAgICAgICBsZWZ0OiBsZWZ0LFxuICAgICAgICB0b3A6IHRvcCxcbiAgICAgICAgd2lkdGg6IDAsXG4gICAgICAgIC8vbWluaW11bSBoZWlnaHQgbXVzdCBiZSB0aXRsZUJhckhlaWdodFxuICAgICAgICBoZWlnaHQ6IHJpLnRpdGxlQmFySGVpZ2h0XG4gICAgfTtcblxuICAgIHZhciBmdW5jRG9SZW5kZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBmb3JjZVNldFNpemUgPSB0cnVlO1xuICAgICAgICBmcmFtZS5zZXRTaXplKHRvLndpZHRoLCB0by5oZWlnaHQsIGZvcmNlU2V0U2l6ZSk7XG4gICAgICAgIC8vZnJhbWUuaGlkZSgpO1xuXG4gICAgICAgIG1lLndpbmRvd01vZGUgPSAnaGlkJztcblxuICAgICAgICBpZiAobW9kZWwgJiYgbW9kZWwuY2FsbGJhY2spIHtcbiAgICAgICAgICAgIG1vZGVsLmNhbGxiYWNrKG1lLmZyYW1lLCB7ZXZlbnRUeXBlOiAnaGlkJ30pO1xuICAgICAgICB9XG4gICAgICAgIGlmIChtZS5ldmVudExpc3RlbmVyc1snaGlkJ10pIHtcbiAgICAgICAgICAgIG1lLmV2ZW50TGlzdGVuZXJzWydoaWQnXShtZS5mcmFtZSwge2V2ZW50VHlwZTogJ2hpZCd9KTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvL0hpZGUgb25seSB0aGUgY3VycmVudGx5IHZpc2libGUgRnJhbWVDb21wb25lbnRcbiAgICBmcmFtZS5oaWRlQWxsVmlzaWJsZUZyYW1lQ29tcG9uZW50cygpO1xuXG4gICAgaWYgKG1vZGVsICYmIG1vZGVsLmFuaW1hdGlvbikge1xuICAgICAgICBtZS5hbmltYXRlRnJhbWUoe1xuICAgICAgICAgICAgZnJvbUFscGhhOiBtb2RlbC5zaWxlbnQgPyAwIDogMS4wLFxuICAgICAgICAgICAgdG9BbHBoYTogMCxcbiAgICAgICAgICAgIGR1cmF0aW9uOiBtb2RlbC5kdXJhdGlvbiA/IG1vZGVsLmR1cmF0aW9uIDogbWUuYW5pbWF0aW9uRHVyYXRpb24sXG4gICAgICAgICAgICBmcmFtZTogZnJhbWUsXG4gICAgICAgICAgICBmcm9tOiBmcm9tLFxuICAgICAgICAgICAgdG86IHRvLFxuICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmNEb1JlbmRlclxuICAgICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBmdW5jRG9SZW5kZXIoKTtcbiAgICB9XG5cblxufTtcblxuXG4vKipcbiAqIFJlc3RvcmUgd2luZG93IGZyb20gaGlkZWQgbW9kZVxuICovXG5XaW5kb3dFdmVudEhlbHBlci5wcm90b3R5cGUuZG9EZWhpZGUgPSBmdW5jdGlvbiAobW9kZWwpIHtcbiAgICB2YXIgbWUgPSB0aGlzO1xuICAgIHZhciBmcmFtZSA9IG1lLmZyYW1lO1xuXG4gICAgaWYgKCFtZS5oYXNXaW5kb3dTdGF0cygnaGlkZV9tb2RlJykpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIG1lLnJlc3RvcmVXaW5kb3coXG4gICAgICAgIHtcbiAgICAgICAgICAgIGR1cmF0aW9uOiAobW9kZWwgJiYgbW9kZWwuZHVyYXRpb24pID8gbW9kZWwuZHVyYXRpb24gOiBudWxsLFxuICAgICAgICAgICAgcmVzdG9yZVBvc2l0aW9uOiB0cnVlLFxuICAgICAgICAgICAgcmVzdG9yZU1vZGU6ICdoaWRlX21vZGUnLFxuICAgICAgICAgICAgYW5pbWF0aW9uOiBtZS5hbmltYXRpb25FbmFibGVkLFxuICAgICAgICAgICAgZm9yY2VTaG93RnJhbWVDb21wb25lbnRzOiB0cnVlLFxuICAgICAgICAgICAgY2FsbGJhY2s6IChtb2RlbCAmJiBtb2RlbC5jYWxsYmFjaykgPyBtb2RlbC5jYWxsYmFjayA6IG51bGwsXG4gICAgICAgICAgICBldmVudFR5cGU6ICdkZWhpZGVkJ1xuICAgICAgICB9KTtcbn07XG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuV2luZG93RXZlbnRIZWxwZXIucHJvdG90eXBlLmxvYWRXaW5kb3dTdGF0cyA9IGZ1bmN0aW9uIChzdG9yZUtleU5hbWUpIHtcbiAgICB2YXIgbWUgPSB0aGlzO1xuICAgIHJldHVybiBtZS5zdGF0c1N0b3JlW3N0b3JlS2V5TmFtZV07XG59O1xuXG4vKipcbiAqIFJlbWVtYmVyIHRoZSBzdGF0dXMgb2YgdGhlIHdpbmRvdyBiZWZvcmUgbWF4aW1pemluZyBvciBtaW5pbWl6aW5nIHRoZSB3aW5kb3cgc2l6ZVxuICovXG5XaW5kb3dFdmVudEhlbHBlci5wcm90b3R5cGUuc2F2ZUN1cnJlbnRXaW5kb3dTdGF0cyA9IGZ1bmN0aW9uIChzdG9yZUtleU5hbWUpIHtcbiAgICB2YXIgbWUgPSB0aGlzO1xuICAgIG1lLnN0YXRzU3RvcmVbc3RvcmVLZXlOYW1lXSA9IG1lLmdldEN1cnJlbnRXaW5kb3dTdGF0cygpO1xufTtcblxuV2luZG93RXZlbnRIZWxwZXIucHJvdG90eXBlLmNsZWFyV2luZG93U3RhdHMgPSBmdW5jdGlvbiAoc3RvcmVLZXlOYW1lKSB7XG4gICAgdmFyIG1lID0gdGhpcztcbiAgICBtZS5zdGF0c1N0b3JlW3N0b3JlS2V5TmFtZV0gPSBudWxsO1xufTtcblxuV2luZG93RXZlbnRIZWxwZXIucHJvdG90eXBlLmhhc1dpbmRvd1N0YXRzID0gZnVuY3Rpb24gKHN0b3JlS2V5TmFtZSkge1xuICAgIHZhciBtZSA9IHRoaXM7XG4gICAgcmV0dXJuIG1lLnN0YXRzU3RvcmVbc3RvcmVLZXlOYW1lXTtcbn07XG5cbldpbmRvd0V2ZW50SGVscGVyLnByb3RvdHlwZS5nZXRDdXJyZW50V2luZG93U3RhdHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIG1lID0gdGhpcztcbiAgICB2YXIgZnJhbWUgPSBtZS5mcmFtZTtcblxuICAgIC8vQWNxdWlyZSB3aW5kb3cncyBzdGF0c1xuICAgIHZhciBfX3RpdGxlQmFySGVpZ2h0ID0gcGFyc2VJbnQoZnJhbWUudGl0bGVCYXIuc3R5bGUuaGVpZ2h0LCAxMCk7XG4gICAgdmFyIF9fZnJhbWVCb3JkZXJXaWR0aERlZmF1bHQgPSBmcmFtZS5mcmFtZUJvcmRlcldpZHRoRGVmYXVsdDsvLyBwYXJzZUludChmcmFtZS5odG1sRWxlbWVudC5zdHlsZS5ib3JkZXJXaWR0aCwgMTApO1xuICAgIHZhciBfX2ZyYW1lQm9yZGVyV2lkdGhGb2N1c2VkID0gZnJhbWUuZnJhbWVCb3JkZXJXaWR0aEZvY3VzZWQ7XG4gICAgdmFyIF9fbGVmdCA9IGZyYW1lLmdldExlZnQoKTtcbiAgICB2YXIgX190b3AgPSBmcmFtZS5nZXRUb3AoKTtcbiAgICB2YXIgX193aWR0aCA9IGZyYW1lLmdldFdpZHRoKCk7XG4gICAgdmFyIF9faGVpZ2h0ID0gZnJhbWUuZ2V0SGVpZ2h0KCk7XG4gICAgdmFyIF9fcmVzaXphYmxlID0gZnJhbWUucmVzaXphYmxlO1xuICAgIHZhciBfX21vdmFibGUgPSBmcmFtZS5tb3ZhYmxlO1xuXG5cbiAgICByZXR1cm4ge1xuICAgICAgICBsZWZ0OiBfX2xlZnQsXG4gICAgICAgIHRvcDogX190b3AsXG4gICAgICAgIHdpZHRoOiBfX3dpZHRoLFxuICAgICAgICBoZWlnaHQ6IF9faGVpZ2h0LFxuICAgICAgICB0aXRsZUJhckhlaWdodDogX190aXRsZUJhckhlaWdodCxcbiAgICAgICAgZnJhbWVCb3JkZXJXaWR0aERlZmF1bHQ6IF9fZnJhbWVCb3JkZXJXaWR0aERlZmF1bHQsXG4gICAgICAgIGZyYW1lQm9yZGVyV2lkdGhGb2N1c2VkOiBfX2ZyYW1lQm9yZGVyV2lkdGhGb2N1c2VkLFxuICAgICAgICByZXNpemFibGU6IF9fcmVzaXphYmxlLFxuICAgICAgICBtb3ZhYmxlOiBfX21vdmFibGUsXG4gICAgfTtcbn07XG5cblxuLyoqXG4gKiBSZXN0b3JlIHRoZSBzdGF0ZSBvZiB0aGUgd2luZG93XG4gKiBAcGFyYW0gbW9kZWxcbiAqL1xuV2luZG93RXZlbnRIZWxwZXIucHJvdG90eXBlLnJlc3RvcmVXaW5kb3cgPSBmdW5jdGlvbiAobW9kZWwpIHtcbiAgICB2YXIgbWUgPSB0aGlzO1xuICAgIHZhciBmcmFtZSA9IG1lLmZyYW1lO1xuICAgIHZhciB0byA9IG1lLmxvYWRXaW5kb3dTdGF0cyhtb2RlbC5yZXN0b3JlTW9kZSk7XG4gICAgLy/nj77lnKjjga7nirbmhYvjgpLkuIDmmYLkv53lrZjjgZnjgotcbiAgICAvL21lLnNhdmVDdXJyZW50V2luZG93U3RhdHMoJ3RlbXAnKTtcbiAgICB2YXIgY3JyID0gbWUuZ2V0Q3VycmVudFdpbmRvd1N0YXRzKCk7Ly9sb2FkV2luZG93U3RhdHMoJ3RlbXAnKTtcblxuXG4gICAgLy/ku6XkuIvjga4z44Gk44Gv44CB44Oc44O844OA44O844KS5aSq44GV44KS5aSJ5pu044GZ44KL44Gf44KB44Gu44KC44Gu44Gg44GMXG4gICAgLy8gZnVuY0RvUmVuZGVy5YaF44Gn5Yem55CG44GX44Gm44GX44G+44GG44Go44Ki44OL44Oh44O844K344On44Oz5Lit44Gr44Gv44Oc44O844OA44O844GM5o+P44GL44KM44Gq44GP44Gq44KLXG4gICAgLy/jgqLjg4vjg6Hjg7zjgrfjg6fjg7PkuK3jgavjga/jg5zjg7zjg4Djg7zjga/lvqnmtLvjgZfjgabjgYTjgZ/jgbvjgYbjgYzoh6rnhLbjgarjga7jgadmdW5jRG9SZW5kZXLlpJbjgaflrp/ooYzjgZnjgotcbiAgICBmcmFtZS5mcmFtZUJvcmRlcldpZHRoRGVmYXVsdCA9IHRvLmZyYW1lQm9yZGVyV2lkdGhEZWZhdWx0O1xuICAgIGZyYW1lLmZyYW1lQm9yZGVyV2lkdGhGb2N1c2VkID0gdG8uZnJhbWVCb3JkZXJXaWR0aEZvY3VzZWQ7XG4gICAgZnJhbWUuaHRtbEVsZW1lbnQuc3R5bGUuYm9yZGVyV2lkdGggPSBmcmFtZS5mcmFtZUJvcmRlcldpZHRoRm9jdXNlZDtcblxuICAgIHZhciBmdW5jRG9SZW5kZXIgPSBmdW5jdGlvbiAoKSB7XG5cblxuICAgICAgICBpZiAobW9kZWwgJiYgbW9kZWwucmVzdG9yZVBvc2l0aW9uID09IGZhbHNlKSB7XG4gICAgICAgICAgICAvL+S9jee9ruOBruenu+WLleOCkuS8tOOCj+OBquOBhOWgtOWQiO+8iOacgOWwj+WMluOBi+OCieaIu+OBmeOBqOOBjeOBquOBqSlcbiAgICAgICAgICAgIHRvLmxlZnQgPSBjcnIubGVmdDtcbiAgICAgICAgICAgIHRvLnRvcCA9IGNyci50b3A7XG4gICAgICAgIH1cblxuICAgICAgICBmcmFtZS5zZXRQb3NpdGlvbih0by5sZWZ0LCB0by50b3ApO1xuXG4gICAgICAgIHZhciBmb3JjZSA9IHRydWU7XG4gICAgICAgIGZyYW1lLnNldFNpemUodG8ud2lkdGgsIHRvLmhlaWdodCwgZm9yY2UpO1xuXG4gICAgICAgIGZyYW1lLnNldFJlc2l6YWJsZSh0by5yZXNpemFibGUpO1xuICAgICAgICBmcmFtZS5zZXRNb3ZhYmxlKHRvLm1vdmFibGUpO1xuXG4gICAgICAgIC8v44Oq44K544OI44Ki44GX44Gf44KJ44OH44O844K/44Gv44Kv44Oq44Ki44GZ44KLXG4gICAgICAgIG1lLmNsZWFyV2luZG93U3RhdHMobW9kZWwucmVzdG9yZU1vZGUpO1xuXG4gICAgICAgIGlmIChtZS5rZXlMaXN0ZW5lcikge1xuICAgICAgICAgICAgLy/jgr/jgqTjg4jjg6vjg5Djg7znhKHjgZfmnIDlpKfljJbnirbmhYvjgYvjgonmiLvjgZnjgZ/jgoHjga7jgq3jg7zjg6rjgrnjg4rjg7zjga/liYrpmaTjgZnjgotcblxuICAgICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBtZS5rZXlMaXN0ZW5lcik7XG4gICAgICAgICAgICBpZiAoZnJhbWUuaWZyYW1lKSB7XG4gICAgICAgICAgICAgICAgZnJhbWUuaWZyYW1lLmNvbnRlbnRXaW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIG1lLmtleUxpc3RlbmVyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG1lLmtleUxpc3RlbmVyID0gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIG1lLndpbmRvd01vZGUgPSAnZGVmYXVsdCc7XG5cbiAgICAgICAgaWYgKG1vZGVsICYmIG1vZGVsLmZvcmNlU2hvd0ZyYW1lQ29tcG9uZW50cykge1xuICAgICAgICAgICAgLy/jgqbjgqPjg7Pjg4njgqbjga7jg6Ljg7zjg4nlpInmm7TliY3jgavlj6/oppbnirbmhYvjgavjgYLjgaPjgZ/jg5Xjg6zjg7zjg6DjgrPjg7Pjg53jg7zjg43jg7Pjg4jvvIjplonjgZjjgovjg5zjgr/jg7PpoZ7vvInjgpLlj6/oppbnirbmhYvjgavjgZnjgotcbiAgICAgICAgICAgIGZyYW1lLnNob3dBbGxWaXNpYmxlRnJhbWVDb21wb25lbnRzKCk7XG4gICAgICAgIH1cblxuICAgICAgICBmcmFtZS5zaG93KCk7XG5cbiAgICAgICAgdmFyIGV2ZW50VHlwZSA9ICdyZXN0b3JlZCc7XG4gICAgICAgIGlmIChtb2RlbCAmJiBtb2RlbC5ldmVudFR5cGUpIHtcbiAgICAgICAgICAgIGV2ZW50VHlwZSA9IG1vZGVsLmV2ZW50VHlwZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChtb2RlbCAmJiBtb2RlbC5jYWxsYmFjaykge1xuICAgICAgICAgICAgbW9kZWwuY2FsbGJhY2soXG4gICAgICAgICAgICAgICAgbWUuZnJhbWUsIHtldmVudFR5cGU6IGV2ZW50VHlwZX0pO1xuICAgICAgICB9XG4gICAgICAgIGlmIChtZS5ldmVudExpc3RlbmVyc1tldmVudFR5cGVdKSB7XG4gICAgICAgICAgICBtZS5ldmVudExpc3RlbmVyc1tldmVudFR5cGVdKG1lLmZyYW1lLCB7ZXZlbnRUeXBlOiBldmVudFR5cGV9KTtcbiAgICAgICAgfVxuICAgIH07XG5cblxuICAgIGlmIChtb2RlbCAmJiBtb2RlbC5hbmltYXRpb24pIHtcbiAgICAgICAgbWUuYW5pbWF0ZUZyYW1lKHtcbiAgICAgICAgICAgIGR1cmF0aW9uOiBtb2RlbC5kdXJhdGlvbiA/IG1vZGVsLmR1cmF0aW9uIDogbWUuYW5pbWF0aW9uRHVyYXRpb24sXG4gICAgICAgICAgICBmcmFtZTogZnJhbWUsXG4gICAgICAgICAgICBmcm9tOiBjcnIsXG4gICAgICAgICAgICB0bzogdG8sXG4gICAgICAgICAgICBjYWxsYmFjazogZnVuY0RvUmVuZGVyXG4gICAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG5cbiAgICAgICAgZnVuY0RvUmVuZGVyKCk7XG4gICAgfVxuXG5cbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgbWUucmVzaXplTGlzdGVuZXIpO1xufTtcblxuXG5XaW5kb3dFdmVudEhlbHBlci5wcm90b3R5cGUuYW5pbWF0ZUZyYW1lID0gZnVuY3Rpb24gKG1vZGVsKSB7XG4gICAgdmFyIG1lID0gdGhpcztcbiAgICB2YXIgbmVlZFJlcXVlc3RGb2N1c0FmdGVyQW5pbWF0aW9uID0gZmFsc2U7XG5cblxuICAgIHZhciBmcm9tQWxwaGEgPSAhaXNOYU4obW9kZWwuZnJvbUFscGhhKSA/IG1vZGVsLmZyb21BbHBoYSA6IDEuMDtcblxuICAgIHZhciBmcm9tID0gbW9kZWwuZnJvbTtcbiAgICB2YXIgdG8gPSBtb2RlbC50bztcblxuICAgIHZhciBhbmltYXRvciA9IG5ldyBDU2ltcGxlTGF5b3V0QW5pbWF0b3IoKTtcblxuICAgIGFuaW1hdG9yLnNldChtb2RlbC5mcmFtZSlcbiAgICAgICAgLnNldER1cmF0aW9uKG1vZGVsLmR1cmF0aW9uID8gbW9kZWwuZHVyYXRpb24gOiBtZS5hbmltYXRpb25EdXJhdGlvbilcbiAgICAgICAgLmZyb21Qb3NpdGlvbihmcm9tLmxlZnQsIGZyb20udG9wLCAnTEVGVF9UT1AnKVxuICAgICAgICAudG9Qb3NpdGlvbih0by5sZWZ0LCB0by50b3AsICdMRUZUX1RPUCcpXG4gICAgICAgIC5mcm9tV2lkdGgoZnJvbS53aWR0aClcbiAgICAgICAgLmZyb21IZWlnaHQoZnJvbS5oZWlnaHQpXG4gICAgICAgIC50b1dpZHRoKHRvLndpZHRoKVxuICAgICAgICAudG9IZWlnaHQodG8uaGVpZ2h0KVxuICAgICAgICAuZnJvbUFscGhhKGZyb21BbHBoYSlcbiAgICAgICAgLnRvQWxwaGEoKG1vZGVsLnRvQWxwaGEgPT0gMCkgPyAwIDogMS4wKVxuICAgICAgICAuc3RhcnQoMCwgbmVlZFJlcXVlc3RGb2N1c0FmdGVyQW5pbWF0aW9uKVxuICAgICAgICAudGhlbihmdW5jdGlvbiAoYW5pbWF0b3JPYmopIHtcbiAgICAgICAgICAgIG1vZGVsWydjYWxsYmFjayddKCk7XG4gICAgICAgIH0pO1xufTtcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuV2luZG93RXZlbnRIZWxwZXIucHJvdG90eXBlLnNldHVwRGVmYXVsdEV2ZW50cyA9IGZ1bmN0aW9uIChtb2RlbCkge1xuICAgIHZhciBtZSA9IHRoaXM7XG5cblxuICAgIGlmIChtZS5tYXhpbWl6ZUJ1dHRvbikge1xuXG4gICAgICAgIC8v44Kk44OZ44Oz44OI44Gv44Kq44O844OQ44O844Op44Kk44OJ44GV44KM44KLXG4gICAgICAgIG1lLmZyYW1lLm9uKG1lLm1heGltaXplQnV0dG9uLCAnY2xpY2snLCBmdW5jdGlvbiAoX2ZyYW1lLCBldnQpIHtcblxuICAgICAgICAgICAgLy/jgqbjgqPjg7Pjg4njgqbjgpLmnIDlpKfljJbjgZnjgotcbiAgICAgICAgICAgIF9mcmFtZS5jb250cm9sLmRvTWF4aW1pemUoe1xuICAgICAgICAgICAgICAgIC8vdHJ1ZTrmnIDlpKfljJbjgZfjgZ/jgajjgY3jgavjgr/jgqTjg4jjg6vjg5Djg7zjgpLpmqDjgZlcbiAgICAgICAgICAgICAgICBoaWRlVGl0bGVCYXI6IChtb2RlbC5tYXhpbWl6ZVdpdGhvdXRUaXRsZUJhciA9PT0gdHJ1ZSkgPyB0cnVlIDogZmFsc2UsXG4gICAgICAgICAgICAgICAgLy/mnIDlpKfljJbjgZnjgovjgajjgY3jga7jgqLjg4vjg6Hjg7zjgrfjg6fjg7PmmYLplpNcbiAgICAgICAgICAgICAgICBkdXJhdGlvbjogMTAwLFxuICAgICAgICAgICAgICAgIC8v44K/44Kk44OI44Or44OQ44O844KS6Zqg44GZ44Go44GN44Gv44Oc44K/44Oz44Gn5b6p5biw44Gn44GN44Gq44GE44Gu44Gn5aSJ44KP44KK44Gr44Kt44O85YWl5Yqb44KS5L2/44GE44Gf44GE5aC05ZCI44Gv44Kt44O844KS5oyH5a6a44Gn44GN44KLXG4gICAgICAgICAgICAgICAgcmVzdG9yZUtleTogbW9kZWwucmVzdG9yZUtleSA/IG1vZGVsLnJlc3RvcmVLZXkgOiAnRXNjYXBlJyxcbiAgICAgICAgICAgICAgICAvL+acgOWkp+WMluOBi+OCieW+qeW4sOOBmeOCi+OBvuOBp+OBruOCouODi+ODoeODvOOCt+ODp+ODs+aZgumWk++8iOOCv+OCpOODiOODq+ODkOODvOOCkumaoOOBmeOBqOOBjeOBr+OBk+OBk+OBp+aMh+WumuWPr+iDvSlcbiAgICAgICAgICAgICAgICByZXN0b3JlRHVyYXRpb246IDEwMCxcbiAgICAgICAgICAgICAgICAvL+OCpuOCo+ODs+ODieOCpuOCkuacgOWkp+WMlue1guS6huOCkuWPl+OBkeWPluOCi+OCs+ODvOODq+ODkOODg+OCr+mWouaVsFxuICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbiAoZnJhbWUsIGluZm8pIHtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIC8v5pyA5aSn5YyW44GL44KJ5oi744Gj44Gf44Go44GN44Gr5ZG844Gz5Ye644GV44KM44KL44Kz44O844Or44OQ44OD44KvKOOCv+OCpOODiOODq+ODkOODvOOBjOeEoeOBhOWgtOWQiClcbiAgICAgICAgICAgICAgICByZXN0b3JlQ2FsbGJhY2s6IGZ1bmN0aW9uIChmcmFtZSwgaW5mbykge1xuICAgICAgICAgICAgICAgICAgICBqc0ZyYW1lLnNob3dUb2FzdCh7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiBmcmFtZS5nZXROYW1lKCkgKyAnICcgKyBpbmZvLmV2ZW50VHlwZVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuXG4gICAgaWYgKG1lLmRlbWF4aW1pemVCdXR0b24pIHtcbiAgICAgICAgbWUuZnJhbWUub24obWUuZGVtYXhpbWl6ZUJ1dHRvbiwgJ2NsaWNrJywgZnVuY3Rpb24gKF9mcmFtZSwgZXZ0KSB7XG4gICAgICAgICAgICAvL+OCpuOCo+ODs+ODieOCpuOCkuacgOWkp+WMlueKtuaFi+OBi+OCieW+qeW4sOOBmeOCi1xuICAgICAgICAgICAgX2ZyYW1lLmNvbnRyb2wuZG9EZW1heGltaXplKFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gZHVyYXRpb246IDEwMCxcbiAgICAgICAgICAgICAgICAgICAgLy8gY2FsbGJhY2s6IChmcmFtZSwgaW5mbykgPT4ge31cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKG1lLm1pbmltaXplQnV0dG9uKSB7XG4gICAgICAgIG1lLmZyYW1lLm9uKG1lLm1pbmltaXplQnV0dG9uLCAnY2xpY2snLCBmdW5jdGlvbiAoX2ZyYW1lLCBldnQpIHtcblxuICAgICAgICAgICAgLy8nbWluaW1pemVCdXR0b24n44GM5oq844GV44KM44Gf44Go44GN44Gr44CB5pyA5bCP5YyW44GX44Gf44GE5aC05ZCIXG4gICAgICAgICAgICBfZnJhbWUuY29udHJvbC5kb01pbmltaXplKHtcbiAgICAgICAgICAgICAgICAvLyBkdXJhdGlvbjogMTAwLFxuICAgICAgICAgICAgICAgIC8vIGNhbGxiYWNrOiAoZnJhbWUsIGluZm8pID0+IHt9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAobWUuZGVtaW5pbWl6ZUJ1dHRvbikge1xuICAgICAgICBtZS5mcmFtZS5vbihtZS5kZW1pbmltaXplQnV0dG9uLCAnY2xpY2snLCBmdW5jdGlvbiAoX2ZyYW1lLCBldnQpIHtcbiAgICAgICAgICAgIF9mcmFtZS5jb250cm9sLmRvRGVtaW5pbWl6ZSh7XG4gICAgICAgICAgICAgICAgLy8gZHVyYXRpb246IDEwMCxcbiAgICAgICAgICAgICAgICAvLyBjYWxsYmFjazogKGZyYW1lLCBpbmZvKSA9PiB7fVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBpZiAobWUuaGlkZUJ1dHRvbikge1xuICAgICAgICBtZS5mcmFtZS5vbihtZS5oaWRlQnV0dG9uLCAnY2xpY2snLCBmdW5jdGlvbiAoX2ZyYW1lLCBldnQpIHtcbiAgICAgICAgICAgIF9mcmFtZS5jb250cm9sLmRvSGlkZSh7XG4gICAgICAgICAgICAgICAgYWxpZ246ICdDRU5URVJfQk9UVE9NJ1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBXaW5kb3dFdmVudEhlbHBlcjsiLCJleHBvcnQgeyBkZWZhdWx0IGFzIEpTRnJhbWUgfSBmcm9tICcuL0pTRnJhbWUuanMnOyJdLCJzb3VyY2VSb290IjoiIn0=