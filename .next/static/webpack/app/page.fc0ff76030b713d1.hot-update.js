"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./app/components/Albums/Albums.tsx":
/*!******************************************!*\
  !*** ./app/components/Albums/Albums.tsx ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Albums_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Albums.module.css */ \"(app-pages-browser)/./app/components/Albums/Albums.module.css\");\n/* harmony import */ var _Albums_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Albums_module_css__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\nconst Albums = ()=>{\n    _s();\n    const [albums, setAlbums] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        fetch(\"https://jsonplaceholder.typicode.com/albums\").then((response)=>response.json()).then((data)=>setAlbums(data));\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        class: \"bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 ...\",\n        children: albums.map((album)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_Albums_module_css__WEBPACK_IMPORTED_MODULE_2___default().card),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                    children: album.title\n                }, void 0, false, {\n                    fileName: \"/home/joe/Documents/The PAD Forum/Assignment/activity9-joeboadi/app/components/Albums/Albums.tsx\",\n                    lineNumber: 23,\n                    columnNumber: 11\n                }, undefined)\n            }, album.id, false, {\n                fileName: \"/home/joe/Documents/The PAD Forum/Assignment/activity9-joeboadi/app/components/Albums/Albums.tsx\",\n                lineNumber: 22,\n                columnNumber: 9\n            }, undefined))\n    }, void 0, false, {\n        fileName: \"/home/joe/Documents/The PAD Forum/Assignment/activity9-joeboadi/app/components/Albums/Albums.tsx\",\n        lineNumber: 20,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Albums, \"lc/MwnjIUvbE/gAfqQrGJiZthlY=\");\n_c = Albums;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Albums);\nvar _c;\n$RefreshReg$(_c, \"Albums\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL0FsYnVtcy9BbGJ1bXMudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQXVEO0FBQ2Q7QUFRekMsTUFBTUksU0FBYTs7SUFDakIsTUFBTSxDQUFDQyxRQUFRQyxVQUFVLEdBQUdMLCtDQUFRQSxDQUFVLEVBQUU7SUFFaERDLGdEQUFTQSxDQUFDO1FBQ1JLLE1BQU0sK0NBQ0hDLElBQUksQ0FBQ0MsQ0FBQUEsV0FBWUEsU0FBU0MsSUFBSSxJQUM5QkYsSUFBSSxDQUFDRyxDQUFBQSxPQUFRTCxVQUFVSztJQUM1QixHQUFHLEVBQUU7SUFFTCxxQkFDRSw4REFBQ0M7UUFBSUMsT0FBTTtrQkFDUlIsT0FBT1MsR0FBRyxDQUFDQyxDQUFBQSxzQkFDViw4REFBQ0g7Z0JBQW1CSSxXQUFXYixnRUFBVzswQkFDeEMsNEVBQUNlOzhCQUFJSCxNQUFNSSxLQUFLOzs7Ozs7ZUFEUkosTUFBTUssRUFBRTs7Ozs7Ozs7OztBQU0xQjtHQWxCTWhCO0tBQUFBO0FBb0JOLCtEQUFlQSxNQUFNQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9jb21wb25lbnRzL0FsYnVtcy9BbGJ1bXMudHN4P2RlYTAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIEZDIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0FsYnVtcy5tb2R1bGUuY3NzJztcblxuaW50ZXJmYWNlIEFsYnVtIHtcbiAgdXNlcklkOiBudW1iZXI7XG4gIGlkOiBudW1iZXI7XG4gIHRpdGxlOiBzdHJpbmc7XG59XG5cbmNvbnN0IEFsYnVtczogRkMgPSAoKSA9PiB7XG4gIGNvbnN0IFthbGJ1bXMsIHNldEFsYnVtc10gPSB1c2VTdGF0ZTxBbGJ1bVtdPihbXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBmZXRjaCgnaHR0cHM6Ly9qc29ucGxhY2Vob2xkZXIudHlwaWNvZGUuY29tL2FsYnVtcycpXG4gICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAudGhlbihkYXRhID0+IHNldEFsYnVtcyhkYXRhIGFzIEFsYnVtW10pKTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzcz1cImJnLWdyYWRpZW50LXRvLXIgZnJvbS1ncmVlbi00MDAgdG8tYmx1ZS01MDAgaG92ZXI6ZnJvbS1waW5rLTUwMCBob3Zlcjp0by15ZWxsb3ctNTAwIC4uLlwiPlxuICAgICAge2FsYnVtcy5tYXAoYWxidW0gPT4gKFxuICAgICAgICA8ZGl2IGtleT17YWxidW0uaWR9IGNsYXNzTmFtZT17c3R5bGVzLmNhcmR9PlxuICAgICAgICAgIDxoMz57YWxidW0udGl0bGV9PC9oMz5cbiAgICAgICAgPC9kaXY+XG4gICAgICApKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEFsYnVtczsiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInN0eWxlcyIsIkFsYnVtcyIsImFsYnVtcyIsInNldEFsYnVtcyIsImZldGNoIiwidGhlbiIsInJlc3BvbnNlIiwianNvbiIsImRhdGEiLCJkaXYiLCJjbGFzcyIsIm1hcCIsImFsYnVtIiwiY2xhc3NOYW1lIiwiY2FyZCIsImgzIiwidGl0bGUiLCJpZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/Albums/Albums.tsx\n"));

/***/ })

});